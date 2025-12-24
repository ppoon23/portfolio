import { getPostData, getAllPostSlugs } from '@/lib/blog'
import Link from 'next/link'

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
        <div className="min-h-screen bg-background font-sans text-foreground">

            <main className="container mx-auto px-4 pt-12 pb-16">
                <article className="max-w-3xl mx-auto">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
                    >
                        <svg
                            className="mr-2 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Back to blog
                    </Link>

                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{postData.title}</h1>
                        <time className="text-muted-foreground">{new Date(postData.date).toLocaleDateString()}</time>
                    </header>

                    <div
                        className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-code:text-primary prose-code:bg-muted/50 prose-code:px-1 prose-code:rounded prose-pre:bg-muted/50 prose-img:rounded-xl prose-img:max-w-lg"
                        dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
                    />
                </article>
            </main>

            <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border mt-12">
                <p>© {new Date().getFullYear()} Patrick Poon. All rights reserved.</p>
            </footer>
        </div>
    )
}
