import React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface TimelineItem {
    year: string
    logo?: string
    title: string
    company: string
    companyUrl?: string
    description: React.ReactNode
}

const timelineData: TimelineItem[] = [
    {
        year: "2021 - Now",
        title: "Senior AI/ML Engineer",
        company: "Acubed by Airbus",
        companyUrl: "https://www.linkedin.com/company/airbus/",
        logo: "/acubed3.png",
        description: (
            <div className="space-y-4">
                <p>
                    I work on the Wayfinder team, focusing on autonomous commercial aircraft operations including taxi, take-off, and landing. I specialize in architecting scalable data pipelines and optimizing ML workflows—ranging from manual labeling and active learning strategies to training vision models and utilizing embeddings for high-precision data analysis.
                </p>
            </div>
        ),
    },
]

export function Timeline() {
    return (
        <div className="max-w-3xl mx-auto px-6 pb-20">
            <div className="space-y-12">
                {timelineData.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-10 relative">
                        {/* Year Column */}
                        <div className="md:w-32 flex-shrink-0 text-sm text-muted-foreground md:text-right pt-1">
                            {item.year}
                        </div>

                        {/* Timeline Line & Dot */}
                        <div className="hidden md:block absolute left-32 top-2 bottom-0 w-px bg-border -ml-px">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-border" />
                        </div>

                        {/* Content Column */}
                        <div className="flex-1 space-y-2 pb-8 border-l md:border-l-0 pl-6 md:pl-0 border-border ml-2 md:ml-0">
                            {/* Mobile Dot */}
                            <div className="md:hidden absolute left-2 top-2 w-3 h-3 rounded-full bg-border -translate-x-1/2" />

                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-xs font-bold overflow-hidden shrink-0 relative">
                                    {item.logo ? (
                                        <Image
                                            src={item.logo}
                                            alt={item.company}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        item.company.substring(0, 2).toUpperCase()
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                    <Link href={item.companyUrl || "#"} className="text-muted-foreground hover:text-foreground transition-colors">
                                        {item.company}
                                    </Link>
                                </div>
                            </div>

                            <div className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
