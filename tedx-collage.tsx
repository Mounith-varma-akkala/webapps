"use client"

import { useState } from "react"
import { X, Menu } from "lucide-react"
import { motion } from "framer-motion"

export default function TEDxCollage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white">
      {/* Top navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <img src="/placeholder.svg?height=30&width=80" alt="TEDx logo" className="h-8" />
          <div className="hidden md:flex gap-4">
            <a href="#" className="text-sm font-medium">
              About
            </a>
            <a href="#" className="text-sm font-medium">
              Speakers
            </a>
            <a href="#" className="text-sm font-medium">
              Schedule
            </a>
          </div>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white p-4">
          <div className="flex justify-end">
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-4 mt-12 items-center">
            <a href="#" className="text-lg font-medium">
              About
            </a>
            <a href="#" className="text-lg font-medium">
              Speakers
            </a>
            <a href="#" className="text-lg font-medium">
              Schedule
            </a>
          </div>
        </div>
      )}

      {/* Collage elements */}
      <div className="absolute inset-0">
        {/* Large X with text */}
        <motion.div
          className="absolute right-[15%] top-[15%] w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-black flex items-center justify-center">
              <X className="w-full h-full text-[#ff0000] stroke-[1px]" />
              <div className="absolute inset-0 flex items-center justify-center text-[#ff0000] text-xs md:text-sm opacity-70 overflow-hidden">
                <div className="text-center leading-tight">
                  IDEAS WORTH SPREADING INNOVATION CREATIVITY INSPIRATION CHANGE MAKERS FUTURE VISION TECHNOLOGY
                  HUMANITY CULTURE SCIENCE DESIGN GLOBAL CHALLENGES SOLUTIONS COMMUNITY IMPACT TRANSFORMATION LEADERSHIP
                  DISCOVERY PASSION PURPOSE
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Red X elements */}
        <motion.div
          className="absolute left-[5%] top-[25%] w-[60px] h-[60px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <X className="w-full h-full text-[#ff0000] stroke-[3px]" />
        </motion.div>

        <motion.div
          className="absolute left-[10%] bottom-[30%] w-[80px] h-[80px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <X className="w-full h-full text-[#ff0000] stroke-[3px]" />
        </motion.div>

        {/* Yellow framed element */}
        <motion.div
          className="absolute left-[30%] top-[20%] w-[120px] h-[100px] md:w-[180px] md:h-[150px] border-4 border-[#fecd00] bg-[#323232] flex items-center justify-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <div className="grid grid-cols-3 gap-1 p-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-full aspect-square bg-black/80 overflow-hidden">
                <img
                  src={`/placeholder.svg?height=50&width=50&text=${i + 1}`}
                  alt="Speaker thumbnail"
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Small yellow framed element */}
        <motion.div
          className="absolute left-[45%] top-[15%] w-[100px] h-[60px] border-4 border-[#fecd00] bg-[#323232] flex items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="grid grid-cols-3 gap-1 p-1">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-full aspect-square bg-black/80"></div>
            ))}
          </div>
        </motion.div>

        {/* Red rectangles */}
        <motion.div
          className="absolute left-[15%] top-[40%] w-[40px] h-[60px] bg-[#ff0000]"
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        />

        <motion.div
          className="absolute left-[25%] top-[50%] w-[30px] h-[30px] bg-[#ff0000]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        />

        <motion.div
          className="absolute right-[30%] bottom-[20%] w-[20px] h-[20px] bg-[#ff0000]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        />

        {/* Black rectangles */}
        <motion.div
          className="absolute left-[20%] top-[60%] w-[50px] h-[70px] bg-black"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        />

        <motion.div
          className="absolute right-[25%] top-[40%] w-[60px] h-[90px] bg-black"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        />

        {/* Bottom gallery section */}
        <div className="absolute bottom-[5%] left-[20%] right-[20%] flex justify-center gap-2 md:gap-4">
          <motion.div
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-[#323232]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          />
          <motion.div
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-[#323232]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          />
          <motion.div
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-[#323232]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          />
          <motion.div
            className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-[#fecd00]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
          />
        </div>

        {/* Right side image */}
        <motion.div
          className="absolute right-[5%] bottom-[30%] w-[120px] h-[60px] md:w-[180px] md:h-[90px] overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          <img
            src="/placeholder.svg?height=90&width=180&text=neural"
            alt="Neural network visualization"
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>

        {/* Bottom right image */}
        <motion.div
          className="absolute right-[5%] bottom-[15%] w-[120px] h-[60px] md:w-[180px] md:h-[90px] overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.7 }}
        >
          <img
            src="/placeholder.svg?height=90&width=180&text=neural"
            alt="Neural network visualization"
            className="w-full h-full object-cover grayscale"
          />
        </motion.div>

        {/* Bottom speaker cards */}
        <motion.div
          className="absolute bottom-[2%] right-[5%] flex gap-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-[40px] h-[60px] md:w-[60px] md:h-[90px] bg-black overflow-hidden">
              <img
                src={`/placeholder.svg?height=90&width=60&text=S${i + 1}`}
                alt={`Speaker ${i + 1}`}
                className="w-full h-full object-cover opacity-70"
              />
            </div>
          ))}
        </motion.div>

        {/* Additional scattered elements */}
        <div className="absolute left-[40%] bottom-[40%] flex gap-2">
          <motion.div
            className="w-[20px] h-[20px] bg-black"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.4 }}
          />
          <motion.div
            className="w-[20px] h-[20px] bg-[#ff0000]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.9, duration: 0.4 }}
          />
        </div>
      </div>
    </div>
  )
}

