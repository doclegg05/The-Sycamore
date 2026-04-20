# Sycamore — Code Review Findings (Ultrareview, 2026-04-20)

Findings from `/ultrareview` run against commit `a27e68d`. Logged for later;
not yet addressed.

## Normal severity (4) — fix before launch

### bug_019 · Nav invisible on non-home routes
`components/Nav.tsx:19-32` — Nav initializes with `scrolled=false` which applies
cream text/bars on transparent bg. Works on `/` (dark hero behind) but on
`/contact` and `/stay/[slug]` (cream page bg, no hero) the nav is invisible
until the user scrolls past 60px. Mobile hamburger bars are also invisible.
**Fix:** `usePathname()`, default to ink-on-cream scheme on non-home routes.

### bug_002 · Nav anchor links broken on non-home routes
`components/Nav.tsx:36-50, 81-83` — Hrefs are bare fragments (`#story`,
`#gallery`, `#book`). On `/contact` or `/stay/[slug]` these resolve to
`/contact#story` etc., where no such IDs exist. Click appears dead.
**Fix:** prefix with `/` (e.g. `/#story`) or conditionally render on home only.

### bug_001 · Spread order clobbers fallbacks in lib/properties.ts
`lib/properties.ts:77-83` — `{ slug, name: data.name ?? slug, ...data }` puts
the spread *after* the fallback, so `name: null` in frontmatter overwrites the
`slug` default. Latent because current MDX has non-null values, but becomes a
blank `<h1>` on any future property scaffolded with `name: null` as a pending
sentinel.
**Fix:** spread `...data` before the defaulted keys.

### bug_007 · Mobile menu state persists across routes
`components/Nav.tsx:69-85` — Nav is mounted in the root layout (not remounted
on navigation). Opening the mobile menu and then tapping the logo navigates to
`/` but leaves the overlay covering the page until the hamburger is tapped
again.
**Fix:** `useEffect(() => setOpen(false), [pathname])` driven by
`usePathname()`.

## Nit severity (6) — fix when convenient

- **bug_029** · `app/page.tsx:224-232` — "Book on Airbnb" uses `href="#"`; scrolls to top + pushes `#` onto history. Swap for a disabled `<button>` until real URL is wired.
- **bug_028** · `app/stay/[slug]/page.tsx:96-105` — "Inquire" button uses plain `<a href="/contact">` instead of `next/link`; causes full-page reload. Sibling `/contact` link on home uses `Link` correctly — inconsistent.
- **merged_bug_004** · `app/stay/[slug]/page.tsx:42` — Location guard checks `city || region` but render includes `state`. A property with only `state` populated has its entire location block hidden.
- **bug_005** · `app/page.tsx:113-125` — Gallery `sizes="25vw"` for all cells, but three cells use `md:col-span-2` (50vw). Soft images on wide/hi-DPR screens for those tiles.
- **bug_031** · `package.json:6-12` — `"lint": "next lint"` but no ESLint config and no `eslint` dep. Script fails or hangs in CI.
- **bug_012** · `app/stay/[slug]/page.tsx:72-78` — `booking.direct` anchor missing `target="_blank"`/`rel` that siblings have. If direct-booking URL is off-site, navigates away from site.
