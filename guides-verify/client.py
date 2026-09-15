"""Thin authenticated HTTP client for the Prisma Browser Management API."""
from __future__ import annotations

import time
import requests

from config import Credentials


class ApiClient:
    def __init__(self, creds: Credentials, verify_tls: bool = True):
        self.creds = creds
        self.base = creds.api_base
        self._token: str | None = None
        self._exp: float = 0.0
        self._session = requests.Session()
        self._session.verify = verify_tls

    def token(self) -> str:
        if self._token and time.time() < self._exp - 60:
            return self._token
        r = self._session.post(
            self.creds.auth_url,
            auth=(self.creds.client_id, self.creds.client_secret),
            data={
                "grant_type": "client_credentials",
                "scope": f"tsg_id:{self.creds.tsg}",
            },
            timeout=30,
        )
        r.raise_for_status()
        body = r.json()
        self._token = body["access_token"]
        self._exp = time.time() + body.get("expires_in", 900)
        return self._token

    def headers(self, extra: dict | None = None) -> dict:
        h = {"Authorization": f"Bearer {self.token()}"}
        if extra:
            h.update(extra)
        return h

    def request(
        self,
        method: str,
        path: str,
        json_body=None,
        files=None,
        data=None,
        headers: dict | None = None,
        timeout: int = 30,
    ) -> requests.Response:
        url = path if path.startswith("http") else self.base + path
        h = self.headers(headers)
        return self._session.request(
            method.upper(),
            url,
            json=json_body,
            files=files,
            data=data,
            headers=h,
            timeout=timeout,
        )
