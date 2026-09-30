"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const JOURS_SEMAINE = ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."];
const MOIS = ["jan.", "fév.", "mars", "avr.", "mai", "juin", "juil.", "août", "sep.", "oct.", "nov.", "déc."];
const HEURES = [
  "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
];

function formatHeure(h: string) {
  const [hour, minute] = h.split(":");
  return `${hour}h${minute}`;
}

function buildDays() {
  const today = new Date();
  return Array.from({ length: 21 }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() + i + 1);
    const raw = `${JOURS_SEMAINE[d.getDay()]} ${d.getDate()} ${MOIS[d.getMonth()]}`;
    return raw.charAt(0).toUpperCase() + raw.slice(1);
  });
}

type Slot = { date: string; time: string };

// Opens on any click site-wide on a link/button whose text mentions
// "rendez-vous" or "rappel" — matches the behaviour of the original
// static-HTML prototype, without needing every page to wire it up itself.
export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [slot, setSlot] = useState<Slot | null>(null);
  const days = useMemo(() => buildDays(), []);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as HTMLElement)?.closest("a,button");
      if (!el) return;
      if (overlayRef.current?.contains(el)) return;
      const text = el.textContent?.trim().toLowerCase() ?? "";
      if (text.includes("rendez-vous") || text.includes("rappel")) {
        e.preventDefault();
        setOpen(true);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function close() {
    setOpen(false);
    setTimeout(() => {
      setStep(1);
      setSlot(null);
    }, 300);
  }

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-navy/60 p-6 backdrop-blur-[2px]"
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Prendre rendez-vous"
        className="relative grid h-[min(700px,88vh)] max-h-[88vh] w-full max-w-[980px] grid-cols-1 overflow-hidden rounded-[26px] bg-white shadow-[0_40px_100px_-30px_rgba(11,15,43,0.5)] sm:grid-cols-[36%_64%]"
      >
        <div className="relative hidden bg-gradient-to-br from-red to-red-dark sm:block">
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.14)_1.5px,transparent_1.5px)] [background-size:18px_18px]"
          />
          <div className="absolute bottom-7 left-7 flex items-center gap-2 font-heading text-[18px] font-extrabold text-white">
            <span className="flex h-[26px] w-[26px] items-center justify-center rounded-md bg-white text-[14px] font-extrabold text-red">
              F
            </span>
            Freelinx
          </div>
        </div>

        <div className="relative flex h-full min-h-0 flex-col overflow-hidden px-6 pb-7 pt-10 sm:px-11 sm:pt-10">
          <button
            type="button"
            aria-label="Fermer"
            onClick={close}
            className="absolute right-[18px] top-[18px] z-[5] flex h-9 w-9 items-center justify-center rounded-full border border-[#F0DCE2] bg-white text-navy transition-colors duration-150 hover:border-red hover:bg-red hover:text-white"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {step === 1 && (
            <div className="flex h-full min-h-0 flex-col">
              <div className="mb-2.5 text-[11.5px] font-extrabold uppercase tracking-[0.6px] text-red">
                Prendre rendez-vous
              </div>
              <h2 className="mb-2 font-heading text-[27px] font-extrabold text-navy">
                Parlons de votre projet<span className="text-red">.</span>
              </h2>
              <p className="mb-[22px] text-[13.5px] leading-[1.6] text-gray-text">
                Choisissez le créneau qui vous convient le mieux. Notre équipe vous recontactera à l&apos;heure choisie.
              </p>
              <div className="mb-[26px] h-[5px] flex-shrink-0 overflow-hidden rounded-full bg-[#F0DCE2]">
                <div className="h-full w-1/2 rounded-full bg-red transition-[width] duration-200" />
              </div>

              <div className="min-h-0 flex-1 overflow-y-auto pr-1.5 -mr-1.5">
                {days.map((day) => (
                  <div key={day} className="[&+&]:mt-[26px]">
                    <div className="mb-3 text-[14px] font-extrabold text-navy">{day}</div>
                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                      {HEURES.map((h) => {
                        const time = formatHeure(h);
                        const selected = slot?.date === day && slot?.time === time;
                        return (
                          <button
                            key={h}
                            type="button"
                            onClick={() => setSlot({ date: day, time })}
                            className={`rounded-xl border-[1.5px] px-2 py-3 text-center text-[13.5px] font-semibold transition-colors duration-150 ${
                              selected
                                ? "border-red bg-red text-white"
                                : "border-[#F0DCE2] bg-white text-navy hover:border-red"
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-[18px] flex flex-shrink-0 items-center justify-between gap-3.5 border-t border-[#F0DCE2] pt-5">
                <span />
                <button
                  type="button"
                  disabled={!slot}
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 rounded-full bg-red px-[22px] py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(232,21,79,0.55)] transition-transform duration-150 hover:-translate-y-px hover:bg-red-dark disabled:pointer-events-none disabled:opacity-40"
                >
                  Continuer
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form
              className="flex h-full min-h-0 flex-col"
              onSubmit={(e) => {
                e.preventDefault();
                setStep(3);
              }}
            >
              <div className="mb-2.5 text-[11.5px] font-extrabold uppercase tracking-[0.6px] text-red">
                Prendre rendez-vous
              </div>
              <h2 className="mb-2 font-heading text-[27px] font-extrabold text-navy">
                Vos informations<span className="text-red">.</span>
              </h2>
              <p className="mb-[22px] text-[13.5px] leading-[1.6] text-gray-text">
                Quelques informations pour préparer notre échange.
              </p>

              <div className="min-h-0 flex-1 overflow-y-auto pr-1">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="mb-[18px]">
                    <label className="mb-2 block text-[12.5px] font-bold text-navy">Nom*</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-[10px] border-[1.5px] border-[#F0DCE2] px-3.5 py-3 text-[14px] text-navy outline-none transition-colors duration-150 focus:border-red"
                    />
                  </div>
                  <div className="mb-[18px]">
                    <label className="mb-2 block text-[12.5px] font-bold text-navy">Prénom*</label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-[10px] border-[1.5px] border-[#F0DCE2] px-3.5 py-3 text-[14px] text-navy outline-none transition-colors duration-150 focus:border-red"
                    />
                  </div>
                </div>
                <div className="mb-[18px]">
                  <label className="mb-2 block text-[12.5px] font-bold text-navy">Téléphone*</label>
                  <div className="grid grid-cols-[74px_1fr] gap-2.5">
                    <div className="flex select-none items-center justify-center rounded-[10px] border-[1.5px] border-[#F0DCE2] bg-[#F4F5FA] px-2 py-3 text-[14px] font-semibold text-gray-text">
                      +33
                    </div>
                    <input
                      type="tel"
                      placeholder="6 12 34 56 78"
                      required
                      className="w-full rounded-[10px] border-[1.5px] border-[#F0DCE2] px-3.5 py-3 text-[14px] text-navy outline-none transition-colors duration-150 focus:border-red"
                    />
                  </div>
                </div>
                <div className="mb-[18px]">
                  <label className="mb-2 block text-[12.5px] font-bold text-navy">Email*</label>
                  <input
                    type="email"
                    required
                    className="w-full rounded-[10px] border-[1.5px] border-[#F0DCE2] px-3.5 py-3 text-[14px] text-navy outline-none transition-colors duration-150 focus:border-red"
                  />
                </div>
                <label className="mb-1.5 flex items-start gap-2.5 text-[12.5px] leading-[1.6] text-gray-text">
                  <input type="checkbox" required className="mt-0.5 h-4 w-4 flex-shrink-0 accent-red" />
                  <span>
                    J&apos;ai lu et j&apos;accepte les conditions décrites dans la{" "}
                    <a href="#" className="font-semibold text-red underline">
                      politique de confidentialité
                    </a>
                    .
                  </span>
                </label>
              </div>

              <div className="mt-[18px] flex flex-shrink-0 items-center justify-between gap-3.5 border-t border-[#F0DCE2] pt-5">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center gap-1.5 px-1 py-3 text-[13.5px] font-semibold text-gray-text transition-colors duration-150 hover:text-navy"
                >
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M15 6l-6 6 6 6" />
                  </svg>
                  Retour
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-red px-[22px] py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(232,21,79,0.55)] transition-transform duration-150 hover:-translate-y-px hover:bg-red-dark"
                >
                  Planifier mon appel
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="flex h-full flex-1 flex-col">
              <div className="m-auto py-8 text-center">
                <div className="mx-auto mb-[22px] flex h-[74px] w-[74px] items-center justify-center rounded-full bg-pink-pale">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#E8154F" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h2 className="mb-3 font-heading text-[27px] font-extrabold text-navy">
                  Rendez-vous confirmé<span className="text-red">.</span>
                </h2>
                <p className="mb-[26px] text-[14px] leading-[1.7] text-gray-text">
                  Merci&nbsp;! Notre équipe vous appellera le <strong className="text-navy">{slot?.date}</strong> à{" "}
                  <strong className="text-navy">{slot?.time}</strong>.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="mx-auto inline-flex items-center gap-2 rounded-full bg-red px-[22px] py-3 text-[14.5px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(232,21,79,0.55)] transition-transform duration-150 hover:-translate-y-px hover:bg-red-dark"
                >
                  Fermer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
