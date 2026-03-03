"use client";
import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import en, { type Translations } from "./en";
import id from "./id";

type Locale = "en" | "id";
export type BusinessTab = "coal" | "biomass" | "nickel" | "silica";

const dictionaries: Record<Locale, Translations> = { en, id };

interface I18nContextValue {
  locale: Locale;
  t: Translations;
  toggle: () => void;
  activeTab: BusinessTab;
  setActiveTab: (tab: BusinessTab) => void;
}

const I18nContext = createContext<I18nContextValue>({
  locale: "en",
  t: en,
  toggle: () => {},
  activeTab: "coal",
  setActiveTab: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [activeTab, setActiveTab] = useState<BusinessTab>("coal");

  const toggle = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "id" : "en"));
  }, []);

  return (
    <I18nContext.Provider value={{ locale, t: dictionaries[locale], toggle, activeTab, setActiveTab }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
