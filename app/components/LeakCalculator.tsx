"use client";

import { useId, useState } from "react";

/**
 * LeakCalculator — turns "our sync is a bit flaky" into a dollar figure.
 *
 * Two leaks, both from the sales guide's value-anchoring pitches:
 *   1. Dropped leads  = leads lost / month × cost to acquire a lead
 *   2. Manual rework  = hours re-keying / week × loaded hourly cost
 * Payback is measured against the beta-partner setup fee.
 */

const BETA_SETUP_FEE = 5000;

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function Field({
  label,
  hint,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: {
  label: string;
  hint: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step: number;
  format: (n: number) => string;
}) {
  const id = useId();
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm text-fg">
          {label}
        </label>
        <span className="font-mono text-sm text-accent-bright tabular-nums">
          {format(value)}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-[var(--color-accent)]"
      />
      <p className="mt-1.5 text-xs text-faint">{hint}</p>
    </div>
  );
}

export function LeakCalculator() {
  const [leads, setLeads] = useState(3);
  const [leadCost, setLeadCost] = useState(350);
  const [hours, setHours] = useState(8);
  const [rate, setRate] = useState(35);

  const leadLeak = leads * leadCost * 12;
  const reworkLeak = hours * rate * 52;
  const total = leadLeak + reworkLeak;
  const monthly = total / 12;
  const paybackMonths = monthly > 0 ? BETA_SETUP_FEE / monthly : Infinity;

  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-7 rounded-2xl border border-line bg-surface p-7 sm:p-8">
        <Field
          label="Leads dropped per month"
          hint="Records that never make it from CRM to design, finance, or the crew."
          value={leads}
          onChange={setLeads}
          min={0}
          max={30}
          step={1}
          format={(n) => `${n}`}
        />
        <Field
          label="Cost to acquire one lead"
          hint="Validated solar leads typically run $200–$500."
          value={leadCost}
          onChange={setLeadCost}
          min={50}
          max={1000}
          step={25}
          format={usd.format}
        />
        <Field
          label="Hours / week spent re-keying data"
          hint="Copying site dimensions, system size, bills, loan status by hand."
          value={hours}
          onChange={setHours}
          min={0}
          max={60}
          step={1}
          format={(n) => `${n} hrs`}
        />
        <Field
          label="Loaded hourly cost of that person"
          hint="Salary plus overhead for the PM, ops, or sales coordinator."
          value={rate}
          onChange={setRate}
          min={15}
          max={120}
          step={5}
          format={usd.format}
        />
      </div>

      <div
        className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-accent/30 bg-surface p-7 sm:p-8"
        aria-live="polite"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(90% 70% at 80% 0%, rgba(245,165,36,0.16), transparent 65%)",
          }}
        />
        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            Estimated annual leak
          </p>
          <p className="mt-3 font-display text-5xl font-semibold tracking-tight text-fg tabular-nums sm:text-6xl">
            {usd.format(total)}
          </p>
          <dl className="mt-8 space-y-3 text-sm">
            <div className="flex justify-between gap-4 border-b border-line pb-3">
              <dt className="text-muted">Dropped leads</dt>
              <dd className="font-mono text-fg tabular-nums">
                {usd.format(leadLeak)}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-line pb-3">
              <dt className="text-muted">Manual double-entry</dt>
              <dd className="font-mono text-fg tabular-nums">
                {usd.format(reworkLeak)}
              </dd>
            </div>
          </dl>
        </div>
        <p className="relative mt-8 text-sm text-muted">
          {Number.isFinite(paybackMonths) ? (
            <>
              A {usd.format(BETA_SETUP_FEE)} beta-partner setup pays for itself
              in{" "}
              <span className="text-accent-bright">
                ~{Math.max(1, Math.ceil(paybackMonths))}{" "}
                {Math.ceil(paybackMonths) <= 1 ? "month" : "months"}
              </span>
              . And this doesn&apos;t count the $15K–$100K job a dropped lead
              would have become.
            </>
          ) : (
            <>No leak? Lucky you. Most teams find one in the first call.</>
          )}
        </p>
      </div>
    </div>
  );
}
