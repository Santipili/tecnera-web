import type { LucideIcon } from "lucide-react";
import { Smartphone, BarChart3, Workflow, Zap, Link, Upload } from "lucide-react";

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export const features: Feature[] = [
  {
    icon: Smartphone,
    title: "Aplicaciones moviles",
    description: "Tu servicio en el bolsillo de tus socios. Accesible, rapido y disponible las 24 horas.",
    color: "from-[#005647] to-[#00A478]",
  },
  {
    icon: BarChart3,
    title: "Dashboard y reportes",
    description: "Visualiza métricas clave, genera reportes automáticos y toma decisiones basadas en datos reales.",
    color: "from-[#0095C7] to-[#0095C7]/70",
  },
  {
    icon: Workflow,
    title: "Automatizacion de procesos",
    description: "Lo que hoy te toma horas, resolvelo en minutos. Menos tareas repetitivas, mas tiempo para lo importante.",
    color: "from-[#00A478] to-[#00DBA0]",
  },
  {
    icon: Zap,
    title: "Integraciones",
    description: "Conecta con WhatsApp y email para comunicarte directamente desde la plataforma.",
    color: "from-[#F47C20] to-[#F47C20]/70",
  },
  {
    icon: Link,
    title: "Registro de dominios",
    description: "Asegura la identidad digital de tu organizacion. Registro, renovacion y certificado SSL incluido.",
    color: "from-[#0A3D35] to-[#005647]",
  },
  {
    icon: Upload,
    title: "Migración desde CSV",
    description: "Importa tus afiliados existentes desde archivos Excel o CSV en minutos. Sin pérdida de datos.",
    color: "from-[#00DBA0] to-[#00A478]",
  },
];
