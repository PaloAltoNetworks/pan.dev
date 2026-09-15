import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");
const workspaceRoot = path.resolve(repoRoot, "../..");
const cloudAppsRoot = path.join(workspaceRoot, "code/cloud-apps");
const outDir = path.join(repoRoot, "src/components/PBPortal/design-system");

const sources = {
  coreui: {
    package: "@talon/coreui",
    path: "libs/common-ts/coreui",
    tokenFile: "libs/common-ts/coreui/src/lib/css/variables.scss",
  },
  coreIcons: {
    package: "@pb/core-icons",
    path: "libs/common-ts/core-icons",
  },
  coreIllustrations: {
    package: "@pb/core-illustrations",
    path: "libs/common-ts/core-illustrations",
  },
};

function readJson(file) {
  return JSON.parse(fs.readFileSync(path.join(cloudAppsRoot, file), "utf8"));
}

function git(args) {
  return execFileSync("git", args, {
    cwd: cloudAppsRoot,
    encoding: "utf8",
  }).trim();
}

fs.mkdirSync(outDir, { recursive: true });

const commit = git(["rev-parse", "HEAD"]);
const generatedAt = new Date().toISOString();
const command = "node scripts/prisma-browser/sync-coreui-design-system.mjs";

const coreuiTokens = fs.readFileSync(
  path.join(cloudAppsRoot, sources.coreui.tokenFile),
  "utf8"
);

const header = `/* Generated from cloud-apps Core UI.
 * Source: ${sources.coreui.tokenFile}
 * Commit: ${commit}
 * Generated: ${generatedAt}
 * Command: ${command}
 * Do not edit by hand.
 */

`;

fs.writeFileSync(
  path.join(outDir, "coreui-tokens.scss"),
  header + coreuiTokens
);

const metadata = {
  generatedAt,
  commit,
  command,
  sources: {
    coreui: {
      ...sources.coreui,
      version: readJson("libs/common-ts/coreui/package.json").version,
    },
    coreIcons: {
      ...sources.coreIcons,
      version: readJson("libs/common-ts/core-icons/package.json").version,
    },
    coreIllustrations: {
      ...sources.coreIllustrations,
      version: readJson("libs/common-ts/core-illustrations/package.json")
        .version,
    },
  },
};

fs.writeFileSync(
  path.join(outDir, "coreui-source.json"),
  `${JSON.stringify(metadata, null, 2)}\n`
);

console.log(`Synced Core UI tokens from cloud-apps ${commit}`);
