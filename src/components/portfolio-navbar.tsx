"use client"

import { NavBar, NavItem } from "@/components/tubelight-navbar"
import { Home, Sparkles, Cpu, Briefcase, BookOpen } from "lucide-react"

export function PortfolioNavbar() {
  const navItems: NavItem[] = [
    { name: "Home", url: "#home", icon: Home },
    { name: "Highlights", url: "#highlights", icon: Sparkles },
    { name: "Skills", url: "#skills", icon: Cpu },
    { name: "Experience", url: "#experience", icon: Briefcase },
    { name: "Blog", url: "#blog", icon: BookOpen },
  ]

  return <NavBar items={navItems} />
}