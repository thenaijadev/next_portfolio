'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMapPin, FiMail, FiPhone, FiGlobe } from 'react-icons/fi'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const contactInfo = [
    { icon: FiMapPin, text: '75012, Paris, France', href: null },
    { icon: FiPhone, text: '(+33) 758862562', href: 'tel:+33758862562' },
    { icon: FiMail, text: 'okworcloud@gmail.com', href: 'mailto:okworcloud@gmail.com' },
    { icon: FiGlobe, text: 'github.com/thenaijadev', href: 'https://github.com/thenaijadev' },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto container-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 md:p-12 shadow-xl mb-12"
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Technology enthusiast with a Bachelor of Engineering in Electronic Engineering and 3 years of experience
              designing, building, and maintaining user-focused web and mobile applications. Proven track record of
              collaborating with cross-functional teams, including UX designers, backend developers, and project managers,
              to deliver high-quality mobile experiences.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Expert in integrating GraphQL and REST APIs, implementing BLOC state management architecture, and writing
              clean, maintainable code. Experienced in version control with Git, performance optimization, and applying
              mobile UI/UX principles to create intuitive interfaces.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={index}
                  href={info.href || '#'}
                  target={info.href ? '_blank' : undefined}
                  rel={info.href ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`flex items-center gap-4 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all ${
                    info.href ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {info.text}
                  </span>
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

