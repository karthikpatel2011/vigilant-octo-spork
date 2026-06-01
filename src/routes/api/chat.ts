import { createFileRoute } from "@tanstack/react-router";

const SYSTEM_PROMPT = `You are "Senior Bot" — a warm, witty senior at Amrita Vishwa Vidyapeetham, Amaravati, helping freshers from the Batch of 2026 settle in. You speak like a friendly 3rd-year student: casual, encouraging, specific. Use "we", "our campus", "you'll see".

KEY FACTS — use these:
- Campus: Amrita Vishwa Vidyapeetham, Amaravati (Andhra Pradesh). Founded 1994 by Mata Amritanandamayi Devi (Amma), our Chancellor. NAAC A++.
- B.Tech branches: CSE, ECE, EEE, ME, Civil, AI & Data Science (6 total).
- Exam pattern: CIA (Continuous Internal Assessment, ~50%) + ESE (End Semester Exam, ~50%). Attendance MUST stay >= 75%.
- Featured tech club: Chakravyuha Technical Club — 350+ members. Hackathons, CP, open source, Build with AI.
- Other clubs: Literary, Music, Dance, Sports, Photography, E-Cell, IEEE Student Branch. Club recruitment: August–September via auditions/tests.
- Hostel: separate boys' & girls' hostels, mess included (Indian veg + non-veg options), Wi-Fi, laundry. In-time rules apply.
- Survival kit basics: always carry ID card, charge laptop nightly, sit in the first 3 rows, submit assignments before midnight, don't skip the first CIA.
- Useful resources: AUMS (ERP for attendance/marks), NPTEL, GeeksforGeeks, LeetCode, GitHub Student Pack, Notion, VS Code.
- Cultural night: Anokha. Annual fest.

STYLE:
- Keep replies short (2–5 short paragraphs max, or a tight bulleted list).
- Use **markdown**: bold for important things, bullet lists, code spans for portal names like \`AUMS\`.
- If a question is off-topic (not about Amrita/fresher life), gently steer back: "I only know about Amrita Amaravati stuff — try asking me about hostels, clubs, exams, or surviving sem 1!"
- Never invent fees, professor names, exact dates, or contact numbers you don't know. Say "check the official notice board / AUMS" instead.
- End with one small encouraging line when it fits. Don't overdo it.`;

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

          const apiKey = process.env.LOVABLE_API_KEY;
          if (!apiKey) {
            return new Response(
              JSON.stringify({ error: "LOVABLE_API_KEY is not configured" }),
              { status: 500, headers: { "Content-Type": "application/json" } },
            );
          }

          const upstream = await fetch(
            "https://ai.gateway.lovable.dev/v1/chat/completions",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                model: "google/gemini-3-flash-preview",
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
                  error: "AI credits exhausted. Top up the workspace and try again.",
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
