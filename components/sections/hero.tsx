"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x, { stiffness: 100, damping: 30 })
  const ySpring = useSpring(y, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const distX = (e.clientX - rect.left - centerX) * 0.1
      const distY = (e.clientY - rect.top - centerY) * 0.1

      x.set(distX)
      y.set(distY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [x, y])

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -25, 0],
      transition: {
        duration: 5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  const rotatingVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Primary Gradient Orb */}
        <motion.div
          className="absolute top-1/4 -left-40 w-96 h-96 bg-gradient-to-br from-primary/30 to-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Secondary Gradient Orb */}
        <motion.div
          className="absolute bottom-1/4 -right-40 w-96 h-96 bg-gradient-to-br from-accent/30 to-accent/5 rounded-full blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Tertiary Gradient Orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Parallax Grid Background */}
      <div className="absolute inset-0 -z-20 opacity-20 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Floating Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05, borderColor: "var(--color-primary)" }}
          >
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Welcome to my digital space
            </span>
          </motion.div>
        </motion.div>

        {/* Main Heading with Animated Gradient */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="inline-block relative">
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent opacity-0"
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                Creative
              </motion.span>
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Creative
              </span>
            </span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Frontend Development
            </span>
          </h1>
        </motion.div>

        {/* Subtitle with Typing Effect */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          I create beautiful, interactive digital experiences using modern web technologies. Specializing in React,
          Next.js, and cutting-edge animations. Building solutions that are not just beautiful to look at, but
          delightful to use.
        </motion.p>

        {/* CTA Buttons with Hover Effects */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.a
            href="#projects"
            className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              layoutId="button-gradient"
            />
            <span className="relative flex items-center gap-2">
              View My Work
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                <ArrowRight size={18} />
              </motion.span>
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(var(--color-primary), 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
        </motion.div>

        {/* Floating Scroll Indicator */}
        <motion.div className="flex justify-center items-center" variants={floatingVariants} animate="animate">
          <motion.div
            className="flex flex-col items-center gap-2 text-muted-foreground text-sm"
            whileHover={{ scale: 1.1 }}
          >
            <span>Explore my work</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Floating Cards */}
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur-sm"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-32 left-10 w-24 h-24 rounded-xl bg-accent/10 border border-accent/20 backdrop-blur-sm"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Rotating Circle */}
        <motion.div
          className="absolute top-1/3 -right-20 w-40 h-40 rounded-full border border-primary/20"
          variants={rotatingVariants}
          animate="animate"
        />
      </div>
    </section>
  )
}
