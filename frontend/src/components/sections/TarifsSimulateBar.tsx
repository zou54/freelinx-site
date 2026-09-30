export default function TarifsSimulateBar() {
  return (
    <section className="mx-auto max-w-[1120px] px-14 pb-[52px]">
      <div className="grid grid-cols-1 items-center gap-[22px] rounded-[18px] bg-[#F4F5FA] px-6 py-[26px] text-center sm:grid-cols-[auto_1fr_auto] sm:px-8 sm:text-left">
        <div className="mx-auto flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-[#3B5BDB] shadow-[0_8px_18px_-10px_rgba(11,15,43,0.18)] sm:mx-0">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="4" y="3" width="16" height="18" rx="2" />
            <path d="M8 7h8M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01" />
          </svg>
        </div>
        <div>
          <h4 className="mb-1 text-[16px] font-bold text-navy">Simulez vos revenus en quelques clics</h4>
          <p className="text-[12.5px] leading-[1.5] text-gray-text">
            Utilisez notre simulateur en ligne pour estimer votre rémunération nette après frais de gestion et
            charges sociales.
          </p>
        </div>
        <a
          href="/simulateur"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-red px-[22px] py-3 text-[13.5px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(232,21,79,0.5)] transition-transform duration-150 hover:-translate-y-px hover:bg-red-dark sm:w-auto"
        >
          Demander une simulation gratuite →
        </a>
      </div>
    </section>
  );
}
