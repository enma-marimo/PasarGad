# PasarGad Studio website

Static site for **PasarGad Studio**, built for GitHub Pages with Jekyll.

## Structure

```text
PasarGad/
├── index.html              # Home (hero, upcoming game, about, quest)
├── pages/
│   ├── about.html          # Studio / About
│   ├── games.html          # Games list (Two sides)
│   ├── team.html           # Team overview
│   ├── press-kit.html      # Press kit for media
│   └── contact.html        # Contact & social
├── assets/
│   ├── css/
│   │   └── style.css       # Global styles
│   ├── js/
│   │   └── main.js         # Navigation, smooth scroll, small UX helpers
│   ├── images/
│   │   └── logo-pasargad.png
│   └── videos/
├── _config.yml             # Jekyll configuration (GitHub Pages compatible)
├── _layouts/
│   ├── default.html        # Layout for home
│   └── page.html           # Layout for internal pages
├── sitemap.xml             # SEO sitemap
└── robots.txt              # Crawling rules
```

## Development

Open `index.html` directly in a browser, or run a simple static server from the repo root, for example:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deployment

The site is designed for GitHub Pages.

1. Push to the `main` branch of `enma-marimo/PasarGad`.
2. In GitHub: **Settings → Pages**.
3. Source: `Deploy from a branch`, branch: `main`, folder: `/ (root)`.

GitHub Pages will build the Jekyll site automatically.

## Analytics (optional)

For lightweight analytics, consider services such as **Plausible** or **GoatCounter**. Add their script snippet to `_layouts/default.html` and `_layouts/page.html` once you have a real domain or tracking ID.
