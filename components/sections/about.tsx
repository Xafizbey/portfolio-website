"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Code2, Zap, Target, Users } from "lucide-react"

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1])

  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "React Query"],
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Backend",
      items: ["Node.js", "Nest.js", "PostgreSQL", "Prisma", "REST API", "GraphQL"],
      icon: Zap,
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Tools & Dev",
      items: ["Git", "Figma", "Vercel", "Docker", "Shadcn UI", "VS Code"],
      icon: Target,
      color: "from-orange-500 to-red-500",
    },
    {
      category: "Soft Skills",
      items: ["Mentoring", "Problem Solving", "Communication", "Team Leadership", "UI/UX Design"],
      icon: Users,
      color: "from-green-500 to-emerald-500",
    },
  ]

  const achievements = [
    { number: "100+", label: "Students Mentored", description: "Helped students transition into tech" },
    { number: "15+", label: "Projects Completed", description: "Full-stack applications built" },
    { number: "2024", label: "SV Winner", description: "Dive into Silicon Valley Program" },
  ]

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
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    show: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.05,
        duration: 0.5,
      },
    }),
  }

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 bg-gradient-to-b from-background via-card to-background overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Achievements Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              className="p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all"
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1)",
              }}
            >
              <motion.div
                className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: "spring" }}
              >
                {achievement.number}
              </motion.div>
              <h3 className="text-lg font-semibold mb-1">{achievement.label}</h3>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* About Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left - About Text */}
          <motion.div className="space-y-8">
            <motion.div variants={itemVariants}>
              <motion.span
                className="text-sm font-semibold text-primary uppercase tracking-wider"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                About Me
              </motion.span>
              <motion.h2
                className="text-5xl font-bold mt-3 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Crafting Digital Experiences with Purpose
              </motion.h2>
            </motion.div>

            <motion.div className="space-y-4" variants={containerVariants}>
              <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
                I'm Abdulhafiz, a passionate Frontend Developer from Bishkek, Kyrgyzstan. My journey in technology
                started with curiosity about how digital products come to life. Today, I combine creative design
                thinking with robust engineering to build applications that are both beautiful and functional.
              </motion.p>

              <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
                With over 2 years of experience, I've mentored 100+ students, built 15+ projects, and continuously push
                the boundaries of what's possible on the web. I believe in writing clean, maintainable code and creating
                experiences that delight users.
              </motion.p>

              <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
                Currently, I'm exploring the intersection of AI and web development, experimenting with 3D graphics, and
                pushing animation techniques to create immersive web experiences.
              </motion.p>
            </motion.div>

            <motion.div className="flex flex-wrap gap-3 pt-4" variants={containerVariants}>
              {["Kyrgyzstan", "Open to Remote", "2+ Years Exp.", "Mentoring"].map((badge, index) => (
                <motion.span
                  key={badge}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 text-sm font-medium text-foreground"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, borderColor: "var(--color-primary)" }}
                  custom={index}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Visual Stats */}
          <motion.div
            className="relative h-96 rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-8 flex flex-col justify-between overflow-hidden"
            variants={itemVariants}
          >
            {/* Animated Background Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div>
                  <motion.div
                    className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring" }}
                  >
                    2024
                  </motion.div>
                  <p className="text-muted-foreground mt-1">Dive into Silicon Valley - Winner</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Tech Stack Proficiency</h4>
                  <div className="space-y-2">
                    {["Frontend", "Backend", "DevOps"].map((skill, i) => (
                      <div key={skill}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">{skill}</span>
                          <span className="text-sm text-primary font-semibold">{90 - i * 5}%</span>
                        </div>
                        <motion.div
                          className="h-2 bg-muted rounded-full overflow-hidden"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-accent"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${90 - i * 5}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 1 }}
                          />
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skills.map((skillGroup) => {
              const Icon = skillGroup.icon
              return (
                <motion.div
                  key={skillGroup.category}
                  className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all relative overflow-hidden"
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skillGroup.color} p-2 mb-4 flex items-center justify-center text-white`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon size={24} />
                  </motion.div>

                  <h4 className="font-bold text-lg mb-4 relative z-10">{skillGroup.category}</h4>

                  <div className="space-y-2 relative z-10">
                    {skillGroup.items.map((skill, idx) => (
                      <motion.div
                        key={skill}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="mt-16 p-8 md:p-12 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ borderColor: "var(--color-primary)" }}
        >
          <motion.h4 className="text-2xl font-bold mb-4">My Mission</motion.h4>
          <motion.p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            To create beautiful, accessible, and performant digital experiences that solve real problems. I'm dedicated
            to continuous learning, mentoring the next generation of developers, and pushing the boundaries of what's
            possible with modern web technologies.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
