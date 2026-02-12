"use client";

import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
}

export default function ProductCard({
  title,
  description,
  features,
  image,
}: ProductCardProps) {
  const handleClick = () => {
    console.log({ action: "conocer_mas", source: title });
  };

  return (
    <div className="group rounded-2xl border border-primary/10 bg-white overflow-hidden hover:border-secondary/40 hover:shadow-xl transition-all duration-300">
      <div className="relative h-52 w-full bg-gradient-to-br from-primary/5 to-secondary/5">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-7">
        <h3 className="text-xl font-extrabold text-neutral">{title}</h3>
        <p className="mt-2 text-sm text-subtext leading-relaxed">{description}</p>
        <ul className="mt-5 space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-neutral">
              <svg
                className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
        <button
          onClick={handleClick}
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white hover:bg-secondary hover:text-primary transition-colors cursor-pointer w-full"
        >
          Descubrir mas
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
