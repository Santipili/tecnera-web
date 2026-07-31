import type { ReactNode } from "react";

interface IconLinkCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export default function IconLinkCard({ icon, label, value, href, external }: IconLinkCardProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-4 rounded-2xl border border-primary/10 bg-white p-4 shadow-sm hover:border-secondary/40 hover:shadow-md transition-all duration-200"
    >
      <span className="flex-shrink-0 text-secondary [&>svg]:h-7 [&>svg]:w-7">{icon}</span>
      <span className="flex-1">
        <span className="block text-base font-bold text-neutral">{label}</span>
        <span className="block text-sm text-subtext">{value}</span>
      </span>
      <svg className="h-5 w-5 flex-shrink-0 text-neutral/30 group-hover:text-secondary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  );
}
