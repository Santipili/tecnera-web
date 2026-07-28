"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
  emphasize?: boolean;
  titleSizeClass?: string;
  descriptionSizeClass?: string;
}

export default function SectionHeader({
  tag = "",
  title,
  description,
  centered = false,
  dark = false,
  emphasize = false,
  titleSizeClass,
  descriptionSizeClass,
}: SectionHeaderProps) {
  void tag;
  const emphasizeWidthRem = Math.max(6, Math.min(24, title.length * 0.24));
  return (
    <header className={`mb-12 ${centered ? "text-center" : ""}`}>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`font-[family-name:var(--font-heading)] font-normal tracking-wide leading-snug ${
          titleSizeClass ?? "text-2xl tablet:text-3xl"
        } ${emphasize ? "[-webkit-text-stroke:1.5px_currentColor]" : ""} ${dark ? "text-white" : "text-neutral"} ${
          emphasize ? "[text-shadow:0_0_14px_rgba(249,250,248,1),0_0_8px_rgba(249,250,248,1),0_2px_4px_rgba(249,250,248,1)]" : ""
        }`}
      >
        {title}
      </motion.h2>
      <motion.span
        className={`block mt-2 ${emphasize ? "h-1 bg-primary" : "h-0.5 bg-secondary"}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          transformOrigin: centered ? "center" : "left",
          maxWidth: emphasize ? `${emphasizeWidthRem}rem` : centered ? "6rem" : "4rem",
          ...(centered ? { marginLeft: "auto", marginRight: "auto" } : {}),
        }}
      />
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className={`mt-4 max-w-2xl leading-relaxed ${descriptionSizeClass ?? "text-base"} ${
            dark ? "text-white/70" : "text-subtext"
          } ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}
    </header>
  );
}
