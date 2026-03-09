"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "../i18n/context";

export default function Navbar() {
  const { t, locale, toggle } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.management, href: "#management" },
    { label: t.nav.business, href: "#business" },
    { label: t.nav.milestone, href: "#milestone" },
    { label: t.nav.legality, href: "#legality" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0d1f30]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img
            src="/assets/SBS Surya Logo White-02.png"
            alt="Surya Berkat Semesta"
            className="h-10 w-auto object-contain"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-all"
            aria-label="Toggle language"
          >
            <span className={locale === "en" ? "text-white" : "text-white/40"}>EN</span>
            <span className="text-white/30">|</span>
            <span className={locale === "id" ? "text-white" : "text-white/40"}>ID</span>
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          {/* Mobile language toggle */}
          <button
            onClick={toggle}
            className="flex items-center gap-1 bg-white/10 border border-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full"
          >
            <span className={locale === "en" ? "text-white" : "text-white/40"}>EN</span>
            <span className="text-white/30">|</span>
            <span className={locale === "id" ? "text-white" : "text-white/40"}>ID</span>
          </button>
          <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0d1f30]/98 px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-white/80 hover:text-white text-sm font-medium py-2 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
