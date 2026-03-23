"use client";
import { ArrowRight } from "lucide-react";
import { useI18n } from "../i18n/context";

export default function Hero() {
  const { t } = useI18n();
  const h = t.hero;

  return (
    <section className="relative h-screen min-h-[600px] flex items-end pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/universe.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <p className="section-label mb-3 text-[#c8a84b]">{h.eyebrow}</p>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4 max-w-3xl">
          {h.title1}<br />
          <span className="text-[#c8a84b]">{h.title2}</span>
        </h1>
        <p className="text-white/70 text-lg max-w-xl mb-8">{h.subtitle}</p>
        <a
          href="#about"
          className="inline-flex items-center gap-2 bg-white/10 border border-white/30 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-all text-sm font-medium"
        >
          {h.cta} <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
