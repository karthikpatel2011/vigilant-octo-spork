import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What's the CIA + ESE exam pattern?",
  "Tell me about Chakravyuha",
  "Hostel mess timings?",
  "Tips to survive sem 1?",
];

const INITIAL: Msg = {
  role: "assistant",
  content:
    "Hey! I'm **Senior Bot** — your friendly 3rd-year on call. Ask me anything about Amrita Amaravati: hostels, clubs, CIA, surviving Day 1. What's on your mind?",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([INITIAL]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || streaming) return;
    setError(null);

    const userMsg: Msg = { role: "user", content: trimmed };
    const next = [...messages, userMsg];
    setMessages([...next, { role: "assistant", content: "" }]);
    setInput("");
    setStreaming(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const resp = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
        signal: controller.signal,
      });

      if (!resp.ok || !resp.body) {
        const j = await resp.json().catch(() => ({ error: "Request failed" }));
        throw new Error(j.error ?? "Request failed");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let assistant = "";
      let done = false;

      while (!done) {
        const { done: d, value } = await reader.read();
        if (d) break;
        buffer += decoder.decode(value, { stream: true });

        let idx: number;
        while ((idx = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, idx);
          buffer = buffer.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line || line.startsWith(":")) continue;
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") {
            done = true;
            break;
          }
          try {
            const parsed = JSON.parse(json);
            const delta = parsed?.choices?.[0]?.delta?.content;
            if (typeof delta === "string" && delta) {
              assistant += delta;
              setMessages((prev) => {
                const copy = [...prev];
                copy[copy.length - 1] = {
                  role: "assistant",
                  content: assistant,
                };
                return copy;
              });
            }
          } catch {
            buffer = line + "\n" + buffer;
            break;
          }
        }
      }
    } catch (e) {
      if ((e as Error).name === "AbortError") return;
      const msg = e instanceof Error ? e.message : "Something went wrong";
      setError(msg);
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setStreaming(false);
      abortRef.current = null;
    }
  }

  return (
    <>
      {/* Floating launcher */}
      <button
        aria-label={open ? "Close Senior chat" : "Ask a senior"}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-primary-foreground shadow-2xl transition-transform hover:-translate-y-0.5 md:bottom-6 md:right-6"
        style={{
          background:
            "linear-gradient(135deg, var(--primary), color-mix(in oklab, var(--saffron) 75%, var(--primary)))",
        }}
      >
        <span
          aria-hidden
          className="relative flex h-2 w-2"
        >
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/80 opacity-70" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>
        {open ? "Close" : "Ask a senior"}
      </button>

      {open && (
        <div
          className="fixed inset-x-3 bottom-20 z-50 flex max-h-[78vh] flex-col overflow-hidden rounded-2xl border hairline bg-background shadow-2xl backdrop-blur md:inset-x-auto md:right-6 md:bottom-24 md:w-[400px]"
          role="dialog"
          aria-label="Senior Bot chat"
        >
          {/* Header */}
          <div
            className="relative flex items-center justify-between px-4 py-3"
            style={{
              background:
                "linear-gradient(95deg, color-mix(in oklab, var(--primary) 92%, black), color-mix(in oklab, var(--saffron) 55%, var(--primary)))",
            }}
          >
            <div className="flex items-center gap-3 text-primary-foreground">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 font-serif text-lg italic">
                S
              </div>
              <div className="leading-tight">
                <div className="font-serif text-base">Senior Bot</div>
                <div className="text-[10px] uppercase tracking-[0.18em] opacity-80">
                  3rd year · on call
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full bg-white/10 p-1 text-primary-foreground transition-colors hover:bg-white/20"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6l-6 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-secondary text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.role === "assistant" ? (
                    <div className="prose prose-sm max-w-none [&_a]:text-primary [&_code]:rounded [&_code]:bg-background/60 [&_code]:px-1 [&_code]:py-0.5 [&_p]:my-1 [&_ul]:my-1 [&_ul]:pl-4 [&_li]:my-0.5">
                      {m.content ? (
                        <ReactMarkdown>{m.content}</ReactMarkdown>
                      ) : (
                        <span className="inline-flex gap-1">
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/50 [animation-delay:-0.3s]" />
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/50 [animation-delay:-0.15s]" />
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/50" />
                        </span>
                      )}
                    </div>
                  ) : (
                    <span>{m.content}</span>
                  )}
                </div>
              </div>
            ))}

            {error && (
              <div className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive">
                {error}
              </div>
            )}

            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-full border hairline bg-background px-2.5 py-1 text-[11px] text-foreground/80 transition-colors hover:border-primary hover:text-primary"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Composer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-end gap-2 border-t hairline bg-background p-3"
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              placeholder="Ask about hostel, clubs, exams…"
              rows={1}
              className="max-h-32 flex-1 resize-none rounded-xl border hairline bg-secondary px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
              disabled={streaming}
            />
            <button
              type="submit"
              disabled={!input.trim() || streaming}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Send"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
