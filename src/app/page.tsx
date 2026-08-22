import { BackgroundEffects } from "@/components/background-effects"
import { PortfolioNavbar } from "@/components/portfolio-navbar"
import { Hero } from "@/components/hero"
import { BentoGrid } from "@/components/bento-grid"
import { SkillsMarquee } from "@/components/skills-marquee"
import { Timeline } from "@/components/timeline"
import { BlogSection } from "@/components/blog-section"
import Link from "next/link"
import { ArrowUp, Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-(--japandi-canvas) font-sans text-(--text-heading) relative selection:bg-(--accent-primary) selection:text-(--accent-primary-fg) overflow-x-hidden transition-colors duration-500">
      {/* Background Ambience & Mouse Spotlight (Zen Sand Ripples) */}
      <BackgroundEffects />

      {/* Floating Tubelight Navbar */}
      <PortfolioNavbar />

      <main className="relative z-10 container mx-auto max-w-5xl px-4 sm:px-6">
        <Hero />
        <BentoGrid />
        <SkillsMarquee />
        <Timeline />
        <BlogSection />
      </main>

      {/* Japandi Editorial Footer */}
      <footer className="relative z-10 py-14 border-t border-(--footer-border) bg-(--footer-bg) backdrop-blur-md mt-16 transition-colors duration-500">
        <div className="container mx-auto px-4 max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-(--text-muted) font-sans">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span className="font-bold text-(--text-heading) tracking-tight text-sm">Patrick Poon</span>
            <span>© {new Date().getFullYear()} All rights reserved.</span>
            <span className="hidden sm:inline text-(--card-border)">|</span>
            <span className="font-editorial-serif italic text-(--text-ash)">Computer Vision &amp; Deep Learning Systems</span>
          </div>

          {/* Social Icons in Footer */}
          <div className="flex items-center gap-3 text-(--text-muted)">
            <Link
              href="https://x.com/ppoon23"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:text-(--text-heading) hover:bg-(--pill-bg) transition-colors"
              aria-label="Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </Link>
            <Link
              href="https://github.com/ppoon23"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:text-(--text-heading) hover:bg-(--pill-bg) transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ppoon23/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:text-(--text-heading) hover:bg-(--pill-bg) transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link
              href="mailto:patrickpoon23@gmail.com"
              className="p-2 rounded-full hover:text-(--text-heading) hover:bg-(--pill-bg) transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </Link>
            <Link
              href="#home"
              className="p-2 rounded-full bg-(--accent-primary) text-(--accent-primary-fg) hover:opacity-90 transition-all ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
