import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Winstone — Software Engineer | Founder",
  description:
    "A full-stack software engineer passionate in founding a startup in today's Gen while leveraging AI to improve Africa's ecosystem. Based in Nairobi, Kenya. Founder of Sentari.",
  metadataBase: new URL("https://winstone.dev"),
  openGraph: {
    title: "Winstone — Software Engineer | Founder",
    description:
      "Full-stack engineer and founder building civic/community safety systems. Based in Nairobi, Kenya.",
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winstone — Software Engineer | Founder",
    description:
      "Full-stack engineer and founder building civic/community safety systems. Based in Nairobi, Kenya.",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t||'light')}catch(e){document.documentElement.setAttribute('data-theme','light')}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col relative isolate overflow-x-hidden bg-background text-foreground">
        <BackgroundBlobs />
        <Header />
        <div className="flex-1 flex flex-col relative z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
