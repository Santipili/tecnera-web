import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import WhatsappCTAButton from "@/components/ui/WhatsappCTAButton";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contacto | Tecnera",
  description: "Contanos tu idea. Te respondemos por WhatsApp o email.",
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-background pt-36 tablet:pt-44">
      <section className="px-4 pb-16 text-center tablet:px-6 laptop:px-8">
        <div className="mx-auto max-w-2xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-pink" />
            Contacto
          </span>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground tablet:text-5xl">
            Hablemos de tu idea
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-gray-500">
            Contanos qué necesitás. Te respondemos en menos de 24 horas.
          </p>
        </div>
      </section>

      <section className="px-4 pb-24 tablet:px-6 laptop:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 laptop:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <div className="flex flex-col justify-between rounded-3xl bg-gray-50 p-8">
            <div>
              <h2 className="text-xl font-bold text-foreground">La vía más rápida</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Escribinos por WhatsApp y arrancamos la conversación al toque.
              </p>
              <div className="mt-6">
                <WhatsappCTAButton
                  label="Escribinos por WhatsApp"
                  message="Hola! Quiero contarles mi idea."
                  variant="dark"
                />
              </div>
            </div>
            <div className="mt-10 space-y-4 border-t border-gray-200 pt-6">
              <a
                href="mailto:contacto@tecnera.com"
                className="flex items-center gap-3 text-sm text-gray-600 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                contacto@tecnera.com
              </a>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                Mar del Plata, Argentina
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 p-8">
            <h2 className="mb-6 text-xl font-bold text-foreground">O escribinos por acá</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
