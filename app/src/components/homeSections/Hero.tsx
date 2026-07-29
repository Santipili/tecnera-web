"use client";

import { motion } from "framer-motion";
import PrimaryCTAButton from "@/components/ui/PrimaryCTAButton";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden transition-colors duration-300">
      <div className="relative mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-6 pt-24 pb-20 lg:pt-32 lg:pb-28 flex flex-col items-center text-center min-h-[35rem] tablet:min-h-[38.75rem] laptop:min-h-[43.75rem] justify-center">
        <motion.h1
          className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,5.2vw,4.5rem)] font-normal leading-[1.2] tracking-wide text-neutral laptop:whitespace-nowrap [-webkit-text-stroke:3px_currentColor] [text-shadow:0_0_14px_rgba(249,250,248,1),0_0_8px_rgba(249,250,248,1),0_2px_4px_rgba(249,250,248,1)]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          El salto tecnológico que tu empresa necesita
        </motion.h1>

        <motion.p
          className="mt-8 max-w-4xl text-lg tablet:text-xl font-bold text-neutral leading-relaxed [text-shadow:0_0_14px_rgba(249,250,248,1),0_0_8px_rgba(249,250,248,1),0_2px_4px_rgba(249,250,248,1)]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          Dejá atrás Excel, WhatsApp y procesos manuales. Mannaz y Odal ordenan tu operación
          desde el primer día, y si tu caso es distinto, lo construimos a medida.
        </motion.p>

        <motion.div
          className="mt-9"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <PrimaryCTAButton source="hero" variant="primary" label="Contacto" size="lg" />
        </motion.div>
      </div>
    </section>
  );
}
