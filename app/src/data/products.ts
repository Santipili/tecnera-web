import { withBasePath } from "@/lib/basePath";
export interface Product {
  title: string;
  slug: string;
  kicker: string;
  description: string;
  features: string[];
  image: string;
  href: string;
  logo: string;
  ctaLabel: string;
}

export const products: Product[] = [
  {
    title: "Mannaz",
    slug: "mannaz",
    kicker: "CRM de afiliados",
    description:
      "CRM para gestionar afiliados, campañas, visitas y datos institucionales en un solo lugar.",
    features: [
      "Centralizá la información de cada afiliado o miembro",
      "Gestioná visitas, campañas y segmentaciones",
      "Organizá zonas, grupos y acciones institucionales",
      "Reemplazá planillas y mensajes dispersos por datos ordenados",
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    href: "/productos/mannaz",
    logo: withBasePath("/products/MANNAZ/SVG/IMAGOTIPO_MANNAZ_COLOR.svg"),
    ctaLabel: "Más detalles",
  },
  {
    title: "Odal",
    slug: "odal",
    kicker: "ERP de operaciones",
    description:
      "ERP para ordenar operaciones, reclamos, mantenimientos, presupuestos y equipos de trabajo.",
    features: [
      "Administrá reclamos y órdenes de trabajo de punta a punta",
      "Llevá el registro de clientes, edificios y técnicos",
      "Generá presupuestos e inspecciones sin planillas sueltas",
      "Seguimiento claro del estado de cada tarea",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    href: "/productos/odal",
    logo: withBasePath("/products/ODAL/imagotipo-odal-color.png"),
    ctaLabel: "Más detalles",
  },
];
