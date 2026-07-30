export const WHATSAPP_URL = "https://wa.me/5492235254045";
export const CONTACT_EMAIL = "tecnerasoluciones@gmail.com";
export const INSTAGRAM_URL = "https://instagram.com/tecnerasoluciones";
export const LINKEDIN_URL = "https://www.linkedin.com/company/tecnera";

export type ContactReason = "mannaz" | "odal" | "custom" | "other";

export const CONTACT_REASONS: { value: ContactReason; label: string }[] = [
  { value: "mannaz", label: "Quiero contratar el servicio CRM de afiliados - Mannaz" },
  { value: "odal", label: "Quiero contratar el servicio ERP de operaciones - Odal" },
  { value: "custom", label: "Busco un desarrollo a medida para mi empresa" },
  { value: "other", label: "Otra consulta" },
];
