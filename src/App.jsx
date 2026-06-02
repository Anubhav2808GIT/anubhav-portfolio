import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedTech from './components/FeaturedTech'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import CurrentlyExploring from './components/CurrentlyExploring'
import Achievements from './components/Achievements'
import ResumeSection from './components/ResumeSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#050810] text-slate-200 overflow-x-hidden">
      {/* Global scan line effect */}
      <div className="scan-line" />

      {/* Global background grid */}
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none z-0" />

      {/* Global floating orbs */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] orb orb-cyan opacity-30 pointer-events-none z-0" />
      <div className="fixed top-1/3 right-1/4 w-[500px] h-[500px] orb orb-purple opacity-20 pointer-events-none z-0" />
      <div className="fixed bottom-1/4 left-1/3 w-[400px] h-[400px] orb orb-blue opacity-20 pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar scrollY={scrollY} />
        <Hero />
        <FeaturedTech />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <CurrentlyExploring />
        <Achievements />
        <ResumeSection />
        <Contact />
        <Footer />
      </div>

      {/* Vercel Web Analytics tracking */}
      <Analytics />
    </div>
  )
}

export default App
