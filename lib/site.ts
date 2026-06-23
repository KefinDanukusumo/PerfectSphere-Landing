/**
 * Central site configuration.
 *
 * TODO: replace CAL_LINK with your real Cal.com booking URL.
 * Every "Book a call" button on the page reads from this one constant,
 * so swapping this single value updates them all.
 */
export const CAL_LINK = "CAL_LINK"; // e.g. "https://cal.com/jeffreyleou/intro"

export const CONTACT_EMAIL = "hello@perfectsphere.dev";

export const SITE = {
  name: "Perfect Sphere",
  domain: "perfectsphere.dev",
  url: "https://perfectsphere.dev",
  title: "Perfect Sphere — AI features shipped in 5 days",
  description:
    "I build the AI feature your product is missing — shipped in 5 days, fixed price. MVPs & custom software for founders.",
} as const;
