const portfolioContext = `You are the concise portfolio assistant for Nguyen Quoc Anh. Only answer questions about his publicly listed professional work and research. Do not invent facts, claim private knowledge, give investment advice, or expose credentials. If a question is outside that scope, say you can help with Anh's experience, AI systems, research, publications, achievements, or contact details.

Current role: AI/ML Engineer II at Hitachi Digital Services. Work includes agentic AI platforms, document intelligence, RAG, workflow automation, rail-planning agents, and HoloLens computer vision. He founded and led research at The Neurone Group and previously researched AI/ML at RMIT Vietnam.

Research: financial time-series forecasting, Transformers, neural ODEs, cryptocurrency forecasting, computer vision, and IoT security. Selected work includes LiteFormer, ChanFormer, IntraFormer, OmniFormer, CLAM, PSR-NODE, HIEU, Candlestick Is All You Need, SLIE, and MDAI 2024 research. Contact: anhnguyen.aiml@gmail.com, LinkedIn /andrewfinance, Google Scholar, and ORCID 0009-0008-0702-743X.`;

const corsHeaders = (origin, allowedOrigin) => ({
  "Access-Control-Allow-Origin": origin === allowedOrigin ? origin : allowedOrigin,
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json; charset=UTF-8",
});

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const headers = corsHeaders(origin, env.PORTFOLIO_ORIGIN);
    if (request.method === "OPTIONS") return new Response(null, { headers });
    if (request.method !== "POST") return Response.json({ error: "Method not allowed" }, { status: 405, headers });

    try {
      const { messages } = await request.json();
      const recentMessages = Array.isArray(messages) ? messages.slice(-8) : [];
      const completion = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: { "Authorization": `Bearer ${env.GROQ_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "openai/gpt-oss-20b",
          temperature: 0.35,
          max_completion_tokens: 420,
          messages: [{ role: "system", content: portfolioContext }, ...recentMessages],
        }),
      });
      if (!completion.ok) throw new Error(`Groq responded ${completion.status}`);
      const data = await completion.json();
      return Response.json({ reply: data.choices?.[0]?.message?.content || "I couldn’t form a response just now." }, { headers });
    } catch {
      return Response.json({ error: "The portfolio assistant is temporarily unavailable." }, { status: 503, headers });
    }
  },
};
