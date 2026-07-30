import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import NeuralNetworkBackground from "@/components/ui/NeuralNetworkBackground";
import { FAQ } from "@/components/homeSections";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Tecnera",
  description: "Respuestas a las dudas más comunes sobre nuestros productos y servicios.",
};

export default function PreguntasFrecuentesPage() {
  return (
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10 bg-light">
        <div className="h-full w-full opacity-[0.75] pointer-events-none">
          <NeuralNetworkBackground className="h-full w-full" color="78, 209, 209" nodeCount={260} />
        </div>
      </div>
      <Header />
      <main>
        <FAQ />
      </main>
    </div>
  );
}
