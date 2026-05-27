import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ scrollY }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const isScrolled = scrollY > 40

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )
    const sections = document.querySelectorAll('section[id]')
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-strong shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group" aria-label="Home">
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center font-bold text-sm font-mono text-white shadow-glow-cyan group-hover:shadow-lg transition-all duration-300">
              AS
            </div>
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-cyan-400/20 to-violet-600/20 blur-sm group-hover:blur-md transition-all duration-300" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            <span className="gradient-text">Anubhav</span>
            <span className="text-slate-400 ml-1">Sharma</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === link.href.slice(1)
                  ? 'text-cyan-400 bg-cyan-400/10'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Anubhav2808GIT"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all duration-200"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/anubhav-sharma-967292202"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg text-slate-400 hover:text-[#0077b5] hover:bg-blue-500/5 transition-all duration-200"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href="/resume.pdf"
            download
            className="btn-primary text-xs py-2 px-4 gap-1.5"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-strong border-t border-white/5 px-6 py-4 space-y-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex items-center gap-3 border-t border-white/5 mt-3">
            <a href="https://github.com/Anubhav2808GIT" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-white">
              <GithubIcon size={18} />
            </a>
            <a href="https://linkedin.com/in/anubhav-sharma-967292202" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-[#0077b5]">
              <LinkedinIcon size={18} />
            </a>
            <a href="/resume.pdf" download className="btn-primary text-xs py-2 px-4 ml-auto">
              <Download size={14} /> Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
