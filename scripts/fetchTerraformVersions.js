// fetchTerraformVersions.js
// Fetches latest versions of Terraform providers and modules from the
// Terraform Registry API and writes them to src/data/terraform-versions.json.
// Run as part of the build: node scripts/fetchTerraformVersions.js

const https = require("https");
const fs = require("fs");
const path = require("path");

const REGISTRY_BASE = "https://registry.terraform.io/v1";

// Providers: key = provider type, value = namespace/type for the API
const PROVIDERS = {
  panos: "PaloAltoNetworks/panos",
  cloudngfwaws: "PaloAltoNetworks/cloudngfwaws",
  prismacloud: "PaloAltoNetworks/prismacloud",
  prismacloudcompute: "PaloAltoNetworks/prismacloudcompute",
  bridgecrew: "PaloAltoNetworks/bridgecrew",
};

// Modules: key = name/provider, value = namespace/name/provider for the API
const MODULES = {
  "swfw-modules/aws": "PaloAltoNetworks/swfw-modules/aws",
  "swfw-modules/google": "PaloAltoNetworks/swfw-modules/google",
  "swfw-modules/azurerm": "PaloAltoNetworks/swfw-modules/azurerm",
  "ag-dag-nia/panos": "PaloAltoNetworks/ag-dag-nia/panos",
  "dag-nia/panos": "PaloAltoNetworks/dag-nia/panos",
};

const OUT_PATH = path.join(
  __dirname,
  "..",
  "src",
  "data",
  "terraform-versions.json"
);

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "pan-dev-build" } }, (res) => {
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(new Error(`Invalid JSON from ${url}`));
          }
        });
        res.on("error", reject);
      })
      .on("error", reject);
  });
}

// Pre-release versions contain a hyphen after the numeric part (e.g. 3.0.0-rc.1)
function isStableVersion(version) {
  return !/^\d+\.\d+\.\d+-.+/.test(version);
}

async function getProviderVersion(apiPath) {
  const data = await fetchJSON(`${REGISTRY_BASE}/providers/${apiPath}`);
  const stable = data.versions.filter(isStableVersion);
  return stable[stable.length - 1];
}

async function getModuleVersion(apiPath) {
  const data = await fetchJSON(`${REGISTRY_BASE}/modules/${apiPath}`);
  if (isStableVersion(data.version)) {
    return data.version;
  }
  // Latest is pre-release; find the latest stable from the versions list
  const stable = data.versions.filter(isStableVersion);
  return stable[stable.length - 1];
}

async function main() {
  // Load existing versions as fallback
  let existing = { providers: {}, modules: {} };
  if (fs.existsSync(OUT_PATH)) {
    try {
      existing = JSON.parse(fs.readFileSync(OUT_PATH, "utf-8"));
    } catch {}
  }

  const versions = { providers: {}, modules: {} };

  console.log("Fetching Terraform provider versions...");
  const providerResults = await Promise.allSettled(
    Object.entries(PROVIDERS).map(async ([key, apiPath]) => {
      const version = await getProviderVersion(apiPath);
      versions.providers[key] = `v${version}`;
      console.log(`  ${key}: v${version}`);
    })
  );

  console.log("Fetching Terraform module versions...");
  const moduleResults = await Promise.allSettled(
    Object.entries(MODULES).map(async ([key, apiPath]) => {
      const version = await getModuleVersion(apiPath);
      versions.modules[key] = `v${version}`;
      console.log(`  ${key}: v${version}`);
    })
  );

  // For any failures, fall back to existing values
  const allResults = [...providerResults, ...moduleResults];
  const failures = allResults.filter((r) => r.status === "rejected");
  if (failures.length > 0) {
    console.warn("\nWarning: Some version fetches failed:");
    failures.forEach((f) => console.warn(`  ${f.reason.message}`));
  }

  for (const key of Object.keys(PROVIDERS)) {
    if (!versions.providers[key]) {
      versions.providers[key] = existing.providers?.[key] || "unknown";
      console.warn(`  Using fallback for provider ${key}: ${versions.providers[key]}`);
    }
  }
  for (const key of Object.keys(MODULES)) {
    if (!versions.modules[key]) {
      versions.modules[key] = existing.modules?.[key] || "unknown";
      console.warn(`  Using fallback for module ${key}: ${versions.modules[key]}`);
    }
  }

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, JSON.stringify(versions, null, 2) + "\n");
  console.log(`\nWrote ${OUT_PATH}`);
}

main().catch((err) => {
  console.error("Error fetching Terraform versions:", err);
  // Non-fatal: don't break the build if the registry is unreachable.
  // The existing JSON file (checked into git) will be used instead.
  process.exit(0);
});
