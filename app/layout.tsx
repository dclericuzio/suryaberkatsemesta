import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "./i18n/context";

export const metadata: Metadata = {
  title: "PT Surya Berkat Semesta (SBS) — Commodity Trading & Production",
  description:
    "PT SBS is a leading Indonesian commodity company specializing in coal, biomass, nickel ore, and silica trading — serving domestic and export markets.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
