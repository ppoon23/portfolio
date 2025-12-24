import Link from 'next/link'
import { getSortedPostsData } from '@/lib/blog'

export function BlogSection() {
    const allPostsData = getSortedPostsData()

    return (
        <section className="bg-[var(--clr-surface-tonal-a0)] py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 text-center">Blog Posts</h2>

                <div className="max-w-3xl mx-auto space-y-12">
                    {allPostsData.length === 0 ? (
                        <p className="text-center text-muted-foreground">No posts yet. Check back soon!</p>
                    ) : (
                        allPostsData.map(({ slug, date, title, description }) => (
                            <article key={slug} className="group relative flex flex-col items-start p-6 rounded-2xl hover:bg-muted/40 transition-all">
                                <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                    <Link href={`/blog/${slug}`}>{title}</Link>
                                </h3>
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
            </div>
        </section>
    )
}
