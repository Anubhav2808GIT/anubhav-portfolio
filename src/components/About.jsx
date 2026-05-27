import { useInView } from 'react-intersection-observer'
import { Brain, Server, Workflow, Database, Code2, GitBranch } from 'lucide-react'

const highlights = [
  {
    icon: <Brain size={20} />,
    title: 'Generative AI Systems',
    description: 'RAG pipelines, LLM integration, vector databases, embeddings, prompt engineering, and AI chatbot development for enterprise automation.',
    color: 'cyan',
  },
  {
    icon: <Server size={20} />,
    title: 'Backend Engineering',
    description: 'Production-grade FastAPI services, REST & SOAP API design, authentication systems, microservices, and high-availability architectures.',
    color: 'violet',
  },
  {
    icon: <Workflow size={20} />,
    title: 'AI Workflow Automation',
    description: 'Intelligent multi-step automation pipelines using n8n, event-driven processing, and AI-powered decision orchestration.',
    color: 'blue',
  },
  {
    icon: <Database size={20} />,
    title: 'Data & Observability',
    description: 'Real-time telemetry ingestion, anomaly detection, incident correlation engines, and distributed data pipelines.',
    color: 'green',
  },
  {
    icon: <Code2 size={20} />,
    title: 'API Integration',
    description: 'Seamless third-party integrations, healthcare data exchange, enterprise tool connectivity, and secure data orchestration.',
    color: 'pink',
  },
  {
    icon: <GitBranch size={20} />,
    title: 'DevOps & CI/CD',
    description: 'Docker containerization, Git-based CI/CD pipelines, deployment lifecycle management, and zero-downtime release engineering.',
    color: 'orange',
  },
]

const colorMap = {
  cyan: { bg: 'rgba(0,212,255,0.08)', border: 'rgba(0,212,255,0.15)', icon: '#00d4ff', glow: 'rgba(0,212,255,0.1)' },
  violet: { bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.2)', icon: '#a855f7', glow: 'rgba(124,58,237,0.1)' },
  blue: { bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', icon: '#60a5fa', glow: 'rgba(59,130,246,0.1)' },
  green: { bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.2)', icon: '#10b981', glow: 'rgba(16,185,129,0.1)' },
  pink: { bg: 'rgba(236,72,153,0.08)', border: 'rgba(236,72,153,0.2)', icon: '#ec4899', glow: 'rgba(236,72,153,0.1)' },
  orange: { bg: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.2)', icon: '#f97316', glow: 'rgba(249,115,22,0.1)' },
}

function HighlightCard({ item, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const c = colorMap[item.color]

  return (
    <div
      ref={ref}
      className="skill-card group cursor-default"
      style={{
        transitionDelay: `${index * 80}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms, border-color 0.3s, box-shadow 0.3s, background 0.3s`,
      }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.icon }}>
          {item.icon}
        </div>
        <div>
          <h3 className="font-semibold text-sm text-slate-100 mb-1.5">{item.title}</h3>
          <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export default function About() {
  const { ref: headRef, inView: headIn } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headRef}
          className="text-center mb-16"
          style={{
            opacity: headIn ? 1 : 0,
            transform: headIn ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="section-tag mb-4">About</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Engineering AI for the{' '}
            <span className="gradient-text">Real World</span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-base leading-relaxed">
            I'm an <span className="text-cyan-400 font-medium">AI Engineer & Software Developer</span> with 2+ years of experience
            shipping scalable GenAI applications and Python-based production systems. My work spans the full stack of
            intelligent systems — from <span className="text-violet-400 font-medium">RAG pipeline design</span> and LLM integration
            to distributed microservices, real-time event-driven architectures, and workflow automation.
          </p>
        </div>

        {/* Two-column bio + code terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Bio */}
          <div
            style={{
              opacity: headIn ? 1 : 0,
              transform: headIn ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}
          >
            <div className="glass rounded-2xl p-8 h-full"
              style={{ border: '1px solid rgba(0,212,255,0.08)' }}>
              <h3 className="font-semibold text-lg text-white mb-5 flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-cyan-400 to-violet-600" />
                Engineering Philosophy
              </h3>
              <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
                <p>
                  I build systems where AI is a first-class citizen — not bolted on, but architected in.
                  Every API I design, every pipeline I architect is built for <span className="text-slate-200">reliability, scalability, and observability</span>.
                </p>
                <p>
                  At <span className="text-cyan-400 font-medium">GlobalLogic</span>, I've shipped GenAI-powered automation
                  that eliminated 60–70% of manual overhead, and engineered healthcare data exchange APIs
                  that maintain <span className="text-slate-200">&gt;99.9% availability</span> for mission-critical systems.
                </p>
                <p>
                  I'm deeply focused on the intersection of <span className="text-violet-400 font-medium">LLM systems engineering</span> and
                  software architecture. Passionate about distributed systems, AI orchestration, and software engineering.
                </p>
                <p>
                  My philosophy centers on <span className="text-slate-200">engineering AI systems beyond demos — with reliability, scalability, and real-world usability in mind</span>. Design for failure, optimize for throughput, instrument everything, and iterate fast.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {['FastAPI', 'LangChain', 'Ollama', 'RAG', 'n8n', 'Docker', 'PostgreSQL', 'Redis'].map(t => (
                  <span key={t} className="tech-badge text-xs">{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Code terminal */}
          <div
            style={{
              opacity: headIn ? 1 : 0,
              transform: headIn ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s',
            }}
          >
            <div className="rounded-2xl overflow-hidden h-full"
              style={{ background: '#0a0e1a', border: '1px solid rgba(0,212,255,0.1)' }}>
              {/* Terminal bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5"
                style={{ background: '#0d1225' }}>
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs text-slate-500 font-mono">anubhav@genai ~ profile.py</span>
              </div>
              <pre className="p-6 text-xs font-mono leading-relaxed overflow-auto" style={{ maxHeight: '340px' }}>
                <span className="text-violet-400">class</span>{' '}
                <span className="text-cyan-300">AnubhavSharma</span>
                <span className="text-slate-300">:</span>{'\n'}
                {'    '}<span className="text-slate-500"># GenAI Engineer & Software Developer</span>{'\n\n'}
                {'    '}<span className="text-violet-400">def</span>{' '}
                <span className="text-yellow-300">__init__</span>
                <span className="text-slate-300">(self):</span>{'\n'}
                {'        '}<span className="text-blue-300">self</span><span className="text-slate-300">.</span>
                <span className="text-green-300">role</span>{' = '}<span className="text-orange-300">"GenAI Engineer"</span>{'\n'}
                {'        '}<span className="text-blue-300">self</span><span className="text-slate-300">.</span>
                <span className="text-green-300">experience</span>{' = '}<span className="text-orange-300">"2+ years"</span>{'\n'}
                {'        '}<span className="text-blue-300">self</span><span className="text-slate-300">.</span>
                <span className="text-green-300">focus</span>{' = ['}<span className="text-orange-300">"GenAI"</span>{', '}<span className="text-orange-300">"RAG"</span>{', '}<span className="text-orange-300">"FastAPI"</span>{']'}{'\n\n'}
                {'    '}<span className="text-violet-400">def</span>{' '}
                <span className="text-yellow-300">get_stack</span>
                <span className="text-slate-300">(self) -&gt; dict:</span>{'\n'}
                {'        '}<span className="text-violet-400">return</span>{' {'}{'\n'}
                {'            '}<span className="text-orange-300">"ai"</span>{': ['}<span className="text-orange-300">"LangChain"</span>{', '}<span className="text-orange-300">"Ollama"</span>{', '}<span className="text-orange-300">"RAG"</span>{'],'}{'\n'}
                {'            '}<span className="text-orange-300">"backend"</span>{': ['}<span className="text-orange-300">"FastAPI"</span>{', '}<span className="text-orange-300">"Python"</span>{'],'}{'\n'}
                {'            '}<span className="text-orange-300">"infra"</span>{': ['}<span className="text-orange-300">"Kafka"</span>{', '}<span className="text-orange-300">"Docker"</span>{', '}<span className="text-orange-300">"Redis"</span>{'],'}{'\n'}
                {'            '}<span className="text-orange-300">"db"</span>{': ['}<span className="text-orange-300">"PostgreSQL"</span>{', '}<span className="text-orange-300">"MongoDB"</span>{'],'}{'\n'}
                {'        '}<span className="text-slate-300">{'}'}</span>{'\n\n'}
                {'    '}<span className="text-violet-400">def</span>{' '}
                <span className="text-yellow-300">impact</span>
                <span className="text-slate-300">(self):</span>{'\n'}
                {'        '}<span className="text-violet-400">return</span>{' {'}{'\n'}
                {'            '}<span className="text-orange-300">"automation_savings"</span>{': '}<span className="text-cyan-300">"60-70%"</span>{','}{'\n'}
                {'            '}<span className="text-orange-300">"api_accuracy_boost"</span>{': '}<span className="text-cyan-300">"~30%"</span>{','}{'\n'}
                {'            '}<span className="text-orange-300">"prod_issues_resolved"</span>{': '}<span className="text-cyan-300">80</span>{','}{'\n'}
                {'            '}<span className="text-orange-300">"uptime"</span>{': '}<span className="text-cyan-300">"99.9%"</span>{','}{'\n'}
                {'        '}<span className="text-slate-300">{'}'}</span>
              </pre>
            </div>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {highlights.map((item, i) => (
            <HighlightCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
