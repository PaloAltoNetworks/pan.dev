"""Configuration + credential loading for the guides verification harness.

Secrets are read at runtime from the copilot repo `.env` (never written to disk,
never printed). Only the QA "bughunt" sandbox profile is used by default.
"""
from __future__ import annotations

import os
from pathlib import Path

# Repo layout (this file lives in code/pan.dev/guides-verify/)
HERE = Path(__file__).resolve().parent
DOCS_REPO = HERE.parent
GUIDES_DIR = DOCS_REPO / "src" / "components" / "PBPortal" / "guides"
SPEC_PATH = (
    DOCS_REPO
    / "openapi-specs"
    / "prisma-browser"
    / "PrismaAccess-Browser-Management-latest.yaml"
)
OUT_DIR = HERE / "out"
FIXTURES_DIR = HERE / "fixtures"

# copilot/.env (two levels up from code/ ... resolve relative to workspace)
WORKSPACE = DOCS_REPO.parent.parent  # .../pb-pm-workspace
ENV_FILE = WORKSPACE / "copilot" / ".env"

# Per-environment endpoint mapping. The guides document prod; the sandbox is qa.
ENV_URLS = {
    "qa": {
        "auth_url": "https://auth.qa.appsvc.paloaltonetworks.com/auth/v1/oauth2/access_token",
        "api_base": "https://qa.api.sase.paloaltonetworks.com/seb-api/v1",
    },
    "prod": {
        "auth_url": "https://auth.apps.paloaltonetworks.com/oauth2/access_token",
        "api_base": "https://api.sase.paloaltonetworks.com/seb-api/v1",
    },
}

DEFAULT_PROFILE = "QA_BUGHUNT"


def load_env_file(path: Path = ENV_FILE) -> dict[str, str]:
    env: dict[str, str] = {}
    if not path.exists():
        return env
    for line in path.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, v = line.split("=", 1)
        env[k.strip()] = v.strip()
    return env


class Credentials:
    def __init__(self, profile: str = DEFAULT_PROFILE):
        env = load_env_file()
        self.profile = profile
        try:
            self.client_id = env[f"SEB_CLIENT_ID_{profile}"]
            self.client_secret = env[f"SEB_CLIENT_SECRET_{profile}"]
            self.tsg = env[f"SEB_TSG_{profile}"]
            self.env = env.get(f"SEB_ENV_{profile}", "qa")
        except KeyError as e:
            raise SystemExit(
                f"Missing credential {e} for profile {profile} in {ENV_FILE}"
            )
        urls = ENV_URLS[self.env]
        self.auth_url = urls["auth_url"]
        self.api_base = urls["api_base"]

    def secret_values(self) -> list[str]:
        """Values that must be redacted from any output."""
        return [self.client_secret, self.client_id, self.tsg]


def redact(text: str, secrets: list[str]) -> str:
    for s in secrets:
        if s:
            text = text.replace(s, "***REDACTED***")
    return text
