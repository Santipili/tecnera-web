"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/data/services";

const accentClasses = {
  purple: { bg: "bg-accent-purple/15", text: "text-accent-purple" },
  orange: { bg: "bg-accent-orange/15", text: "text-accent-orange" },
  pink: { bg: "bg-accent-pink/15", text: "text-accent-pink" },
};

export default function Services() {
  return (
    <section className="px-4 py-24 tablet:px-6 laptop:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          tag="Servicios"
          title="Construimos el software que tu idea necesita"
          description="Desarrollo a medida para web, mobile y desktop, con el mismo cuidado en cada detalle."
        />
        <div className="grid grid-cols-1 gap-6 tablet:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            const c = accentClasses[service.accent];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-gray-100 bg-white p-7 shadow-soft-sm transition-shadow duration-300 hover:shadow-soft-md"
              >
                <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${c.bg}`}>
                  <Icon className={`h-5 w-5 ${c.text}`} strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
