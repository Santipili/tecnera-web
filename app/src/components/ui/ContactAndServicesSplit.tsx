"use client";
import Link from "next/link";
import { ArrowRight, Smartphone, LayoutDashboard, Workflow, Plug } from "lucide-react";
import ContactFormCard from "@/components/ui/ContactFormCard";

const serviceHighlights = [
  { icon: Smartphone, label: "Apps móviles" },
  { icon: LayoutDashboard, label: "Dashboards" },
  { icon: Workflow, label: "Automatizaciones" },
  { icon: Plug, label: "Integraciones" },
];

export default function ContactAndServicesSplit() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <ContactFormCard source="custom_dev" />

      <Link
        href="/servicios"
        className="group flex flex-col rounded-[2rem] bg-primary p-8 laptop:p-10 shadow-lg shadow-black/10 text-white hover:shadow-xl transition-all duration-300"
      >
        <h3 className="text-2xl laptop:text-3xl font-extrabold leading-tight">
          ¿Todavía no sabés qué necesitás?
        </h3>
        <p className="mt-3 text-white/80 leading-relaxed">
          Conocé todo lo que podemos hacer por tu organización, más allá de un desarrollo a medida.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {serviceHighlights.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2.5 rounded-xl bg-white/10 px-3.5 py-3 text-sm font-semibold"
            >
              <Icon className="h-4 w-4 flex-shrink-0 text-secondary" />
              {label}
            </div>
          ))}
        </div>

        <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-primary group-hover:scale-[1.05] transition-transform duration-200">
          Ver servicios <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </div>
  );
}
