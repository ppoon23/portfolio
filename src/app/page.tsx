import { BlogSection } from "@/components/blog-section"
import { Hero } from "@/components/hero"
import { Timeline } from "@/components/timeline"

export default function Page() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">

      <main>
        <div className="container mx-auto px-4">
          <Hero />
          <Timeline />
        </div>
        <BlogSection />
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border mt-12">
        <p>© {new Date().getFullYear()} Patrick Poon. All rights reserved.</p>
      </footer>
    </div>
  )
}
