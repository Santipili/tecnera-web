import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import PrimaryCTAButton from "@/components/ui/PrimaryCTAButton";
import WhatsappCTAButton from "@/components/ui/WhatsappCTAButton";

export const metadata: Metadata = {
  title: "Casos de Éxito | Tecnera",
  description: "Organizaciones que digitalizaron su gestión con Tecnera.",
};

export default function CasosPage() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main>
        <section className="py-24 bg-gradient-to-br from-primary via-[#0A3D35] to-primary text-white">
          <div className="max-w-4xl mx-auto px-4 tablet:px-6 laptop:px-6 text-center">
            <span className="inline-block rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary mb-6">
              Casos de Éxito
            </span>
            <h1 className="text-3xl tablet:text-4xl laptop:text-5xl font-extrabold leading-tight mb-6">
              Organizaciones que ya dieron el salto
            </h1>
            <p className="text-white/80 text-base tablet:text-lg max-w-2xl mx-auto leading-relaxed">
              Estamos documentando los casos de nuestros clientes. Mientras tanto, contáctanos y te contamos directamente.
            </p>
          </div>
        </section>

        <section className="py-24 bg-light">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-xl tablet:text-2xl font-extrabold text-neutral mb-4">Próximamente</h2>
            <p className="text-subtext leading-relaxed mb-10">
              Estamos armando los casos de éxito de nuestros clientes. Si querés conocer experiencias concretas, escribinos y te las contamos en una llamada.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PrimaryCTAButton source="casos_cta" />
              <WhatsappCTAButton source="casos_cta" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
