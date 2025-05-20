import React, { useState } from "react";
import styles from "../pages/styles.module.css";

const useCases = [
  {
    key: "prompt-injection",
    label: "Prompt Injection",
    title: "Detect Prompt Injection",
    version: null,
    description:
      "Identify and block malicious prompt manipulation attempts in real time. Protect your AI endpoints from prompt injection attacks that try to subvert model intent or leak sensitive information.",
    learnMore: "/ai-runtime-security/api/usecases#prompt-injection",
    icons: [],
  },
  {
    key: "dlp",
    label: "Sensitive Data Loss (DLP)",
    title: "Sensitive Data Loss Prevention (DLP)",
    version: null,
    description:
      "Detect and prevent exposure of sensitive data such as API keys, credit card numbers, and PII in prompts and responses.",
    learnMore: "/ai-runtime-security/api/usecases#dlp",
    icons: [],
  },
  {
    key: "malicious-output",
    label: "Malicious Output",
    title: "Malicious Output Detection",
    version: null,
    description:
      "Scan AI model outputs for toxic, unsafe, or policy-violating content before it reaches your users.",
    learnMore: "/ai-runtime-security/api/usecases#malicious-output",
    icons: [],
  },
  {
    key: "model-agnostic",
    label: "Model-Agnostic",
    title: "Model-Agnostic Security",
    version: null,
    description:
      "Protect public and private AI models and applications via REST APIs. Works with any model, any stack.",
    learnMore: "/ai-runtime-security/api/usecases#model-agnostic",
    icons: [],
  },
];

export default function UseCasesTabs() {
  const [selected, setSelected] = useState(0);
  const selectedCase = useCases[selected];

  return (
    <div
      className={styles.useCasesTabs}
      style={{
        display: "flex",
        background: "#fafbfc",
        borderRadius: 16,
        boxShadow: "0 2px 12px 0 rgba(0,0,0,0.04)",
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
        }}
      >
        {useCases.map((uc, idx) => (
          <button
            key={uc.key}
            onClick={() => setSelected(idx)}
            style={{
              background: selected === idx ? "#ff6133" : "#f3f5f7",
              color: selected === idx ? "#fff" : "#222",
              border: "none",
              borderRadius: 12,
              padding: "14px 0",
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer",
              outline: selected === idx ? "2px solid #ff6133" : "none",
              transition: "background 0.2s, color 0.2s",
            }}
            aria-selected={selected === idx}
            aria-controls={`usecase-panel-${uc.key}`}
          >
            {uc.label}
          </button>
        ))}
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
            style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#222" }}
          >
            {selectedCase.title}
          </h3>
          {selectedCase.version && (
            <span style={{ color: "#ff6133", fontWeight: 600, fontSize: 16 }}>
              {selectedCase.version}
            </span>
          )}
        </div>
        <p
          style={{
            margin: "16px 0 24px 0",
            color: "#444",
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
