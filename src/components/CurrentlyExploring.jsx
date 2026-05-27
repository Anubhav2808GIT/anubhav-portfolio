import { useInView } from 'react-intersection-observer'
import { Bot, Share2, Users, Activity, ShieldCheck, Mic } from 'lucide-react'

const topics = [
  {
    icon: <Bot size={22} />,
    title: 'AI Agents',
    description: 'Autonomous reasoning loops, dynamic planning, function calling, tool-use execution patterns, and self-correction paradigms.',
    glowClass: 'card-glow-cyan',
    color: '#00d4ff',
  },
  {
    icon: <Share2 size={22} />,
    title: 'MCP (Model Context Protocol)',
    description: 'Developing standardized context layers, pluggable resource interfaces, and seamless tool extensions for private LLMs.',
    glowClass: 'card-glow-purple',
    color: '#a855f7',
  },
  {
    icon: <Users size={22} />,
    title: 'Multi-Agent Systems',
    description: 'Collaborative swarm architectures, hierarchical team communication, distributed state syncing, and task handoffs.',
    glowClass: 'card-glow-blue',
    color: '#3b82f6',
  },
  {
    icon: <Activity size={22} />,
    title: 'Observability Engineering',
    description: 'Semantic logging, tracing GenAI requests with OpenTelemetry, latency diagnostics, and real-time anomaly discovery.',
    glowClass: 'card-glow-green',
    color: '#10b981',
  },
  {
    icon: <ShieldCheck size={22} />,
    title: 'LLM Evaluation & Guardrails',
    description: 'Ensuring absolute security through input prompt injection defense, output structural verification, and hallucination scoring.',
    glowClass: 'card-glow-pink',
    color: '#ec4899',
  },
  {
    icon: <Mic size={22} />,
    title: 'Voice AI Systems',
    description: 'Exploring low-latency speech-to-speech agents, dynamic real-time audio streams, interruption models, and acoustic design.',
    glowClass: 'card-glow-amber',
    color: '#f59e0b',
  },
]

export default function CurrentlyExploring() {
  const { ref: headRef, inView: headIn } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="exploring" className="relative py-28 px-6 bg-[#050810]">
      {/* Background orbs */}
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] orb orb-purple opacity-20 pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] orb orb-cyan opacity-15 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
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
          <div className="section-tag mb-4">Research & Dev</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
            Currently <span className="gradient-text">Exploring</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            Continuously exploring modern AI system design, orchestration frameworks, and production-grade intelligent architectures.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, i) => (
            <ExploringCard key={topic.title} topic={topic} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExploringCard({ topic, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <div
      ref={ref}
      className={`group glass rounded-2xl p-6 cursor-default border border-white/5 ${topic.glowClass}`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 80}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 80}ms, border-color 0.4s, box-shadow 0.3s`,
      }}
    >
      <div className="flex items-start gap-4 h-full">
        {/* Icon container */}
        <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{
            background: `${topic.color}10`,
            border: `1px solid ${topic.color}20`,
            color: topic.color
          }}>
          {topic.icon}
        </div>
        
        {/* Content */}
        <div className="space-y-2 min-w-0">
          <h3 className="font-display font-bold text-base text-slate-100 group-hover:text-white leading-tight transition-colors duration-200">
            {topic.title}
          </h3>
          <p className="text-xs text-slate-500 group-hover:text-slate-400 leading-relaxed transition-colors duration-200">
            {topic.description}
          </p>
        </div>
      </div>
    </div>
  )
}
