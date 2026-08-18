interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ eyebrow, title, sub, align = "left" }: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <div className={`mb-9 ${isCenter ? "text-center" : ""}`}>
      {eyebrow && (
        <div className="mb-3.5 text-[13px] font-bold uppercase tracking-[0.08em] text-accentStrong">
          {eyebrow}
        </div>
      )}
      <h2 className="text-[1.6rem] font-extrabold md:text-[2.1rem]">{title}</h2>
      {sub && (
        <p className={`mt-2 max-w-[420px] text-[15.5px] text-inkSoft ${isCenter ? "mx-auto" : ""}`}>
          {sub}
        </p>
      )}
    </div>
  );
}
