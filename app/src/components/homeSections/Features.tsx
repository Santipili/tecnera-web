"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { features, type FeatureAccent } from "@/data/features";

const accentClasses: Record<FeatureAccent, { box: string; icon: string }> = {
  primary: { box: "bg-neutral", icon: "text-white" },
  muted: { box: "bg-red-800/80", icon: "text-white" },
  amber: { box: "bg-amber-500", icon: "text-white" },
  blue: { box: "bg-link", icon: "text-white" },
};

export default function Features() {
  return (
    <section className="relative py-24 transition-colors duration-300">
      <div className="mx-auto max-w-[105rem] px-4 sm:px-6 lg:px-6">
        <SectionHeader
          tag="Beneficios"
          title="Todo lo que necesitás en un solo lugar"
          centered
          emphasize
          icon
        />

        <div className="grid grid-cols-1 tablet:grid-cols-2 lg:grid-cols-4 gap-4">
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
