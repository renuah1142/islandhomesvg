# Island Homes SVG

Premium, motion-forward one-page website for Island Homes SVG in St. Vincent and the Grenadines.

## Implemented

- Next.js 15 App Router + TypeScript
- Tailwind CSS v4 + PostCSS
- GSAP + ScrollTrigger
- Lenis smooth scrolling
- Scroll-scrubbed supplied hero video
- Animated preloader, reveals, parallax and magnetic buttons
- Desktop custom cursor with reduced-motion handling
- Responsive navigation and mobile layout
- Real catalog models and supplied starting prices
- Official catalog PDF viewer/download
- Gallery/lightbox presentation
- Contact form with React Hook Form + Zod
- Resend API route with honeypot spam protection
- Responsive and accessible interaction states
- GitHub Actions typecheck + production-build workflow

## Real catalog information used

- 20FT Oasis — EC$80,000
- 30FT Family — EC$115,000
- 40FT Signature — EC$135,000
- Pinnacle Two Story — EC$164,000
- Phone / WhatsApp: +1 (784) 497-6196
- Email: islandhomes.svg@gmail.com
- Location: St. Vincent & the Grenadines
- Catalog delivery estimate: 2 months from order confirmation

## Run locally

```bash
npm install
npm run typecheck
npm run build
npm run dev
```

For contact-email delivery, create environment variables from `.env.example`:

```
RESEND_API_KEY=
CONTACT_TO_EMAIL=islandhomes.svg@gmail.com
```

## Media

The repository currently contains the supplied hero video, two poster frames and catalog PDF. The supplied real-content ZIP was also reviewed; its catalog PNG/JPEG files are documented in `public/ASSETS.md`.

## Deployment

Deploy the repository to Vercel or another Next.js-compatible host. Set the Resend environment variables in the deployment environment before enabling the contact-email workflow.
