"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
  emphasize?: boolean;
  icon?: boolean;
  titleSizeClass?: string;
  descriptionSizeClass?: string;
  descriptionClassName?: string;
}

export default function SectionHeader({
  tag = "",
  title,
  description,
  centered = false,
  emphasize = false,
  titleSizeClass,
  descriptionSizeClass,
  descriptionClassName,
}: SectionHeaderProps) {
  void tag;

  const titleClass = `font-[family-name:var(--font-heading)] font-normal tracking-wide leading-snug text-neutral ${
    titleSizeClass ?? "text-xl tablet:text-2xl laptop:text-3xl"
  } ${emphasize ? "[-webkit-text-stroke:1.5px_currentColor]" : ""}`;

  return (
    <header className={`mb-12 ${centered ? "text-center" : ""}`}>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={titleClass}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className={`mt-4 max-w-2xl leading-relaxed text-neutral ${descriptionSizeClass ?? "text-base"} ${
            descriptionClassName ?? ""
          } ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}
    </header>
  );
}
