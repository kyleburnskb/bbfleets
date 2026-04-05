# BB Fleets LLC — bbfleets.com

Static company website for BB Fleets LLC, a Georgia-based logistics and
transportation company with federal motor carrier authority.

**Authority:** MC 1753463 · USDOT 4450013

## Stack

Pure HTML + CSS + vanilla JS. No frameworks, no build step, no npm.
Fonts loaded via Google Fonts CDN.

## Structure

```
bbfleets/
├── index.html        Single-page site, all sections
├── css/
│   └── style.css     Dark industrial theme, mobile-first
├── js/
│   └── main.js       Mobile nav, scroll effects, form handling
└── README.md
```

## Sections

1. **Hero** — Authority-forward headline, MC/USDOT chips, CTAs
2. **Services** — Vehicle Transport, Fleet Support, Dedicated Hauling, Supplies & Logistics
3. **Authority & Compliance** — Federal filings, insurance, FMCSA SAFER verification link
4. **Hank (AI Dispatch Teaser)** — Forward-looking section with embed hook
5. **Contact** — Quote request form (mailto) + direct contact info
6. **Footer** — Authority numbers, copyright

## Future: Hank Agent Embed

The Hank section contains a placeholder div:

```html
<div id="hank-agent-embed"></div>
```

When Hank goes live on PilotCast, the agent embed script will target
this div. No other changes required to the page.

## Local Development

Just open `index.html` in a browser. No server needed.

For a quick local server (any of these):

```bash
python3 -m http.server 8000
# or
npx serve .
```

## Deploy

Static site — deploys anywhere: Netlify, Cloudflare Pages, GitHub Pages,
S3+CloudFront, any static host.

## Contact Form

Uses `mailto:` with a JS handler that formats a structured email to
`keith.burns@bbfleets.com`. Swap to Formspree or a backend endpoint when
volume justifies it.

## Brand

- **Aesthetic:** Dispatch terminal meets modern web. Dark, industrial, trustworthy.
- **Colors:** Deep charcoal (#0a0c10) + hazard amber (#ff9500) + steel blue accents
- **Type:** Bebas Neue (display) + Inter (body) + JetBrains Mono (numbers/technical)
- **Voice:** Direct. No fluff. Trucking people hate fluff.

---

© 2026 BB Fleets LLC
