import Link from 'next/link'
import { getSortedPostsData } from '@/lib/blog'
import { BookOpen, Calendar, ArrowRight } from 'lucide-react'

export function BlogSection() {
  const allPostsData = getSortedPostsData()

  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full editorial-card text-[11px] font-mono uppercase tracking-wider text-(--accent-primary) mb-3 border border-(--card-border)">
            <BookOpen className="w-3.5 h-3.5 text-(--accent-warm)" />
            <span>04 / Selected Writings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-(--text-heading) font-sans">
            Articles <span className="font-editorial-serif italic font-normal text-(--text-ash)">&amp; Notes</span>
          </h2>
          <p className="text-(--text-body) font-editorial-serif italic text-base sm:text-lg mt-2 max-w-lg mx-auto">
            Reflections on AI research, campus visits, and engineering notes.
          </p>
        </div>

        <div className="space-y-6">
          {allPostsData.length === 0 ? (
            <div className="text-center p-12 rounded-3xl editorial-card border border-(--card-border) text-(--text-muted)">
              <p className="font-editorial-serif italic text-lg">No articles published yet.</p>
            </div>
          ) : (
            allPostsData.map(({ slug, date, title, description }) => (
              <article
                key={slug}
                className="group relative p-6 sm:p-8 rounded-3xl editorial-card editorial-card-hover border border-(--card-border) transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center gap-2 text-xs text-(--text-muted) font-mono">
                    <Calendar className="w-3.5 h-3.5 text-(--accent-warm)" />
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-(--pill-bg) text-(--accent-primary) border border-(--card-border) w-max font-semibold">
                    Tech &amp; Visits
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-(--text-heading) mb-3 group-hover:text-(--accent-primary) transition-colors font-sans">
                  <Link href={`/blog/${slug}`} className="hover:underline">
                    {title}
                  </Link>
                </h3>

                <p className="text-(--text-body) text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  {description}
                </p>

                <Link
                  href={`/blog/${slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-(--accent-primary) hover:text-(--text-heading) transition-colors group/link"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
