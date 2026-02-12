"use client";
import Image from "next/image";
import Button from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-neutral-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            className="dark"
            src="/full_logo-transparente.png"
            alt="Tecnera Logo"
            width={250}
            height={60}
            priority
          />
        </div>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><a href="#servicios" className="hover:text-teal-700 transition">Servicios</a></li>
          <li><a href="#soluciones" className="hover:text-teal-700 transition">Soluciones</a></li>
          <li><a href="#casos" className="hover:text-teal-700 transition">Casos</a></li>
          <li><a href="#nosotros" className="hover:text-teal-700 transition">Nosotros</a></li>
          <li><a href="#precios" className="hover:text-teal-700 transition">Precios</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <Button label="Contacto" type="Contact" />
          <button className="md:hidden inline-flex items-center justify-center rounded-lg border border-neutral-300 px-3 py-2 text-sm">Menú</button>
        </div>
      </nav>
    </header>
  );
}