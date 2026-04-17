export interface HeroSlide {
  tagline: string;
  title: string;
  subtitle: string;
  image: string;
  ctaHref?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    tagline: "Soluciones digitales a medida",
    title: "Tu organizacion merece herramientas que funcionen",
    subtitle:
      "Diseñamos software que simplifica la gestion, mejora la comunicacion con tus socios y te permite enfocarte en lo que importa.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80",
    ctaHref: "/servicios",
  },
  {
    tagline: "Producto Tecnera",
    title: "Tus socios, siempre conectados",
    subtitle:
      "Una app simple y moderna para que tus afiliados gestionen turnos, pagos y consultas desde su celular, sin depender de nadie.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80",
    ctaHref: "/productos/app-socios",
  },
  {
    tagline: "Producto Tecnera",
    title: "Decisiones claras con informacion al instante",
    subtitle:
      "Nexo organiza tus datos, conecta tus sistemas y te muestra lo que necesitas saber, cuando lo necesitas. Sin complicaciones.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
    ctaHref: "/productos/nexo",
  },
];
