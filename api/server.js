import "dotenv/config";
import crypto from "node:crypto";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const { PORT, API_TOKEN, GMAIL_USER, GMAIL_APP_PASSWORD, TO_EMAIL, CORS_ORIGIN } = process.env;

if (!API_TOKEN || !GMAIL_USER || !GMAIL_APP_PASSWORD || !TO_EMAIL) {
  throw new Error(
    "Faltan variables de entorno. Revisa API_TOKEN, GMAIL_USER, GMAIL_APP_PASSWORD y TO_EMAIL en .env"
  );
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
});

const app = express();
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

function requireToken(req, res, next) {
  const provided = Buffer.from(req.get("x-api-token") || "");
  const expected = Buffer.from(API_TOKEN);
  if (provided.length !== expected.length || !crypto.timingSafeEqual(provided, expected)) {
    return res.status(401).json({ ok: false, error: "Token invalido o faltante" });
  }
  next();
}

app.post("/api/contact", requireToken, async (req, res) => {
  const { name, email, subject, message } = req.body ?? {};

  if (
    typeof name !== "string" || !name.trim() ||
    typeof email !== "string" || !EMAIL_REGEX.test(email) ||
    typeof subject !== "string" || !subject.trim() ||
    typeof message !== "string" || !message.trim()
  ) {
    return res.status(400).json({ ok: false, error: "Datos invalidos: se requiere name, email, subject y message" });
  }

  try {
    await transporter.sendMail({
      from: GMAIL_USER,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Contacto web] ${subject} — ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\nMotivo: ${subject}\n\nMensaje:\n${message}`,
    });

    await transporter.sendMail({
      from: GMAIL_USER,
      to: email,
      subject: "Recibimos tu mensaje - Tecnera",
      text: `Hola ${name},\n\nRecibimos tu mensaje y te vamos a responder a la brevedad.\n\nGracias por contactarte con Tecnera.`,
    });

    res.json({ ok: true });
  } catch (error) {
    console.error("Error enviando email:", error);
    res.status(500).json({ ok: false, error: "No se pudo enviar el mensaje" });
  }
});

app.listen(PORT || 4000, () => {
  console.log(`API de contacto escuchando en el puerto ${PORT || 4000}`);
});
