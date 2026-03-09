"use client";
import { useI18n, type BusinessTab } from "../i18n/context";

type SpecRow = { param: string; basis: string; result: string; unit: string };

function SpecTable({ title, rows, labels }: { title: string; rows: SpecRow[]; labels: { parameter: string; basis: string; result: string; unit: string } }) {
  return (
    <div className="bg-gray-50 rounded-xl overflow-hidden">
      <div className="bg-[#0d1f30] text-white px-4 py-2 text-sm font-semibold">{title}</div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-xs text-gray-500 border-b border-gray-200">
            <th className="text-left px-4 py-2 font-medium">{labels.parameter}</th>
            <th className="text-left px-4 py-2 font-medium">{labels.basis}</th>
            <th className="text-right px-4 py-2 font-medium">{labels.result}</th>
            <th className="text-right px-4 py-2 font-medium">{labels.unit}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-gray-100 last:border-0">
              <td className="px-4 py-2 text-gray-700">{r.param}</td>
              <td className="px-4 py-2 text-gray-500">{r.basis}</td>
              <td className="px-4 py-2 text-right font-medium text-[#0d1f30]">{r.result}</td>
              <td className="px-4 py-2 text-right text-gray-500">{r.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const coalMidCV: SpecRow[] = [
  { param: "Gross Calorific Value", basis: "ADB", result: "5.613", unit: "Kcal/kg" },
  { param: "Gross Calorific Value", basis: "ARB", result: "4.658", unit: "Kcal/kg" },
  { param: "Total Moisture", basis: "ARB", result: "26.82", unit: "%" },
  { param: "Inherent Moisture", basis: "ADB", result: "16.04", unit: "%" },
  { param: "Ash", basis: "ADB", result: "11.94", unit: "%" },
  { param: "Total Sulphur", basis: "ADB", result: "36.97", unit: "%" },
  { param: "Fixed Carbon", basis: "ADB", result: "35.05", unit: "by dif." },
];
const coalLowMidCV: SpecRow[] = [
  { param: "Gross Calorific Value", basis: "ADB", result: "5.066", unit: "Kcal/kg" },
  { param: "Gross Calorific Value", basis: "ARB", result: "4.166", unit: "Kcal/kg" },
  { param: "Total Moisture", basis: "ARB", result: "27.81", unit: "%" },
  { param: "Inherent Moisture", basis: "ADB", result: "15.09", unit: "%" },
  { param: "Ash", basis: "ADB", result: "7.21", unit: "%" },
  { param: "Total Sulphur", basis: "ADB", result: "32.33", unit: "%" },
  { param: "Fixed Carbon", basis: "ADB", result: "34.00", unit: "by dif." },
];
const coalLowCV: SpecRow[] = [
  { param: "Gross Calorific Value", basis: "ADB", result: "5.261", unit: "Kcal/kg" },
  { param: "Gross Calorific Value", basis: "ARB", result: "3.790", unit: "Kcal/kg" },
  { param: "Total Moisture", basis: "ARB", result: "40.34", unit: "%" },
  { param: "Inherent Moisture", basis: "ADB", result: "17.22", unit: "%" },
  { param: "Ash", basis: "ADB", result: "4.92", unit: "%" },
  { param: "Total Sulphur", basis: "ADB", result: "0.16", unit: "%" },
  { param: "Fixed Carbon", basis: "ADB", result: "36.06", unit: "by dif." },
];
const sawdustA1: SpecRow[] = [
  { param: "Gross Calorific Value", basis: "ADB", result: "4.057", unit: "Kcal/kg" },
  { param: "Gross Calorific Value", basis: "ARB", result: "3.789", unit: "Kcal/kg" },
  { param: "Moisture Content", basis: "ARB", result: "<45", unit: "%" },
  { param: "Size", basis: "ARB", result: "<4.5", unit: "mm" },
];
const sawdustA2: SpecRow[] = [
  { param: "Gross Calorific Value", basis: "ADB", result: "4.057", unit: "Kcal/kg" },
  { param: "Gross Calorific Value", basis: "ARB", result: "3.789", unit: "Kcal/kg" },
  { param: "Moisture Content", basis: "ARB", result: "<38", unit: "%" },
  { param: "Size", basis: "ARB", result: "<3.5", unit: "mm" },
];
const woodchipA1: SpecRow[] = [
  { param: "Gross Calorific Value", basis: "ADB", result: "3.863", unit: "Kcal/kg" },
  { param: "Gross Calorific Value", basis: "ARB", result: ">2.795", unit: "Kcal/kg" },
  { param: "Moisture Content", basis: "ARB", result: "<45", unit: "%" },
  { param: "Size", basis: "ARB", result: "<5", unit: "cm" },
];
const woodchipA2: SpecRow[] = [
  { param: "Gross Calorific Value", basis: "ADB", result: "4.263", unit: "Kcal/kg" },
  { param: "Gross Calorific Value", basis: "ARB", result: ">3.095", unit: "Kcal/kg" },
  { param: "Moisture Content", basis: "ARB", result: "<38", unit: "%" },
  { param: "Size", basis: "ARB", result: "<5", unit: "cm" },
];
const nickelSaprolite: SpecRow[] = [
  { param: "Ni", basis: "ARB", result: "1.47", unit: "%" },
  { param: "Fe", basis: "ARB", result: "0.3", unit: "%" },
];
const nickelLimonite: SpecRow[] = [
  { param: "Ni", basis: "ARB", result: "1.12", unit: "%" },
  { param: "Fe", basis: "ARB", result: "0.2", unit: "%" },
];
const silicaA1: SpecRow[] = [{ param: "SiO2", basis: "ARB", result: "99.88", unit: "%" }];
const silicaA2: SpecRow[] = [{ param: "SiO2", basis: "ARB", result: ">89.65", unit: "%" }];

function Tabs({
  tabs,
  active,
  onChange,
}: {
  tabs: readonly { id: string; label: string }[];
  active: BusinessTab;
  onChange: (id: BusinessTab) => void;
}) {
  return (
    <div className="flex gap-2 flex-wrap mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id as BusinessTab)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            active === tab.id
              ? "bg-[#0d1f30] text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default function Business() {
  const { t, activeTab, setActiveTab } = useI18n();
  const b = t.business;

  const labels = b.specTable;

  return (
    <section id="business" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="section-label mb-3">{b.sectionLabel}</p>
        <h2 className="text-4xl font-bold text-[#0d1f30] mb-4">{b.heading}</h2>
        <p className="text-gray-500 mb-10 max-w-2xl">{b.subheading}</p>

        <Tabs tabs={b.tabs} active={activeTab} onChange={setActiveTab} />

        {activeTab === "coal" && (
          <div>
            <div className="bg-white rounded-2xl overflow-hidden mb-6 border border-gray-100">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img src="/assets/Images-01.jpg" alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
              <h3 className="text-xl font-bold text-[#0d1f30] mb-2">{b.coal.title}</h3>
              <p className="text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: b.coal.desc }} />
              <div className="flex flex-wrap gap-3 mt-3">
                {b.coal.badges.map((badge) => (
                  <span key={badge} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full first:bg-blue-50 first:text-blue-700 nth-2:bg-green-50 nth-2:text-green-700 nth-3:bg-gray-100 nth-3:text-gray-600">
                    {badge}
                  </span>
                ))}
              </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <SpecTable title="Mid CV" rows={coalMidCV} labels={labels} />
              <SpecTable title="Low to Mid CV" rows={coalLowMidCV} labels={labels} />
              <SpecTable title="Low CV" rows={coalLowCV} labels={labels} />
            </div>
          </div>
        )}

        {activeTab === "biomass" && (
          <div>
            <div className="bg-white rounded-2xl overflow-hidden mb-6 border border-gray-100">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img src="/assets/Images-02.jpg" alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
              <h3 className="text-xl font-bold text-[#0d1f30] mb-2">{b.biomass.title}</h3>
              <p className="text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: b.biomass.desc }} />
              <p className="text-gray-600 mb-3">{b.biomass.desc2}</p>
              <div className="flex flex-wrap gap-3 mt-3">
                {b.biomass.badges.map((badge, i) => (
                  <span
                    key={badge}
                    className={`text-xs px-3 py-1 rounded-full ${
                      i < 2
                        ? "bg-green-50 text-green-700"
                        : i === 2
                        ? "bg-blue-50 text-blue-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
              </div>
            </div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">
              {b.biomass.sawdustLabel}
            </h4>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <SpecTable title="Grade A1 — Commercial Sawdust" rows={sawdustA1} labels={labels} />
              <SpecTable title="Grade A2 — Industrial Sawdust" rows={sawdustA2} labels={labels} />
            </div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">
              {b.biomass.woodchipLabel}
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <SpecTable title="Grade A1 — Commercial Woodchip" rows={woodchipA1} labels={labels} />
              <SpecTable title="Grade A2 — Industrial Woodchip" rows={woodchipA2} labels={labels} />
            </div>
          </div>
        )}

        {activeTab === "nickel" && (
          <div>
            <div className="bg-white rounded-2xl overflow-hidden mb-6 border border-gray-100">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img src="/assets/Images-09.jpg" alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
              <h3 className="text-xl font-bold text-[#0d1f30] mb-2">{b.nickel.title}</h3>
              <p className="text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: b.nickel.desc }} />
              <div className="flex flex-wrap gap-3 mt-3">
                {b.nickel.badges.map((badge, i) => (
                  <span
                    key={badge}
                    className={`text-xs px-3 py-1 rounded-full ${
                      i === 0
                        ? "bg-blue-50 text-blue-700"
                        : i === 1
                        ? "bg-gray-100 text-gray-600"
                        : "bg-green-50 text-green-700"
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
              </div>
            </div>
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">
              {b.nickel.regionLabel}
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <SpecTable title="Saprolite Ore" rows={nickelSaprolite} labels={labels} />
              <SpecTable title="Limonite Ore" rows={nickelLimonite} labels={labels} />
            </div>
          </div>
        )}

        {activeTab === "silica" && (
          <div>
            <div className="bg-white rounded-2xl overflow-hidden mb-6 border border-gray-100">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img src="/assets/Images-03.jpg" alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
              <h3 className="text-xl font-bold text-[#0d1f30] mb-2">{b.silica.title}</h3>
              <p className="text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: b.silica.desc }} />
              <div className="flex flex-wrap gap-3 mt-3">
                {b.silica.badges.map((badge, i) => (
                  <span
                    key={badge}
                    className={`text-xs px-3 py-1 rounded-full ${
                      i === 0 ? "bg-blue-50 text-blue-700" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <SpecTable title="Grade A1 — Raw Silica Quartz" rows={silicaA1} labels={labels} />
              <SpecTable title="Grade A2 — Raw Silica Sand" rows={silicaA2} labels={labels} />
            </div>
            <p className="text-xs text-gray-400 mt-4 italic">{b.silica.disclaimer}</p>
          </div>
        )}
      </div>
    </section>
  );
}
