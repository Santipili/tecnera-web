"use client";

interface PrimaryCTAButtonProps {
  label?: string;
  source: string;
  variant?: "secondary" | "orange";
}

const variantClass = {
  secondary:
    "bg-secondary text-primary hover:bg-focus shadow-secondary/20",
  orange:
    "bg-orange text-white hover:bg-orange/90 shadow-orange/30",
};

export default function PrimaryCTAButton({
  label = "Agendar cita",
  source,
  variant = "secondary",
}: PrimaryCTAButtonProps) {
  const handleClick = () => {
    console.log({ action: "agendar_cita", source });
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold hover:scale-[1.03] active:scale-100 transition-all duration-200 cursor-pointer shadow-lg ${variantClass[variant]}`}
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
      {label}
    </button>
  );
}
