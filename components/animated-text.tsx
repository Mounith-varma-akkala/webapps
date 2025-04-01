"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
  duration?: number
  type?: "chars" | "words" | "lines"
}

export function AnimatedText({
  text,
  className = "",
  once = true,
  delay = 0,
  duration = 0.05,
  type = "words",
}: AnimatedTextProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const getElements = () => {
    if (type === "chars") {
      return text.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: delay + index * duration,
              },
            },
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))
    } else if (type === "words") {
      return text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: delay + index * duration,
              },
            },
          }}
        >
          {word}
        </motion.span>
      ))
    } else {
      return text.split("\n").map((line, index) => (
        <motion.div
          key={index}
          className="block"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delay: delay + index * duration,
              },
            },
          }}
        >
          {line}
        </motion.div>
      ))
    }
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} className={className}>
      {getElements()}
    </motion.div>
  )
}

