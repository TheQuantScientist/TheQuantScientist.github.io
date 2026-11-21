# Secure Groq portfolio assistant

This worker gives the portfolio chatbot a live, streamed AI response. For every request it reads the public portfolio homepage, removes markup, and grounds the model response in that current page content. The browser never receives the API key.

This Worker keeps the Groq credential off the GitHub Pages site. It uses `openai/gpt-oss-20b` and accepts only `POST` requests from the portfolio origin.

1. Install and authenticate the Cloudflare Wrangler CLI.
2. In this folder, run `wrangler secret put GROQ_API_KEY` and paste a newly rotated Groq key when prompted.
3. Deploy with `wrangler deploy`.
4. Copy the deployed Worker URL into `data-chat-endpoint` on the `<body>` element in `index.html`.

Until step 4, the site deliberately uses an on-page fallback so it can still answer a few common portfolio questions; it is not calling an AI model. After the URL is configured, the header changes to `LIVE AI · STREAMING`, a visible connection state appears, and the reply streams token-by-token.

Never place the key in `index.html`, `assets/js/`, or a committed environment file.
