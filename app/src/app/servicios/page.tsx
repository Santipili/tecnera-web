import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import SectionHeader from "@/components/ui/SectionHeader";
import PrimaryCTAButton from "@/components/ui/PrimaryCTAButton";
import NeuralNetworkBackground from "@/components/ui/NeuralNetworkBackground";
import { services, type ServiceAccent } from "@/data/services";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios | Tecnera",
  description: "Software a medida, automatización, modernización, consultoría, mobile, IA y más. Todo lo que tu organización necesita.",
};

const TECNERA_ICON_PATH =
  "M282.009,1437.136c197.635,0,439.767-203.572,448.876-396.535v-70.045c0-196.181-248.29-407.691-449.731-407.691l-232.424-.094c-27.006,0-48.73-21.748-48.73-48.735V48.73C0,21.743,21.724,0,48.73,0h465.297c26.984,0,48.73,21.743,48.73,48.73v232.993c.321,211.82,236.572,436.597,440.943,436.597h241.725c13.535,0,25.766,5.575,34.618,14.548,9.109,8.85,14.861,21.104,14.861,34.706v465.495c0,27.15-21.895,48.61-48.623,48.61h-241.725c-204.371,0-440.622,224.777-440.943,436.597v232.993c0,26.987-21.746,48.73-48.73,48.73H49.585c-27.006,0-48.73-21.743-48.73-48.73v-465.305c0-26.987,21.724-48.735,48.73-48.735l232.424-.094Z";

const accentClasses: Record<ServiceAccent, { box: string; icon: string }> = {
  primary: { box: "bg-neutral", icon: "text-white" },
  muted: { box: "bg-red-800/80", icon: "text-white" },
  amber: { box: "bg-amber-500", icon: "text-white" },
  blue: { box: "bg-link", icon: "text-white" },
};

export default function ServiciosPage() {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10 bg-light">
        <div className="h-full w-full opacity-65 pointer-events-none">
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
                <div className="relative flex-shrink-0 w-[18rem] h-[20rem] laptop:w-[23rem] laptop:h-[26rem]">
                  <Image
                    src="/products/TECNERA/SVG/IMAGOTIPO_TECNERA_COLOR.svg"
                    alt="Tecnera"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="ml-auto w-full max-w-2xl">
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 laptop:p-6 mb-6">
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
          <div className="mx-auto max-w-[105rem] px-4 sm:px-6 lg:px-6">
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
                      <div className="relative w-full laptop:w-[26rem] laptop:flex-shrink-0 min-h-[16rem] rounded-xl bg-light overflow-hidden">
                        {service.image && (
                          <Image src={service.image} alt={service.title} fill className="object-cover" />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col justify-center rounded-2xl border border-primary/10 bg-white p-8 laptop:p-10 shadow-lg shadow-black/10">
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 1294.904 2000" className="h-7 w-auto flex-shrink-0" aria-hidden="true">
                    <path d={TECNERA_ICON_PATH} fill="#1C1C1C" />
                  </svg>
                  <h3 className="text-lg tablet:text-xl laptop:text-2xl font-extrabold text-neutral leading-snug">
                    Enterate de cómo trabajamos
                  </h3>
                </div>
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
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 1294.904 2000" className="h-7 w-auto flex-shrink-0" aria-hidden="true">
                    <path d={TECNERA_ICON_PATH} fill="#ffffff" />
                  </svg>
                  <h3 className="text-lg tablet:text-xl laptop:text-2xl font-extrabold leading-snug">
                    ¿Ya sabés qué necesitás?
                  </h3>
                </div>
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
