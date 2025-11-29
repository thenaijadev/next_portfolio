'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiFlutter,
  SiDart,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiNestjs,
  SiGraphql,
  SiGit,
  SiGithub,
  SiMicrosoftazure,
  SiFigma,
  SiPython,
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    skills: [
      { name: 'Flutter', icon: SiFlutter, level: 95 },
      { name: 'Dart', icon: SiDart, level: 95 },
      { name: 'React', icon: SiReact, level: 85 },
      { name: 'TypeScript', icon: SiTypescript, level: 85 },
      { name: 'JavaScript', icon: SiJavascript, level: 85 },
      { name: 'Node.js', icon: SiNodedotjs, level: 80 },
      { name: 'NestJS', icon: SiNestjs, level: 75 },
      { name: 'Python', icon: SiPython, level: 60 },
    ],
  },
  {
    title: 'State Management & Architecture',
    skills: [
      { name: 'BLOC Pattern', icon: null, level: 95 },
      { name: 'Provider', icon: null, level: 90 },
      { name: 'Redux', icon: null, level: 80 },
      { name: 'MVVM', icon: null, level: 85 },
      { name: 'Clean Architecture', icon: null, level: 90 },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: SiGit, level: 90 },
      { name: 'GitHub', icon: SiGithub, level: 90 },
      { name: 'GraphQL', icon: SiGraphql, level: 85 },
      { name: 'REST APIs', icon: null, level: 95 },
      { name: 'Azure', icon: SiMicrosoftazure, level: 75 },
      { name: 'Figma', icon: SiFigma, level: 80 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto container-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-gray-900 dark:text-white">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto rounded-full" />
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </motion.div>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon
                    return (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 border border-gray-200 dark:border-gray-600"
                      >
                        <div className="flex items-center gap-4 mb-4">
                          {Icon ? (
                            <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0">
                              <span className="text-primary-600 dark:text-primary-400 font-bold text-lg">
                                {skill.name.charAt(0)}
                              </span>
                            </div>
                          )}
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {skill.name}
                            </h4>
                            <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                                transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                                className="h-2 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full"
                              />
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 block">
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

