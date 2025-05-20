import React from "react";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import { useColorMode } from "@docusaurus/theme-common";
import CodeBlock from "@theme/CodeBlock";
import UseCasesTabs from "../components/UseCasesTabs";

// If you have a logo component for the API, import it here
// import ApiLogo from "@theme/ApiLogo";

const VersionBadge = () => (
  <span className="badge badge--secondary" style={{ marginLeft: 8 }}>
    Version: 0.0.0
  </span>
);

const Card = ({ title, children, link, linkLabel }) => {
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === "dark";
  return (
    <div
      style={{
        background: isDarkTheme
          ? "var(--ifm-background-surface-color)"
          : "#fff",
        border: isDarkTheme
          ? "1px solid var(--ifm-toc-border-color)"
          : "1px solid #e0e7ef",
        borderRadius: 8,
        padding: 24,
        marginBottom: 24,
        flex: 1,
        minWidth: 260,
        color: isDarkTheme ? "var(--ifm-font-color-base)" : undefined,
      }}
    >
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <div style={{ marginBottom: 12 }}>{children}</div>
      {link && (
        <a
          href={link}
          target={link.startsWith("/ai-runtime-security") ? "_self" : "_blank"}
          rel="noopener noreferrer"
          style={{
            color: isDarkTheme ? "#66bfff" : "#005fa3",
            fontWeight: 500,
          }}
        >
          {linkLabel || "Learn more"} ↗
        </a>
      )}
    </div>
  );
};

export default function AIRSApiIntercept() {
  return (
    <Layout
      title="Prisma AIRS API Intercept"
      description="OpenAPI-based threat detection for AI applications. Secure your AI models and data with real-time API scanning."
      wrapperClassName="airs-api-intercept-landing"
    >
      <main
        style={{ background: "#f5f7fa", minHeight: "100vh", paddingBottom: 60 }}
      >
        {/* Hero Section */}
        <section
          className={styles.heroSection}
          style={{
            padding: "72px 0 56px 0",
            background: "#171717", // Brand dark
            borderBottom: "1px solid #222",
            color: "#fff",
            transition: "background 0.3s",
          }}
        >
          <div
            className="container"
            style={{
              maxWidth: 900,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            {/* Optional: Add logo/icon for extra polish */}
            {/* <ApiLogo style={{ height: 56, marginBottom: 24 }} /> */}
            <h1
              style={{
                margin: 0,
                fontSize: 40,
                fontWeight: 700,
                letterSpacing: -1,
                lineHeight: 1.1,
                color: "#fff",
                textAlign: "left",
              }}
            >
              Introducing{" "}
              <span style={{ color: "#00c0e8" }}>
                Prisma AIRS API Intercept
              </span>
            </h1>
            <p
              style={{
                margin: "28px 0 0 0",
                fontSize: 24,
                color: "#fff",
                fontWeight: 400,
                lineHeight: 1.4,
                textAlign: "left",
                maxWidth: 600,
              }}
            >
              Prisma
              <sup style={{ fontSize: 14, verticalAlign: "super" }}>®</sup> AIRS
              API Intercept brings real-time API threat detection to your AI
              applications.
            </p>
            <div style={{ margin: "36px 0 0 0", width: "100%", maxWidth: 650 }}>
              <CodeBlock language="bash">
                {`curl -X POST \
  https://service.api.aisecurity.paloaltonetworks.com/v1/scan/sync/request \
  -H "x-pan-token: <YOUR_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "tr_id": "1234",
    "ai_profile": { "profile_name": "YOUR_PROFILE" },
    "metadata": { "app_user": "test-user" },
    "prompt": "Check this prompt for security issues."
  }'`}
              </CodeBlock>
              <a
                href="https://docs.paloaltonetworks.com/ai-runtime-security/activation-and-onboarding/ai-runtime-security-api-intercept-overview"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  background: "#00c0e8",
                  color: "#171717",
                  fontWeight: 600,
                  fontSize: 18,
                  borderRadius: 24,
                  padding: "12px 32px",
                  textDecoration: "none",
                  boxShadow: "0 2px 12px 0 rgba(0,192,232,0.15)",
                  transition: "background 0.2s",
                  marginTop: 24,
                }}
              >
                Getting Started &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section
          className="container"
          style={{ marginTop: 36, marginBottom: 0 }}
        >
          <h2
            style={{
              fontWeight: 700,
              fontSize: 28,
              marginBottom: 8,
              color: "#171717",
            }}
          >
            Use Cases
          </h2>
          <UseCasesTabs />
        </section>

        {/* Three Column: Use Cases / API Reference / Getting Started */}
        <section
          className="container"
          style={{ marginTop: 24, display: "flex", gap: 24, flexWrap: "wrap" }}
        >
          <Card
            title="Use Cases"
            link="/ai-runtime-security/api/usecases"
            linkLabel="See all use cases"
          >
            <ul style={{ paddingLeft: 20 }}>
              <li>Detect prompt injection and malicious input</li>
              <li>Prevent sensitive data loss (DLP)</li>
              <li>Scan for toxic or unsafe model output</li>
              <li>Enable model-agnostic API protection</li>
            </ul>
          </Card>
          <Card
            title="API Reference"
            link="/ai-runtime-security/api/ai-runtime-security-api-intercept/"
            linkLabel="Full API Reference"
          >
            <ul style={{ paddingLeft: 20 }}>
              <li>OpenAPI spec & endpoints</li>
              <li>Request/response schema</li>
              <li>Authentication & error codes</li>
              <li>Sample payloads</li>
            </ul>
          </Card>
          <Card
            title="Getting Started"
            link="https://docs.paloaltonetworks.com/ai-runtime-security/activation-and-onboarding/ai-runtime-security-api-intercept-overview"
            linkLabel="Onboarding Guide"
          >
            <ol style={{ paddingLeft: 18 }}>
              <li>Activate your deployment profile</li>
              <li>Onboard API Intercept in Strata Cloud Manager</li>
              <li>Generate API key & security profile</li>
              <li>Integrate with your app</li>
            </ol>
          </Card>
        </section>

        {/* Footer note */}
        <section
          className="container"
          style={{
            marginTop: 40,
            color: "#7a869a",
            fontSize: 13,
            textAlign: "center",
          }}
        >
          <span>
            © 2024 Palo Alto Networks, Inc. |{" "}
            <a
              href="https://www.paloaltonetworks.com/company/trademarks.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trademarks
            </a>
          </span>
        </section>
      </main>
    </Layout>
  );
}
