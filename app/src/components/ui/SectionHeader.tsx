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

const TECNERA_ICON_PATH =
  "M282.009,1437.136c197.635,0,439.767-203.572,448.876-396.535v-70.045c0-196.181-248.29-407.691-449.731-407.691l-232.424-.094c-27.006,0-48.73-21.748-48.73-48.735V48.73C0,21.743,21.724,0,48.73,0h465.297c26.984,0,48.73,21.743,48.73,48.73v232.993c.321,211.82,236.572,436.597,440.943,436.597h241.725c13.535,0,25.766,5.575,34.618,14.548,9.109,8.85,14.861,21.104,14.861,34.706v465.495c0,27.15-21.895,48.61-48.623,48.61h-241.725c-204.371,0-440.622,224.777-440.943,436.597v232.993c0,26.987-21.746,48.73-48.73,48.73H49.585c-27.006,0-48.73-21.743-48.73-48.73v-465.305c0-26.987,21.724-48.735,48.73-48.735l232.424-.094Z";

export default function SectionHeader({
  tag = "",
  title,
  description,
  centered = false,
  dark = false,
  emphasize = false,
  icon = false,
  titleSizeClass,
  descriptionSizeClass,
  descriptionClassName,
}: SectionHeaderProps) {
  void tag;
  const emphasizeWidthRem = Math.max(6, Math.min(24, title.length * 0.24));

  const titleClass = `font-[family-name:var(--font-heading)] font-normal tracking-wide leading-snug ${
    titleSizeClass ?? "text-xl tablet:text-2xl laptop:text-3xl"
  } ${emphasize ? "[-webkit-text-stroke:1.5px_currentColor]" : ""} ${dark ? "text-white" : "text-neutral"} ${
    emphasize ? "[text-shadow:0_0_14px_rgba(249,250,248,1),0_0_8px_rgba(249,250,248,1),0_2px_4px_rgba(249,250,248,1)]" : ""
  }`;

  return (
    <header className={`mb-12 ${centered ? "text-center" : ""}`}>
      {icon ? (
        <div className="inline-flex items-center gap-6">
          <svg
            viewBox="0 0 1294.904 2000"
            className="h-10 tablet:h-12 w-auto flex-shrink-0 -translate-x-4"
            aria-hidden="true"
          >
            <path d={TECNERA_ICON_PATH} fill={dark ? "#ffffff" : "#1C1C1C"} />
          </svg>
          <div className="inline-block border-b-4 border-primary pb-0.5">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={titleClass}
            >
              {title}
            </motion.h2>
          </div>
        </div>
      ) : (
        <>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={titleClass}
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
        </>
      )}
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className={`mt-4 max-w-2xl leading-relaxed ${descriptionSizeClass ?? "text-base"} ${
            descriptionClassName ?? (dark ? "text-white/70" : "text-subtext")
          } ${centered ? "mx-auto" : ""} ${
            icon ? "[text-shadow:0_1px_2px_rgba(0,0,0,0.2)]" : ""
          }`}
        >
          {description}
        </motion.p>
      )}
    </header>
  );
}
