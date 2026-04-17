"use client";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const handleClick = () => {
    console.log({ action: "service_click", source: title });
  };

  return (
    <div className="group rounded-2xl p-6 border border-primary/10 bg-white hover:border-secondary/40 hover:shadow-lg transition-all duration-300">
      <div className="h-12 w-12 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 flex items-center justify-center text-secondary mb-5 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-bold text-neutral text-lg">{title}</h3>
      <p className="mt-2 text-sm text-subtext leading-relaxed">{description}</p>
      <button
        onClick={handleClick}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-secondary transition-colors cursor-pointer group/btn"
      >
        Saber mas
        <svg className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
