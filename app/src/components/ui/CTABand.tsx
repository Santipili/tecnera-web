"use client";
import { motion } from "framer-motion";
import PrimaryCTAButton from "@/components/ui/PrimaryCTAButton";
import WhatsappCTAButton from "@/components/ui/WhatsappCTAButton";

interface CTABandProps {
  title: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  showWhatsapp?: boolean;
}

export default function CTABand({
  title,
  description,
  primaryHref = "/contacto",
  primaryLabel = "Hablemos de tu idea",
  showWhatsapp = true,
}: CTABandProps) {
  return (
    <section className="px-4 py-20 tablet:px-6 laptop:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="mx-auto flex max-w-3xl flex-col items-center rounded-3xl border border-gray-100 bg-gray-50 px-8 py-16 text-center"
      >
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground tablet:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-500">{description}</p>
        )}
        <div className="mt-8 flex flex-col items-center gap-3 tablet:flex-row">
          <PrimaryCTAButton href={primaryHref} label={primaryLabel} />
          {showWhatsapp && <WhatsappCTAButton />}
        </div>
      </motion.div>
    </section>
  );
}
