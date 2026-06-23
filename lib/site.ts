/**
 * Central site configuration.
 *
 * Every "Book a call" button on the page reads from this one constant,
 * so swapping this single value updates them all.
 */
export const CAL_LINK = "https://cal.com/perfectsphere/intro-call";

export const CONTACT_EMAIL = "hello@perfectsphere.dev";

export const SITE = {
  name: "Perfect Sphere",
  domain: "perfectsphere.dev",
  url: "https://perfectsphere.dev",
  title: "Perfect Sphere — AI features shipped in 5 days",
  description:
    "I build the AI feature your product is missing — shipped in 5 days, fixed price. MVPs & custom software for founders.",
} as const;
