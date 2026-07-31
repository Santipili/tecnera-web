import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import NeuralNetworkBackground from "@/components/ui/NeuralNetworkBackground";
import SectionHeader from "@/components/ui/SectionHeader";
import { Target, Users, Zap, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Nosotros | Tecnera",
  description: "Somos un equipo de Mar del Plata dedicado a crear soluciones digitales para organizaciones de LATAM.",
};

export default function NosotrosPage() {
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
        <section className="py-24 text-neutral">
          <div className="max-w-4xl mx-auto px-4 tablet:px-6 laptop:px-6">
            <SectionHeader
              tag="Sobre Tecnera"
              title="Tecnología con propósito"
              description="Somos un equipo de Mar del Plata, Argentina, dedicado a crear soluciones digitales que realmente sirven a las organizaciones que las usan."
              centered
              emphasize
              icon
              titleSizeClass="text-3xl tablet:text-4xl laptop:text-5xl"
              descriptionSizeClass="text-lg tablet:text-xl"
            />
          </div>
        </section>

        {/* Historia */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 tablet:px-6 laptop:px-6">
            <SectionHeader
              tag="Nuestra historia"
              title="¿Por qué existe Tecnera?"
              centered
              emphasize
              icon
            />
            <div className="grid laptop:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-subtext leading-relaxed mb-5">
                  Vimos que las organizaciones —mutuales, clubes, cooperativas— seguían gestionando todo con planillas de Excel y sistemas que nadie quería usar. Mientras tanto, sus socios esperaban la misma experiencia digital que tenían en otras áreas de su vida.
                </p>
                <p className="text-subtext leading-relaxed">
                  Decidimos construir herramientas específicas para ese segmento: simples, rápidas de implementar y económicamente accesibles para organizaciones de cualquier tamaño.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary to-[#0A3D35] rounded-2xl p-10 text-white">
                <blockquote className="text-lg tablet:text-xl font-medium leading-relaxed italic">
                  &ldquo;La tecnología no debería ser un privilegio de las grandes empresas. Las organizaciones sociales merecen las mismas herramientas.&rdquo;
                </blockquote>
                <p className="mt-6 text-secondary font-semibold">— Equipo Tecnera</p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-24">
          <div className="max-w-[90rem] mx-auto px-4 tablet:px-6 laptop:px-6">
            <SectionHeader
              tag="Nuestros valores"
              title="Lo que nos guía"
              centered
              emphasize
              icon
            />
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
              {[
                { icon: Target, title: "Foco en el cliente", desc: "Diseñamos pensando en el usuario final, no en las tendencias tecnológicas.", box: "bg-primary" },
                { icon: Users, title: "Cercanos", desc: "No somos un software anónimo. Estamos del otro lado del teléfono.", box: "bg-primary" },
                { icon: Zap, title: "Entrega rápida", desc: "Primeras versiones funcionales en semanas, no en meses.", box: "bg-primary" },
                { icon: Shield, title: "Confiables", desc: "Datos seguros, uptime garantizado, soporte después de la entrega.", box: "bg-primary" },
              ].map((value, i) => {
                const Icon = value.icon;
                return (
                  <div
                    key={i}
                    className="rounded-[2rem] border border-primary/10 bg-white px-8 py-6 shadow-lg shadow-black/30 hover:border-secondary/40 transition-all duration-300"
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${value.box}`}>
                      <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="mt-6 text-lg tablet:text-xl font-extrabold text-neutral">{value.title}</h3>
                    <p className="mt-3 text-base text-subtext leading-relaxed">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 tablet:px-6">
            <div className="grid grid-cols-3 gap-3 tablet:gap-8 text-center">
              {[
                { number: "10+", label: "Organizaciones digitalizadas" },
                { number: "3", label: "Productos en producción" },
                { number: "MdP", label: "Equipo local, alcance regional" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl tablet:text-4xl laptop:text-5xl font-black text-primary mb-2">{stat.number}</p>
                  <p className="text-base text-subtext leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
