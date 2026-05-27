import { useInView } from 'react-intersection-observer'
import { Brain, Server, Workflow, Database, Cloud, Wrench } from 'lucide-react'

const skillCategories = [
  {
    id: 'genai',
    icon: <Brain size={22} />,
    title: 'Generative AI',
    color: '#00d4ff',
    borderColor: 'rgba(0,212,255,0.15)',
    bgColor: 'rgba(0,212,255,0.06)',
    skills: [
      { name: 'LLM Integration', level: 90 },
      { name: 'RAG Pipelines', level: 88 },
      { name: 'Prompt Engineering', level: 85 },
      { name: 'LangChain', level: 80 },
      { name: 'Ollama (Local LLMs)', level: 82 },
      { name: 'Vector Databases', level: 78 },
      { name: 'AI Chatbot Development', level: 85 },
      { name: 'Embeddings & Chunking', level: 80 },
    ],
  },
  {
    id: 'backend',
    icon: <Server size={22} />,
    title: 'Backend Engineering',
    color: '#7c3aed',
    borderColor: 'rgba(124,58,237,0.2)',
    bgColor: 'rgba(124,58,237,0.06)',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'FastAPI', level: 90 },
      { name: 'REST APIs', level: 90 },
      { name: 'Microservices', level: 80 },
      { name: 'SOAP / .NET (C#)', level: 65 },
      { name: 'WebSockets', level: 75 },
      { name: 'JWT Auth & RBAC', level: 80 },
      { name: 'System Design', level: 78 },
    ],
  },
  {
    id: 'automation',
    icon: <Workflow size={22} />,
    title: 'Automation & Orchestration',
    color: '#10b981',
    borderColor: 'rgba(16,185,129,0.2)',
    bgColor: 'rgba(16,185,129,0.06)',
    skills: [
      { name: 'n8n Workflow Automation', level: 82 },
      { name: 'Event-Driven Architecture', level: 78 },
      { name: 'Apache Kafka', level: 72 },
      { name: 'AI Workflow Design', level: 80 },
      { name: 'API Orchestration', level: 82 },
      { name: 'Celery / Task Queues', level: 68 },
    ],
  },
  {
    id: 'databases',
    icon: <Database size={22} />,
    title: 'Databases & Infrastructure',
    color: '#f59e0b',
    borderColor: 'rgba(245,158,11,0.2)',
    bgColor: 'rgba(245,158,11,0.06)',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 78 },
      { name: 'Redis', level: 76 },
      { name: 'MySQL / SQL Server', level: 80 },
      { name: 'SQLite', level: 82 },
      { name: 'Database Query Optimisation', level: 78 },
    ],
  },
  {
    id: 'cloud',
    icon: <Cloud size={22} />,
    title: 'Cloud & DevOps',
    color: '#3b82f6',
    borderColor: 'rgba(59,130,246,0.2)',
    bgColor: 'rgba(59,130,246,0.06)',
    skills: [
      { name: 'Docker', level: 82 },
      { name: 'CI/CD Pipelines', level: 80 },
      { name: 'AWS (Basics)', level: 60 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'Linux / Shell', level: 72 },
    ],
  },
  {
    id: 'tools',
    icon: <Wrench size={22} />,
    title: 'Developer Tools',
    color: '#ec4899',
    borderColor: 'rgba(236,72,153,0.2)',
    bgColor: 'rgba(236,72,153,0.06)',
    skills: [
      { name: 'Swagger / OpenAPI', level: 88 },
      { name: 'Postman', level: 88 },
      { name: 'Pandas / NumPy', level: 76 },
      { name: 'Scikit-learn', level: 68 },
      { name: 'Matplotlib', level: 70 },
      { name: 'JavaScript', level: 72 },
    ],
  },
]

function SkillBar({ name, level, color, delay }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="text-xs text-slate-400 font-medium">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}aa, ${color})`,
            transitionDelay: `${delay}ms`,
            boxShadow: inView ? `0 0 8px ${color}50` : 'none',
          }}
        />
      </div>
    </div>
  )
}

function SkillCard({ category, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <div
      ref={ref}
      className="rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px]"
      style={{
        background: 'rgba(10,14,26,0.8)',
        border: `1px solid ${inView ? category.borderColor : 'rgba(255,255,255,0.04)'}`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s ease ${index * 100}ms, border-color 0.4s, box-shadow 0.3s`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 8px 32px ${category.color}15`
        e.currentTarget.style.borderColor = `${category.color}30`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = category.borderColor
      }}
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: category.bgColor, border: `1px solid ${category.borderColor}`, color: category.color }}>
          {category.icon}
        </div>
        <h3 className="font-semibold text-sm text-white">{category.title}</h3>
      </div>

      {/* Skill bars */}
      <div className="space-y-3">
        {category.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={category.color}
            delay={index * 100 + i * 60}
          />
        ))}
      </div>
    </div>
  )
}

// Quick-glance tech pills
const techPills = [
  'Python', 'FastAPI', 'LangChain', 'Ollama', 'RAG', 'Kafka', 'Redis',
  'Docker', 'PostgreSQL', 'MongoDB', 'n8n', 'REST APIs', 'WebSockets',
  'Vector DB', 'Prompt Engineering', 'AI Agents', 'CI/CD', 'Swagger', 'Postman', 'GitHub',
]

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className="text-center mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}>
          <div className="section-tag mb-4">Skills & Technologies</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            My <span className="gradient-text">Technical Stack</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed mb-8">
            A curated set of tools, frameworks, and platforms I use to build production AI and software systems.
          </p>

          {/* Tech pill cloud */}
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {techPills.map((pill, i) => (
              <span key={pill}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-slate-400 cursor-default transition-all duration-200 hover:text-cyan-400 hover:border-cyan-400/30"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  transitionDelay: `${i * 30}ms`,
                }}>
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Skill category grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
