"use client";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
}

export default function SectionHeader({
  tag = "",
  title,
  description,
  centered = false,
  dark = false,
}: SectionHeaderProps) {
  void tag;
  return (
    <header className={`mb-12 ${centered ? "text-center" : ""}`}>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className={`text-3xl tablet:text-4xl font-extrabold tracking-tight leading-tight ${
          dark ? "text-white" : "text-neutral"
        }`}
      >
        {title}
      </motion.h2>
      <motion.span
        className="block h-0.5 bg-secondary mt-2"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          transformOrigin: centered ? "center" : "left",
          maxWidth: centered ? "6rem" : "4rem",
          ...(centered ? { marginLeft: "auto", marginRight: "auto" } : {}),
        }}
      />
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className={`mt-4 max-w-2xl text-base leading-relaxed ${
            dark ? "text-white/70" : "text-subtext"
          } ${centered ? "mx-auto" : ""}`}
        >
          {description}
        </motion.p>
      )}
    </header>
  );
}
