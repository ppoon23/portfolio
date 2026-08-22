"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Github, Twitter, Mail, Linkedin, FileText, ArrowDown, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import profilePic from "@/assets/profile.jpg"

const rotatingSpecialties = [
  "LLMs, RAG Pipelines & Gemini (Vertex AI)",
  "Vision Foundation Models (ViT, DINOv3 & YOLO-NAS)",
  "5M+ Embedding Indexing & Active Learning",
  "High-Throughput ML Data Engines (>1TB)",
]

export function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // 3D Tilt Physics for the Entire Hanging Assembly
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 22 })
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 22 })

  // Coordinated 3D rotation with top-center pivot
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"])
  const lanyardSway = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"])

  // Dynamic holographic glare coordinates
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"])
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingSpecialties.length)
    }, 3200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative pt-8 sm:pt-12 pb-20 px-4 flex flex-col items-center justify-center">
      {/* 3D Interactive Hanging Badge & Tag Assembly */}
      <div 
        ref={containerRef}
        className="perspective-[1200px] w-full max-w-2xl flex flex-col items-center select-none"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Whole Connected Hanging Unit (Strap + Clasp + ID Card) Moving in Sync */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            rotateZ: lanyardSway,
            transformStyle: "preserve-3d",
            transformOrigin: "top center",
          }}
          whileHover={{ scale: 1.015 }}
          className="w-full flex flex-col items-center"
        >
          {/* Top Woven Lanyard Ribbon */}
          <div className="w-8 h-14 sm:h-18 bg-[#2d2b2a] border-x border-(--card-border) shadow-md flex items-center justify-center relative overflow-hidden">
            {/* Subtle strap stitch lines */}
            <div className="absolute left-1 top-0 bottom-0 w-[1px] bg-(--japandi-ash) opacity-40" />
            <div className="absolute right-1 top-0 bottom-0 w-[1px] bg-(--japandi-ash) opacity-40" />
          </div>

          {/* Minimalist Gunmetal Metallic Clasp */}
          <div className="flex flex-col items-center -mt-0.5 z-20">
            <div className="w-10 h-2.5 bg-[#2d2b2a] rounded-t-sm border border-(--card-border) shadow-2xs" />
            <div className="w-6 h-4 bg-gradient-to-b from-(--japandi-stone) via-(--japandi-sand) to-(--japandi-clay) rounded-b-md shadow-xs border-x border-b border-(--card-border) flex items-center justify-center">
              <div className="w-2.5 h-1 bg-[#2d2b2a] rounded-2xs" />
            </div>
          </div>

          {/* Clean Japandi ID Card */}
          <div className="relative w-full editorial-card rounded-[28px] overflow-hidden text-left p-6 sm:p-8 -mt-2 transition-all duration-300">
            {/* Subtle Japandi Shimmer */}
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-30 mix-blend-color-dodge transition-opacity duration-300 group-hover:opacity-60 z-30"
              style={{
                background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(220, 180, 130, 0.8) 0%, rgba(192, 158, 133, 0.3) 35%, rgba(176, 185, 168, 0.2) 60%, transparent 75%)`,
              }}
            />

            {/* Minimal Lanyard Punch Slot */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-(--japandi-stone) rounded-full border border-(--card-border) z-20" />

            {/* Main ID Body: Clean Portrait + Details */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-7 items-center sm:items-start pt-2">
              {/* Clean Portrait Frame */}
              <div className="relative shrink-0">
                <div className="w-32 h-40 sm:w-36 sm:h-48 rounded-2xl overflow-hidden border border-(--card-border) bg-(--pill-bg) shadow-sm relative">
                  <Image
                    src={profilePic}
                    alt="Patrick Poon"
                    fill
                    className="object-cover scale-135"
                    priority
                  />
                </div>
              </div>

              {/* Identification & Information Details */}
              <div className="flex-1 space-y-3.5 w-full text-center sm:text-left">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-(--text-heading) font-sans tracking-tight">
                    Patrick Poon
                  </h1>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-(--accent-primary)" />
                    <span className="text-sm sm:text-base font-semibold text-(--text-body) font-sans">
                      AI/ML Software and Data Engineer
                    </span>
                  </div>
                </div>

                {/* Animated Rotating Specialty Focus */}
                <div className="h-6 flex items-center justify-center sm:justify-start overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={currentTextIndex}
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -12, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="text-xs sm:text-sm font-medium text-(--text-muted) font-sans flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-(--accent-warm) shrink-0" />
                      {rotatingSpecialties[currentTextIndex]}
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* Concise Bio / About Me */}
                <p className="text-(--text-body) text-xs sm:text-[13px] leading-relaxed font-sans pt-1">
                  Applying AI/ML to solve real-world problems. Solving data engineering challenges. Exploring the intersection of technology and creativity. Enthusiast of global travel &amp; street gastronomy.
                </p>

                {/* Action Buttons & Social Dock */}
                <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                  <Link
                    href="#highlights"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-(--accent-primary) hover:opacity-90 text-(--accent-primary-fg) font-medium text-xs tracking-wide uppercase font-mono shadow-xs hover:shadow-sm transition-all group"
                  >
                    <span>Selected Work</span>
                    <ArrowDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
                  </Link>

                  <Link
                    href="https://docs.google.com/document/d/179yKPZCjMsoWF6HklqM7rW1IDkxx2SN3vXwP8YHmBbI/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-(--pill-bg) hover:bg-(--japandi-stone) text-(--text-heading) border border-(--card-border) font-mono text-xs uppercase font-medium transition-all"
                  >
                    <FileText className="w-3 h-3" />
                    <span>Resume</span>
                  </Link>

                  {/* Social Dock */}
                  <div className="flex items-center gap-0.5 p-0.5 rounded-full bg-(--pill-bg) border border-(--card-border)">
                    <Link
                      href="https://x.com/ppoon23"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full text-(--text-muted) hover:text-(--text-heading) hover:bg-(--card-bg) transition-all"
                      title="X (Twitter)"
                      aria-label="Twitter / X"
                    >
                      <Twitter className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="https://github.com/ppoon23"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full text-(--text-muted) hover:text-(--text-heading) hover:bg-(--card-bg) transition-all"
                      title="GitHub"
                      aria-label="GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/ppoon23/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full text-(--text-muted) hover:text-(--text-heading) hover:bg-(--card-bg) transition-all"
                      title="LinkedIn"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="mailto:patrickpoon23@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full text-(--text-muted) hover:text-(--text-heading) hover:bg-(--card-bg) transition-all"
                      title="Email Me"
                      aria-label="Email"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Clean Minimalist Footer */}
            <div className="mt-5 pt-3 border-t border-(--card-border) flex items-center justify-between text-[11px] font-mono text-(--text-ash)">
              <span>NEW YORK, NY</span>
              <span className="text-(--accent-primary) font-semibold">AI/ML • COMPUTER VISION • DATA</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
