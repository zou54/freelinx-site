"use client";

import { useState } from "react";
import {
  CHARGE_LABELS,
  comparerSalarie,
  detailCharges,
  euro,
  type SimulationResult,
} from "@/lib/simulateur/calc";
import type { SimulateurCopyData } from "@/lib/content/simulateur";

type TabKey = "resultats" | "graphiques" | "comparateur" | "details";
const TAB_KEYS: TabKey[] = ["resultats", "graphiques", "comparateur", "details"];

function StatCard({
  name,
  amount,
  tone,
  big,
}: {
  name: string;
  amount: number;
  tone: "ca" | "brut" | "avant" | "impot" | "net";
  big?: boolean;
}) {
  const toneClasses: Record<string, string> = {
    ca: "bg-pink-pale-2",
    brut: "bg-[#EEF0F7]",
    avant: "bg-pink-pale",
    impot: "bg-[#FBEFDD]",
    net: "bg-gradient-to-br from-[#1F9D63] to-[#167A4D] border-transparent",
  };
  return (
    <div className={`rounded-[14px] border border-[#F0DCE2] p-[18px_20px] ${toneClasses[tone]} ${big ? "col-span-2" : ""}`}>
      <div className={`mb-2 text-[12.5px] font-bold ${big ? "text-white/85" : "text-navy-soft"}`}>{name}</div>
      <div
        className={`font-heading font-extrabold ${big ? "text-[26px] text-white" : "text-[22px]"} ${
          tone === "impot" && !big ? "text-[#C97A17]" : !big ? "text-navy" : ""
        }`}
      >
        {euro(amount)}
      </div>
    </div>
  );
}

function Donut({ res, copy }: { res: SimulationResult; copy: SimulateurCopyData }) {
  const segments = [
    { name: copy.fraisGestionLabel, val: res.montantFraisGestion, hex: "#3A3F5C" },
    { name: copy.chargesPatronalesLabel, val: res.chargesPatronales, hex: "#E8154F" },
    { name: copy.chargesSalarialesLabel, val: res.chargesSalariales, hex: "#C81044" },
    { name: copy.compareImpotLabel, val: res.impotMensuel, hex: "#0B0F2B" },
    { name: copy.donutSalaireNetLabel, val: res.salaireNetApresImpot, hex: "#1F9D63" },
  ];
  const total = res.chiffreAffaires;
  const r = 38;
  const C = 2 * Math.PI * r;
  let cursor = 0;

  return (
    <div className="grid grid-cols-1 items-center gap-9 sm:grid-cols-[auto_1fr]">
      <div className="relative h-[190px] w-[190px] flex-shrink-0 overflow-hidden">
        <svg viewBox="0 0 100 100" width={190} height={190} className="-rotate-90">
          {segments.map((seg) => {
            const pct = Math.max(0, (seg.val / total) * 100);
            const arcLen = (pct / 100) * C;
            const startLen = (cursor / 100) * C;
            cursor += pct;
            return (
              <circle
                key={seg.name}
                cx={50}
                cy={50}
                r={r}
                fill="none"
                stroke={seg.hex}
                strokeWidth={13}
                strokeDasharray={`${arcLen} ${C - arcLen}`}
                strokeDashoffset={-startLen}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className="text-[10.5px] font-bold uppercase tracking-[0.4px] text-gray-text">{copy.donutCenterLabel}</div>
          <div className="font-heading text-[19px] font-extrabold text-navy">{euro(total)}</div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {segments.map((seg) => {
          const pct = Math.max(0, (seg.val / total) * 100);
          return (
            <div key={seg.name} className="flex items-center gap-2.5 text-[13px]">
              <span className="h-[11px] w-[11px] flex-shrink-0 rounded-[3px]" style={{ background: seg.hex }} />
              <span className="flex-1 text-navy-soft">{seg.name}</span>
              <span className="mr-2 font-extrabold text-navy">{euro(seg.val)}</span>
              <span className="font-extrabold text-navy">{pct.toFixed(1)}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function BarEvolution({ res, copy }: { res: SimulationResult; copy: SimulateurCopyData }) {
  const w = 620,
    h = 280,
    padL = 44,
    padR = 16,
    padT = 16,
    padB = 64;
  const items = [
    { name: copy.evoCaLabel, val: res.chiffreAffaires },
    { name: copy.evoApresFraisLabel, val: res.caApresFraisGestion },
    { name: copy.statBrutLabel, val: res.salaireBrut },
    { name: copy.evoNetAvantLabel, val: res.salaireNetAvantImpot },
    { name: copy.evoNetApresLabel, val: res.salaireNetApresImpot },
  ];
  const maxY = Math.max(...items.map((i) => i.val)) * 1.12;
  const innerW = w - padL - padR;
  const bandW = innerW / items.length;
  const barW = bandW * 0.52;

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" className="block min-w-[480px]">
        {[0, 1, 2, 3, 4].map((g) => {
          const gy = padT + (h - padT - padB) * (g / 4);
          return (
            <g key={g}>
              <line x1={padL} x2={w - padR} y1={gy} y2={gy} stroke="#F0DCE2" strokeWidth={1} />
              <text x={4} y={gy + 4} fontSize={10} fill="#5B6072">
                {Math.round((maxY * (1 - g / 4)) / 500) * 500}
              </text>
            </g>
          );
        })}
        {items.map((it, idx) => {
          const barH = (it.val / maxY) * (h - padT - padB);
          const x = padL + idx * bandW + (bandW - barW) / 2;
          const y = h - padB - barH;
          return (
            <g key={it.name}>
              <rect x={x} y={y} width={barW} height={Math.max(barH, 2)} rx={7} fill="#E8154F" />
              <text x={x + barW / 2} y={y - 8} fontSize={11} fill="#0B0F2B" fontWeight={700} textAnchor="middle">
                {euro(it.val)}
              </text>
              <text x={x + barW / 2} y={h - padB + 18} fontSize={10.5} fill="#5B6072" fontWeight={600} textAnchor="middle">
                {it.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function BarCompare({ res, copy }: { res: SimulationResult; copy: SimulateurCopyData }) {
  const w = 620,
    h = 220,
    padL = 110,
    padR = 60,
    padT = 14,
    padB = 14;
  const rows = [
    { name: copy.comparePatronalesLabel, val: res.chargesPatronales, color: "#E8154F" },
    { name: copy.compareSalarialesLabel, val: res.chargesSalariales, color: "#C81044" },
    { name: copy.compareFraisGestionLabel, val: res.montantFraisGestion, color: "#3A3F5C" },
    { name: copy.compareImpotLabel, val: res.impotMensuel, color: "#0B0F2B" },
  ];
  const maxVal = Math.max(...rows.map((r) => r.val)) * 1.15;
  const rowH = (h - padT - padB) / rows.length;

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" className="block min-w-[480px]">
        {rows.map((r, idx) => {
          const y = padT + idx * rowH + rowH * 0.22;
          const barH = rowH * 0.56;
          const barW = (r.val / maxVal) * (w - padL - padR);
          return (
            <g key={r.name}>
              <text x={padL - 10} y={y + barH * 0.72} textAnchor="end" fontSize={12} fill="#0B0F2B" fontWeight={600}>
                {r.name}
              </text>
              <rect x={padL} y={y} width={Math.max(barW, 2)} height={barH} rx={6} fill={r.color} />
              <text x={padL + barW + 8} y={y + barH * 0.72} fontSize={11.5} fill="#5B6072" fontWeight={700}>
                {euro(r.val)}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function LineProjection({ res, copy }: { res: SimulationResult; copy: SimulateurCopyData }) {
  const w = 620,
    h = 260,
    padL = 44,
    padR = 16,
    padT = 16,
    padB = 30;
  const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];
  const maxY = res.chiffreAffaires * 1.15;
  const innerW = w - padL - padR;
  const innerH = h - padT - padB;

  function path(val: number, color: string) {
    const d = months
      .map((_, idx) => {
        const x = padL + (idx / (months.length - 1)) * innerW;
        const y = padT + innerH - (val / maxY) * innerH;
        return `${idx === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");
    return <path key={color} d={d} fill="none" stroke={color} strokeWidth={2.5} />;
  }

  return (
    <div>
      <div className="w-full overflow-x-auto">
        <svg viewBox={`0 0 ${w} ${h}`} width="100%" className="block min-w-[480px]">
          {[0, 1, 2, 3, 4].map((g) => {
            const gy = padT + innerH * (g / 4);
            return (
              <g key={g}>
                <line x1={padL} x2={w - padR} y1={gy} y2={gy} stroke="#F0DCE2" strokeWidth={1} />
                <text x={4} y={gy + 4} fontSize={10} fill="#5B6072">
                  {Math.round((maxY * (1 - g / 4)) / 500) * 500}
                </text>
              </g>
            );
          })}
          {months.map((m, idx) => {
            const x = padL + (idx / (months.length - 1)) * innerW;
            return (
              <text key={m} x={x} y={h - 8} fontSize={10} fill="#5B6072" textAnchor="middle">
                {m}
              </text>
            );
          })}
          {path(res.chiffreAffaires, "#E8154F")}
          {path(res.salaireNetApresImpot, "#1F9D63")}
        </svg>
      </div>
      <div className="mt-3.5 flex flex-wrap gap-4.5">
        <div className="flex items-center gap-1.5 text-[12px] font-semibold text-navy-soft">
          <span className="h-2.5 w-2.5 rounded-[3px] bg-red" /> {copy.lineCaLegend}
        </div>
        <div className="flex items-center gap-1.5 text-[12px] font-semibold text-navy-soft">
          <span className="h-2.5 w-2.5 rounded-[3px] bg-[#1F9D63]" /> {copy.lineNetLegend}
        </div>
      </div>
      <div className="mt-[18px] grid grid-cols-1 gap-3.5 sm:grid-cols-2">
        <div className="rounded-[14px] bg-navy px-5 py-4.5 text-white">
          <div className="mb-1.5 text-[12px] opacity-70">{copy.lineCaCumuleLabel}</div>
          <div className="font-heading text-[21px] font-extrabold">{euro(res.annuel.chiffreAffaires)}</div>
        </div>
        <div className="rounded-[14px] bg-navy px-5 py-4.5 text-white">
          <div className="mb-1.5 text-[12px] opacity-70">{copy.lineNetCumuleLabel}</div>
          <div className="font-heading text-[21px] font-extrabold">{euro(res.annuel.salaireNetApresImpot)}</div>
        </div>
      </div>
    </div>
  );
}

function Comparateur({ res, copy }: { res: SimulationResult; copy: SimulateurCopyData }) {
  const cmp = comparerSalarie(res.chiffreAffaires, res.fraisGestion);
  const absDiff = Math.abs(cmp.difference);
  const absPct = Math.abs(cmp.pourcentageDifference);
  const good = cmp.avantageux === "portage";

  return (
    <div>
      <div className="mb-4 flex items-center gap-2.5">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#E8154F" strokeWidth="1.8">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87" />
          <path d="M16 3.13a4 4 0 010 7.75" />
        </svg>
        <h3 className="text-[19px] font-extrabold text-navy">{copy.comparateurTitle}</h3>
      </div>

      <div className="mb-5 grid grid-cols-1 gap-4.5 sm:grid-cols-2">
        <div className="rounded-[18px] bg-gradient-to-br from-red to-red-dark p-6 text-white shadow-[0_20px_44px_-22px_rgba(11,15,43,0.35)]">
          <h4 className="mb-4 text-[15px] font-extrabold opacity-95">{copy.portageCardTitle}</h4>
          <div className="mb-2.5 flex items-baseline justify-between">
            <span className="text-[12.5px] font-semibold opacity-85">{copy.statBrutLabel}</span>
            <span className="font-heading text-[22px] font-extrabold">{euro(cmp.portage.brut)}</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-[12.5px] font-semibold opacity-85">{copy.donutSalaireNetLabel}</span>
            <span className="font-heading text-[22px] font-extrabold">{euro(cmp.portage.net)}</span>
          </div>
        </div>
        <div className="rounded-[18px] bg-gradient-to-br from-navy-soft to-navy p-6 text-white shadow-[0_20px_44px_-22px_rgba(11,15,43,0.35)]">
          <h4 className="mb-4 text-[15px] font-extrabold opacity-95">{copy.salarieCardTitle}</h4>
          <div className="mb-2.5 flex items-baseline justify-between">
            <span className="text-[12.5px] font-semibold opacity-85">{copy.statBrutLabel}</span>
            <span className="font-heading text-[22px] font-extrabold">{euro(cmp.salarie.brut)}</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-[12.5px] font-semibold opacity-85">{copy.donutSalaireNetLabel}</span>
            <span className="font-heading text-[22px] font-extrabold">{euro(cmp.salarie.net)}</span>
          </div>
        </div>
      </div>

      <div
        className={`mb-5 flex flex-wrap items-center justify-between gap-4 rounded-[18px] p-[22px_30px] text-white shadow-[0_20px_44px_-22px_rgba(11,15,43,0.35)] ${
          good ? "bg-gradient-to-r from-[#1F9D63] to-[#167A4D]" : "bg-gradient-to-r from-red to-red-dark"
        }`}
      >
        <div>
          <div className="mb-1 text-[12.5px] font-bold opacity-85">{good ? copy.avantagePortageLabel : copy.avantageSalariatLabel}</div>
          <div className="font-heading text-[27px] font-extrabold">{euro(absDiff)}</div>
        </div>
        <svg width={34} height={34} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} className="opacity-90">
          {good ? <path d="M22 7l-8.5 8.5-5-5L2 17M16 7h6v6" /> : <path d="M22 17l-8.5-8.5-5 5L2 7M16 17h6v-6" />}
        </svg>
        <div className="text-right">
          <div className="mb-1 text-[12.5px] font-bold opacity-85">{copy.differenceLabel}</div>
          <div className="font-heading text-[27px] font-extrabold">
            {good ? "+" : "-"}
            {absPct.toFixed(1)}%
          </div>
        </div>
      </div>

      <div className="rounded-[20px] border border-[#F0DCE2] bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_1px_1fr]">
          <div className="p-6">
            <h4 className="mb-4 flex items-center gap-2 text-[15px] font-extrabold text-navy">
              <span className="h-2 w-2 rounded-full bg-red" /> {copy.portageCardTitle}
            </h4>
            <div className="mb-3 flex items-center gap-1.5 text-[13px] font-extrabold text-[#167A4D]">
              <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2.4}>
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              {copy.avantagesLabel}
            </div>
            <ul className="mb-4 flex flex-col gap-2">
              {copy.portageAvantages.map((item) => (
                <li key={item.label} className="relative pl-4 text-[13px] leading-[1.4] text-navy-soft before:absolute before:left-0 before:top-[6px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#1F9D63]">
                  {item.label}
                </li>
              ))}
            </ul>
            <div className="mb-3 flex items-center gap-1.5 text-[13px] font-extrabold text-red-dark">
              <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2.4}>
                <circle cx="12" cy="12" r="9" />
                <path d="M9.5 9.5l5 5M14.5 9.5l-5 5" />
              </svg>
              {copy.inconvenientsLabel}
            </div>
            <ul className="flex flex-col gap-2">
              {copy.portageInconvenients.map((item) => (
                <li key={item.label} className="relative pl-4 text-[13px] leading-[1.4] text-navy-soft before:absolute before:left-0 before:top-[6px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-red">
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden bg-[#F0DCE2] sm:block" />

          <div className="p-6">
            <h4 className="mb-4 flex items-center gap-2 text-[15px] font-extrabold text-navy">
              <span className="h-2 w-2 rounded-full bg-navy" /> {copy.salarieColumnTitle}
            </h4>
            <div className="mb-3 flex items-center gap-1.5 text-[13px] font-extrabold text-[#167A4D]">
              <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2.4}>
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              {copy.avantagesLabel}
            </div>
            <ul className="mb-4 flex flex-col gap-2">
              {copy.salarieAvantages.map((item) => (
                <li key={item.label} className="relative pl-4 text-[13px] leading-[1.4] text-navy-soft before:absolute before:left-0 before:top-[6px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#1F9D63]">
                  {item.label}
                </li>
              ))}
            </ul>
            <div className="mb-3 flex items-center gap-1.5 text-[13px] font-extrabold text-red-dark">
              <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2.4}>
                <circle cx="12" cy="12" r="9" />
                <path d="M9.5 9.5l5 5M14.5 9.5l-5 5" />
              </svg>
              {copy.inconvenientsLabel}
            </div>
            <ul className="flex flex-col gap-2">
              {copy.salarieInconvenients.map((item) => (
                <li key={item.label} className="relative pl-4 text-[13px] leading-[1.4] text-navy-soft before:absolute before:left-0 before:top-[6px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-red">
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-[18px] border border-[#F0DCE2] bg-gradient-to-br from-pink-pale-2 to-[#EEF0F7] p-[26px_30px]">
        <h4 className="mb-3 text-[16px] font-extrabold text-navy">{copy.conclusionTitle}</h4>
        <p className="mb-2.5 text-[13.5px] leading-[1.7] text-navy-soft">
          Le <strong className="font-extrabold text-red">{good ? copy.conclusionPortageLabel : copy.conclusionSalariatLabel}</strong>
          {copy.conclusionMiddleText}
          <strong className="font-extrabold text-red">{euro(absDiff)}</strong>
          {copy.conclusionSuffixText}
        </p>
        <p className="text-[13.5px] leading-[1.7] text-navy-soft">{copy.conclusionSecondParagraph}</p>
      </div>
    </div>
  );
}

function DetailsTable({
  title,
  data,
  total,
  copy,
}: {
  title: string;
  data: Record<string, number>;
  total: number;
  copy: SimulateurCopyData;
}) {
  return (
    <div>
      <h4 className="mb-3 text-[13.5px] font-extrabold text-navy">{title}</h4>
      <table className="w-full border-collapse text-[12.5px]">
        <thead>
          <tr>
            <th className="border-b-[1.5px] border-[#F0DCE2] px-1 py-2.5 text-left font-bold text-navy-soft">{copy.detailsTableHeaderPoste}</th>
            <th className="border-b-[1.5px] border-[#F0DCE2] px-1 py-2.5 text-right font-bold text-navy-soft">{copy.detailsTableHeaderMontant}</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([k, v]) => (
            <tr key={k}>
              <td className="border-b border-[#F0DCE2] px-1 py-2.5 text-navy">{CHARGE_LABELS[k] ?? k}</td>
              <td className="border-b border-[#F0DCE2] px-1 py-2.5 text-right text-navy">{euro(v)}</td>
            </tr>
          ))}
          <tr className="bg-pink-pale-2 font-extrabold">
            <td className="px-1 py-2.5">{copy.detailsTableTotalLabel}</td>
            <td className="px-1 py-2.5 text-right">{euro(total)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function SimulateurResults({
  res,
  tjmNecessaire,
  copy,
}: {
  res: SimulationResult;
  tjmNecessaire: number | null;
  copy: SimulateurCopyData;
}) {
  const [tab, setTab] = useState<TabKey>("resultats");
  const details = detailCharges(res.salaireBrut);

  const tabLabels: Record<TabKey, string> = {
    resultats: copy.tabResultatsLabel,
    graphiques: copy.tabGraphiquesLabel,
    comparateur: copy.tabComparateurLabel,
    details: copy.tabDetailsLabel,
  };

  const mainStats: { name: string; amount: number; tone: "ca" | "brut" | "avant" | "impot" | "net"; big?: boolean }[] = [
    { name: copy.statCaLabel, amount: res.chiffreAffaires, tone: "ca" },
    { name: copy.statBrutLabel, amount: res.salaireBrut, tone: "brut" },
    { name: copy.statNetAvantLabel, amount: res.salaireNetAvantImpot, tone: "avant" },
    { name: copy.statImpotLabel, amount: res.impotMensuel, tone: "impot" },
    { name: copy.statNetApresLabel, amount: res.salaireNetApresImpot, tone: "net", big: true },
  ];
  const annuelStats: { name: string; amount: number; tone: "ca" | "brut" | "avant" | "impot" | "net"; big?: boolean }[] = [
    { name: copy.annuelCaLabel, amount: res.annuel.chiffreAffaires, tone: "ca" },
    { name: copy.annuelBrutLabel, amount: res.annuel.salaireBrut, tone: "brut" },
    { name: copy.annuelNetAvantLabel, amount: res.annuel.salaireNetAvantImpot, tone: "avant" },
    { name: copy.annuelImpotLabel, amount: res.annuel.impot, tone: "impot" },
    { name: copy.annuelNetApresLabel, amount: res.annuel.salaireNetApresImpot, tone: "net", big: true },
  ];

  const prelevementRows = [
    { name: `${copy.fraisGestionLabel} (${res.fraisGestion}%)`, amt: res.montantFraisGestion },
    ...(res.fraisProfessionnels > 0 ? [{ name: copy.fraisProRowLabel, amt: res.fraisProfessionnels }] : []),
    { name: copy.chargesPatronalesLabel, amt: res.chargesPatronales },
    { name: copy.chargesSalarialesLabel, amt: res.chargesSalariales },
    { name: copy.statImpotLabel, amt: res.impotMensuel },
  ];

  return (
    <div>
      <div className="mb-5 flex gap-1.5 overflow-x-auto rounded-[20px] border border-[#F0DCE2] bg-white p-2 shadow-[0_20px_48px_-32px_rgba(11,15,43,0.18)]">
        {TAB_KEYS.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setTab(key)}
            className={`flex flex-shrink-0 items-center gap-1.5 whitespace-nowrap rounded-[10px] px-[18px] py-2.5 text-[13px] font-bold transition-all duration-150 ${
              tab === key ? "bg-red text-white" : "text-gray-text hover:bg-pink-pale-2 hover:text-navy"
            }`}
          >
            {tabLabels[key]}
          </button>
        ))}
      </div>

      {tab === "resultats" && (
        <div>
          <div className="mb-5 rounded-[20px] border border-[#F0DCE2] bg-white p-[28px_26px] shadow-[0_20px_48px_-32px_rgba(11,15,43,0.18)]">
            {tjmNecessaire !== null && (
              <div className="mb-[22px] flex items-center gap-4 rounded-2xl bg-gradient-to-r from-red to-red-dark p-5 text-white shadow-[0_16px_34px_-16px_rgba(232,21,79,0.55)]">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/18">
                  <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="#fff" strokeWidth={2}>
                    <path d="M3 3v18h18" />
                    <path d="M7 14l4-4 3 3 5-6" />
                  </svg>
                </div>
                <div>
                  <div className="mb-0.5 text-[12px] font-bold opacity-85">{copy.tjmNecessaireLabel}</div>
                  <div className="font-heading text-[26px] font-extrabold">{euro(tjmNecessaire)}</div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3.5">
              {mainStats.map((s) => (
                <StatCard key={s.name} {...s} />
              ))}
            </div>

            <div className="mt-[26px] border-t border-[#F0DCE2] pt-6">
              <div className="mb-3.5 text-[16px] font-extrabold text-navy">{copy.detailPrelevementsTitle}</div>
              {prelevementRows.map((r) => (
                <div key={r.name} className="flex items-center justify-between py-2.5 text-[13.5px]">
                  <span className="text-gray-text">{r.name}</span>
                  <span className="font-bold text-red">- {euro(r.amt)}</span>
                </div>
              ))}
              <div className="mt-2.5 flex items-center justify-between border-t-2 border-[#F0DCE2] pt-3.5 text-[14px] font-extrabold text-navy">
                <span>{copy.tauxChargeGlobalLabel}</span>
                <span className="text-[19px] text-[#C97A17]">{res.tauxCharge.toFixed(1)}%</span>
              </div>
            </div>
          </div>

          <div className="mb-5 rounded-[20px] border border-[#F0DCE2] bg-white p-[28px_26px] shadow-[0_20px_48px_-32px_rgba(11,15,43,0.18)]">
            <div className="mb-5 text-[16px] font-extrabold text-navy">{copy.projectionAnnuelleTitle}</div>
            <div className="grid grid-cols-2 gap-3.5">
              {annuelStats.map((s) => (
                <StatCard key={s.name} {...s} />
              ))}
            </div>
          </div>

          <div className="flex gap-3.5 rounded-2xl border-[1.5px] border-[#F0DCE2] bg-pink-pale-2 p-[20px_22px]">
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#E8154F" strokeWidth={2} className="mt-0.5 flex-shrink-0">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8h.01M11 12h1v5h1" />
            </svg>
            <div>
              <p className="mb-2 text-[13px] font-extrabold text-navy">{copy.infosImportantesTitle}</p>
              <ul className="ml-[18px] flex list-disc flex-col gap-1.5 text-[12.5px] leading-[1.5] text-gray-text">
                <li>Les calculs sont basés sur le plafond SS 2024 : 3 864 €/mois</li>
                {copy.infosImportantesBullets.map((item) => (
                  <li key={item.label}>{item.label}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {tab === "graphiques" && (
        <div className="flex flex-col gap-5">
          <div className="rounded-[20px] border border-[#F0DCE2] bg-white p-[28px_26px] shadow-[0_20px_48px_-32px_rgba(11,15,43,0.18)]">
            <div className="mb-5 text-[16px] font-extrabold text-navy">{copy.graphRepartitionTitle}</div>
            <Donut res={res} copy={copy} />
          </div>
          <div className="rounded-[20px] border border-[#F0DCE2] bg-white p-[28px_26px] shadow-[0_20px_48px_-32px_rgba(11,15,43,0.18)]">
            <div className="mb-5 text-[16px] font-extrabold text-navy">{copy.graphEvolutionTitle}</div>
            <BarEvolution res={res} copy={copy} />
          </div>
          <div className="rounded-[20px] border border-[#F0DCE2] bg-white p-[28px_26px] shadow-[0_20px_48px_-32px_rgba(11,15,43,0.18)]">
            <div className="mb-5 text-[16px] font-extrabold text-navy">{copy.graphComparaisonTitle}</div>
            <BarCompare res={res} copy={copy} />
            <div className="mt-3.5 flex flex-wrap gap-4.5 text-[12px] font-semibold text-navy-soft">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: "#E8154F" }} /> {copy.comparePatronalesLabel}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: "#C81044" }} /> {copy.compareSalarialesLabel}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: "#3A3F5C" }} /> {copy.compareFraisGestionLabel}
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: "#0B0F2B" }} /> {copy.compareImpotLabel}
              </div>
            </div>
          </div>
          <div className="rounded-[20px] border border-[#F0DCE2] bg-white p-[28px_26px] shadow-[0_20px_48px_-32px_rgba(11,15,43,0.18)]">
            <div className="mb-5 text-[16px] font-extrabold text-navy">{copy.graphProjectionTitle}</div>
            <LineProjection res={res} copy={copy} />
          </div>
        </div>
      )}

      {tab === "comparateur" && <Comparateur res={res} copy={copy} />}

      {tab === "details" && (
        <div>
          <div className="rounded-[20px] border border-[#F0DCE2] bg-white p-[28px_26px] shadow-[0_20px_48px_-32px_rgba(11,15,43,0.18)]">
            <div className="mb-5 text-[16px] font-extrabold text-navy">{copy.detailsTitle}</div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <DetailsTable title={copy.chargesPatronalesLabel} data={details.patronales} total={details.totalPatronales} copy={copy} />
              <DetailsTable title={copy.chargesSalarialesLabel} data={details.salariales} total={details.totalSalariales} copy={copy} />
            </div>
          </div>
          <p className="mt-2.5 text-center text-[11.5px] leading-[1.6] text-gray-text">{copy.detailsDisclaimer}</p>
        </div>
      )}
    </div>
  );
}
