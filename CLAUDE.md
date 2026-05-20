CLAUDE.md — Hostal Edmond
Qué es esto
Landing estática de una sola página para "Hostal Edmond", un hostal que va
empezando en Cancún, Quintana Roo, México. Sitio de presencia / branding.
Las reservas se manejan por WhatsApp y por listings externos (Booking,
Hostelworld, Airbnb). No hay motor de reservas propio.
Stack

HTML / CSS / JavaScript puro. Sin frameworks, sin build step.
Fuentes: Google Fonts (Playfair Display, Nunito).
Deploy: Cloudflare Pages como sitio estático.
Dominio: hostaledmond.com (registrado en Namecheap, DNS en Cloudflare).

Archivo principal

index.html contiene todo: estructura, estilos (en <style>) y scripts.
Secciones: navbar, hero, about, habitaciones, amenidades, areas, contacto, footer.
Paleta de colores definida en :root (variables CSS).

Reglas de trabajo

NO borrar código ni comentarios existentes.
NO usar números de línea para referirte al código; indica la sección o el
selector CSS / id.
Si no estás seguro de algo, dilo explícitamente ("guessing").
Hacer solo lo que se pide, nada extra. Sin soluciones "cute" no solicitadas.
Respuestas directas, sin adjetivos de relleno.
No tocar el diseño visual salvo que la tarea lo requiera.

Datos del negocio (completar con datos reales)

Nombre: Hostal Edmond
Ubicación: Cancún, Quintana Roo, México
WhatsApp: [PENDIENTE — formato https://wa.me/52XXXXXXXXXX]
Email: [PENDIENTE]
Instagram / Facebook: [PENDIENTE]
Dirección exacta: [PENDIENTE]
Tipos de habitación y precios: [PENDIENTE]
Links a Booking / Hostelworld / Airbnb: [PENDIENTE]

Pendientes técnicos para producción

Meta tags: description, Open Graph, Twitter Card, favicon.
Schema.org JSON-LD tipo LodgingBusiness.
Botón reservar -> WhatsApp con mensaje pre-llenado.
Verificar responsive en mobile.
Optimizar imágenes (WebP, comprimidas).
Bilingüe ES/EN (fase posterior, no en MVP inicial).

Deploy

Repo en GitHub conectado a Cloudflare Pages.
Al ser HTML estático puro: sin build command, output directory = raíz (/).
Custom domain hostaledmond.com configurado en Pages.