'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiX } from 'react-icons/fi'
import { SiFlutter, SiReact, SiTypescript, SiGraphql } from 'react-icons/si'

const projects = [
  {
    title: 'CyberSwitch Flutter App',
    shortDescription: 'End-to-end Flutter application with BLOC architecture, featuring 50+ RESTful API integrations and pixel-perfect UI implementation.',
    fullDescription: 'Led the complete development of CyberSwitch, a comprehensive Flutter application built with BLOC architecture for scalable state management. Integrated 50+ RESTful API endpoints in collaboration with backend teams, optimizing data flow, error handling, and network performance. Partnered with UI/UX designers to convert Figma prototypes into pixel-perfect, responsive Flutter UIs, reducing design-to-development handoff time by 50%. Contributed to team code reviews and best practice adoption, resulting in a 20% decrease in post-release bugs.',
    technologies: ['Flutter', 'Dart', 'BLOC', 'REST APIs'],
    icons: [SiFlutter],
    website: null,
    hasNDA: true,
    image: '/project-cyberswitch.jpg',
  },
  {
    title: 'Cardio Autotech App',
    shortDescription: 'Mobile application deployed on Play Store & App Store with 99.8% uptime, featuring RESTful & GraphQL API integrations.',
    fullDescription: 'Developed and maintained the Cardio Autotech mobile application, successfully deploying it on both Play Store and App Store. Achieved 99.8% uptime over 6 months of monitoring through rigorous testing and regular updates. Debugged and optimized performance bottlenecks, reducing crashes by 40%. Expanded app functionality by integrating both RESTful and GraphQL APIs, ensuring seamless data synchronization and improved user experience.',
    technologies: ['Flutter', 'GraphQL', 'REST APIs', 'Performance Optimization'],
    icons: [SiFlutter, SiGraphql],
    website: null,
    hasNDA: true,
    image: '/project-cardio.jpg',
  },
  {
    title: 'Teachally Migration Project',
    shortDescription: 'Successfully migrated entire codebase from Flutter v3.0.3 to v3.16.2 with null-safety implementation and backward compatibility.',
    fullDescription: 'Successfully migrated Teachally\'s entire codebase from Flutter v3.0.3 to v3.16.2, ensuring seamless transition and improved performance. Implemented comprehensive null-safety migration across the entire codebase, improving code reliability and reducing runtime errors. Ensured backward compatibility throughout the migration process with thorough testing. The migration enhanced app stability and prepared the codebase for future Flutter updates.',
    technologies: ['Flutter', 'Migration', 'Null Safety', 'Testing'],
    icons: [SiFlutter],
    website: 'https://teachally.com/',
    hasNDA: false,
    image: '/project-teachally.jpg',
  },
  {
    title: 'Nubiaville Applications',
    shortDescription: 'Large-scale Flutter applications with Clean Architecture, BLOC pattern, and 15+ RESTful API integrations with Hive caching.',
    fullDescription: 'Developed multiple large-scale Flutter applications for Nubiaville using Clean Architecture principles and BLOC pattern. Optimized app performance by reducing load time by 30%+ through refining widget trees, minimizing state rebuilds, and leveraging efficient state management. Implemented BLOC pattern in 2+ large-scale applications, improving code maintainability by 40% and reducing bug resolution time. Integrated 15+ RESTful APIs with 100% error-handling coverage using Dio, ensuring reliable data flow. Reduced API response time by 25% through strategic caching with Hive and optimized network call management. Delivered 50+ pixel-perfect screens from Figma designs, achieving 99% UI consistency.',
    technologies: ['Flutter', 'Clean Architecture', 'BLOC', 'Hive', 'REST APIs'],
    icons: [SiFlutter],
    website: 'https://www.nubiaville.com/',
    hasNDA: false,
    image: '/project-nubiaville.jpg',
  },
  {
    title: 'React Portfolio Website',
    shortDescription: 'Modern, responsive portfolio website built with React, TypeScript, and TailwindCSS, featuring smooth animations and dark mode.',
    fullDescription: 'Built a modern, fully responsive portfolio website using React, TypeScript, React, and TailwindCSS expertise. Implemented smooth animations using Framer Motion for an engaging user experience. Features include dark/light mode toggle, scroll-triggered animations, parallax effects, and a fully responsive design that works seamlessly across all devices. The site includes sections for hero, about, skills, experience, projects, and contact with a functional contact form.',
    technologies: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    icons: [SiReact, SiTypescript],
    website: null,
    hasNDA: false,
    image: '/project-portfolio.jpg',
  },
]

type Project = typeof projects[number]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
      >
        <div className="container mx-auto container-padding">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-gray-900 dark:text-white">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full" />
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Showcasing innovative solutions and technical excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer"
                >
                  {/* Project Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary-400 to-purple-600 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex gap-2">
                        {project.icons.map((Icon, iconIndex) => (
                          <Icon
                            key={iconIndex}
                            className="w-12 h-12 text-white opacity-80"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                      Click to learn more →
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            >
              {/* Modal */}
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-start justify-between z-10">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    {selectedProject.hasNDA && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-sm font-medium mt-2">
                        <span>🔒</span>
                        <span>Protected by NDA</span>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    aria-label="Close modal"
                  >
                    <FiX className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  {/* Project Image */}
                  <div className="h-64 bg-gradient-to-br from-primary-400 to-purple-600 rounded-xl mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex gap-4">
                        {selectedProject.icons.map((Icon, iconIndex) => (
                          <Icon
                            key={iconIndex}
                            className="w-16 h-16 text-white opacity-90"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Full Description */}
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Project Overview
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Website Link */}
                  {selectedProject.website && (
                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                      <motion.a
                        href={selectedProject.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                      >
                        Visit Website
                        <FiExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  )}

                  {/* NDA Notice */}
                  {selectedProject.hasNDA && (
                    <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                      <p className="text-sm text-yellow-800 dark:text-yellow-300">
                        <strong>Note:</strong> This project is protected by a Non-Disclosure Agreement (NDA). 
                        Detailed information, code samples, and screenshots cannot be shared publicly.
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
