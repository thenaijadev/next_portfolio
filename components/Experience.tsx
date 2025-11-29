'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi'

const experiences = [
  {
    company: 'CYBERSWITCH',
    location: 'Lagos, Nigeria',
    role: 'Flutter Developer (Contract)',
    period: 'Nov 2024 - Jul 2025',
    achievements: [
      'Led end-to-end development of the CyberSwitch Flutter application, implementing BLOC architecture for scalable state management and maintainable code',
      'Integrated 50+ RESTful API endpoints in collaboration with backend teams, optimizing data flow, error handling, and network performance',
      'Partnered with 2 UI/UX designers and a project manager to convert Figma/Sketch prototypes into pixel-perfect, responsive Flutter UIs, reducing design-to-development handoff time by 50%',
      'Contributed to team code reviews and best practice adoption, resulting in a 20% decrease in post-release bugs',
    ],
  },
  {
    company: 'CARDIO AUTOTECH',
    location: 'Lagos, Nigeria',
    role: 'Flutter Developer',
    period: 'Apr 2024 - Oct 2024',
    achievements: [
      'Deployed & maintained the Cardio app on Play Store & App Store, achieving 99.8% uptime (6-month monitoring) with rigorous testing and updates',
      'Debugged & optimized performance bottlenecks, reducing crashes by 40%',
      'Expanded app functionality by integrating RESTful & GraphQL APIs',
    ],
  },
  {
    company: 'TEACHALLY',
    location: 'Washington, United States',
    role: 'Contract Flutter Developer',
    period: 'Nov 2023 - Jan 2024',
    achievements: [
      'Successfully migrated Teachally\'s entire codebase from Flutter v3.0.3 to v3.16.2',
      'Implemented null-safety migration across the entire codebase, improving code reliability and reducing runtime errors',
      'Ensured backward compatibility and thorough testing throughout the migration process',
    ],
  },
  {
    company: 'NUBIAVILLE LIMITED',
    location: 'Lagos, Nigeria',
    role: 'Flutter Developer',
    period: 'Mar 2022 - Nov 2023',
    achievements: [
      'Optimized app performance by reducing load time by 30%+ through refining widget trees, minimizing state rebuilds, and leveraging efficient state management',
      'Implemented BLOC pattern in 2+ large-scale applications, improving code maintainability by 40% and reducing bug resolution time',
      'Enforced Clean Architecture principles, enabling seamless scalability, modular testing, and streamlined team collaboration',
      'Integrated 15+ RESTful APIs with 100% error-handling coverage using Dio, ensuring reliable data flow and optimal user experience',
      'Reduced API response time by 25% through strategic caching with Hive and optimized network call management',
      'Delivered 50+ pixel-perfect screens from Figma designs, achieving 99% UI consistency and reducing design-review cycles',
    ],
  },
  {
    company: 'KPMG',
    location: 'Lagos, Nigeria',
    role: 'Emerging Tech Intern',
    period: 'Aug 2022 - Nov 2022',
    achievements: [
      'Shadowed senior personnel to learn appropriate methods for troubleshooting technical problems',
      'Conducted research and created PowerPoint presentations for internal stakeholders',
      'Documented certification levels in the accounting ecosystem',
    ],
  },
]

export default function Experience() {
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
      id="experience"
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
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full" />
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A journey of growth, innovation, and impactful contributions
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-600 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full transform md:-translate-x-1/2 -translate-y-1 z-10 ring-4 ring-white dark:ring-gray-900" />

                  <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-[55%]' : 'md:ml-[55%]'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {exp.role}
                          </h3>
                          <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">
                            {exp.company}
                          </h4>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <FiCalendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiMapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                          >
                            <span className="text-primary-500 dark:text-primary-400 mt-1.5 flex-shrink-0">
                              ✓
                            </span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
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

