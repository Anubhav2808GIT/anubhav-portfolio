import { useInView } from 'react-intersection-observer'
import {
  FastApiIcon,
  DockerIcon,
  RedisIcon,
  KafkaIcon,
  OllamaIcon,
  LangChainIcon,
  N8nIcon
} from './Icons'

const techItems = [
  { name: 'FastAPI', icon: <FastApiIcon size={24} />, color: '#00d4ff', glow: 'rgba(0,212,255,0.12)' },
  { name: 'Apache Kafka', icon: <KafkaIcon size={24} />, color: '#ffffff', glow: 'rgba(255,255,255,0.06)' },
  { name: 'Docker', icon: <DockerIcon size={24} />, color: '#2496ed', glow: 'rgba(36,150,237,0.15)' },
  { name: 'Ollama', icon: <OllamaIcon size={24} />, color: '#a855f7', glow: 'rgba(168,85,247,0.15)' },
  { name: 'LangChain', icon: <LangChainIcon size={24} />, color: '#10b981', glow: 'rgba(16,185,129,0.15)' },
  { name: 'Redis', icon: <RedisIcon size={24} />, color: '#d8382a', glow: 'rgba(216,56,42,0.15)' },
  { name: 'n8n', icon: <N8nIcon size={24} />, color: '#f14a35', glow: 'rgba(241,74,53,0.15)' },
]

export default function FeaturedTech() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  // Duplicate items for seamless continuous marquee effect
  const marqueeItems = [...techItems, ...techItems, ...techItems, ...techItems]

  return (
    <section id="featured-tech" className="relative py-16 px-6 overflow-hidden border-y border-white/5 bg-[#070b16]/40">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[150px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.02) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={ref} className="text-center mb-14 max-w-3xl mx-auto"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}>
          <div className="section-tag mb-5">Featured Tech</div>
          <h3 className="text-lg md:text-2xl font-bold font-display text-white mb-4 leading-relaxed max-w-2xl mx-auto text-balance">
            "I enjoy designing <span className="gradient-text font-extrabold">scalable AI systems</span> with production-grade backend architectures."
          </h3>
          <p className="text-slate-400 font-medium text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            Strong hands-on engineering stack for AI systems and scalable backend architectures.
            Focused on building intelligent systems that are scalable, observable, and production-ready.
          </p>
        </div>

        {/* Sliding Marquee Track */}
        <div className="marquee-container py-4">
          <div className="animate-marquee-left flex items-center gap-6">
            {marqueeItems.map((tech, i) => (
              <div
                key={`${tech.name}-${i}`}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl cursor-default transition-all duration-300 select-none group"
                style={{
                  background: 'rgba(10,14,26,0.7)',
                  border: '1px solid rgba(255,255,255,0.03)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${tech.color}25`
                  e.currentTarget.style.boxShadow = `0 8px 32px ${tech.glow}`
                  e.currentTarget.style.background = 'rgba(10,14,26,0.95)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.03)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.background = 'rgba(10,14,26,0.7)'
                }}
              >
                <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {tech.icon}
                </div>
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
