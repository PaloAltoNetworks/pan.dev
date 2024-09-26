import React from "react";
import StackdriverErrorReporter from "stackdriver-errors-js";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

// Error Reporter
export default function Root({ children }) {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();
  const errorReporterApiKey = customFields.errorReporterApiKey;

  if (ExecutionEnvironment.canUseDOM && errorReporterApiKey) {
    const errorHandler = new StackdriverErrorReporter();
    errorHandler.start({
      key: errorReporterApiKey,
      projectId: "pan-dev-f1b58",
      service: "pan-dev-frontend",
      reportUncaughtExceptions: true,
      reportUnhandledPromiseRejections: true,
    });
  }

  return <>{children}</>;
}
