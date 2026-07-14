# Caleb Li — Portfolio Redesign (Handoff)

This folder contains the **final approved design** for calebli.work, built as a
React-in-the-browser app (no build step). It is the source of truth for the redesign.

## Files
- `calebli.work.html` — the page shell: fonts, theme state (dark/light), page
  routing, and the Tweaks panel. Open this in a browser to see the live design.
- `portfolio-components.jsx` — all the UI: `Nav`, `HomePage`, `WorkPage`,
  `AboutPage`, `ContactPage`, `Footer`, plus the theme tokens.

## How to view it right now
Serve the folder and open the HTML (it loads the JSX as a sibling file):
```bash
npx serve .
# then open the printed localhost URL → calebli.work.html
```

## Instructions for Claude Code (porting into the existing Next.js repo)
The existing repo is **Next.js (App Router) + Tailwind**. Replace the current
site with this design, preserving the repo's conventions:

1. **Theme tokens** — port the `DARK` / `LIGHT` objects (top of the JSX) into CSS
   variables in `globals.css`. Light = beige (`#f6f3ec`) bg, near-black text.
   Dark = near-black bg, beige text. Keep the green accent (`#3a9f7e` light /
   `#4cc9a0` dark) — it is used in EXACTLY two places: the active nav-link
   underline and the "Available" dot. Everything else is beige/black.
2. **Fonts** — Newsreader (serif, weights 300–500, incl. italics) for headings and
   most text; Inter for small uppercase labels. Load via `next/font/google`.
3. **Components** — recreate each component as a TSX file under `src/components`
   and `src/app/<route>/page.tsx`. Routes: `/` (Home), `/work`, `/about`,
   `/contact`. Use `next/link` + `usePathname()` for nav (replace the in-memory
   `page` state).
4. **Dark/light toggle** — the pill **switch** in the top-right of the nav. Persist
   to `localStorage` under a `theme` key; default to dark. (The repo already has a
   no-flash inline theme script in `layout.tsx` — keep that pattern.)
5. **IMPORTANT — no entrance animations.** The `Reveal` wrapper is intentionally a
   plain passthrough (`<div>{children}</div>`). Do **not** add opacity/transition
   fade-in animations — render content statically visible.
6. **Copy is final** — the About page is first-person ("I'm Caleb, a Commerce
   student…"). Keep all copy verbatim.
7. **Links** — email `caleb.nz.li@gmail.com`, LinkedIn `/in/caleb-li-0b3084272`,
   Instagram `@caleb.lii`, GitHub `github.com/cc0b`. Project demo links are in
   `WorkPage`.

Delete the old pages/components that don't match this design.
