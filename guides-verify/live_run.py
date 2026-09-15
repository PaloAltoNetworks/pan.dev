"""Layer 2: execute each documented call against the sandbox tenant.

Each curl example is verified independently: prerequisite objects are created
(or reused) so real IDs can be substituted for the doc's placeholders, the
request is sent, and the HTTP status is recorded. All created objects are
deleted at the end. Runs against the QA "bughunt" sandbox only.
"""
from __future__ import annotations

import copy
import json
import re
from pathlib import Path

from config import Credentials, GUIDES_DIR, SPEC_PATH, OUT_DIR, redact
from client import ApiClient
from extract import all_guide_files, extract_blocks, _split_commands, parse_curl, parse_exports
from prerequisites import Prerequisites, TINY_PNG, TINY_PAC

PLACEHOLDER_PREFIXES = ["0URL", "0RL", "0SR", "0US", "0UG", "0DV", "0DG",
                        "0AP", "0AG", "0AS", "0CS", "0CV"]
PLACEHOLDER_RE = re.compile(r"0[A-Z]{2,3}[0-9A-Z.]*")
VAR_RE = re.compile(r"\$\{?([A-Z_][A-Z0-9_]*)\}?")
DOC_STATUS_RE = re.compile(r"`?(200|201|202|204|400|401|403|404|409|422)\b")


SCHEMA_ERR = [
    "decode field", "unable to detect sum type variant", "unexpected field",
    "field required", "invalid value", "unsupported query parameter",
    "invalid protocol", "cannot unmarshal", "decode params", "unknown field",
    "invalid request",
]
ENV_ERR = [
    "not enabled", "not found for this tenant", "attribute is not enabled",
]
STATE_ERR = [
    "already exists", "does not exist in the rule", "cannot add and remove",
    "referenced by rules", "invalid status transition", "unexpected_device_status",
    "not found",  # e.g. deleting/patching an id that a prior example removed
]


def classify_error(status: int, body: str) -> str:
    b = body.lower()
    for kw in ENV_ERR:
        if kw in b:
            return "env"
    for kw in SCHEMA_ERR:
        if kw in b:
            return "schema"
    for kw in STATE_ERR:
        if kw in b:
            return "state"
    if status >= 500:
        return "state"  # usually downstream of a failed prerequisite
    return "other"


def is_placeholder(tok: str) -> bool:
    if not tok.startswith("0"):
        return False
    if "..." in tok or "EXAMPLE" in tok or "XX" in tok:
        return True
    return False


def prefix_of(tok: str) -> str | None:
    for p in PLACEHOLDER_PREFIXES:
        if tok.startswith(p):
            return p
    return None


class LiveRunner:
    def __init__(self, creds: Credentials, readonly: bool = False):
        self.creds = creds
        self.readonly = readonly
        self.secrets = creds.secret_values()
        self.client = ApiClient(creds)
        self.logs: list[str] = []
        self.prereq = Prerequisites(self.client, self.log, readonly=readonly)
        self.results: list[dict] = []

    def log(self, msg: str):
        self.logs.append(redact(msg, self.secrets))

    # ---- substitution ----------------------------------------------------
    def rtype_from_path(self, path: str) -> str:
        m = re.search(r"/policy/([a-z-]+)/", path + "/")
        if m and m.group(1) in ("security", "access-and-data", "customization", "sign-in"):
            return m.group(1)
        return "security"

    def _resolve_token(self, raw, kind, rtype, cc):
        if raw in cc:
            return cc[raw]
        val = self.prereq.alloc(kind, rtype) if kind else None
        cc[raw] = val
        return val

    def sub_path(self, path: str, rtype: str, cc: dict) -> tuple[str, bool]:
        """Substitute $VARS and placeholder IDs in a URL path. Returns (path, ok)."""
        ok = [True]

        def repl_var(m):
            name = m.group(1)
            if name == "TYPE":
                return rtype
            kind = Prerequisites.VARS.get(name)
            val = self._resolve_token(m.group(0), kind, rtype, cc)
            if val:
                return val
            ok[0] = False
            return m.group(0)

        path = VAR_RE.sub(repl_var, path)

        def repl_ph(m):
            tok = m.group(0)
            if not is_placeholder(tok):
                return tok
            p = prefix_of(tok)
            kind = Prerequisites.PREFIX.get(p, (None,))[0] if p else None
            val = self._resolve_token(tok, kind, rtype, cc)
            if val:
                return val
            ok[0] = False
            return tok

        path = PLACEHOLDER_RE.sub(repl_ph, path)
        return path, ok[0]

    def sub_body(self, obj, rtype: str, cc: dict):
        ok = [True]

        def walk(o):
            if isinstance(o, dict):
                return {k: walk(v) for k, v in o.items()}
            if isinstance(o, list):
                return [walk(v) for v in o]
            if isinstance(o, str):
                s = o
                if is_placeholder(s):
                    p = prefix_of(s)
                    kind = Prerequisites.PREFIX.get(p, (None,))[0] if p else None
                    val = self._resolve_token(s, kind, rtype, cc)
                    if val:
                        return val
                    ok[0] = False
                    return s

                def rv(m):
                    name = m.group(1)
                    if name == "TYPE":
                        return rtype
                    kind = Prerequisites.VARS.get(name)
                    v = self._resolve_token(m.group(0), kind, rtype, cc)
                    if v:
                        return v
                    ok[0] = False  # could not allocate prereq -> caller will SKIP
                    return m.group(0)
                return VAR_RE.sub(rv, s)
            return o

        return walk(copy.deepcopy(obj)), ok[0]

    # ---- expected status -------------------------------------------------
    def doc_status(self, block) -> int | None:
        for text in (block.context_after, block.context_before):
            m = DOC_STATUS_RE.search(text)
            if m:
                return int(m.group(1))
        return None

    # ---- execution -------------------------------------------------------
    def run_call(self, rel, block, call):
        rtype = self.rtype_from_path(call.path)
        cc: dict = {}  # per-call token -> resolved value

        if self.readonly and call.method != "GET":
            self.results.append({
                "file": rel, "line": block.start_line, "heading": block.heading,
                "method": call.method, "path": call.path, "resolved_path": call.path,
                "doc_status": self.doc_status(block),
                "outcome": "SKIPPED", "detail": "write skipped (read-only prod mode)",
            })
            return

        path, pok = self.sub_path(call.path, rtype, cc)
        if call.inline_query:
            q = re.sub(VAR_RE, lambda m: rtype if m.group(1) == "TYPE" else m.group(0), call.inline_query)
            path = f"{path}?{q}"

        # bodies
        body_json = None
        bok = True
        if call.body_json is not None:
            body_json, bok = self.sub_body(call.body_json, rtype, cc)

        result = {
            "file": rel, "line": block.start_line, "heading": block.heading,
            "method": call.method, "path": call.path,
            "resolved_path": path, "doc_status": self.doc_status(block),
        }

        if "..." in path or (not pok) or (not bok):
            result["outcome"] = "SKIPPED"
            result["detail"] = "unresolved placeholder/truncated id"
            self.results.append(result)
            return

        try:
            files = None
            data = None
            if call.is_multipart:
                # asset upload: choose fixture by endpoint
                if "pac-file" in path:
                    files = {"file": ("proxy.pac", TINY_PAC, "application/octet-stream")}
                else:
                    files = {"file": ("image.png", TINY_PNG, "image/png")}
            r = self.client.request(call.method, path, json_body=body_json, files=files, data=data)
            result["status"] = r.status_code
            body_txt = r.text[:300].replace("\n", " ")
            result["response"] = redact(body_txt, self.secrets)

            # capture created ids for cleanup
            if call.method == "POST" and r.status_code in (200, 201):
                try:
                    j = r.json()
                    new_id = j.get("id")
                    if new_id and "/rules" in path and "/policy/" in path:
                        self.prereq.created.append(("rule", path.split("?")[0] + "/" + new_id))
                    elif new_id and "/applications/type/" in path:
                        self.prereq.created.append(("app", path.split("?")[0] + "/" + new_id))
                    elif new_id and path.endswith("/user-groups"):
                        self.prereq.created.append(("ug", "/user-groups/" + new_id))
                    elif new_id and path.endswith("/device-groups"):
                        self.prereq.created.append(("dg", "/device-groups/" + new_id))
                    elif new_id and path.endswith("/application-groups"):
                        self.prereq.created.append(("ag", "/application-groups/" + new_id))
                except Exception:
                    pass

            # outcome logic
            expected = result["doc_status"]
            publish_409_ok = path.endswith("/draft/publish") and r.status_code == 409
            if 200 <= r.status_code < 300:
                result["outcome"] = "PASS"
            elif publish_409_ok:
                result["outcome"] = "PASS"
                result["detail"] = "409 = empty draft (documented)"
            elif expected and r.status_code == expected:
                result["outcome"] = "PASS"
                result["detail"] = f"matches documented {expected}"
            else:
                cls = classify_error(r.status_code, body_txt)
                result["error_class"] = cls
                if cls == "schema":
                    result["outcome"] = "FAIL"  # request shape rejected -> real doc bug
                elif cls == "env":
                    result["outcome"] = "ENV"   # feature/data not available on this tenant
                else:
                    result["outcome"] = "INDETERMINATE"  # state/semantic dependent
        except Exception as e:
            result["outcome"] = "ERROR"
            result["detail"] = redact(str(e), self.secrets)[:200]
        self.results.append(result)

    def run(self):
        files = all_guide_files(GUIDES_DIR)
        for f in files:
            rel = str(f.relative_to(GUIDES_DIR))
            for block in extract_blocks(f):
                if block.lang not in ("bash", "sh", "shell"):
                    continue
                for cmd in _split_commands(block.content):
                    call = parse_curl(cmd)
                    if not call or call.is_auth_call:
                        continue
                    if call.path.startswith("http"):
                        continue  # external service
                    self.run_call(rel, block, call)
        if self.readonly:
            return  # never mutate: no publish, nothing to clean up
        # publish everything staged, then clean up created objects, then publish removal
        try:
            self.client.request("POST", "/configuration-management/draft/publish",
                                json_body={"description": "verify-harness cleanup"})
        except Exception:
            pass
        self.prereq.cleanup()
        try:
            self.client.request("POST", "/configuration-management/draft/publish",
                                json_body={"description": "verify-harness cleanup removal"})
        except Exception:
            pass


def main():
    import os
    profile = os.environ.get("GUIDES_PROFILE", "QA_BUGHUNT")
    readonly = os.environ.get("GUIDES_READONLY") == "1"
    creds = Credentials(profile)
    if creds.env != "qa" and not readonly:
        raise SystemExit(
            f"Refusing to run destructive live suite against non-qa env: {creds.env}. "
            f"Set GUIDES_READONLY=1 to run GET-only validation."
        )
    runner = LiveRunner(creds, readonly=readonly)
    runner.run()
    OUT_DIR.mkdir(exist_ok=True)
    suffix = f"_{profile.lower()}" + ("_ro" if readonly else "")
    (OUT_DIR / f"live_findings{suffix}.json").write_text(json.dumps(runner.results, indent=2))
    (OUT_DIR / f"live_log{suffix}.txt").write_text("\n".join(runner.logs))
    print(f"profile={profile} env={creds.env} readonly={readonly}")

    from collections import Counter
    c = Counter(r["outcome"] for r in runner.results)
    print("Live outcomes:", dict(c), f"(total {len(runner.results)})\n")
    print("=== FAIL (request shape rejected = likely doc bug) ===")
    for r in runner.results:
        if r["outcome"] == "FAIL":
            print(f"[FAIL] {r['file']} L{r['line']} {r['method']} {r['path']}")
            print(f"    -> {r.get('status','')} {r.get('response','')[:200]}")
    print("\n=== ENV (feature/data not available on this tenant) ===")
    for r in runner.results:
        if r["outcome"] == "ENV":
            print(f"[ENV] {r['file']} L{r['line']} {r['method']} {r['path']} -> {r.get('response','')[:120]}")
    print("\n=== INDETERMINATE (state/semantic dependent) ===")
    for r in runner.results:
        if r["outcome"] in ("INDETERMINATE", "ERROR"):
            print(f"[{r['outcome']}] {r['file']} L{r['line']} {r['method']} {r['path']} -> {r.get('status','')} {r.get('response','')[:120]}")


if __name__ == "__main__":
    main()
