export interface Product {
  title: string;
  slug: string;
  description: string;
  features: string[];
  image: string;
  href: string;
}

export const products: Product[] = [
  {
    title: "App para Socios",
    slug: "app-socios",
    description:
      "Todo lo que tu organizacion necesita para modernizar la relacion con sus socios, en un solo lugar.",
    features: [
      "Tus socios gestionan turnos y pagos desde el celular",
      "Panel de administracion simple y visual",
      "Comunicacion directa, sin intermediarios",
      "Informacion actualizada en tiempo real",
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    href: "/productos/app-socios",
  },
  {
    title: "Nexo",
    slug: "nexo",
    description:
      "Tu asistente inteligente que conecta datos, organiza informacion y te ayuda a tomar mejores decisiones.",
    features: [
      "Conecta tus sistemas sin reemplazarlos",
      "Respuestas inmediatas sobre tu informacion",
      "Reportes automaticos cuando los necesitas",
      "Interfaz simple, sin curva de aprendizaje",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    href: "/productos/nexo",
  },
  {
    title: "Desarrollos Personalizados",
    slug: "custom",
    description:
      "Creamos soluciones digitales a medida para resolver necesidades específicas de tu organización.",
    features: [
      "Sistemas internos e intranets corporativas",
      "Automatización de procesos y flujos de trabajo",
      "Integraciones con APIs y sistemas existentes",
      "Arquitectura escalable preparada para crecer",
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    href: "/productos/custom",
  },
];
