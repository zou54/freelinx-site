export default function SectionHeader({
  pill,
  title,
  description,
}: {
  pill: string;
  title: string;
  description: React.ReactNode;
}) {
  return (
    <div className="mx-auto mb-[50px] max-w-[640px] text-center">
      <span className="mb-5 inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-red bg-white px-[18px] py-[7px] text-[12.5px] font-bold tracking-[0.6px] text-red">
        {pill}
      </span>
      <h2 className="mb-3.5 text-[32px] font-bold tracking-[-0.3px] text-navy">{title}</h2>
      <div className="mx-auto mb-[18px] h-[3px] w-[46px] rounded-full bg-red" />
      <p className="text-[15.5px] leading-[1.6] text-gray-text">{description}</p>
    </div>
  );
}
