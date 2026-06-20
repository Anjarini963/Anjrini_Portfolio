import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile, siteUrl } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  // Resolves relative URLs (the generated OG/Twitter image) to absolute ones.
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — ${profile.role}`,
  description:
    "Abdullah Anjrini — Full-Stack Product Engineer building practical AI products and the backends behind them. CS (AI) graduate, MSc Finance in progress.",
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description:
      "Full-Stack Product Engineer shipping practical AI products and the backends behind them.",
    url: siteUrl,
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description:
      "Full-Stack Product Engineer shipping practical AI products and the backends behind them.",
  },
};

/**
 * Runs before paint to apply the persisted theme (defaulting to dark), so there
 * is no light-mode flash on load. Kept inline and tiny on purpose.
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var dark = stored ? stored === 'dark' : true;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Read at parse time (before CSS) — tells the browser this page owns
            its theming, so OS/browser auto-dark must not re-invert our colors. */}
        <meta name="color-scheme" content="dark light" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Without JS, IntersectionObserver never runs — keep all content visible. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
