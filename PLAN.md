# Nine Lives Cycling Collective — Implementation Plan

> Build order prioritizes less complex, content-driven pages first.
> Features requiring third-party integrations are held for later phases.

---

## Phase 1: Foundation
**Goal:** Routing, global layout, and design tokens. Nothing is styled yet, but every page exists and links work.

- Install React Router and wire up all five pages
- Build `Nav.jsx` and `Footer.jsx` as persistent layout wrappers
- Define CSS custom properties (design tokens) for color, typography, spacing — this is where brand colors, fonts, and grid live. Everything else inherits from here.
- Add a `.env` file structure for API keys (YouTube, eventually Instagram)

**Needs from Tori before this phase:** font choices, color palette, logo file.

---

## Phase 2: About Page
**Goal:** The most content-complete page since we know exactly what goes on it. Good to build first to establish component patterns.

### Rider Trading Cards
- Each card: photo, name, pronouns, discipline(s), short bio
- CSS grid layout — 3-across on desktop, 1–2 on mobile
- Data lives in `src/data/roster.js` as a plain array of objects
- Adding future riders = adding entries to that file, no code changes elsewhere
- Treatment: strong portrait photo crop, name/pronouns in large type, disciplines as pill/tag labels, bio below or on hover

### Sponsor Tiers
- `src/data/sponsors.js` with a `tier` field: `title`, `partner`, `supporter`
- Title sponsor: logo + one line of copy, prominent placement
- Partner tier: larger logos in a row
- Supporter tier: smaller logos in a secondary row
- Same component reused on Home page

### Team Story + Inclusivity Statement
- Static copy sections — Tori provides text, we drop it in

---

## Phase 3: Home Page
**Goal:** The most visually complex page. Build sections one at a time.

- **Mission Statement** — Hero-style, large type, possibly overlaid on photo
- **Sponsor Carousel** — Pulls from same `sponsors.js` as About. CSS scroll or simple `setInterval` auto-scroll. No library.
- **Race Schedule** — Data in `src/data/schedule.js`. Updated manually by editing that file. Each entry: race name, date, location, optional results link.
- **Featured Merch** — Static card (image, product name, price, link) until merch platform is decided
- **Featured Video** — *Held for integration phase (YouTube API)*
- **Instagram Feed** — *Held for integration phase*

---

## Phase 4: Blog — The Scratching Post
**Goal:** Working blog with CMS for non-technical teammates.

### Recommended CMS: Decap CMS (formerly Netlify CMS)
- Free and open source
- Git-based: posts stored as markdown files in `src/content/blog/`
- Teammates log in with GitHub to access a clean editor dashboard
- Post fields: title, date, author, tags, cover image, body
- Requires small OAuth setup during Cloudflare deployment phase

**Alternative: Sanity** — free tier, polished editor, content stored in their cloud instead of the repo. Better if GitHub login is a friction point for teammates.

### On the React side
- `import.meta.glob` pulls all markdown files at build time
- `gray-matter` (one small package) parses frontmatter
- `PostList.jsx` — all posts, newest first, with tag filtering
- `PostCard.jsx` — title, date, author, excerpt, cover image
- `PostDetail.jsx` — full post render

### WordPress Import
- Use WordPress XML export tool
- Write a one-time conversion script to produce markdown files
- Full post history (titles, dates, body content) comes over intact

---

## Phase 5: Media Page
**Goal:** Video gallery and image gallery.

### Video Gallery *(requires YouTube API)*
- YouTube Data API v3 (free, Google API key required)
- Fetches full channel playlist, displays as thumbnail grid
- Click opens video in modal or links to YouTube

### Image Gallery
- Images uploaded to `src/assets/images/gallery/`
- Masonry or strict grid layout
- No third-party service — add images by committing files to GitHub
- Optional: add Decap CMS media collection for drag-and-drop uploads without touching code

---

## Phase 6: Merch Page
**Goal:** Functional store, zero monthly cost.

### Recommendation: Bonfire
- Free to use (they take a per-item cut, no monthly fee)
- Designed for teams selling apparel, popular in cycling communities
- Handles printing and fulfillment
- We embed their widget or link from Merch page

**Alternative: Big Cartel** — free up to 5 products, more control over product types, embeddable grid

**WooCommerce migration:** Once the new store is live, close the WordPress store and redirect its URL to the new site. Running two stores creates inventory confusion.

---

## Phase 7: Integrations
Features held from earlier phases:

- **Featured Video (Home)** — YouTube Data API v3, fetch latest upload, embedded player with fallback
- **Video Gallery (Media)** — Same API key, fetch full channel playlist
- **Instagram Feed (Home)** — Options in priority order:
  1. Facebook Business account + Instagram Graph API (free, ask manager)
  2. Paid embed service like Behold (~$15–25/mo)
  3. Manual: 6–9 exported images in `src/assets/images/instagram/`, updated by hand, link to profile
- **Mailchimp Newsletter** — Free tier (up to 500 contacts), embed form in footer, style to match site
- **Strava Club** — Styled CTA card linking to club page

---

## Phase 8: Polish & Pre-Launch
- SEO: `<title>` and `<meta description>` per page, Open Graph tags for social sharing
- Accessibility: keyboard navigation, alt text audit, contrast check
- Responsive: mobile-first review of every page
- Performance: image compression, lazy loading, Lighthouse audit
- Analytics: Cloudflare built-in analytics (free, no cookies required) or Google Analytics

---

## Phase 9: Cloudflare Deployment
- Connect GitHub repo to Cloudflare Pages (free tier, auto-deploys on every push to `master`)
- Set up custom domain
- Configure Decap CMS OAuth via Cloudflare Worker (~30 lines)
- Set environment variables (YouTube API key, etc.) in Cloudflare dashboard

---

## Build Order Summary

| Phase | What Ships | Complexity |
|-------|-----------|------------|
| 1 | Routing, Nav, Footer, design tokens | Low |
| 2 | About page (roster cards, sponsors, copy) | Low |
| 3 | Home page (static sections only) | Medium |
| 4 | Blog + CMS + WordPress import | Medium |
| 5 | Media page (image gallery) | Low |
| 6 | Merch page | Low |
| 7 | Integrations (YouTube, Instagram, Mailchimp) | High |
| 8 | Polish, accessibility, SEO | Medium |
| 9 | Cloudflare deployment + domain | Medium |

---

## Decisions Still Needed

- [ ] Bonfire vs. Big Cartel vs. keep WooCommerce
- [ ] Decap CMS vs. Sanity for blog
- [ ] Instagram: Business account (ask manager), paid service, or manual for now
- [ ] YouTube API key (5-min setup in Google Cloud Console)
- [ ] Final fonts and color palette
- [ ] Logo files (SVG preferred)
