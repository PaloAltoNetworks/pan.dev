"""Extract fenced code blocks from the guide .mdx files and parse curl commands.

The extractor is deliberately conservative: it recognises the specific shapes
used across these guides (curl with $PB_API_BASE, export VAR=..., multipart -F,
-G list queries) rather than trying to be a general shell parser.
"""
from __future__ import annotations

import json
import re
import shlex
from dataclasses import dataclass, field
from pathlib import Path

FENCE_RE = re.compile(r"^```([A-Za-z0-9_-]*)\s*$")
HEADING_RE = re.compile(r"^(#{1,6})\s+(.*)$")
EXPORT_RE = re.compile(r"""^\s*export\s+([A-Z_][A-Z0-9_]*)=(.+)$""")
STATUS_RE = re.compile(r"\b(200|201|202|204|400|401|403|404|409|422|429|500)\b")


@dataclass
class CodeBlock:
    file: str
    lang: str
    heading: str
    start_line: int
    content: str
    # prose immediately following the block (for status-code assertions / response detection)
    context_after: str = ""
    context_before: str = ""


@dataclass
class CurlCall:
    method: str
    path: str            # path relative to api base (may contain $VARS / placeholders)
    raw_url: str
    headers: dict = field(default_factory=dict)
    query: list = field(default_factory=list)   # list of (k, v) for -G/--data-urlencode
    inline_query: str = ""
    body_raw: str | None = None
    body_json: object | None = None
    body_parse_error: str | None = None
    is_multipart: bool = False
    files: list = field(default_factory=list)    # -F values
    is_auth_call: bool = False                    # hits $PB_AUTH_URL


def extract_blocks(path: Path) -> list[CodeBlock]:
    lines = path.read_text().splitlines()
    blocks: list[CodeBlock] = []
    heading = ""
    i = 0
    n = len(lines)
    while i < n:
        m = FENCE_RE.match(lines[i])
        hm = HEADING_RE.match(lines[i])
        if hm:
            heading = hm.group(2).strip()
            i += 1
            continue
        if m:
            lang = m.group(1)
            start = i + 1
            body_lines = []
            i += 1
            while i < n and not lines[i].startswith("```"):
                body_lines.append(lines[i])
                i += 1
            # i now on closing fence (or EOF)
            after = "\n".join(lines[i + 1 : i + 6])
            before = "\n".join(lines[max(0, start - 5) : start - 1])
            blocks.append(
                CodeBlock(
                    file=str(path),
                    lang=lang.lower(),
                    heading=heading,
                    start_line=start,
                    content="\n".join(body_lines),
                    context_after=after,
                    context_before=before,
                )
            )
            i += 1
            continue
        i += 1
    return blocks


def _join_continuations(text: str) -> list[str]:
    """Collapse backslash-newline continuations, return logical lines."""
    joined = re.sub(r"\\\n", " ", text)
    return [ln for ln in joined.splitlines()]


def parse_exports(bash: str) -> dict[str, str]:
    out = {}
    for ln in _join_continuations(bash):
        m = EXPORT_RE.match(ln)
        if m:
            val = m.group(2).strip()
            # strip surrounding quotes and trailing inline comments
            if val and val[0] in "\"'":
                q = val[0]
                end = val.find(q, 1)
                if end != -1:
                    val = val[1:end]
            else:
                val = val.split("#", 1)[0].strip()
            out[m.group(1)] = val
    return out


def _split_commands(bash: str) -> list[str]:
    """Split a bash block into individual command strings (curl invocations)."""
    logical = _join_continuations(bash)
    cmds = []
    cur = []
    for ln in logical:
        stripped = ln.strip()
        if stripped.startswith("curl"):
            if cur:
                cmds.append(" ".join(cur))
                cur = []
            cur.append(stripped)
        elif cur:
            # continuation piped/next line belonging to curl (e.g. | python3 ...)
            cur.append(stripped)
        # else: non-curl standalone line (export/echo) handled elsewhere
    if cur:
        cmds.append(" ".join(cur))
    return cmds


def parse_curl(cmd: str) -> CurlCall | None:
    # Drop any pipe tail (e.g. "| python3 -c ...") for parsing the request itself
    cmd_head = cmd.split("|", 1)[0].strip()
    try:
        tokens = shlex.split(cmd_head)
    except ValueError:
        return None
    if not tokens or tokens[0] != "curl":
        return None

    method = None
    url = None
    headers = {}
    query = []
    files = []
    body_parts = []
    is_G = False
    has_data = False
    is_auth = False

    it = iter(range(1, len(tokens)))
    idx = 1
    while idx < len(tokens):
        t = tokens[idx]
        if t in ("-X", "--request"):
            idx += 1
            method = tokens[idx].upper()
        elif t in ("-H", "--header"):
            idx += 1
            hv = tokens[idx]
            if ":" in hv:
                k, v = hv.split(":", 1)
                headers[k.strip()] = v.strip()
        elif t in ("-d", "--data", "--data-raw", "--data-binary"):
            idx += 1
            has_data = True
            body_parts.append(tokens[idx])
        elif t == "--data-urlencode":
            idx += 1
            has_data = True
            kv = tokens[idx]
            if "=" in kv:
                k, v = kv.split("=", 1)
                query.append((k, v))
            else:
                query.append((kv, ""))
        elif t in ("-F", "--form"):
            idx += 1
            files.append(tokens[idx])
        elif t in ("-G", "--get"):
            is_G = True
        elif t in ("-u", "--user"):
            idx += 1  # basic auth, skip value
            is_auth = True
        elif t in ("-sS", "-s", "-S", "--silent", "--show-error", "-k", "--insecure", "--verify=no"):
            pass
        elif t in ("-o", "--output", "-w", "--write-out"):
            idx += 1
        elif t.startswith("-"):
            pass
        else:
            if url is None:
                url = t
        idx += 1

    if url is None:
        return None

    if method is None:
        method = "GET" if (is_G or not has_data) else "POST"

    if "$PB_AUTH_URL" in url or "auth" in url and "access_token" in url:
        is_auth = True

    # Resolve path relative to known bases.
    raw_url = url
    inline_query = ""
    path = url
    for base_var in ("$PB_API_BASE", "${PB_API_BASE}"):
        if base_var in path:
            path = path.split(base_var, 1)[1]
            break
    # split inline query
    if "?" in path:
        path, inline_query = path.split("?", 1)

    body_raw = None
    body_json = None
    body_err = None
    if body_parts:
        body_raw = "".join(body_parts) if len(body_parts) > 1 else body_parts[0]
        if not is_G:
            try:
                body_json = json.loads(body_raw)
            except json.JSONDecodeError as e:
                body_err = f"{e.msg} (line {e.lineno} col {e.colno})"

    return CurlCall(
        method=method,
        path=path,
        raw_url=raw_url,
        headers=headers,
        query=query,
        inline_query=inline_query,
        body_raw=body_raw,
        body_json=body_json,
        body_parse_error=body_err,
        is_multipart=bool(files),
        files=files,
        is_auth_call=is_auth,
    )


def all_guide_files(guides_dir: Path) -> list[Path]:
    return sorted(p for p in guides_dir.rglob("*.mdx"))


if __name__ == "__main__":
    from config import GUIDES_DIR

    files = all_guide_files(GUIDES_DIR)
    total_blocks = 0
    total_curls = 0
    lang_counts: dict[str, int] = {}
    for f in files:
        blocks = extract_blocks(f)
        total_blocks += len(blocks)
        for b in blocks:
            lang_counts[b.lang] = lang_counts.get(b.lang, 0) + 1
            if b.lang in ("bash", "sh", "shell"):
                for cmd in _split_commands(b.content):
                    c = parse_curl(cmd)
                    if c:
                        total_curls += 1
    print(f"files={len(files)} blocks={total_blocks} curls={total_curls}")
    print("langs:", dict(sorted(lang_counts.items(), key=lambda x: -x[1])))
