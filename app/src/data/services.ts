import { Globe, Smartphone, Monitor, LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: "purple" | "orange" | "pink";
}

export const services: Service[] = [
  {
    icon: Globe,
    title: "Aplicaciones web",
    description:
      "Plataformas a medida, rápidas y simples de usar, pensadas para crecer con tu organización.",
    accent: "purple",
  },
  {
    icon: Smartphone,
    title: "Apps mobile",
    description:
      "Aplicaciones para iOS y Android que le ponen tecnología al bolsillo de tus usuarios.",
    accent: "orange",
  },
  {
    icon: Monitor,
    title: "Software desktop",
    description:
      "Herramientas de escritorio robustas para procesos internos que necesitan control total.",
    accent: "pink",
  },
];
