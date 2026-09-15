"""Static validation of guide curl examples against the OpenAPI spec.

Two checks per curl call:
  1. Path + method exist in the spec (with {param} templating).
  2. JSON request body conforms to the resolved request schema.

A custom schema walker is used instead of the `jsonschema` library because the
spec relies heavily on `allOf` + `additionalProperties: false`, which the naive
JSON-Schema interpretation rejects for valid composed objects. The walker
flattens `allOf` (union of properties/required, combined additionalProperties)
before checking.
"""
from __future__ import annotations

import re
import yaml
from dataclasses import dataclass, field
from pathlib import Path

PLACEHOLDER_SEG = re.compile(r"^(\$\{?[A-Za-z_][A-Za-z0-9_]*\}?|0[A-Z0-9.]+X*|\{[^}]+\})$")


@dataclass
class Finding:
    ok: bool
    kind: str          # "path", "method", "body", "json"
    message: str


class Spec:
    def __init__(self, path: Path):
        self.raw = yaml.safe_load(path.read_text())
        self.paths = self.raw.get("paths", {})
        self.components = self.raw.get("components", {})
        # pre-split spec paths (strip the /seb-api/v1 prefix to compare with doc paths)
        self.prefix = "/seb-api/v1"
        self._indexed = []
        for p, item in self.paths.items():
            rel = p[len(self.prefix):] if p.startswith(self.prefix) else p
            self._indexed.append((rel, p, [seg for seg in rel.strip("/").split("/")]))

    # ---- $ref resolution -------------------------------------------------
    def resolve_ref(self, ref: str):
        assert ref.startswith("#/")
        node = self.raw
        for part in ref[2:].split("/"):
            node = node[part]
        return node

    def deref(self, schema, _seen=None):
        """Resolve a top-level $ref (one hop, with cycle guard)."""
        seen = _seen or set()
        while isinstance(schema, dict) and "$ref" in schema:
            ref = schema["$ref"]
            if ref in seen:
                return {}
            seen.add(ref)
            schema = self.resolve_ref(ref)
        return schema

    # ---- path matching ---------------------------------------------------
    def match(self, method: str, doc_path: str):
        """Return (operation, spec_path) or (None, reason)."""
        doc_path = doc_path.split("?")[0].rstrip("/")
        if doc_path == "":
            doc_path = "/"
        doc_segs = [s for s in doc_path.strip("/").split("/") if s != ""]
        candidates = []
        for rel, full, spec_segs in self._indexed:
            if len(spec_segs) != len(doc_segs):
                continue
            ok = True
            for ds, ss in zip(doc_segs, spec_segs):
                spec_is_param = ss.startswith("{") and ss.endswith("}")
                doc_is_var = bool(PLACEHOLDER_SEG.match(ds))
                if spec_is_param or doc_is_var:
                    continue  # param or doc variable matches anything
                if ds != ss:
                    ok = False
                    break
            if ok:
                candidates.append((full, self.paths[full]))
        if not candidates:
            return None, f"no path in spec matches {doc_path}"
        # prefer exact literal match if multiple
        for full, item in candidates:
            m = method.lower()
            if m in item:
                return item[m], full
        # path matched but method not allowed
        full, item = candidates[0]
        allowed = [k.upper() for k in item if k in ("get", "post", "put", "patch", "delete")]
        return None, f"method {method} not allowed on {full} (allowed: {', '.join(allowed)})"

    def request_schema(self, operation: dict):
        rb = operation.get("requestBody")
        if not rb:
            return None
        content = self.deref(rb).get("content", {})
        js = content.get("application/json")
        if not js:
            return None
        return js.get("schema")


# ------------------------- schema flattening + validation -----------------
def flatten(spec: Spec, schema, depth=0):
    """Return a flattened object schema dict: merges allOf, resolves $ref.

    Only flattens the current level enough for property/required/enum/type checks.
    """
    if schema is None or depth > 40:
        return {}
    schema = spec.deref(schema)
    if not isinstance(schema, dict):
        return {}
    if "allOf" in schema:
        merged = {"type": "object", "properties": {}, "required": [], "additionalProperties": True}
        any_closed = False
        for sub in schema["allOf"]:
            fsub = flatten(spec, sub, depth + 1)
            merged["properties"].update(fsub.get("properties", {}))
            merged["required"] = list(set(merged["required"]) | set(fsub.get("required", [])))
            if fsub.get("additionalProperties") is False:
                any_closed = True
            if fsub.get("type"):
                merged["type"] = fsub["type"]
        # merge sibling keys (besides allOf)
        for k, v in schema.items():
            if k == "allOf":
                continue
            if k == "properties":
                merged["properties"].update(v)
            elif k == "required":
                merged["required"] = list(set(merged["required"]) | set(v))
            elif k == "additionalProperties":
                if v is False:
                    any_closed = True
            else:
                merged[k] = v
        merged["additionalProperties"] = not any_closed and merged.get("additionalProperties", True)
        if any_closed:
            merged["additionalProperties"] = False
        return merged
    return schema


def validate(spec: Spec, schema, instance, path="body", depth=0) -> list[str]:
    errors: list[str] = []
    if depth > 40:
        return errors
    schema = flatten(spec, schema, depth)
    if not schema:
        return errors

    # discriminated oneOf/anyOf: pick the branch by discriminator value when possible
    for key in ("anyOf", "oneOf"):
        if key in schema:
            branches = schema[key]
            disc = schema.get("discriminator", {})
            disc_prop = disc.get("propertyName")
            if disc_prop and isinstance(instance, dict):
                if disc_prop not in instance:
                    # The discriminator is often supplied by the URL path (e.g.
                    # /applications/type/custom) rather than the body. Defer to live.
                    errors.append(
                        f"{path}: discriminator '{disc_prop}' not in body "
                        f"(supplied via URL path?) - verify live"
                    )
                    return errors
                mapping = disc.get("mapping", {})
                target = mapping.get(instance[disc_prop])
                if target:
                    return validate(spec, {"$ref": target}, instance, path, depth + 1)
            for b in branches:
                be = validate(spec, b, instance, path, depth + 1)
                if not be:
                    return errors  # a branch matched cleanly
            errors.append(f"{path}: does not match any of {len(branches)} allowed schemas ({key})")
            return errors

    typ = schema.get("type")
    # enum
    if "enum" in schema and instance not in schema["enum"]:
        errors.append(f"{path}: value {instance!r} not in allowed {schema['enum']}")

    if typ == "object" or (typ is None and isinstance(instance, dict)):
        if not isinstance(instance, dict):
            errors.append(f"{path}: expected object, got {type(instance).__name__}")
            return errors
        props = schema.get("properties", {})
        for req in schema.get("required", []):
            if req not in instance:
                errors.append(f"{path}: missing required field '{req}'")
        addl = schema.get("additionalProperties", True)
        for k, v in instance.items():
            if k in props:
                errors.extend(validate(spec, props[k], v, f"{path}.{k}", depth + 1))
            elif addl is False:
                errors.append(f"{path}: unknown field '{k}' (not allowed by schema)")
    elif typ == "array":
        if not isinstance(instance, list):
            errors.append(f"{path}: expected array, got {type(instance).__name__}")
            return errors
        items = schema.get("items")
        if items:
            for idx, el in enumerate(instance):
                errors.extend(validate(spec, items, el, f"{path}[{idx}]", depth + 1))
    elif typ in ("string", "integer", "number", "boolean"):
        py = {"string": str, "integer": int, "number": (int, float), "boolean": bool}[typ]
        if typ == "integer" and isinstance(instance, bool):
            errors.append(f"{path}: expected integer, got boolean")
        elif not isinstance(instance, py):
            errors.append(f"{path}: expected {typ}, got {type(instance).__name__}")
    return errors


def check_call(spec: Spec, call) -> list[Finding]:
    findings: list[Finding] = []
    if call.is_auth_call:
        return findings  # token endpoint is not part of this spec
    if call.path.startswith("http"):
        return findings  # absolute URL to an external service (e.g. DLP API)
    op, info = spec.match(call.method, call.path)
    if op is None:
        findings.append(Finding(False, "path", info))
        return findings
    findings.append(Finding(True, "path", f"{call.method} {info} OK"))

    if call.body_parse_error:
        findings.append(Finding(False, "json", f"invalid JSON body: {call.body_parse_error}"))
        return findings

    if call.body_json is not None and call.method in ("POST", "PUT", "PATCH"):
        schema = spec.request_schema(op)
        if schema is not None:
            # PATCH bodies are partial: skip required-field enforcement
            errs = validate(spec, schema, call.body_json)
            if call.method == "PATCH":
                errs = [e for e in errs if "missing required field" not in e]
            for e in errs:
                findings.append(Finding(False, "body", e))
            if not errs:
                findings.append(Finding(True, "body", "body matches schema"))
    return findings
