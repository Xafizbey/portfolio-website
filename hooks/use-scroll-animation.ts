"use client"

import { useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function useScrollAnimation(offset = ["start end", "end start"]) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as [string, string],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50])

  return { ref, opacity, scale, y, scrollYProgress }
}
