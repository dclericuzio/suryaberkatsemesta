"use client";
import { useI18n, type BusinessTab } from "../i18n/context";

const CARD_ICONS = ["⛏", "🪨", "🏖", "🌿"];
const CARD_COLORS = ["bg-gray-900", "bg-[#1a3a5c]", "bg-[#2a5080]", "bg-[#1a4a2a]"];
const CARD_TABS: BusinessTab[] = ["coal", "nickel", "silica", "biomass"];

export default function About() {
  const { t, setActiveTab } = useI18n();
  const a = t.about;

  function handleCardClick(tab: BusinessTab) {
    setActiveTab(tab);
    const el = document.getElementById("business");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <p className="section-label mb-3">{a.sectionLabel}</p>
            <h2 className="text-4xl font-bold text-[#0d1f30] mb-6 leading-tight">{a.heading}</h2>
            <p
              className="text-gray-600 leading-relaxed mb-4"
              dangerouslySetInnerHTML={{ __html: a.p1 }}
            />
            <p
              className="text-gray-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: a.p2 }}
            />
          </div>

          <div className="space-y-8">
            <div className="bg-[#0d1f30] text-white rounded-2xl p-8">
              <h3 className="text-[#c8a84b] font-bold text-sm uppercase tracking-widest mb-3">
                {a.visionLabel}
              </h3>
              <p className="text-white/90 leading-relaxed">{a.vision}</p>
            </div>
            <div className="border-2 border-[#0d1f30] rounded-2xl p-8">
              <h3 className="text-[#0d1f30] font-bold text-sm uppercase tracking-widest mb-3">
                {a.missionLabel}
              </h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-[#c8a84b] font-bold shrink-0">01</span>
                  <span>{a.mission1}</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#c8a84b] font-bold shrink-0">02</span>
                  <span>{a.mission2}</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div>
          <p className="section-label mb-3">{a.businessLabel}</p>
          <h2 className="text-3xl font-bold text-[#0d1f30] mb-8">{a.businessHeading}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {a.cards.map((card, i) => (
              <button
                key={i}
                onClick={() => handleCardClick(CARD_TABS[i])}
                className={`${CARD_COLORS[i]} text-white rounded-2xl p-6 card-hover cursor-pointer text-left`}
              >
                <div className="text-3xl mb-3">{CARD_ICONS[i]}</div>
                <div className="font-bold text-base">{card.label}</div>
                <div className="text-white/60 text-xs mt-1">{card.sub}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
