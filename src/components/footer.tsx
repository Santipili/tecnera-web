"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // se agrega el año en la declaracion de derechos reservados

  return (
    <footer className="bg-gradient-to-br from-[#005647] via-[#0A3D35] to-[#005647] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo y descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#00DBA0] rounded-lg flex items-center justify-center">
                <span className="text-[#005647] text-2xl">T</span>
              </div>
              <div>
                <h3 className="text-2xl">Tecnera</h3>
                <p className="text-sm text-gray-300">Soluciones Digitales</p>
              </div>
            </div>
            <p className="text-gray-100 mb-6 leading-relaxed">
              Plataforma SaaS diseñada para cooperativas, mutuales y sindicatos en LATAM.
              Gestiona tus afiliados de forma simple, segura y profesional.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5492235254045"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#00DBA0] rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:contacto@tecnera.com"
                className="w-10 h-10 bg-white/10 hover:bg-[#00DBA0] rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg mb-6">Contacto</h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/5492235254045"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-200 hover:text-[#00DBA0] transition-colors duration-200"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+54 223 5 254045</span>
              </a>
              <a
                href="mailto:contacto@tecnera.com"
                className="flex items-start gap-3 text-gray-200 hover:text-[#00DBA0] transition-colors duration-200"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>contacto@tecnera.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-200">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Mar del Plata, Argentina</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-lg mb-6">Enlaces</h4>
            <div className="space-y-3">
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><Link href="#inicio" className="block text-gray-200 hover:text-[#00DBA0] transition-colors duration-200">Inicio</Link></li>
                <li><Link href="#funcionalidades" className="block text-gray-200 hover:text-[#00DBA0] transition-colors duration-200">Funcionalidades</Link></li>
                <li><Link href="#faq" className="block text-gray-200 hover:text-[#00DBA0] transition-colors duration-200">Preguntas frecuentes</Link></li>
                <li><Link href="/legal" className="block text-gray-200 hover:text-[#00DBA0] transition-colors duration-200">Legal</Link></li>
                <li><Link href="/privacidad" className="block text-gray-200 hover:text-[#00DBA0] transition-colors duration-200">Privacidad</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300 text-center md:text-left">
              © {currentYear} Tecnera - Soluciones Digitales. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <a href="#privacidad" className="hover:text-[#00DBA0] transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="#terminos" className="hover:text-[#00DBA0] transition-colors duration-200">
                Términos de Uso
              </a>
              <a href="#cookies" className="hover:text-[#00DBA0] transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
