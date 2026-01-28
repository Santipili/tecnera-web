import Link from "next/link";

export default function Footer() {

    return (
        // <footer  className="">
        //     <div className="flex flex-row justify-center items-center h-12 bg-neutral">
        //     <p className="text-center text-light">Todos los derechos reservados © Tecnera 2025 </p>
        //     </div>
        // </footer>
              <footer className="bg-[#0A3D35] border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="h-9 w-9 rounded-lg border border-white/30 flex items-center justify-center text-[10px]">Logo</div>
            <p className="mt-3 text-sm text-white/70">Innovación en soluciones digitales.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Empresa</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
              <li><a href="#soluciones" className="hover:text-white">Soluciones</a></li>
              <li><a href="#casos" className="hover:text-white">Casos</a></li>
              <li><a href="#precios" className="hover:text-white">Precios</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Recursos</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/legal" className="hover:text-white">Legal</Link></li>
              <li><Link href="/privacidad" className="hover:text-white">Privacidad</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Contacto</h4>
            <p className="mt-3 text-sm text-white/70">contacto@tecnera.com</p>
            <p className="text-sm text-white/70">Mar del Plata, AR</p>
          </div>
        </div>
        <div className="border-t border-white/10">
          <p className="text-xs text-white/60 text-center py-4">© Tecnera {new Date().getFullYear()} – Todos los derechos reservados.</p>
        </div>
      </footer>
    );
}