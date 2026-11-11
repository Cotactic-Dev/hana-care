# Phatra Care — Next.js + Tailwind

This is the Next.js 15 (App Router, TypeScript) and Tailwind CSS v4 port of the static site in the parent folder. Every URL is the same as before. The trailing slash is kept, so routes like `/patient-beds/comfort-care/` still work.

## Run

```bash
npm install
npm run dev            # http://localhost:3000
npm run build && npm start
```

### Docker

```bash
cp .env.example .env   # set GTM ID, LINE URL, etc.
docker compose up -d --build        # http://localhost:3000 (PORT=xxxx to change)
docker compose logs -f web
docker compose down
```

The Dockerfile builds in three stages: deps, build, and runtime. The runtime stage uses `output: "standalone"` on node:20-alpine. It runs as a non-root user and has a healthcheck. `NEXT_PUBLIC_*` variables are build args, so you need to rebuild after changing them.

## Structure

```
src/
  app/                         # one folder per route (same URLs as the legacy site)
    layout.tsx                 # fonts (Prompt/Inter via next/font), GTM, TopBar/Header/Footer, providers
    globals.css                # Tailwind + @theme design tokens + overrides
    patient-beds/[slug]/       # ONE template for all 3 SKUs (data-driven)
    sitemap.ts, robots.ts, not-found.tsx
  data/products.ts             # single source of truth for the 3 SKUs (WooCommerce-ready shape)
  data/site.ts                 # phone, LINE, nav, SITE_URL
  components/
    layout/                    # TopBar, Header (client: scroll/mobile nav/lang), Footer, StickyMobileBar
    home/BedFinderQuiz.tsx     # 3-step quiz → reads products.ts
    products/ComparisonTable.tsx
    forms/LeadForm.tsx         # validation + GA4 generate_lead + redirect (no PII in URL)
    analytics/AnalyticsProvider.tsx  # page_view per route, data-track delegation, debug inspector
    i18n/                      # TH/EN client toggle (ported from app.js)
    seo/JsonLd.tsx
  styles/legacy.css            # original style.css, loaded in @layer components
```

## Styling approach

- The design tokens live in `@theme`, so utilities like `bg-primary`, `text-primary-dark`, `border-warm-border`, `shadow-card` and `font-en` are available.
- The original `assets/css/style.css` is now `src/styles/legacy.css`, imported into `@layer components`. Tailwind utilities always override it, so the visuals match the original exactly.
- New and refactored components use Tailwind utilities. When a section has been migrated, delete its rules from `legacy.css`.
- `.col-span-2` was renamed to `.form-col-full` because it clashed with the Tailwind utility of the same name and broke the mobile form layout.

## Analytics

- To track a click, put `data-track="event_name"` and `data-track-params='{"k":"v"}'` on any element, including in Server Components.
- Call `trackEvent()` from `@/lib/analytics` in client code. It pushes to `window.dataLayer`.
- Set `NEXT_PUBLIC_GTM_ID` to load GTM. Set `NEXT_PUBLIC_GA4_DEBUG=true` to show the on-page event inspector (for staging only).

## TODO / follow-ups

- Lead forms currently only track the event and redirect. Hook them up to a backend, such as `app/api/leads/route.ts`, then CRM, LINE Notify or email.
- Build real `/en/` routes. hreflang already points to `/en/`, but EN is still a client-side toggle.
- Add a `logo.png`. The Organization schema references `/assets/images/logo.png`, which doesn't exist.
- `/privacy-policy/` and `/terms-of-service/` pages don't exist yet. The footer opens the PDPA modal instead.
