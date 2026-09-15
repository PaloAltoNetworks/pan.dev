"""Capture real response shapes from qa_staging for doc response examples.

Read-only: GET endpoints only (plus pendingChanges). Prints label + status +
pretty JSON so the shapes can be generalized/trimmed into the guides.
"""
from __future__ import annotations
import json, os
from config import Credentials
from client import ApiClient

c = ApiClient(Credentials(os.environ.get("GUIDES_PROFILE", "QA_STAGING")))


def show(label, path):
    try:
        r = c.request("GET", path)
        print(f"\n########## {label} :: GET {path} -> {r.status_code}")
        try:
            print(json.dumps(r.json(), indent=2)[:2600])
        except Exception:
            print(r.text[:800])
        return r.json() if r.status_code == 200 else None
    except Exception as e:
        print(f"\n########## {label} :: ERROR {str(e)[:160]}")
        return None


def first_id(obj, key="data"):
    try:
        d = obj.get(key) if isinstance(obj, dict) else obj
        return d[0]["id"]
    except Exception:
        return None


apps = show("applications.list", "/applications?limit=2")
aid = first_id(apps)
if aid:
    # need the type to build the typed path; grab from the item
    t = apps["data"][0].get("type", "custom")
    show("applications.get", f"/applications/type/{t}/{aid}")
show("applications.categories", "/applications/categories")
show("applications.plugins", "/applications/plugins?limit=2")

ag = show("application-groups.list", "/application-groups?limit=2")
agid = first_id(ag)
if agid:
    show("application-groups.get", f"/application-groups/{agid}")

ug = show("user-groups.list", "/user-groups?limit=2")
ugid = first_id(ug)
if ugid:
    show("user-groups.get", f"/user-groups/{ugid}")

us = show("users.list", "/users?limit=2")
uid = first_id(us)
if uid:
    show("users.get", f"/users/{uid}")

show("devices.list", "/devices?limit=1")

for t in ["security", "access-and-data", "sign-in", "customization"]:
    pol = show(f"policy.{t}.list", f"/policy/{t}?limit=5")
    # find first rule id (0RL)
    rid = None
    try:
        for it in pol.get("data", []):
            if str(it.get("id", "")).startswith("0RL"):
                rid = it["id"]; break
    except Exception:
        pass
    if rid:
        show(f"policy.{t}.get-rule", f"/policy/{t}/rules/{rid}")

show("draft.pendingChanges", "/configuration-management/draft/pendingChanges")
