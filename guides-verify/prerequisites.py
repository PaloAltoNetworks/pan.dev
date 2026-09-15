"""Creates / fetches real tenant objects so doc examples can run with live IDs.

Placeholder IDs in the guides encode their entity type via a 2-3 char prefix
(0RL=rule, 0AP=application, 0UG=user group, ...). This provider maps a prefix
(or a $VAR name) to a real ID, creating throwaway objects on demand and tracking
them for cleanup.
"""
from __future__ import annotations

import io
import struct
import zlib

from client import ApiClient

# Minimal valid 1x1 PNG (generated, not read from disk) for asset uploads.
def _tiny_png() -> bytes:
    def chunk(typ, data):
        c = typ + data
        return struct.pack(">I", len(data)) + c + struct.pack(">I", zlib.crc32(c) & 0xFFFFFFFF)
    sig = b"\x89PNG\r\n\x1a\n"
    ihdr = struct.pack(">IIBBBBB", 1, 1, 8, 2, 0, 0, 0)
    raw = b"\x00\xff\x00\x00"  # one red pixel row
    idat = zlib.compress(raw)
    return sig + chunk(b"IHDR", ihdr) + chunk(b"IDAT", idat) + chunk(b"IEND", b"")


TINY_PNG = _tiny_png()
TINY_PAC = b"function FindProxyForURL(url, host) { return 'DIRECT'; }\n"


class Prerequisites:
    def __init__(self, client: ApiClient, log, readonly: bool = False):
        import os
        self.c = client
        self.log = log
        self.readonly = readonly         # never create objects; reuse existing ones
        self.cache: dict[str, str] = {}
        self.created: list[tuple] = []   # (kind, path-or-callable) for cleanup
        self.tag = os.urandom(3).hex()   # run-unique suffix to avoid name collisions

    # ---- generic helpers -------------------------------------------------
    def _post(self, path, body):
        r = self.c.request("POST", path, json_body=body)
        return r

    def _first_id(self, list_path, id_field="id"):
        r = self.c.request("GET", list_path)
        if r.status_code == 200:
            data = r.json().get("data", [])
            for item in data:
                if id_field in item:
                    return item[id_field]
        return None

    def _first_id_prefixed(self, list_path, prefix):
        """First id in a (possibly mixed) list whose value starts with prefix.

        Used for read-only lookups where a listing mixes entity kinds
        (e.g. /policy/{rtype} returns Sections and Rules).
        """
        r = self.c.request("GET", list_path)
        if r.status_code == 200:
            data = r.json().get("data", [])
            for item in data:
                v = item.get("id", "")
                if isinstance(v, str) and v.startswith(prefix):
                    return v
        return None

    # ---- read-only existing-object lookups (no creation) ----------------
    def _existing(self, kind, rtype="security"):
        lookups = {
            "app": lambda: self._first_id("/applications?limit=25"),
            "ug": lambda: self._first_id("/user-groups?limit=1"),
            "dg": lambda: self._first_id("/device-groups?limit=1"),
            "ag": lambda: self._first_id("/application-groups?limit=1"),
            "user": lambda: self._first_id("/users?limit=1"),
            "device": lambda: self._first_id("/devices?limit=1"),
            "request": lambda: self._first_id("/user-requests?limit=1"),
            "rule": lambda: self._first_id_prefixed(f"/policy/{rtype}?limit=50", "0RL"),
        }
        fn = lookups.get(kind)
        return fn() if fn else None

    # ---- entity factories -----------------------------------------------
    def _create_rule(self, rtype="security"):
        bodies = {
            "security": {
                "name": "verify-harness security rule",
                "mode": "active",
                "scope": {"users": {"isAny": True}},
                "controls": {"developerToolsForExtensions": {"action": "block"}},
            },
            "access-and-data": {
                "name": "verify-harness a&d rule",
                "mode": "active",
                "scope": {"users": {"isAny": True}},
                "applications": {"saas": {"accessMode": "any"}},
                "access": {"action": "block"},
                "tracking": {"logLevel": "on", "sessionRecording": False},
            },
            "customization": {
                "name": "verify-harness customization rule",
                "mode": "active",
                "scope": {"users": {"isAny": True}},
                "controls": {"themeColor": {"mode": "custom", "color": "#485BFF"}},
            },
            "sign-in": {
                "name": "verify-harness sign-in rule",
                "mode": "active",
                "action": "allow",
                "scope": {"users": {"isAny": True}},
            },
        }
        r = self._post(f"/policy/{rtype}/rules", bodies[rtype])
        if r.status_code in (200, 201):
            rid = r.json().get("id")
            self.created.append(("rule", f"/policy/{rtype}/rules/{rid}"))
            return rid
        self.log(f"  ! could not create {rtype} rule prereq: {r.status_code} {r.text[:200]}")
        return None

    def _uniq(self):
        self._n = getattr(self, "_n", 0) + 1
        return f"{self.tag}-{self._n}"

    def _create_app(self):
        n = self._uniq()
        r = self._post("/applications/type/custom", {
            "type": "custom",
            "name": f"verify-harness-app-{n}",
            "description": "throwaway",
            "urls": [{"url": f"verify-harness-{n}.example.com"}],
        })
        if r.status_code in (200, 201):
            aid = r.json().get("id")
            self.created.append(("app", f"/applications/type/custom/{aid}"))
            return aid
        self.log(f"  ! could not create app prereq: {r.status_code} {r.text[:200]}")
        return None

    def _create_ug(self):
        n = self._uniq()
        r = self._post("/user-groups", {"name": f"verify-harness-ug-{n}", "userIds": []})
        if r.status_code in (200, 201):
            gid = r.json().get("id")
            self.created.append(("ug", f"/user-groups/{gid}"))
            return gid
        self.log(f"  ! could not create user-group prereq: {r.status_code} {r.text[:200]}")
        return None

    def _create_dg(self):
        n = self._uniq()
        r = self._post("/device-groups", {"name": f"verify-harness-dg-{n}", "platform": "Desktop Browser", "deviceIds": []})
        if r.status_code in (200, 201):
            gid = r.json().get("id")
            self.created.append(("dg", f"/device-groups/{gid}"))
            return gid
        self.log(f"  ! could not create device-group prereq: {r.status_code} {r.text[:200]}")
        return None

    def _create_ag(self):
        n = self._uniq()
        r = self._post("/application-groups", {"name": f"verify-harness-ag-{n}", "applications": []})
        if r.status_code in (200, 201):
            gid = r.json().get("id")
            self.created.append(("ag", f"/application-groups/{gid}"))
            return gid
        self.log(f"  ! could not create app-group prereq: {r.status_code} {r.text[:200]}")
        return None

    # cached variants (used only for non-creatable lookups / probes)
    def rule(self, rtype="security"):
        key = f"rule:{rtype}"
        if key not in self.cache:
            self.cache[key] = self._create_rule(rtype)
        return self.cache[key]

    def app(self):
        if "app" not in self.cache:
            self.cache["app"] = self._create_app()
        return self.cache["app"]

    def user_group(self):
        if "ug" not in self.cache:
            self.cache["ug"] = self._create_ug()
        return self.cache["ug"]

    def device_group(self):
        if "dg" not in self.cache:
            self.cache["dg"] = self._create_dg()
        return self.cache["dg"]

    def app_group(self):
        if "ag" not in self.cache:
            self.cache["ag"] = self._create_ag()
        return self.cache["ag"]

    def user_id(self):
        if "user" not in self.cache:
            self.cache["user"] = self._first_id("/users?limit=1") or "0US01NOUSERSXXXXXXXXXXXXXXXX"
        return self.cache["user"]

    def device_id(self):
        if "device" not in self.cache:
            self.cache["device"] = self._first_id("/devices?limit=1") or "0DV01NODEVICESXXXXXXXXXXXXXX"
        return self.cache["device"]

    def request_id(self):
        if "request" not in self.cache:
            self.cache["request"] = self._first_id("/user-requests?limit=1") or "0URL01NOREQXXXXXXXXXXXXXXXX"
        return self.cache["request"]

    def provider(self):
        if "provider" in self.cache:
            return self.cache["provider"]
        return None  # created inline by the cloud-storage scenario

    # ---- prefix / var resolution ----------------------------------------
    PREFIX = {
        "0RL": ("rule", None),
        "0US": ("user", None),
        "0UG": ("ug", None),
        "0DV": ("device", None),
        "0DG": ("dg", None),
        "0AP": ("app", None),
        "0AG": ("ag", None),
        "0CS": ("provider", None),
        "0URL": ("request", None),
    }

    VARS = {
        "RULE_ID": "rule",
        "APP_ID": "app",
        "UG_ID": "ug",
        "DG_ID": "dg",
        "GROUP_ID": "ag",
        "PROVIDER_ID": "provider",
        "REQUEST_ID": "request",
        "USER_ID": "user",
        "DEVICE_ID": "device",
    }

    def resolve_kind(self, kind, rtype="security"):
        if self.readonly and kind in ("rule", "app", "ug", "dg", "ag"):
            return self._existing(kind, rtype)
        if kind == "rule":
            return self.rule(rtype)
        if kind == "app":
            return self.app()
        if kind == "ug":
            return self.user_group()
        if kind == "dg":
            return self.device_group()
        if kind == "ag":
            return self.app_group()
        if kind == "user":
            return self.user_id()
        if kind == "device":
            return self.device_id()
        if kind == "request":
            return self.request_id()
        if kind == "provider":
            return self.provider()
        return None

    def alloc(self, kind, rtype="security"):
        """Allocate a FRESH object for a single call (no cross-call reuse).

        Creatable kinds get a brand-new object each time so that distinct
        placeholder IDs in one example map to distinct objects and no call
        depends on another call's leftover state.         User/device/request IDs
        cannot be created via the API, so a tenant sample is reused.

        In read-only mode nothing is ever created: every kind resolves to an
        existing tenant object (or None, which makes the caller skip).
        """
        if self.readonly:
            return self._existing(kind, rtype)
        if kind == "rule":
            return self._create_rule(rtype)
        if kind == "app":
            return self._create_app()
        if kind == "ug":
            return self._create_ug()
        if kind == "dg":
            return self._create_dg()
        if kind == "ag":
            return self._create_ag()
        # non-creatable: reuse tenant sample
        return self.resolve_kind(kind, rtype)

    def cleanup(self):
        for kind, path in reversed(self.created):
            try:
                self.c.request("DELETE", path)
            except Exception:
                pass
