import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import SectionHeader from "@/components/ui/SectionHeader";
import PrimaryCTAButton from "@/components/ui/PrimaryCTAButton";
import NeuralNetworkBackground from "@/components/ui/NeuralNetworkBackground";
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
  image: string;
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
    image: "/products/ODAL/imagenes-app/data-import.png",
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
    image: "/products/ODAL/imagenes-app/permits.png",
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
    image: "/products/ODAL/imagenes-app/reports.png",
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

export default function OdalPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-light py-3">
          <div className="absolute inset-0 z-0 opacity-65">
            <NeuralNetworkBackground className="h-full w-full" color="28, 28, 28" nodeCount={260} />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 tablet:px-6 laptop:px-8">
            <div className="grid laptop:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] gap-12 items-center">
              {/* Logo */}
              <div className="flex justify-center laptop:justify-start translate-y-2 laptop:-translate-x-24">
                <div className="relative flex-shrink-0 w-[18rem] h-[20rem] laptop:w-[23rem] laptop:h-[26rem]">
                  <Image
                    src={product.logo}
                    alt={product.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="ml-auto w-full max-w-2xl">
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 laptop:p-6 mb-6">
                  <p className="text-neutral text-xl font-bold leading-relaxed mb-4">
                    Odal centraliza reclamos, órdenes de trabajo, presupuestos e inspecciones en una sola
                    plataforma pensada para empresas de mantenimiento y servicios técnicos.
                  </p>
                  <p className="text-neutral text-xl font-bold leading-relaxed">
                    Ordená tu operación diaria y tomá decisiones con información real, actualizada y disponible
                    en el momento en que la necesitás.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <PrimaryCTAButton source="odal_hero" variant="primary" label="Solicitar demo" />
                  <Link
                    href="#precios"
                    className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 text-sm font-bold shadow-lg shadow-black/20 hover:bg-secondary transition-colors duration-200"
                  >
                    Ver precios
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard */}
        <section className="py-24 bg-light">
          <div className="max-w-6xl mx-auto px-4 tablet:px-6 laptop:px-8">
            <SectionHeader
              tag="Odal"
              title="Así se ve Odal por dentro"
              description="Un panel de inicio pensado para que veas de un vistazo el estado de tu operación apenas iniciás sesión."
              centered
              emphasize
              titleSizeClass="text-4xl tablet:text-5xl"
              descriptionSizeClass="text-xl"
            />
            <div className="rounded-2xl border border-neutral-100 bg-white shadow-xl overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-neutral-100 bg-[#F4F4F4]">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="relative w-full aspect-[1809/890]">
                <Image
                  src="/products/ODAL/imagenes-app/dashboard.png"
                  alt="Captura del dashboard de inicio"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Customización */}
        <section className="py-24 bg-[#EAEAEA]">
          <div className="max-w-7xl mx-auto px-4 tablet:px-6 laptop:px-8">
            <SectionHeader
              tag="Odal"
              title="Customización de la plataforma"
              description="Odal se adapta a tu empresa, no al revés. Elegí el nivel de personalización que necesitás."
              centered
              emphasize
              titleSizeClass="text-4xl tablet:text-5xl"
              descriptionSizeClass="text-xl"
            />
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
            <SectionHeader
              tag="Odal"
              title="Áreas relevantes"
              centered
              emphasize
              titleSizeClass="text-4xl tablet:text-5xl"
              descriptionSizeClass="text-xl"
            />
            <div className="flex flex-col gap-16">
              {relevantAreas.map(({ title, desc, bullets, image }, i) => {
                const screenshot = (
                  <div className="relative flex-[2] min-w-[20rem] laptop:min-w-[62rem] aspect-[1825/888] rounded-xl overflow-hidden border border-neutral-100 shadow-sm">
                    <Image src={image} alt={title} fill className="object-cover" />
                  </div>
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
        <section id="precios" className="py-24 bg-[#EAEAEA]">
          <div className="max-w-6xl mx-auto px-4 tablet:px-6 laptop:px-8">
            <SectionHeader
              tag="Odal"
              title="Planes y precios"
              description="Elegí el plan que se ajuste al tamaño y las necesidades de tu empresa."
              centered
              emphasize
              titleSizeClass="text-4xl tablet:text-5xl"
              descriptionSizeClass="text-xl"
            />
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
