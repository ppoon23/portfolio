"use client"

import React from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Briefcase, ExternalLink, Calendar, CheckCircle2, MapPin } from "lucide-react"
import acubedLogo from "@/assets/acubed3.png"

interface TimelineItem {
  period: string
  location: string
  title: string
  roleSubtitle?: string
  company: string
  companyUrl: string
  logo?: string | StaticImageData
  highlights: string[]
}

const timelineData: TimelineItem[] = [
  {
    period: "Sept 2021 — Present",
    location: "Sunnyvale, CA",
    title: "Senior AI/ML Engineer",
    roleSubtitle: "Promoted from ML & Data Engineer (July 2023)",
    company: "Acubed by Airbus",
    companyUrl: "https://www.linkedin.com/company/airbus/",
    logo: acubedLogo,
    highlights: [
      "Led a cross-functional team of 3 engineers & 2 analysts; architected an enterprise RAG system embedding 10,000+ documents using Google Gemini (Vertex AI) and built multimodal PDF extraction with vLLMs & Milvus Vector DB.",
      "Leveraged Vision Transformers (ViT) and DINOv3 to generate and index 5 Million image embeddings for performance clustering; optimized YOLO-NAS Pose (-25% training time, 95% → 97% accuracy) and active learning with DETR.",
      "Engineered high-throughput CI/CD data pipelines (>1TB), cut batch ingestion time by 85% for 50M+ synthetic rows, and automated 2D label auditing across 100k+ images.",
    ],
  },
  {
    period: "Jan 2021 — July 2021",
    location: "San Francisco, CA",
    title: "Data Science Intern",
    company: "UCSF",
    companyUrl: "https://www.ucsfhealth.org/",
    highlights: [
      "Boosted ML model prediction accuracy and F-score by 33% for patient antibiotic administration 2 days prior using feature engineering, importance analysis, and resampling on >100GB EHR time-series data.",
      "Engineered statistical features using Apache Spark and SQL on AWS EMR clusters in collaboration with the Director of Clinical Informatics.",
    ],
  },
  {
    period: "Aug 2016 — Aug 2020",
    location: "San Diego, CA",
    title: "Engineering Consultant",
    company: "HDR Inc.",
    companyUrl: "https://www.hdrinc.com/",
    highlights: [
      "Delivered water resources engineering solutions focusing on hydraulic flood modeling and hydrological rainfall forecasting.",
      "Developed spatial data analyses and computational simulations to assess environmental impact and optimize watershed infrastructure.",
    ],
  },
]

export function Timeline() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full editorial-card text-[11px] font-mono uppercase tracking-wider text-(--accent-primary) mb-3 border border-(--card-border)">
            <Briefcase className="w-3.5 h-3.5 text-(--accent-warm)" />
            <span>03 / Career Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-(--text-heading) font-sans">
            Work <span className="font-editorial-serif italic font-normal text-(--text-ash)">&amp; Experience</span>
          </h2>
          <p className="text-(--text-body) font-editorial-serif italic text-base sm:text-lg mt-2 max-w-lg mx-auto">
            Proven track record leading AI/ML systems, computer vision models, and engineering infrastructure.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative">
          {/* Vertical Subtle Connector Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-(--card-border)" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6 }}
                className="relative flex flex-col sm:flex-row items-start gap-8"
              >
                {/* Center Node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-(--card-bg) border-2 border-(--accent-primary) flex items-center justify-center z-10 shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-(--accent-primary)" />
                </div>

                {/* Content Card */}
                <div className="ml-10 sm:ml-auto sm:w-[calc(100%-3rem)] editorial-card p-6 sm:p-8 rounded-3xl border border-(--card-border) shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-(--card-border)/40">
                    <div className="flex items-center gap-4">
                      <div className="w-13 h-13 rounded-2xl bg-(--pill-bg) p-2 border border-(--card-border) flex items-center justify-center shrink-0 relative overflow-hidden">
                        {item.logo ? (
                          <Image
                            src={item.logo}
                            alt={item.company}
                            fill
                            className="object-contain p-1"
                          />
                        ) : (
                          <span className="font-bold text-(--text-heading) font-mono text-sm tracking-wider">
                            {item.company.replace(" Inc.", "").toUpperCase()}
                          </span>
                        )}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-bold text-xl text-(--text-heading) font-sans">{item.title}</h3>
                          {item.roleSubtitle && (
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-(--pill-bg) text-(--accent-primary) border border-(--card-border) font-semibold">
                              {item.roleSubtitle}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Link
                            href={item.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono font-semibold uppercase tracking-wider text-(--accent-primary) hover:text-(--text-heading) transition-colors"
                          >
                            {item.company}
                            <ExternalLink className="w-3 h-3" />
                          </Link>
                          <span className="text-(--card-border)">•</span>
                          <span className="text-xs text-(--text-muted) flex items-center gap-1 font-mono">
                            <MapPin className="w-3 h-3 text-(--accent-warm)" />
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-(--pill-bg) border border-(--card-border) text-xs font-mono text-(--text-muted) w-max">
                      <Calendar className="w-3.5 h-3.5 text-(--text-muted)" />
                      {item.period}
                    </div>
                  </div>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-3">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 text-sm text-(--text-body) leading-relaxed font-sans">
                        <CheckCircle2 className="w-4 h-4 text-(--accent-primary) shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
