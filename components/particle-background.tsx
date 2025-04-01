"use client"

import { useRef, useEffect } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const mousePosition = { x: 0, y: 0 }
    let isMouseMoving = false
    let mouseTimer: NodeJS.Timeout

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.x = e.clientX
      mousePosition.y = e.clientY
      isMouseMoving = true

      // Add particles on mouse move
      for (let i = 0; i < 3; i++) {
        particles.push(createParticle(mousePosition.x, mousePosition.y, true))
      }

      clearTimeout(mouseTimer)
      mouseTimer = setTimeout(() => {
        isMouseMoving = false
      }, 100)
    }

    const createParticle = (x: number, y: number, isMouseParticle = false): Particle => {
      const colors = ["#ff0000", "#ff3333", "#cc0000", "#fecd00", "#ffffff"]

      return {
        x: isMouseParticle ? x : Math.random() * canvas.width,
        y: isMouseParticle ? y : Math.random() * canvas.height,
        size: isMouseParticle ? Math.random() * 4 + 1 : Math.random() * 3 + 0.5,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: isMouseParticle ? 0.8 : Math.random() * 0.5 + 0.1,
      }
    }

    const initParticles = () => {
      particles = []
      const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 15000), 100)

      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle(0, 0))
      }
    }

    const connectParticles = () => {
      const maxDistance = 150

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 0, 0, ${opacity * 0.15})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.x += p.speedX
        p.y += p.speedY

        // Boundary check
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1

        // Mouse interaction
        if (isMouseMoving) {
          const dx = p.x - mousePosition.x
          const dy = p.y - mousePosition.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const angle = Math.atan2(dy, dx)
            const force = (100 - distance) / 100

            p.speedX += Math.cos(angle) * force * 0.2
            p.speedY += Math.sin(angle) * force * 0.2
          }
        }

        // Speed limit
        const maxSpeed = 2
        const speed = Math.sqrt(p.speedX * p.speedX + p.speedY * p.speedY)
        if (speed > maxSpeed) {
          p.speedX = (p.speedX / speed) * maxSpeed
          p.speedY = (p.speedY / speed) * maxSpeed
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color.replace(")", `, ${p.opacity})`)
        ctx.fill()
      }

      // Connect particles with lines
      connectParticles()

      // Remove old mouse particles
      if (particles.length > 200) {
        particles = particles.slice(-200)
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
      clearTimeout(mouseTimer)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-40" />
}

