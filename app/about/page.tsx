"use client"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { AnimatedText } from "@/components/animated-text"

export default function About() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            About <span className="text-red-600">TEDxMREC</span>
          </h1>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-black to-red-950/30 p-8 rounded-lg border border-red-900/20 mb-16 hover-glow">
            <AnimatedText
              text="TEDxMREC is an independently organized TEDx event at Mallareddy Engineering College, designed to help communities, organizations and individuals spark conversation and connection through local TED-like experiences."
              className="text-lg text-gray-300 mb-6"
              type="words"
              duration={0.01}
            />
            <p className="text-lg text-gray-300 mb-6">
              At a TEDxMREC event, live speakers combine with TED Talk videos to spark deep discussion and connection in
              a small group. These local, self-organized events are branded TEDx, where x = independently organized TED
              event.
            </p>
            <p className="text-lg text-gray-300">
              Our goal is to bring together bright minds to give talks that are idea-focused, and on a wide range of
              subjects, to foster learning, inspiration and wonder – and provoke conversations that matter.
            </p>
          </div>
        </ScrollReveal>

        <ParallaxSection speed={0.1} direction="up">
          <ScrollReveal delay={0.3}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              What is <span className="text-red-600">TED</span>?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <ScrollReveal delay={0.4} direction="left">
                <div className="bg-gradient-to-br from-black to-red-950/30 p-6 rounded-lg border border-red-900/20 hover-glow group">
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-500 transition-colors">
                    TED Conferences
                  </h3>
                  <div className="h-0.5 w-0 bg-red-600 group-hover:w-full transition-all duration-500 mb-4"></div>
                  <p className="text-gray-300">
                    TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference
                    in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two
                    annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or
                    less.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.5} direction="right">
                <div className="bg-gradient-to-br from-black to-red-950/30 p-6 rounded-lg border border-red-900/20 hover-glow group">
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-500 transition-colors">
                    TED Talks
                  </h3>
                  <div className="h-0.5 w-0 bg-red-600 group-hover:w-full transition-all duration-500 mb-4"></div>
                  <p className="text-gray-300">
                    Many of these talks are then made available, free, at TED.com. TED speakers have included Bill
                    Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi
                    Okonjo-Iweala, Sal Khan and Daniel Kahneman.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </ParallaxSection>

        <ScrollReveal delay={0.6}>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            What is <span className="text-red-600">TEDx</span>?
          </h2>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-black to-red-950/30 p-8 rounded-lg border border-red-900/20 mb-16 relative overflow-hidden hover-glow">
            <motion.div
              className="absolute -top-12 -right-12 opacity-10"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            >
              <X className="w-40 h-40 text-red-600" />
            </motion.div>

            <div className="relative z-10">
              <p className="text-lg text-gray-300 mb-6">
                In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring
                people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers
                combine to spark deep discussion and connection.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                These local, self-organized events are branded TEDx, where x = independently organized TED event. The
                TED Conference provides general guidance for the TEDx program, but individual TEDx events are
                self-organized.
              </p>
              <p className="text-lg text-gray-300">
                Subject to certain rules and regulations, TEDx events are organized by passionate individuals who seek
                to uncover new ideas and to share the latest research in their local areas that spark conversations in
                their communities.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ParallaxSection speed={0.15} direction="up">
          <ScrollReveal delay={0.9}>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Our <span className="text-red-600">Mission</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal delay={1.0} direction="up">
                <div className="bg-gradient-to-br from-black to-red-950/30 p-6 rounded-lg border border-red-900/20 hover-glow group">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-500 transition-colors">
                      Inspire
                    </h3>
                    <div className="h-0.5 w-0 bg-red-600 group-hover:w-full transition-all duration-500 mb-4"></div>
                    <p className="text-gray-300">
                      To inspire our community with innovative ideas and thought-provoking conversations that challenge
                      conventional thinking.
                    </p>
                  </motion.div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={1.1} direction="up">
                <div className="bg-gradient-to-br from-black to-red-950/30 p-6 rounded-lg border border-red-900/20 hover-glow group">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-500 transition-colors">
                      Connect
                    </h3>
                    <div className="h-0.5 w-0 bg-red-600 group-hover:w-full transition-all duration-500 mb-4"></div>
                    <p className="text-gray-300">
                      To connect diverse minds, fostering collaboration and meaningful relationships that extend beyond
                      the event.
                    </p>
                  </motion.div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={1.2} direction="up">
                <div className="bg-gradient-to-br from-black to-red-950/30 p-6 rounded-lg border border-red-900/20 hover-glow group">
                  <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-500 transition-colors">
                      Transform
                    </h3>
                    <div className="h-0.5 w-0 bg-red-600 group-hover:w-full transition-all duration-500 mb-4"></div>
                    <p className="text-gray-300">
                      To transform our community by empowering individuals to take action and create positive change in
                      their spheres of influence.
                    </p>
                  </motion.div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </ParallaxSection>
      </div>
    </div>
  )
}

