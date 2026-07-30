# Tecnera Contact API

API minima en Express (sin otros frameworks) para el formulario de contacto de la web. Recibe nombre/email/mensaje, envia un correo a Tecnera y un correo de confirmacion a quien contacto.

## Setup

1. `npm install`
2. Generar una **App Password** de Gmail para `tecnerasoluciones@gmail.com`:
   - Activar verificacion en 2 pasos en la cuenta de Google.
   - Ir a https://myaccount.google.com/apppasswords y crear una contrasena de aplicacion.
3. Copiar `.env.example` a `.env` y completar los valores (`API_TOKEN` con un valor largo y random, `GMAIL_APP_PASSWORD` con la contrasena generada, `CORS_ORIGIN` con la URL de la web).
4. `npm start` (levanta en el puerto de `PORT`, default 4000).

## Endpoint

`POST /api/contact`

Headers:
```
Content-Type: application/json
x-api-token: <valor de API_TOKEN>
```

Body:
```json
{
  "name": "Juan Perez",
  "email": "juan@example.com",
  "subject": "Consulta sobre Odal",
  "message": "Quiero mas info sobre Odal."
}
```

Respuestas:
- `200 { "ok": true }` - los dos correos se enviaron.
- `400 { "ok": false, "error": "..." }` - falta o es invalido `name`, `email`, `subject` o `message`.
- `401 { "ok": false, "error": "..." }` - falta el header `x-api-token` o no coincide con `API_TOKEN`.
- `500 { "ok": false, "error": "..." }` - fallo el envio de email (revisar logs del server).

## Probar con curl

```bash
curl -X POST http://localhost:4000/api/contact \
  -H "Content-Type: application/json" \
  -H "x-api-token: TU_TOKEN" \
  -d '{"name":"Juan Perez","email":"juan@example.com","subject":"Consulta general","message":"Hola, quiero info."}'
```
