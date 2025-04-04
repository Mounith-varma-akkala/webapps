"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/animated-text"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { FeaturedSpeakers } from "@/components/featured-speakers"
import { FeaturedSponsors } from "@/components/featured-sponsors"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.5 }}
              className="relative w-32 h-32 md:w-48 md:h-48"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <X className="w-full h-full text-red-600 stroke-[1px]" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 border-t-2 border-red-600 rounded-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-noise"></div>
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/20 rounded-full filter blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-red-600/10 rounded-full filter blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-center mb-8"
            >
              <h1 className="text-6xl md:text-8xl font-extrabold mb-4 glitch" data-text="TEDxMREC">
                <span className="text-gradient">TEDx</span>
                <span className="text-white">MREC</span>
              </h1>
              <AnimatedText
                text="Ideas worth spreading"
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
                type="chars"
                delay={1.5}
                duration={0.03}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative w-32 h-32 md:w-48 md:h-48">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <X className="w-full h-full text-red-600 stroke-[1px]" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center text-white text-xs md:text-sm opacity-70"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.7, 0.9, 0.7],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="text-center leading-tight">
                    IDEAS WORTH SPREADING INNOVATION CREATIVITY INSPIRATION
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="mt-12 text-center"
            >
              <Link href="#what-is-tedx">
                <Button
                  variant="outline"
                  className="rounded-full border-red-600 text-white hover:bg-red-600/20 hover-glow"
                >
                  Discover More
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="scroll-down-indicator"
            >
              <ArrowRight className="h-6 w-6 text-red-600 rotate-90" />
            </motion.div>
          </div>
        </section>

        {/* What is TEDx Section */}
        <section id="what-is-tedx" className="py-20 relative">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                <span className="text-red-600">What is</span> TEDx?
              </h2>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <ScrollReveal delay={0.1} direction="left">
                  <div className="bg-gradient-to-br from-black to-red-950/30 p-6 rounded-lg border border-red-900/20 hover:border-red-600/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.15)] h-full hover-glow">
                    <h3 className="text-2xl font-bold mb-4 text-white">TED</h3>
                    <p className="text-gray-300">
                      TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference
                      in California 30 years ago, TED has grown to support its mission with multiple initiatives.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3} direction="up">
                  <div className="bg-gradient-to-br from-black to-red-950/30 p-6 rounded-lg border border-red-900/20 hover:border-red-600/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.15)] h-full hover-glow">
                    <h3 className="text-2xl font-bold mb-4 text-white">TEDx</h3>
                    <p className="text-gray-300">
                      In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that
                      bring people together to share a TED-like experience. These local, self-organized events are
                      branded TEDx.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.5} direction="right">
                  <div className="bg-gradient-to-br from-black to-red-950/30 p-6 rounded-lg border border-red-900/20 hover:border-red-600/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.15)] h-full hover-glow">
                    <h3 className="text-2xl font-bold mb-4 text-white">TEDxMREC</h3>
                    <p className="text-gray-300">
                      TEDxMREC is an independently organized TEDx event at MREC, featuring talks from diverse speakers
                      sharing innovative ideas and inspiring stories with our community.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Speakers Section */}
        <section className="py-20 relative bg-black/50">
          <div className="absolute inset-0 bg-noise"></div>
          <div className="container mx-auto px-4 relative z-10">
            <FeaturedSpeakers />
          </div>
        </section>

        {/* Why Attend Section */}
        <ParallaxSection speed={0.1} direction="up">
          <section className="py-20 relative bg-black/50">
            <div className="absolute inset-0 bg-noise"></div>
            <div className="container mx-auto px-4 relative z-10">
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                  Why Attend <span className="text-red-600">TEDxMREC</span>?
                </h2>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  <ScrollReveal delay={0.1} direction="left">
                    <div className="flex gap-4 p-6 rounded-lg border border-red-900/20 hover:border-red-600/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.15)] bg-gradient-to-br from-black to-red-950/30 hover-glow group">
                      <div className="relative overflow-hidden">
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors">
                          Explore Inspiring Ideas
                        </h3>
                        <div className="h-0.5 w-0 bg-red-600 group-hover:w-full transition-all duration-500"></div>
                        <p className="text-gray-300 mt-4">
                          Engage with thought-provoking talks and discussions across various themes, curated to
                          stimulate your mind.
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.3} direction="right">
                    <div className="flex gap-4 p-6 rounded-lg border border-red-900/20 hover:border-red-600/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.15)] bg-gradient-to-br from-black to-red-950/30 hover-glow group">
                      <div className="relative overflow-hidden">
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors">
                          Discover Cutting-edge Insights
                        </h3>
                        <div className="h-0.5 w-0 bg-red-600 group-hover:w-full transition-all duration-500"></div>
                        <p className="text-gray-300 mt-4">
                          Be the first to know about groundbreaking concepts, innovations, and breakthroughs in various
                          fields.
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.5} direction="left">
                    <div className="flex gap-4 p-6 rounded-lg border border-red-900/20 hover:border-red-600/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.15)] bg-gradient-to-br from-black to-red-950/30 hover-glow group">
                      <div className="relative overflow-hidden">
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors">
                          Forge Meaningful Connections
                        </h3>
                        <div className="h-0.5 w-0 bg-red-600 group-hover:w-full transition-all duration-500"></div>
                        <p className="text-gray-300 mt-4">
                          Connect with fellow enthusiasts, experts, and visionaries in an environment conducive to
                          networking and collaboration.
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.7} direction="right">
                    <div className="flex gap-4 p-6 rounded-lg border border-red-900/20 hover:border-red-600/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.15)] bg-gradient-to-br from-black to-red-950/30 hover-glow group">
                      <div className="relative overflow-hidden">
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors">
                          Experience Enlightening Entertainment
                        </h3>
                        <div className="h-0.5 w-0 bg-red-600 group-hover:w-full transition-all duration-500"></div>
                        <p className="text-gray-300 mt-4">
                          Enjoy captivating performances, artistic expressions, and immersive experiences that blend
                          entertainment with enlightenment.
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </ParallaxSection>

        {/* Sponsors Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <FeaturedSponsors />
          </div>
        </section>

        {/* Season 2 Coming Soon */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <motion.div
                className="relative overflow-hidden rounded-lg bg-gradient-to-r from-black to-red-900/50 p-8 md:p-12 border border-red-900/30"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 -mt-16 -mr-16">
                  <motion.div
                    className="relative w-48 h-48 opacity-20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <X className="w-full h-full text-red-600 stroke-[1px]" />
                  </motion.div>
                </div>

                <div className="absolute -bottom-20 -left-20 opacity-10">
                  <motion.div
                    className="relative w-48 h-48"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <X className="w-full h-full text-yellow-400 stroke-[1px]" />
                  </motion.div>
                </div>

                <div className="relative z-10">
                  <motion.h2
                    className="text-5xl md:text-7xl font-extrabold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <AnimatedText text="SEASON 2" className="inline-block" type="chars" delay={0.1} duration={0.05} />
                    <span className="text-white"> </span>
                    <span className="text-yellow-400"></span>
                  </motion.h2>
                  <motion.p
                    className="text-2xl md:text-3xl text-gray-300 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    coming soon <span className="text-red-500">xoxo</span>
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      className="bg-red-600 hover:bg-red-700 text-white hover-glow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Notified
                    </Button>
                    <Button
                      variant="outline"
                      className="border-red-600 text-white hover:bg-red-600/20 hover-glow"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  )
}

