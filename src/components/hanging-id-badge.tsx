"use client"

import React, { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Cpu, Wifi, ShieldCheck, QrCode } from "lucide-react"
import Image from "next/image"
import profilePic from "@/assets/profile.jpg"

interface HangingIdBadgeProps {
  className?: string
  isFloating?: boolean
}

export function HangingIdBadge({ className, isFloating = false }: HangingIdBadgeProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  // 3D Tilt Physics
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["14deg", "-14deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-16deg", "16deg"])
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"])
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"])

  // Subtle pendulum sway on lanyard
  const lanyardSway = useTransform(mouseXSpring, [-0.5, 0.5], ["-3.5deg", "3.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()

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

  return (
    <div className={`flex flex-col items-center select-none ${className || ""}`}>
      {/* Realistic Woven Lanyard Ribbon Hanging from Top */}
      <div className="w-full flex flex-col items-center">
        {/* Top Lanyard Strap extending from ceiling */}
        <div className={`w-8 ${isFloating ? "h-16 xl:h-20" : "h-12 sm:h-16"} bg-stone-900 border-x border-stone-800 shadow-md flex items-center justify-center relative overflow-hidden`}>
          {/* Subtle strap stitch lines */}
          <div className="absolute left-1 top-0 bottom-0 w-[1px] bg-stone-700 opacity-60" />
          <div className="absolute right-1 top-0 bottom-0 w-[1px] bg-stone-700 opacity-60" />
          <span className="text-[7px] font-mono uppercase tracking-widest text-stone-400 rotate-90 whitespace-nowrap select-none opacity-80">
            PPOON.AI
          </span>
        </div>

        {/* Metallic Clasp & Key Ring */}
        <div className="flex flex-col items-center -mt-1 z-20">
          <div className="w-11 h-3 bg-stone-800 rounded-t-sm border border-stone-700 shadow-xs flex items-center justify-center">
            <div className="w-5 h-0.5 bg-stone-600 rounded-full" />
          </div>
          <div className="w-6 h-4 bg-gradient-to-b from-stone-400 via-stone-300 to-stone-400 rounded-b-md shadow-sm border-x border-b border-stone-400 flex items-center justify-center">
            <div className="w-3 h-1.5 bg-stone-800 rounded-2xs" />
          </div>
        </div>

        {/* 3D Interactive ID Card */}
        <motion.div
          ref={cardRef}
          style={{
            rotateX,
            rotateY,
            rotateZ: lanyardSway,
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.02 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full max-w-[340px] sm:max-w-[360px] bg-white/95 rounded-3xl border border-stone-300/90 shadow-[0_22px_45px_-12px_rgba(28,25,23,0.2),0_0_0_1px_rgba(28,25,23,0.04)] overflow-hidden text-left backdrop-blur-xl p-5 sm:p-6 -mt-2.5 transition-shadow duration-300"
        >
          {/* Holographic Security Shimmer Layer */}
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-40 mix-blend-color-dodge transition-opacity duration-300 group-hover:opacity-75 z-30"
            style={{
              background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255, 230, 200, 0.85) 0%, rgba(234, 88, 12, 0.28) 30%, rgba(56, 189, 248, 0.18) 55%, transparent 75%)`,
            }}
          />

          {/* Lanyard Punch Slot in Card */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-9 h-1.5 bg-stone-200/90 rounded-full border border-stone-300 z-20" />

          {/* ID Card Header Bar */}
          <div className="flex items-center justify-between border-b border-stone-200/90 pb-3 mb-3.5 pt-1">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-stone-900 text-stone-100 flex items-center justify-center font-bold text-[10px] font-mono">
                P
              </div>
              <div>
                <div className="text-[9px] font-mono uppercase tracking-widest text-stone-500 font-bold">
                  RESEARCH PASS // 2026
                </div>
                <div className="text-[8px] font-mono text-stone-400">
                  ID: NY-023 • VERIFIED
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-stone-400">
              <Wifi className="w-3.5 h-3.5 text-stone-400 rotate-90" />
              {/* Metallic Chip Graphic */}
              <div className="w-7 h-5 rounded-md bg-gradient-to-tr from-amber-200 via-amber-300 to-amber-100 border border-amber-400/80 shadow-2xs flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-0.5 p-0.5 opacity-60">
                  <div className="border-r border-b border-amber-600/50" />
                  <div className="border-b border-amber-600/50" />
                  <div className="border-r border-amber-600/50" />
                  <div className="" />
                </div>
                <Cpu className="w-3 h-3 text-amber-900 relative z-10" />
              </div>
            </div>
          </div>

          {/* Main Photo & Identification Details */}
          <div className="flex gap-4 items-start">
            {/* ID Portrait Frame */}
            <div className="relative shrink-0">
              <div className="w-22 h-30 sm:w-26 sm:h-34 rounded-2xl overflow-hidden border-2 border-stone-800 bg-stone-100 shadow-xs relative group">
                <Image
                  src={profilePic}
                  alt="Patrick Poon"
                  fill
                  className="object-cover scale-140"
                  priority
                />

                {/* Holographic Watermark Badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent flex flex-col justify-end p-1.5">
                  <span className="text-[8px] font-mono uppercase font-bold text-white tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    AUTHENTICATED
                  </span>
                </div>
              </div>

              {/* Clearance Badge */}
              <div className="absolute -bottom-2 -right-1 bg-stone-900 text-stone-100 px-1.5 py-0.5 rounded text-[8px] font-mono uppercase font-bold shadow-sm border border-stone-700 flex items-center gap-1">
                <ShieldCheck className="w-2.5 h-2.5 text-orange-400" />
                LVL 01
              </div>
            </div>

            {/* Identification Fields */}
            <div className="flex-1 space-y-2 min-w-0">
              <div>
                <div className="text-[8px] font-mono uppercase tracking-widest text-stone-400 font-semibold">
                  NAME
                </div>
                <div className="text-lg sm:text-xl font-extrabold text-stone-900 font-sans tracking-tight truncate">
                  Patrick Poon
                </div>
              </div>

              <div>
                <div className="text-[8px] font-mono uppercase tracking-widest text-stone-400 font-semibold">
                  ROLE &amp; CLEARANCE
                </div>
                <div className="text-stone-800 font-bold text-xs">
                  Senior AI/ML Engineer
                </div>
                <div className="text-orange-600 font-mono text-[10px] font-semibold mt-0.5">
                  CV &amp; Data Systems
                </div>
              </div>

              {/* Integrated Mini Bio */}
              <div className="pt-1.5 border-t border-stone-100">
                <div className="text-[8px] font-mono uppercase tracking-widest text-stone-400 font-semibold mb-0.5">
                  ABOUT
                </div>
                <p className="text-stone-600 text-[11px] leading-snug font-sans line-clamp-3">
                  Architecting computer vision models &amp; active learning pipelines. Explorer of global street eats.
                </p>
              </div>
            </div>
          </div>

          {/* ID Card Footer Barcode & QR Code */}
          <div className="mt-3.5 pt-3 border-t border-stone-200/90 flex items-center justify-between gap-2 text-stone-400">
            <div className="flex items-center gap-1">
              <div className="h-4.5 flex items-center gap-[1.5px] opacity-75">
                {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3, 1].map((h, i) => (
                  <div
                    key={i}
                    className="bg-stone-800 rounded-2xs"
                    style={{
                      width: `${h > 2 ? 2 : 1}px`,
                      height: `${11 + (h % 3) * 2}px`,
                    }}
                  />
                ))}
              </div>
              <span className="text-[8px] font-mono text-stone-500 ml-1.5">
                *PPOON-AI*
              </span>
            </div>

            <div className="flex items-center gap-2 text-[9px] font-mono text-stone-600">
              <span className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-stone-700 font-semibold">
                PASS ACTIVE
              </span>
              <QrCode className="w-3.5 h-3.5 text-stone-700" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
