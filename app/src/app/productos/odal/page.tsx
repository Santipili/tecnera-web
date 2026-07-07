import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import PrimaryCTAButton from "@/components/ui/PrimaryCTAButton";
import WhatsappCTAButton from "@/components/ui/WhatsappCTAButton";
import { products } from "@/data/products";
import {
  CheckCircle2,
  Layers,
  SlidersHorizontal,
  Puzzle,
  Upload,
  ShieldCheck,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

const product = products.find((p) => p.slug === "odal")!;

export const metadata: Metadata = {
  title: "Odal | Tecnera",
  description: "ERP para empresas de servicios técnicos y mantenimiento que necesitan ordenar su operación diaria.",
};

const customizationCards = [
  {
    icon: Layers,
    title: "Planes con módulos definidos",
    desc: "Elegí entre distintos planes, cada uno con una cantidad y combinación de módulos y funcionalidades pensada para el tamaño de tu operación.",
  },
  {
    icon: SlidersHorizontal,
    title: "Planes a medida",
    desc: "Partí de un plan existente y sumale los módulos extra que necesites. Pagás solo por lo que tu empresa realmente usa.",
  },
  {
    icon: Puzzle,
    title: "Módulos a medida",
    desc: "Si tu operación tiene una necesidad puntual, desarrollamos un módulo exclusivo que se integra a tu plan y se adapta a tu forma de trabajar.",
  },
];

const relevantAreas: {
  icon: LucideIcon;
  title: string;
  desc: string;
  bullets: string[];
}[] = [
  {
    icon: Upload,
    title: "Migración de datos guiada",
    desc: "Empezá a usar Odal sin perder tu historial.",
    bullets: [
      "Plantillas de carga por cada entidad de la plataforma",
      "Carga masiva con validación antes de confirmar",
      "Acompañamiento durante todo el proceso de migración",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Permisos y accesos por usuario",
    desc: "Cada usuario ve solo lo que necesita ver.",
    bullets: [
      "Definí qué áreas de la plataforma puede usar cada persona",
      "Roles configurables por equipo o función",
      "Control total sobre la información sensible de la empresa",
    ],
  },
  {
    icon: BarChart3,
    title: "Reportes y analítica",
    desc: "Tomá decisiones con información real y actualizada.",
    bullets: [
      "Indicadores del estado de tu operación en tiempo real",
      "Análisis por cliente, equipo, edificio o técnico",
      "Exportá la información que necesites cuando la necesites",
    ],
  },
];

const pricingPlans = [
  {
    name: "Esencial",
    desc: "Para equipos que están empezando a ordenar su operación diaria.",
    features: ["Reclamos y órdenes de trabajo", "Clientes y edificios", "Presupuestos básicos"],
  },
  {
    name: "Profesional",
    desc: "Para empresas con equipos de trabajo y operación en crecimiento.",
    features: ["Todo lo del plan Esencial", "Inspecciones y seguimiento", "Reportes y analítica"],
    highlighted: true,
  },
  {
    name: "Empresarial",
    desc: "Para operaciones grandes que necesitan control y módulos a medida.",
    features: ["Todo lo del plan Profesional", "Permisos avanzados por usuario", "Módulos a medida"],
  },
];

function PlaceholderScreenshot({
  icon: Icon,
  label,
  className = "",
}: {
  icon: LucideIcon;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent border-2 border-dashed border-primary/15 rounded-xl ${className}`}
    >
      <Icon className="w-10 h-10 text-primary/30" />
      <span className="text-xs font-semibold text-primary/40 uppercase tracking-widest text-center px-4">
        {label}
      </span>
    </div>
  );
}

export default function OdalPage() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-12 bg-gradient-to-br from-[#0095C7] via-[#005647] to-primary text-white">
          <div className="max-w-7xl mx-auto px-4 tablet:px-6 laptop:px-8">
            <div className="grid laptop:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] gap-12 items-center">
              {/* Logo */}
              <div className="flex justify-center laptop:justify-start translate-y-2 laptop:-translate-x-24">
                <div className="relative w-[30rem] h-[30rem] laptop:w-[39rem] laptop:h-[39rem] flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl" />
                  <Image
                    src={product.logo}
                    alt={product.title}
                    width={490}
                    height={490}
                    className="relative object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Card */}
              <div className="ml-auto w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 laptop:p-6 shadow-2xl">
                <p className="text-white text-lg leading-relaxed mb-6">
                  Odal centraliza reclamos, órdenes de trabajo, presupuestos e inspecciones en una sola
                  plataforma pensada para empresas de mantenimiento y servicios técnicos. Ordená tu operación
                  diaria y tomá decisiones con información real, actualizada y disponible en el momento en
                  que la necesitás.
                </p>
                <div className="flex flex-wrap gap-4">
                  <PrimaryCTAButton source="odal_hero" label="Solicitar demo" />
                  <WhatsappCTAButton source="odal_hero" label="Contratar el servicio" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard */}
        <section className="py-24 bg-light">
          <div className="max-w-6xl mx-auto px-4 tablet:px-6 laptop:px-8">
            <h2 className="text-3xl font-extrabold text-neutral text-center mb-3">
              Así se ve Odal por dentro
            </h2>
            <p className="text-subtext text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              Un panel de inicio pensado para que veas de un vistazo el estado de tu operación apenas
              iniciás sesión.
            </p>
            <div className="rounded-2xl border border-neutral-100 bg-white shadow-xl overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-neutral-100 bg-[#F4F4F4]">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <PlaceholderScreenshot
                icon={BarChart3}
                label="Captura del dashboard de inicio"
                className="h-80 laptop:h-[26rem] rounded-none border-none"
              />
            </div>
          </div>
        </section>

        {/* Customización */}
        <section className="py-24 bg-[#EAEAEA]">
          <div className="max-w-7xl mx-auto px-4 tablet:px-6 laptop:px-8">
            <h2 className="text-3xl font-extrabold text-neutral text-center mb-3">
              Customización de la plataforma
            </h2>
            <p className="text-subtext text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              Odal se adapta a tu empresa, no al revés. Elegí el nivel de personalización que necesitás.
            </p>
            <div className="grid tablet:grid-cols-3 gap-6">
              {customizationCards.map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0095C7] to-secondary rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral mb-2">{title}</h3>
                  <p className="text-subtext text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Áreas relevantes */}
        <section className="py-24 bg-light">
          <div className="max-w-[88rem] mx-auto px-4 tablet:px-6 laptop:px-8">
            <h2 className="text-3xl font-extrabold text-neutral text-center mb-16">
              Áreas relevantes
            </h2>
            <div className="flex flex-col gap-16">
              {relevantAreas.map(({ icon: Icon, title, desc, bullets }, i) => {
                const screenshot = (
                  <PlaceholderScreenshot
                    icon={Icon}
                    label={title}
                    className="shrink-0 aspect-video h-[30rem] laptop:h-[35rem]"
                  />
                );
                const card = (
                  <div className="flex-1 min-w-[20rem] min-h-[24rem] laptop:min-h-[28rem] bg-white rounded-2xl p-8 shadow-sm flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-neutral mb-2">{title}</h3>
                    <p className="text-subtext mb-5">{desc}</p>
                    <ul className="space-y-3">
                      {bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-3 text-neutral text-sm font-medium">
                          <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
                return (
                  <div
                    key={i}
                    className={`flex gap-14 items-center ${i === 1 ? "flex-row-reverse" : ""}`}
                  >
                    {screenshot}
                    {card}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-24 bg-[#EAEAEA]">
          <div className="max-w-6xl mx-auto px-4 tablet:px-6 laptop:px-8">
            <h2 className="text-3xl font-extrabold text-neutral text-center mb-3">
              Planes y precios
            </h2>
            <p className="text-subtext text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              Elegí el plan que se ajuste al tamaño y las necesidades de tu empresa.
            </p>
            <div className="grid tablet:grid-cols-3 gap-6 items-start">
              {pricingPlans.map(({ name, desc, features, highlighted }, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-8 flex flex-col h-full ${
                    highlighted
                      ? "bg-primary text-white shadow-2xl tablet:-translate-y-4"
                      : "bg-white shadow-sm"
                  }`}
                >
                  {highlighted && (
                    <span className="inline-block self-start rounded-full bg-secondary/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-secondary mb-4">
                      Recomendado
                    </span>
                  )}
                  <h3 className={`text-xl font-bold mb-2 ${highlighted ? "text-white" : "text-neutral"}`}>
                    {name}
                  </h3>
                  <p className={`text-sm mb-6 leading-relaxed ${highlighted ? "text-white/80" : "text-subtext"}`}>
                    {desc}
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {features.map((feature, j) => (
                      <li
                        key={j}
                        className={`flex items-start gap-3 text-sm font-medium ${
                          highlighted ? "text-white" : "text-neutral"
                        }`}
                      >
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full rounded-full py-3 text-sm font-bold border-2 border-secondary text-primary bg-white hover:bg-secondary/10 transition-colors cursor-pointer">
                    Consultar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
