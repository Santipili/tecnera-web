interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
}

export default function SectionHeader({
  tag = '',
  title,
  description,
  centered = false,
  dark = false,
}: SectionHeaderProps) {
  return (
    <header className={`mb-12 ${centered ? "text-center" : ""}`}>
      {/* <span
        className={`inline-block text-xs font-bold uppercase tracking-widest mb-3 ${dark ? "text-secondary" : "text-secondary"
          }`}
      >
        {tag}
      </span> */}
      <h2
        className={`text-3xl tablet:text-4xl font-extrabold tracking-tight leading-tight ${dark ? "text-white" : "text-neutral"
          }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 max-w-2xl text-base leading-relaxed ${dark ? "text-white/70" : "text-subtext"
            } ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </header>
  );
}
