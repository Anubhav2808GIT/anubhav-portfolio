import { useInView } from 'react-intersection-observer'
import { MapPin, Calendar, ExternalLink, TrendingUp } from 'lucide-react'

const experiences = [
  {
    id: 'globallogic-genai',
    company: 'GlobalLogic',
    companyUrl: 'https://www.globallogic.com',
    role: 'Software Engineer — AI & Systems | GenAI Use Case Project',
    period: 'Sep 2025 – Present',
    type: 'Full-time · On-site',
    location: 'India',
    current: true,
    color: '#00d4ff',
    tag: 'GenAI',
    tagColor: 'cyan',
    description: 'Spearheading internal GenAI automation initiatives — architecting intelligent chatbots, RAG-powered knowledge systems, and n8n-based workflow orchestration for enterprise-scale productivity transformation.',
    achievements: [
      {
        metric: '60–70%',
        label: 'Manual effort reduction',
        detail: 'Engineered AI-powered chatbots to automate internal workflows including travel documents, visa letters, and IT service tickets — driving drastic reduction in manual overhead and turnaround time.',
      },
      {
        metric: '~30%',
        label: 'LLM accuracy improvement',
        detail: 'Built and optimised RAG pipelines using advanced chunking strategies, embedding models, and vector databases. Applied prompt engineering and context window management to maximise LLM response quality.',
      },
      {
        metric: '40%',
        label: 'Team productivity boost',
        detail: 'Designed robust data pipelines with comprehensive logging, monitoring, and n8n workflow automation — systematically eliminating bottlenecks and increasing engineering throughput.',
      },
    ],
    stack: ['FastAPI', 'Python', 'RAG', 'LangChain', 'Vector Databases', 'n8n', 'Prompt Engineering', 'LLMs'],
  },
  {
    id: 'globallogic-hha',
    company: 'GlobalLogic · HHAeXchange',
    companyUrl: 'https://www.globallogic.com',
    role: 'Software Engineer — Systems & APIs | Client Engagement',
    period: 'Jul 2024 – Aug 2025',
    type: 'Full-time · Client Project',
    location: 'India',
    current: false,
    color: '#7c3aed',
    tag: 'Backend',
    tagColor: 'violet',
    description: 'Embedded with the HHAeXchange client team delivering high-availability healthcare data exchange APIs and managing production CI/CD pipelines for mission-critical systems.',
    achievements: [
      {
        metric: '15+',
        label: 'APIs designed & shipped',
        detail: 'Designed and developed REST and SOAP APIs using FastAPI and .NET (C#) for secure, compliant healthcare data exchange between enterprise systems — maintaining >99.9% uptime SLA.',
      },
      {
        metric: '30%',
        label: 'Faster release cycles',
        detail: 'Managed CI/CD pipelines and the full deployment lifecycle, reducing release cycle time by 30% and achieving zero critical production incidents during deployments.',
      },
      {
        metric: '80+',
        label: 'Production issues resolved',
        detail: 'Investigated and resolved 80+ production issues, earning the Spot Award for exceptional client-impact contributions and fast turnaround in a high-pressure environment.',
      },
    ],
    stack: ['FastAPI', 'Python', '.NET (C#)', 'REST APIs', 'SOAP', 'Swagger', 'Postman', 'CI/CD', 'PostgreSQL'],
  },
  {
    id: 'simran',
    company: 'Simran Software Solutions',
    companyUrl: '#',
    role: 'Web Developer Intern',
    period: 'Jul 2023 – Dec 2023',
    type: 'Internship',
    location: 'India',
    current: false,
    color: '#3b82f6',
    tag: 'Frontend',
    tagColor: 'blue',
    description: 'Developed responsive, user-friendly web interfaces and strengthened frontend engineering fundamentals through structured training and hands-on production projects.',
    achievements: [
      {
        metric: 'Multiple',
        label: 'Production UIs shipped',
        detail: 'Built responsive and accessible interfaces using JavaScript, HTML5, and CSS3 — contributing to real client projects with emphasis on performance and cross-browser compatibility.',
      },
    ],
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'UI/UX'],
  },
  {
    id: 'pennsummit',
    company: 'Pennsummit Tubular Engineering',
    companyUrl: '#',
    role: 'Python Developer Intern',
    period: 'Jan 2023 – Jun 2023',
    type: 'Internship',
    location: 'India',
    current: false,
    color: '#10b981',
    tag: 'Python',
    tagColor: 'green',
    description: 'Contributed to ERP system development by engineering backend business logic modules, automating workflows, and dramatically improving operational efficiency.',
    achievements: [
      {
        metric: '25%',
        label: 'Operational efficiency gain',
        detail: 'Built 7 backend ERP modules in Python with business logic for workflow automation, improved reporting pipelines, and system integrations — resulting in measurable operational efficiency improvements.',
      },
    ],
    stack: ['Python', 'ERP Systems', 'Backend Development', 'Business Logic', 'Automation'],
  },
]

const colorMap = {
  cyan: { tag: 'rgba(0,212,255,0.1)', tagBorder: 'rgba(0,212,255,0.2)', tagText: '#00d4ff' },
  violet: { tag: 'rgba(124,58,237,0.1)', tagBorder: 'rgba(124,58,237,0.25)', tagText: '#a855f7' },
  blue: { tag: 'rgba(59,130,246,0.1)', tagBorder: 'rgba(59,130,246,0.25)', tagText: '#60a5fa' },
  green: { tag: 'rgba(16,185,129,0.1)', tagBorder: 'rgba(16,185,129,0.25)', tagText: '#10b981' },
}

function ExperienceCard({ exp, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const c = colorMap[exp.tagColor]

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-8"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-24px)',
        transition: `opacity 0.7s ease ${index * 120}ms, transform 0.7s ease ${index * 120}ms`,
      }}>
      {/* Timeline */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="relative w-10 h-10 rounded-full flex items-center justify-center mt-1"
          style={{ background: `${exp.color}15`, border: `2px solid ${exp.color}40` }}>
          <div className="w-3 h-3 rounded-full" style={{ background: exp.color }} />
          {exp.current && (
            <div className="absolute inset-0 rounded-full animate-ping opacity-30"
              style={{ background: exp.color }} />
          )}
        </div>
        {index < experiences.length - 1 && (
          <div className="w-0.5 flex-1 mt-2" style={{
            background: `linear-gradient(to bottom, ${exp.color}40, ${experiences[index + 1].color}20)`,
            minHeight: '60px',
          }} />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 mb-8 rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-2px]"
        style={{
          background: 'rgba(10,14,26,0.8)',
          border: `1px solid rgba(255,255,255,0.05)`,
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = `${exp.color}25` }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)' }}>

        {/* Company + meta */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer"
                className="font-semibold text-base text-white hover:underline decoration-dotted flex items-center gap-1.5">
                {exp.company}
                <ExternalLink size={12} className="opacity-40" />
              </a>
              {exp.current && (
                <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', color: '#10b981' }}>
                  Current
                </span>
              )}
            </div>
            <p className="text-sm font-medium" style={{ color: exp.color }}>{exp.role}</p>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full font-semibold"
            style={{ background: c.tag, border: `1px solid ${c.tagBorder}`, color: c.tagText }}>
            {exp.tag}
          </span>
        </div>

        {/* Period + location */}
        <div className="flex flex-wrap gap-4 mb-4 text-xs text-slate-500">
          <span className="flex items-center gap-1"><Calendar size={11} />{exp.period}</span>
          <span className="flex items-center gap-1"><MapPin size={11} />{exp.location}</span>
          <span className="opacity-60">{exp.type}</span>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed mb-5">{exp.description}</p>

        {/* Achievements */}
        <div className="space-y-3 mb-5">
          {exp.achievements.map((a, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="flex-shrink-0">
                <div className="text-xl font-bold font-display leading-none" style={{ color: exp.color }}>
                  {a.metric}
                </div>
                <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                  <TrendingUp size={9} /> {a.label}
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed border-l border-white/5 pl-3">{a.detail}</p>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {exp.stack.map(t => (
            <span key={t} className="text-xs px-2 py-1 rounded-md"
              style={{ background: `${exp.color}08`, border: `1px solid ${exp.color}15`, color: `${exp.color}bb` }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div ref={ref} className="text-center mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}>
          <div className="section-tag mb-4">Experience</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Where I've <span className="gradient-text">Shipped</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            2+ years of impact across GenAI, healthcare data systems, and software engineering — in fast-paced client environments.
          </p>
        </div>

        {/* Timeline */}
        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
