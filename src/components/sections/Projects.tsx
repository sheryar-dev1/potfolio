'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import {  FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const projects = [
  {
    title: 'NEECA Product Registration System',
    description: 'A comprehensive government project for the National Energy Efficiency & Conservation Authority (NEECA) that manages the registration and certification of electrical products. The system facilitates a complete workflow involving multiple stakeholders: clients/companies register products, make payments, get lab reports approved, and receive admin verification for successful product registration. The platform handles the entire lifecycle of electrical product certification (fans, bulbs, etc.) ensuring compliance with energy efficiency standards.',
    images: [
      '/projects/neeca.jpg',
      '/projects/neeca2.png',
      '/projects/neeca3.png',
      '/projects/neeca4.png',
    ],
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'GraphQL',
      'Apollo Client',
      'JavaScript',
    ],
    features: [
      'Complete product registration workflow',
      'Payment integration and tracking',
      'Lab report submission and approval system',
      'Admin verification and certification process',
      'Document management and verification',
      'Role-based access control',
    ],
    // github: 'https://github.com/yourusername/neeca-system',
    live: 'https://neers.com.pk/',
  },
  {
    title: 'PolarPro E-Commerce Store',
    description: 'An advanced e-commerce platform for PolarPro, a leading brand in camera and filmmaking accessories. The website allows users to browse and purchase a wide range of products including cameras, camera lenses, GoPro accessories, iPhone covers, bags, and more. The platform is built for a seamless shopping experience with modern UI/UX and robust product management.',
    images: [
      '/projects/polarpro.jpg',
      '/projects/polarpro2.png',
      '/projects/polarpro3.png',
      '/projects/polarpro4.png',
    ],
    technologies: [
      'Gatsby',
      'Storyblok CMS',
      'Tailwind CSS',
      'Stripe',
      'E-commerce Best Practices',
    ],
    features: [
      'Product catalog for cameras, lenses, GoPro, iPhone covers, bags, and more',
      'Shopping cart and secure checkout',
      'User account management',
      'Order tracking and history',
      'Integration with Storyblok CMS for dynamic content management',
      'Responsive design for all devices',
    ],
    live: 'https://www.polarpro.com/',
  },
  // {
  //   title: 'E-Commerce Platform',
  //   description: 'A full-featured e-commerce platform built with Next.js, featuring real-time inventory, secure payments, and an admin dashboard.',
  //   images: [
  //     '/projects/polarpro.jpg',
  //     '/projects/polarpro2.png',
  //     '/projects/polarpro3.png',
  //     '/projects/polarpro4.png',
  //   ],
  //   technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  //   github: 'https://github.com/yourusername/ecommerce',
  //   live: 'https://ecommerce-demo.com',
  // },
  // {
  //   title: 'Task Management App',
  //   description: 'A collaborative task management application with real-time updates, team features, and drag-and-drop functionality.',
  //   image: '/projects/taskmanager.jpg',
  //   technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
  //   github: 'https://github.com/yourusername/taskmanager',
  //   live: 'https://taskmanager-demo.com',
  // },
  // {
  //   title: 'Portfolio Website',
  //   description: 'A modern portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and responsive design.',
  //   image: '/projects/portfolio.jpg',
  //   technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
  //   github: 'https://github.com/yourusername/portfolio',
  //   live: 'https://portfolio-demo.com',
  // },
  // {
  //   title: 'Mobile Fitness App',
  //   description: 'A cross-platform fitness tracking application built with React Native and Expo, featuring workout plans and progress tracking.',
  //   image: '/projects/fitness.jpg',
  //   technologies: ['React Native', 'Expo', 'Firebase', 'Redux'],
  //   github: 'https://github.com/yourusername/fitness-app',
  //   live: 'https://fitness-app-demo.com',
  // },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const customScrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(59, 130, 246, 0.5);
    border-radius: 2px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(59, 130, 246, 0.7);
  }
`;

function ImageCarousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div 
      className="relative w-full h-56 md:h-72 rounded-t-2xl overflow-hidden flex-shrink-0 group/carousel bg-gray-900"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`Project image ${currentIndex + 1}`}
            fill
            quality={90}
            className={`object-contain md:object-cover object-center w-full h-full transform transition-all duration-700 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={currentIndex === 0}
            onLoadingComplete={() => setIsLoading(false)}
            onLoadStart={() => setIsLoading(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent opacity-70" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
        <button
          onClick={handlePrevious}
          className="bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors duration-300 backdrop-blur-sm"
          aria-label="Previous image"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors duration-300 backdrop-blur-sm"
          aria-label="Next image"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-full">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false)
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-6' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-3 right-3 px-2 py-1 bg-black/40 backdrop-blur-sm rounded-full text-white text-xs">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = customScrollbarStyles;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Here are some of my recent projects that showcase my skills and experience
        </motion.p>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-4"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border border-gray-700/50 hover:border-blue-500/50 flex flex-col md:h-[850px] min-h-[700px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <ImageCarousel images={project.images} />

            <div className="p-6 md:p-8 relative flex flex-col flex-grow">
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed line-clamp-3 text-sm md:text-base">
                  {project.description}
                </p>
                
                {project.features && (
                  <div className="mb-4 md:mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-2 md:mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 gap-1.5 md:gap-2 max-h-[160px] md:max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0" />
                          <span className="line-clamp-2 text-xs md:text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 md:gap-2 mt-8 sm:mt-0 md:mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 md:px-3 py-0.5 md:py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs md:text-sm border border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4 md:space-x-6 mt-auto pt-3 md:pt-4 border-t border-gray-700/50">
                {/* {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 md:gap-2 text-gray-400 hover:text-white transition-colors duration-300 group/link"
                  >
                    <FaGithub className="w-4 h-4 md:w-5 md:h-5 group-hover/link:text-blue-400 transition-colors" />
                    <span className="text-xs md:text-sm">View Code</span>
                  </a>
                )} */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 md:gap-2 text-gray-400 hover:text-white transition-colors duration-300 group/link"
                  >
                    <FaExternalLinkAlt className="w-4 h-4 md:w-5 md:h-5 group-hover/link:text-blue-400 transition-colors" />
                    <span className="text-xs md:text-sm">Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
} 