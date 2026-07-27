import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import PrimaryCTAButton from "@/components/ui/PrimaryCTAButton";
import WhatsappCTAButton from "@/components/ui/WhatsappCTAButton";
import { customDev as product } from "@/data/customDev";
import {
  Search,
  Workflow,
  Rocket,
  LayoutDashboard,
  Database,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Desarrollos Personalizados | Tecnera",
  description: "Creamos software a medida para resolver las necesidades específicas de tu organización.",
};

const developmentAreas: {
  icon: LucideIcon;
  title: string;
  desc: string;
  bullets: string[];
}[] = [
  {
    icon: LayoutDashboard,
    title: "Aplicaciones web y dashboards a medida",
    desc: "Interfaces pensadas para tu equipo, no para todos.",
    bullets: [
      "Diseño adaptado a tus procesos reales",
      "Accesos y permisos según cada rol",
      "Reportes y métricas que importan a tu operación",
    ],
  },
  {
    icon: Workflow,
    title: "Automatización de procesos e integraciones",
    desc: "Menos tareas manuales, más tiempo para lo importante.",
    bullets: [
      "Conexión con las herramientas que ya usás",
      "Flujos automáticos entre sistemas",
      "Notificaciones y alertas en tiempo real",
    ],
  },
  {
    icon: Database,
    title: "Digitalización de lo que hoy es manual",
    desc: "Pasá de planillas sueltas a información centralizada.",
    bullets: [
      "Migración de datos desde Excel o papel",
      "Un solo lugar para toda la información",
      "Historial y trazabilidad de cada cambio",
    ],
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

export default function CustomPage() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-[#0A3D35] via-primary to-[#005647] text-white">
          <div className="max-w-7xl mx-auto px-4 tablet:px-6 laptop:px-8">
            <div className="grid laptop:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary mb-6">
                  Producto Tecnera
                </span>
                <h1 className="text-4xl laptop:text-5xl font-extrabold leading-tight mb-6">
                  {product.title}
                </h1>
                <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-lg">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <PrimaryCTAButton source="custom_hero" />
                  <WhatsappCTAButton source="custom_hero" />
                </div>
              </div>
              <div className="relative h-72 laptop:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/products/TECNERA/imagotipo-tecnera-blanco.png" alt={product.title} fill className="object-contain p-16" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Ejemplo de dashboard */}
        <section className="py-24 bg-light">
          <div className="max-w-6xl mx-auto px-4 tablet:px-6 laptop:px-8">
            <h2 className="text-3xl font-extrabold text-neutral text-center mb-3">
              Cada desarrollo es distinto
            </h2>
            <p className="text-subtext text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              No hay dos proyectos iguales, pero así se ve un dashboard construido a medida para
              ordenar la operación de tu organización.
            </p>
            <div className="rounded-2xl border border-neutral-100 bg-white shadow-xl overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-neutral-100 bg-[#F4F4F4]">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <PlaceholderScreenshot
                icon={LayoutDashboard}
                label="Ejemplo de dashboard a medida"
                className="h-80 laptop:h-[26rem] rounded-none border-none"
              />
            </div>
          </div>
        </section>

        {/* Qué podemos desarrollar */}
        <section className="py-24 bg-[#EAEAEA]">
          <div className="max-w-[88rem] mx-auto px-4 tablet:px-6 laptop:px-8">
            <h2 className="text-3xl font-extrabold text-neutral text-center mb-16">
              ¿Qué podemos desarrollar?
            </h2>
            <div className="flex flex-col gap-16">
              {developmentAreas.map(({ icon: Icon, title, desc, bullets }, i) => {
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

        {/* Proceso */}
        <section className="py-20 bg-light">
          <div className="max-w-7xl mx-auto px-4 tablet:px-6 laptop:px-8">
            <h2 className="text-3xl font-extrabold text-neutral text-center mb-12">
              Nuestro proceso
            </h2>
            <div className="grid tablet:grid-cols-3 gap-6">
              {[
                { icon: Search, step: "01", title: "Entendemos tu problema", desc: "Nos reunimos para entender tu necesidad real, tus flujos de trabajo y qué solución tendría más impacto." },
                { icon: Workflow, step: "02", title: "Diseñamos y construimos", desc: "Desarrollo iterativo con entregas frecuentes. Ves el avance desde la primera semana." },
                { icon: Rocket, step: "03", title: "Lanzamos y acompañamos", desc: "Implementación, capacitación y soporte continuo. No desaparecemos después de entregar." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-white rounded-2xl p-8 shadow-sm relative overflow-hidden">
                    <span className="absolute top-4 right-5 text-5xl font-black text-neutral/5 select-none">
                      {item.step}
                    </span>
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral mb-2">{item.title}</h3>
                    <p className="text-subtext text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-[#00A478] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold mb-4">Tenés un problema, nosotros tenemos la solución</h2>
            <p className="text-white/80 mb-8 text-lg leading-relaxed">
              Contanos qué necesitás y armamos una propuesta a medida sin compromiso.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PrimaryCTAButton source="custom_cta" />
              <WhatsappCTAButton source="custom_cta" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
