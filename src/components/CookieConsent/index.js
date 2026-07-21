import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import { readConsent, updateConsent } from "./consent";
import "./styles.scss";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  // Runs only on the client, so the banner never renders during SSR and can't
  // cause a hydration mismatch.
  useEffect(() => {
    if (!readConsent()?.consentGiven) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  const choose = (prefs) => {
    updateConsent(prefs);
    setShow(false);
  };

  return (
    <div className="cookie-consent" role="dialog" aria-label="Cookie consent">
      <p className="cookie-consent__text">
        We use cookies to analyze site traffic and improve your experience. See
        our{" "}
        <Link to="https://www.paloaltonetworks.com/legal-notices/privacy">
          Privacy Policy
        </Link>
        .
      </p>
      <div className="cookie-consent__actions">
        <button
          type="button"
          className="cookie-consent__btn cookie-consent__btn--secondary"
          onClick={() => choose({})}
        >
          Reject optional
        </button>
        <button
          type="button"
          className="cookie-consent__btn cookie-consent__btn--primary"
          onClick={() =>
            choose({ analytics: true, marketing: true, functional: true })
          }
        >
          Accept all
        </button>
      </div>
    </div>
  );
}
