import { useEffect, useRef, useState } from 'react'
import { ArrowDown, Download, Terminal, Cpu, Zap, ChevronRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

const roles = [
  'GenAI Engineer',
  'AI Software Engineer',
  'RAG Pipeline Architect',
  'LLM Systems Engineer',
  'AI Automation Engineer',
]

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []
    const W = canvas.width = canvas.offsetWidth
    const H = canvas.height = canvas.offsetHeight

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * W
        this.y = Math.random() * H
        this.vx = (Math.random() - 0.5) * 0.4
        this.vy = (Math.random() - 0.5) * 0.4
        this.r = Math.random() * 1.5 + 0.3
        this.alpha = Math.random() * 0.5 + 0.1
        this.color = Math.random() > 0.5 ? '0,212,255' : '124,58,237'
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset()
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.color},${this.alpha})`
        ctx.fill()
      }
    }

    for (let i = 0; i < 120; i++) particles.push(new Particle())

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,212,255,${0.06 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
      particles.forEach(p => { p.update(); p.draw() })
      animId = requestAnimationFrame(draw)
    }
    draw()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', handleResize)
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', handleResize) }
  }, [])

  return <canvas ref={canvasRef} id="particle-canvas" className="absolute inset-0 w-full h-full" />
}

function TypewriterText({ texts }) {
  const [current, setCurrent] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const text = texts[current]
    let timeout

    if (!isDeleting) {
      if (charIdx < text.length) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        }, 60)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200)
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplayed(text.slice(0, charIdx - 1))
          setCharIdx(c => c - 1)
        }, 35)
      } else {
        setIsDeleting(false)
        setCurrent(c => (c + 1) % texts.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [charIdx, isDeleting, current, texts])

  return (
    <span className="gradient-text glow-text-cyan">
      {displayed}
      <span className="animate-pulse text-cyan-400 ml-0.5">|</span>
    </span>
  )
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setTimeout(() => setMounted(true), 100) }, [])

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24">
      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Radial glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 60%)' }} />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full animate-float"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 60%)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full animate-float-delayed"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 60%)' }} />

      {/* Content */}
      <div className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold tracking-widest uppercase"
          style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', color: '#10b981' }}>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to Opportunities · GenAI Engineer & Software Developer Roles
        </div>

        {/* Name */}
        <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-4">
          <span className="text-white">Anubhav</span>
          <br />
          <span className="gradient-text">Sharma</span>
        </h1>

        {/* Typewriter role */}
        <div className="text-xl md:text-2xl lg:text-3xl font-semibold font-display mb-6 h-10">
          <TypewriterText texts={roles} />
        </div>

        {/* Tagline */}
        <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Building <span className="text-cyan-400 font-medium">production-grade GenAI systems</span>,{' '}
          AI agents, observability platforms, and{' '}
          <span className="text-violet-400 font-medium">intelligent automation workflows</span>.
        </p>

        {/* Stat chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { icon: <Cpu size={13} />, label: '2+ Years Experience' },
            { icon: <Zap size={13} />, label: 'RAG & LLM Systems' },
            { icon: <Terminal size={13} />, label: 'Production FastAPI' },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-slate-400"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <span className="text-cyan-400">{icon}</span>
              {label}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <a href="#projects" className="btn-primary text-sm px-7 py-3">
            View Projects <ChevronRight size={16} />
          </a>
          <a href="/resume.pdf" download className="btn-secondary text-sm px-7 py-3">
            <Download size={15} /> Download Resume
          </a>
          <a href="#contact" className="btn-secondary text-sm px-7 py-3">
            Contact Me
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-16">
          <a href="https://github.com/Anubhav2808GIT" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white transition-all hover:bg-white/5"
            aria-label="GitHub Profile">
            <GithubIcon size={18} /> GitHub
          </a>
          <a href="https://linkedin.com/in/anubhav-sharma-967292202" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-[#0077b5] transition-all hover:bg-blue-500/5"
            aria-label="LinkedIn Profile">
            <LinkedinIcon size={18} /> LinkedIn
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce z-20">
        <span className="text-[10px] text-slate-600 tracking-widest uppercase font-semibold">Scroll</span>
        <ArrowDown size={14} className="text-cyan-500/60" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #050810)' }} />
    </section>
  )
}
