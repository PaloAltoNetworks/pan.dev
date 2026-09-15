/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

// Swizzled (ejected) from docusaurus-theme-openapi-docs to add support for
// spec-driven availability badges (`x-badges`) on schema objects, e.g. marking
// an object as Early Access / Beta / Limited Availability. The only additions
// over the upstream component are the `renderBadges` block and its placement in
// the property-name row; everything else mirrors the original so future upstream
// changes are easy to diff. Shared helpers are imported from the package so the
// patched getQualifierMessage() constraint labels flow through here too.
//
// Ejected from 5.2.0, which inlines its translation ids instead of exporting
// the OPENAPI_SCHEMA_ITEM map. Re-diff against the package source on every
// docusaurus-theme-openapi-docs bump.

import React, { ReactNode } from "react";

import { translate } from "@docusaurus/Translate";
import { useLocation } from "@docusaurus/router";
import { Example } from "@theme/Example";
import Markdown from "@theme/Markdown";
import clsx from "clsx";

import { getQualifierMessage } from "docusaurus-theme-openapi-docs/lib/markdown/schema";
import { guard } from "docusaurus-theme-openapi-docs/lib/markdown/utils";

import { getPBQualifierMessage } from "./pbQualifierMessage";

const PB_BASE = "/prisma-browser";

export interface Props {
  children?: ReactNode;
  collapsible?: boolean;
  name?: string;
  qualifierMessage?: string | undefined;
  required?: boolean;
  schemaName?: string;
  // TODO should probably be typed
  schema?: any;
  discriminator?: boolean;
}

interface Badge {
  name: string;
  color?: string;
}

const transformEnumDescriptions = (
  enumDescriptions?: Record<string, string>
) => {
  if (enumDescriptions) {
    return Object.entries(enumDescriptions);
  }

  return [];
};

const getEnumDescriptionMarkdown = (enumDescriptions?: [string, string][]) => {
  if (enumDescriptions?.length) {
    const enumValue = translate({
      id: "theme.openapi.schemaItem.enumValue",
      message: "Enum Value",
    });
    const description = translate({
      id: "theme.openapi.schemaItem.enumDescription",
      message: "Description",
    });
    return `| ${enumValue} | ${description} |
| ---- | ----- |
${enumDescriptions
  .map((desc) => {
    return `| ${desc[0]} | ${desc[1]} | `.replaceAll("\n", "<br/>");
  })
  .join("\n")}
    `;
  }

  return "";
};

const toBadgeSlug = (name: string) =>
  name.toLowerCase().trim().replace(/\s+/g, "-");

export default function SchemaItem(props: Props) {
  const {
    children: collapsibleSchemaContent,
    collapsible,
    name,
    qualifierMessage,
    required,
    schemaName,
    schema,
  } = props;
  let deprecated;
  let schemaDescription;
  let defaultValue: string | undefined;
  let example: string | undefined;
  let examples: string[] | undefined;
  let nullable;
  let enumDescriptions: [string, string][] = [];
  let constValue: string | undefined;
  let badges: Badge[] = [];

  if (schema) {
    deprecated = schema.deprecated;
    schemaDescription = schema.description;
    enumDescriptions = transformEnumDescriptions(schema["x-enumDescriptions"]);
    defaultValue = schema.default;
    example = schema.example;
    examples = schema.examples;
    nullable =
      schema.nullable ||
      (Array.isArray(schema.type) && schema.type.includes("null")); // support JSON Schema nullable
    constValue = schema.const;
    badges = Array.isArray(schema["x-badges"]) ? schema["x-badges"] : [];
  }

  const renderRequired = guard(
    Array.isArray(required) ? required.includes(name) : required,
    () => (
      <span className="openapi-schema__required">
        {translate({
          id: "theme.openapi.schemaItem.required",
          message: "required",
        })}
      </span>
    )
  );

  const renderDeprecated = guard(deprecated, () => (
    <span className="openapi-schema__deprecated">
      {translate({
        id: "theme.openapi.schemaItem.deprecated",
        message: "deprecated",
      })}
    </span>
  ));

  const renderNullable = guard(nullable, () => (
    <span className="openapi-schema__nullable">
      {translate({
        id: "theme.openapi.schemaItem.nullable",
        message: "nullable",
      })}
    </span>
  ));

  const renderBadges = badges
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

  const renderEnumDescriptions = guard(
    getEnumDescriptionMarkdown(enumDescriptions),
    (value) => {
      return (
        <div style={{ marginTop: ".5rem" }}>
          <Markdown>{value}</Markdown>
        </div>
      );
    }
  );

  const renderSchemaDescription = guard(schemaDescription, (description) => (
    <>
      <Markdown>{description}</Markdown>
    </>
  ));

  // Generate qualifierMessage from schema if not provided. Prisma Browser pages
  // use the corrected labels in ./pbQualifierMessage; every other product keeps
  // the stock upstream output, so this swizzle stays behaviour-neutral for them.
  const { pathname } = useLocation();
  const isPBRoute = pathname.startsWith(PB_BASE);
  const buildQualifierMessage = isPBRoute
    ? getPBQualifierMessage
    : getQualifierMessage;
  const effectiveQualifierMessage =
    qualifierMessage ?? (schema ? buildQualifierMessage(schema) : undefined);

  const renderQualifierMessage = guard(effectiveQualifierMessage, (message) => (
    <>
      <Markdown>{message}</Markdown>
    </>
  ));

  function renderDefaultValue() {
    if (defaultValue !== undefined) {
      if (typeof defaultValue === "string") {
        return (
          <div>
            <strong>
              {translate({
                id: "theme.openapi.schemaItem.defaultValue",
                message: "Default value:",
              })}{" "}
            </strong>
            <span>
              <code>{defaultValue}</code>
            </span>
          </div>
        );
      }
      return (
        <div>
          <strong>
            {translate({
              id: "theme.openapi.schemaItem.defaultValue",
              message: "Default value:",
            })}{" "}
          </strong>
          <span>
            <code>{JSON.stringify(defaultValue)}</code>
          </span>
        </div>
      );
    }
    return undefined;
  }

  function renderConstValue() {
    if (constValue !== undefined) {
      if (typeof constValue === "string") {
        return (
          <div>
            <strong>
              {translate({
                id: "theme.openapi.schemaItem.constantValue",
                message: "Constant value:",
              })}{" "}
            </strong>
            <span>
              <code>{constValue}</code>
            </span>
          </div>
        );
      }
      return (
        <div>
          <strong>
            {translate({
              id: "theme.openapi.schemaItem.constantValue",
              message: "Constant value:",
            })}{" "}
          </strong>
          <span>
            <code>{JSON.stringify(constValue)}</code>
          </span>
        </div>
      );
    }
    return undefined;
  }

  const hasBadges = renderBadges.length > 0;

  const schemaContent = (
    <div>
      <span className="openapi-schema__container">
        <strong
          className={clsx("openapi-schema__property", {
            "openapi-schema__strikethrough": deprecated,
          })}
        >
          {name}
        </strong>
        <span className="openapi-schema__name">
          {Array.isArray(schemaName) ? schemaName.join(" | ") : schemaName}
        </span>
        {(nullable || required || deprecated || hasBadges) && (
          <span className="openapi-schema__divider"></span>
        )}
        {renderBadges}
        {renderNullable}
        {renderRequired}
        {renderDeprecated}
      </span>
      {renderSchemaDescription}
      {renderEnumDescriptions}
      {renderQualifierMessage}
      {renderConstValue()}
      {renderDefaultValue()}
      <Example example={example} />
      <Example examples={examples} />
      {collapsibleSchemaContent ?? collapsibleSchemaContent}
    </div>
  );

  return (
    <div className="openapi-schema__list-item">
      {collapsible ? collapsibleSchemaContent : schemaContent}
    </div>
  );
}
