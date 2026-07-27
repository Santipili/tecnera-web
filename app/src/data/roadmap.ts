import type { LucideIcon } from "lucide-react";
import { MessageSquare, Smartphone, Receipt, Sparkles, Bot, TrendingUp } from "lucide-react";

export interface RoadmapItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const upcomingModules: RoadmapItem[] = [
  {
    icon: MessageSquare,
    title: "Servicio de mensajeria interna integrada",
    description: "Chat propio dentro de la plataforma, sin depender de WhatsApp, para toda tu operación.",
  },
  {
    icon: Smartphone,
    title: "Version mobile para cada plataforma",
    description: "Las aplicaciones disponibles también desde el celular, con la misma información al día.",
  },
  {
    icon: Receipt,
    title: "Modulo de facturacion integral",
    description: "Módulo de facturación integrado, transversal a todas las plataformas.",
  },
];

export const aiValue: RoadmapItem[] = [
  {
    icon: Sparkles,
    title: "Automatizacion inteligente de procesos repetitivos complejos",
    description: "Procesos que hoy son manuales, resueltos automáticamente con IA.",
  },
  {
    icon: Bot,
    title: "Desarollo de agentes con herramientas especificas para tus necesidades",
    description: "Respuestas y gestiones automáticas para tus clientes y equipos, las 24 horas.",
  },
  {
    icon: TrendingUp,
    title: "Procesamiento inteligente de documentos",
    description: "Datos que anticipan decisiones, en lugar de solo describir lo que ya pasó.",
  },
];
