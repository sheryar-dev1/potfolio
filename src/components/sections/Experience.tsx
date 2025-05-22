'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'ALIMCOSOFT (SMC-PRIVATE) LIMITED',
    period: '2022 - Present',
    description: [
      'Leading frontend development for enterprise applications using Next.js and React',
      'Implementing and managing backend solutions using Sanity, Supabase, and Firebase',
      'Developing and maintaining RESTful APIs and real-time database solutions',
      'Mentoring junior developers and conducting code reviews',
      'Collaborating with UX/UI designers to create responsive and accessible interfaces',
      'Implementing state management solutions and optimizing application performance',
    ],
  },
  {
    title: 'Junior Frontend Developer',
    company: 'ALIMCOSOFT (SMC-PRIVATE) LIMITED',
    period: '2021 - 2022',
    description: [
      'Developed and maintained client projects using React and Next.js',
      'Worked with backend technologies including Sanity CMS and Firebase',
      'Implemented responsive designs and interactive user interfaces',
      'Integrated REST APIs and handled data management',
      'Collaborated with senior developers on feature implementation',
      'Participated in daily stand-ups and sprint planning meetings',
    ],
  },
  {
    title: 'Frontend Development Intern',
    company: 'ALIMCOSOFT (SMC-PRIVATE) LIMITED',
    period: '2020 - 2021',
    description: [
      'Assisted in developing web applications using React and Next.js',
      'Learned and implemented modern frontend frameworks and tools',
      'Worked with backend technologies including Sanity and Firebase',
      'Participated in code reviews and team meetings',
      'Contributed to bug fixes and feature implementation',
      'Gained hands-on experience with version control and agile methodologies',
    ],
  },
]

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Work Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          My professional journey and achievements over the years
        </motion.p>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-4xl mx-auto px-4"
      >
        {experiences.map((experience) => (
          <motion.div
            key={experience.title}
            variants={itemVariants}
            className="relative pl-8 pb-12 border-l-2 border-blue-500 last:border-l-0 last:pb-0"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-base md:text-xl font-bold">{experience.title}</h3>
                  <p className="text-sm md:text-base text-blue-400">{experience.company}</p>
                </div>
                <span className= "text-sm md:text-base text-gray-400 mt-2 md:mt-0">{experience.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {experience.description.map((item, i) => (
                  <li key={i} className="text-sm md:text-base">{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
} 