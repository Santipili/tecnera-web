import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/ui/ProductCard";

const products = [
  {
    title: "App para Socios",
    description: "Todo lo que tu organizacion necesita para modernizar la relacion con sus socios, en un solo lugar.",
    features: [
      "Tus socios gestionan turnos y pagos desde el celular",
      "Panel de administracion simple y visual",
      "Comunicacion directa, sin intermediarios",
      "Informacion actualizada en tiempo real",
    ],
    image: "/images/placeholders/product.svg",
  },
  {
    title: "Nexo",
    description: "Tu asistente inteligente que conecta datos, organiza informacion y te ayuda a tomar mejores decisiones.",
    features: [
      "Conecta tus sistemas sin reemplazarlos",
      "Respuestas inmediatas sobre tu informacion",
      "Reportes automaticos cuando los necesitas",
      "Interfaz simple, sin curva de aprendizaje",
    ],
    image: "/images/placeholders/product.svg",
  },
  {
    title: "Desarrollos Personalizados",
    description: "Creamos soluciones digitales a medida para resolver necesidades específicas de tu organización.",
    features: [
      "Sistemas internos e intranets corporativas",
      "Automatización de procesos y flujos de trabajo",
      "Integraciones con APIs y sistemas existentes",
      "Arquitectura escalable preparada para crecer",
    ],
    image: "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY2MDAzODE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export default function Products() {
  return (
    <section id="productos" className="py-24 bg-[#EAEAEA]">
      <div className="mx-auto max-w-7xl px-4 tablet:px-6 laptop:px-6">
        <SectionHeader
          tag="Productos"
          title="Soluciones listas para tu organizacion"
          description="Herramientas probadas que se adaptan a tu realidad. Implementacion rapida, resultados desde el primer dia."
          centered
        />
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8 max-w-4xl laptop:max-w-5xl desktop:max-w-7xl mx-auto">
          {products.map((product, i) => (
            <ProductCard
              key={i}
              title={product.title}
              description={product.description}
              features={product.features}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
