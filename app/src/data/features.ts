import type { LucideIcon } from "lucide-react";
import { BarChart3, Workflow, Link, Upload } from "lucide-react";

export type FeatureAccent = "primary" | "muted" | "amber" | "blue";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: FeatureAccent;
}

export const features: Feature[] = [
  {
    icon: BarChart3,
    title: "Dashboard y reportes",
    description: "Visualizá métricas clave, generá reportes automáticos y tomá decisiones basadas en datos reales.",
    accent: "amber",
  },
  {
    icon: Workflow,
    title: "Automatización de procesos",
    description: "Lo que hoy te toma horas, resolvelo en minutos. Menos tareas repetitivas, más tiempo para lo importante.",
    accent: "muted",
  },
  {
    icon: Link,
    title: "Registro de dominios",
    description: "Asegurá la identidad digital de tu organización. Registro, renovación y certificado SSL incluido.",
    accent: "primary",
  },
  {
    icon: Upload,
    title: "Migración desde Excel",
    description: "Importá tus afiliados existentes desde archivos Excel en minutos. Sin pérdida de datos.",
    accent: "blue",
  },
];
