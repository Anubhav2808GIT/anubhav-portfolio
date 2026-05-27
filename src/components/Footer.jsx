import { Mail, Heart, ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/5 py-10 px-6">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), rgba(124,58,237,0.3), transparent)' }} />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center font-bold text-xs text-white font-mono">
            AS
          </div>
          <div>
            <p className="font-display font-semibold text-sm text-white">Anubhav Sharma</p>
            <p className="text-xs text-slate-600">GenAI Engineer · Software Developer</p>
          </div>
        </div>

        {/* Links */}
        <p className="text-xs text-slate-600 flex items-center gap-1">
          Built with <Heart size={11} className="text-rose-500 fill-rose-500" /> using React & TailwindCSS
        </p>

        {/* Socials + back to top */}
        <div className="flex items-center gap-3">
          <a href="mailto:shanubhav2001@gmail.com" aria-label="Email"
            className="p-2 rounded-lg text-slate-500 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all">
            <Mail size={16} />
          </a>
          <a href="https://linkedin.com/in/anubhav-sharma-967292202" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="p-2 rounded-lg text-slate-500 hover:text-[#0077b5] hover:bg-blue-500/5 transition-all">
            <LinkedinIcon size={16} />
          </a>
          <a href="https://github.com/Anubhav2808GIT" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="p-2 rounded-lg text-slate-500 hover:text-violet-400 hover:bg-violet-500/5 transition-all">
            <GithubIcon size={16} />
          </a>
          <button onClick={scrollTop} aria-label="Back to top"
            className="p-2 rounded-lg text-slate-500 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all ml-2">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <p className="text-center text-xs text-slate-700 mt-6">
        © {new Date().getFullYear()} Anubhav Sharma. All rights reserved.
      </p>
    </footer>
  )
}
