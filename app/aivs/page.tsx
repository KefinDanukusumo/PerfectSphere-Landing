import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Sphere } from "../components/Sphere";
import { Reveal } from "../components/Reveal";
import { CONTACT_EMAIL, SITE } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Page constants                                                      */
/* ------------------------------------------------------------------ */

const GALLERY = "/gallery";
const BUY_SUBJECT = "AIVS acquisition — inquiry";
const MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(BUY_SUBJECT)}`;

export const metadata: Metadata = {
  title: "AIVS — tested AI-agent orchestration + deploy framework (for sale)",
  description:
    "AIVS is a production-grade TypeScript framework for AI-agent orchestration: event-sourced workflow engine, real cost controls, and a Vercel deploy pipeline with automatic rollback. 1,170 tests. 5 archetypes proven idea → live URL. For sale as a codebase.",
  alternates: { canonical: "/aivs" },
  openGraph: {
    type: "website",
    url: `${SITE.url}/aivs`,
    siteName: SITE.name,
    title: "AIVS — AI-agent orchestration + deploy framework (for sale)",
    description:
      "Tested TypeScript foundation for AI-agent build tooling. 1,170 tests, auto-rollback deploy pipeline, 5 live pilots. Buy-vs-build the plumbing.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIVS — AI-agent orchestration + deploy framework (for sale)",
    description:
      "Tested TypeScript foundation for AI-agent build tooling. 1,170 tests, auto-rollback deploy pipeline, 5 live pilots.",
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

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
      {children}
    </h2>
  );
}

function CTA({
  href,
  variant = "primary",
  children,
  className = "",
}: {
  href: string;
  variant?: "primary" | "ghost";
  children: ReactNode;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-offset-4";
  const styles =
    variant === "primary"
      ? "bg-accent text-bg hover:bg-accent-bright hover:-translate-y-0.5 shadow-[0_0_0_1px_rgba(245,165,36,0.35),0_10px_40px_-12px_rgba(245,165,36,0.55)]"
      : "border border-line text-fg hover:border-line-strong hover:bg-white/[0.03]";
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const STATS = [
  { value: "1,170", label: "passing tests" },
  { value: "~15k", label: "lines of TypeScript" },
  { value: "5", label: "archetypes proven live" },
  { value: "<$5", label: "AI spend per pilot" },
  { value: "3", label: "runtime dependencies" },
];

const REAL = [
  {
    title: "Event-sourced workflow engine",
    blurb:
      "A deterministic, gated state machine with an append-only event log per venture. Not a pile of prompt strings.",
  },
  {
    title: "Real per-call cost & budget controls",
    blurb:
      "Hard USD caps, spend guards, daily/monthly budgets with warn/block enforcement. The thing every AI side-project skips.",
  },
  {
    title: "Deploy pipeline that ships",
    blurb:
      "A Vercel adapter with post-deploy health checks and automatic rollback on an unhealthy deploy. Drilled live.",
  },
  {
    title: "8-agent orchestration layer",
    blurb:
      "Research, Product, Engineering, QA, DevOps, Marketing, Sales, Finance — per-agent model overrides and prompt customization.",
  },
  {
    title: "Plugin SDK, 25 archetypes",
    blurb:
      "Swappable business-model plugins on one loader surface. 5 with real agent prompts, 20 scaffolded for you to extend.",
  },
  {
    title: "Engineering discipline",
    blurb:
      "1,170 passing tests, a green CI gate, 20+ architecture docs and ADRs, atomic-commit history. Not a weekend demo.",
  },
];

const PILOTS = [
  {
    title: "focus-timer",
    archetype: "micro-saas · fully built (10 roles)",
    url: "https://focus-timer-v166-qs9xap093-perfect-sphere.vercel.app",
  },
  {
    title: "programmatic-seo-landing",
    archetype: "programmatic-seo · pilot depth",
    url: "https://programmatic-seo-landing-lzehvf25w-perfect-sphere.vercel.app",
  },
  {
    title: "ai-agent",
    archetype: "ai-agent · pilot depth",
    url: "https://ai-agent-v169-9qqej9hhf-perfect-sphere.vercel.app",
  },
  {
    title: "chrome-extension",
    archetype: "chrome-extension · pilot depth",
    url: "https://chrome-extension-v169-otxsrmoo5-perfect-sphere.vercel.app",
  },
  {
    title: "newsletter",
    archetype: "newsletter · pilot depth",
    url: "https://newsletter-v169-k0usxfqy6-perfect-sphere.vercel.app",
  },
];

const SCOPE = [
  "It's a codebase / reference implementation — no revenue, no users, no traffic.",
  "Emission produces a deployable landing page + the agent-authored PRD & architecture spec — it is not a full-application generator. You're buying the harness and the pipeline.",
  "Of 25 archetypes, 5 have real agent prompts (1 fully built, 4 at pilot depth); the other 20 are scaffolds on the same surface.",
  "Heavily AI-assisted build — that's the thesis. The value is the tests, the deploy pipeline, and the codified design decisions.",
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function AivsPage() {
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
          <CTA href={GALLERY} className="!px-5 !py-2 text-[13px]">
            See it live →
          </CTA>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 sm:pt-24"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 70% 30%, rgba(245,165,36,0.10), transparent 70%)",
          }}
        />
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <Eyebrow>for sale · codebase acquisition</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-fg sm:text-6xl lg:text-7xl">
                AIVS
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-balance text-lg text-muted sm:text-xl">
                A tested TypeScript framework for AI-agent orchestration —{" "}
                <span className="text-fg">
                  it drives an idea through a gated lifecycle to a live,
                  deployed page.
                </span>
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-4 max-w-xl text-base text-faint">
                Event-sourced workflow engine, real cost controls, and a deploy
                pipeline with automatic rollback. Buy the plumbing you'd
                otherwise spend a month building.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CTA href={GALLERY}>See 5 live pilots →</CTA>
                <CTA href={MAILTO} variant="ghost">
                  Inquire to buy
                </CTA>
              </div>
            </Reveal>
          </div>

          <div className="order-first lg:order-last">
            <Sphere className="mx-auto h-56 w-56 sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem]" />
          </div>
        </div>

        {/* Stats strip */}
        <Reveal delay={300}>
          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
            {STATS.map((s) => (
              <div key={s.label} className="bg-bg px-5 py-6 text-center">
                <dt className="font-display text-2xl font-semibold text-fg sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 font-mono text-[11px] uppercase tracking-wider text-faint">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* What's real */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <Eyebrow>what_is_real</Eyebrow>
            <SectionHeading>The boring, hard parts — already built.</SectionHeading>
            <p className="mt-4 max-w-xl text-muted">
              Every serious AI-agent product needs the same plumbing before it
              can ship. This is that foundation, tested.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REAL.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 3) * 80}
                className="group rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-line-strong"
              >
                <h3 className="font-display text-lg font-semibold text-fg">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-muted">{item.blurb}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof — live pilots */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <Eyebrow>proof</Eyebrow>
            <SectionHeading>Proof, not theory — all live right now.</SectionHeading>
            <p className="mt-4 max-w-xl text-muted">
              Five different business archetypes, each taken idea → a live{" "}
              <span className="text-fg">vercel.app</span> page by the same
              pipeline, for under $5 of AI spend each.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PILOTS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 80} className="h-full">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong"
                >
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
                      live
                    </span>
                    <h3 className="mt-3 font-display text-base font-semibold text-fg">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{p.archetype}</p>
                  </div>
                  <span className="mt-6 font-mono text-xs text-faint transition-colors group-hover:text-fg">
                    open pilot →
                  </span>
                </a>
              </Reveal>
            ))}

            <Reveal delay={160} className="h-full">
              <a
                href={GALLERY}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-center rounded-2xl border border-accent/30 bg-surface p-6 transition-colors hover:border-accent/60"
              >
                <span className="font-display text-base font-semibold text-fg">
                  Browse the full gallery
                </span>
                <span className="mt-2 font-mono text-xs text-accent-bright">
                  perfectsphere.dev/gallery →
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Honest scope */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <Eyebrow>honest_scope</Eyebrow>
              <SectionHeading>What it is — and isn't.</SectionHeading>
              <p className="mt-4 text-muted">
                Radical candor, up front. It pre-empts the objection and it's
                the whole reason a technical buyer can trust the rest.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <ul className="space-y-4">
                {SCOPE.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 rounded-xl border border-line bg-surface/40 px-5 py-4 text-sm text-fg/90"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Price + guarantee */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal className="relative overflow-hidden rounded-3xl border border-accent/30 bg-surface p-10 sm:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(70% 120% at 15% 0%, rgba(245,165,36,0.16), transparent 60%)",
              }}
            />
            <div className="relative">
              <Eyebrow>the_deal</Eyebrow>
              <p className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <span className="font-display text-5xl font-semibold tracking-tight text-fg sm:text-6xl">
                  Open to offers
                </span>
                <span className="text-muted">
                  priced buy-vs-build — let's find a fair number
                </span>
              </p>
              <p className="mt-6 max-w-2xl text-muted">
                Priced buy-vs-build for the codebase, not a revenue multiple.
                Payment via{" "}
                <a
                  href="https://www.escrow.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-bright underline-offset-4 hover:underline"
                >
                  Escrow.com
                </a>{" "}
                — funds release only after you've verified the repo transfer and
                reproduced a pilot with your own keys. Includes the full repo,
                the AIVS brand, copyright transfer, and 30 days of founder
                handover support.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CTA href={MAILTO}>Inquire to buy →</CTA>
                <CTA href={GALLERY} variant="ghost">
                  See it live →
                </CTA>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-28 text-center sm:py-36">
          <Reveal>
            <Sphere className="mx-auto mb-10 h-20 w-20" />
            <h2 className="mx-auto max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
              Want a tested foundation for AI-agent build tooling — without the
              month of plumbing?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted">
              I'll screen-share the repo and a live deploy on a 15-minute call.
            </p>
            <div className="mt-10 flex flex-col items-center gap-5">
              <CTA href={MAILTO} className="px-8 py-3.5 text-base">
                Inquire to buy →
              </CTA>
              <a
                href={MAILTO}
                className="font-mono text-sm text-faint transition-colors hover:text-fg"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <a href="/" className="flex items-center gap-2.5">
            <Sphere className="h-5 w-5" />
            <span className="font-display text-sm font-medium text-fg">
              Perfect Sphere
            </span>
          </a>
          <p className="font-mono text-xs text-faint">
            {SITE.domain} · built by Kefin Pudi
          </p>
        </div>
      </footer>
    </div>
  );
}
