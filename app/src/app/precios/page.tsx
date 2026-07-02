import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import PrimaryCTAButton from "@/components/ui/PrimaryCTAButton";
import WhatsappCTAButton from "@/components/ui/WhatsappCTAButton";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Precios | Tecnera",
  description: "Planes accesibles para organizaciones de cualquier tamaño.",
};

const plans = [
  {
    name: "Starter",
    price: "A consultar",
    desc: "Para organizaciones pequeñas que quieren dar sus primeros pasos digitales.",
    features: ["Hasta 500 socios", "Mannaz", "Panel de administración", "Soporte por email"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "A consultar",
    desc: "Para organizaciones en crecimiento que necesitan más capacidad y automatización.",
    features: ["Socios ilimitados", "Mannaz + Odal", "Integraciones con sistemas existentes", "Reportes automáticos", "Soporte prioritario"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "A medida",
    desc: "Para organizaciones con necesidades específicas que requieren desarrollo personalizado.",
    features: ["Todo lo del plan Pro", "Desarrollos a medida", "SLA garantizado", "Gerente de cuenta dedicado", "Capacitación in situ"],
    highlight: false,
  },
];

export default function PreciosPage() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main>
        {/* Hero */}
        <section className="py-24 bg-gradient-to-br from-primary via-[#0A3D35] to-primary text-white">
          <div className="max-w-4xl mx-auto px-4 tablet:px-6 laptop:px-8 text-center">
            <span className="inline-block rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary mb-6">
              Precios
            </span>
            <h1 className="text-4xl laptop:text-5xl font-extrabold leading-tight mb-6">
              Planes para cada organización
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Precios accesibles y transparentes. Sin costos ocultos, sin contratos eternos.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="py-24 bg-light">
          <div className="max-w-6xl mx-auto px-4 tablet:px-6 laptop:px-8">
            <div className="grid tablet:grid-cols-3 gap-8">
              {plans.map((plan, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-8 shadow-lg relative flex flex-col ${
                    plan.highlight
                      ? "bg-gradient-to-br from-primary to-[#0A3D35] text-white ring-2 ring-secondary"
                      : "bg-white"
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-primary text-xs font-bold px-4 py-1 rounded-full">
                      Más popular
                    </span>
                  )}
                  <div className="mb-8">
                    <h3 className={`text-xl font-extrabold mb-2 ${plan.highlight ? "text-white" : "text-neutral"}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-2xl font-black mb-3 ${plan.highlight ? "text-secondary" : "text-primary"}`}>
                      {plan.price}
                    </p>
                    <p className={`text-sm leading-relaxed ${plan.highlight ? "text-white/70" : "text-subtext"}`}>
                      {plan.desc}
                    </p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, j) => (
                      <li key={j} className={`flex items-start gap-3 text-sm ${plan.highlight ? "text-white/90" : "text-neutral"}`}>
                        <Check className={`h-4 w-4 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-secondary" : "text-secondary"}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3">
                    <PrimaryCTAButton source={`precios_${plan.name.toLowerCase()}`} label="Consultar precio" />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-subtext mt-10">
              Todos los precios son orientativos y se definen según las necesidades de cada organización.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-[#00A478] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-extrabold mb-4">¿No encontrás lo que buscás?</h2>
            <p className="text-white/80 mb-8 text-lg">
              Armamos propuestas a medida. Contanos tu caso y te respondemos en menos de 24 horas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PrimaryCTAButton source="precios_cta" />
              <WhatsappCTAButton source="precios_cta" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
