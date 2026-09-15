import React from "react";
import PBPortal from "@site/src/components/PBPortal";
import source from "@site/src/components/PBPortal/design-system/coreui-source.json";
import {
  PBButton,
  PBCard,
  PBBadge,
  PBCodePanel,
  PBFreshnessMarker,
} from "@site/src/components/PBPortal/ui";

const COLORS = [
  ["Primary", "primary"],
  ["Secondary", "secondary"],
  ["Information", "information"],
  ["Positive", "positive"],
  ["Warning", "warning"],
  ["Negative", "negative"],
];

const SPACING = [
  "xxsmall",
  "xsmall",
  "small",
  "normal",
  "medium",
  "large",
  "xlarge",
  "xxlarge",
];

function TokenSwatches() {
  return (
    <section className="pb-ds-section">
      <h2>Core UI Tokens</h2>
      <p>
        These values resolve from Core UI <code>--pab-*</code> variables. PB
        docs should use semantic aliases over these tokens, not local hex
        values.
      </p>
      <div className="pb-ds-swatches">
        {COLORS.map(([label, tone]) => (
          <div className="pb-ds-swatch" key={tone}>
            <span className={`pb-ds-swatch-chip swatch-${tone}`} />
            <strong>{label}</strong>
            <code>--pab-color-{tone}</code>
          </div>
        ))}
      </div>
      <div className="pb-ds-spacing">
        {SPACING.map((size) => (
          <div className="pb-ds-space-row" key={size}>
            <code>--spacing-{size}</code>
            <span className={`pb-ds-space-bar space-${size}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

function ComponentSamples() {
  return (
    <section className="pb-ds-section">
      <h2>Components</h2>
      <div className="pb-ds-grid">
        <PBCard>
          <h3>Buttons</h3>
          <div className="pb-ds-row">
            <PBButton variant="primary">Primary</PBButton>
            <PBButton variant="ghost">Ghost</PBButton>
            <PBButton>Default</PBButton>
          </div>
        </PBCard>
        <PBCard>
          <h3>Badges</h3>
          <div className="pb-ds-row">
            <PBBadge tone="new">New</PBBadge>
            <PBBadge tone="changed">Changed</PBBadge>
            <PBBadge tone="breaking">Breaking</PBBadge>
            <PBBadge tone="fixed">Fixed</PBBadge>
          </div>
        </PBCard>
        <PBCard>
          <h3>Code Panel</h3>
          <PBCodePanel>{`curl -sS "$PB_API_BASE/policy/access-and-data" \\
  -H "Authorization: Bearer $PB_TOKEN"`}</PBCodePanel>
        </PBCard>
        <PBCard>
          <h3>Navigation Card</h3>
          <p className="pb-card-text">
            Cards use the shared PB card primitive and Core UI shadows, borders,
            typography, and spacing.
          </p>
          <div className="pb-card-cta">Open example &#8594;</div>
        </PBCard>
      </div>
    </section>
  );
}

export default function PrismaBrowserDesignSystem() {
  return (
    <PBPortal
      surface="design-system"
      title="Prisma Browser Design System"
      description="Standalone Prisma Browser docs components, tokens, and source metadata."
    >
      <div className="pb-ds">
        <h1>Prisma Browser Docs Design System</h1>
        <p className="pb-rn-lead">
          A Docusaurus-hosted component workbench for the Prisma Browser docs.
          Use this page to inspect standalone components before they appear in
          Overview, Developer Guide, API chrome, or Release Notes.
        </p>
        <PBFreshnessMarker source={source} />
        <TokenSwatches />
        <ComponentSamples />
      </div>
    </PBPortal>
  );
}
