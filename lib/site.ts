/**
 * Central site configuration.
 *
 * Every "Book a call" button on the page reads from this one constant,
 * so swapping this single value updates them all.
 */
export const CAL_LINK = "https://cal.com/perfectsphere/intro-call";

export const CONTACT_EMAIL = "hello@perfectsphere.dev";

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/kefin-pudi-danukusumo-04709014b/";

/** Name of the recurring managed-sync product. Rename here only. */
export const PRODUCT_NAME = "Sphere Sync";

export const SITE = {
  name: "Perfect Sphere",
  domain: "perfectsphere.dev",
  url: "https://perfectsphere.dev",
  title: "Perfect Sphere — We fix revenue leaks between your CRM, Design System & Financing",
  description:
    "A specialized RevOps engineering squad for US solar & home-improvement contractors. Leak-proof, two-way API integrations that eliminate manual data re-keying and prevent dropped leads — 24/7.",
} as const;
