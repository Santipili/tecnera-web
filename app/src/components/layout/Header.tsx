"use client";
import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/button";
import { useTheme } from "@/components/layout/ThemeProvider";

const navLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/productos", label: "Soluciones" },
  { href: "/casos", label: "Casos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/precios", label: "Precios" },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 dark:bg-dark/90 border-b border-neutral-200 dark:border-white/10 transition-colors duration-300">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/full_logo-transparente.png"
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
                    : "text-neutral dark:text-white/80 hover:text-secondary dark:hover:text-secondary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Button label="Contacto" type="Contact" />
          <button className="md:hidden inline-flex items-center justify-center rounded-lg border border-neutral-300 dark:border-white/20 px-3 py-2 text-sm dark:text-white/80">
            Menú
          </button>
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            className="h-9 w-9 rounded-full flex items-center justify-center border border-neutral-200 dark:border-white/20 hover:bg-neutral-100 dark:hover:bg-white/10 transition-all duration-200 cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-yellow-400" />
            ) : (
              <Moon className="h-4 w-4 text-neutral-600" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
