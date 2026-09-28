import type { ReactNode } from "react";
import { Sphere } from "./components/Sphere";
import { Reveal } from "./components/Reveal";
import { LeakCalculator } from "./components/LeakCalculator";
import { CONTACT_EMAIL, LINKEDIN_URL, PRODUCT_NAME, SITE } from "@/lib/site";

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

// Both CTAs are asynchronous on purpose: busy solar execs get a written
// / recorded deliverable, never a meeting request.
function mailto(subject: string, body: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

const AUDIT_MAILTO = mailto(
  "pipeline leak audit request",
  "Company:\nCRM we use:\nDesign / finance / field tools:\nWhere things break today:\n",
);

const BLUEPRINT_MAILTO = mailto(
  "integration blueprint request",
  "Company:\nStates / markets we serve:\nInstalls per year (approx.):\nCRM, design, finance and field tools:\nWhat we want connected:\n",
);

function Cta({
  kind = "audit",
  variant = "primary",
  className = "",
}: {
  kind?: "audit" | "blueprint";
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-offset-4";
  const styles =
    variant === "primary"
      ? "bg-accent text-bg hover:bg-accent-bright hover:-translate-y-0.5 shadow-[0_0_0_1px_rgba(255,183,3,0.35),0_10px_40px_-12px_rgba(255,183,3,0.55)]"
      : "border border-line text-fg hover:border-accent/50 hover:bg-white/[0.03]";
  return (
    <a
      href={kind === "audit" ? AUDIT_MAILTO : BLUEPRINT_MAILTO}
      className={`${base} ${styles} ${className}`}
    >
      {kind === "audit"
        ? "Request a Free 2-Min Pipeline Leak Audit →"
        : "Get a Custom Integration Blueprint"}
    </a>
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-4 max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
      {children}
    </h2>
  );
}

function Dot() {
  return (
    <span
      aria-hidden
      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
    />
  );
}

function Glow({ at = "15% 0%" }: { at?: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        background: `radial-gradient(70% 120% at ${at}, rgba(255,183,3,0.14), transparent 60%)`,
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const NAV = [
  { href: "#leaks", label: "The leaks" },
  { href: "#roi", label: "ROI" },
  { href: "#solutions", label: "Solutions" },
  { href: "#async", label: "How we work" },
  { href: "#faq", label: "FAQ" },
];

// Text badges, not official logos: we integrate with these platforms,
// we are not their certified partners.
const PLATFORMS = [
  "HubSpot",
  "Salesforce",
  "JobNimbus",
  "Aurora Solar",
  "GoodLeap",
  "Solo",
];

const ALSO_WORKS_WITH = [
  "GoHighLevel",
  "Zoho",
  "AccuLynx",
  "OpenSolar",
  "EagleView",
  "LightReach",
  "Mosaic",
  "CompanyCam",
  "SiteCapture",
  "Monday.com",
];

const LEAKS = [
  {
    gap: "Sales → Design",
    pain: "Reps re-key names, addresses, utility bills, and roof details from the CRM into Aurora Solar. Typos become redesigns.",
    fix: "A new deal in the CRM creates the design project automatically. System size, price, and proposal link sync back to the deal.",
  },
  {
    gap: "Sales → Finance",
    pain: "GoodLeap approvals sit in a lender portal. Nobody knows a deal is funded until someone logs in and checks.",
    fix: "Credit decisions, stips, and funding milestones write straight to the deal stage — and ping the rep the minute they change.",
  },
  {
    gap: "Field → Office",
    pain: "Site-survey photos and install checklists live in someone's email or camera roll instead of the customer record.",
    fix: "Photos and forms from the field land in the right customer folder, tagged by job and stage.",
  },
];

const ROI_STATS = [
  {
    figure: "$300–$500",
    label: "Cost of a single validated solar lead",
  },
  {
    figure: "$18K/yr",
    label: "Potential lost pipeline from just 3 dropped leads a month",
  },
  {
    figure: "30 days",
    label: "For our builds to pay for themselves",
  },
];

const SERVICES = [
  {
    kind: "Service",
    title: "Integration Build",
    blurb:
      "We map every field between your CRM and your design, finance, and field tools, then build and test the sync in a sandbox before it touches live deals.",
    points: [
      "Field-by-field mapping document you keep",
      "Two-way sync with retry and error alerts",
      "Tested on real historical deals before go-live",
      "Handoff walkthrough for your ops team",
    ],
  },
  {
    kind: "Service",
    title: "CRM Cleanup & Audit",
    blurb:
      "For teams whose CRM has turned into a junk drawer. We audit pipelines, stages, and automations, then fix what's slowing reps down.",
    points: [
      "Pipeline and stage redesign around how you actually sell",
      "Duplicate and dead-record cleanup",
      "Automations that match your install workflow",
      "Clear dashboards for owners and ops",
    ],
  },
  {
    kind: "Product",
    title: PRODUCT_NAME,
    blurb:
      "The managed layer that keeps it all running. APIs change, lenders update portals, you add a new tool — the sync keeps working.",
    points: [
      "24/7 queue monitoring and failure alerts",
      "Mapping updates when your process changes",
      "Monthly data-health report",
      "Morning report of everything fixed overnight",
    ],
  },
];

const CORE_DELIVERABLES = [
  {
    title: "2-Way CRM Sync",
    body: "HubSpot, Salesforce, or JobNimbus stays the single source of truth — every tool reads from it and writes back to it.",
  },
  {
    title: "Automated Design Triggers",
    body: "Deal stage changes spin up Aurora Solar or Solo projects with the customer, site, and usage data already filled in.",
  },
  {
    title: "GoodLeap Financing Webhooks",
    body: "Approvals, stips, and funding milestones update the deal the moment they happen — no more portal checking.",
  },
  {
    title: "24/7 Queue Monitoring",
    body: "Every sync is watched around the clock. Failed records are retried, flagged, and cleared overnight.",
  },
];

const SCALES = [
  {
    name: "Small & Regional Installers",
    who: "Owner-led or single-region teams · 1–10 crews",
    intro:
      "Get the core leaks closed fast, without hiring an ops or IT person to babysit the stack.",
    extras: [
      "One CRM, one design tool, one lender — done right",
      "Pre-built mappings for common solar stacks",
      "Plain-English runbook for your office manager",
    ],
    featured: false,
  },
  {
    name: "Multi-State Enterprise Contractors",
    who: "Multi-office, multi-market operations · VP Ops, COO, IT",
    intro:
      "Standardize data across every office and market, and clear IT's integration backlog for good.",
    extras: [
      "Per-state and per-office routing rules",
      "Multiple lenders, design tools, and field apps",
      "API security review and least-privilege access",
      "Data warehouse and BI feeds",
    ],
    featured: true,
  },
];

const STEPS = [
  {
    n: "01",
    title: "Free leak audit",
    body: "Send us your tools and where things break. You get a 2-minute video and a one-page PDF mapping your leaks — no call required.",
  },
  {
    n: "02",
    title: "Integration blueprint",
    body: "We send a custom blueprint: exactly which fields move where, what gets automated, the timeline, and a fixed quote.",
  },
  {
    n: "03",
    title: "Build in a sandbox",
    body: "We build and test against copies of your real deals. Your live pipeline is never the test environment.",
  },
  {
    n: "04",
    title: "Go live & monitor",
    body: `We switch it on, your team gets a walkthrough, and ${PRODUCT_NAME} watches every sync from then on.`,
  },
];

const ASYNC_POINTS = [
  {
    title: "Overnight error clearing",
    body: "Failed syncs, stuck queues, and rejected records get cleared while your office is closed.",
  },
  {
    title: "Updates outside your hours",
    body: "Mapping changes and fixes deploy overnight, so nobody's CRM changes under them mid-day.",
  },
  {
    title: "24/7 automated monitoring",
    body: "Every sync is watched around the clock. Anything that breaks raises an alert immediately.",
  },
  {
    title: "Report before standup",
    body: "A short summary of what was fixed lands in your inbox before your morning meeting.",
  },
];

const INDUSTRIES = [
  "Residential solar",
  "Commercial solar",
  "Battery & EV chargers",
  "Roofing",
  "HVAC",
  "Windows & siding",
  "Remodeling",
];

const PRINCIPLES = [
  "The engineer who scopes it builds it",
  "Priced on value, not hours",
  "You own the mapping and the data",
];

const FAQ = [
  {
    q: "We already have someone handling this manually.",
    a: "Most teams do. Run their hours through the calculator above. The question isn't whether they can keep copying data, it's whether that's the best use of an ops person's week, and how many leads slip through when they're out sick.",
  },
  {
    q: "How much does it cost?",
    a: `Every engagement is a fixed one-time build plus a monthly ${PRODUCT_NAME} subscription, sized to your stack and install volume. Your custom integration blueprint includes the exact number before you commit to anything.`,
  },
  {
    q: "Which CRMs and tools do you work with?",
    a: "HubSpot, Salesforce, JobNimbus, Aurora Solar, GoodLeap, and Solo are the core stack, alongside GoHighLevel, Zoho, AccuLynx, OpenSolar, LightReach, Mosaic, CompanyCam, and SiteCapture. If a tool has an API or webhooks, it can almost always be connected.",
  },
  {
    q: "How long does a build take?",
    a: "Most single integrations go live in two to four weeks from the signed blueprint. Multi-state builds usually take four to eight. You get a firm date in the blueprint.",
  },
  {
    q: "What happens if a vendor changes their API?",
    a: `That's exactly what ${PRODUCT_NAME} covers. Every sync is monitored 24/7, failures raise an alert, and fixes ship overnight — usually before your team notices anything broke.`,
  },
  {
    q: "Is our customer data safe?",
    a: "Integrations run on scoped API keys with least-privilege access, credentials stay encrypted, and nothing is stored that doesn't need to be. Enterprise builds include a security review your IT team can sign off on.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Page() {
  return (
    <div className="relative overflow-x-clip">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a href="#top" className="group flex items-center gap-2.5">
            <Sphere className="h-7 w-7" />
            <span className="font-display text-sm font-semibold tracking-tight text-fg">
              Perfect Sphere
            </span>
          </a>
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-7">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[13px] text-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={AUDIT_MAILTO}
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-[13px] font-medium text-bg transition-colors hover:bg-accent-bright"
          >
            Free leak audit →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 75% 30%, rgba(255,183,3,0.10), transparent 70%)",
          }}
        />
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <Reveal>
              <Eyebrow>revops engineering for us solar + home improvement</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.04] tracking-tight text-fg sm:text-6xl lg:text-[4.25rem]">
                We Fix Revenue Leaks Between Your CRM,{" "}
                <span className="text-accent">Design System</span> &amp;{" "}
                <span className="text-accent-bright">Financing</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-2xl text-balance text-lg text-muted sm:text-xl">
                Perfect Sphere is a specialized RevOps engineering squad. We
                build{" "}
                <span className="text-fg">
                  leak-proof, two-way API integrations
                </span>{" "}
                that eliminate manual data re-keying and prevent dropped
                leads — 24/7.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Cta />
                <Cta kind="blueprint" variant="ghost" />
              </div>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-faint">
                PDF + video · no call required
              </p>
            </Reveal>
          </div>

          <div className="order-first lg:order-last">
            <Sphere className="mx-auto h-52 w-52 sm:h-72 sm:w-72 lg:h-[22rem] lg:w-[22rem]" />
          </div>
        </div>

        {/* Supported platforms */}
        <Reveal delay={240} className="mt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
            Supported platforms
          </p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {PLATFORMS.map((name) => (
              <li
                key={name}
                className="rounded-full border border-accent/30 bg-accent/[0.06] px-5 py-2 font-display text-base font-semibold tracking-tight text-fg sm:text-lg"
              >
                {name}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-faint">
            Also works with {ALSO_WORKS_WITH.join(", ")}, and most tools with
            an API or webhooks.
          </p>
        </Reveal>
      </section>

      {/* The leaks */}
      <section id="leaks" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <Eyebrow>the_leaks</Eyebrow>
            <SectionHeading>
              Your tools are fine. The gaps between them cost you jobs.
            </SectionHeading>
            <p className="mt-4 max-w-2xl text-muted">
              Every installer we talk to has at least one of these. Each is a
              place where a $15K–$100K job quietly stalls.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {LEAKS.map((leak, i) => (
              <Reveal
                key={leak.gap}
                delay={i * 80}
                className="flex flex-col rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-line-strong"
              >
                <h3 className="font-display text-xl font-semibold text-fg">
                  {leak.gap}
                </h3>
                <p className="mt-5 font-mono text-[10px] uppercase tracking-widest text-faint">
                  Today
                </p>
                <p className="mt-2 text-sm text-muted">{leak.pain}</p>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-accent">
                  After
                </p>
                <p className="mt-2 text-sm text-fg/90">{leak.fix}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section id="roi" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal className="relative overflow-hidden rounded-3xl border border-accent/30 bg-surface p-8 sm:p-14">
            <Glow />
            <div className="relative">
              <Eyebrow>the_roi_math</Eyebrow>
              <p className="mt-6 max-w-4xl text-balance font-display text-2xl font-semibold leading-snug tracking-tight text-fg sm:text-4xl">
                A single validated solar lead costs{" "}
                <span className="text-accent-bright">$300–$500</span>.
                Dropping just 3 leads a month to broken CRM syncs costs you up
                to <span className="text-accent-bright">$18,000 a year</span>{" "}
                in lost pipeline.
              </p>
              <p className="mt-5 font-mono text-sm text-accent">
                Our builds pay for themselves in 30 days.
              </p>
              <dl className="mt-12 grid gap-8 border-t border-line pt-10 sm:grid-cols-3">
                {ROI_STATS.map((s) => (
                  <div key={s.label} className="flex flex-col-reverse justify-end gap-2">
                    <dt className="text-sm text-muted">{s.label}</dt>
                    <dd className="whitespace-nowrap font-display text-3xl font-semibold tracking-tight text-fg tabular-nums lg:text-4xl">
                      {s.figure}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal className="mt-16">
            <Eyebrow>your_numbers</Eyebrow>
            <SectionHeading>Put a number on your own leak.</SectionHeading>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <LeakCalculator />
          </Reveal>
        </div>
      </section>

      {/* Services & product */}
      <section id="services" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <Eyebrow>services_and_product</Eyebrow>
            <SectionHeading>Build it once. Keep it running.</SectionHeading>
            <p className="mt-4 max-w-2xl text-muted">
              Two services to fix what&apos;s broken, and one product to make
              sure it stays fixed.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 80}
                className={`flex flex-col rounded-2xl border p-8 transition-colors ${
                  s.kind === "Product"
                    ? "border-accent/35 bg-surface-2 hover:border-accent/60"
                    : "border-line bg-surface hover:border-line-strong"
                }`}
              >
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest ${
                    s.kind === "Product" ? "text-accent" : "text-faint"
                  }`}
                >
                  {s.kind}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-fg">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-muted">{s.blurb}</p>
                <ul className="mt-7 space-y-3">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-sm text-fg/90"
                    >
                      <Dot />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by scale */}
      <section id="solutions" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <Eyebrow>solutions_by_scale</Eyebrow>
            <SectionHeading>
              The same leak-proof core, sized to how you operate.
            </SectionHeading>
          </Reveal>

          {/* Core deliverables every client gets */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_DELIVERABLES.map((d, i) => (
              <Reveal
                key={d.title}
                delay={i * 60}
                className="rounded-2xl border border-line bg-surface/40 p-6"
              >
                <span className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-fg">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{d.body}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {SCALES.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 80}
                className={`relative flex flex-col overflow-hidden rounded-2xl border p-8 sm:p-10 ${
                  t.featured
                    ? "border-accent/40 bg-surface-2"
                    : "border-line bg-surface"
                }`}
              >
                {t.featured && <Glow at="100% 0%" />}
                <div className="relative flex flex-1 flex-col">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-fg">
                    {t.name}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wider text-faint">
                    {t.who}
                  </p>
                  <p className="mt-5 text-muted">{t.intro}</p>

                  <p className="mt-8 font-mono text-[10px] uppercase tracking-widest text-accent">
                    Included
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {CORE_DELIVERABLES.map((d) => (
                      <li
                        key={d.title}
                        className="rounded-full border border-accent/30 bg-accent/[0.06] px-3 py-1 text-xs text-fg"
                      >
                        {d.title}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-7 font-mono text-[10px] uppercase tracking-widest text-faint">
                    Built for your scale
                  </p>
                  <ul className="mt-3 space-y-3">
                    {t.extras.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-3 text-sm text-fg/90"
                      >
                        <Dot />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-10">
                    <Cta
                      kind="blueprint"
                      variant={t.featured ? "primary" : "ghost"}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <Eyebrow>how_it_works</Eyebrow>
            <SectionHeading>
              From messy stack to clean sync in four steps.
            </SectionHeading>
          </Reveal>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal
                as="li"
                key={step.n}
                delay={i * 70}
                className="rounded-2xl border border-line bg-surface/40 p-6"
              >
                <span className="font-mono text-sm text-accent">{step.n}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-fg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Async global model */}
      <section id="async" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <Eyebrow>asynchronous_global_model</Eyebrow>
              <SectionHeading>We work while your US team sleeps.</SectionHeading>
              <p className="mt-4 text-muted">
                Our engineering hours sit across the Pacific from yours. When
                your office closes, ours opens — so sync errors get cleared and
                updates ship overnight, and your team walks into a clean
                pipeline every morning.
              </p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {ASYNC_POINTS.map((pt, i) => (
                <Reveal
                  key={pt.title}
                  delay={i * 70}
                  className="rounded-2xl border border-line bg-surface/40 p-6"
                >
                  <h3 className="font-display text-base font-semibold text-fg">
                    {pt.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{pt.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beta partner program */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal className="relative overflow-hidden rounded-3xl border border-accent/30 bg-surface p-8 sm:p-12">
            <Glow />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <div>
                <Eyebrow>beta_partner_program · 3 spots</Eyebrow>
                <p className="mt-5 text-balance font-display text-2xl font-semibold leading-tight tracking-tight text-fg sm:text-3xl">
                  Founding-partner terms for three installers.
                </p>
                <p className="mt-4 max-w-2xl text-muted">
                  For installers willing to let us write up the results as a
                  case study. Same build, same care, with {PRODUCT_NAME}{" "}
                  included free for the first months. Details come with your
                  blueprint.
                </p>
              </div>
              <div className="flex lg:justify-end">
                <Cta kind="blueprint" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who it's for + why us */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 sm:py-32 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>who_its_for</Eyebrow>
            <SectionHeading>
              Small to mid-market US contractors. Solar first.
            </SectionHeading>
            <p className="mt-4 text-muted">
              Any team selling high-ticket jobs where a lead moves through
              sales, design, financing, and a field crew — and gets lost
              somewhere in between.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {INDUSTRIES.map((ind) => (
                <li
                  key={ind}
                  className="rounded-full border border-line bg-surface/40 px-4 py-1.5 text-sm text-fg/85"
                >
                  {ind}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <Eyebrow>why_perfect_sphere</Eyebrow>
            <SectionHeading>You talk to the builders.</SectionHeading>
            <p className="mt-4 text-muted">
              We learn your workflow before we pitch anything. The engineer
              who maps your integration writes it, and is the one who gets
              paged when it breaks.
            </p>
            <ul className="mt-8 grid gap-3">
              {PRINCIPLES.map((p) => (
                <li
                  key={p}
                  className="rounded-xl border border-line bg-surface/40 px-4 py-3 font-mono text-xs uppercase tracking-wider text-fg/80"
                >
                  {p}
                </li>
              ))}
            </ul>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-accent-bright transition-colors hover:text-fg"
            >
              Meet the founder, Kefin Pudi, on LinkedIn ↗
            </a>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
          <Reveal>
            <Eyebrow>faq</Eyebrow>
            <SectionHeading>Straight answers.</SectionHeading>
          </Reveal>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {FAQ.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-display text-lg font-medium text-fg [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden
                    className="font-mono text-accent transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-28 text-center sm:py-36">
          <Reveal>
            <Sphere className="mx-auto mb-10 h-20 w-20" />
            <h2 className="mx-auto max-w-3xl text-balance font-display text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
              Where does your pipeline leak? We&apos;ll show you in 2 minutes.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted">
              Tell us your stack. You get a short video and a one-page PDF
              mapping your leaks — no call required.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Cta className="px-8 py-3.5 text-base" />
              <Cta kind="blueprint" variant="ghost" />
            </div>
            <div className="mt-8 flex items-center justify-center gap-6">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-mono text-sm text-faint transition-colors hover:text-fg"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-faint transition-colors hover:text-fg"
              >
                LinkedIn ↗
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
          <p className="text-center font-mono text-xs text-faint">
            {SITE.domain} · RevOps engineering for solar and home improvement
            · founded by{" "}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-line-strong underline-offset-4 transition-colors hover:text-fg"
            >
              Kefin Pudi
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
