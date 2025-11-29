'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCalendar, FiMapPin, FiAward, FiGlobe } from 'react-icons/fi'

const education = [
  {
    degree: 'Masters of Science in Telecommunications and Network Engineering',
    institution: 'Conservatoire National des Arts et Métiers',
    location: 'Paris, France',
    period: 'Sep 2025 - Current',
    status: 'In Progress',
    description: 'Pursuing advanced studies in telecommunications and network engineering to deepen expertise in modern networking technologies and systems.',
  },
  {
    degree: 'Bachelor of Engineering in Electronic Engineering',
    institution: 'University of Nigeria',
    location: 'Nigeria',
    period: 'Aug 2018 - Sep 2024',
    grade: '4.27 / 5.00',
    status: 'Completed',
    description: 'Comprehensive engineering program covering electronic systems, circuit design, signal processing, and embedded systems. Graduated with distinction.',
  },
]

const certifications = [
  {
    name: 'Diplôme d\'Études en Langue Française Niveau B2',
    issuer: 'France Éducation international',
    location: null,
    date: null,
  },
  {
    name: 'Diplôme d\'Études en Langue Française Niveau B1',
    issuer: 'France Éducation international',
    location: 'Lagos, Nigeria',
    date: null,
  },
  {
    name: 'CISCO IT ESSENTIALS',
    issuer: 'CISCO',
    location: null,
    date: null,
  },
  {
    name: 'THE COMPLETE 2021 FLUTTER DEVELOPMENT BOOTCAMP WITH DART',
    issuer: 'Udemy',
    location: null,
    date: null,
  },
  {
    name: 'INTRODUCTION TO COMPUTER NETWORKS',
    issuer: 'Udemy',
    location: null,
    date: null,
  },
  {
    name: 'AZ-900: MICROSOFT AZURE FUNDAMENTALS EXAM PREP - SEP 2024',
    issuer: 'Udemy',
    location: null,
    date: null,
  },
  {
    name: 'AZ-104 MICROSOFT AZURE ADMINISTRATOR EXAM PREP',
    issuer: 'Udemy',
    location: null,
    date: null,
  },
]

export default function Education() {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section
      id="education"
      ref={ref}
      className="section-padding bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto container-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-gray-900 dark:text-white">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full" />
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Academic achievements and professional certifications
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Academic Qualifications
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 md:pl-12 border-l-4 border-primary-500 dark:border-primary-400"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary-500 dark:bg-primary-400 rounded-full transform -translate-x-[10px] ring-4 ring-white dark:ring-gray-900" />

                  <motion.div
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-xl"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h4>
                        <h5 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">
                          {edu.institution}
                        </h5>
                      </div>
                      {edu.status === 'In Progress' && (
                        <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-semibold mt-2 md:mt-0">
                          {edu.status}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <FiCalendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      {edu.grade && (
                        <div className="flex items-center gap-2">
                          <FiAward className="w-4 h-4" />
                          <span className="font-semibold">Grade: {edu.grade}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Certifications & Courses
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0">
                      <FiAward className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-primary-600 dark:text-primary-400 mb-1">
                        {cert.issuer}
                      </p>
                      {cert.location && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <FiMapPin className="w-3 h-3" />
                          {cert.location}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

