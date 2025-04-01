"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("/")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Set active link based on current path
    setActiveLink(window.location.pathname)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-2 shadow-[0_0_15px_rgba(0,0,0,0.5)]" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            <motion.span className="text-red-600" whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              TEDx
            </motion.span>
            <motion.span className="text-white" whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              MREC
            </motion.span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/" isActive={activeLink === "/"}>
            Home
          </NavLink>
          <NavLink href="/about" isActive={activeLink === "/about"}>
            About
          </NavLink>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="group flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Past Seasons
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="h-4 w-4 opacity-70" />
                </motion.div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-black/90 border border-red-900/50 backdrop-blur-md">
              <DropdownMenuItem asChild>
                <Link href="/past-seasons/season-1" className="cursor-pointer hover:bg-red-900/20">
                  Season 1
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink href="/contact" isActive={activeLink === "/contact"}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex flex-col"
          >
            <div className="flex justify-end p-4">
              <motion.div whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white">
                  <X className="h-6 w-6" />
                </Button>
              </motion.div>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 flex-1">
              <MobileNavLink href="/" onClick={() => setIsOpen(false)} delay={0.1}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setIsOpen(false)} delay={0.2}>
                About
              </MobileNavLink>
              <MobileNavLink href="/past-seasons/season-1" onClick={() => setIsOpen(false)} delay={0.3}>
                Past Seasons - Season 1
              </MobileNavLink>
              <MobileNavLink href="/contact" onClick={() => setIsOpen(false)} delay={0.4}>
                Contact
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function NavLink({
  href,
  children,
  isActive = false,
}: {
  href: string
  children: React.ReactNode
  isActive?: boolean
}) {
  return (
    <Link href={href} className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group">
      <span className="relative z-10">{children}</span>
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
      ></span>
    </Link>
  )
}

function MobileNavLink({
  href,
  children,
  onClick,
  delay = 0,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
  delay?: number
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay }}>
      <Link
        href={href}
        className="text-2xl font-bold text-white hover:text-red-500 transition-colors relative group"
        onClick={onClick}
      >
        {children}
        <motion.div
          className="absolute -bottom-2 left-0 right-0 h-0.5 bg-red-600 scale-x-0 origin-left"
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </motion.div>
  )
}

