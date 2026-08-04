import { withBasePath } from "@/lib/basePath";
import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Workflow,
  RefreshCw,
  Lightbulb,
  Smartphone,
  BarChart3,
  Sparkles,
  Globe,
} from "lucide-react";

export type ServiceAccent = "primary" | "muted" | "amber" | "blue";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  accent: ServiceAccent;
  image?: string;
}

export const services: Service[] = [
  {
    icon: LayoutDashboard,
    title: "Software a medida",
    description: "Sistemas en donde tus operaciones y procesos reales se unifican en una única plataforma digital",
    bullets: [
      "Diseño adaptado a tus procesos, no al revés",
      "Plataformas multi-dispositivo para lograr un mayor nivel de integración con tu trabajo",
      "Conexión con servicios externos",
      "Escalabiliad, nuestras soluciones siempre se plantean para que crezcan a la par de tu negocio",
    ],
    accent: "primary",
    image: withBasePath("/images/services/service-1.png"),
  },
  {
    icon: Workflow,
    title: "Automatización de procesos",
    description: "Flujos automáticos que eliminan tareas repetitivas y conectan con tus herramientas existentes.",
    bullets: [
      "Sistematización de procesos manuales",
      "Flujos automáticos entre sistemas",
      "Notificaciones y alertas en tiempo real",
      "Interconectividad de servicios externos paralelos",
    ],
    accent: "muted",
    image: withBasePath("/images/services/service-2.png"),
  },
  {
    icon: RefreshCw,
    title: "Modernización de sistemas",
    description: "Contamos con soluciones prediseñadas para la migración de sistemas antiguos o la digitalización de tu negocio",
    bullets: [
      "Plataformas con módulos preconstruidos para que se adapten a tus necesidades",
      "Migración de información desde sistemas viejos o múltiples archivos sueltos",
      "Consolidación de información dispersa en un solo lugar",
      "Soluciones digitales de bajo costo para tu organización",
    ],
    accent: "amber",
    image: withBasePath("/images/services/service-3.png"),
  },
  {
    icon: Lightbulb,
    title: "Consultoría tecnológica",
    description: "Analizamos tu operación y te ayudamos a definir qué camino tiene sentido para tu organización.",
    bullets: [
      "Diagnóstico de tu operación actual",
      "Definición de prioridades tecnológicas",
      "Acompañamiento en la toma de decisiones",
      "Sugerencias en soluciones digitales que se ajusten a tu organización",
    ],
    accent: "blue",
    image: withBasePath("/images/services/service-4.png"),
  },
  {
    icon: Smartphone,
    title: "Desarrollo mobile",
    description: "Aplicaciones móviles nativas e híbridas que llevan tu operación al teléfono de tu equipo o tus clientes.",
    bullets: [
      "Apps nativas e híbridas para iOS y Android",
      "Misma información sincronizada con la plataforma web",
      "Útiles para su uso en campo y en movimiento",
      "Pensadas para dar mejores prestaciones a los clientes de tu servicio",
    ],
    accent: "primary",
    image: withBasePath("/images/services/service-5.png"),
  },
  {
    icon: BarChart3,
    title: "Dashboards y analítica",
    description: "Plataformas de análisis de datos: generá reportes automáticos y tomá decisiones basadas en datos reales.",
    bullets: [
      "Métricas clave visibles en tiempo real",
      "Reportes automáticos, sin planillas manuales",
      "Datos que anticipan decisiones, no solo las describen",
      "Monitoreo de indicadores relevantes para tu negocio",
    ],
    accent: "muted",
    image: withBasePath("/images/services/service-6.png"),
  },
  {
    icon: Sparkles,
    title: "Soluciones con IA",
    description: "Desarrollos con la inteligencia artificial como eje, liberá horas humanas de tareas repetitivas para hacer crecer tu negocio ",
    bullets: [
      "Automatización de tareas manuales complejas",
      "Agentes integrados con herramientas específicas para tu negocio",
      "Procesado inteligente de documentos",
      "Chatbots o asistentes virtuales entrenados con la información de tu negocio",
    ],
    accent: "amber",
    image: withBasePath("/images/services/service-7.png"),
  },
  {
    icon: Globe,
    title: "Infraestructura y presencia digital",
    description: "Registro de dominios, hosting y certificados SSL para asegurar la identidad digital de tu organización.",
    bullets: [
      "Registro y renovación de dominios",
      "Certificado SSL incluido",
      "Hosting y despliegue gestionado",
    ],
    accent: "blue",
    image: withBasePath("/images/services/service-8.png"),
  },
];
