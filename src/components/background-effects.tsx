"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, ChevronUp, ChevronDown, Check } from "lucide-react"
import { useTheme, Theme } from "@/context/theme-context"

interface ThemePreset {
  id: Theme
  name: string
  icon: React.ComponentType<{ className?: string }>
}

const themePresets: ThemePreset[] = [
  {
    id: "light",
    name: "Light",
    icon: Sun,
  },
  {
    id: "dark",
    name: "Dark",
    icon: Moon,
  },
]

export function BackgroundEffects() {
  const { theme, setTheme } = useTheme()
  const [isExpanded, setIsExpanded] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // Zen Sand Ripples Canvas Physics for Light and Dark themes
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
      mouse.active = true
    }

    const handleMouseLeave = () => {
      mouse.active = false
      mouse.targetX = -1000
      mouse.targetY = -1000
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("resize", handleResize)

    let time = 0

    const render = () => {
      time += 0.007

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08
      mouse.y += (mouse.targetY - mouse.y) * 0.08

      ctx.clearRect(0, 0, width, height)

      // Karesansui Zen Sand Ripples
      const numLayers = 9
      const step = 20
      const pointsCount = Math.ceil(width / step) + 2

      for (let layer = 0; layer < numLayers; layer++) {
        const baseY = height * 0.15 + (layer * (height * 0.78)) / numLayers
        const layerPhase = layer * 0.68
        const amplitude = 28 + layer * 6
        const frequency = 0.0018 + layer * 0.00035

        ctx.beginPath()

        for (let i = 0; i <= pointsCount; i++) {
          const x = i * step - step

          // Harmonic gentle sand waves
          const wave1 = Math.sin(x * frequency + time + layerPhase) * amplitude
          const wave2 = Math.cos(x * frequency * 1.5 - time * 0.7 + layerPhase) * (amplitude * 0.35)
          const wave3 = Math.sin(x * 0.0008 - time * 0.4) * 12

          let y = baseY + wave1 + wave2 + wave3

          // Zen stone deflection around mouse cursor
          if (mouse.active || mouse.x > -500) {
            const dx = x - mouse.x
            const dy = y - mouse.y
            const dist = Math.hypot(dx, dy)
            const stoneRadius = 240

            if (dist < stoneRadius && dist > 0) {
              const influence = Math.cos((dist / stoneRadius) * (Math.PI / 2))
              const ripple = Math.sin(dist / 18 - time * 4) * 14 * influence
              y += ripple + influence * 25 * Math.sin(layerPhase)
            }
          }

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        const isAccent = layer === 3 || layer === 6

        if (theme === "light") {
          ctx.lineWidth = isAccent ? 1.2 : 0.75
          ctx.strokeStyle = isAccent
            ? "rgba(192, 158, 133, 0.28)" // #c09e85 (Clay Terracotta)
            : "rgba(143, 131, 122, 0.08)" // #8f837a (Warm Ash)
        } else {
          // Dark Mode
          ctx.lineWidth = isAccent ? 1.1 : 0.7
          ctx.strokeStyle = isAccent
            ? "rgba(220, 180, 130, 0.24)" // Hinoki Gold
            : "rgba(243, 240, 232, 0.05)" // Ethereal Sumi Line
        }

        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("resize", handleResize)
    }
  }, [theme])

  const currentThemePreset = themePresets.find((p) => p.id === theme) || themePresets[0]

  return (
    <>
      {/* Background Container */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-(--japandi-canvas) transition-colors duration-500">
        {/* Ambient Warm Glow Volumes */}
        <div
          className="absolute -top-36 right-10 w-[550px] h-[550px] rounded-full blur-[140px] transition-all duration-700"
          style={{ background: "var(--glow-1)" }}
        />
        <div
          className="absolute top-1/3 -left-32 w-[600px] h-[600px] rounded-full blur-[160px] transition-all duration-700"
          style={{ background: "var(--glow-2)" }}
        />
        <div
          className="absolute -bottom-24 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] transition-all duration-700"
          style={{ background: "var(--glow-3)" }}
        />

        {/* Washi Paper Grain Texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Zen Sand Ripples Canvas Layer */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{
            maskImage: "radial-gradient(ellipse 95% 80% at 50% 45%, black 45%, transparent 95%)",
            WebkitMaskImage: "radial-gradient(ellipse 95% 80% at 50% 45%, black 45%, transparent 95%)",
          }}
        />
      </div>

      {/* ============================================================== */}
      {/* FLOATING THEME CONTROLLER DROPDOWN */}
      {/* ============================================================== */}
      <div className="fixed bottom-5 left-5 z-50 pointer-events-auto">
        <motion.div
          layout
          className="bg-(--card-bg) backdrop-blur-xl border border-(--card-border) rounded-2xl shadow-lg p-1.5 flex flex-col items-start overflow-hidden transition-all duration-300 select-none"
        >
          {/* Header Bar */}
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between gap-3 w-full px-3 py-1.5 cursor-pointer rounded-xl hover:bg-(--japandi-stone)/50 transition-colors"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-(--accent-warm) animate-pulse" />
              <span className="text-xs font-mono font-bold text-(--text-heading)">
                Theme: {currentThemePreset.name}
              </span>
            </div>

            <button
              aria-label={isExpanded ? "Collapse theme menu" : "Expand theme menu"}
              className="text-(--text-muted) hover:text-(--text-heading) transition-colors"
            >
              {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Expandable Theme Options: Light and Dark */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="w-full pt-1.5 space-y-1"
              >
                {themePresets.map((preset) => {
                  const Icon = preset.icon
                  const isSelected = theme === preset.id

                  return (
                    <button
                      key={preset.id}
                      onClick={() => {
                        setTheme(preset.id)
                        setIsExpanded(false)
                      }}
                      className={`w-full flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-left transition-all duration-200 ${
                        isSelected
                          ? "bg-(--accent-primary) text-(--accent-primary-fg) font-semibold shadow-xs"
                          : "hover:bg-(--japandi-stone)/50 text-(--text-body) hover:text-(--text-heading)"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon
                          className={`w-4 h-4 shrink-0 ${
                            isSelected ? "text-(--accent-primary-fg)" : "text-(--text-muted)"
                          }`}
                        />
                        <span className="text-xs font-sans font-medium">{preset.name}</span>
                      </div>

                      {isSelected && (
                        <Check className="w-3.5 h-3.5 text-(--accent-primary-fg) shrink-0" />
                      )}
                    </button>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  )
}
