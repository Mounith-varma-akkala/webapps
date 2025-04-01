"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Red X elements */}
      <motion.div
        className="absolute top-[15%] left-[10%] text-red-600 opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <X size={60} strokeWidth={1} />
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] right-[15%] text-red-600 opacity-10"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <X size={120} strokeWidth={1} />
      </motion.div>

      <motion.div
        className="absolute top-[60%] left-[20%] text-red-600 opacity-15"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <X size={40} strokeWidth={1} />
      </motion.div>

      {/* Floating shapes */}
      <motion.div
        className="absolute top-[30%] right-[25%] w-16 h-16 rounded-full bg-yellow-400 opacity-5"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[40%] left-[30%] w-24 h-24 rounded-full bg-red-600 opacity-5"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <motion.div
        className="absolute top-[70%] right-[10%] w-32 h-8 bg-white opacity-5"
        animate={{
          y: [0, 20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 14,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      <motion.div
        className="absolute top-[10%] right-[30%] w-8 h-32 bg-white opacity-5"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 11,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2.5,
        }}
      />

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-[30%] -left-[30%] w-[80%] h-[80%] rounded-full bg-gradient-to-r from-red-600/5 to-transparent"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-[30%] -right-[30%] w-[80%] h-[80%] rounded-full bg-gradient-to-l from-yellow-500/5 to-transparent"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </div>
    </div>
  )
}

