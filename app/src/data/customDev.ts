export interface CustomDev {
  title: string;
  description: string;
  features: string[];
  image: string;
  ctaHref: string;
}

export const customDev: CustomDev = {
  title: "Desarrollo Personalizado",
  description:
    "Cuando tu organización necesita algo específico, diseñamos y desarrollamos soluciones digitales adaptadas a tus procesos reales.",
  features: [
    "Aplicaciones web a medida",
    "Dashboards y reportes",
    "Automatización de procesos",
    "Integración con bases de datos",
    "Digitalización de procesos",
    "Herramientas internas",
  ],
  image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  ctaHref: "/productos/custom",
};
