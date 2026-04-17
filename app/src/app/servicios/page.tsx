import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Features from "@/components/homeSections/Features";
import PrimaryCTAButton from "@/components/ui/PrimaryCTAButton";
import WhatsappCTAButton from "@/components/ui/WhatsappCTAButton";

export const metadata: Metadata = {
  title: "Servicios | Tecnera",
  description: "Apps móviles, dashboards, automatizaciones, integraciones y más. Todo lo que tu organización necesita.",
};

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-primary via-[#0A3D35] to-primary text-white">
          <div className="max-w-4xl mx-auto px-4 tablet:px-6 laptop:px-8 text-center">
            <span className="inline-block rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary mb-6">
              Servicios
            </span>
            <h1 className="text-4xl laptop:text-5xl font-extrabold leading-tight mb-6">
              Lo que podemos hacer por tu organización
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Combinamos tecnología moderna con conocimiento del sector para entregar soluciones que realmente se usan.
            </p>
          </div>
        </section>

        <Features />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-[#00A478] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold mb-4">¿Qué necesita tu organización?</h2>
            <p className="text-white/80 mb-8 text-lg">
              Hablemos y encontramos juntos la solución que más se adapta a tu realidad.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PrimaryCTAButton source="servicios_cta" />
              <WhatsappCTAButton source="servicios_cta" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
