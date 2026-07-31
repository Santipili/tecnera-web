"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PrimaryCTAButton from "@/components/ui/PrimaryCTAButton";
import { withBasePath } from "@/lib/basePath";

const navLinks = [
  { href: "/#productos", label: "Productos" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-light/90 backdrop-blur border-b border-neutral-200 transition-colors duration-300">
      <nav className="w-full px-4 tablet:px-6 laptop:px-6 h-18 grid grid-cols-[auto_1fr_auto] items-center">
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src={withBasePath("/products/TECNERA/SVG/IMAGOTIPO_TECNERA_COLOR.svg")}
            alt="Tecnera"
            width={168}
            height={31}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <ul className="hidden laptop:flex items-center justify-center gap-8 text-base">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-bold uppercase tracking-wide text-sm transition-colors duration-200 ${
                  pathname.startsWith(link.href)
                    ? "text-primary"
                    : "text-neutral/60 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-self-end gap-3">
          <div className="hidden laptop:block">
            <PrimaryCTAButton source="header" variant="primary" label="Contacto" href="/contacto" />
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="laptop:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-neutral-200 text-primary"
          >
            <span className="sr-only">Menú</span>
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="laptop:hidden border-t border-neutral-200 bg-light px-4 tablet:px-6 py-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-3 text-base font-bold uppercase tracking-wide ${
                    pathname.startsWith(link.href) ? "text-primary" : "text-neutral/70"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <PrimaryCTAButton source="header-mobile" variant="primary" label="Contacto" href="/contacto" />
          </div>
        </div>
      )}
    </header>
  );
}
