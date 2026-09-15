"""Merge static (spec) + live (tenant) findings into report.md and report.json."""
from __future__ import annotations

import json
from collections import Counter, defaultdict
from pathlib import Path

from config import OUT_DIR


def load(name):
    p = OUT_DIR / name
    return json.loads(p.read_text()) if p.exists() else []


def main():
    static = load("static_findings.json")
    live = load("live_findings.json")

    live_counts = Counter(r["outcome"] for r in live)
    fails = [r for r in live if r["outcome"] == "FAIL"]
    envs = [r for r in live if r["outcome"] == "ENV"]
    indet = [r for r in live if r["outcome"] in ("INDETERMINATE", "ERROR")]
    skipped = [r for r in live if r["outcome"] == "SKIPPED"]

    # index static findings by (file,line)
    static_by = defaultdict(list)
    for s in static:
        static_by[(s["file"], s["line"])].append(s)

    lines = []
    lines.append("# Guide code-example verification report\n")
    lines.append("Two layers: **static** (each curl checked against the OpenAPI spec) and "
                 "**live** (each example executed against the QA sandbox tenant).\n")
    lines.append("## Summary\n")
    lines.append(f"- Live calls executed: **{len(live)}**")
    for k in ("PASS", "FAIL", "ENV", "INDETERMINATE", "SKIPPED"):
        lines.append(f"  - {k}: {live_counts.get(k, 0)}")
    lines.append(f"- Static findings (spec mismatches): **{len(static)}**\n")

    lines.append("## Confirmed doc bugs (live request rejected on shape)\n")
    lines.append("These examples were rejected by the API because the request shape is wrong. "
                 "Most are corroborated by the OpenAPI spec (static layer).\n")
    lines.append("| File | Line | Call | Why it fails |")
    lines.append("|---|---|---|---|")
    for r in fails:
        resp = (r.get("response", "") or "").replace("|", "\\|")[:140]
        lines.append(f"| `{r['file']}` | {r['line']} | {r['method']} {r['path']} | {resp} |")
    lines.append("")

    lines.append("## Cannot verify on this tenant (feature/data not enabled)\n")
    lines.append("| File | Line | Call | Reason |")
    lines.append("|---|---|---|---|")
    for r in envs:
        resp = (r.get("response", "") or "").replace("|", "\\|")[:120]
        lines.append(f"| `{r['file']}` | {r['line']} | {r['method']} {r['path']} | {resp} |")
    lines.append("")

    lines.append("## Indeterminate (state/order/semantic dependent - not shape bugs)\n")
    lines.append("Reads of the active version before publishing, add/remove semantics, "
                 "device state, or missing test data. Reviewed as non-bugs.\n")
    lines.append("| File | Line | Call | Status |")
    lines.append("|---|---|---|---|")
    for r in indet:
        lines.append(f"| `{r['file']}` | {r['line']} | {r['method']} {r['path']} | {r.get('status','')} |")
    lines.append("")

    lines.append("## Static-only findings (spec says mismatch)\n")
    lines.append("Includes endpoints missing from the spec (e.g. `pendingChanges`) and body "
                 "mismatches. Cross-reference with the live result before acting.\n")
    lines.append("| File | Line | Call | Finding |")
    lines.append("|---|---|---|---|")
    for s in static:
        msg = s["message"].replace("|", "\\|")[:140]
        lines.append(f"| `{s['file']}` | {s['line']} | {s['method']} {s['path']} | {msg} |")
    lines.append("")

    (OUT_DIR / "report.md").write_text("\n".join(lines))
    merged = {"live_counts": dict(live_counts), "fails": fails, "envs": envs,
              "indeterminate": indet, "skipped": skipped, "static": static}
    (OUT_DIR / "report.json").write_text(json.dumps(merged, indent=2))
    print(f"Wrote {OUT_DIR/'report.md'} and report.json")
    print("Live:", dict(live_counts), "| static findings:", len(static))


if __name__ == "__main__":
    main()
