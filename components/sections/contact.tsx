"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react"

type FormStatus = "idle" | "loading" | "success" | "error"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<FormStatus>("idle")
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("loading")

    // Simulate API call
    setTimeout(() => {
      setFormStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      setTimeout(() => {
        setFormStatus("idle")
      }, 3000)
    }, 1500)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hafizbeyofficial@gmail.com",
      href: "mailto:hafizbeyofficial@gmail.com",
      description: "I respond within 24 hours",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+996 779 079 279",
      href: "tel:+996779079279",
      description: "Available Mon-Fri 9AM-6PM",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bishkek, Kyrgyzstan",
      href: "#",
      description: "Timezone: UTC+6",
    },
  ]

  const formFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Your name",
      required: true,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "your@email.com",
      required: true,
    },
    {
      name: "subject",
      label: "Subject",
      type: "text",
      placeholder: "What is this about?",
      required: true,
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Tell me about your project...",
      required: true,
    },
  ]

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-gradient-to-b from-card to-background border-t border-border"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-sm font-semibold text-primary uppercase tracking-wider"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Get in Touch
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mt-3 mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Have a project in mind? I'd love to hear from you. Reach out and let's create something amazing together.
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.a
                key={info.label}
                href={info.href}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-muted/50 transition-all"
                variants={itemVariants}
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)" }}
                custom={index}
              >
                <motion.div
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent p-2 mb-4 flex items-center justify-center text-primary-foreground"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon size={24} />
                </motion.div>

                <h3 className="font-semibold mb-1">{info.label}</h3>
                <p className="text-sm text-muted-foreground mb-1">{info.value}</p>
                <p className="text-xs text-muted-foreground/70">{info.description}</p>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Form Container */}
          <div className="p-8 md:p-12 rounded-2xl border border-border bg-card/50 backdrop-blur-sm shadow-2xl shadow-primary/5">
            <div className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formFields.slice(0, 2).map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      {field.label}
                      {field.required && <span className="text-primary ml-1">*</span>}
                    </label>

                    <motion.div
                      className="relative"
                      animate={{
                        boxShadow:
                          focusedField === field.name
                            ? "0 0 0 3px rgba(var(--color-primary), 0.1)"
                            : "0 0 0 0px rgba(var(--color-primary), 0)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        onFocus={() => handleFocus(field.name)}
                        onBlur={handleBlur}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary transition-all outline-none"
                      />

                      {/* Focus Indicator */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                        animate={{
                          width: focusedField === field.name ? "100%" : "0%",
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Subject */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Subject
                  <span className="text-primary ml-1">*</span>
                </label>

                <motion.div
                  className="relative"
                  animate={{
                    boxShadow:
                      focusedField === "subject"
                        ? "0 0 0 3px rgba(var(--color-primary), 0.1)"
                        : "0 0 0 0px rgba(var(--color-primary), 0)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus("subject")}
                    onBlur={handleBlur}
                    placeholder="What is this about?"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary transition-all outline-none"
                  />

                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                    animate={{
                      width: focusedField === "subject" ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium mb-2 text-foreground">
                  Message
                  <span className="text-primary ml-1">*</span>
                </label>

                <motion.div
                  className="relative"
                  animate={{
                    boxShadow:
                      focusedField === "message"
                        ? "0 0 0 3px rgba(var(--color-primary), 0.1)"
                        : "0 0 0 0px rgba(var(--color-primary), 0)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary transition-all outline-none resize-none"
                  />

                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                    animate={{
                      width: focusedField === "message" ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.button
                  type="submit"
                  disabled={formStatus === "loading"}
                  className="w-full relative group px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    layoutId="button-gradient"
                  />

                  <motion.span
                    className="relative flex items-center justify-center gap-2"
                    animate={{
                      y: formStatus === "loading" ? -24 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>Send Message</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Send size={18} />
                    </motion.span>
                  </motion.span>

                  {/* Loading State */}
                  <motion.span
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      y: formStatus === "loading" ? 0 : 24,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />
                  </motion.span>
                </motion.button>
              </motion.div>
            </div>

            {/* Success Message */}
            <AnimatePresence>
              {formStatus === "success" && (
                <motion.div
                  className="mt-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <CheckCircle2 className="text-green-500" size={20} />
                  <p className="text-sm text-green-600 dark:text-green-400">Thank you! I'll get back to you soon.</p>
                </motion.div>
              )}

              {formStatus === "error" && (
                <motion.div
                  className="mt-6 p-4 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <AlertCircle className="text-red-500" size={20} />
                  <p className="text-sm text-red-600 dark:text-red-400">Something went wrong. Please try again.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-8 text-center text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p>
              Looking for social links?{" "}
              <a href="#" className="text-primary hover:underline font-medium">
                Find me on LinkedIn & GitHub
              </a>
            </p>
          </motion.div>
        </motion.form>
      </div>
    </section>
  )
}
