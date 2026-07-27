"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductRowProps {
  title: string;
  description: string;
  features: string[];
  logo: string;
  href?: string;
  ctaLabel?: string;
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

export default function ProductRow({
  title,
  description,
  features,
  logo,
  href,
  ctaLabel = "Descubrir más",
}: ProductRowProps) {
  const cardClass = "relative flex flex-col lg:flex-row overflow-hidden rounded-[2rem] bg-primary shadow-lg shadow-black/30 lg:h-[17.5rem]";

  const imageBoxClass =
    "flex items-center justify-center bg-white border-b lg:border-b-0 lg:border-r border-primary/10 p-3 lg:w-[30%] flex-shrink-0";

  const btnClass =
    "absolute bottom-5 right-5 lg:bottom-6 lg:right-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-primary hover:scale-[1.15] active:scale-100 transition-transform duration-[350ms] cursor-pointer w-fit";

  return (
    <div className="w-full lg:w-[96%] mx-auto">
      <div className={cardClass}>
        <div className={imageBoxClass}>
          <div className="relative aspect-[3/2] w-2/3">
            <Image
              src={logo}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center p-5 pb-16 lg:p-6 lg:pb-16">
          <h3 className="text-4xl font-extrabold text-white">{title}</h3>
          <p className="mt-2 text-lg font-semibold text-white/80 leading-relaxed">{description}</p>
          <ul className="mt-3 space-y-1">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-white">
                <CheckIcon className="h-4 w-4 flex-shrink-0 mt-0.5 text-white" />
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
    </div>
  );
}
