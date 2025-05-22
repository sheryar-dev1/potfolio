import { Hero } from '../components/sections/Hero'
import { Skills } from '../components/sections/Skills'
import { Projects } from '../components/sections/Projects'
import { Experience } from '../components/sections/Experience'
import { Contact } from '../components/sections/Contact'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        </div>
      <Footer />
      </main>
  )
}
