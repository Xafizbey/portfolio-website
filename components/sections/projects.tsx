"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import { useState } from "react"

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Eventhon",
      description:
        "Comprehensive platform for organizing IT hackathons, schools, and educational centers with real-time collaboration features.",
      longDescription:
        "Built a full-stack hackathon management platform enabling companies and educational institutions to organize, manage, and promote events seamlessly.",
      tech: ["Next.js 15", "Node.js", "Nest.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
      image: "/hackathon-platform-interface.jpg",
      category: "Full-Stack",
      featured: true,
      stats: { users: "500+", events: "50+", rating: "4.8" },
    },
    {
      id: 2,
      title: "StudAI",
      description:
        "AI-powered educational platform that intelligently generates homework, quizzes, and study materials tailored to student needs.",
      longDescription:
        "Leveraged advanced AI APIs to create an intelligent tutoring system that helps students learn more effectively with personalized content generation.",
      tech: ["React.js", "Next.js 13", "AI API", "OpenAI", "Tailwind CSS", "TypeScript"],
      image: "/ai-learning-platform-interface.jpg",
      category: "AI/ML",
      featured: true,
      stats: { students: "1000+", accuracy: "95%", rating: "4.9" },
    },
    {
      id: 3,
      title: "ITChess",
      description:
        "Comprehensive online learning platform offering programming courses, math tutorials, and English language resources.",
      longDescription:
        "Created an interactive e-learning platform with structured curriculum, progress tracking, and community features for tech learners.",
      tech: ["Next.js 14", "React", "Prisma", "PostgreSQL", "Tailwind", "Stripe"],
      image: "/online-learning-course-platform.jpg",
      category: "EdTech",
      featured: true,
      stats: { courses: "20+", learners: "5000+", rating: "4.7" },
    },
    {
      id: 4,
      title: "Bulak Media",
      description:
        "Cross-platform mobile application providing Islamic content, daily guidance, and community features for Muslims worldwide.",
      longDescription:
        "Developed a mobile app connecting millions of Muslims with personalized religious content, prayer times, and community engagement tools.",
      tech: ["React Native", "Expo", "Prisma", "PostgreSQL", "Firebase", "TypeScript"],
      image: "/muslim-community-mobile-app-interface.jpg",
      category: "Mobile",
      featured: true,
      stats: { users: "100k+", countries: "50+", rating: "4.6" },
    },
    {
      id: 5,
      title: "Aeronomad.kg",
      description:
        "Modern tourism website developed for KG Friend company, showcasing travel destinations and booking experiences across Kyrgyzstan.",
      longDescription:
        "Built a visually stunning tourism platform with intuitive navigation, destination galleries, booking system, and real-time availability management for travelers and tour operators.",
      tech: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "PostgreSQL"],
      image: "/aeronomad.jpg",
      category: "Full-Stack",
      featured: true,
      stats: { destinations: "50+", bookings: "1000+", rating: "4.9" },
    },
    {
      id: 6,
      title: "Skypark Admin Panel",
      description:
        "Comprehensive administrative panel for internal use with focus on user experience, featuring dashboard analytics and content management.",
      longDescription:
        "Engineered a powerful admin dashboard with role-based access control, real-time data visualization, and intuitive management tools optimized for high performance and usability.",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Chart.js", "API Integration", "Redux"],
      image: "/admin-panel-interface.jpg",
      category: "Admin",
      featured: true,
      stats: { users: "100+", modules: "15+", rating: "4.8" },
    },
  ]

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="projects" className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles size={16} />
            Featured Work
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Showcase of My
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Best Projects
            </span>
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A collection of my latest work showcasing expertise in full-stack development, AI integration, and user
            experience design.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                // variants={itemVariants}
                layoutId={`project-${project.id}`}
              >
                <div className="relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-xl hover:shadow-primary/10">
                  {/* Featured Badge */}
                  {project.featured && (
                    <motion.div
                      className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-semibold"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      Featured
                    </motion.div>
                  )}

                  {/* Image Container */}
                  <div className="relative h-64 bg-muted overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Action Buttons */}
                    <AnimatePresence>
                      {hoveredId === project.id && (
                        <motion.div
                          className="absolute inset-0 flex items-end justify-between p-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <div />
                          <div className="flex gap-3">
                            <motion.a
                              href="#"
                              className="p-3 rounded-lg bg-primary text-primary-foreground hover:bg-accent transition-colors shadow-lg"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <ExternalLink size={20} />
                            </motion.a>
                            <motion.a
                              href="#"
                              className="p-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary transition-colors shadow-lg"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Github size={20} />
                            </motion.a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
                        <span className="px-2 py-1 text-xs font-semibold rounded-lg bg-primary/10 text-primary whitespace-nowrap">
                          {project.category}
                        </span>
                      </div>

                      <motion.p
                        className="text-muted-foreground text-sm mb-4 leading-relaxed"
                        initial={{ height: "auto" }}
                        animate={{
                          height: hoveredId === project.id ? "auto" : "40px",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {hoveredId === project.id ? project.longDescription : project.description}
                      </motion.p>

                      {/* Stats */}
                      {hoveredId === project.id && (
                        <motion.div
                          className="grid grid-cols-3 gap-3 mb-4 py-4 border-y border-border"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                        >
                          {Object.entries(project.stats).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="font-bold text-primary">{value}</div>
                              <div className="text-xs text-muted-foreground capitalize">{key}</div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.1, backgroundColor: "var(--color-primary)" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(var(--color-primary), 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <ExternalLink size={18} />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
