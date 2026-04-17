"use client";
import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from "framer-motion";
import { faqs } from "@/data/faq";
import type { FAQItem } from "@/data/faq";

//TODO: Reemplazar por el accordeon deseado
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
    <div className={`border-b border-primary/10 transition-colors duration-200 ${isOpen ? "bg-white" : ""}`}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 px-2 text-left cursor-pointer group"
      >
        <span className="text-base font-bold text-neutral pr-4 group-hover:text-primary transition-colors">
          {item.question}
        </span>
        <span className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-secondary/15 rotate-180" : "bg-primary/5 group-hover:bg-primary/10"}`}>
          <svg
            className="h-4 w-4 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
      >
        <p className="text-sm text-subtext leading-relaxed px-2">{item.answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // <section id="faq" className="py-24 bg-light">
    <section id="faq" className="py-20 bg-white dark:bg-dark relative overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-3xl px-4 tablet:px-6 laptop:px-8">
        <SectionHeader
          tag="Preguntas frecuentes"
          title="Puede que ya tengamos la respuesta"
          description="Las dudas mas comunes que recibimos de organizaciones como la tuya."
          centered
        />
        {/* <div className="rounded-2xl border border-primary/10 overflow-hidden">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div> */}

        {/* Otro modelo de accordeon, TODO: reemplazar por el deseado */}

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#EAEAEA] to-white dark:from-card-bg dark:to-[#0d2420] rounded-xl shadow-lg overflow-hidden border-l-4 border-[#00A478] hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/50 transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl text-[#005647] dark:text-secondary pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-8 h-8 bg-[#005647] rounded-full flex items-center justify-center">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 pt-0">
                  <p className="text-[#3A3A3A] dark:text-white/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-[#005647] to-[#00A478] rounded-2xl p-8 text-white">
          <h3 className="text-2xl mb-4">
            ¿Tienes más preguntas?
          </h3>
          <p className="text-gray-100 mb-6">
            Estamos aquí para ayudarte. Agenda una reunión o contáctanos por WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5492235254045?text=Hola,%20vengo%20desde%20la%20web%20de%20Tecnera,%20necesitaría%20más%20información%20sobre%20el%20producto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#005647] px-8 py-3 rounded-lg hover:bg-[#00DBA0] transition-colors duration-300"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
