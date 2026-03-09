"use client";
import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, ArrowUp, ExternalLink } from "lucide-react";
import { useI18n } from "../i18n/context";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-[#c8a84b] hover:bg-[#d4b85a] text-white shadow-lg flex items-center justify-center transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp size={18} />
    </button>
  );
}

export default function Footer() {
  const { t } = useI18n();
  const f = t.footer;

  return (
    <>
      <ScrollToTop />
      <footer id="contact" className="bg-[#0d1f30] text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="section-label mb-3 text-[#c8a84b]">{f.sectionLabel}</p>
          <h2 className="text-4xl font-bold mb-12">{f.heading}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Contact info — tel & mail only */}
            <div className="lg:col-span-1">
              <h3 className="text-[#c8a84b] font-semibold mb-4 text-sm uppercase tracking-widest">
                {f.contactLabel}
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+622157950866"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Phone size={16} className="text-[#c8a84b] shrink-0" />
                  +62 21 5795-0866
                </a>
                <a
                  href="mailto:marketing@ptsbs.id"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <Mail size={16} className="text-[#c8a84b] shrink-0" />
                  marketing@ptsbs.id
                </a>
              </div>
            </div>

            {/* Offices — clickable to Google Maps */}
            {f.offices.map((office) => (
              <div key={office.name}>
                <h3 className="text-[#c8a84b] font-semibold mb-4 text-sm uppercase tracking-widest">
                  {office.name}
                </h3>
                <a
                  href={office.gmapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-3 text-white/60 hover:text-white/90 transition-colors"
                >
                  <MapPin size={16} className="text-white/40 group-hover:text-[#c8a84b] mt-0.5 shrink-0 transition-colors" />
                  <span className="text-sm leading-relaxed">
                    {office.address}
                    <ExternalLink size={11} className="inline ml-1.5 mb-0.5 opacity-0 group-hover:opacity-60 transition-opacity" />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/assets/SBS Surya Logo White-02.png"
                alt="Surya Berkat Semesta"
                className="h-8 w-auto object-contain"
              />
              <div>
                <div className="text-white font-bold text-xs">PT Surya Berkat Semesta</div>
                <div className="text-white/40 text-xs">{f.copyright}</div>
              </div>
            </div>

            <nav className="flex flex-wrap gap-6 justify-center">
              {f.quickLinks.map((link, i) => (
                <a
                  key={link}
                  href={f.quickLinkHrefs[i]}
                  className="text-white/50 hover:text-white text-xs transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
