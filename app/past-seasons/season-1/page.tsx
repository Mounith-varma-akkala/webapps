"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"

export default function Season1() {
  const [activeTab, setActiveTab] = useState("speakers")

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 relative inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-red-600 glitch" data-text="Season 1">
                Season 1
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-0.5 bg-red-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our inaugural TEDxMREC event brought together visionaries, innovators, and changemakers.
            </p>
          </div>
        </ScrollReveal>

        {/* Theme Section */}
        <ParallaxSection speed={0.1} direction="up">
          <ScrollReveal delay={0.3}>
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
                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <span className="text-red-600">SEEDS OF</span>
                  <br />
                  <span className="text-white">SOCIAL CHAIN</span>
                </motion.h2>

                <p className="text-lg text-gray-300 mb-6">
                  The theme "Seeds of Social Chain" at our TEDx MREC event underscores the profound impact of each
                  individual on society's intricate tapestry. From diverse backgrounds and professions, we collectively
                  contribute to the balance and harmony of our community.
                </p>
                <p className="text-lg text-gray-300">
                  Through dynamic talks and discussions, our event delved into the ripple effects of individual actions
                  and the transformative power of collaboration. We explored how collective efforts sow the seeds of
                  positive change and nurture a future where everyone's unique contributions are valued and celebrated.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </ParallaxSection>

        {/* Stats Section */}
        <ScrollReveal delay={0.5}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
            <StatCard number="800+" label="AUDIENCE" />
            <StatCard number="8" label="SPEAKERS" />
            <StatCard number="15" label="TEAM" />
            <StatCard number="9+" label="SPONSORS" />
          </div>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal delay={0.6}>
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2 p-1 bg-black/50 rounded-lg border border-red-900/20">
              <TabButton active={activeTab === "speakers"} onClick={() => setActiveTab("speakers")}>
                Speakers
              </TabButton>
              <TabButton active={activeTab === "team"} onClick={() => setActiveTab("team")}>
                Team
              </TabButton>
              <TabButton active={activeTab === "sponsors"} onClick={() => setActiveTab("sponsors")}>
                Sponsors
              </TabButton>
            </div>
          </div>
        </ScrollReveal>

        {/* Content based on active tab */}
        <AnimatePresence mode="wait">
          {activeTab === "speakers" && (
            <motion.div
              key="speakers"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ScrollReveal delay={0.7}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                  {[...Array(8)].map((_, i) => (
                    <SpeakerCard
                      key={i}
                      name={`Speaker ${i + 1}`}
                      title="Innovator & Thought Leader"
                      imageUrl={`/placeholder.svg?height=300&width=300&text=Speaker${i + 1}`}
                    />
                  ))}
                </div>
              </ScrollReveal>
            </motion.div>
          )}

          {activeTab === "team" && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ScrollReveal delay={0.7}>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
                  {[...Array(15)].map((_, i) => (
                    <TeamCard
                      key={i}
                      name={`Team Member ${i + 1}`}
                      role={i === 0 ? "Organizer" : i < 3 ? "Co-organizer" : "Volunteer"}
                      imageUrl={`/placeholder.svg?height=200&width=200&text=Team${i + 1}`}
                    />
                  ))}
                </div>
              </ScrollReveal>
            </motion.div>
          )}

          {activeTab === "sponsors" && (
            <motion.div
              key="sponsors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ScrollReveal delay={0.7}>
                <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
                  {[...Array(9)].map((_, i) => (
                    <SponsorCard
                      key={i}
                      name={`Sponsor ${i + 1}`}
                      imageUrl={`/placeholder.svg?height=150&width=300&text=Sponsor${i + 1}`}
                    />
                  ))}
                </div>
              </ScrollReveal>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function TabButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode
  active: boolean
  onClick: () => void
}) {
  return (
    <motion.button
      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
        active ? "bg-red-600 text-white" : "bg-transparent text-gray-300 hover:bg-red-600/20"
      }`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-black to-red-950/30 p-6 rounded-lg border border-red-900/20 text-center hover-glow"
    >
      <motion.h3
        className="text-4xl md:text-5xl font-bold mb-2 text-red-600"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {number}
      </motion.h3>
      <p className="text-sm md:text-base text-gray-300">{label}</p>
    </motion.div>
  )
}

function SpeakerCard({
  name,
  title,
  imageUrl,
}: {
  name: string
  title: string
  imageUrl: string
}) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      className="bg-gradient-to-br from-black to-red-950/30 rounded-lg border border-red-900/20 overflow-hidden hover-glow group"
    >
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          width={300}
          height={300}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div>
            <h3 className="text-lg font-bold text-white">{name}</h3>
            <p className="text-sm text-gray-300">{title}</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors">{name}</h3>
        <p className="text-sm text-gray-400">{title}</p>
      </div>
    </motion.div>
  )
}

function TeamCard({
  name,
  role,
  imageUrl,
}: {
  name: string
  role: string
  imageUrl: string
}) {
  return (
    <motion.div whileHover={{ y: -5, scale: 1.05 }} className="text-center">
      <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-2 border-red-600 mb-3 hover-glow">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          width={128}
          height={128}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
        />
      </div>
      <h3 className="text-sm md:text-base font-bold text-white">{name}</h3>
      <p className="text-xs text-gray-400">{role}</p>
    </motion.div>
  )
}

function SponsorCard({
  name,
  imageUrl,
}: {
  name: string
  imageUrl: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white/5 p-4 rounded-lg border border-red-900/20 flex items-center justify-center h-24 hover-glow"
    >
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={name}
        width={200}
        height={100}
        className="max-h-16 object-contain transition-all duration-300 hover:brightness-125"
      />
    </motion.div>
  )
}

