export default function QuiSommesNousQuote() {
  return (
    <section className="mx-auto max-w-[1120px] px-6 pb-[52px] sm:px-14">
      <div className="rounded-[24px] bg-pink-pale p-7 sm:p-11">
        <div className="grid grid-cols-1 items-center gap-8 text-center lg:grid-cols-[auto_1fr_auto_auto] lg:text-left">
          <svg
            className="mx-auto h-[34px] w-[46px] flex-shrink-0 text-red lg:mx-0"
            viewBox="0 0 48 36"
            fill="currentColor"
          >
            <path d="M0 20.2C0 9.4 7.6 2 18.4 0l2.2 4.8C13 6.6 9 11 8.4 16.4c1-.4 2.2-.6 3.4-.6 5 0 8.8 3.6 8.8 8.8 0 5.4-4 9.4-9.6 9.4C4.6 34 0 28 0 20.2zm27 0C27 9.4 34.6 2 45.4 0l2.2 4.8C40 6.6 36 11 35.4 16.4c1-.4 2.2-.6 3.4-.6 5 0 8.8 3.6 8.8 8.8 0 5.4-4 9.4-9.6 9.4-7.4 0-12-6-12-14z" />
          </svg>

          <div>
            <p className="mb-2.5 text-[16px] leading-[1.6] text-navy">
              Chaque consultant est unique. C&apos;est pourquoi nous privilégions une relation de proximité,
              des conseils personnalisés et un accompagnement durable.
            </p>
            <p className="text-[16px] font-bold leading-[1.6] text-red">
              Notre réussite se mesure avant tout à celle des consultants que nous accompagnons.
            </p>
          </div>

          <div className="mx-auto h-px w-[60px] bg-red/25 lg:mx-0 lg:h-auto lg:w-px lg:self-stretch" />

          <svg
            className="mx-auto h-[90px] w-[90px] flex-shrink-0 lg:mx-0"
            viewBox="0 0 100 100"
            fill="none"
            stroke="#E8154F"
            strokeWidth="2.2"
          >
            <circle cx="78" cy="24" r="10" opacity="0.3" />
            <path d="M10 78L34 42l14 16 12-18 30 38z" />
            <path d="M50 40l6-10 4 6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
