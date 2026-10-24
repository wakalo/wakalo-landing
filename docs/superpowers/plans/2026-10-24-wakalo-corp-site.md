# Wakalo Corp Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the carpooling-only landing into the Wakalo Corp company site, with Wakalo (carpooling) as a featured product and its own `/wakalo` page.

**Architecture:** New corporate sections live in `components/corp/`; existing carpooling sections stay in `components/` and are recomposed into `app/wakalo/page.tsx`. Corp identity (ink / cream / ochre) is added as Tailwind v4 theme tokens beside the existing green app tokens. Navbar and Footer become corp-branded and shared by all pages.

**Tech Stack:** Next.js 16.2.5 App Router, React 19, Tailwind CSS v4 (`@theme inline` in `app/globals.css`), framer-motion 12, lucide-react.

**Spec:** `docs/superpowers/specs/2026-10-24-wakalo-corp-site-design.md`

## Global Constraints

- Read the relevant guide in `node_modules/next/dist/docs/` before writing Next-specific code (AGENTS.md). `themeColor` belongs in `export const viewport` (see `03-api-reference/04-functions/generate-viewport.md`), not in `metadata`.
- All user-facing copy in French.
- Corp tokens: ink `#0B1220`, cream `#F7F4EE`, ochre `#E8772E`. App tokens unchanged (`#064E3B`, `#34D399`, …).
- Fonts unchanged: Space Grotesk (titles, `font-display`), Plus Jakarta Sans (body).
- Green app colors appear only in the Wakalo showcase section and on `/wakalo`, `/help`, `/terms`, `/legal`.
- Beta form URL is the existing `BETA_FORM_URL` in `components/Navbar.tsx`; move it to `lib/links.ts` and import it everywhere.
- Contacts: `contact@wakalo.online`, `support@wakalo.online`, "Cotonou, Bénin", phone stays `+229 XX XX XX XX`.
- Animations respect `prefers-reduced-motion` (use framer-motion `useReducedMotion` or the existing CSS guard).
- No new npm dependencies.

## Review Focus

- Phone width (375px): no horizontal scroll on `/`, `/wakalo`, `/about`, `/contact`. Checked in Task 7 via DevTools.
- Old anchors (`/#features`, `/#how-it-works`, `/#beta`) must not dead-end: every one becomes `/wakalo#…`. Checked in Task 2 by grep.
- Navbar readability over the cream hero (not scrolled) and over the dark Wakalo section (scrolled). Checked in Task 7 by screenshot.
- Image paths containing spaces (`public/benin/carte du benin.png`, `adpd wakalo.png`) must render. Checked in Task 7 network list (no 404).
- Reduced motion: content must be visible with no animation. Checked in Task 7 via `emulate` reduced motion.

## File Structure

| File | Responsibility |
|---|---|
| `app/globals.css` | add corp tokens `--color-ink`, `--color-cream`, `--color-ochre`, `--color-ochre-dark` (`#C9601F`) |
| `lib/links.ts` | `BETA_FORM_URL`, `CONTACT_EMAIL`, `SUPPORT_EMAIL`, `PHONE_DISPLAY`, `PHONE_HREF` |
| `lib/team.ts` | `TeamMember` type + `team: TeamMember[]` (moved from `app/about/page.tsx`) |
| `components/corp/CorpHero.tsx` | section 1 hero |
| `components/corp/WhatWeDo.tsx` | section 2, two pillars, `id="what-we-do"` |
| `components/corp/Services.tsx` | section 3 editorial rows, `id="services"` |
| `components/corp/Method.tsx` | section 4, 4 steps, `id="method"` |
| `components/corp/PhoneMockup.tsx` | HTML/CSS phone frame with a Wakalo screen |
| `components/corp/WakaloShowcase.tsx` | section 5 dark product section, `id="products"` |
| `components/corp/TeamSection.tsx` | section 6 team + Cotonou, `id="team"` |
| `components/corp/ProjectCTA.tsx` | section 7 final CTA |
| `app/page.tsx` | composes corp sections |
| `app/wakalo/page.tsx` | composes existing carpooling sections + own metadata |
| `components/Navbar.tsx`, `components/Footer.tsx` | corp branding & new links |
| `app/layout.tsx` | corp metadata + `viewport` |
| `app/about/page.tsx`, `app/contact/page.tsx` | rewritten for Wakalo Corp |
| `DESIGN_GUIDE.md` | documents both identities |

Verification for every task (no test runner in the repo): `npm run lint` → 0 errors and `npm run build` → "Compiled successfully", plus the task's own check.

---

### Task 1: Foundations (tokens, shared data)

**Files:** Modify `app/globals.css`; Create `lib/links.ts`, `lib/team.ts`; Modify `app/about/page.tsx` (import team from `lib/team.ts`).

**Interfaces — Produces:**
- Tailwind classes `bg-ink text-ink bg-cream bg-ochre text-ochre hover:bg-ochre-dark`.
- `lib/links.ts`: `export const BETA_FORM_URL: string; CONTACT_EMAIL = "contact@wakalo.online"; SUPPORT_EMAIL = "support@wakalo.online"; PHONE_DISPLAY = "+229 XX XX XX XX"; PHONE_HREF = "tel:+22900000000"`.
- `lib/team.ts`: `export type TeamMember = { name: string; role: string; title: string; image: string; email: string; linkedin?: string }` (match the fields actually present in about page) and `export const team: TeamMember[]`.

- [ ] Step 1: add the four tokens to `:root` and `@theme inline`.
- [ ] Step 2: create `lib/links.ts`, `lib/team.ts`; replace inline team array and `BETA_FORM_URL` copies with imports.
- [ ] Step 3: lint + build pass.
- [ ] Step 4: commit `feat: add corp tokens and shared site data`.

### Task 2: Move carpooling content to `/wakalo`

**Files:** Create `app/wakalo/page.tsx`; Modify `components/Footer.tsx`, `components/Navbar.tsx`, any component linking `/#…`.

**Interfaces — Consumes:** `BETA_FORM_URL`. **Produces:** route `/wakalo` with anchors `#how-it-works`, `#features`, `#beta`, `#faq` (whatever ids the existing sections already use).

- [ ] Step 1: `app/wakalo/page.tsx` renders Hero, TrustBar, HowItWorks, Benefits, Impact, Coverage, LivingRoute, BetaSignup, FAQ, Footer, BackToTop (current `app/page.tsx` order) and exports `metadata` with the current carpooling title/description/openGraph (url `https://wakalo.online/wakalo`).
- [ ] Step 2: rewrite every `"/#` link to `"/wakalo#`.
- [ ] Step 3: `grep -rn '"/#' app components` → no output. Lint + build pass, `/wakalo` listed in build output.
- [ ] Step 4: commit `feat: move carpooling landing to /wakalo`.

### Task 3: Corp Navbar, Footer, layout metadata

**Files:** Modify `components/Navbar.tsx`, `components/Footer.tsx`, `app/layout.tsx`.

- Navbar: text logo `wakalo` + small `corp` in ochre; links Accueil `/`, Services `/#services`, Produits `/#products`, À propos `/about`, Contact `/contact`; CTA button « Lancer un projet » → `/contact` (bg-ochre). Not scrolled on `/`: transparent with ink text; scrolled or other pages: `bg-cream/90 backdrop-blur` with ink text. On `/wakalo`, `/help`, `/terms`, `/legal` keep the current forest-deep style and add a « Wakalo Corp » back link. Mobile menu kept.
- Footer: bg-ink; columns Entreprise (À propos, Services, Contact) / Produits (Wakalo `/wakalo`, Rejoindre la bêta) / Support & légal (Centre d'aide, CGU, Mentions légales); contacts from `lib/links.ts`; « © {year} Wakalo Corp ».
- Layout: `metadata` title « Wakalo Corp — Solutions numériques innovantes au Bénin », description about client apps + own products, openGraph siteName « Wakalo Corp », locale `fr_BJ`; move `themeColor: "#0B1220"` to `export const viewport`.

- [ ] Step 1–3: implement the three files.
- [ ] Step 4: lint + build pass; build emits no `themeColor` metadata warning.
- [ ] Step 5: commit `feat: corp navbar, footer and metadata`.

### Task 4: Corp sections 1–4 + new home

**Files:** Create `components/corp/CorpHero.tsx`, `WhatWeDo.tsx`, `Services.tsx`, `Method.tsx`; Modify `app/page.tsx`.

- CorpHero: bg-cream, eyebrow « Wakalo Corp · Cotonou, Bénin », large `font-display` title (e.g. « Nous concevons les solutions numériques de demain. »), subtitle about client apps + own products, CTAs « Lancer un projet » (`/contact`, ochre) and « Découvrir nos produits » (`#products`, outline ink). Right/below: photo `public/benin/cotonou-1.jpg` in a rounded card with a floating mini `PhoneMockup` is optional — keep it if Task 5 lands first, otherwise a stat strip (« 4 experts », « 1 produit en bêta », « Web & mobile »).
- WhatWeDo: two large cards — « Solutions sur mesure » (ink card) and « Nos produits » (cream card, Wakalo badge linking `#products`).
- Services: Phantom/Koto-style rows, each `border-t`, number `01–04`, title, one-line description, lucide icon: Applications mobiles, Plateformes web, Design UX/UI, Conseil & transformation numérique.
- Method: 4 steps Comprendre → Concevoir → Développer → Lancer & accompagner, horizontal on `lg`, stacked on mobile.
- `app/page.tsx`: CorpHero, WhatWeDo, Services, Method, WakaloShowcase*, TeamSection*, ProjectCTA*, Footer, BackToTop (*added by Task 5/6; comment them in as they land).

- [ ] Step 1: implement components. Step 2: lint + build. Step 3: commit `feat: corp home sections`.

### Task 5: Wakalo showcase

**Files:** Create `components/corp/PhoneMockup.tsx`, `components/corp/WakaloShowcase.tsx`; Modify `app/page.tsx`.

**Interfaces — Produces:** `PhoneMockup({ screen }: { screen: "search" | "trip" | "match" })` — rounded black frame (aspect ~9/19), notch, inner screen in app greens with HTML-drawn UI (search: départ/arrivée fields + trip list; trip: route line Cotonou → Porto-Novo with price; match: driver card with rating).

- WakaloShowcase: `id="products"`, bg `forest-deep` → near-black gradient; eyebrow « Notre produit phare », title « Wakalo, le covoiturage pensé pour le Bénin. »; VanMoof-style alternating rows (3 rows: Trouvez un trajet / Voyagez en confiance / Partagez les frais) each with a `PhoneMockup`; city chips Cotonou, Porto-Novo, Parakou; CTAs « Découvrir Wakalo » → `/wakalo` (mint) and « Rejoindre la bêta » → `BETA_FORM_URL` (new tab, `rel="noopener noreferrer"`).

- [ ] Step 1: implement. Step 2: lint + build. Step 3: commit `feat: wakalo product showcase`.

### Task 6: Team, final CTA, About, Contact, design guide

**Files:** Create `components/corp/TeamSection.tsx`, `components/corp/ProjectCTA.tsx`; Modify `app/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`, `DESIGN_GUIDE.md`.

- TeamSection: `team` from `lib/team.ts` with `next/image`, plus « Basés à Cotonou » block using `public/benin/cotonou-1.jpg`.
- ProjectCTA: bg-ink, « Parlons de votre projet », mail + `/contact` buttons.
- About: corp mission (numérique, solutions sur mesure + produits), values (Innovation, Exigence, Impact local), team, products list (Wakalo); corp colors.
- Contact: title « Parlons de votre projet », add a « Sujet » select (Projet d'application, Partenariat, Support Wakalo, Autre) to the existing form; keep existing submit behavior; corp colors.
- DESIGN_GUIDE.md: section « Deux identités » with both palettes and where each is used.

- [ ] Step 1: implement. Step 2: lint + build. Step 3: commit `feat: team, cta, about and contact for Wakalo Corp`.

### Task 7: Visual verification

- [ ] Step 1: `npm run dev`, open `/`, `/wakalo`, `/about`, `/contact` with Chrome DevTools MCP at 1440px and 375px; screenshot each.
- [ ] Step 2: at 375px, `evaluate_script` `document.documentElement.scrollWidth <= window.innerWidth` → `true` on each page.
- [ ] Step 3: `list_network_requests` → no 404 for images; `list_console_messages` → no errors.
- [ ] Step 4: emulate `prefers-reduced-motion: reduce` on `/` → all section text visible in screenshot.
- [ ] Step 5: fix anything found, re-run lint + build, commit `fix: visual polish`.
