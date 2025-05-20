import React, { useState } from "react";
import styles from "../pages/styles.module.css";
import { useColorMode } from "@docusaurus/theme-common";

const useCases = [
  {
    key: "prompt-injection",
    label: "Prompt Injection",
    title: "Detect Prompt Injection",
    version: null,
    description:
      "Identify and block malicious prompt manipulation attempts in real time. Protect your AI endpoints from prompt injection attacks that try to subvert model intent or leak sensitive information.",
    learnMore:
      "https://pan.dev/ai-runtime-security/api/usecases#detect-prompt-injection",
    icons: [],
  },
  {
    key: "malicious-url",
    label: "Malicious URL",
    title: "Detect Malicious URL",
    version: null,
    description:
      "Scan for and block malicious URLs in AI model outputs and responses, preventing phishing or malware delivery.",
    learnMore:
      "https://pan.dev/ai-runtime-security/api/usecases#detect-malicious-url",
    icons: [],
  },
  {
    key: "dlp",
    label: "Sensitive Data Loss",
    title: "Detect Sensitive Data Loss",
    version: null,
    description:
      "Detect and prevent exposure of sensitive data such as API keys, credit card numbers, and PII in prompts and responses.",
    learnMore:
      "https://pan.dev/ai-runtime-security/api/usecases#detect-sensitive-data-loss",
    icons: [],
  },
  {
    key: "mask-sensitive-data",
    label: "Mask Sensitive Data",
    title: "Mask Sensitive Data",
    version: null,
    description:
      "Automatically mask sensitive data patterns in prompts and responses, with precise offset information for granular redaction.",
    learnMore:
      "https://pan.dev/ai-runtime-security/api/usecases#mask-sensitive-data",
    icons: [],
  },
  {
    key: "db-security",
    label: "Database Security Attack",
    title: "Detect Database Security Attack",
    version: null,
    description:
      "Detect and block attempts to exploit database vulnerabilities or extract sensitive data via AI prompts and responses.",
    learnMore:
      "https://pan.dev/ai-runtime-security/api/usecases#detect-database-security-attack",
    icons: [],
  },
  {
    key: "toxic-content",
    label: "Toxic Content",
    title: "Detect Toxic Content",
    version: null,
    description:
      "Detect and block toxic, offensive, or unsafe content in prompts and responses using advanced content moderation models.",
    learnMore:
      "https://pan.dev/ai-runtime-security/api/usecases#detect-toxic-content",
    icons: [],
  },
  {
    key: "malicious-code",
    label: "Malicious Code",
    title: "Detect Malicious Code",
    version: null,
    description:
      "Scan and block AI-generated code that may be harmful, contain exploits, or introduce vulnerabilities.",
    learnMore:
      "https://pan.dev/ai-runtime-security/api/usecases#detect-malicious-code",
    icons: [],
  },
  {
    key: "agent-threats",
    label: "AI Agent Threats",
    title: "Detect AI Agent Threats",
    version: null,
    description:
      "Identify and block threats targeting agentic AI workflows, including tool misuse, agent manipulation, and unsafe outputs.",
    learnMore:
      "https://pan.dev/ai-runtime-security/api/usecases#detect-ai-agent-threats",
    icons: [],
  },
  {
    key: "contextual-grounding",
    label: "Contextual Grounding",
    title: "Detect Contextual Grounding",
    version: null,
    description:
      "Ensure AI outputs are grounded in the intended context and prevent hallucinations or context drift.",
    learnMore:
      "https://pan.dev/ai-runtime-security/api/usecases#detect-contextual-grounding",
    icons: [],
  },
  {
    key: "custom-topic-guardrails",
    label: "Custom Topic Guardrails",
    title: "Custom Topic Guardrails",
    version: null,
    description:
      "Define and enforce custom rules to block or allow topics based on your organization's needs.",
    learnMore:
      "https://pan.dev/ai-runtime-security/api/usecases#custom-topic-guardrails",
    icons: [],
  },
  {
    key: "mcp-security",
    label: "Secure MCP",
    title: "Secure Model Context Protocol (MCP)",
    version: null,
    description:
      "Guard against 'tool poisoning' and prompt injection in agentic AI workflows. Use API Intercept to scan and validate MCP tool descriptions, inputs, and outputs—building guardrails that keep your agents safe. Learn more in our hands-on blog post.",
    learnMore:
      "https://medium.com/palo-alto-networks-developer-blog/these-arent-the-tools-you-re-looking-for-securing-mcp-with-api-intercept-6fb8fb29978d",
    icons: [],
  },
];

export default function UseCasesTabs() {
  const [selected, setSelected] = useState(0);
  const selectedCase = useCases[selected];
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  // Color palette
  const bg = isDark ? "#22252a" : "#fafbfc";
  const cardShadow = isDark
    ? "0 2px 12px 0 rgba(0,0,0,0.32)"
    : "0 2px 12px 0 rgba(0,0,0,0.04)";
  const tabBg = isDark ? "#23272e" : "#f3f5f7";
  const tabActive = "#ff6133";
  const tabHover = isDark ? "#d94e24" : "#d94e24";
  const tabText = isDark ? "#fff" : "#222";
  const tabInactiveText = isDark ? "#c9ccd1" : "#222";
  const contentTitle = isDark ? "#fff" : "#222";
  const contentDesc = isDark ? "#c9ccd1" : "#444";

  return (
    <div
      className={styles.useCasesTabs}
      style={{
        display: "flex",
        background: bg,
        borderRadius: 16,
        boxShadow: cardShadow,
        padding: 32,
        gap: 32,
        alignItems: "stretch",
        margin: "40px 0",
      }}
    >
      {/* Tabs */}
      <div
        style={{
          minWidth: 160,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          maxHeight: "calc(4 * 44px + 3 * 12px + 16px)",
          overflowY: "auto",
          paddingBottom: 16,
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {useCases.map((uc, idx) => (
          <button
            key={uc.key}
            onClick={() => setSelected(idx)}
            style={{
              background: selected === idx ? tabActive : tabBg,
              color: selected === idx ? "#fff" : tabInactiveText,
              border: "none",
              borderRadius: 12,
              padding: "10px 18px",
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer",
              outline: selected === idx ? `2px solid ${tabActive}` : "none",
              transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
              boxShadow:
                selected === idx
                  ? isDark
                    ? "0 2px 8px 0 rgba(255,97,51,0.16)"
                    : "0 2px 8px 0 rgba(255,97,51,0.08)"
                  : undefined,
            }}
            onMouseEnter={(e) => {
              if (selected !== idx) {
                e.currentTarget.style.background = tabHover;
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.boxShadow = isDark
                  ? "0 2px 8px 0 rgba(217,78,36,0.18)"
                  : "0 2px 8px 0 rgba(217,78,36,0.10)";
              } else {
                e.currentTarget.style.background = tabActive;
                e.currentTarget.style.color = "#fff";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                selected === idx ? tabActive : tabBg;
              e.currentTarget.style.color =
                selected === idx ? "#fff" : tabInactiveText;
              e.currentTarget.style.boxShadow =
                selected === idx
                  ? isDark
                    ? "0 2px 8px 0 rgba(255,97,51,0.16)"
                    : "0 2px 8px 0 rgba(255,97,51,0.08)"
                  : "none";
            }}
            aria-selected={selected === idx}
            aria-controls={`usecase-panel-${uc.key}`}
          >
            {uc.label}
          </button>
        ))}
        {/* Scroll indicator gradient */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 28,
            pointerEvents: "none",
            background: isDark
              ? "linear-gradient(to bottom, rgba(34,37,42,0) 0%, #22252a 100%)"
              : "linear-gradient(to bottom, rgba(250,251,252,0) 0%, #fafbfc 100%)",
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
          }}
        />
      </div>
      {/* Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <h3
            style={{
              margin: 0,
              fontSize: 22,
              fontWeight: 700,
              color: contentTitle,
            }}
          >
            {selectedCase.title}
          </h3>
          {selectedCase.version && (
            <span style={{ color: tabActive, fontWeight: 600, fontSize: 16 }}>
              {selectedCase.version}
            </span>
          )}
        </div>
        <p
          style={{
            margin: "16px 0 24px 0",
            color: contentDesc,
            fontSize: 17,
            lineHeight: 1.6,
          }}
        >
          {selectedCase.description}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* Placeholder for icons if needed */}
          {selectedCase.icons.map((icon, idx) => (
            <img
              key={idx}
              src={icon}
              alt="icon"
              style={{ height: 32, width: "auto" }}
            />
          ))}
        </div>
        <div style={{ marginTop: 18 }}>
          <a
            href={selectedCase.learnMore}
            style={{
              color: "#ff6133",
              fontWeight: 600,
              fontSize: 16,
              textDecoration: "none",
            }}
            target="_self"
          >
            Learn More &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
