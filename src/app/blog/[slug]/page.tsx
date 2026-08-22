import { getPostData, getAllPostSlugs } from '@/lib/blog'
import { BackgroundEffects } from '@/components/background-effects'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'

interface Params {
  slug: string
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((s) => ({
    slug: s.params.slug,
  }))
}

export default async function Post({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const postData = await getPostData(slug)

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans text-stone-900 relative selection:bg-stone-900 selection:text-stone-50">
      <BackgroundEffects />

      <main className="container mx-auto px-4 pt-16 pb-20 max-w-3xl relative z-10">
        <div className="mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-stone-600 hover:text-stone-900 transition-colors px-3.5 py-2 rounded-full editorial-card border border-stone-200 w-max"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to articles
          </Link>
        </div>

        <article className="editorial-card p-6 sm:p-12 rounded-3xl border border-stone-200/90 shadow-sm">
          <header className="mb-10 pb-6 border-b border-stone-100">
            <div className="inline-flex items-center gap-2 text-xs text-stone-500 font-mono mb-4">
              <Calendar className="w-3.5 h-3.5 text-stone-400" />
              <time dateTime={postData.date}>
                {new Date(postData.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 font-sans">
              {postData.title}
            </h1>
          </header>

          <div
            className="prose prose-stone max-w-none prose-headings:text-stone-900 prose-headings:font-sans prose-p:text-stone-700 prose-p:leading-relaxed prose-a:text-orange-600 hover:prose-a:text-orange-700 prose-strong:text-stone-900 prose-code:text-stone-900 prose-code:bg-stone-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:border prose-code:border-stone-200 prose-img:rounded-2xl prose-img:border prose-img:border-stone-200/80 prose-img:shadow-sm"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
          />
        </article>
      </main>

      <footer className="py-8 text-center text-xs text-stone-500 border-t border-stone-200/90 relative z-10 font-sans">
        <p>© {new Date().getFullYear()} Patrick Poon. All rights reserved.</p>
      </footer>
    </div>
  )
}
