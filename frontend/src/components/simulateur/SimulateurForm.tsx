"use client";

import { ChevronDownIcon } from "@/components/icons";

export type SimMode = "tjm" | "ca" | "netTarget";

export interface SimFormState {
  mode: SimMode;
  tjm: number;
  ca: number;
  netCible: number;
  jours: number;
  fraisGestion: number;
  fraisPro: number;
  situation: string;
  parts: number;
}

const PARTS_MAP: Record<string, number> = {
  celibataire: 1,
  marie: 2,
  marie_1enfant: 2.5,
  marie_2enfants: 3,
};

const MODES: { key: SimMode; label: string }[] = [
  { key: "tjm", label: "TJM" },
  { key: "ca", label: "CA" },
  { key: "netTarget", label: "Net cible" },
];

export default function SimulateurForm({
  state,
  onChange,
  advancedOpen,
  onToggleAdvanced,
  onSubmit,
}: {
  state: SimFormState;
  onChange: (patch: Partial<SimFormState>) => void;
  advancedOpen: boolean;
  onToggleAdvanced: () => void;
  onSubmit: () => void;
}) {
  const fillPct = ((state.fraisGestion - 5) / (10 - 5)) * 100;

  return (
    <div className="rounded-[20px] border border-[#F0DCE2] bg-white p-[26px] shadow-[0_20px_48px_-32px_rgba(11,15,43,0.18)] lg:sticky lg:top-[88px]">
      <div className="mb-6 flex items-center gap-2.5">
        <div className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-[10px] bg-pink-pale">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#E8154F" strokeWidth="1.8">
            <path d="M4 21v-7M4 10V3M12 21v-11M12 6V3M20 21v-5M20 12V3M1 14h6M9 10h6M17 16h6" />
          </svg>
        </div>
        <h2 className="text-[16px] font-extrabold text-navy">Paramètres de simulation</h2>
      </div>

      <div className="mb-5">
        <label className="mb-2 block text-[12.5px] font-bold text-navy">Mode de calcul</label>
        <div className="grid grid-cols-3 gap-2">
          {MODES.map((m) => (
            <button
              key={m.key}
              type="button"
              onClick={() => onChange({ mode: m.key })}
              className={`rounded-[10px] border-[1.5px] px-1.5 py-2.5 text-[12.5px] font-bold transition-all duration-150 ${
                state.mode === m.key
                  ? "border-red bg-red text-white shadow-[0_8px_18px_-8px_rgba(232,21,79,0.5)]"
                  : "border-[#F0DCE2] bg-pink-pale-2 text-navy-soft hover:border-red hover:text-red"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      {state.mode === "tjm" && (
        <div className="mb-5">
          <label className="mb-2 block text-[12.5px] font-bold text-navy">Taux Journalier Moyen (TJM)</label>
          <div className="relative">
            <input
              type="number"
              value={state.tjm}
              step={10}
              min={0}
              onChange={(e) => onChange({ tjm: Number(e.target.value) })}
              className="w-full rounded-[10px] border-[1.5px] border-[#F0DCE2] px-3.5 py-3 pr-10 text-[14.5px] font-semibold text-navy outline-none transition-colors duration-150 focus:border-red"
            />
            <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] font-bold text-gray-text">€</span>
          </div>
          <p className="mt-1.5 text-[11.5px] leading-[1.5] text-gray-text">Tarif journalier facturé au client</p>
        </div>
      )}

      {state.mode === "ca" && (
        <div className="mb-5">
          <label className="mb-2 block text-[12.5px] font-bold text-navy">Chiffre d&apos;affaires mensuel</label>
          <div className="relative">
            <input
              type="number"
              value={state.ca}
              step={100}
              min={0}
              onChange={(e) => onChange({ ca: Number(e.target.value) })}
              className="w-full rounded-[10px] border-[1.5px] border-[#F0DCE2] px-3.5 py-3 pr-10 text-[14.5px] font-semibold text-navy outline-none transition-colors duration-150 focus:border-red"
            />
            <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] font-bold text-gray-text">€</span>
          </div>
        </div>
      )}

      {state.mode === "netTarget" && (
        <div className="mb-5">
          <label className="mb-2 block text-[12.5px] font-bold text-navy">Salaire net mensuel souhaité</label>
          <div className="relative">
            <input
              type="number"
              value={state.netCible}
              step={50}
              min={0}
              onChange={(e) => onChange({ netCible: Number(e.target.value) })}
              className="w-full rounded-[10px] border-[1.5px] border-[#F0DCE2] px-3.5 py-3 pr-10 text-[14.5px] font-semibold text-navy outline-none transition-colors duration-150 focus:border-red"
            />
            <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] font-bold text-gray-text">€</span>
          </div>
        </div>
      )}

      {state.mode !== "ca" && (
        <div className="mb-5">
          <label className="mb-2 block text-[12.5px] font-bold text-navy">Jours travaillés / mois</label>
          <div className="relative">
            <input
              type="number"
              value={state.jours}
              step={1}
              min={1}
              max={23}
              onChange={(e) => onChange({ jours: Number(e.target.value) })}
              className="w-full rounded-[10px] border-[1.5px] border-[#F0DCE2] px-3.5 py-3 pr-10 text-[14.5px] font-semibold text-navy outline-none transition-colors duration-150 focus:border-red"
            />
            <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] font-bold text-gray-text">j</span>
          </div>
          <p className="mt-1.5 text-[11.5px] leading-[1.5] text-gray-text">Moyenne : 19-21 jours/mois</p>
        </div>
      )}

      <div className="mb-5">
        <div className="mb-2 flex items-center justify-between">
          <label className="text-[12.5px] font-bold text-navy">Frais de gestion</label>
          <span className="text-[13px] font-extrabold text-red">{state.fraisGestion}%</span>
        </div>
        <input
          type="range"
          min={5}
          max={10}
          step={0.5}
          value={state.fraisGestion}
          onChange={(e) => onChange({ fraisGestion: Number(e.target.value) })}
          style={{
            background: `linear-gradient(90deg, #E8154F 0%, #E8154F ${fillPct}%, #F0DCE2 ${fillPct}%, #F0DCE2 100%)`,
          }}
          className="sim-range my-1.5 h-1.5 w-full cursor-pointer appearance-none rounded-full outline-none"
        />
        <div className="flex justify-between text-[11px] font-semibold text-gray-text">
          <span>5%</span>
          <span>10%</span>
        </div>
      </div>

      <button
        type="button"
        onClick={onToggleAdvanced}
        className="mb-1 flex w-full items-center justify-center gap-2 rounded-[10px] border-[1.5px] border-dashed border-[#F0DCE2] bg-pink-pale-2 py-2.5 text-[12.5px] font-bold text-navy-soft transition-colors duration-150 hover:border-red hover:text-red"
      >
        Paramètres avancés
        <ChevronDownIcon className={`transition-transform duration-200 ${advancedOpen ? "rotate-180" : ""}`} />
      </button>

      {advancedOpen && (
        <div className="mt-1 border-t border-[#F0DCE2] pt-[18px]">
          <div className="mb-5">
            <label className="mb-2 block text-[12.5px] font-bold text-navy">Frais professionnels (HT)</label>
            <div className="relative">
              <input
                type="number"
                value={state.fraisPro}
                step={10}
                min={0}
                onChange={(e) => onChange({ fraisPro: Number(e.target.value) })}
                className="w-full rounded-[10px] border-[1.5px] border-[#F0DCE2] px-3.5 py-3 pr-10 text-[14.5px] font-semibold text-navy outline-none transition-colors duration-150 focus:border-red"
              />
              <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[13px] font-bold text-gray-text">€</span>
            </div>
            <p className="mt-1.5 text-[11.5px] leading-[1.5] text-gray-text">Déplacement, restauration, matériel...</p>
          </div>

          <div className="mb-5">
            <label className="mb-2 block text-[12.5px] font-bold text-navy">Situation familiale</label>
            <select
              value={state.situation}
              onChange={(e) => {
                const situation = e.target.value;
                const parts = PARTS_MAP[situation];
                onChange(parts !== undefined ? { situation, parts } : { situation });
              }}
              className="w-full cursor-pointer rounded-[10px] border-[1.5px] border-[#F0DCE2] px-3.5 py-3 text-[14px] font-semibold text-navy outline-none transition-colors duration-150 focus:border-red"
            >
              <option value="celibataire">Célibataire</option>
              <option value="marie">Marié(e) sans enfant</option>
              <option value="marie_1enfant">Marié(e) 1 enfant</option>
              <option value="marie_2enfants">Marié(e) 2 enfants</option>
            </select>
          </div>

          <div className="mb-0">
            <label className="mb-2 block text-[12.5px] font-bold text-navy">
              Nombre de parts fiscales : <span>{state.parts}</span>
            </label>
            <input
              type="number"
              value={state.parts}
              step={0.5}
              min={1}
              max={6}
              onChange={(e) => onChange({ parts: Number(e.target.value) })}
              className="w-full rounded-[10px] border-[1.5px] border-[#F0DCE2] px-3.5 py-3 text-[14.5px] font-semibold text-navy outline-none transition-colors duration-150 focus:border-red"
            />
            <p className="mt-1.5 text-[11.5px] text-gray-text">
              Calculé automatiquement selon la situation familiale, modifiable manuellement.
            </p>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={onSubmit}
        className="mt-1.5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-red px-5 py-[15px] text-[14px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(232,21,79,0.55)] transition-transform duration-150 hover:-translate-y-px hover:bg-red-dark"
      >
        Faire une simulation
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
