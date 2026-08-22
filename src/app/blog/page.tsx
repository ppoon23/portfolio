import Link from 'next/link'
import { getSortedPostsData } from '@/lib/blog'
import { BackgroundEffects } from '@/components/background-effects'
import { ArrowLeft, Calendar, ArrowRight, BookOpen } from 'lucide-react'

export default function BlogPage() {
  const allPostsData = getSortedPostsData()

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans text-stone-900 relative selection:bg-stone-900 selection:text-stone-50">
      <BackgroundEffects />

      <main className="container mx-auto px-4 pt-16 pb-20 max-w-4xl relative z-10">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-600 hover:text-stone-900 transition-colors px-3.5 py-2 rounded-full editorial-card border border-stone-200 w-max"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to home
          </Link>
        </div>

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full editorial-card text-[11px] font-mono uppercase tracking-wider text-stone-700 mb-3 border border-stone-200">
            <BookOpen className="w-3.5 h-3.5 text-orange-500" />
            <span>04 / Selected Writings</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 font-sans">
            Articles <span className="font-editorial-serif italic font-normal text-stone-700">&amp; Notes</span>
          </h1>
          <p className="text-stone-600 font-editorial-serif italic text-base sm:text-lg mt-2 max-w-lg mx-auto">
            Reflections on AI research, campus visits, and engineering notes.
          </p>
        </div>

        <div className="space-y-6">
          {allPostsData.length === 0 ? (
            <div className="text-center p-12 rounded-3xl editorial-card border border-stone-200 text-stone-500">
              <p className="font-editorial-serif italic text-lg">No articles published yet.</p>
            </div>
          ) : (
            allPostsData.map(({ slug, date, title, description }) => (
              <article
                key={slug}
                className="group relative p-6 sm:p-8 rounded-3xl editorial-card editorial-card-hover border border-stone-200/90 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-2 text-xs text-stone-500 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200 w-max">
                    Tech &amp; Visits
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-orange-600 transition-colors font-sans">
                  <Link href={`/blog/${slug}`}>{title}</Link>
                </h2>

                <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  {description}
                </p>

                <Link
                  href={`/blog/${slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-stone-900 hover:text-orange-600 transition-colors group/link"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))
          )}
        </div>
      </main>

      <footer className="py-8 text-center text-xs text-stone-500 border-t border-stone-200/90 relative z-10 font-sans">
        <p>© {new Date().getFullYear()} Patrick Poon. All rights reserved.</p>
      </footer>
    </div>
  )
}
