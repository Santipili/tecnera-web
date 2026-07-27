export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
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
];
