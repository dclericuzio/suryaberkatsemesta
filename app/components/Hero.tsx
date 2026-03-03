"use client";
import { ArrowRight } from "lucide-react";
import { useI18n } from "../i18n/context";

export default function Hero() {
  const { t } = useI18n();
  const h = t.hero;

  return (
    <section className="relative h-screen min-h-[600px] flex items-end pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f30] via-[#1a3a5c] to-[#0d2a1a]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full border border-white/20" />
          <div className="absolute top-40 right-40 w-64 h-64 rounded-full border border-white/10" />
          <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#c8a84b]/10 blur-3xl" />
        </div>
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
