"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  SiPython,
  SiPytorch,
  SiGooglecloud,
  SiApachespark,
  SiDocker,
  SiKubernetes,
  SiOpencv,
  SiPostgresql,
  SiGit,
  SiNvidia,
  SiHuggingface,
  SiFastapi,
} from "@icons-pack/react-simple-icons"
import { Cpu, Layers, MessageSquareText } from "lucide-react"

interface TechItem {
  name: string
  icon: React.ComponentType<{ className?: string }>
}

const techStack: TechItem[] = [
  { name: "PyTorch", icon: SiPytorch },
  { name: "Vertex AI / Gemini", icon: SiGooglecloud },
  { name: "vLLMs / Hugging Face", icon: SiHuggingface },
  { name: "Apache Spark", icon: SiApachespark },
  { name: "Python", icon: SiPython },
  { name: "NVIDIA CUDA", icon: SiNvidia },
  { name: "OpenCV", icon: SiOpencv },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "FastAPI", icon: SiFastapi },
  { name: "PostgreSQL / Vector DB", icon: SiPostgresql },
  { name: "Git & CI/CD", icon: SiGit },
]

const skillCategories = [
  {
    id: "llm",
    name: "LLMs, RAG & Generative AI",
    icon: MessageSquareText,
    skills: [
      "Enterprise RAG Systems (10k+ Docs)",
      "Google Gemini (Vertex AI)",
      "vLLMs Multimodal PDF Extraction",
      "Milvus Vector Database",
      "Vector Similarity & Embeddings",
      "LangChain & Prompt Engineering",
    ],
  },
  {
    id: "vision",
    name: "Computer Vision & Active Learning",
    icon: Cpu,
    skills: [
      "Vision Transformers (ViT & DINOv3)",
      "5M+ Image Embedding Indexing",
      "YOLO-NAS Pose Estimation (97%)",
      "DETR & YOLO Object Detection",
      "Active Learning Label Optimization",
      "Data-Centric AI Development",
    ],
  },
  {
    id: "infra",
    name: "MLOps & Big Data Infrastructure",
    icon: Layers,
    skills: [
      "High-Throughput Pipelines (>1TB Data)",
      "Synthetic Data Generation (50M+ Rows)",
      "Apache Spark & AWS EMR (>100GB EHR)",
      "Automated Label Auditing (100k+ Images)",
      "Docker, Kubernetes & CI/CD",
      "Data Quality & Validation",
    ],
  },
]

export function SkillsMarquee() {
  const [activeCategory, setActiveCategory] = useState<string>("llm")

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full editorial-card text-[11px] font-mono uppercase tracking-wider text-(--accent-primary) mb-3 border border-(--card-border)">
            <Cpu className="w-3.5 h-3.5 text-(--accent-warm)" />
            <span>02 / Technical Repertoire</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-(--text-heading) font-sans">
            Tools <span className="font-editorial-serif italic font-normal text-(--text-ash)">&amp; Stack</span>
          </h2>
          <p className="text-(--text-body) font-editorial-serif italic text-base sm:text-lg mt-2 max-w-xl mx-auto">
            From foundation models and RAG pipelines to high-throughput data engineering at terabyte scale.
          </p>
        </div>

        {/* Infinite Marquee Ticker */}
        <div className="relative w-full overflow-hidden py-4 mb-16 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-4 w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused]">
            {[...techStack, ...techStack].map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-(--card-bg) border border-(--card-border) hover:border-(--accent-primary) hover:shadow-md transition-all duration-300 group cursor-default shadow-2xs"
                >
                  <div className="w-5 h-5 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Icon className="w-4 h-4 text-(--text-muted) group-hover:text-(--text-heading) transition-colors" />
                  </div>
                  <span className="text-xs font-mono font-medium text-(--text-body) group-hover:text-(--text-heading) transition-colors">
                    {item.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const Icon = cat.icon
            const isSelected = activeCategory === cat.id

            return (
              <motion.div
                key={cat.id}
                whileHover={{ y: -3 }}
                onClick={() => setActiveCategory(cat.id)}
                className={`p-7 rounded-3xl transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-(--card-bg) border-2 border-(--accent-primary) shadow-md"
                    : "editorial-card border border-(--card-border) hover:border-(--accent-primary)/50"
                }`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl ${isSelected ? "bg-(--accent-primary) text-(--accent-primary-fg)" : "bg-(--pill-bg) text-(--accent-primary)"}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-base text-(--text-heading) font-sans">{cat.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`text-xs px-2.5 py-1 rounded-lg transition-colors font-sans ${
                        isSelected
                          ? "bg-(--pill-bg) text-(--text-heading) border border-(--card-border) font-medium"
                          : "bg-(--pill-bg)/60 text-(--text-body) border border-(--card-border)/60"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
