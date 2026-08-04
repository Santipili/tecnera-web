import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import SectionHeader from "@/components/ui/SectionHeader";
import PrimaryCTAButton from "@/components/ui/PrimaryCTAButton";
import PricingTierSelector from "@/components/ui/PricingTierSelector";
import NeuralNetworkBackground from "@/components/ui/NeuralNetworkBackground";
import { products } from "@/data/products";
import {
  CheckCircle2,
  Layers,
  SlidersHorizontal,
  Puzzle,
  LifeBuoy,
  Users,
  Building2,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { withBasePath } from "@/lib/basePath";

const product = products.find((p) => p.slug === "mannaz")!;

export const metadata: Metadata = {
  title: "Mannaz | Tecnera",
  description: "CRM para mutuales, sindicatos, cooperativas y organizaciones con afiliados o miembros.",
};

const customizationAccents = [
  { box: "bg-primary", icon: "text-white" },
  { box: "bg-primary", icon: "text-white" },
  { box: "bg-primary", icon: "text-white" },
  { box: "bg-primary", icon: "text-white" },
];

const customizationCards = [
  {
    icon: Layers,
    title: "Nuestros planes",
    desc: "Elegí entre nuestros distintos planes. Cada uno abarca diferentes cantidades de afiliados y funcionalidades pensadas para el tamaño de tu organización.",
  },
  {
    icon: SlidersHorizontal,
    title: "Planes a medida",
    desc: "Partí de un plan existente y sumále los módulos extra que necesites. No todo tiene que ser rígido, resolver problemas requiere flexibilidad.",
  },
  {
    icon: Puzzle,
    title: "Módulos customizados",
    desc: "Si tu organización tiene una necesidad puntual y no está en nuestro catálogo, podemos personalizar un módulo existente o crear desde cero uno que se adapte a tus necesidades.",
  },
  {
    icon: LifeBuoy,
    title: "Acompañamiento continuo",
    desc: "Te acompañamos durante la migración de tus datos y seguimos con soporte técnico y mejoras continuas una vez que ya estás usando Mannaz.",
  },
];

const relevantAreas: {
  icon: LucideIcon;
  title: string;
  bullets: string[];
  image: string;
}[] = [
  {
    icon: Users,
    title: "Mutuales y sindicatos",
    bullets: [
      "Gestioná afiliados, cuotas y comunicación institucional desde un solo lugar",
      "Centralizá visitas y campañas por zona o grupo",
      "Seguimiento de vencimientos y estado de cada afiliado",
    ],
    image: withBasePath("/images/placeholders/product.svg"),
  },
  {
    icon: Building2,
    title: "Cooperativas",
    bullets: [
      "Ordená la relación con socios, zonas y campañas sin depender de planillas sueltas",
      "Segmentación de socios para acciones institucionales puntuales",
      "Datos siempre actualizados y disponibles para todo el equipo",
    ],
    image: withBasePath("/images/placeholders/product.svg"),
  },
  {
    icon: GraduationCap,
    title: "Clubes y colegios profesionales",
    bullets: [
      "Administrá matrículas, grupos y vencimientos con datos siempre actualizados",
      "Reemplazá planillas y mensajes dispersos por información ordenada",
      "Reportes claros sobre el estado de cada miembro",
    ],
    image: withBasePath("/images/placeholders/product.svg"),
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
    name: "Básico",
    features: [
      { label: "Gestión de afiliados y grupos" },
      { label: "Visitas y campañas" },
      { label: "Cuotas y vencimientos" },
      { label: "Módulo de facturación", comingSoon: true },
    ],
    priceNote: "Consultar por una mayor cantidad de usuarios",
    userTiers: [
      { label: "5 usuarios", price: "A confirmar" },
      { label: "15 usuarios", price: "A confirmar" },
    ],
    variant: "white",
  },
  {
    name: "Avanzado",
    features: [
      { label: "Todo lo del plan Básico" },
      { label: "Segmentaciones y campañas avanzadas" },
      { label: "Reportes y analítica" },
      { label: "Monitoreo de actividad en plataforma" },
      { label: "Módulo de facturación", comingSoon: true },
    ],
    priceNote: "Consultar por una mayor cantidad de usuarios",
    userTiers: [
      { label: "5 usuarios", price: "A confirmar" },
      { label: "15 usuarios", price: "A confirmar" },
    ],
    variant: "primary",
  },
  {
    name: "Personalizado",
    features: [
      { label: "Plan Básico o Avanzado como base" },
      { label: "Adaptación de módulos existentes a la medida de tus necesidades" },
      { label: "Creación de módulos específicos para tus necesidades" },
      { label: "Pensado para organizaciones con procesos complejos" },
      { label: "Integraciones a plataformas y aplicaciones externas" },
    ],
    priceNote: "Se presupuestará tanto el desarrollo como la posterior mensualidad tomando en cuenta como base el plan inicial seleccionado",
    variant: "black",
  },
];

export default function MannazPage() {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10 bg-light">
        <div className="h-full w-full opacity-[0.40] pointer-events-none">
          <NeuralNetworkBackground className="h-full w-full" color="0, 86, 71" />
        </div>
      </div>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-10 pb-3 tablet:pt-16 laptop:pt-24">
          <div className="relative z-10 max-w-[90rem] mx-auto px-4 tablet:px-6 laptop:px-6">
            <div className="grid gap-6 tablet:gap-8 laptop:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] laptop:gap-12 items-center">
              {/* Logo */}
              <div className="flex justify-center laptop:justify-start translate-y-2">
                <div className="relative flex-shrink-0 w-[11.3rem] h-[6rem] tablet:w-[16.1rem] tablet:h-[8.5rem] laptop:w-[22.7rem] laptop:h-[12rem]">
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
                <div className="mb-6">
                  <h1 className="text-neutral text-lg tablet:text-xl font-bold leading-relaxed mb-4">
                    Mannaz centraliza la información de cada afiliado o miembro en una sola plataforma
                    pensada para mutuales, sindicatos, cooperativas y organizaciones con socios.
                  </h1>
                  <p className="text-neutral text-lg tablet:text-xl font-bold leading-relaxed">
                    Gestioná visitas, campañas, segmentaciones y acciones institucionales con datos
                    siempre actualizados y disponibles.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <PrimaryCTAButton source="mannaz_hero" href="/contacto?reason=mannaz" variant="primary" label="Solicitar demo" />
                  <a
                    href="#precios"
                    className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-3.5 text-sm font-bold shadow-lg shadow-black/20 hover:bg-secondary transition-colors duration-200"
                  >
                    Ver precios
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 tablet:px-6 laptop:px-6">
            <SectionHeader
              tag="Mannaz"
              title="Así se ve Mannaz por dentro"
              description="Un panel de inicio pensado para que veas de un vistazo el estado de tu base de afiliados apenas iniciás sesión."
              descriptionClassName="text-neutral/80 [text-shadow:0_1px_3px_rgba(249,250,248,0.9)]"
              centered
              emphasize
              icon
              titleSizeClass="text-3xl tablet:text-4xl laptop:text-5xl"
              descriptionSizeClass="text-lg tablet:text-xl"
            />
            <div className="rounded-2xl border border-neutral-100 bg-white shadow-xl overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-neutral-100 bg-[#F4F4F4]">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="relative w-full aspect-[1809/890]">
                <Image
                  src={withBasePath("/images/placeholders/product.svg")}
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
          <div className="max-w-[90rem] mx-auto px-4 tablet:px-6 laptop:px-6">
            <SectionHeader
              tag="Mannaz"
              title="Customización de la plataforma"
              description="Mannaz se adapta a tu organización, no al revés. Elegí el nivel de personalización que necesitás."
              descriptionClassName="text-neutral/80 [text-shadow:0_1px_3px_rgba(249,250,248,0.9)]"
              centered
              emphasize
              icon
              titleSizeClass="text-3xl tablet:text-4xl laptop:text-5xl"
              descriptionSizeClass="text-lg tablet:text-xl"
            />
            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 gap-6">
              {customizationCards.map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${customizationAccents[i].box}`}>
                    <Icon className={`w-7 h-7 ${customizationAccents[i].icon}`} />
                  </div>
                  <h3 className="text-base tablet:text-lg font-bold text-neutral mb-2">{title}</h3>
                  <p className="text-subtext text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Áreas relevantes */}
        <section className="py-24">
          <div className="max-w-[90rem] mx-auto px-4 tablet:px-6 laptop:px-6">
            <SectionHeader
              tag="Mannaz"
              title="Áreas relevantes"
              centered
              emphasize
              icon
              titleSizeClass="text-3xl tablet:text-4xl laptop:text-5xl"
              descriptionSizeClass="text-lg tablet:text-xl"
            />
            <div className="grid grid-cols-1 laptop:grid-cols-3 gap-8 items-stretch">
              {relevantAreas.map(({ title, bullets, image }, i) => (
                <div key={i} className="w-full h-full bg-white rounded-2xl p-9 shadow-sm flex flex-col justify-start">
                  <h3 className="text-lg tablet:text-xl font-bold text-neutral mb-6">{title}</h3>
                  <ul className="space-y-4">
                    {bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3 text-neutral text-sm font-medium leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <div className="relative w-full aspect-[1586/992] rounded-xl bg-light overflow-hidden">
                      <Image src={image} alt={title} fill className="object-contain" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="precios" className="py-24">
          <div className="max-w-[90rem] mx-auto px-4 tablet:px-6 laptop:px-6">
            <SectionHeader
              tag="Mannaz"
              title="Planes y precios"
              centered
              emphasize
              icon
              titleSizeClass="text-3xl tablet:text-4xl laptop:text-5xl"
            />
            <div className="grid tabletxl:grid-cols-3 gap-6 items-stretch">
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
                        <span className="inline-block rounded-full bg-white px-4 py-0 text-2xl tablet:text-3xl font-extrabold text-black">
                          {name}
                        </span>
                      ) : (
                        <h3 className="text-2xl tablet:text-3xl font-extrabold">{name}</h3>
                      )}
                      {variant === "primary" && (
                        <span className="inline-block rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                          Recomendado
                        </span>
                      )}
                    </div>
                    <ul className="space-y-3 mb-6 min-h-[17rem]">
                      {features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3 text-base tablet:text-lg font-medium">
                          <CheckCircle2 className={`w-6 h-6 flex-shrink-0 mt-0.5 ${variant === "white" ? "text-primary" : "text-white"}`} />
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
