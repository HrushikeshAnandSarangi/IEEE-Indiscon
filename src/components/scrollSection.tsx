"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

interface ScrollSectionProps {
  index: number
  title: string
  description: string
  imageUrl: string
}

export function ScrollSection({ index, title, description, imageUrl }: ScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <motion.div
      ref={sectionRef}
      style={{ opacity }}
      className="h-screen w-full sticky top-0 flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ scale }} className="relative w-full h-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" priority={index === 0} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-20 max-w-6xl mx-auto">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl"
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  )
}

