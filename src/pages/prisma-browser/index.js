import React from "react";
import Link from "@docusaurus/Link";
import PBPortal from "@site/src/components/PBPortal";
import { OVERVIEW_CONTENT } from "@site/src/components/PBPortal/portalConfig";
import { PBCard } from "@site/src/components/PBPortal/ui";

function Card({ c }) {
  if (c.comingSoon) {
    return (
      <PBCard className="pb-card--soon" aria-disabled="true">
        <div className="pb-card-title">{c.title}</div>
        <div className="pb-card-text">{c.body}</div>
        <div className="pb-soon-pill-row">
          <span className="pb-soon-pill">Coming soon</span>
        </div>
      </PBCard>
    );
  }
  const inner = (
    <>
      <div className="pb-card-title">
        {c.title} {c.ext && <span className="ext">&#8599;</span>}
      </div>
      <div className="pb-card-text">{c.body}</div>
      <div className="pb-card-cta">
        {c.external ? "Open \u2197" : "Open \u2192"}
      </div>
    </>
  );
  if (c.external) {
    return (
      <PBCard href={c.to} external>
        {inner}
      </PBCard>
    );
  }
  return <PBCard to={c.to}>{inner}</PBCard>;
}

function UseCaseRow({ c }) {
  return (
    <Link className="pb-uc-item" to={c.to}>
      <span className="pb-uc-chip">
        <i className={`fas ${c.icon}`} aria-hidden="true" />
      </span>
      <div className="pb-uc-t">{c.title}</div>
      <div className="pb-uc-b">{c.body}</div>
      <span className="pb-uc-more">
        Read more <i className="fas fa-arrow-right" aria-hidden="true" />
      </span>
    </Link>
  );
}

export default function PrismaBrowserOverview() {
  const {
    hero,
    useCases,
    useCasesEyebrow,
    useCasesTitle,
    useCasesLede,
    cards,
    cardsHeading,
  } = OVERVIEW_CONTENT;
  return (
    <PBPortal
      surface="overview"
      title={OVERVIEW_CONTENT.title}
      description={OVERVIEW_CONTENT.description}
    >
      <div className="pb-orb pb-orb-1" aria-hidden="true" />
      <div className="pb-orb pb-orb-2" aria-hidden="true" />

      <section className="pb-hero">
        <div className="pb-hero-inner">
          <h1>{hero.heading}</h1>
          <p className="pb-hero-sub">{hero.subheading}</p>
        </div>
      </section>

      <section className="pb-cards-section">
        {cardsHeading && <h2 className="pb-cards-heading">{cardsHeading}</h2>}
        <div className="pb-cards">
          {cards.map((c) => (
            <Card key={c.title} c={c} />
          ))}
        </div>
      </section>

      {useCases && useCases.length > 0 && (
        <section className="pb-cards-section pb-uc-section">
          {useCasesEyebrow && (
            <p className="pb-cards-heading">{useCasesEyebrow}</p>
          )}
          {useCasesTitle && <h2 className="pb-uc-title">{useCasesTitle}</h2>}
          {useCasesLede && <p className="pb-uc-lede">{useCasesLede}</p>}
          <div className="pb-uc-grid">
            {useCases.map((c) => (
              <UseCaseRow key={c.title} c={c} />
            ))}
          </div>
        </section>
      )}
    </PBPortal>
  );
}
