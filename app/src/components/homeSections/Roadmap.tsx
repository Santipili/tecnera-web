"use client";
import { Suspense } from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ui/ContactForm";

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 transition-colors duration-300">
      <div className="mx-auto max-w-[68rem] px-4 tablet:px-6 laptop:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-10%" }}
        >
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
}
