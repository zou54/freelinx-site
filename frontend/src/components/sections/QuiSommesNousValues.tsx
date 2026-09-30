const VALUES = [
  {
    title: "Exigence",
    description: "Un haut niveau de qualité dans chaque échange.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#E8154F" strokeWidth="1.7">
        <circle cx="12" cy="8" r="5" />
        <path d="M8.5 12.5L7 21l5-2.5 5 2.5-1.5-8.5" />
      </svg>
    ),
  },
  {
    title: "Transparence",
    description: "Des informations claires, une rémunération lisible et aucun frais caché.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#E8154F" strokeWidth="1.7">
        <path d="M7 3h7l4 4v14a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
        <path d="M9 10h6M9 13h6" />
        <circle cx="10.5" cy="16.5" r="2.2" />
        <path d="M12.2 18.2L14 20" />
      </svg>
    ),
  },
  {
    title: "Proximité",
    description: "Un interlocuteur dédié, disponible et à votre écoute.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#E8154F" strokeWidth="1.7">
        <path d="M8 12a3.2 3.2 0 100-6.4A3.2 3.2 0 008 12z" />
        <path d="M2.8 18c0-2.9 2.3-5 5.2-5s5.2 2.1 5.2 5" />
        <path d="M16 4.3a3.2 3.2 0 010 6.1M18.4 13.3c2 .5 3.5 2.1 3.8 4.4" />
      </svg>
    ),
  },
  {
    title: "Engagement",
    description: "Un accompagnement durable pour soutenir votre croissance.",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#E8154F" strokeWidth="1.7">
        <path d="M3 11l4.5-4h3L14 10" />
        <path d="M21 11l-4.5-4h-2.7" />
        <path d="M3 11v5l3 3h2.2" />
        <path d="M21 11v5l-3 3h-2" />
        <path d="M8.2 19l2.8-2.8a1.6 1.6 0 012.2 0l.3.3a1.6 1.6 0 002.2 0l2.3-2.3" />
        <path d="M10.5 15.8L9 14.3a1.5 1.5 0 00-2.1 0" />
      </svg>
    ),
  },
];

export default function QuiSommesNousValues() {
  return (
    <section className="mx-auto max-w-[1120px] px-6 py-[52px] sm:px-14">
      <div className="mb-9 text-center">
        <h2 className="mb-3.5 text-[26px] font-bold text-navy">Nos valeurs</h2>
        <div className="mx-auto h-[3px] w-11 rounded-full bg-red" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map((v) => (
          <div
            key={v.title}
            className="flex flex-col rounded-[18px] border border-[#F0DCE2] bg-white px-[22px] py-8 text-center shadow-[0_20px_44px_-32px_rgba(11,15,43,0.18)]"
          >
            <div className="mx-auto mb-[18px] flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-full bg-pink-pale">
              {v.icon}
            </div>
            <h4 className="mb-2 text-[15px] font-extrabold text-navy">{v.title}</h4>
            <p className="mb-4 flex-1 text-[12.5px] leading-[1.6] text-gray-text">{v.description}</p>
            <div className="mx-auto h-[3px] w-[26px] rounded-full bg-red" />
          </div>
        ))}
      </div>
    </section>
  );
}
