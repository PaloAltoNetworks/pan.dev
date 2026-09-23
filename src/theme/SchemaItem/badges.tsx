/**
 * Spec-driven availability badges (`x-badges`) for schema nodes.
 *
 * Shared by SchemaItem (leaf rows) and Schema's Summary (expandable object and
 * array rows) so a badge declared once in the spec renders identically wherever
 * the node appears. Purely additive: a schema with no `x-badges` renders
 * nothing, so this is inert for every spec that does not opt in.
 *
 * Badge colours come from `.openapi-schema__badge--<slug>` in src/css/custom.scss.
 * A badge whose name has no matching class falls back to the base badge style,
 * unless the spec supplies an explicit `color`.
 */
import React from "react";

import clsx from "clsx";

export interface Badge {
  name: string;
  color?: string;
}

export const toBadgeSlug = (name: string) =>
  name.toLowerCase().trim().replace(/\s+/g, "-");

export function renderSchemaBadges(schema?: { "x-badges"?: unknown }) {
  const raw = schema?.["x-badges"];
  const badges: Badge[] = Array.isArray(raw) ? (raw as Badge[]) : [];

  return badges
    .filter((badge) => badge && badge.name)
    .map((badge, index) => (
      <span
        key={`${badge.name}-${index}`}
        className={clsx(
          "openapi-schema__badge",
          `openapi-schema__badge--${toBadgeSlug(badge.name)}`
        )}
        style={badge.color ? { backgroundColor: badge.color } : undefined}
      >
        {badge.name}
      </span>
    ));
}
