import { withBasePath } from "@/lib/basePath";
export interface CustomDev {
  title: string;
  kicker: string;
  description: string;
  features: string[];
  logo: string;
  ctaHref: string;
  ctaLabel: string;
}

export const customDev: CustomDev = {
  title: "Desarrollos a medida",
  kicker: "Desarrollo personalizado",
  description:
    "Cuando tu organización necesita algo específico, diseñamos y desarrollamos soluciones digitales adaptadas a tus procesos reales.",
  features: [
    "Aplicaciones web y dashboards a medida",
    "Automatización de procesos e integraciones",
    "Digitalización de lo que hoy es manual",
  ],
  logo: withBasePath("/products/TECNERA/SVG/IMAGOTIPO_TECNERA_COLOR.svg"),
  ctaHref: "/productos/custom",
  ctaLabel: "Más detalles",
};
