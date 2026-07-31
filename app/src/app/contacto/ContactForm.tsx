"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CONTACT_REASONS, type ContactReason } from "@/data/contact";

const inputClass =
  "w-full rounded-xl border border-primary/15 bg-light px-4 py-3 text-sm text-neutral placeholder:text-subtext focus:border-primary focus:outline-none transition-colors";

function resolveReason(value: string | null): ContactReason | undefined {
  return CONTACT_REASONS.some((r) => r.value === value) ? (value as ContactReason) : undefined;
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialReason = resolveReason(searchParams.get("reason"));
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    // No email/backend service is wired up yet, so this only logs locally.
    // Swap this block for a real API call later; the form/validation/success
    // state around it doesn't need to change.
    console.log({ action: "contacto_form_submit", source: "contacto_page", data });
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <div className="rounded-[2rem] border border-primary/10 bg-white p-8 laptop:p-10 shadow-sm">
      <h1 className="text-base tablet:text-lg font-bold text-neutral">¿Cómo podemos ayudarte?</h1>

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
          <input name="organization" placeholder="Organización (opcional)" className={inputClass} />
          <select name="reason" required defaultValue={initialReason ?? ""} className={inputClass}>
            <option value="" disabled>
              Motivo de su consulta
            </option>
            {CONTACT_REASONS.map((reason) => (
              <option key={reason.value} value={reason.value}>
                {reason.label}
              </option>
            ))}
          </select>
          <textarea name="message" required rows={4} placeholder="Contanos tu consulta" className={inputClass} />
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white hover:bg-secondary hover:text-primary transition-colors cursor-pointer w-fit"
          >
            Enviar mensaje
          </button>
        </form>
      )}
    </div>
  );
}
