# JacksPay Casino — Static Site

Plain HTML/CSS/JS version of the site, ready for static hosting (Netlify, Vercel, GitHub Pages, cPanel, S3, etc.).

## Upload instructions

1. Upload **everything inside this `static/` folder** to your web host’s public directory (e.g. `public_html`, `www`, or site root).
2. Ensure `index.html` is at the site root so your domain loads the homepage.
3. Copy your image assets into the same folder (they are not included in the repo):

   - `jp_full_logo.png`
   - `2273_1772050655_jp-gb-nli-welcome-package-desktop.jpg`
   - `2273_1772050522_jp-nli-jacks-crypto-desktop.jpg`
   - `85a28f57-d407-43d1-958a-f01df85664a8.jpg`
   - `36eadbb2-ee57-452f-bd53-35e945b272c7.jpg`

   If you ran the React app locally, these may be in a `public/` folder from your original design export.

## Pages

| File | Page |
|------|------|
| `index.html` | Home |
| `games.html` | Casino Games |
| `banking.html` | Secure Banking |
| `app.html` | Mobile App |
| `sign-in.html` | Sign In |
| `about.html` | About Us |
| `privacy-policy.html` | Privacy Policy |
| `disclaimer.html` | Disclaimer |
| `dmca.html` | DMCA Policy |
| `contact.html` | Contact Us |

## Rebuild CSS (optional)

If you change HTML or Tailwind classes:

```bash
npm install
npx tailwindcss -c static/tailwind.config.js -i static/css/input.css -o static/css/styles.css --minify
```

## Affiliate links

CTA buttons redirect to `https://enterthefun.com/mWzpBj`. Edit `AFFILIATE_URL` in `js/main.js` to change it.

## SEO meta tags

Each page includes unique, SEO-friendly tags:

- `<title>` and `meta description` / `keywords`
- `link rel="canonical"` and `robots` directives
- Open Graph (`og:*`) for Facebook, LinkedIn, etc.
- Twitter Card (`twitter:*`) for social previews
- JSON-LD structured data (`WebSite`, `Organization`, `WebPage`, breadcrumbs)

**Before going live**, replace `https://www.yourdomain.com` with your real domain in every `static/*.html` file (canonical, `og:url`, `og:image`, and JSON-LD). Use your editor’s find-and-replace across the `static` folder.

The sign-in page uses `noindex, follow` so login URLs are less likely to appear in search results.
