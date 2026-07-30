import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import SectionHeader from "@/components/ui/SectionHeader";
import PrimaryCTAButton from "@/components/ui/PrimaryCTAButton";
import WhatsappCTAButton from "@/components/ui/WhatsappCTAButton";
import NeuralNetworkBackground from "@/components/ui/NeuralNetworkBackground";
import { products } from "@/data/products";
import { Users, Building2, GraduationCap } from "lucide-react";

const product = products.find((p) => p.slug === "mannaz")!;

export const metadata: Metadata = {
  title: "Mannaz | Tecnera",
  description: "CRM para mutuales, sindicatos, cooperativas y organizaciones con afiliados o miembros.",
};

export default function MannazPage() {
  return (
    <div className="min-h-screen bg-light">
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
              <div className="flex justify-center laptop:justify-start translate-y-2 laptop:-translate-x-[11.5rem]">
                <div className="relative flex-shrink-0 w-[14rem] h-[10.75rem] tablet:w-[19rem] tablet:h-[14.5rem] laptop:w-[34rem] laptop:h-[26rem]">
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
                    Mannaz centraliza la información de cada afiliado o miembro en una sola plataforma
                    pensada para mutuales, sindicatos, cooperativas y organizaciones con socios.
                  </h1>
                  <p className="text-neutral text-xl font-bold leading-relaxed">
                    Gestioná visitas, campañas, segmentaciones y acciones institucionales con datos
                    siempre actualizados y disponibles.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <PrimaryCTAButton source="mannaz_hero" href="/contacto?reason=mannaz" variant="primary" label="Solicitar demo" />
                  <PrimaryCTAButton source="mannaz_hero_precios" href="/precios" variant="white" icon={false} label="Ver precios" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-light">
          <div className="max-w-4xl mx-auto px-4 tablet:px-6">
            <SectionHeader tag="Mannaz" title="Todo lo que incluye" centered />
            <div className="grid tablet:grid-cols-2 gap-5">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-xl border border-neutral-100 shadow-sm">
                  <div className="w-9 h-9 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="h-4 w-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-neutral font-medium leading-snug">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ¿Para quién es? */}
        <section className="py-20 bg-[#EAEAEA]">
          <div className="max-w-7xl mx-auto px-4 tablet:px-6 laptop:px-8">
            <SectionHeader tag="Mannaz" title="¿Para qué tipo de organización?" centered />
            <div className="grid tablet:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "Mutuales y sindicatos", desc: "Gestioná afiliados, cuotas y comunicación institucional desde un solo lugar." },
                { icon: Building2, title: "Cooperativas", desc: "Ordená la relación con socios, zonas y campañas sin depender de planillas sueltas." },
                { icon: GraduationCap, title: "Clubes y colegios profesionales", desc: "Administrá matrículas, grupos y vencimientos con datos siempre actualizados." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-white rounded-2xl p-8 shadow-sm">
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
            <SectionHeader
              tag="Mannaz"
              title="¿Listo para ordenar tu base de afiliados?"
              description="Hablemos sobre cómo Mannaz puede reemplazar tus planillas y mensajes dispersos."
              descriptionSizeClass="text-lg"
              centered
              dark
            />
            <div className="flex flex-wrap gap-4 justify-center">
              <PrimaryCTAButton source="mannaz_cta" />
              <WhatsappCTAButton source="mannaz_cta" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
