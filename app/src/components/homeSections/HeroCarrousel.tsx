"use client";

import { useState, useEffect, useCallback } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import PrimaryCTAButton from "@/components/ui/PrimaryCTAButton";
import WhatsappCTAButton from "@/components/ui/WhatsappCTAButton";
import { heroSlides } from "@/data/heroSlides";

export default function HeroCarrousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

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

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 80]);

  return (
    <section className="relative w-full overflow-hidden bg-primary">
      <div ref={sliderRef} className="keen-slider">
        {heroSlides.map((slide, i) => (
          <div key={i} className="keen-slider__slide">
            <div className="relative min-h-[70vh] tablet:min-h-[80vh] flex items-center">

              {/* Parallax background */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute -top-20 -bottom-20 left-0 right-0"
                  style={{ y: bgY }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                </motion.div>
              </div>

              {/* Animated text content */}
              <div className="relative z-10 mx-auto max-w-7xl px-4 tablet:px-6 laptop:px-8 w-full">
                <motion.div
                  className="max-w-2xl"
                  initial={{ opacity: 0, x: -40 }}
                  animate={currentSlide === i ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <span className="inline-block rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary backdrop-blur-sm">
                    {slide.tagline}
                  </span>
                  <h1 className="mt-5 text-2xl tablet:text-3xl laptop:text-5xl desktop:text-6xl font-extrabold leading-[1.1] tracking-tight text-white">
                    {slide.title}
                  </h1>
                  <p className="mt-5 text-base tablet:text-lg text-white/75 max-w-xl leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <PrimaryCTAButton source={`hero_slide_${i + 1}`} />
                    <WhatsappCTAButton source={`hero_slide_${i + 1}`} />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      {loaded && instanceRef.current && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === idx ? "bg-secondary w-9" : "bg-white/30 w-2.5 hover:bg-white/50"
              }`}
              aria-label={`Ir al slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Arrows */}
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
