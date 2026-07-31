import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import SectionHeader from "@/components/ui/SectionHeader";
import PrimaryCTAButton from "@/components/ui/PrimaryCTAButton";
import WhatsappCTAButton from "@/components/ui/WhatsappCTAButton";
import DevelopmentNetworkDiagram from "@/components/ui/DevelopmentNetworkDiagram";
import ContactAndServicesSplit from "@/components/ui/ContactAndServicesSplit";
import NeuralNetworkBackground from "@/components/ui/NeuralNetworkBackground";
import { customDev as product } from "@/data/customDev";
import {
  Rocket,
  MessageCircle,
  FileText,
  PenTool,
  Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Desarrollos Personalizados | Tecnera",
  description: "Creamos software a medida para resolver las necesidades específicas de tu organización.",
};

export default function CustomPage() {
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
        <section className="relative overflow-hidden pt-16 pb-12 tablet:pt-24 tablet:pb-16 laptop:pt-36">
          <div className="relative z-10 max-w-[90rem] mx-auto px-4 tablet:px-6 laptop:px-6">
            <div className="grid gap-4 tablet:gap-8 laptop:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] laptop:gap-12 items-center">
              {/* Logo */}
              <div className="flex justify-center laptop:justify-start">
                <Image
                  src={product.logo}
                  alt={product.title}
                  width={420}
                  height={78}
                  className="w-56 tablet:w-64 laptop:w-[26rem] h-auto flex-shrink-0 laptop:-translate-x-16"
                />
              </div>

              {/* Texto */}
              <div className="ml-auto w-full max-w-2xl">
                <p className="text-neutral text-lg tablet:text-xl font-bold leading-relaxed">
                  Llega un momento en el cual el uso de las herramientas comunes no satisface las
                  necesidades de tu trabajo, para ello somos capaces de desarrollar soluciones
                  digitales que se adapten a tus flujos y problemáticas a la medida.
                </p>
              </div>
            </div>

            <div className="grid laptop:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] laptop:gap-12 mt-4 tablet:mt-6">
              <div className="hidden laptop:block" />
              <div className="ml-auto w-full max-w-2xl flex flex-wrap gap-4">
                <PrimaryCTAButton source="custom_hero" variant="primary" label="Contanos tu proyecto" />
                <WhatsappCTAButton source="custom_hero" />
              </div>
            </div>
          </div>
        </section>

        {/* Cada desarrollo es distinto */}
        <section className="py-24">
          <div className="max-w-[90rem] mx-auto px-4 tablet:px-6 laptop:px-6">
            <SectionHeader
              tag="Desarrollo a medida"
              title="Cada desarrollo es distinto"
              description="No hay dos proyectos iguales. Tomamos lo disperso de tu operación y lo convertimos en una sola solución pensada para tu forma de trabajar."
              centered
              emphasize
              icon
              titleSizeClass="text-3xl tablet:text-4xl laptop:text-5xl"
              descriptionSizeClass="text-lg tablet:text-xl"
            />
            <div className="laptop:w-[90%] laptop:mr-auto">
              <DevelopmentNetworkDiagram />
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="py-24">
          <div className="max-w-[90rem] mx-auto px-4 tablet:px-6 laptop:px-6">
            <SectionHeader
              tag="Desarrollo a medida"
              title="Así se construye un desarrollo a medida"
              description="Desde el primer contacto hasta el acompañamiento posterior, este es el camino que recorremos junto a cada cliente."
              centered
              emphasize
              icon
              titleSizeClass="text-3xl tablet:text-4xl laptop:text-5xl"
              descriptionSizeClass="text-lg tablet:text-xl"
            />
            <div className="relative">
              <div className="hidden tablet:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-primary/15" />
              <div className="flex flex-col gap-10 tablet:gap-14">
                {[
                  { icon: MessageCircle, title: "Primer contacto y relevamiento", desc: "Nos reunimos con vos para entender tu operación real: qué procesos usás hoy, qué te frena y qué resultado esperás.", box: "bg-primary" },
                  { icon: FileText, title: "Propuesta y presupuesto", desc: "Definimos el alcance de la solución, los tiempos de entrega y el presupuesto, sin letra chica ni sorpresas.", box: "bg-primary" },
                  { icon: PenTool, title: "Diseño y validación", desc: "Diseñamos la solución y la validamos con vos antes de escribir una sola línea de código definitiva.", box: "bg-primary" },
                  { icon: Code2, title: "Desarrollo iterativo", desc: "Construimos por etapas con entregas frecuentes, para que veas el avance real desde la primera semana.", box: "bg-primary" },
                  { icon: Rocket, title: "Lanzamiento y acompañamiento", desc: "Implementamos, capacitamos a tu equipo y seguimos disponibles después de la entrega, no solo durante el proyecto.", box: "bg-primary" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  const isEven = i % 2 === 0;
                  const card = (
                    <div className="w-full tablet:w-[calc(50%-2.5rem)] min-h-[13rem] bg-white rounded-2xl p-9 shadow-sm relative overflow-hidden flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-14 h-14 flex-shrink-0 rounded-xl flex items-center justify-center ${item.box}`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg tablet:text-xl font-bold text-neutral">{item.title}</h3>
                      </div>
                      <p className="text-subtext text-sm tablet:text-base leading-relaxed">{item.desc}</p>
                    </div>
                  );
                  return (
                    <div key={i} className="relative flex items-center">
                      <div className="hidden tablet:flex absolute left-1/2 -translate-x-1/2 z-10 h-14 w-14 items-center justify-center rounded-full bg-primary text-white text-lg tablet:text-xl font-extrabold shadow-lg shadow-black/20">
                        {i + 1}
                      </div>
                      <div className={`w-full flex ${isEven ? "tablet:justify-start" : "tablet:justify-end"}`}>
                        {card}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contacto y Servicios */}
        <section className="py-24">
          <div className="max-w-[90rem] mx-auto px-4 tablet:px-6 laptop:px-6">
            <ContactAndServicesSplit />
          </div>
        </section>

      </main>
    </div>
  );
}
