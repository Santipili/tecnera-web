"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { User, Mail, Building2, Tag, MessageSquare, ArrowRight, Check } from "lucide-react";
import { CONTACT_REASONS, type ContactReason } from "@/data/contact";

const fieldClass =
  "w-full rounded-xl border border-primary/15 bg-white pl-11 pr-4 py-3.5 text-sm text-neutral placeholder:text-subtext/70 focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all";

const labelClass = "w-full tablet:w-[6.5rem] flex-shrink-0 text-[11px] font-bold uppercase tracking-widest text-primary/60";

function resolveReason(value: string | null): ContactReason | undefined {
  return CONTACT_REASONS.some((r) => r.value === value) ? (value as ContactReason) : undefined;
}

function Field({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col tablet:flex-row tablet:items-center gap-1.5 tablet:gap-3">
      <span className={labelClass}>{label}</span>
      <div className="relative w-full flex-1">
        <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/40" />
        {children}
      </div>
    </label>
  );
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
    <div className="overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-lg shadow-black/10">
      <div className="border-b border-primary/10 px-8 py-7 laptop:px-10 laptop:py-8">
        <h1 className="font-[family-name:var(--font-heading)] text-xl tablet:text-2xl font-normal text-neutral">
          ¿Cómo podemos ayudarte?
        </h1>
      </div>

      {submitted ? (
        <div className="flex items-center gap-3 px-8 py-10 laptop:px-10">
          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
            <Check className="h-5 w-5" strokeWidth={3} />
          </span>
          <p className="text-sm font-bold text-primary">
            ¡Gracias! Recibimos tu mensaje y te vamos a contactar pronto.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid tablet:grid-cols-2">
          <div className="flex flex-col gap-4 bg-light/60 px-8 py-7 laptop:px-10 laptop:py-8">
            <Field icon={User} label="Nombre y apellido">
              <input name="name" required placeholder="Juan Pérez" className={fieldClass} />
            </Field>
            <Field icon={Mail} label="Email">
              <input name="email" type="email" required placeholder="juan@empresa.com" className={fieldClass} />
            </Field>
            <Field icon={Building2} label="Organización (opcional)">
              <input name="organization" placeholder="Nombre de tu organización" className={fieldClass} />
            </Field>
            <Field icon={Tag} label="Motivo de tu consulta">
              <select name="reason" required defaultValue={initialReason ?? ""} className={fieldClass}>
                <option value="" disabled>
                  Elegí una opción
                </option>
                {CONTACT_REASONS.map((reason) => (
                  <option key={reason.value} value={reason.value}>
                    {reason.label}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="flex flex-col gap-4 px-8 py-7 laptop:px-10 laptop:py-8">
            <div className="relative flex-1">
              <MessageSquare className="pointer-events-none absolute left-3.5 top-3.5 h-4 w-4 text-primary/40" />
              <textarea
                name="message"
                required
                placeholder="Contanos en qué podemos ayudarte"
                className={`${fieldClass} h-full min-h-[9.5rem] resize-none`}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:bg-secondary hover:text-primary hover:scale-[1.02] active:scale-100 transition-all duration-200 cursor-pointer"
            >
              Enviar mensaje
              <ArrowRight className="h-4 w-4 flex-shrink-0" strokeWidth={2.5} />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
