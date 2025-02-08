"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { ScrollSection } from "./scrollSection"

const sections = [
  {
    title: "Advancing Technology for Humanity",
    description:
      "IEEE and its members inspire a global community through highly cited publications, conferences, technology standards, and professional and educational activities.",
    imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839178/IEEE/uk1izbzwwhqafkfgdfm2.jpg",
  },
  {
    title: "Global Impact",
    description:
      "Join a community of technology professionals working towards a better future through innovation and collaboration.",
    imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839178/IEEE/gutkg5p25kvwv2c9lxim.jpg",
  },
  {
    title: "Professional Development",
    description: "Access world-class resources, networking opportunities, and career development tools.",
    imageUrl: "https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839178/IEEE/vqkafiugv85ak4yxlvsd.jpg",
  },
]

export default function LandingPage() {
  return (
    <div>
      {/* Initial Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 animate-gradient">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_100%)]" />
            <div className="absolute inset-0 mix-blend-overlay opacity-50">
              <div className="absolute inset-0 animate-wave bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)]" 
                   style={{
                     backgroundSize: '200% 200%',
                     animation: 'wave 8s linear infinite'
                   }} />
            </div>
          </div>
          <style jsx>{`
            @keyframes wave {
              0% { background-position: 0% 50% }
              50% { background-position: 100% 50% }
              100% { background-position: 0% 50% }
            }
            @keyframes gradient {
              0% { transform: scale(1) }
              50% { transform: scale(1.1) }
              100% { transform: scale(1) }
            }
            .animate-gradient {
              animation: gradient 15s ease infinite;
            }
            .animate-wave {
              animation: wave 8s linear infinite;
            }
          `}</style>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Advancing Technology for Humanity
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8"
          >
            IEEE and its members inspire a global community through highly cited publications, conferences, technology
            standards, and professional and educational activities.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/about">
              <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors">
                LEARN MORE
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Scroll Sections */}
      <div className="relative w-full">
        {sections.map((section, index) => (
          <ScrollSection
            key={index}
            index={index}
            title={section.title}
            description={section.description}
            imageUrl={section.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}