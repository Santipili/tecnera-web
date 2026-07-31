import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import SectionHeader from "@/components/ui/SectionHeader";
import PrimaryCTAButton from "@/components/ui/PrimaryCTAButton";
import NeuralNetworkBackground from "@/components/ui/NeuralNetworkBackground";
import { services, type ServiceAccent } from "@/data/services";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { withBasePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Servicios | Tecnera",
  description: "Software a medida, automatización, modernización, consultoría, mobile, IA y más. Todo lo que tu organización necesita.",
};

const accentClasses: Record<ServiceAccent, { box: string; icon: string }> = {
  primary: { box: "bg-primary", icon: "text-white" },
  muted: { box: "bg-primary", icon: "text-white" },
  amber: { box: "bg-primary", icon: "text-white" },
  blue: { box: "bg-primary", icon: "text-white" },
};

export default function ServiciosPage() {
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
        <section className="relative py-3">
          <div className="relative z-10 max-w-[90rem] mx-auto px-4 tablet:px-6 laptop:px-6">
            <div className="grid gap-6 tablet:gap-8 laptop:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] laptop:gap-12 items-center">
              {/* Logo */}
              <div className="flex justify-center laptop:justify-start translate-y-2">
                <div className="relative flex-shrink-0 w-[18rem] h-[20rem] laptop:w-[23rem] laptop:h-[26rem]">
                  <Image
                    src={withBasePath("/products/TECNERA/SVG/IMAGOTIPO_TECNERA_COLOR.svg")}
                    alt="Tecnera"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="ml-auto w-full max-w-2xl">
                <div className="mb-6">
                  <p className="text-neutral text-lg tablet:text-xl font-bold leading-relaxed">
                    Combinamos tecnología moderna con conocimiento del sector para entregar soluciones que realmente se usan.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <PrimaryCTAButton source="servicios_hero" variant="primary" label="Contanos qué necesitás" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Catálogo de servicios */}
        <section id="catalogo" className="relative py-24 transition-colors duration-300">
          <div className="mx-auto max-w-[90rem] px-4 tablet:px-6 laptop:px-6">
            <SectionHeader
              tag="Servicios"
              title="Todo lo que podemos desarrollar para vos"
              centered
              emphasize
              icon
            />
            <div className="flex flex-col gap-8 laptop:gap-10">
              {services.map((service) => {
                const Icon = service.icon;
                const accent = accentClasses[service.accent];
                return (
                  <div
                    key={service.title}
                    className="w-full rounded-2xl border border-primary/10 bg-white shadow-lg shadow-black/10 overflow-hidden"
                  >
                    <div className={`flex items-center gap-4 px-8 laptop:px-10 py-5 ${accent.box}`}>
                      <Icon className="h-7 w-7 flex-shrink-0 text-white" strokeWidth={2} />
                      <h3 className="text-lg tablet:text-xl laptop:text-2xl font-extrabold text-white leading-snug">
                        {service.title}
                      </h3>
                    </div>
                    <div className="flex flex-col laptop:flex-row gap-6 laptop:gap-8 px-8 laptop:px-10 py-6">
                      <div className="flex-1 flex flex-col justify-start">
                        <p className="text-base tablet:text-xl text-neutral font-medium leading-relaxed">{service.description}</p>
                        <ul className="mt-3 space-y-3 border-t-2 border-primary pt-6">
                          {service.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-3 text-neutral text-base font-medium">
                              <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="relative w-full laptop:w-[26rem] laptop:flex-shrink-0 aspect-[1586/992] rounded-xl bg-light overflow-hidden">
                        {service.image && (
                          <Image src={service.image} alt={service.title} fill className="object-contain" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
              <div className="flex flex-col justify-center rounded-2xl border border-primary/10 bg-white p-8 laptop:p-10 shadow-lg shadow-black/10">
                <h3 className="text-lg tablet:text-xl laptop:text-2xl font-extrabold text-neutral leading-snug">
                  Enterate de cómo trabajamos
                </h3>
                <p className="mt-3 text-subtext leading-relaxed">
                  Conocé nuestros procesos de trabajo.
                </p>
                <Link
                  href="/productos/custom"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white hover:scale-[1.05] transition-transform duration-200"
                >
                  Ver <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="flex flex-col justify-center rounded-2xl bg-primary p-8 laptop:p-10 shadow-lg shadow-black/10 text-white">
                <h3 className="text-lg tablet:text-xl laptop:text-2xl font-extrabold leading-snug">
                  ¿Ya sabés qué necesitás?
                </h3>
                <p className="mt-3 text-white/80 leading-relaxed">
                  Contanos tu proyecto y te respondemos a la brevedad.
                </p>
                <Link
                  href="/contacto"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-primary hover:scale-[1.05] transition-transform duration-200"
                >
                  Ir a contacto <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
