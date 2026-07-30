export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  label: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "general",
    label: "Preguntas generales",
    items: [
      {
        question: "¿Como puedo migrar mi informacion a las plataformas?",
        answer:
          "Tecnera permite importar tu base de datos actual desde archivos Excel. Nuestro sistema mapea automáticamente los campos y valida la información para garantizar una migración sin errores. El proceso toma solo minutos y conservas todo tu historial, en caso de que lo necesites te podemos asistir con la migracion de tu informacion.",
      },
      {
        question: "¿Cuanto tiempo lleva tener algo funcionando?",
        answer:
          "Depende del alcance, pero en muchos casos podes tener una primera version funcional en pocas semanas. Trabajamos con entregas progresivas para que veas avances desde el inicio.",
      },
      {
        question: "¿Que pasa despues de la entrega?",
        answer:
          "Te seguimos acompañando. Ofrecemos soporte tecnico, mantenimiento y mejoras continuas para que tu solucion evolucione junto con tu organizacion.",
      },
      {
        question: "¿Es solo para organizaciones grandes?",
        answer:
          "No. Trabajamos con mutuales, clubes, colegios profesionales y organizaciones de distintos tamaños. Adaptamos cada solucion a tu realidad y presupuesto.",
      },
      {
        question: "¿Qué pasa si ya tengo un sistema?",
        answer:
          "No hay problema. Podemos trabajar en paralelo durante un período de transición para que migres de manera gradual. También ofrecemos capacitación para tu equipo y asistencia técnica durante todo el proceso. Muchas organizaciones comienzan con una prueba piloto antes de migrar completamente.",
      },
    ],
  },
  {
    id: "mannaz",
    label: "Mannaz",
    items: [
      {
        question: "¿Qué tipo de organizaciones usan Mannaz?",
        answer:
          "Mannaz está pensado para mutuales, sindicatos, cooperativas y organizaciones con socios o afiliados que necesitan centralizar su información institucional.",
      },
      {
        question: "¿Puedo cargar mis afiliados existentes?",
        answer:
          "Sí, podés importar tu base de afiliados desde Excel en minutos, sin pérdida de datos y con validación automática de la información.",
      },
      {
        question: "¿Mannaz permite gestionar campañas y visitas?",
        answer:
          "Sí, Mannaz centraliza la gestión de visitas, campañas y segmentaciones, además de zonas, grupos y acciones institucionales en un solo lugar.",
      },
      {
        question: "¿Cuánto cuesta Mannaz?",
        answer:
          "El costo depende de la cantidad de usuarios y el alcance de tu operación. Contactanos y armamos una propuesta a medida de tu organización.",
      },
    ],
  },
  {
    id: "odal",
    label: "Odal",
    items: [
      {
        question: "¿Para qué tipo de empresas está pensado Odal?",
        answer:
          "Odal es un ERP pensado para empresas de servicios técnicos y mantenimiento que necesitan ordenar reclamos, órdenes de trabajo, presupuestos y equipos de trabajo.",
      },
      {
        question: "¿Cuál es la diferencia entre el plan Básico y el Avanzado?",
        answer:
          "El plan Básico incluye reclamos, órdenes de trabajo, clientes, proveedores y presupuestos. El Avanzado suma gestión de inventario y stock, depósitos, movimientos, transferencias y monitoreo de actividad en plataforma.",
      },
      {
        question: "¿Puedo pedir un módulo hecho a medida dentro de Odal?",
        answer:
          "Sí, el plan Personalizado parte de un plan Básico o Avanzado y le suma la adaptación de módulos existentes o la creación de módulos nuevos según tu necesidad puntual.",
      },
      {
        question: "¿El precio varía según la cantidad de usuarios?",
        answer:
          "Sí, los planes Básico y Avanzado tienen precios diferenciados según la cantidad de usuarios que necesites. Consultanos si tu equipo supera los rangos publicados.",
      },
    ],
  },
  {
    id: "custom",
    label: "Desarrollos a medida",
    items: [
      {
        question: "¿Cuándo conviene un desarrollo a medida en vez de Mannaz u Odal?",
        answer:
          "Cuando tu operación tiene una necesidad muy específica que no encaja en un producto ya armado. Ahí diseñamos y desarrollamos una solución adaptada a tus procesos reales.",
      },
      {
        question: "¿Cómo empieza el proceso?",
        answer:
          "Con un primer contacto y relevamiento de tu operación, seguido de una propuesta y presupuesto claro, sin letra chica. Después viene el diseño, el desarrollo iterativo y el acompañamiento posterior.",
      },
      {
        question: "¿Puedo ver avances antes de que termine el proyecto?",
        answer:
          "Sí, trabajamos con desarrollo iterativo y entregas frecuentes, así que ves el avance real desde la primera semana.",
      },
      {
        question: "¿El acompañamiento termina cuando entregan el desarrollo?",
        answer:
          "No. Implementamos, capacitamos a tu equipo y seguimos disponibles después de la entrega, no solo durante el proyecto.",
      },
    ],
  },
  {
    id: "servicios",
    label: "Servicios",
    items: [
      {
        question: "¿Qué servicios digitales ofrece Tecnera además de sus productos?",
        answer:
          "Ofrecemos software a medida, automatización de procesos, modernización de sistemas legacy, consultoría tecnológica, desarrollo mobile, dashboards y analítica, soluciones con IA e infraestructura digital.",
      },
      {
        question: "¿Puedo contratar solo consultoría sin desarrollo?",
        answer:
          "Sí, hacemos consultoría tecnológica independiente: diagnosticamos tu operación actual y te ayudamos a definir prioridades, sin que eso implique necesariamente un desarrollo.",
      },
      {
        question: "¿Desarrollan aplicaciones móviles?",
        answer:
          "Sí, desarrollamos apps nativas e híbridas para iOS y Android, sincronizadas con la misma información que tu plataforma web.",
      },
      {
        question: "¿Qué incluye la infraestructura y presencia digital?",
        answer:
          "Registro y renovación de dominios, certificado SSL y hosting con despliegue gestionado, para asegurar la identidad digital de tu organización.",
      },
    ],
  },
];
