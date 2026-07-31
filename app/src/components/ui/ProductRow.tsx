"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

interface ProductRowProps {
  title: string;
  description: string;
  features: string[];
  logo: string;
  href?: string;
  ctaLabel?: string;
  tight?: boolean;
}

const ArrowIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function ProductRow({
  title,
  description,
  features,
  logo,
  href,
  ctaLabel = "Descubrir más",
  tight = false,
}: ProductRowProps) {
  const cardClass = "relative flex flex-col laptop:flex-row overflow-hidden rounded-[2rem] bg-primary shadow-lg shadow-black/30";

  const imageBoxClass =
    "flex items-center justify-center bg-white border-b laptop:border-b-0 laptop:border-r border-primary/10 p-3 laptop:w-[24%] flex-shrink-0";

  const btnClass =
    "mt-4 laptop:mt-0 laptop:absolute laptop:bottom-5 laptop:right-5 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-primary hover:scale-[1.15] active:scale-100 transition-transform duration-[350ms] cursor-pointer w-fit";

  return (
    <div className="w-full laptop:w-[80%] mx-auto">
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

        <div className={`flex flex-1 flex-col justify-center p-5 laptop:p-6 ${tight ? "laptop:pb-12" : "laptop:pb-14"}`}>
          <p className={`text-lg tablet:text-xl font-semibold text-white ${tight ? "leading-snug" : "leading-relaxed"}`}>{description}</p>
          <ul className={`${tight ? "mt-3 space-y-1" : "mt-4 space-y-1.5"}`}>
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5 text-base text-white">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5 text-white" />
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
