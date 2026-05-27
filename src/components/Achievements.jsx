import { useInView } from 'react-intersection-observer'
import { Award, Star, TrendingUp, CheckCircle2, GraduationCap, BookOpen } from 'lucide-react'

const achievements = [
  {
    id: 'spot-award',
    icon: <Award size={28} />,
    title: 'Spot Award',
    subtitle: 'GlobalLogic · 2024',
    type: 'award',
    color: '#f59e0b',
    borderColor: 'rgba(245,158,11,0.2)',
    bgColor: 'rgba(245,158,11,0.06)',
    description:
      'Recognised for exceptional contributions to the HHAeXchange client project — including successful API development and deployment, resolving 80+ production issues, and consistently delivering high-impact engineering solutions in a fast-paced, client-focused environment.',
    stats: [
      { value: '80+', label: 'Production Issues Resolved' },
      { value: '15+', label: 'APIs Shipped' },
      { value: '99.9%', label: 'System Uptime' },
    ],
    tags: ['API Engineering', 'Client Impact', 'Production Excellence', 'Fast Delivery'],
  },
]

const certifications = [
  { name: 'AI Accelerator Program', issuer: 'Be10x', year: 'Ongoing', icon: <Brain />, color: '#00d4ff' },
  { name: 'Machine Learning', issuer: 'Internshala', year: '2021', icon: <TrendingUp size={14} />, color: '#7c3aed' },
  { name: 'Programming for Everybody', issuer: 'Coursera', year: '2023', icon: <BookOpen size={14} />, color: '#10b981' },
  { name: 'HTML, CSS & JavaScript', issuer: 'Coursera', year: '2021', icon: <CheckCircle2 size={14} />, color: '#3b82f6' },
  { name: 'Introduction to Cloud', issuer: 'IBM', year: '2021', icon: <Cloud />, color: '#ec4899' },
]

function Brain() { return <Star size={14} /> }
function Cloud() { return <Star size={14} /> }

const education = {
  degree: 'B.Tech Computer Science & Engineering',
  institution: 'Manav Rachna International Institute of Research and Studies',
  period: 'Aug 2019 – Jun 2023',
  cgpa: '7.73',
}

export default function Achievements() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const { ref: contentRef, inView: contentIn } = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="achievements" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref} className="text-center mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}>
          <div className="section-tag mb-4">Recognition</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Achievements & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Recognition earned through consistent delivery, engineering excellence, and client impact.
          </p>
        </div>

        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main award card */}
          <div className="lg:col-span-2"
            style={{
              opacity: contentIn ? 1 : 0,
              transform: contentIn ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}>
            {achievements.map(award => (
              <div key={award.id} className="relative rounded-2xl overflow-hidden h-full"
                style={{
                  background: 'rgba(10,14,26,0.9)',
                  border: `1px solid ${award.borderColor}`,
                }}>
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, transparent, ${award.color}, transparent)` }} />

                {/* Glow blob */}
                <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${award.color}08, transparent 70%)` }} />

                <div className="relative p-8">
                  {/* Award header */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: award.bgColor, border: `1px solid ${award.borderColor}`, color: award.color }}>
                      {award.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-display font-bold text-2xl text-white">{award.title}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm font-medium" style={{ color: award.color }}>{award.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-7">{award.description}</p>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                    {award.stats.map(stat => (
                      <div key={stat.label} className="text-center">
                        <div className="font-display font-bold text-xl mb-0.5" style={{ color: award.color }}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {award.tags.map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full"
                        style={{ background: award.bgColor, border: `1px solid ${award.borderColor}`, color: award.color }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column — Certs + Education */}
          <div className="space-y-6"
            style={{
              opacity: contentIn ? 1 : 0,
              transform: contentIn ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            }}>
            {/* Certifications */}
            <div className="rounded-2xl p-6"
              style={{ background: 'rgba(10,14,26,0.8)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 className="font-semibold text-sm text-white mb-4 flex items-center gap-2">
                <BookOpen size={14} className="text-cyan-400" /> Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map(cert => (
                  <div key={cert.name} className="flex items-start gap-3 p-3 rounded-xl transition-all hover:bg-white/[0.02]"
                    style={{ border: '1px solid rgba(255,255,255,0.03)' }}>
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${cert.color}10`, color: cert.color, border: `1px solid ${cert.color}20` }}>
                      {cert.icon}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-300 leading-tight">{cert.name}</p>
                      <p className="text-xs text-slate-600 mt-0.5">{cert.issuer} · {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="rounded-2xl p-6"
              style={{ background: 'rgba(10,14,26,0.8)', border: '1px solid rgba(124,58,237,0.12)' }}>
              <h3 className="font-semibold text-sm text-white mb-4 flex items-center gap-2">
                <GraduationCap size={14} className="text-violet-400" /> Education
              </h3>
              <div className="p-3 rounded-xl" style={{ background: 'rgba(124,58,237,0.05)' }}>
                <p className="text-sm font-semibold text-slate-200 mb-1">{education.degree}</p>
                <p className="text-xs text-slate-500 mb-2 leading-relaxed">{education.institution}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">{education.period}</span>
                  <span className="text-xs font-bold px-2 py-1 rounded-lg"
                    style={{ background: 'rgba(124,58,237,0.15)', color: '#a855f7' }}>
                    CGPA: {education.cgpa}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
