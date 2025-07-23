import React, { useEffect } from "react";
import StackdriverErrorReporter from "stackdriver-errors-js";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

// Error Reporter
export default function Root({ children }) {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  const errorReporterApiKey = customFields.errorReporterApiKey;

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    if (errorReporterApiKey) {
      const errorHandler = new StackdriverErrorReporter();
      errorHandler.start({
        key: errorReporterApiKey,
        projectId: "pan-dev-f1b58",
        service: "pan-dev-frontend",
        reportUncaughtExceptions: true,
        reportUnhandledPromiseRejections: true,
      });

      const originalReport = errorHandler.report.bind(errorHandler);
      errorHandler.report = (err, options) => {
        const msg = typeof err === "string" ? err : err?.message || "";
        const name = typeof err === "object" && err ? err.name : "";
        if (name === "ChunkLoadError" || msg.includes("ChunkLoadError")) {
          return Promise.resolve(null);
        }
        return originalReport(err, options);
      };
    }
  }, []);

  return <>{children}</>;
}
