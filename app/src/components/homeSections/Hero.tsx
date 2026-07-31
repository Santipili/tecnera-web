"use client";

import { motion } from "framer-motion";
import { features, type FeatureAccent } from "@/data/features";

const accentClasses: Record<FeatureAccent, { box: string; icon: string }> = {
  primary: { box: "bg-primary", icon: "text-white" },
  muted: { box: "bg-primary", icon: "text-white" },
  amber: { box: "bg-primary", icon: "text-white" },
  blue: { box: "bg-primary", icon: "text-white" },
};

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden transition-colors duration-300">
      <div className="relative mx-auto max-w-[90rem] px-4 tablet:px-6 laptop:px-6 pt-10 pb-12 tablet:pt-16 tablet:pb-20 laptop:pt-24 laptop:pb-28 flex flex-col items-center text-center tablet:min-h-[38.75rem] laptop:min-h-[43.75rem] justify-center">
        <motion.h1
          className="font-[family-name:var(--font-heading)] text-[clamp(1.75rem,5.2vw,4.5rem)] font-normal leading-[1.2] tracking-wide text-neutral text-balance [-webkit-text-stroke:3px_currentColor] [text-shadow:0_0_14px_rgba(249,250,248,1),0_0_8px_rgba(249,250,248,1),0_2px_4px_rgba(249,250,248,1)]"
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

        <div className="mt-14 grid w-full max-w-[90rem] grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-4 text-left">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const accent = accentClasses[feature.accent];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-10%" }}
                className="rounded-[2rem] border border-primary/10 bg-white px-8 py-6 shadow-lg shadow-black/30 hover:border-secondary/40 transition-all duration-300"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${accent.box}`}>
                  <Icon className={`h-6 w-6 ${accent.icon}`} strokeWidth={2} />
                </div>
                <h3 className="mt-6 text-lg tablet:text-xl font-extrabold text-neutral">{feature.title}</h3>
                <p className="mt-3 text-base text-subtext leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
