/**
 * Guard for the ejected OpenAPI theme components.
 *
 * src/theme/Schema/, src/theme/SchemaItem/ and src/theme/Schema/normalize.ts are
 * full ejects of docusaurus-theme-openapi-docs, not wrappers, so they override
 * the OpenAPI theme for every API product on the site. They are correct only for
 * the version they were taken from: on a plugin bump they keep rendering the old
 * component and silently drop whatever upstream changed.
 *
 * This fails the build when the pinned version moves without the ejects being
 * re-diffed, so the freeze cannot happen quietly. It runs as part of `yarn
 * gen-pb`, which is wired into `start` and every `build:*` target.
 *
 * When bumping the plugin: diff the upstream components against the ejects,
 * carry over any upstream change, then update EJECTED_FROM below.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// The version src/theme/Schema/ and src/theme/SchemaItem/ were ejected from.
const EJECTED_FROM = "5.2.0";

const PACKAGES = [
  "docusaurus-theme-openapi-docs",
  "docusaurus-plugin-openapi-docs",
];

const EJECTS = [
  "src/theme/Schema/index.tsx",
  "src/theme/Schema/normalize.ts",
  "src/theme/SchemaItem/index.tsx",
];

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../.."
);
const pkg = JSON.parse(
  fs.readFileSync(path.join(repoRoot, "package.json"), "utf8")
);
const deps = { ...pkg.dependencies, ...pkg.devDependencies };

const problems = [];

for (const name of PACKAGES) {
  const pinned = deps[name];
  if (!pinned) {
    problems.push(`${name} is not declared in package.json.`);
    continue;
  }
  if (/^[\^~]/.test(pinned)) {
    problems.push(
      `${name} is "${pinned}": it must stay exactly pinned (no ^ or ~) while ` +
        `src/theme/Schema* are ejects, or a patch release can change the ` +
        `upstream component without the ejects being re-diffed.`
    );
    continue;
  }
  if (pinned !== EJECTED_FROM) {
    problems.push(
      `${name} is pinned to ${pinned}, but the ejected components in ` +
        `src/theme/ were taken from ${EJECTED_FROM}.\n` +
        `  Re-diff these against ${name}@${pinned} and carry over any upstream ` +
        `change:\n${EJECTS.map((f) => `    ${f}`).join("\n")}\n` +
        `  Then set EJECTED_FROM = "${pinned}" in ` +
        `scripts/prisma-browser/check-theme-pin.mjs.`
    );
  }
}

for (const file of EJECTS) {
  if (!fs.existsSync(path.join(repoRoot, file))) {
    problems.push(
      `${file} is missing. If the ejects were replaced by wrappers, remove ` +
        `this guard and its "check-theme-pin" script entry.`
    );
  }
}

if (problems.length > 0) {
  console.error(
    `[check-theme-pin] The ejected OpenAPI theme components are out of sync ` +
      `with the pinned plugin version:\n\n${problems
        .map((p) => `- ${p}`)
        .join("\n")}\n`
  );
  process.exit(1);
}

console.log(
  `[check-theme-pin] OK: ${PACKAGES.join(", ")} pinned to ${EJECTED_FROM}, ` +
    `matching the ${EJECTS.length} ejected components in src/theme/.`
);
