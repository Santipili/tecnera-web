"use client";
import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { faqs } from "@/data/faq";
import type { FAQItem } from "@/data/faq";

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-primary/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left cursor-pointer group"
      >
        <span className="text-sm font-bold text-neutral pr-4 group-hover:text-primary transition-colors">
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center bg-primary transition-all duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}>
        <p className="text-sm text-subtext leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-primary/15 bg-light px-4 py-3 text-sm text-neutral placeholder:text-subtext focus:border-primary focus:outline-none transition-colors";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log({ action: "contacto_form_submit", source: "faq", data });
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <section id="faq" className="relative py-24 transition-colors duration-300">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-6">
        <SectionHeader
          tag="Preguntas frecuentes"
          title="Puede que ya tengamos la respuesta"
          centered
          emphasize
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-primary/10 bg-white p-8 lg:p-10 shadow-lg shadow-black/30"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                item={faq}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-primary/10 bg-light p-8 lg:p-10 shadow-lg shadow-black/30"
          >
            <h3 className="text-xl font-extrabold text-neutral">Contanos tu proyecto</h3>
            <p className="mt-2 text-sm text-subtext leading-relaxed">
              Dejanos tus datos y te respondemos a la brevedad.
            </p>

            {submitted ? (
              <div className="mt-8 flex items-center gap-3 rounded-xl bg-secondary/10 px-4 py-4 text-sm font-bold text-primary">
                <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                ¡Gracias! Recibimos tu mensaje y te vamos a contactar pronto.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
                <input name="name" required placeholder="Nombre y apellido" className={inputClass} />
                <input name="email" type="email" required placeholder="Email" className={inputClass} />
                <input name="organization" placeholder="Organización" className={inputClass} />
                <textarea name="message" required rows={4} placeholder="Contanos sobre tu proyecto o consulta" className={inputClass} />
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-secondary hover:text-primary transition-colors cursor-pointer w-fit"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
