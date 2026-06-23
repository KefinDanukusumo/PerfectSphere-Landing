import type { ReactNode } from "react";
import { Sphere } from "./components/Sphere";
import { Reveal } from "./components/Reveal";
import { CAL_LINK, CONTACT_EMAIL, SITE } from "@/lib/site";

/* ------------------------------------------------------------------ */
/* Small, page-local building blocks                                   */
/* ------------------------------------------------------------------ */

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
      <span className="text-accent/50">// </span>
      {children}
    </p>
  );
}

function BookCall({
  variant = "primary",
  children,
  className = "",
}: {
  variant?: "primary" | "ghost";
  children: ReactNode;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-offset-4";
  const styles =
    variant === "primary"
      ? "bg-accent text-bg hover:bg-accent-bright hover:-translate-y-0.5 shadow-[0_0_0_1px_rgba(138,124,255,0.35),0_10px_40px_-12px_rgba(138,124,255,0.55)]"
      : "border border-line text-fg hover:border-line-strong hover:bg-white/[0.03]";
  // Booking links all read from the single CAL_LINK constant in lib/site.ts.
  return (
    <a href={CAL_LINK} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
      {children}
    </h2>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const CAPABILITIES = [
  "AI chat & assistants",
  "RAG search over your docs",
  "Auto-generation — summaries, replies, descriptions",
  "Smart tagging & classification",
  "Workflow agents",
];

const PROOF = [
  {
    title: "RAG assistant",
    blurb: "Answers grounded in your own docs, with citations.",
  },
  {
    title: "Auto-generation",
    blurb: "Drafts summaries, replies, and descriptions on demand.",
  },
  {
    title: "Workflow agent",
    blurb: "Runs a multi-step task end to end, hands-off.",
  },
];

const PRINCIPLES = [
  "No account managers",
  "No junior bait-and-switch",
  "No month-long timelines",
];

export default function Page() {
  return (
    <div className="relative overflow-x-clip">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="group flex items-center gap-2.5">
            <Sphere className="h-7 w-7" />
            <span className="font-display text-sm font-semibold tracking-tight text-fg">
              Perfect Sphere
            </span>
          </a>
          <BookCall className="!px-5 !py-2 text-[13px]">
            Book a 15-min call →
          </BookCall>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 sm:pt-24"
      >
        {/* faint radial vignette behind hero */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 70% 30%, rgba(138,124,255,0.10), transparent 70%)",
          }}
        />
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <Eyebrow>solo engineering studio</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-fg sm:text-6xl lg:text-7xl">
                Perfect Sphere
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-balance text-lg text-muted sm:text-xl">
                The AI feature your product is missing —{" "}
                <span className="text-fg">built and shipped in 5 days.</span>
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-4 max-w-xl text-base text-faint">
                Fixed scope. Fixed price. No hand-off to juniors — you work
                directly with the builder.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <BookCall>Book a 15-min call →</BookCall>
                <a
                  href="#what-i-build"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-muted transition-colors hover:text-fg"
                >
                  See what I build
                </a>
              </div>
            </Reveal>
          </div>

          {/* Signature sphere */}
          <div className="order-first lg:order-last">
            <Sphere className="mx-auto h-56 w-56 sm:h-80 sm:w-80 lg:h-[26rem] lg:w-[26rem]" />
          </div>
        </div>
      </section>

      {/* What I build */}
      <section
        id="what-i-build"
        className="border-t border-line scroll-mt-20"
      >
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <Eyebrow>what_i_build</Eyebrow>
            <SectionHeading>One AI capability, bolted in fast.</SectionHeading>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
            {/* Primary offer */}
            <Reveal className="group rounded-2xl border border-line bg-surface p-8 transition-colors hover:border-line-strong">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold text-fg">
                  AI Feature Sprint
                </h3>
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  5 days
                </span>
              </div>
              <p className="mt-3 max-w-md text-muted">
                One concrete AI capability, designed and shipped into your
                existing product in five days.
              </p>
              <ul className="mt-7 space-y-3">
                {CAPABILITIES.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-3 text-sm text-fg/90"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {cap}
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Secondary offer */}
            <Reveal
              delay={80}
              className="flex flex-col justify-between rounded-2xl border border-line bg-surface/40 p-8"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-fg">
                  Need more than a feature?
                </h3>
                <p className="mt-3 text-muted">
                  I also build MVPs, small SaaS, web apps, and custom software
                  for founders — same speed, same fixed-scope promise.
                </p>
              </div>
              <p className="mt-8 font-mono text-xs uppercase tracking-widest text-faint">
                MVPs · SaaS · web apps · custom software
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The guarantee */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal className="relative overflow-hidden rounded-3xl border border-accent/30 bg-surface p-10 sm:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(70% 120% at 15% 0%, rgba(138,124,255,0.16), transparent 60%)",
              }}
            />
            <div className="relative">
              <Eyebrow>the_guarantee</Eyebrow>
              <p className="mt-6 max-w-3xl text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-4xl md:text-5xl">
                If it&apos;s not working by day 5, you don&apos;t pay the
                balance.
              </p>
              <p className="mt-5 font-mono text-sm text-accent-bright">
                Cheap to start. Nothing to lose.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Proof */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <Eyebrow>proof</Eyebrow>
            <SectionHeading>Proof, shipping this week.</SectionHeading>
            <p className="mt-4 max-w-xl text-muted">
              Real demos land here in a day. Here&apos;s what&apos;s on the
              bench right now.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROOF.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 80}
                className="group overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-line-strong"
              >
                <div className="relative flex aspect-video items-center justify-center bg-surface-2">
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(80% 80% at 50% 40%, rgba(138,124,255,0.10), transparent 70%)",
                    }}
                  />
                  <span className="text-3xl opacity-80" aria-hidden>
                    🎥
                  </span>
                  <span className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-widest text-faint">
                    Demo coming soon
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-base font-semibold text-fg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{item.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why me */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <Eyebrow>why_me</Eyebrow>
              <SectionHeading>A developer who ships.</SectionHeading>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-lg text-muted">
                No account managers, no junior bait-and-switch, no month-long
                timelines — just a working build, fast, communicated clearly.
                You talk to the builder the whole way.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {PRINCIPLES.map((p) => (
                  <li
                    key={p}
                    className="rounded-xl border border-line bg-surface/40 px-4 py-3 font-mono text-xs uppercase tracking-wider text-fg/80"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-28 text-center sm:py-36">
          <Reveal>
            <Sphere className="mx-auto mb-10 h-20 w-20" />
            <h2 className="mx-auto max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
              Got a product that needs an AI feature — or a build stuck in your
              backlog?
            </h2>
            <div className="mt-10 flex flex-col items-center gap-5">
              <BookCall className="px-8 py-3.5 text-base">
                Book a call →
              </BookCall>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
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
          <div className="flex items-center gap-2.5">
            <Sphere className="h-5 w-5" />
            <span className="font-display text-sm font-medium text-fg">
              Perfect Sphere
            </span>
          </div>
          <p className="font-mono text-xs text-faint">
            {SITE.domain} · built by Jeffrey Leou
          </p>
        </div>
      </footer>
    </div>
  );
}
