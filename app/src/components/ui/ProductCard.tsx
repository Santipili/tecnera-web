"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  kicker?: string;
  description: string;
  features: string[];
  image: string;
  href?: string;
  ctaLabel?: string;
  variant?: "default" | "custom";
}

const ArrowIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const CheckIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function ProductCard({
  title,
  kicker,
  description,
  features,
  image,
  href,
  ctaLabel = "Descubrir mas",
  variant = "default",
}: ProductCardProps) {
  const isCustom = variant === "custom";

  const cardClass = isCustom
    ? "group h-full flex flex-col rounded-2xl border-2 border-dashed border-orange/40 bg-orange/5 overflow-hidden hover:border-orange/60 hover:shadow-xl transition-all duration-300"
    : "group h-full flex flex-col rounded-2xl border border-primary/10 bg-white overflow-hidden hover:border-secondary/40 hover:shadow-xl transition-all duration-300";

  const btnClass = isCustom
    ? "mt-auto pt-7 inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3.5 text-sm font-semibold text-white hover:bg-orange/90 transition-colors cursor-pointer w-full"
    : "mt-auto pt-7 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white hover:bg-secondary hover:text-primary transition-colors cursor-pointer w-full";

  return (
    <div className={cardClass}>
      <div className="relative h-52 w-full flex-shrink-0 bg-gradient-to-br from-primary/5 to-secondary/5">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-7 flex flex-col flex-1">
        {kicker && (
          <span className={`text-xs font-bold uppercase tracking-widest ${isCustom ? "text-orange" : "text-secondary"}`}>
            {kicker}
          </span>
        )}
        <h3 className="mt-1 text-xl font-extrabold text-neutral">{title}</h3>
        <p className="mt-2 text-sm text-subtext leading-relaxed">{description}</p>
        <ul className="mt-5 space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-neutral">
              <CheckIcon className={`h-5 w-5 flex-shrink-0 mt-0.5 ${isCustom ? "text-orange" : "text-secondary"}`} />
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
        {href ? (
          <Link href={href} className={btnClass}>
            {ctaLabel} <ArrowIcon />
          </Link>
        ) : (
          <button onClick={() => console.log({ action: "conocer_mas", source: title })} className={btnClass}>
            {ctaLabel} <ArrowIcon />
          </button>
        )}
      </div>
    </div>
  );
}
