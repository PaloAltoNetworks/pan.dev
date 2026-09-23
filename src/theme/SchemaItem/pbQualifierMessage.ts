/* ============================================================================
 * Copyright (c) Palo Alto Networks
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * ========================================================================== */

// Prisma Browser only. Ported from docusaurus-theme-openapi-docs 5.2.0
// (src/markdown/schema.ts, getQualifierMessage) with three corrections:
//
//   1. Array item counts get their own "Number of items:" label. Upstream files
//      minItems/maxItems under "Possible values:", which reads as if `<= 64`
//      were an allowed value rather than a length bound.
//   2. uniqueItems, minProperties and maxProperties are surfaced at all.
//      Upstream lists them as TODO and renders nothing.
//   3. A bounded array's per-item `pattern` is surfaced. Upstream only recurses
//      into `items` when neither minItems nor maxItems is set, so the pattern
//      is dropped for bounded arrays.
//
// This lives in the app rather than in patches/ because patch-package runs from
// postinstall, and CI installs with --ignore-scripts, so a patch never reaches
// the deployed site. Everything outside /prisma-browser deliberately keeps the
// stock upstream labels; see UPSTREAM-SYNC.md.
//
// Re-diff against the package source on every docusaurus-theme-openapi-docs
// upgrade.

import { translate } from "@docusaurus/Translate";

type SchemaObject = Record<string, any>;

function getEnumFromSchema(schema: SchemaObject): any[] | undefined {
  if (schema.enum) {
    return schema.enum;
  }

  if (schema.allOf && Array.isArray(schema.allOf)) {
    for (const item of schema.allOf) {
      if (item.enum) {
        return item.enum;
      }
    }
  }

  return undefined;
}

export function getPBQualifierMessage(
  schema?: SchemaObject
): string | undefined {
  // TODO:
  // - multipleOf
  if (!schema) {
    return undefined;
  }

  if (
    schema.items &&
    schema.minItems === undefined &&
    schema.maxItems === undefined
  ) {
    return getPBQualifierMessage(schema.items);
  }

  let qualifierGroups: string[] = [];

  // Check for enum in array items (directly or inside allOf)
  if (schema.items) {
    const itemsEnum = getEnumFromSchema(schema.items as SchemaObject);
    if (itemsEnum) {
      qualifierGroups.push(`[${itemsEnum.map((e) => `\`${e}\``).join(", ")}]`);
    }
    // Recursion into items is skipped above when the array is bounded, so
    // surface the per-item pattern explicitly.
    if ((schema.items as SchemaObject).pattern) {
      const itemsExpressionMessage = translate({
        id: "theme.openapi.schemaItem.expression",
        message: "Value must match regular expression",
      });
      qualifierGroups.push(
        `${itemsExpressionMessage} \`${(schema.items as SchemaObject).pattern}\``
      );
    }
  }

  if (schema.minLength || schema.maxLength) {
    let lengthQualifier = "";
    let minLength;
    let maxLength;
    const charactersMessage = translate({
      id: "theme.openapi.schemaItem.characters",
      message: "characters",
    });
    const nonEmptyMessage = translate({
      id: "theme.openapi.schemaItem.nonEmpty",
      message: "non-empty",
    });
    if (schema.minLength && schema.minLength > 1) {
      minLength = `\`>= ${schema.minLength} ${charactersMessage}\``;
    }
    if (schema.minLength && schema.minLength === 1) {
      minLength = `\`${nonEmptyMessage}\``;
    }
    if (schema.maxLength) {
      maxLength = `\`<= ${schema.maxLength} ${charactersMessage}\``;
    }

    if (minLength && !maxLength) {
      lengthQualifier += minLength;
    }
    if (maxLength && !minLength) {
      lengthQualifier += maxLength;
    }
    if (minLength && maxLength) {
      lengthQualifier += `${minLength} and ${maxLength}`;
    }

    qualifierGroups.push(lengthQualifier);
  }

  if (
    schema.minimum != null ||
    schema.maximum != null ||
    typeof schema.exclusiveMinimum === "number" ||
    typeof schema.exclusiveMaximum === "number"
  ) {
    let minmaxQualifier = "";
    let minimum;
    let maximum;
    if (typeof schema.exclusiveMinimum === "number") {
      minimum = `\`> ${schema.exclusiveMinimum}\``;
    } else if (schema.minimum != null && !schema.exclusiveMinimum) {
      minimum = `\`>= ${schema.minimum}\``;
    } else if (schema.minimum != null && schema.exclusiveMinimum === true) {
      minimum = `\`> ${schema.minimum}\``;
    }
    if (typeof schema.exclusiveMaximum === "number") {
      maximum = `\`< ${schema.exclusiveMaximum}\``;
    } else if (schema.maximum != null && !schema.exclusiveMaximum) {
      maximum = `\`<= ${schema.maximum}\``;
    } else if (schema.maximum != null && schema.exclusiveMaximum === true) {
      maximum = `\`< ${schema.maximum}\``;
    }

    if (minimum && !maximum) {
      minmaxQualifier += minimum;
    }
    if (maximum && !minimum) {
      minmaxQualifier += maximum;
    }
    if (minimum && maximum) {
      minmaxQualifier += `${minimum} and ${maximum}`;
    }

    qualifierGroups.push(minmaxQualifier);
  }

  if (schema.pattern) {
    const expressionMessage = translate({
      id: "theme.openapi.schemaItem.expression",
      message: "Value must match regular expression",
    });
    qualifierGroups.push(`${expressionMessage} \`${schema.pattern}\``);
  }

  // Check if discriminator mapping
  const discriminator = schema as any;
  if (discriminator.mapping) {
    const values = Object.keys(discriminator.mapping);
    qualifierGroups.push(`[${values.map((e) => `\`${e}\``).join(", ")}]`);
  }

  // Check for enum directly on schema or inside allOf
  const schemaEnum = getEnumFromSchema(schema);
  if (schemaEnum) {
    qualifierGroups.push(`[${schemaEnum.map((e) => `\`${e}\``).join(", ")}]`);
  }

  let countQualifier = "";
  if (schema.minItems && schema.maxItems) {
    countQualifier = `\`>= ${schema.minItems}\` and \`<= ${schema.maxItems}\``;
  } else if (schema.minItems) {
    countQualifier = `\`>= ${schema.minItems}\``;
  } else if (schema.maxItems) {
    countQualifier = `\`<= ${schema.maxItems}\``;
  }

  if (
    schema.uniqueItems &&
    (schema.minItems || schema.maxItems || schema.items)
  ) {
    const uniqueMessage = translate({
      id: "theme.OpenapiItem.uniqueItems",
      message: "unique items",
    });
    countQualifier = countQualifier
      ? `${countQualifier}, ${uniqueMessage}`
      : uniqueMessage;
  }

  let propsQualifier = "";
  if (schema.minProperties && schema.maxProperties) {
    propsQualifier = `\`>= ${schema.minProperties}\` and \`<= ${schema.maxProperties}\``;
  } else if (schema.minProperties) {
    propsQualifier = `\`>= ${schema.minProperties}\``;
  } else if (schema.maxProperties) {
    propsQualifier = `\`<= ${schema.maxProperties}\``;
  }

  const segments: string[] = [];
  if (qualifierGroups.length > 0) {
    segments.push(
      `**${translate({
        id: "theme.openapi.schemaItem.possibleValues",
        message: "Possible values:",
      })}** ${qualifierGroups.join(", ")}`
    );
  }
  if (countQualifier) {
    segments.push(
      `**${translate({
        id: "theme.OpenapiItem.numberOfItems",
        message: "Number of items:",
      })}** ${countQualifier}`
    );
  }
  if (propsQualifier) {
    segments.push(
      `**${translate({
        id: "theme.OpenapiItem.numberOfProperties",
        message: "Number of properties:",
      })}** ${propsQualifier}`
    );
  }

  if (segments.length === 0) {
    return undefined;
  }

  return segments.join("<br/>");
}
