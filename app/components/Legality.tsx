"use client";
import { useI18n } from "../i18n/context";

export default function Legality() {
  const { t } = useI18n();
  const l = t.legality;

  return (
    <section id="legality" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-label mb-3">{l.sectionLabel}</p>
        <h2 className="text-4xl font-bold text-[#0d1f30] mb-4">{l.heading}</h2>
        <p className="text-gray-500 mb-12 max-w-xl">{l.subheading}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {l.docs.map((doc, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-[#0d1f30]/10 flex items-center justify-center mb-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0d1f30"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10,9 9,9 8,9" />
                </svg>
              </div>
              <h3 className="font-bold text-[#0d1f30] text-sm mb-4">{doc.title}</h3>
              <div className="space-y-2">
                {doc.items.map((item, j) => (
                  <div key={j} className="flex justify-between gap-4">
                    <span className="text-xs text-gray-400 shrink-0">{item.label}</span>
                    <span className="text-xs text-[#0d1f30] font-medium text-right break-all">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
