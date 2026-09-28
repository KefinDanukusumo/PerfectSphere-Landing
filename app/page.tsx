import type { ReactNode } from "react";
import { Sphere } from "./components/Sphere";
import { Reveal } from "./components/Reveal";
import { LeakCalculator } from "./components/LeakCalculator";
import {
  CAL_LINK,
  CONTACT_EMAIL,
  LINKEDIN_URL,
  PRODUCT_NAME,
  SITE,
} from "@/lib/site";

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
      ? "bg-accent text-bg hover:bg-accent-bright hover:-translate-y-0.5 shadow-[0_0_0_1px_rgba(245,165,36,0.35),0_10px_40px_-12px_rgba(245,165,36,0.55)]"
      : "border border-line text-fg hover:border-line-strong hover:bg-white/[0.03]";
  // Booking links all read from the single CAL_LINK constant in lib/site.ts.
  return (
    <a href={CAL_LINK} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function AuditCta({ className = "" }: { className?: string }) {
  return (
    <a
      href={AUDIT_MAILTO}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg shadow-[0_0_0_1px_rgba(245,165,36,0.35),0_10px_40px_-12px_rgba(245,165,36,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-bright focus-visible:outline-offset-4 ${className}`}
    >
      Request a free 2-minute leak audit →
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

// Low-friction ask from the playbook: an async audit, not a call.
const AUDIT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "pipeline leak audit request",
)}&body=${encodeURIComponent(
  "Company:\nCRM we use:\nDesign / finance / field tools:\nWhere things break today:\n",
)}`;

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const NAV = [
  { href: "#leaks", label: "The leaks" },
  { href: "#async", label: "How we work" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

// Text wordmarks, not official logos: we integrate with these, we are
// not their certified partners.
const INTEGRATIONS = [
  "HubSpot",
  "Salesforce",
  "JobNimbus",
  "Aurora Solar",
  "GoodLeap",
  "Solo",
  "LightReach",
  "Concert",
];

const STACK = [
  { group: "CRM", tools: ["HubSpot", "Salesforce", "GoHighLevel", "JobNimbus", "Zoho", "AccuLynx"] },
  { group: "Design", tools: ["Aurora Solar", "Solo", "OpenSolar", "EagleView"] },
  { group: "Finance", tools: ["GoodLeap", "LightReach", "Mosaic", "Concert"] },
  { group: "Field & PM", tools: ["CompanyCam", "SiteCapture", "Monday.com", "Asana"] },
];

const LEAKS = [
  {
    gap: "Sales → Design",
    pain: "Reps re-key names, addresses, utility bills, and roof details from the CRM into Aurora Solar — or whatever design tool you run. Typos become redesigns.",
    fix: "New deal in the CRM creates the design project automatically. System size, price, and proposal link sync back to the deal.",
  },
  {
    gap: "Sales → Finance",
    pain: "Loan approvals from GoodLeap or Mosaic sit in a lender portal. Nobody knows a deal is funded until someone logs in and checks.",
    fix: "Credit decisions, stips, and funding milestones write straight to the deal stage — and ping the rep the minute they change.",
  },
  {
    gap: "Field → Office",
    pain: "Site-survey photos and install checklists live in someone's email or camera roll instead of the customer's record.",
    fix: "Photos and forms from CompanyCam or SiteCapture land in the right customer folder, tagged by job and stage.",
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
      "24/7 sync monitoring and failure alerts",
      "Mapping updates when your process changes",
      "Monthly data-health report",
      "Morning report of everything fixed overnight",
    ],
  },
];

const STEPS = [
  {
    n: "01",
    title: "Free leak audit",
    body: "Send us your tools and where things break. You get a 2-minute video and a one-page PDF mapping your leaks — free, no call required.",
  },
  {
    n: "02",
    title: "Map & price",
    body: "We agree on exactly which fields move where. You get a fixed setup price tied to the value it protects, not to hours.",
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

const TIERS = [
  {
    name: "Small installer",
    who: "1–5 crews · owner or ops manager",
    setup: "$3K–$6K",
    recurring: "from $100/mo",
    points: [
      "One core integration (e.g. CRM ↔ design)",
      "Stops sales-to-field errors",
      "Frees the owner's evenings",
    ],
  },
  {
    name: "Mid-market",
    who: "50–500 installs/yr · VP Ops or IT",
    setup: "$10K–$20K",
    recurring: "from $300/mo",
    featured: true,
    points: [
      "CRM ↔ design ↔ finance ↔ field",
      "Kills manual double-entry across teams",
      "Multi-office and multi-market ready",
    ],
  },
  {
    name: "Enterprise",
    who: "500+ installs/yr · COO or CTO",
    setup: "from $25K",
    recurring: "from $1,000/mo",
    points: [
      "Custom integrations and data warehouse feeds",
      "API security review and access controls",
      "Clears IT's integration backlog",
    ],
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

const LEAK_MATH = [
  {
    figure: "$300",
    label: "Average cost to acquire one solar lead",
    note: "Most installers pay $200–$500 per validated lead.",
  },
  {
    figure: "$10,800/yr",
    label: "Burned by just 3 dropped leads a month",
    note: "3 × $300 × 12 — before counting the $15K–$100K jobs they'd have become.",
  },
  {
    figure: "0",
    label: "Fields re-keyed between your CRM and Aurora Solar",
    note: "HubSpot or Salesforce deals flow into design and back, automatically.",
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

const FAQ = [
  {
    q: "We already have someone handling this manually.",
    a: "Most teams do. Run their hours through the calculator above. The question isn't whether they can keep copying data, it's whether that's the best use of a $35–$60/hr ops person, and how many leads slip through when they're out sick.",
  },
  {
    q: "Which CRMs and tools do you work with?",
    a: "HubSpot, Salesforce, GoHighLevel, JobNimbus, Zoho, and AccuLynx are the most common, alongside Aurora Solar, OpenSolar, GoodLeap, Mosaic, CompanyCam, and SiteCapture. If your tool has an API or webhooks, it can almost always be connected.",
  },
  {
    q: "How long does a build take?",
    a: "Most single integrations go live in two to four weeks from the signed mapping doc. Multi-tool builds for mid-market teams usually take four to eight. You get a firm date before you pay anything.",
  },
  {
    q: "What happens if a vendor changes their API?",
    a: `That's exactly what ${PRODUCT_NAME} covers. Every sync is monitored 24/7, failures raise an alert, and fixes ship overnight — usually before your team notices anything broke.`,
  },
  {
    q: "Is our customer data safe?",
    a: "Integrations run on scoped API keys with least-privilege access, credentials stay encrypted, and nothing is stored that doesn't need to be. Enterprise builds include a security review your IT team can sign off on.",
  },
  {
    q: "Who actually does the work?",
    a: "Perfect Sphere is deliberately lean. The engineer who scopes your integration is the one who builds and maintains it — no account managers relaying messages, no junior hand-offs, and no retainers padded to cover an office.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Page() {
  return (
    <div className="relative overflow-x-clip">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/70 backdrop-blur-md">
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
              "radial-gradient(60% 50% at 75% 30%, rgba(245,165,36,0.10), transparent 70%)",
          }}
        />
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Reveal>
              <Eyebrow>revops engineering for solar + home improvement</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-5 text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight text-fg sm:text-6xl lg:text-7xl">
                We fix revenue leaks for US solar &amp; home-improvement
                contractors.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-balance text-lg text-muted sm:text-xl">
                We build leak-proof, two-way syncs between your CRM, Aurora
                Solar, and GoodLeap —{" "}
                <span className="text-fg">
                  so reps stop re-keying data and no lead gets dropped.
                </span>
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-4 max-w-xl text-base text-faint">
                One-time setup, then a managed sync monitored 24/7 and
                maintained overnight while your team sleeps.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <AuditCta />
                <BookCall variant="ghost">Or book a 15-min call</BookCall>
              </div>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-faint">
                PDF + video · no call required
              </p>
            </Reveal>
          </div>

          <div className="order-first lg:order-last">
            <Sphere className="mx-auto h-56 w-56 sm:h-72 sm:w-72 lg:h-[24rem] lg:w-[24rem]" />
          </div>
        </div>

        {/* Stack strip */}
        <Reveal delay={300} className="mt-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
            Integrates with
          </p>
          <ul className="mt-5 flex flex-wrap items-center gap-x-9 gap-y-4 border-y border-line py-6">
            {INTEGRATIONS.map((name) => (
              <li
                key={name}
                className="font-display text-xl font-semibold tracking-tight text-fg/70 sm:text-2xl"
              >
                {name}
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STACK.map((s) => (
              <div
                key={s.group}
                className="rounded-xl border border-line bg-surface/40 px-4 py-3"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  {s.group}
                </p>
                <p className="mt-1.5 text-sm text-fg/80">
                  {s.tools.join(" · ")}
                </p>
              </div>
            ))}
          </div>
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

      {/* Leak math */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <Eyebrow>the_math</Eyebrow>
            <SectionHeading>What one broken sync actually costs.</SectionHeading>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {LEAK_MATH.map((m, i) => (
              <Reveal
                key={m.label}
                delay={i * 80}
                className="rounded-2xl border border-line bg-surface p-8"
              >
                <p className="font-display text-5xl font-semibold tracking-tight text-accent-bright tabular-nums">
                  {m.figure}
                </p>
                <p className="mt-4 font-medium text-fg">{m.label}</p>
                <p className="mt-2 text-sm text-muted">{m.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <Eyebrow>what_it_costs_you</Eyebrow>
            <SectionHeading>Put a number on the leak.</SectionHeading>
            <p className="mt-4 max-w-2xl text-muted">
              The figures above are a typical installer. Plug in your own
              numbers.
            </p>
          </Reveal>
          <Reveal delay={80} className="mt-12">
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

      {/* How it works */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <Eyebrow>how_it_works</Eyebrow>
            <SectionHeading>From messy stack to clean sync in four steps.</SectionHeading>
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

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <Eyebrow>pricing</Eyebrow>
            <SectionHeading>
              A one-time setup, plus {PRODUCT_NAME} to keep it healthy.
            </SectionHeading>
            <p className="mt-4 max-w-2xl text-muted">
              Priced against the leads and hours you&apos;re protecting, not
              against build time. Every quote is fixed before work starts.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {TIERS.map((t, i) => (
              <Reveal
                key={t.name}
                delay={i * 80}
                className={`flex flex-col rounded-2xl border p-8 ${
                  t.featured
                    ? "border-accent/40 bg-surface-2"
                    : "border-line bg-surface"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-fg">
                    {t.name}
                  </h3>
                  {t.featured && (
                    <span className="rounded-full border border-accent/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">
                      Most common
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-faint">{t.who}</p>
                <div className="mt-7 space-y-1">
                  <p className="font-display text-3xl font-semibold tracking-tight text-fg">
                    {t.setup}
                    <span className="ml-2 text-sm font-normal text-muted">
                      setup
                    </span>
                  </p>
                  <p className="font-mono text-sm text-accent-bright">
                    + {t.recurring} {PRODUCT_NAME}
                  </p>
                </div>
                <ul className="mt-7 space-y-3">
                  {t.points.map((p) => (
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

          {/* Beta partner offer */}
          <Reveal className="relative mt-8 overflow-hidden rounded-3xl border border-accent/30 bg-surface p-8 sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(70% 120% at 15% 0%, rgba(245,165,36,0.16), transparent 60%)",
              }}
            />
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_0.6fr]">
              <div>
                <Eyebrow>beta_partner_program · 3 spots</Eyebrow>
                <p className="mt-5 text-balance font-display text-2xl font-semibold leading-tight tracking-tight text-fg sm:text-3xl">
                  Flat $5,000 setup. {PRODUCT_NAME} free for 3 months, then
                  $250/mo.
                </p>
                <p className="mt-4 max-w-2xl text-muted">
                  For mid-market installers willing to let us write up the
                  results as a case study. Same build, same care — at a
                  fraction of standard pricing.
                </p>
              </div>
              <div className="flex lg:justify-end">
                <BookCall>Claim a beta spot →</BookCall>
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
            <SectionHeading>Solar first. The trades around it, too.</SectionHeading>
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
            <SectionHeading>You talk to the builder.</SectionHeading>
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
            <div className="mt-10 flex flex-col items-center gap-5">
              <AuditCta className="px-8 py-3.5 text-base" />
              <BookCall variant="ghost">Prefer to talk? Book 15 minutes</BookCall>
              <a
                href={AUDIT_MAILTO}
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
          <p className="font-mono text-xs text-faint">
            {SITE.domain} · CRM &amp; integrations for solar and home
            improvement · built by{" "}
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
