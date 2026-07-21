// Shared consent helpers. The storage key and category -> Google signal mapping
// must stay in sync with docusaurus-plugin-gtm/index.js, which reads the same
// key on page load to replay the stored choice before GTM fires.
export const STORAGE_KEY = "cookie-consent-preferences";

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
  }
}

export function readConsent() {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch (e) {
    return null;
  }
}

export function updateConsent({
  analytics = false,
  marketing = false,
  functional = false,
} = {}) {
  const prefs = {
    necessary: true,
    analytics,
    marketing,
    functional,
    consentGiven: true,
    timestamp: Date.now(),
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch (e) {
    // localStorage unavailable (private mode, etc.) — signal consent anyway.
  }

  ensureGtag();
  window.gtag("consent", "update", {
    ad_storage: marketing ? "granted" : "denied",
    ad_user_data: marketing ? "granted" : "denied",
    ad_personalization: marketing ? "granted" : "denied",
    analytics_storage: analytics ? "granted" : "denied",
    functionality_storage: functional ? "granted" : "denied",
    personalization_storage: functional ? "granted" : "denied",
  });

  window.dispatchEvent(
    new CustomEvent("cookieConsentChange", { detail: prefs })
  );
  return prefs;
}
