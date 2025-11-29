'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiGlobe } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        ease: 'easeOut',
      },
    },
  }

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/thenaijadev', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/okworchukwuemeka/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:okworcloud@gmail.com', label: 'Email' },
    { icon: FiGlobe, href: 'https://github.com/thenaijadev', label: 'Website' },
  ]

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20 animate-blob"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20 animate-blob"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20 animate-blob"
          animate={{
            x: [0, 50, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium">
              Flutter Developer & Full-Stack Engineer
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold font-display mb-6 text-gray-900 dark:text-white"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Okwor Chukwuemeka</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Technology enthusiast with 3+ years of experience designing, building, and maintaining
            user-focused web and mobile applications.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              Get In Touch
              <FiMail className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 dark:border-gray-700 flex items-center gap-2"
            >
              Download CV
              <FiDownload className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg hover:shadow-xl transition-all text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={link.label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

