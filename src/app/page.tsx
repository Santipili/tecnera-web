      // app/page.tsx (o src/app/page.tsx)
// Wireframe visual para Tecnera - Next.js + Tailwind CSS
// - Secciones: Hero, Servicios, Soluciones, Casos, Nosotros, Precios, Contacto, Footer
// - Marcadores de posición (wireframe) con bordes discontinuos y placeholders
// - Navegación con anclas (#id) y CTA
// - Totalmente responsive

import Link from "next/link";
import {HomePageAlt} from "@/components/template";

export default function Home() {
  return (
    <div className="">
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
{/* titulo principal */}
      {/* <section className="flex flex-col justify-center items-center bg-gradient-to-b from-primary to-tertiary h-120 px-20">
        <h1 className="text-8xl font-bold text-secondary font-nunito text-center">Convierte tu empresa al mundo digital</h1>
      </section> */}
      <HomePageAlt />


    </div>
    </div>
  );
}
