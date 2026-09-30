export default function QuiSommesNousConviction() {
  return (
    <section className="mx-auto max-w-[1120px] px-6 pb-[52px] sm:px-14">
      <div className="rounded-[24px] border border-[#F0DCE2] bg-white p-7 shadow-[0_20px_48px_-32px_rgba(11,15,43,0.18)] sm:p-11">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex items-start gap-6 text-center lg:pr-9 lg:text-left">
            <div className="hidden h-[76px] w-[76px] flex-shrink-0 items-center justify-center rounded-full bg-pink-pale-2 lg:flex">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8154F" strokeWidth="1.6">
                <circle cx="9" cy="8" r="3.2" />
                <path d="M2.5 20c0-3.6 2.9-6.2 6.5-6.2s6.5 2.6 6.5 6.2" />
                <circle cx="17" cy="8.5" r="2.6" />
                <path d="M15.8 13.9c2.9.4 5.2 2.7 5.2 6.1" />
              </svg>
            </div>
            <div className="mx-auto lg:mx-0">
              <div className="mx-auto mb-4 flex h-[76px] w-[76px] items-center justify-center rounded-full bg-pink-pale-2 lg:hidden">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8154F" strokeWidth="1.6">
                  <circle cx="9" cy="8" r="3.2" />
                  <path d="M2.5 20c0-3.6 2.9-6.2 6.5-6.2s6.5 2.6 6.5 6.2" />
                  <circle cx="17" cy="8.5" r="2.6" />
                  <path d="M15.8 13.9c2.9.4 5.2 2.7 5.2 6.1" />
                </svg>
              </div>
              <h3 className="mb-2.5 text-[20px] font-bold leading-[1.3] text-navy">
                Freelinx est née d&apos;une conviction forte&nbsp;:
              </h3>
              <p className="text-[14px] font-bold leading-[1.6] text-red">
                le portage salarial mérite un accompagnement plus humain, plus transparent et plus réactif.
              </p>
            </div>
          </div>

          <div className="mx-auto flex h-[38px] w-[38px] flex-shrink-0 rotate-90 items-center justify-center rounded-full bg-red shadow-[0_10px_22px_-8px_rgba(232,21,79,0.5)] lg:rotate-0">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </div>

          <div className="text-center lg:pl-9 lg:text-left">
            <p className="mb-3.5 text-[13.5px] leading-[1.75] text-gray-text">
              Nous avons créé une société capable d&apos;offrir aux consultants indépendants bien plus
              qu&apos;une simple gestion administrative.
            </p>
            <p className="text-[13.5px] leading-[1.75] text-gray-text">
              Notre ambition est de devenir un{" "}
              <strong className="font-bold text-navy">véritable partenaire de confiance</strong>, présent à
              chaque étape de votre parcours professionnel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
