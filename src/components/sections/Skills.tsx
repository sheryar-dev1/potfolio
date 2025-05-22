'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGatsby,
  SiStorybook,
  SiStoryblok,
  SiSanity,
  SiSupabase,
  SiFirebase,
  SiExpo,
} from 'react-icons/si'

const skills = [
  { name: 'Next.js', icon: SiNextdotjs, level: 'Expert' },
  { name: 'React.js', icon: SiReact, level: 'Expert' },
  { name: 'JavaScript', icon: SiJavascript, level: 'Expert' },
  { name: 'TypeScript', icon: SiTypescript, level: 'Advanced' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Expert' },
  { name: 'HTML5', icon: SiHtml5, level: 'Expert' },
  { name: 'CSS3', icon: SiCss3, level: 'Expert' },
  { name: 'Gatsby', icon: SiGatsby, level: 'Advanced' },
  { name: 'Storybook', icon: SiStorybook, level: 'Advanced' },
  { name: 'Storyblok', icon: SiStoryblok, level: 'Intermediate' },
  { name: 'Sanity', icon: SiSanity, level: 'Advanced' },
  { name: 'Supabase', icon: SiSupabase, level: 'Advanced' },
  { name: 'Firebase', icon: SiFirebase, level: 'Advanced' },
  { name: 'Expo', icon: SiExpo, level: 'Intermediate' },
  { name: 'React Native', icon: SiReact, level: 'Intermediate' },
]

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-12 md:py-20">
      <div className="text-center mb-8 md:mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Technical Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto px-4"
        >
          Here are the technologies I work with on a daily basis
        </motion.p>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto px-4"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="bg-gray-800/50 p-4 md:p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-colors"
          >
            <div className="flex flex-col items-center space-y-2 md:space-y-3">
              <skill.icon className="w-8 h-8 md:w-12 md:h-12 text-blue-400" />
              <h3 className="font-medium text-sm md:text-base">{skill.name}</h3>
              <span className="text-xs md:text-sm text-gray-400">{skill.level}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
} 