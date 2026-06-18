# Nguyen Quoc Anh Portfolio

This repository powers the personal portfolio of **Nguyen Quoc Anh**, an **AI Engineer and Deep Learning Researcher** working across generative AI, computer vision, financial time series forecasting, neural ODEs, and quantitative machine learning.

Live site: [thequantscientist.github.io](https://thequantscientist.github.io/)

## Purpose

The site is designed to present Nguyen Quoc Anh's professional identity, applied AI engineering work, research projects, publications, media appearances, and recognition in a fast, searchable, and recruiter-friendly format.

## Highlights

- Modern single-page portfolio built with plain HTML, CSS, and JavaScript.
- Optimized local image assets for faster GitHub Pages delivery.
- Structured sections for work experience, selected projects, publications, recognition, media, press, and contact.
- SEO-focused metadata for search engines and social sharing.
- JSON-LD structured data for `Person`, `WebSite`, `ProfilePage`, and primary image entities.
- `robots.txt` and `sitemap.xml` for crawler discovery.

## Repository Structure

```text
.
├── index.html
├── _config.yml
├── robots.txt
├── sitemap.xml
├── icon.png
├── nguyenquocanh.pdf
├── google1af31760d36ab0ed.html
└── assets
    ├── css
    │   └── style.css
    ├── js
    │   └── app.js
    └── optimized
        ├── nguyen-quoc-anh-ai-engineer-deep-learning-researcher.jpg
        ├── nguyen-quoc-anh-portfolio-social-preview.jpg
        ├── clam-1400.jpg
        ├── node-1400.png
        ├── model-1400.png
        ├── triple-1400.jpeg
        ├── veam-1400.png
        ├── news-1400.png
        └── d3-1400.png
```

## SEO Notes

The portfolio includes:

- Canonical homepage URL.
- Search-optimized title and description for "Nguyen Quoc Anh".
- Open Graph and Twitter/X preview tags.
- Name-rich image filenames and descriptive alt text.
- JSON-LD schema describing Nguyen Quoc Anh as an AI Engineer and Deep Learning Researcher.
- Sitemap image entries to help image search discover portfolio visuals.

Search ranking is ultimately controlled by search engines, external backlinks, crawl frequency, and profile consistency across the web. This repository provides the strongest on-page signals available for a static GitHub Pages portfolio.

## Local Preview

Run a local static server from the repository root:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173/
```

## Deployment

The site is deployed through GitHub Pages from the `main` branch. Changes pushed to `main` are published automatically by GitHub Pages.

## Social Preview Refresh

Some apps cache link previews aggressively. If a preview shows an old image or title, refresh the scraper cache:

- Facebook / Messenger: [Sharing Debugger](https://developers.facebook.com/tools/debug/)
- LinkedIn: [Post Inspector](https://www.linkedin.com/post-inspector/)
- X / Twitter and messaging apps may require time or a cache-busting URL.

## License

All portfolio content, images, and personal materials are owned by Nguyen Quoc Anh unless otherwise noted.
