# IslandHomesSvg Website Build Prompt

A complete specification for a modern, one-page, animation-forward website for IslandHomesSvg in St. Vincent and the Grenadines.

## Project direction
- Next.js 15 App Router + TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger + Lenis
- Responsive, mobile-first, accessible
- Awwwards/Webflow-inspired visual language
- Full-screen interactive video hero
- Scroll-driven motion, reveal animations, parallax, magnetic buttons and desktop custom cursor
- Contact form using React Hook Form + Zod + Resend
- Respect prefers-reduced-motion
- Target strong mobile performance

## Sections
1. Preloader
2. Hero
3. About / Intro
4. Homes / Models
5. Why Island Homes
6. Features / What's Included
7. Process
8. Showcase / Gallery
9. Contact
10. Footer

## Real catalog content
- 20FT Oasis — EC$80,000 starting price
- 30FT Family — EC$115,000 starting price
- 40FT Signature — EC$135,000 starting price
- Pinnacle Two Story — EC$164,000 starting price
- Phone / WhatsApp: +1 (784) 497-6196
- Email: islandhomes.svg@gmail.com
- Location: St. Vincent & the Grenadines
- Catalog delivery estimate: 2 months from order confirmation
- Key themes: strong steel structure, hurricane resistance, insulation, modern styling, low maintenance, fast installation, flexible layouts, energy efficiency, solar readiness, cost effectiveness, delivery across SVG and dedicated support.

## Requested animation implementation
Use the official GSAP package/module approach. GSAP is installed as a project dependency and ScrollTrigger is registered explicitly. The hero uses ScrollTrigger to scrub the supplied home-tour video through its timeline while scrolling. Lenis drives smooth scrolling and synchronizes ScrollTrigger.

## Assets
Use the supplied Island Homes SVG catalog imagery and supplied modern-home tour video. Keep optimized web assets under public/ and source references under docs/.
