"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Instagram, Instagram as Telegram } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/hafizbey_official", label: "Instagram" },
    { icon: Telegram, href: "https://telegram.org/@hafizbey_official", label: "Telegram" },
    { icon: Mail, href: "mailto:hafizbeyofficial@gmail.com", label: "Email" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-card border-t border-border py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Social Links */}
          <motion.div className="flex items-center justify-center gap-4 flex-wrap" variants={container}>
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-all"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                variants={item}
                title={link.label}
              >
                <link.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div className="text-sm text-muted-foreground" variants={item}>
            <p>© 2025 Abdulhafiz Zholodoshov. All rights reserved.</p>
            <p className="mt-2 text-xs">Frontend Developer • Tech Enthusiast • Mentor</p>
          </motion.div>

          {/* Divider */}
          <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />

          {/* Quick Links */}
          <motion.div
            className="flex gap-6 text-sm text-muted-foreground flex-wrap justify-center"
            variants={container}
          >
            <motion.a href="#about" className="hover:text-foreground transition-colors" variants={item}>
              About
            </motion.a>
            <motion.a href="#projects" className="hover:text-foreground transition-colors" variants={item}>
              Projects
            </motion.a>
            <motion.a href="#contact" className="hover:text-foreground transition-colors" variants={item}>
              Contact
            </motion.a>
          </motion.div>

          {/* CTA */}
          <motion.div variants={item}>
            <p className="text-xs text-muted-foreground">
              Let's build something amazing together{" "}
              <motion.span
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="inline-block"
              >
                🚀
              </motion.span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
