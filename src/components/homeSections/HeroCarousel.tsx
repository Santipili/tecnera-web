"use client";

import { useState, useEffect, useCallback } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import PrimaryCTAButton from "@/components/ui/PrimaryCTAButton";
import WhatsappCTAButton from "@/components/ui/WhatsappCTAButton";

interface Slide {
  tagline: string;
  title: string;
  subtitle: string;
  image: string;
}

const slides: Slide[] = [
  {
    tagline: "Soluciones digitales a medida",
    title: "Tu organizacion merece herramientas que funcionen",
    subtitle:
      "Diseñamos software que simplifica la gestion, mejora la comunicacion con tus socios y te permite enfocarte en lo que importa.",
    image: "/images/banners/banner-1.svg",
  },
  {
    tagline: "Producto Tecnera",
    title: "Tus socios, siempre conectados",
    subtitle:
      "Una app simple y moderna para que tus afiliados gestionen turnos, pagos y consultas desde su celular, sin depender de nadie.",
    image: "/images/banners/banner-2.svg",
  },
  {
    tagline: "Producto Tecnera",
    title: "Decisiones claras con informacion al instante",
    subtitle:
      "Nexo organiza tus datos, conecta tus sistemas y te muestra lo que necesitas saber, cuando lo necesitas. Sin complicaciones.",
    image: "/images/banners/banner-3.svg",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    }
  );

  const autoplay = useCallback(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  useEffect(() => {
    const cleanup = autoplay();
    return cleanup;
  }, [autoplay]);

  return (
    <section className="relative w-full overflow-hidden bg-primary">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, i) => (
          <div key={i} className="keen-slider__slide">
            <div className="relative min-h-[70vh] tablet:min-h-[80vh] flex items-center">
              {/* Background image */}
              <div className="absolute inset-0 -z-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 mx-auto max-w-7xl px-4 tablet:px-6 laptop:px-8 w-full">
                <div className="max-w-2xl">
                  <span className="inline-block rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary backdrop-blur-sm">
                    {slide.tagline}
                  </span>
                  <h1 className="mt-5 text-3xl tablet:text-4xl laptop:text-5xl desktop:text-6xl font-extrabold leading-[1.1] tracking-tight text-white">
                    {slide.title}
                  </h1>
                  <p className="mt-5 text-base tablet:text-lg text-white/75 max-w-xl leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <PrimaryCTAButton source={`hero_slide_${i + 1}`} />
                    <WhatsappCTAButton source={`hero_slide_${i + 1}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots navigation */}
      {loaded && instanceRef.current && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx
                  ? "bg-secondary w-9"
                  : "bg-white/30 w-2.5 hover:bg-white/50"
              }`}
              aria-label={`Ir al slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Arrow navigation - hidden on mobile */}
      {loaded && instanceRef.current && (
        <>
          <button
            onClick={() => instanceRef.current?.prev()}
            className="hidden tablet:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white transition-all duration-200 cursor-pointer backdrop-blur-sm border border-white/10 hover:border-white/25"
            aria-label="Slide anterior"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="hidden tablet:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 items-center justify-center text-white transition-all duration-200 cursor-pointer backdrop-blur-sm border border-white/10 hover:border-white/25"
            aria-label="Slide siguiente"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </section>
  );
}
