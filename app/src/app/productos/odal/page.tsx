import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import SectionHeader from "@/components/ui/SectionHeader";
import PrimaryCTAButton from "@/components/ui/PrimaryCTAButton";
import PricingTierSelector from "@/components/ui/PricingTierSelector";
import NeuralNetworkBackground from "@/components/ui/NeuralNetworkBackground";
import { products } from "@/data/products";
import { upcomingModules } from "@/data/roadmap";
import {
  CheckCircle2,
  Layers,
  SlidersHorizontal,
  Puzzle,
  Upload,
  ShieldCheck,
  BarChart3,
  LifeBuoy,
  FileSignature,
  Fingerprint,
  type LucideIcon,
} from "lucide-react";

const product = products.find((p) => p.slug === "odal")!;

export const metadata: Metadata = {
  title: "Odal | Tecnera",
  description: "ERP para empresas de servicios técnicos y mantenimiento que necesitan ordenar su operación diaria.",
};

const customizationAccents = [
  { box: "bg-amber-500", icon: "text-white" },
  { box: "bg-red-800/80", icon: "text-white" },
  { box: "bg-neutral", icon: "text-white" },
  { box: "bg-link", icon: "text-white" },
];

const customizationCards = [
  {
    icon: Layers,
    title: "Nuestros planes",
    desc: "Elegí entre nuestros distintos planes, cada uno abarca diferentes tipos y volumenes de trabajo, cada funcionalidades pensada para el tamaño de tu operación.",
  },
  {
    icon: SlidersHorizontal,
    title: "Planes a medida",
    desc: "Partí de un plan existente y sumale los módulos extra que necesites. No todo tiene que ser rígido, resolver problemas requiere flexibilidad.",
  },
  {
    icon: Puzzle,
    title: "Módulos customizados",
    desc: "Si tu operación tiene una necesidad puntual y no está en nuestro catálogo, podemos customizar un módulo existente o crear desde cero uno que se adapte a tus necesidades, la herramienta adecuada para la tarea que toque.",
  },
  {
    icon: LifeBuoy,
    title: "Acompañamiento continuo",
    desc: "Te acompañamos durante la migración de tus datos y seguimos con soporte técnico y mejoras continuas una vez que ya estás usando Odal.",
  },
];

const relevantAreas: {
  icon: LucideIcon;
  title: string;
  bullets: string[];
  image: string;
}[] = [
  {
    icon: Upload,
    title: "Migración de datos guiada",
    bullets: [
      "Sistema de 3 pasos para que hagas la importación de datos vos mismo",
      "Plantillas de carga por cada entidad de la plataforma",
      "Carga masiva de datos con validación incorporada",
      "Acompañamiento durante todo el proceso de migración",
      "Actualización de datos de manera masiva",
    ],
    image: "/products/ODAL/imagenes-app/data-import.png",
  },
  {
    icon: ShieldCheck,
    title: "Permisos y accesos por usuario",
    bullets: [
      "Permisos configurables a la medida de tu trabajo",
      "Definí qué áreas de la plataforma puede usar cada persona",
      "Roles configurables por equipo o función",
      "Control total sobre la información sensible de la empresa",
    ],
    image: "/products/ODAL/imagenes-app/permits.png",
  },
  {
    icon: BarChart3,
    title: "Reportes y analítica",
    bullets: [
      "Indicadores del estado de tu operación en tiempo real",
      "Análisis detallado de todas las areas de tu negocio para tomar decisones claras",
      "Informes complejos segmentados en pasos para lograr la granularidad en el analisis que necesites",
      "Exportá la información que necesites cuando la necesites",
    ],
    image: "/products/ODAL/imagenes-app/reports.png",
  },
];

interface PricingFeature {
  label: string;
  comingSoon?: boolean;
}

interface PricingPlan {
  name: string;
  features: PricingFeature[];
  priceNote: string;
  userTiers?: { label: string; price: string }[];
  variant: "white" | "primary" | "black";
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Basico",
    features: [
      { label: "Reclamos y órdenes de trabajo" },
      { label: "Clientes, proveedores y presupuestos" },
      { label: "Sitios y técnicos" },
      { label: "Módulo de facturación", comingSoon: true },
    ],
    priceNote: "Consultar por una mayor cantidad de usuarios",
    userTiers: [
      { label: "5 usuarios", price: "$45.000/mes" },
      { label: "15 usuarios", price: "$95.000/mes" },
    ],
    variant: "white",
  },
  {
    name: "Avanzado",
    features: [
      { label: "Todo lo del plan Basico" },
      { label: "Gestión de inventario y stock" },
      { label: "Depósitos, movimientos y transferencias" },
      { label: "Monitoreo de actividad en plataforma" },
      { label: "Módulo de facturación", comingSoon: true },
    ],
    priceNote: "Consultar por una mayor cantidad de usuarios",
    userTiers: [
      { label: "5 usuarios", price: "$65.000/mes" },
      { label: "15 usuarios", price: "$130.000/mes" },
    ],
    variant: "primary",
  },
  {
    name: "Personalizado",
    features: [
      { label: "Plan Basico o Avanzado como base" },
      { label: "Adaptación de módulos existentes a la medida de tus necesidades" },
      { label: "Creación de módulos específicos para tus necesidades" },
      { label: "Pensado para necesidades puntuales y procesos complejos" },
      { label: "Soluciones con IA especificas para tu dia a dia" },
      { label: "Integraciones a plataformas y aplicaciones externas" },
    ],
    priceNote: "Se presupuestará tanto el desarrollo como la posterior mensualidad tomando en cuenta como base el plan inicial seleccionado",
    variant: "black",
  },
];

export default function OdalPage() {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10 bg-light">
        <div className="h-full w-full opacity-[0.35] pointer-events-none">
          <NeuralNetworkBackground className="h-full w-full" color="28, 28, 28" nodeCount={260} />
        </div>
      </div>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-3">
          <div className="relative z-10 max-w-7xl mx-auto px-4 tablet:px-6 laptop:px-8">
            <div className="grid laptop:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] gap-12 items-center">
              {/* Logo */}
              <div className="flex justify-center laptop:justify-start translate-y-2 laptop:-translate-x-24">
                <div className="relative flex-shrink-0 w-[12rem] h-[13.5rem] tablet:w-[16rem] tablet:h-[18rem] laptop:w-[23rem] laptop:h-[26rem]">
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
                  <h1 className="text-neutral text-xl font-bold leading-relaxed mb-4">
                    Odal centraliza reclamos, órdenes de trabajo, presupuestos e inspecciones en una sola
                    plataforma pensada para empresas de mantenimiento y servicios técnicos.
                  </h1>
                  <p className="text-neutral text-xl font-bold leading-relaxed">
                    Ordená tu operación diaria y tomá decisiones con información real, actualizada y disponible
                    en el momento en que la necesitás.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <PrimaryCTAButton source="odal_hero" href="/contacto?reason=odal" variant="primary" label="Solicitar demo" />
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
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 tablet:px-6 laptop:px-8">
            <SectionHeader
              tag="Odal"
              title="Así se ve Odal por dentro"
              description="Un panel de inicio pensado para que veas de un vistazo el estado de tu operación apenas iniciás sesión."
              descriptionClassName="text-neutral/80 [text-shadow:0_1px_3px_rgba(249,250,248,0.9)]"
              centered
              emphasize
              icon
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
        <section className="py-24">
          <div className="max-w-[100rem] mx-auto px-4 tablet:px-6 laptop:px-8">
            <SectionHeader
              tag="Odal"
              title="Customización de la plataforma"
              description="Odal se adapta a tu empresa, no al revés. Elegí el nivel de personalización que necesitás."
              descriptionClassName="text-neutral/80 [text-shadow:0_1px_3px_rgba(249,250,248,0.9)]"
              centered
              emphasize
              icon
              titleSizeClass="text-4xl tablet:text-5xl"
              descriptionSizeClass="text-xl"
            />
            <div className="grid grid-cols-1 tablet:grid-cols-4 gap-6">
              {customizationCards.map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${customizationAccents[i].box}`}>
                    <Icon className={`w-7 h-7 ${customizationAccents[i].icon}`} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral mb-2">{title}</h3>
                  <p className="text-subtext text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Áreas relevantes */}
        <section className="py-24">
          <div className="max-w-[88rem] mx-auto px-4 tablet:px-6 laptop:px-8">
            <SectionHeader
              tag="Odal"
              title="Áreas relevantes"
              centered
              emphasize
              icon
              titleSizeClass="text-4xl tablet:text-5xl"
              descriptionSizeClass="text-xl"
            />
            <div className="flex flex-col gap-16">
              {relevantAreas.map(({ title, bullets, image }, i) => {
                const screenshot = (
                  <div className="relative w-full laptop:flex-[2] laptop:w-auto laptop:min-w-[62rem] aspect-[1825/888] rounded-xl overflow-hidden border border-neutral-100 shadow-sm">
                    <Image src={image} alt={title} fill className="object-cover" />
                  </div>
                );
                const card = (
                  <div className="w-full laptop:flex-1 laptop:w-auto min-h-[26rem] laptop:min-h-[30rem] bg-white rounded-2xl p-9 shadow-sm flex flex-col justify-start">
                    <h3 className="text-xl font-bold text-neutral mb-6">{title}</h3>
                    <ul className="space-y-4">
                      {bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-3 text-neutral text-sm font-medium leading-relaxed">
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
                    className={`flex flex-col laptop:flex-row gap-8 laptop:gap-14 items-center ${i === 1 ? "laptop:flex-row-reverse" : ""}`}
                  >
                    {screenshot}
                    {card}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-24">
          <div className="max-w-[88rem] mx-auto px-4 tablet:px-6 laptop:px-8">
            <SectionHeader
              tag="Odal"
              title="Lo que viene para Odal"
              description="Módulos transversales a todas nuestras plataformas que también van a estar disponibles en Odal."
              descriptionClassName="text-neutral/80 [text-shadow:0_1px_3px_rgba(249,250,248,0.9)]"
              centered
              emphasize
              icon
              titleSizeClass="text-4xl tablet:text-5xl"
              descriptionSizeClass="text-xl"
            />
            <div className="relative grid grid-cols-1 tablet:grid-cols-5 gap-8 tablet:gap-6">
              <div className="hidden tablet:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-primary/15" />
              {[
                upcomingModules[1],
                upcomingModules[0],
                {
                  icon: FileSignature,
                  title: "Sistema de firma digital",
                  description: "Firmá documentos y órdenes de trabajo directamente desde la plataforma.",
                },
                {
                  icon: Fingerprint,
                  title: "Fichado electronico",
                  description: "Control de entrada y salida de técnicos y personal desde la app.",
                },
                upcomingModules[2],
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white font-extrabold shadow-lg shadow-black/20">
                      {i + 1}
                    </div>
                    <div className="mt-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm">
                        <Icon className="h-5 w-5 text-primary" strokeWidth={2} />
                      </div>
                      <h3 className="font-bold text-neutral text-left">{item.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-neutral/80 leading-relaxed [text-shadow:0_1px_3px_rgba(249,250,248,0.9)]">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="precios" className="py-24">
          <div className="max-w-7xl mx-auto px-4 tablet:px-6 laptop:px-8">
            <SectionHeader
              tag="Odal"
              title="Planes y precios"
              centered
              emphasize
              icon
              titleSizeClass="text-4xl tablet:text-5xl"
            />
            <div className="grid tablet:grid-cols-3 gap-6 items-stretch">
              {pricingPlans.map(({ name, features, priceNote, userTiers, variant }, i) => {
                const cardClass =
                  variant === "primary"
                    ? "bg-primary text-white shadow-2xl"
                    : variant === "black"
                    ? "bg-neutral text-white shadow-sm"
                    : "bg-white text-neutral border border-primary/10 shadow-sm";
                const mutedText = variant === "white" ? "text-subtext" : "text-white/70";
                const btnClass =
                  variant === "primary"
                    ? "bg-white text-primary"
                    : variant === "black"
                    ? "bg-white text-neutral"
                    : "bg-primary text-white";
                return (
                  <div key={i} className={`rounded-2xl pt-6 pb-8 px-8 flex flex-col h-full ${cardClass}`}>
                    <div className="flex items-center gap-3 mb-6">
                      {variant === "black" ? (
                        <span className="inline-block rounded-full bg-white px-4 py-0 text-3xl font-extrabold text-black">
                          {name}
                        </span>
                      ) : (
                        <h3 className="text-3xl font-extrabold">{name}</h3>
                      )}
                      {variant === "primary" && (
                        <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                          Recomendado
                        </span>
                      )}
                    </div>
                    <ul className="space-y-3 mb-6 min-h-[17rem]">
                      {features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3 text-lg font-medium">
                          <CheckCircle2 className={`w-6 h-6 flex-shrink-0 mt-0.5 ${variant === "white" ? "text-primary" : variant === "black" ? "text-amber-400" : "text-white"}`} />
                          <span className="flex flex-col items-start gap-1.5">
                            {feature.label}
                            {feature.comingSoon && (
                              <span
                                className={`inline-block whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-widest ${
                                  variant === "white"
                                    ? "bg-primary text-white"
                                    : variant === "primary"
                                    ? "bg-white text-primary"
                                    : "bg-white/15 text-white"
                                }`}
                              >
                                Próximamente
                              </span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      {priceNote && (
                        <p
                          className={`mx-auto uppercase tracking-widest mb-3 text-center leading-relaxed ${mutedText} ${
                            userTiers
                              ? "max-w-[16rem] text-sm font-extrabold [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]"
                              : "max-w-[20rem] text-xs font-bold"
                          }`}
                        >
                          {priceNote}
                        </p>
                      )}
                      {userTiers && (
                        <PricingTierSelector tiers={userTiers} variant={variant === "primary" ? "primary" : "white"} />
                      )}
                      <button className={`w-full rounded-full py-3 text-sm font-bold hover:scale-[1.05] active:scale-100 transition-transform duration-200 cursor-pointer ${btnClass}`}>
                        Consultar
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
