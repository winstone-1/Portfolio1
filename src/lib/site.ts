/**
 * Central site config — keep real contact values here so they stay
 * consistent across components and easy to update.
 *
 * WhatsApp: set `NEXT_PUBLIC_WHATSAPP_NUMBER` (or `WHATSAPP_NUMBER`) in
 * `.env.local` — e.g. `254795278996` (no leading +, no spaces/dashes).
 * Falls back to the number below so the button still works in dev.
 */
export const siteConfig = {
  name: "Winstone",
  title: "Software Engineer | Founder",
  location: "Nairobi, Kenya",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ||
    process.env.WHATSAPP_NUMBER ||
    "254795278996",
  email: "winstonemuna404@gmail.com",
  links: {
    github: "https://github.com/winstone-1",
    linkedin: "https://linkedin.com/in/winstone-mwangi",
    x: "https://x.com/winstone_dev",
    instagram: "https://instagram.com/spear.stone_",
  },
} as const;

export function getWhatsAppLink(message?: string) {
  const digits = siteConfig.whatsappNumber.replace(/[^\d]/g, "");
  const base = `https://wa.me/${digits}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
