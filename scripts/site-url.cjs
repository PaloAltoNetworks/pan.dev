// Site url and baseUrl, shared by docusaurus.config.ts and the scripts that
// write absolute links (scripts/prisma-browser/build-guide-index.mjs), so the
// generated links always point at the site the build serves.

function resolveSiteUrl() {
  return process.env.GL_PAGES_URL
    ? process.env.GL_PAGES_URL
    : (process.env.CI_PAGES_URL ?? "https://pan.dev");
}

function resolveBaseUrl() {
  if (process.env.CI_MERGE_REQUEST_IID) {
    if (process.env.CI_PROJECT_DIR == "dev") {
      return "/";
    }
    return (
      process.env.GL_PAGES_BASE_URL ??
      `/-/${process.env.CI_PROJECT_NAME}/-/jobs/${process.env.CI_JOB_ID}/artifacts/public/`
    );
  }
  return process.env.GL_PAGES_BASE_URL ?? "/";
}

module.exports = { resolveSiteUrl, resolveBaseUrl };
