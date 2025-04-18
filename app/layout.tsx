import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.movie-therapy.com/"),
  title: "Mood-Based Movie Recommendations - Find Films for Your Feelings",
  description:
    "Get personalized mood-based movie recommendations. Find films for happiness, sadness, nostalgia, and more.",
};

export const viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
};

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

const LIGHT_THEME_COLOR = "hsl(0 0% 100%)";
const DARK_THEME_COLOR = "hsl(240deg 10% 3.92%)";
const THEME_COLOR_SCRIPT = `\
(function() {
  var html = document.documentElement;
  var meta = document.querySelector('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'theme-color');
    document.head.appendChild(meta);
  }
  function updateThemeColor() {
    var isDark = html.classList.contains('dark');
    meta.setAttribute('content', isDark ? '${DARK_THEME_COLOR}' : '${LIGHT_THEME_COLOR}');
  }
  var observer = new MutationObserver(updateThemeColor);
  observer.observe(html, { attributes: true, attributeFilter: ['class'] });
  updateThemeColor();
})();`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // `next-themes` injects an extra classname to the body element to avoid
      // visual flicker before hydration. Hence the `suppressHydrationWarning`
      // prop is necessary to avoid the React hydration mismatch warning.
      // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: THEME_COLOR_SCRIPT,
          }}
        />
        <script
          async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3348841435471376"
          crossOrigin="anonymous"></script>
        <meta name="google-site-verification" content="tlKUrcQMOcrXkYKpGth6NP1d_7e6D0I649WLRibGeCI" />
        <meta name="keywords" content="what to watch, mood recommendation, movie and cinema therapy, cinema-therapy, cinema, advanced movie and cinema therapy, bibliotherapy, therapy, healing, self help, self-help, art therapy, family therapy, movie therapy, video work, film recommendations, film lists"></meta>
        <meta name="description" content="Everything you might want to know about movie and cinema therapy: this site is aimed at both the self-help seeker and the therapist, helping you decide what to what and when, providing basic guides and in-depth theory, film recommendations, links to all movie and cinema therapy info on the Web, training opportunities and info on forming your own support group."></meta>
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-center" />
          {children}
          <Analytics />
          <GoogleAnalytics gaId="G-Q78YK981Q5" />
        </ThemeProvider>
      </body>
    </html>
  );
}
