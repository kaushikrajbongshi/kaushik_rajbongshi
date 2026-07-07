# Kaushik Rajbongshi — Portfolio (Next.js + TypeScript + Tailwind CSS)

This is the Next.js 14 (App Router) conversion of the original static HTML/CSS/JS portfolio.

## Stack

- **Next.js 14** (App Router, React Server Components where possible)
- **TypeScript**
- **Tailwind CSS** (configured with the original design tokens — `bg`, `card`, `text`,
  `dim`, `dim2`, `lime`, `purple`, `red` — available for any new utility-first work)
- **CSS Modules** for the existing highly-custom, per-page visual system (clip-path
  buttons, ER-diagram tables, architecture diagrams, etc.) — this was intentionally kept
  as scoped CSS rather than force-fit into Tailwind utility soup, since it's all bespoke,
  one-off styling. Tailwind is fully wired up for anything new you build going forward.
- **next/font/google** for Syne + DM Sans (replaces the old `<link>` Google Fonts tags —
  requires internet access at build time, same as any `next/font/google` usage)

## Structure

```
src/
  app/
    layout.tsx              Root layout, loads fonts, sets metadata
    globals.css              Tailwind directives + shared base styles (reset, cursor,
                              noise overlay, scroll-reveal keyframes)
    page.tsx                 Home page
    page.module.css          Home page styling
    projects/
      academic-tracker/page.tsx
      doclocker/page.tsx
      echopost/page.tsx
  components/
    CustomCursor.tsx          Client component: dot + ring (+ optional glow), themeable
    Reveal.tsx                 Client component replacing the old IntersectionObserver
                                scroll-reveal script
    Counter.tsx                 Animated hero-stat counters
    TopNav.tsx                   Scroll-spy top navigation (home page only)
    CaseStudyNav.tsx              Shared "← Back to Portfolio" header for case studies
    case-study.module.css          Shared styling for all 3 case-study pages, themed via
                                    CSS custom properties (--accent, --accent-rgb) per page
public/
  screenshots/amt/            Add Academic Module Tracker screenshots here
  screenshots/doclocker/      Add DocLocker screenshots here
```

## What changed from the static version

- **Routing**: each case study is now a real route (`/projects/academic-tracker`,
  `/projects/doclocker`, `/projects/echopost`) using Next.js file-based routing and
  `next/link`, instead of separate standalone `.html` files.
- **Cursor / reveal-on-scroll / hero counters**: converted from inline `<script>` blocks
  into small, reusable client components.
- **Mobile scrollbar fix** (already applied previously) is preserved: the cursor dot/ring
  are hidden via `@media (hover: none) and (pointer: coarse)` in `globals.css`.
- **Per-project accent colors** (lime / red / purple) are now CSS custom properties
  (`--accent`, `--accent-rgb`) set on a themed wrapper class, so the three case-study
  pages share one CSS module instead of three near-duplicate stylesheets.
- **DocLocker** already reflects "Live in Production" status with a link to
  `doclocker.kaushikrajbongshi.in`.

## Before you deploy

1. `npm install`
2. Add your résumé PDF at `public/KAUSHIK_RAJBONGSHI_RESUME.pdf` (the Resume button
   downloads from this path).
3. Add the screenshots referenced in `public/screenshots/amt/` and
   `public/screenshots/doclocker/` (filenames already match the `<img>` sources in the
   case-study pages).
4. `npm run dev` to preview, `npm run build && npm start` to run production.

## Notes

- Devicon logos in the Tech Stack section are pulled from the `jsdelivr` CDN, same as the
  original — no change needed there.
- If you'd rather have the case-study visuals (ER diagrams, architecture boxes) as
  Tailwind utility classes instead of CSS Modules, that's a bigger follow-up refactor —
  happy to do it if you want the whole thing utility-first.
