"use client"

import type { ReactNode } from "react"

interface PortfolioSectionProps {
  children: ReactNode
}

export default function PortfolioSection({ children }: PortfolioSectionProps) {
  return <div className="portfolio-sections">{children}</div>
}

