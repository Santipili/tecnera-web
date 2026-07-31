"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, CONTACT_EMAIL } from "@/data/contact";
import { withBasePath } from "@/lib/basePath";

const productLinks = [
  { label: "Mannaz — CRM de afiliados", href: "/productos/mannaz" },
  { label: "Odal — ERP de operaciones", href: "/productos/odal" },
  { label: "Desarrollos a medida", href: "/productos/custom" },
  { label: "Ver todos los productos", href: "/#productos" },
];

const companyLinks = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Casos de éxito", href: "/casos" },
];

function FooterLinkGroup({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-widest text-secondary">{title}</h4>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-white/70 hover:text-secondary transition-colors duration-200">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral text-white">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-6 py-16">
        <div className="grid grid-cols-1 tablet:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div className="lg:col-span-1">
            <Image
              src={withBasePath("/products/TECNERA/imagotipo-tecnera-blanco.png")}
              alt="Tecnera"
              width={168}
              height={31}
              className="h-8 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm text-white/70 leading-relaxed">
              Software para organizaciones: CRM de afiliados, ERP de operaciones y desarrollos a medida.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-secondary hover:text-primary transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-secondary hover:text-primary transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <FooterLinkGroup title="Productos" links={productLinks} />
          <FooterLinkGroup title="Empresa" links={companyLinks} />

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-secondary">Contacto</h4>
            <div className="mt-5 space-y-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-white/70 hover:text-secondary transition-colors duration-200"
              >
                <Phone className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>+54 223 5 254045</span>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-start gap-3 text-sm text-white/70 hover:text-secondary transition-colors duration-200"
              >
                <Mail className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>{CONTACT_EMAIL}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Mar del Plata, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60 text-center md:text-left">
            © {currentYear} Tecnera. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
