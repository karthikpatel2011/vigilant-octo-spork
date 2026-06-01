import { createFileRoute } from "@tanstack/react-router";

const SYSTEM_PROMPT = `You are "Senior Bot" — a 3rd-year student at Amrita Vishwa Vidyapeetham, Amaravati who's been through it all and lived to tell the tale. You're helping Batch of 2026 freshers survive their first year.

YOUR VIBE:
- Talk like a real person texting a friend. Casual, funny, zero corporate energy.
- Short replies ONLY. 2–4 sentences max, or a tight bullet list. No essays.
- Throw in light humour, sarcasm, or relatable pain — "yeah we've all been there 💀", "don't do what I did", "trust me bro/sis".
- Use **bold** for the actually important stuff. Use \`code style\` for portal names like \`AUMS\`.
- Emojis are fine but don't spam them.

KEY FACTS:
- Campus: Amrita Vishwa Vidyapeetham, Amaravati (AP). Founded 1994 by Amma (Mata Amritanandamayi Devi), Chancellor. NAAC A++.
- B.Tech branches: CSE, ECE, EEE, ME, Civil, AI & Data Science.
- Exams: CIA (~50%) + ESE (~50%). **Attendance must be ≥ 75%** — fall below and you're cooked.
- Chakravyuha Technical Club — the big tech club, 350+ members, hackathons, CP, open source.
- Other clubs: Literary, Music, Dance, Sports, Photography, E-Cell, IEEE. Recruitment in August–September.
- Hostel: boys' & girls' separate, mess food included, Wi-Fi, in-time rules exist (yes, really).
- Survival basics: carry ID card, charge your laptop, sit front 3 rows, don't miss the first CIA — it hurts more than you think.
- Portals: \`AUMS\` for attendance & marks, that's the one you'll check at 2am in a panic.
- Annual fest: Anokha. Cultural night goes hard.

RULES:
- Off-topic question? Roast it gently and redirect: "bro I'm a college senior not Google 😭 ask me about Amrita stuff!"
- Never make up fees, prof names, exact dates, or phone numbers. Say "check \`AUMS\` or the notice board" instead.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const { messages } = (await request.json()) as {
            messages: { role: "user" | "assistant"; content: string }[];
          };

          if (!Array.isArray(messages) || messages.length === 0) {
            return new Response(
              JSON.stringify({ error: "messages array is required" }),
              { status: 400, headers: { "Content-Type": "application/json" } },
            );
          }

          const apiKey = process.env.GROQ_API_KEY;
          if (!apiKey) {
            return new Response(
              JSON.stringify({ error: "GROQ_API_KEY is not configured" }),
              { status: 500, headers: { "Content-Type": "application/json" } },
            );
          }

          const upstream = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                model: "llama-3.3-70b-versatile",
                stream: true,
                messages: [
                  { role: "system", content: SYSTEM_PROMPT },
                  ...messages.slice(-12),
                ],
              }),
            },
          );

          if (!upstream.ok || !upstream.body) {
            if (upstream.status === 429) {
              return new Response(
                JSON.stringify({
                  error: "Too many questions! Take a breath and try again in a sec.",
                }),
                {
                  status: 429,
                  headers: { "Content-Type": "application/json" },
                },
              );
            }
            if (upstream.status === 402) {
              return new Response(
                JSON.stringify({
                  error: "AI quota exhausted. Please try again later.",
                }),
                {
                  status: 402,
                  headers: { "Content-Type": "application/json" },
                },
              );
            }
            const text = await upstream.text().catch(() => "");
            console.error("AI gateway error", upstream.status, text);
            return new Response(
              JSON.stringify({ error: "AI gateway error" }),
              { status: 500, headers: { "Content-Type": "application/json" } },
            );
          }

          return new Response(upstream.body, {
            headers: {
              "Content-Type": "text/event-stream",
              "Cache-Control": "no-cache, no-transform",
              Connection: "keep-alive",
            },
          });
        } catch (e) {
          console.error("chat handler error", e);
          return new Response(
            JSON.stringify({
              error: e instanceof Error ? e.message : "Unknown error",
            }),
            { status: 500, headers: { "Content-Type": "application/json" } },
          );
        }
      },
    },
  },
});
