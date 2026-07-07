"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/button";

const navLinks = [
  { href: "/productos", label: "Productos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/precios", label: "Precios" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    // <header className=" top-0 z-40 backdrop-blur bg-white/80 border-b border-neutral-200 transition-colors duration-300">
    <header className="bg-transparent top-0 z-40 backdrop-blur border-b border-neutral-200 transition-colors duration-300">
      <nav className="w-full px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/IMAGOTIPO_TECNERA_COLOR.png"
            alt="Tecnera Logo"
            width={250}
            height={60}
            priority
          />
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`transition-colors duration-200 font-medium ${
                  pathname.startsWith(link.href)
                    ? "text-secondary"
                    : "text-neutral  hover:text-secondary "
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">

          <Button label="Contacto" type="Contact" />

          {/* <button className="md:hidden inline-flex items-center justify-center rounded-lg border border-neutral-300 px-3 py-2 text-sm">
            Menú
          </button> */}

        </div>
      </nav>
    </header>
  );
}
