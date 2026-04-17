import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import PrimaryCTAButton from "@/components/ui/PrimaryCTAButton";
import WhatsappCTAButton from "@/components/ui/WhatsappCTAButton";
import { Target, Users, Zap, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros | Tecnera",
  description: "Somos un equipo de Mar del Plata dedicado a crear soluciones digitales para organizaciones de LATAM.",
};

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-primary via-[#0A3D35] to-primary text-white">
          <div className="max-w-4xl mx-auto px-4 tablet:px-6 laptop:px-8 text-center">
            <span className="inline-block rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary mb-6">
              Sobre Tecnera
            </span>
            <h1 className="text-4xl laptop:text-5xl font-extrabold leading-tight mb-6">
              Tecnología con propósito
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
              Somos un equipo de Mar del Plata, Argentina, dedicado a crear soluciones digitales que realmente sirven a las organizaciones que las usan.
            </p>
          </div>
        </section>

        {/* Historia */}
        <section className="py-24 bg-light dark:bg-dark">
          <div className="max-w-5xl mx-auto px-4 tablet:px-6 laptop:px-8">
            <div className="grid laptop:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-neutral dark:text-light mb-6">
                  ¿Por qué existe Tecnera?
                </h2>
                <p className="text-subtext dark:text-white/70 leading-relaxed mb-5">
                  Vimos que las organizaciones —mutuales, clubes, cooperativas— seguían gestionando todo con planillas de Excel y sistemas que nadie quería usar. Mientras tanto, sus socios esperaban la misma experiencia digital que tenían en otras áreas de su vida.
                </p>
                <p className="text-subtext dark:text-white/70 leading-relaxed">
                  Decidimos construir herramientas específicas para ese segmento: simples, rápidas de implementar y económicamente accesibles para organizaciones de cualquier tamaño.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary to-[#0A3D35] rounded-2xl p-10 text-white">
                <blockquote className="text-xl font-medium leading-relaxed italic">
                  &ldquo;La tecnología no debería ser un privilegio de las grandes empresas. Las organizaciones sociales merecen las mismas herramientas.&rdquo;
                </blockquote>
                <p className="mt-6 text-secondary font-semibold">— Equipo Tecnera</p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-24 bg-[#EAEAEA] dark:bg-[#0d2420]">
          <div className="max-w-7xl mx-auto px-4 tablet:px-6 laptop:px-8">
            <h2 className="text-3xl font-extrabold text-neutral dark:text-light text-center mb-12">
              Lo que nos guía
            </h2>
            <div className="grid tablet:grid-cols-2 laptop:grid-cols-4 gap-6">
              {[
                { icon: Target, title: "Foco en el cliente", desc: "Diseñamos pensando en el usuario final, no en las tendencias tecnológicas." },
                { icon: Users, title: "Cercanos", desc: "No somos un software anónimo. Estamos del otro lado del teléfono." },
                { icon: Zap, title: "Entrega rápida", desc: "Primeras versiones funcionales en semanas, no en meses." },
                { icon: Shield, title: "Confiables", desc: "Datos seguros, uptime garantizado, soporte después de la entrega." },
              ].map((value, i) => {
                const Icon = value.icon;
                return (
                  <div key={i} className="bg-white dark:bg-card-bg rounded-2xl p-8 shadow-sm text-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-neutral dark:text-light mb-2">{value.title}</h3>
                    <p className="text-sm text-subtext dark:text-white/60 leading-relaxed">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-light dark:bg-dark">
          <div className="max-w-4xl mx-auto px-4 tablet:px-6">
            <div className="grid grid-cols-3 gap-8 text-center">
              {[
                { number: "10+", label: "Organizaciones digitalizadas" },
                { number: "3", label: "Productos en producción" },
                { number: "MdP", label: "Equipo local, alcance regional" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-4xl laptop:text-5xl font-black text-secondary mb-2">{stat.number}</p>
                  <p className="text-sm text-subtext dark:text-white/60 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-[#00A478] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold mb-4">¿Hablamos?</h2>
            <p className="text-white/80 mb-8 text-lg">
              Contanos sobre tu organización y te ayudamos a encontrar la solución correcta.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PrimaryCTAButton source="nosotros_cta" />
              <WhatsappCTAButton source="nosotros_cta" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
