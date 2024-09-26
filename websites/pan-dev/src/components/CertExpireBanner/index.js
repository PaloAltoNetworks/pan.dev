import React from "react";
import Link from "@docusaurus/Link";
import "./styles.scss";

export default function CertExpireBanner() {
  return (
    <div className="banner-cert-expire">
      <h4>
        <div className="banner-cert-expire__line1">
          Emergency Update Required
        </div>
        <div className="banner-cert-expire__line2">
          PAN-OS Root Certificate Expiration
        </div>
      </h4>
      <div className="view-advisory-link">
        <Link
          to="https://live.paloaltonetworks.com/t5/customer-advisories/emergency-update-required-pan-os-root-and-default-certificate/ta-p/564672"
          className="tab-item__link"
        >
          <span>View Advisory</span>
          <img
            src="/img/icons/arrow-forward.svg"
            alt="Forward arrow icon"
            height="15"
          />
        </Link>
      </div>
    </div>
  );
}
