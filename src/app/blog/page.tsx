import Link from 'next/link'
import { getSortedPostsData } from '@/lib/blog'

export default function BlogPage() {
    const allPostsData = getSortedPostsData()

    return (
        <div className="min-h-screen bg-background font-sans text-foreground">

            <main className="container mx-auto px-4 pt-12 pb-16">
                <div className="max-w-3xl mx-auto mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
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
                        Back to home
                    </Link>
                </div>
                <h1 className="text-4xl font-bold mb-12 text-center">Blog</h1>

                <div className="max-w-3xl mx-auto space-y-12">
                    {allPostsData.length === 0 ? (
                        <p className="text-center text-muted-foreground">No posts yet. Check back soon!</p>
                    ) : (
                        allPostsData.map(({ slug, date, title, description }) => (
                            <article key={slug} className="group relative flex flex-col items-start bg-muted/20 p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-all">
                                <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                    <Link href={`/blog/${slug}`}>{title}</Link>
                                </h2>
                                <time className="text-sm text-muted-foreground mb-4">{new Date(date).toLocaleDateString()}</time>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {description}
                                </p>
                                <Link
                                    href={`/blog/${slug}`}
                                    className="inline-flex items-center text-primary font-medium hover:underline"
                                >
                                    Read more
                                    <svg
                                        className="ml-2 w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </Link>
                            </article>
                        ))
                    )}
                </div>
            </main>

            <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border mt-12">
                <p>© {new Date().getFullYear()} Patrick Poon. All rights reserved.</p>
            </footer>
        </div>
    )
}
