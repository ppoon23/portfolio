"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)

  useEffect(() => {
    const sectionElements = items
      .map(item => item.url.startsWith("#") ? document.querySelector(item.url) : null)
      .filter(Boolean) as HTMLElement[]

    if (sectionElements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            const matchedItem = items.find(item => item.url === `#${id}`)
            if (matchedItem) {
              setActiveTab(matchedItem.name)
            }
          }
        })
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    )

    sectionElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [items])

  return (
    <nav
      aria-label="Main Navigation"
      className={cn(
        "fixed bottom-4 sm:top-6 sm:bottom-auto left-1/2 -translate-x-1/2 z-50",
        className,
      )}
    >
      <div className="flex items-center gap-1 sm:gap-1.5 bg-(--card-bg) border border-(--card-border) backdrop-blur-xl py-1.5 px-2 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-medium px-3.5 sm:px-4 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5",
                isActive
                  ? "text-(--accent-primary-fg) font-semibold"
                  : "text-(--text-body) hover:text-(--text-heading) hover:bg-(--pill-bg)",
              )}
            >
              <Icon size={15} className={cn("transition-transform", isActive && "scale-105 text-(--accent-primary-fg)")} />
              <span className="hidden sm:inline font-sans text-xs tracking-wide">{item.name}</span>

              {isActive && (
                <motion.div
                  layoutId="tubelight-active"
                  className="absolute inset-0 w-full bg-(--accent-primary) rounded-full -z-10 shadow-sm"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 32,
                  }}
                >
                  {/* Subtle Hinoki Wood warm tubelight glow indicator */}
                  <div className="absolute -bottom-[2px] sm:-bottom-[3px] left-1/2 -translate-x-1/2 w-4 h-[2px] bg-(--accent-warm) rounded-full">
                    <div className="absolute w-6 h-2 bg-(--accent-warm)/40 rounded-full blur-xs -top-1 -left-1" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
