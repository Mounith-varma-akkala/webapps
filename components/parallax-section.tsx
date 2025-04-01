"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
}

export function ParallaxSection({ children, className = "", speed = 0.2, direction = "up" }: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  let transformX = useTransform(scrollYProgress, [0, 1], ["0%", "0%"])
  let transformY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"])

  switch (direction) {
    case "up":
      transformY = useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`])
      break
    case "down":
      transformY = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])
      break
    case "left":
      transformX = useTransform(scrollYProgress, [0, 1], ["0%", `${-speed * 100}%`])
      break
    case "right":
      transformX = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])
      break
  }

  const isHorizontal = direction === "left" || direction === "right"

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{
          x: transformX,
          y: transformY,
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  )
}

