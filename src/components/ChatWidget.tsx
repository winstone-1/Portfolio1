"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, Loader2 } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What did you build with Perfect Pick?",
  "Tell me about AmakaziWatch",
  "What is Elimu Mwalimu?",
  "What is your tech stack?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Winstone's portfolio assistant. Ask me about his projects, skills, or background — powered by Groq.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send(content?: string) {
    const text = (content ?? input).trim();
    if (!text || loading) return;
    setError(null);
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Request failed");
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Something went wrong.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400 text-[#0B1F14] shadow-lg shadow-emerald-900/30 hover:bg-emerald-300 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-5 z-50 flex h-[420px] w-[min(360px,calc(100vw-32px))] flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#11281C]/95 backdrop-blur-xl shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-400 text-[#0B1F14]">
                <Sparkles size={16} />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">Ask about Winstone</p>
                <p className="text-xs text-white/40">Groq · LLaMA — site-aware</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="ml-auto rounded-full p-1.5 text-white/40 hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages */}
            <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${
                      m.role === "user"
                        ? "bg-emerald-400 text-[#0B1F14]"
                        : "bg-white/[0.06] border border-white/[0.06] text-white/85"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-white/[0.06] border border-white/[0.06] px-3.5 py-2.5 text-white/60">
                    <Loader2 size={16} className="animate-spin" />
                  </div>
                </div>
              )}
              {error && <p className="text-xs text-red-300/80 px-1">{error}</p>}
            </div>

            {/* Suggestions */}
            {messages.length <= 2 && (
              <div className="flex flex-wrap gap-1.5 px-4 pb-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-xs text-white/60 hover:bg-white/[0.08] hover:text-white transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-2 border-t border-white/[0.06] p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, stack, background..."
                className="flex-1 rounded-full border border-white/[0.08] bg-white/[0.06] px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-emerald-400/40 focus:bg-white/[0.08]"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-[#0B1F14] disabled:opacity-40 hover:bg-emerald-300 transition"
                aria-label="Send"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
