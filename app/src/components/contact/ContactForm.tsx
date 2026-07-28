"use client";
import { useState } from "react";

const CONTACT_EMAIL = "contacto@tecnera.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Nuevo contacto de ${name || "el sitio web"}`;
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-foreground">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent-purple"
          placeholder="Tu nombre"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-foreground">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent-purple"
          placeholder="tu@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-foreground">
          Contanos tu idea
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent-purple"
          placeholder="¿Qué te gustaría construir?"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.01] hover:bg-gray-900 active:scale-100 tablet:w-auto"
      >
        Enviar mensaje
      </button>
    </form>
  );
}
