import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Products from "@/components/homeSections/Products";

export const metadata: Metadata = {
  title: "Productos | Tecnera",
  description: "Soluciones digitales para tu organización: App para Socios, Nexo y Desarrollos Personalizados.",
};

export default function ProductosPage() {
  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      <Header />
      <main>
        <section className="py-24 bg-gradient-to-br from-primary via-[#0A3D35] to-primary text-white">
          <div className="max-w-4xl mx-auto px-4 tablet:px-6 laptop:px-8 text-center">
            <span className="inline-block rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary mb-6">
              Nuestros Productos
            </span>
            <h1 className="text-4xl laptop:text-5xl font-extrabold leading-tight mb-6">
              Soluciones digitales para<br className="hidden tablet:block" /> cada necesidad
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Desde apps móviles para socios hasta plataformas de datos. Cada producto está diseñado para organizaciones como la tuya.
            </p>
          </div>
        </section>
        <Products />
      </main>
    </div>
  );
}
