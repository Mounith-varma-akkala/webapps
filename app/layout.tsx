import type React from "react"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { Montserrat } from "next/font/google"
import { AnimatedCursor } from "@/components/animated-cursor"
import { ParticleBackground } from "@/components/particle-background"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { FloatingElements } from "@/components/floating-elements"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>TEDxMREC - Ideas Worth Spreading</title>
        <meta name="description" content="TEDxMREC is an independently organized TED event at MREC" />
      </head>
      <body className={`${montserrat.variable} font-sans bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="relative min-h-screen overflow-hidden">
            <div className="fixed inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10"></div>
              <div className="absolute inset-0 bg-grid-pattern opacity-20 z-0"></div>
            </div>

            {/* Background elements */}
            <ParticleBackground />
            <FloatingElements />

            {/* UI elements */}
            <ScrollIndicator />
            <AnimatedCursor />
            <Navbar />

            <main className="relative z-10">{children}</main>

            <footer className="relative z-10 border-t border-red-800/30 mt-20 py-6 text-center text-xs text-gray-400">
              <div className="container mx-auto">
                <p>© {new Date().getFullYear()} TEDxMREC. All rights reserved.</p>
                <p className="mt-2">This independent TEDx event is operated under license from TED.</p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
