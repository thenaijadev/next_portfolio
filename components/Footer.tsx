'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail, FiGlobe } from 'react-icons/fi'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/thenaijadev', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/okworchukwuemeka/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:okworcloud@gmail.com', label: 'Email' },
  { icon: FiGlobe, href: 'https://github.com/thenaijadev', label: 'Website' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Okwor Chukwuemeka</h3>
            <p className="text-gray-400">
              Flutter Developer & Full-Stack Engineer passionate about building exceptional user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-primary-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-primary-400 transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
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
                    className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Okwor Chukwuemeka Nnajiofor. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with Next.js, React, and TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  )
}

