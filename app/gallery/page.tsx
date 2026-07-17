import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Sphere } from "../components/Sphere";
import { Reveal } from "../components/Reveal";
import { SITE } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Page constants                                                      */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "AIVS — Live Pilot Gallery",
  description:
    "Five business archetypes, each taken from idea to a live URL by AIVS's AI-agent pipeline — for under $5 of AI spend each. All live right now.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    type: "website",
    url: `${SITE.url}/gallery`,
    siteName: SITE.name,
    title: "AIVS — Live Pilot Gallery",
    description:
      "Five archetypes, one AI-agent pipeline, idea → live URL for under $5 each. All live.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIVS — Live Pilot Gallery",
    description:
      "Five archetypes, one AI-agent pipeline, idea → live URL for under $5 each. All live.",
  },
};

/* ------------------------------------------------------------------ */
/* Small, page-local building blocks (mirrors the home page idiom)     */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
      <span className="text-accent/50">// </span>
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const PILOTS = [
  {
    name: "Micro-SaaS",
    slug: "focus-timer",
    depth: "fully built · 10 agent roles",
    blurb:
      "A micro-SaaS landing page with a pricing section (focus-timer). The fully built archetype.",
    url: "https://focus-timer-v166-qs9xap093-perfect-sphere.vercel.app",
  },
  {
    name: "AI Agent Product",
    slug: "ai-agent",
    depth: "pilot depth",
    blurb:
      "A landing page for an AI agent that automates a knowledge-work task.",
    url: "https://ai-agent-v169-9qqej9hhf-perfect-sphere.vercel.app",
  },
  {
    name: "Chrome Extension",
    slug: "chrome-extension",
    depth: "pilot depth",
    blurb:
      "A landing page for a browser extension that automates in-browser tasks.",
    url: "https://chrome-extension-v169-otxsrmoo5-perfect-sphere.vercel.app",
  },
  {
    name: "Paid Newsletter",
    slug: "newsletter",
    depth: "pilot depth",
    blurb: "A subscribe page for a niche paid newsletter.",
    url: "https://newsletter-v169-k0usxfqy6-perfect-sphere.vercel.app",
  },
  {
    name: "Programmatic SEO",
    slug: "programmatic-seo",
    depth: "pilot depth",
    blurb: "A content-at-scale programmatic-SEO landing page.",
    url: "https://programmatic-seo-landing-lzehvf25w-perfect-sphere.vercel.app",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function GalleryPage() {
  return (
    <div className="relative overflow-x-clip">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="group flex items-center gap-2.5">
            <Sphere className="h-7 w-7" />
            <span className="font-display text-sm font-semibold tracking-tight text-fg">
              Perfect Sphere
            </span>
          </a>
          <a
            href="/aivs"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-5 py-2 text-[13px] font-medium text-fg transition-colors hover:border-line-strong hover:bg-white/[0.03]"
          >
            About AIVS →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-6xl px-6 pb-12 pt-16 sm:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 70% 20%, rgba(138,124,255,0.10), transparent 70%)",
          }}
        />
        <Reveal>
          <Eyebrow>aivs · live pilot gallery</Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-6xl">
            From an idea to a live URL — built by AI agents.
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Each page below was generated and deployed by the same AIVS
            pipeline — five different business archetypes. One (micro-saas) is
            fully built out across 10 agent roles; the other four are at pilot
            depth. All five are live, each produced for{" "}
            <span className="text-fg">under $5 of AI spend</span>.
          </p>
        </Reveal>
      </section>

      {/* Pilot grid */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILOTS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80} className="h-full">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-line-strong"
              >
                {/* Thumbnail — branded placeholder (no external screenshots) */}
                <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-line bg-surface-2">
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(80% 80% at 50% 30%, rgba(138,124,255,0.14), transparent 70%)",
                    }}
                  />
                  <span className="relative font-mono text-xs uppercase tracking-[0.2em] text-accent/90">
                    {p.slug}
                  </span>
                  <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-bg/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-fg/80">
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                    />
                    live
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="font-display text-lg font-semibold text-fg">
                      {p.name}
                    </h2>
                  </div>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-faint">
                    {p.depth}
                  </p>
                  <p className="mt-3 text-sm text-muted">{p.blurb}</p>
                  <span className="mt-6 font-mono text-sm text-accent transition-colors group-hover:text-accent-bright">
                    View live →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}

          {/* Closing card → back to the AIVS pitch */}
          <Reveal delay={160} className="h-full">
            <a
              href="/aivs"
              className="group flex h-full flex-col justify-center rounded-2xl border border-accent/30 bg-surface p-6 transition-colors hover:border-accent/60"
            >
              <span className="font-display text-lg font-semibold text-fg">
                How it's built
              </span>
              <p className="mt-2 text-sm text-muted">
                The tested TypeScript framework behind these pages — workflow
                engine, cost controls, auto-rollback deploy.
              </p>
              <span className="mt-6 font-mono text-sm text-accent-bright">
                About AIVS →
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Honest footer note */}
      <footer className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="mx-auto max-w-2xl text-center text-sm text-faint">
            Built with AIVS. Honest note: AIVS is a framework, not a running
            business — these are generated marketing pages, not products with
            revenue.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2.5">
            <Sphere className="h-5 w-5" />
            <span className="font-display text-sm font-medium text-fg">
              Perfect Sphere
            </span>
            <span className="font-mono text-xs text-faint">
              · {SITE.domain}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
