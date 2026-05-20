CLAUDE.md — Hostal Edmond
What this is
Single-page static landing for "Hostal Edmond", a hostel just getting started
in Cancún, Quintana Roo, Mexico. Presence / branding site.
Bookings are handled via WhatsApp and external listings (Booking,
Hostelworld, Airbnb). No own booking engine.
Stack

Plain HTML / CSS / JavaScript. No frameworks, no build step.
Fonts: Google Fonts (Playfair Display, Nunito).
Hosting: Cloudflare Workers serving static assets (NOT Pages).
Cloudflare merged Pages into Workers; the "Connect to Git" flow
creates a Worker with static assets. Works the same for a static site.
Deploy via wrangler (npx wrangler deploy) connected to the GitHub repo.
Domain: hostaledmond.com (registered at Namecheap, DNS in Cloudflare).

Main file

index.html contains everything: structure, styles (in <style>) and scripts.
Sections: navbar, hero, about, habitaciones, amenidades, areas, contacto, footer.
Color palette defined in :root (CSS variables).

Working rules

DO NOT delete existing code or comments.
DO NOT use line numbers to reference code; indicate the section or the
CSS selector / id.
If unsure about something, say so explicitly ("guessing").
Do only what is asked, nothing extra. No unsolicited "cute" solutions.
Direct answers, no filler adjectives.
Do not touch the visual design unless the task requires it.

Business data (fill in with real data)

Name: Hostal Edmond
Location: Cancún, Quintana Roo, Mexico
WhatsApp: [PENDING — format https://wa.me/52XXXXXXXXXX]
Email: [PENDING]
Instagram / Facebook: [PENDING]
Exact address: [PENDING]
Room types and prices: [PENDING]
Links to Booking / Hostelworld / Airbnb: [PENDING]

Framework decision (important)

Current MVP: plain HTML / CSS / JS. DO NOT use React or Next.js.
Reason: it's a single-page static landing. React/Next add a build
step, dependencies and a JS bundle that are unnecessary for this case. Plain HTML
loads faster and has no build that can break.
Migration path IF the site grows (multi-page, large blog, stateful booking
engine): consider Astro, not Next. Astro generates static HTML,
ships zero JS by default, and adds targeted interactivity via "islands". Better fit
than Next for a static content site.
Do not migrate preemptively. Only if a real need arises.

Technical pending items for production

Meta tags: description, Open Graph, Twitter Card, favicon.
Schema.org JSON-LD of type LodgingBusiness.
Book button -> WhatsApp with a pre-filled message.
Verify responsive on mobile.
Optimize images (WebP, compressed).
Bilingual ES/EN (later phase, not in the initial MVP).

Hosting / Deploy architecture

Repo on GitHub (public): edgarpecero/hostal-edmond.
Cloudflare Workers connected to the repo. On each push to main, Cloudflare
automatically redeploys with npx wrangler deploy.
Pure static site: framework preset None, no build command,
output directory = root (.).
Wrangler generates wrangler.jsonc with assets.directory = "." pointing to the root.
Workers URL: https://hostal-edmond.edgarpecero7.workers.dev
(provisional; the final site uses the custom domain).
STATUS: live. Domain hostaledmond.com (root) connected to the Worker as a
Worker-type record, Proxied. SSL working (Full mode).
Minor pending: connect/redirect www.hostaledmond.com (add as custom
domain on the Worker or CNAME www -> hostaledmond.com, Proxied). Optional:
Redirect Rule to send www to root.
Custom domain hostaledmond.com to be configured on the Worker
(Settings -> Domains & Routes).
SSL/TLS: Full mode.

Exclusion files (important)

.gitignore: excludes .wrangler/ and node_modules/.
.assetsignore: prevents Cloudflare from serving internal files to the public.
Must exclude: .git, .git/**, .gitignore, .assetsignore, wrangler.jsonc.
Without this, the deploy exposes the entire .git folder to the public.
