import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import PrimaryCTAButton from "@/components/ui/PrimaryCTAButton";
import WhatsappCTAButton from "@/components/ui/WhatsappCTAButton";
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
        <section className="py-24 bg-gradient-to-br from-primary via-[#0A3D35] to-primary text-white">
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
                  Mannaz centraliza la información de cada afiliado o miembro y te da control sobre visitas,
                  campañas, segmentaciones, historial, zonas, grupos y acciones institucionales.
                </p>
                <div className="flex flex-wrap gap-4">
                  <PrimaryCTAButton source="mannaz_hero" />
                  <WhatsappCTAButton source="mannaz_hero" />
                </div>
              </div>
              <div className="relative h-72 laptop:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image src={product.image} alt={product.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-light">
          <div className="max-w-4xl mx-auto px-4 tablet:px-6">
            <h2 className="text-3xl font-extrabold text-neutral text-center mb-12">
              Todo lo que incluye
            </h2>
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
            <h2 className="text-3xl font-extrabold text-neutral text-center mb-12">
              ¿Para qué tipo de organización?
            </h2>
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
            <h2 className="text-3xl font-extrabold mb-4">¿Listo para ordenar tu base de afiliados?</h2>
            <p className="text-white/80 mb-8 text-lg leading-relaxed">
              Hablemos sobre cómo Mannaz puede reemplazar tus planillas y mensajes dispersos.
            </p>
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
