# Anshu and Associates

Marketing site scaffold. Next.js 15 (App Router), Tailwind v4, Lenis, GSAP ScrollTrigger.

Parked here temporarily. Moves to its own repository once that exists.

## Run

    npm install
    npm run dev

## Conventions

- No component hardcodes a colour. Everything reads a token from `app/globals.css`.
- No file hardcodes the domain. `lib/site.ts` is the single source of truth,
  driven by `NEXT_PUBLIC_SITE_URL`. Attaching a custom domain is one env var change.
- `NEXT_PUBLIC_NOINDEX` defaults to noindex. Set it to `false` only once the
  real domain is live, so search authority builds on the right hostname.
- Motion respects `prefers-reduced-motion` everywhere.

## Status

Tokens and fonts in `app/globals.css` are neutral placeholders and get
replaced wholesale when the brand brief lands.
