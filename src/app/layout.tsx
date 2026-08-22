import type { Metadata } from "next";
import { Montserrat, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-context";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Patrick Poon",
  description: "AI/ML Software and Data Engineer specializing in LLMs, computer vision models, scalable data pipelines, and active learning.",
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${geistMono.variable} ${newsreader.variable} font-sans antialiased bg-(--japandi-canvas) text-(--text-heading) selection:bg-(--accent-primary) selection:text-(--accent-primary-fg)`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
