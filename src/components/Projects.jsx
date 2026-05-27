import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Layers, Zap, Shield, BarChart3, Bot } from 'lucide-react'
import { GithubIcon } from './Icons'

const projects = [
  {
    id: 'sentinel',
    featured: true,
    badge: 'Flagship Project',
    badgeColor: 'cyan',
    icon: <Shield size={22} />,
    title: 'SentinelAI',
    subtitle: 'Real-Time Incident Intelligence & Observability Platform',
    description:
      'A production-style AI-powered observability and incident intelligence platform built using event-driven microservices architecture for real-time telemetry processing, anomaly detection, and intelligent incident correlation.',
    longDesc:
      'Designed to handle high-throughput telemetry streams, SentinelAI applies AI-driven anomaly detection and correlation engines to surface actionable incidents in real time — replacing reactive firefighting with proactive intelligence.',
    highlights: [
      'Event-driven microservices with Kafka-powered async pipelines',
      'AI anomaly detection with configurable threshold policies',
      'WebSocket-powered real-time dashboard updates',
      'Incident correlation engine across distributed telemetry sources',
      'Scalable Redis-backed caching for sub-millisecond alert delivery',
    ],
    arch: ['FastAPI Gateway', 'Kafka Streams', 'Redis Cache', 'AI Engine', 'WebSocket Server', 'PostgreSQL Store'],
    tags: ['Python', 'FastAPI', 'Kafka', 'Redis', 'Docker', 'PostgreSQL', 'WebSockets', 'AI/ML'],
    color: 'cyan',
    gradient: 'from-cyan-500/10 via-transparent to-violet-500/10',
    borderGlow: 'rgba(0,212,255,0.2)',
    accentColor: '#00d4ff',
    githubUrl: 'https://github.com/Anubhav2808GIT/sentinel-ai',
    demoUrl: '#',
  },
  {
    id: 'cvantra',
    featured: false,
    badge: 'GenAI Platform',
    badgeColor: 'violet',
    icon: <BarChart3 size={22} />,
    title: 'Cvantra-AI',
    subtitle: 'Resume Intelligence & GenAI Analysis Platform',
    description:
      'An end-to-end GenAI platform that analyzes resumes and computes Resume ↔ Job Description match scores using local LLMs via Ollama. Built with a clean dashboard, intelligent scoring workflows, and recruiter-style AI insights.',
    longDesc:
      'Cvantra-AI brings enterprise-grade candidate intelligence to the hiring workflow. Powered by local LLMs and RAG-style analysis, it delivers gap analysis, skill matching, AI-generated interview questions, and 4-week upskilling roadmaps.',
    highlights: [
      'Fit percentage scoring (0–100) with gap & keyword analysis',
      'Local LLM inference via Ollama — fully private, no API costs',
      'AI-generated recruiter-style summaries and interview questions',
      '4-week personalised upskilling roadmap generation',
      'SQLite-backed persistent report history with analytics dashboard',
    ],
    arch: ['FastAPI Backend', 'Ollama LLM', 'RAG Engine', 'React Dashboard', 'SQLite Store', 'Recharts Analytics'],
    tags: ['FastAPI', 'Ollama', 'React', 'TypeScript', 'TailwindCSS', 'SQLite', 'Recharts', 'RAG'],
    color: 'violet',
    gradient: 'from-violet-500/10 via-transparent to-pink-500/10',
    borderGlow: 'rgba(124,58,237,0.2)',
    accentColor: '#a855f7',
    githubUrl: 'https://github.com/Anubhav2808GIT/CVantra_AI',
    demoUrl: '#',
  },
  {
    id: 'jobhunter',
    featured: false,
    badge: 'Automation Workflow',
    badgeColor: 'green',
    icon: <Bot size={22} />,
    title: 'AI Job Hunter Assistant',
    subtitle: 'Intelligent Job Automation & Orchestration Workflow',
    description:
      'An AI-powered automation workflow that discovers jobs, filters relevant opportunities, scores job-fit using local LLMs, generates personalized cover letters, and sends instant Telegram alerts — fully orchestrated with n8n.',
    longDesc:
      'A complete end-to-end job hunting intelligence engine. The pipeline runs on a schedule, deduplicates listings, applies AI scoring, generates tailored cover letters, and syncs everything to Google Sheets — hands-free.',
    highlights: [
      'Scheduled multi-source job discovery with smart filtering',
      'AI-based resume-job fit scoring via local LLM inference',
      'Automated cover letter generation tailored to each role',
      'Duplicate detection using hash-based SQL deduplication',
      'Real-time Telegram bot alerts + Google Sheets sync',
    ],
    arch: ['Schedule Trigger', 'HTTP Job Fetcher', 'Filter Engine', 'Dedup Layer', 'AI Scorer', 'Cover Letter Gen', 'Telegram Alert', 'Sheets Sync'],
    tags: ['n8n', 'Ollama', 'Google Sheets', 'Telegram Bot', 'HTTP APIs', 'SQL', 'Python'],
    color: 'green',
    gradient: 'from-green-500/10 via-transparent to-cyan-500/10',
    borderGlow: 'rgba(16,185,129,0.2)',
    accentColor: '#10b981',
    githubUrl: 'https://github.com/Anubhav2808GIT/ai-job-hunter-assistant',
    demoUrl: '#',
  },
]

const badgeColorMap = {
  cyan: 'rgba(0,212,255,0.12)',
  violet: 'rgba(124,58,237,0.12)',
  green: 'rgba(16,185,129,0.12)',
}
const badgeTextMap = {
  cyan: '#00d4ff',
  violet: '#a855f7',
  green: '#10b981',
}
const badgeBorderMap = {
  cyan: 'rgba(0,212,255,0.25)',
  violet: 'rgba(124,58,237,0.25)',
  green: 'rgba(16,185,129,0.25)',
}

function ArchPill({ label, color }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
      style={{ background: `${color}15`, border: `1px solid ${color}30`, color }}>
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
      {label}
    </div>
  )
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })
  const isFirst = project.featured

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${index * 150}ms, transform 0.7s ease ${index * 150}ms`,
      }}
    >
      <div
        className={`relative rounded-2xl overflow-hidden cursor-default transition-all duration-500 ${isFirst ? 'lg:col-span-2' : ''}`}
        style={{
          background: 'rgba(10,14,26,0.9)',
          border: `1px solid ${hovered ? project.borderGlow : 'rgba(255,255,255,0.05)'}`,
          boxShadow: hovered
            ? `0 8px 48px ${project.borderGlow}, 0 4px 24px rgba(0,0,0,0.6)`
            : '0 4px 24px rgba(0,0,0,0.4)',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Top gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} pointer-events-none`} />

        {/* Featured glow bar */}
        {isFirst && (
          <div className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }} />
        )}

        <div className="relative p-7 lg:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-5 gap-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${project.accentColor}15`, border: `1px solid ${project.accentColor}30`, color: project.accentColor }}>
                {project.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: badgeColorMap[project.badgeColor], border: `1px solid ${badgeBorderMap[project.badgeColor]}`, color: badgeTextMap[project.badgeColor] }}>
                    {project.badge}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-white leading-tight">{project.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{project.subtitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-200 transition-colors hover:bg-white/5"
                aria-label={`${project.title} GitHub`}>
                <GithubIcon size={16} />
              </a>
              <a href={project.demoUrl}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-200 transition-colors hover:bg-white/5"
                aria-label={`${project.title} Demo`}>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-400 leading-relaxed mb-4">{project.description}</p>
          <p className="text-xs text-slate-500 leading-relaxed mb-5">{project.longDesc}</p>

          {/* Architecture flow */}
          <div className="mb-5">
            <p className="text-xs text-slate-600 uppercase tracking-wider font-semibold mb-3 flex items-center gap-1.5">
              <Layers size={11} /> Architecture Flow
            </p>
            <div className="flex flex-wrap gap-2">
              {project.arch.map((node, i) => (
                <div key={node} className="flex items-center gap-1.5">
                  <ArchPill label={node} color={project.accentColor} />
                  {i < project.arch.length - 1 && (
                    <span className="text-slate-700 text-xs">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <p className="text-xs text-slate-600 uppercase tracking-wider font-semibold mb-3 flex items-center gap-1.5">
              <Zap size={11} /> Key Highlights
            </p>
            <ul className="space-y-1.5">
              {project.highlights.map(h => (
                <li key={h} className="flex items-start gap-2 text-xs text-slate-400">
                  <span className="mt-1 w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.accentColor }} />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(tag => (
              <span key={tag} className="tech-badge text-xs" style={{
                background: `${project.accentColor}08`,
                borderColor: `${project.accentColor}20`,
                color: `${project.accentColor}cc`,
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className="text-center mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}>
          <div className="section-tag mb-4">Featured Projects</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Systems I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
            Production-grade AI systems, intelligent automation workflows, and scalable system architectures
            designed for real engineering impact.
          </p>
        </div>

        {/* Project grid — first card spans full width on lg */}
        <div className="space-y-6">
          <ProjectCard project={projects[0]} index={0} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProjectCard project={projects[1]} index={1} />
            <ProjectCard project={projects[2]} index={2} />
          </div>
        </div>
      </div>
    </section>
  )
}
