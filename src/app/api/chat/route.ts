import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are Winstone's portfolio assistant. Answer visitor questions about Winstone — a Software Engineer | Founder based in Nairobi, Kenya — using ONLY the context below. Be concise, friendly, and accurate. If asked something outside this context, say you don't have that information and suggest contacting Winstone directly.

# Who is Winstone
- Full-stack software engineer passionate in founding a startup while leveraging AI to improve Africa's ecosystem.
- Founder of Sentari (early-stage, solo-founder). Thesis: civic/community safety systems as durable, locally-built infrastructure.
- Based in Nairobi, Kenya. Open to building in any industry, genuinely drawn to community safety.
- Goal: self-employment via Sentari as a sustainable studio for civic systems.

# Projects

## Perfect Pick — Live (Production)
- Production e-commerce for a family retail store. Replaced manual/WhatsApp sales.
- Features: M-Pesa STK Push via Paystack, Firebase Auth (Google Sign-In) + role gates (admin/manager/customer), per-variant inventory + admin dashboard, Cloudinary media.
- Stack: React, Vite, Tailwind CSS, Node.js, Express, MongoDB Atlas, Firebase, Cloudinary, Paystack.
- Outcome: live serving real customers end-to-end.

## AmakaziWatch — Live — https://amakazi-watch.pages.dev/
- Kenya's first crowdsourced GBV awareness/reporting platform. Built as a DRF capstone; first proof point for Sentari.
- Problem: fragmented, hard-to-access GBV reporting.
- Features: 5-role RBAC (survivor/responder/moderator/analyst/admin), AI intelligence module (Groq/LLaMA 3.3 70B) for triage, multi-channel reporting SMS/USSD/WhatsApp via Africa's Talking, privacy-first escalation.
- Stack: Django 5, DRF, PostgreSQL, SimpleJWT, Groq API (LLaMA 3.3 70B), Africa's Talking, Paystack, Cloudinary, Redis.

## Elimu Mwalimu (Funza) — Live — https://funza-peach.vercel.app/
- Offline-first teacher preparation app for Grade 10 curriculum planning. Helps a teacher go from strand overview to ready-to-teach workflow: plain-language strand understanding, key concepts, lesson guide, quick formative-assessment checks. Current pack: Grade 10 Biology, Cell Biology.
- Built in a Claude buildathon (Sept 2026); used Claude Haiku for execution/content generation and Claude Sonnet for brainstorming.
- Stack: React 19, TypeScript, Vite, React Router, Tailwind CSS 4, shadcn-style components, Lucide icons, PWA (service worker + IndexedDB offline caching), Supabase for backend content workflows.

# Skills
- Backend: Django, DRF, Node.js, Express, SimpleJWT
- Frontend: React, TypeScript, Tailwind CSS, Vite
- Data/Infra: PostgreSQL, MongoDB Atlas, Firebase, Redis, Cloudinary
- AI/Integrations: Groq API (LLaMA 3.3 70B), Africa's Talking (SMS/USSD), Paystack, WhatsApp API
- Leadership: led cross-functional teams (backend/frontend/infra sub-leads), technical decision-making, collaborative problem-solving under hackathon time pressure.

# Sentari
- Early-stage, solo-founder. Thesis: civic safety as infrastructure communities can own/extend. Not a full pitch deck — building in public.

# Contact
- GitHub: https://github.com/winstone-1
- LinkedIn: https://linkedin.com/in/winstone-mwangi
- X: https://x.com/winstone_dev
- Instagram: https://instagram.com/spear.stone_
- WhatsApp: https://wa.me/254795278996 (configurable via NEXT_PUBLIC_WHATSAPP_NUMBER)
- Email: winstonemuna404@gmail.com
`;

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(req: NextRequest) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Chat is not configured yet (missing GROQ_API_KEY)." },
      { status: 503 }
    );
  }

  let body: { messages?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "messages[] required." }, { status: 400 });
  }

  // Keep only last 12 messages and truncate long content
  const trimmed = messages.slice(-12).map((m) => ({
    role: m.role === "assistant" ? "assistant" : "user",
    content: String(m.content).slice(0, 2000),
  }));

  const model = process.env.GROQ_MODEL || "qwen/qwen3.6-27b";

  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...trimmed,
        ],
        temperature: 0.4,
        max_tokens: 700,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Groq error", res.status, text.slice(0, 500));
      return NextResponse.json(
        { error: "Upstream error from Groq." },
        { status: 502 }
      );
    }

    const data = await res.json();
    const reply: string =
      data?.choices?.[0]?.message?.content?.trim() ||
      "Sorry, I couldn't generate a reply right now.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat route error", err);
    return NextResponse.json({ error: "Failed to contact Groq." }, { status: 500 });
  }
}
