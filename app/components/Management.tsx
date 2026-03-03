"use client";
import { useI18n } from "../i18n/context";

function DivisionPill({ label }: { label: string }) {
  return (
    <span className="inline-block bg-white/10 border border-white/15 text-white/70 text-xs px-3 py-1.5 rounded-full">
      {label}
    </span>
  );
}

function RoleCard({
  title,
  subtitle,
  variant = "default",
}: {
  title: string;
  subtitle: string;
  variant?: "top" | "primary" | "default" | "support";
}) {
  const styles = {
    top: "bg-[#c8a84b] text-white",
    primary: "bg-[#0d1f30] text-white border-2 border-[#c8a84b]",
    default: "bg-[#1a3a5c] text-white",
    support: "bg-white/5 border border-white/15 text-white",
  };

  return (
    <div className={`rounded-xl px-5 py-4 text-center ${styles[variant]}`}>
      <div className="font-bold text-sm leading-tight">{title}</div>
      <div className={`text-xs mt-1 ${variant === "top" ? "text-white/80" : "text-white/60"}`}>{subtitle}</div>
    </div>
  );
}

export default function Management() {
  const { t } = useI18n();
  const m = t.management;
  const r = m.roles;
  const d = m.divisions;

  return (
    <section id="management" className="py-24 bg-[#0d1f30]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-label mb-3 text-[#c8a84b]">{m.sectionLabel}</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <h2 className="text-4xl font-bold text-white leading-tight max-w-lg">{m.heading}</h2>
          <p className="text-white/50 max-w-sm text-sm">{m.subheading}</p>
        </div>

        {/* Org chart */}
        <div className="flex flex-col items-center gap-0">

          {/* Level 1: Commissioner */}
          <div className="w-full max-w-xs">
            <RoleCard title={m.roles.commissioner} subtitle="KOMISARIS UTAMA" variant="top" />
          </div>

          {/* Connector */}
          <div className="w-px h-8 bg-white/20" />

          {/* Level 2: CEO */}
          <div className="w-full max-w-xs">
            <RoleCard title={r.ceo} subtitle="DIREKTUR UTAMA" variant="primary" />
          </div>

          {/* Connector to 3 directors */}
          <div className="w-px h-8 bg-white/20" />
          <div className="w-full max-w-4xl flex items-start justify-center gap-0">
            {/* Left branch line */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-full border-t border-white/20 mt-0" />
            </div>
          </div>

          {/* Horizontal connector bar */}
          <div className="relative w-full max-w-4xl">
            <div className="absolute top-0 left-[16.67%] right-[16.67%] h-px bg-white/20" />
          </div>

          {/* Level 3: Three directors */}
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-0">

            {/* CFO Column */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-px h-8 bg-white/20" />
              <div className="w-full">
                <RoleCard title={r.cfo} subtitle="DIREKTUR KEUANGAN" variant="default" />
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="w-full bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-[#c8a84b] text-xs font-semibold uppercase tracking-widest mb-3">{d.cfoLabel}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {d.cfoItems.map((item) => (
                    <DivisionPill key={item} label={item} />
                  ))}
                </div>
              </div>
            </div>

            {/* COO Column */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-px h-8 bg-white/20" />
              <div className="w-full">
                <RoleCard title={r.coo} subtitle="DIREKTUR OPS, TEKNIKAL & COMMERCIAL" variant="default" />
              </div>
              <div className="w-px h-4 bg-white/20" />
              {/* QHSE sub-report */}
              <div className="w-full bg-white/5 border border-white/10 rounded-xl p-4 mb-1">
                <p className="text-[#c8a84b] text-xs font-semibold uppercase tracking-widest mb-3">{d.qhseLabel}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {d.qhseItems.map((item) => (
                    <DivisionPill key={item} label={item} />
                  ))}
                </div>
              </div>
              <div className="w-full bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-[#c8a84b] text-xs font-semibold uppercase tracking-widest mb-3">{d.cooLabel}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {d.cooItems.map((item) => (
                    <DivisionPill key={item} label={item} />
                  ))}
                </div>
              </div>
            </div>

            {/* HRD Column */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-px h-8 bg-white/20" />
              <div className="w-full">
                <RoleCard title={r.hrd} subtitle="HEAD OF HRD & GA" variant="support" />
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="w-full bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-[#c8a84b] text-xs font-semibold uppercase tracking-widest mb-3">{d.hrdLabel}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {d.hrdItems.map((item) => (
                    <DivisionPill key={item} label={item} />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
