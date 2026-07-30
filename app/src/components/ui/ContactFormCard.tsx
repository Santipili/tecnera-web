"use client";
import { useState } from "react";

const inputClass =
  "w-full rounded-xl border border-primary/15 bg-light px-4 py-3 text-sm text-neutral placeholder:text-subtext focus:border-primary focus:outline-none transition-colors";

export default function ContactFormCard({ source }: { source: string }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log({ action: "contacto_form_submit", source, data });
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <div className="rounded-[2rem] border border-primary/10 bg-white p-8 laptop:p-10 shadow-lg shadow-black/10">
      <h3 className="text-xl font-extrabold text-neutral">Contanos tu proyecto</h3>
      <p className="mt-2 text-sm text-subtext leading-relaxed">
        Dejanos tus datos y te respondemos a la brevedad.
      </p>

      {submitted ? (
        <div className="mt-8 flex items-center gap-3 rounded-xl bg-secondary/10 px-4 py-4 text-sm font-bold text-primary">
          <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          ¡Gracias! Recibimos tu mensaje y te vamos a contactar pronto.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
          <input name="name" required placeholder="Nombre y apellido" className={inputClass} />
          <input name="email" type="email" required placeholder="Email" className={inputClass} />
          <input name="organization" placeholder="Organización" className={inputClass} />
          <textarea name="message" required rows={4} placeholder="Contanos sobre tu proyecto o consulta" className={inputClass} />
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white hover:scale-[1.05] active:scale-100 transition-transform duration-200 cursor-pointer w-fit"
          >
            Enviar mensaje
          </button>
        </form>
      )}
    </div>
  );
}
