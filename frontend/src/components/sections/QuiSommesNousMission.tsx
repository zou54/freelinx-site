export default function QuiSommesNousMission() {
  return (
    <section className="mx-auto max-w-[1120px] px-6 py-[52px] sm:px-14">
      <div className="rounded-[24px] bg-pink-pale-2 p-7 sm:p-11">
        <div className="grid grid-cols-1 items-center gap-8 text-center sm:gap-11 lg:grid-cols-[auto_1fr] lg:text-left">
          <div className="mx-auto flex h-[150px] w-[150px] flex-shrink-0 items-center justify-center rounded-full bg-white shadow-[0_20px_40px_-20px_rgba(11,15,43,0.18)] lg:mx-0">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#E8154F" strokeWidth="1.6">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="12" cy="12" r="1.4" fill="#E8154F" stroke="none" />
              <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
            </svg>
          </div>
          <div>
            <h3 className="mb-1.5 text-[22px] font-bold text-navy">Notre mission</h3>
            <div className="mx-auto mb-[18px] h-[3px] w-10 rounded-full bg-red lg:mx-0" />
            <p className="mb-[18px] text-[16px] font-bold leading-[1.5] text-red">
              Vous permettre de vous concentrer pleinement sur votre métier, votre expertise et vos clients.
            </p>
            <p className="mb-3 text-[13.5px] leading-[1.75] text-gray-text">
              Notre mission est claire&nbsp;: vous permettre de vous concentrer pleinement sur votre métier,
              votre expertise et vos clients, pendant que nous prenons en charge l&apos;intégralité de la
              gestion administrative, comptable et sociale.
            </p>
            <p className="text-[13.5px] leading-[1.75] text-gray-text">
              Nous croyons fermement que la réussite de nos consultants passe par une relation de confiance
              basée sur la clarté et l&apos;honnêteté.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
