"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import WhatsappCTAButton from "@/components/ui/WhatsappCTAButton";
import { customDev } from "@/data/customDev";

export default function CustomDev() {
  return (
    <section className="py-24 bg-white transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 tablet:px-6 laptop:px-8">
        <div className="grid laptop:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              tag="Desarrollo a medida"
              title={customDev.title}
              description={customDev.description}
            />
            <div className="flex flex-wrap gap-3 mb-8">
              {customDev.features.map((feature) => (
                <span
                  key={feature}
                  className="bg-[#EAEAEA] px-4 py-2 rounded-full text-sm text-neutral"
                >
                  {feature}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href={customDev.ctaHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-secondary hover:text-primary transition-colors duration-200"
              >
                Ver desarrollo personalizado
              </Link>
              <WhatsappCTAButton source="custom_dev_home" label="Contanos tu proyecto" />
            </div>
          </div>
          <motion.div
            className="relative h-72 laptop:h-96 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image src={customDev.image} alt={customDev.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
