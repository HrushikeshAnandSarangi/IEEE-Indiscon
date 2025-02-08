"use client"

import { motion } from "framer-motion"
import { type FC } from "react"
import Image from "next/image"

interface Section {
  title: string
  content: string
  image: string
}

const AboutUs: FC = () => {
  const sections: Section[] = [
    {
      title: "Our Mission",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg",
    },
    {
      title: "Our Vision",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image:
        "https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg",
    },
    {
      title: "Our Values",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      image:
        "https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg",
    },
    {
      title: "Our Team",
      content:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
      image:
        "https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg",
    },
    {
      title: "Our History",
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.",
      image:
        "https://res.cloudinary.com/dk6m1qejk/image/upload/v1738839394/IEEE/naiaavgzjlkkhockcsgm.jpg",
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const imageVariants = {
    hover: { scale: 1.03 },
    rest: { scale: 1 }
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 ">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Our Organization
      </motion.h2>

      <div className="max-w-6xl mx-auto space-y-24">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <motion.div
              className="relative w-full lg:w-1/2 overflow-hidden rounded-xl shadow-lg"
              variants={imageVariants}
              whileHover="hover"
              initial="rest"
              transition={{ duration: 0.3 }}
            >
              <Image
                src={section.image}
                alt={section.title}
                width={800}
                height={450}
                className="w-full h-64 object-cover"
                priority={index < 2}
              />
            </motion.div>

            <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-6' : 'lg:pr-6'}`}>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {section.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AboutUs