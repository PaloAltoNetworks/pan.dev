"""Run Layer 1 (static OpenAPI validation) across all guides and print findings."""
from __future__ import annotations

import json
from pathlib import Path

from config import GUIDES_DIR, SPEC_PATH, OUT_DIR
from extract import all_guide_files, extract_blocks, _split_commands, parse_curl, parse_exports
from static_check import Spec, check_call


def main():
    spec = Spec(SPEC_PATH)
    files = all_guide_files(GUIDES_DIR)
    results = []
    n_calls = 0
    n_fail = 0
    for f in files:
        rel = str(f.relative_to(GUIDES_DIR))
        for b in extract_blocks(f):
            if b.lang not in ("bash", "sh", "shell"):
                continue
            for cmd in _split_commands(b.content):
                call = parse_curl(cmd)
                if not call or call.is_auth_call:
                    continue
                n_calls += 1
                findings = check_call(spec, call)
                fails = [x for x in findings if not x.ok]
                if fails:
                    n_fail += 1
                    for fd in fails:
                        results.append({
                            "file": rel,
                            "line": b.start_line,
                            "heading": b.heading,
                            "method": call.method,
                            "path": call.path,
                            "kind": fd.kind,
                            "message": fd.message,
                        })
    OUT_DIR.mkdir(exist_ok=True)
    (OUT_DIR / "static_findings.json").write_text(json.dumps(results, indent=2))
    print(f"Checked {n_calls} curl calls; {n_fail} had failures; {len(results)} findings.\n")
    cur = None
    for r in results:
        if r["file"] != cur:
            cur = r["file"]
            print(f"\n=== {cur} ===")
        print(f"  L{r['line']} [{r['kind']}] {r['method']} {r['path']}")
        print(f"       {r['message']}")


if __name__ == "__main__":
    main()
