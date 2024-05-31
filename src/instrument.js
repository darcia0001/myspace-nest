// Import with `const Sentry = require("@sentry/node");` if you are using CJS
import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn:
    "https://d5e9fa1eb972c3356d7d9410798a0be6@o4507329864335360.ingest.de.sentry.io/4507329869578320",
  integrations: [nodeProfilingIntegration()],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions

  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});
