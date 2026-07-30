"use client";
import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { motion } from "framer-motion";
import { faqCategories } from "@/data/faq";
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

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleSelectCategory = (id: string) => {
    setActiveCategory(id);
    setOpenIndex(0);
  };

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const category = faqCategories.find((c) => c.id === activeCategory) ?? faqCategories[0];

  return (
    <section id="faq" className="relative py-24 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-6">
        <SectionHeader
          tag="Preguntas frecuentes"
          title="Puede que ya tengamos la respuesta"
          centered
          emphasize
          icon
        />

        <div className="grid tablet:grid-cols-[16rem_1fr] gap-6 items-start">
          <nav className="flex tablet:flex-col gap-2 overflow-x-auto tablet:overflow-visible pb-2 tablet:pb-0">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleSelectCategory(cat.id)}
                className={`flex-shrink-0 tablet:w-full text-left rounded-xl px-5 py-3.5 text-sm font-bold transition-colors duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-lg shadow-black/20"
                    : "bg-white text-neutral border border-primary/10 hover:border-secondary/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>

          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-[2rem] border border-primary/10 bg-white p-8 lg:p-10 shadow-lg shadow-black/30"
          >
            {category.items.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                item={faq}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
