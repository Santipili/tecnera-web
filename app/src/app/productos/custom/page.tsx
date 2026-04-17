import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import PrimaryCTAButton from "@/components/ui/PrimaryCTAButton";
import WhatsappCTAButton from "@/components/ui/WhatsappCTAButton";
import { products } from "@/data/products";
import { Search, Workflow, Rocket } from "lucide-react";

const product = products.find((p) => p.slug === "custom")!;

export const metadata: Metadata = {
  title: "Desarrollos Personalizados | Tecnera",
  description: "Creamos software a medida para resolver las necesidades específicas de tu organización.",
};

export default function CustomPage() {
  return (
    <div className="min-h-screen bg-light dark:bg-dark">
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
                <Image src={product.image} alt={product.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-light dark:bg-dark">
          <div className="max-w-4xl mx-auto px-4 tablet:px-6">
            <h2 className="text-3xl font-extrabold text-neutral dark:text-light text-center mb-12">
              ¿Qué podemos desarrollar?
            </h2>
            <div className="grid tablet:grid-cols-2 gap-5">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-white dark:bg-card-bg rounded-xl border border-neutral-100 dark:border-white/10 shadow-sm">
                  <div className="w-9 h-9 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="h-4 w-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-neutral dark:text-white/80 font-medium leading-snug">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="py-20 bg-[#EAEAEA] dark:bg-[#0d2420]">
          <div className="max-w-7xl mx-auto px-4 tablet:px-6 laptop:px-8">
            <h2 className="text-3xl font-extrabold text-neutral dark:text-light text-center mb-12">
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
                  <div key={i} className="bg-white dark:bg-card-bg rounded-2xl p-8 shadow-sm relative overflow-hidden">
                    <span className="absolute top-4 right-5 text-5xl font-black text-neutral/5 dark:text-white/5 select-none">
                      {item.step}
                    </span>
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral dark:text-light mb-2">{item.title}</h3>
                    <p className="text-subtext dark:text-white/60 text-sm leading-relaxed">{item.desc}</p>
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
