"""Controlled write validation against the PROD_PB tenant.

Design principle: validate the documented request SHAPES without harming real
users/devices.

- Creatable objects (desktop app, device group, a&d rule) -> real create/patch/
  delete on THROWAWAY objects, never published (draft create+delete nets zero).
- Real devices -> reversible suspend+resume on ONE device only, with verify +
  rollback. Never archive/delete a real device.
- Irreversible people-facing actions (device delete; user-request approve/
  decline/revoke) -> shape check with a BOGUS id: a non-schema error (404/409)
  proves the route + body are accepted without touching a real person.

Nothing is published. Run: GUIDES_PROFILE=PROD_PB .venv/bin/python prod_write_probe.py
"""
from __future__ import annotations

import json
import os

from config import Credentials
from client import ApiClient

BOGUS_DEVICE = "0DE01BOGUSDEVICEXXXXXXXXXXXX"
BOGUS_REQ = "0BR01BOGUSREQUESTXXXXXXXXXXX"

c = ApiClient(Credentials(os.environ.get("GUIDES_PROFILE", "PROD_PB")))
assert c.creds.env == "prod", "this probe is for PROD_PB"

results = []


def step(label, method, path, body=None, note=""):
    r = c.request(method, path, json_body=body)
    txt = r.text[:240].replace("\n", " ")
    results.append({"label": label, "method": method, "path": path,
                    "status": r.status_code, "body": txt, "note": note})
    print(f"[{r.status_code}] {label}: {method} {path}")
    if txt:
        print(f"        {txt[:200]}")
    return r


def created_id(r):
    try:
        return r.json().get("id")
    except Exception:
        return None


print("\n===== #1 Local desktop app: full lifecycle (throwaway, no publish) =====")
r = step("desktop create", "POST", "/applications/type/localdesktopcustom", {
    "name": "verify-harness-desktop", "type": "localdesktopcustom",
    "description": "throwaway (delete me)",
    "executables": {"data": [{"originalFileName": "verify.exe"}]},
})
app_id = created_id(r)
if app_id:
    step("desktop get", "GET", f"/applications/type/localdesktopcustom/{app_id}")
    step("desktop patch", "PATCH", f"/applications/type/localdesktopcustom/{app_id}", {
        "type": "localdesktopcustom",
        "executables": {"data": [
            {"originalFileName": "verify.exe"},
            {"originalFileName": "verify-helper.exe"},
        ]},
    })
    step("desktop delete", "DELETE", f"/applications/type/localdesktopcustom/{app_id}")


print("\n===== #5 Device group serial-number attribute (throwaway, no publish) =====")
r = step("dg create", "POST", "/device-groups", {
    "name": "verify-harness-dg", "platform": "Desktop Browser",
    "attributes": {"diskEncryption": {"enabled": True}},
})
dg_id = created_id(r)
if dg_id:
    step("dg patch serialsToAdd/Remove", "PATCH", f"/device-groups/{dg_id}", {
        "serialsToAdd": ["C02XK1ABJGH5"], "serialsToRemove": ["C02XK0OLDSER"],
    })
    step("dg patch attributes", "PATCH", f"/device-groups/{dg_id}", {
        "attributes": {"diskEncryption": {"enabled": True}},
    })
    step("dg delete", "DELETE", f"/device-groups/{dg_id}")


print("\n===== #2 DLP rule-side validation (throwaway a&d rule, no publish) =====")
r = step("a&d rule create", "POST", "/policy/access-and-data/rules", {
    "name": "verify-harness-dlp-rule", "mode": "active",
    "scope": {"users": {"isAny": True}},
    "applications": {"saas": {"accessMode": "any"}},
    "access": {"action": "allow"},
    "tracking": {"logLevel": "on", "sessionRecording": False},
})
rule_id = created_id(r)
if rule_id:
    step("dlp bogus id + control (expect 400 validated)", "PATCH",
         f"/policy/access-and-data/rules/{rule_id}", {
             "dataControls": {"dlpProfileId": "999999999",
                              "fileProtection": {"fileUpload": {"action": "block"}}},
         }, note="doc: id validated against EDLP -> 400 if not found")
    step("dlp id alone (expect 400 cannot stand alone)", "PATCH",
         f"/policy/access-and-data/rules/{rule_id}", {
             "dataControls": {"dlpProfileId": "999999999"},
         }, note="doc: dlpProfileId must accompany a control")
    step("a&d rule delete", "DELETE", f"/policy/access-and-data/rules/{rule_id}")


print("\n===== #4 Device actions: shape check with BOGUS id (no real device touched) =====")
for action in ["suspend", "resume", "archive", "restore", "delete", "force-reauth"]:
    step(f"device {action} (bogus id)", "POST", f"/devices/{action}",
         {"deviceIds": [BOGUS_DEVICE]},
         note="non-schema error => route+body OK")


print("\n===== #3 User-request actions: shape check with BOGUS id (no real request touched) =====")
step("user-request action approve (bogus id)", "POST",
     f"/user-requests/{BOGUS_REQ}/action",
     {"action": "approve", "adminBypassTimeframe": "24h", "adminComment": "verify"},
     note="non-schema error => route+body OK")
step("user-request action decline (bogus id)", "POST",
     f"/user-requests/{BOGUS_REQ}/action",
     {"action": "decline", "adminComment": "verify"})
step("user-request revoke (bogus id)", "POST",
     f"/user-requests/{BOGUS_REQ}/revoke", {"revokerComment": "verify"})


from config import OUT_DIR
OUT_DIR.mkdir(exist_ok=True)
(OUT_DIR / "prod_write_probe.json").write_text(json.dumps(results, indent=2))
print(f"\nSaved {len(results)} results to out/prod_write_probe.json")
