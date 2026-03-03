"use client";
import { useI18n } from "../i18n/context";

const MILESTONE_COLORS = [
  "bg-[#1a3a5c]",
  "bg-[#c8a84b]",
  "bg-[#1a3a5c]",
  "bg-[#1a4a2a]",
  "bg-[#1a3a5c]",
  "bg-[#c8a84b]",
];

export default function Milestone() {
  const { t } = useI18n();
  const m = t.milestone;

  return (
    <section id="milestone" className="py-24 bg-[#0d1f30]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-label mb-3 text-[#c8a84b]">{m.sectionLabel}</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <h2 className="text-4xl font-bold text-white leading-tight max-w-lg">{m.heading}</h2>
          <p className="text-white/50 max-w-sm text-sm">{m.subheading}</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 md:left-1/2" />

          <div className="space-y-10">
            {m.items.map((item, i) => (
              <div
                key={i}
                className={`relative flex gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[#c8a84b] border-2 border-[#0d1f30] -translate-x-1/2 top-5 z-10" />
                <div className="hidden md:block md:w-1/2" />
                <div className="ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 card-hover">
                    <span
                      className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${MILESTONE_COLORS[i]} text-white mb-3`}
                    >
                      {item.date}
                    </span>
                    <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
