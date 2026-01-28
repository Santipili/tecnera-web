import Image from "next/image";
import Button from "@/components/ui/button";

export default function Header() {
    return (
        // <header className="flex flex-row justify-between p-4 mx-8 items-center">
            
        //     <ol className="flex flex-row gap-16 justify-center items-center">
        //         <li>servicios</li>
        //         <li>nosotros</li>
        //         <li>precios</li>
        //     </ol>
        //     
        // </header>
         <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-neutral-200">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* <div className="h-9 w-9 rounded-lg border border-dashed border-neutral-300 flex items-center justify-center text-xs">Logo</div> */}
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
            {/* <a href="#contacto" className="inline-flex items-center rounded-full border border-teal-600 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-50">Contacto</a> */}
            <Button label="Contacto" type="Contact" />
            <button className="md:hidden inline-flex items-center justify-center rounded-lg border border-neutral-300 px-3 py-2 text-sm">Menú</button>
          </div>
        </nav>
      </header>
    );
}