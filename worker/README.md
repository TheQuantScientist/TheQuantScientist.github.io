# Secure Groq portfolio assistant

This Worker keeps the Groq credential off the GitHub Pages site. It uses `openai/gpt-oss-20b` and accepts only `POST` requests from the portfolio origin.

1. Install and authenticate the Cloudflare Wrangler CLI.
2. In this folder, run `wrangler secret put GROQ_API_KEY` and paste a newly rotated Groq key when prompted.
3. Deploy with `wrangler deploy`.
4. Copy the deployed Worker URL into `data-chat-endpoint` on the `<body>` element in `index.html`.

Never place the key in `index.html`, `assets/js/`, or a committed environment file.
