import { useInView } from 'react-intersection-observer'
import { Download, FileText, Eye, Briefcase } from 'lucide-react'

export default function ResumeSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="resume" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'rgba(10,14,26,0.9)',
            border: '1px solid rgba(0,212,255,0.1)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at top left, rgba(0,212,255,0.05), transparent 60%), radial-gradient(ellipse at bottom right, rgba(124,58,237,0.05), transparent 60%)' }} />

          {/* Top glow bar */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.5), rgba(124,58,237,0.5), transparent)' }} />

          <div className="relative p-10 md:p-14">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Icon */}
              <div className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)' }}>
                <FileText size={36} className="text-cyan-400" />
              </div>

              {/* Text */}
              <div className="text-center md:text-left flex-1">
                <div className="section-tag mb-4 inline-flex">Resume</div>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-3">
                  Download My <span className="gradient-text">Resume</span>
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xl mb-2">
                  AI Engineer & Software Developer with 2+ years of production experience in GenAI systems,
                  RAG pipelines, FastAPI software engineering, and workflow automation.
                </p>
                <p className="text-xs text-slate-600 mb-8">
                  Last updated: May 2026 · PDF format · ATS-optimised
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
                  {[
                    { icon: <Briefcase size={12} />, text: '2+ Years Experience' },
                    { icon: <Eye size={12} />, text: 'GenAI & Software Focus' },
                    { icon: <FileText size={12} />, text: 'ATS-Optimised' },
                  ].map(({ icon, text }) => (
                    <div key={text} className="flex items-center gap-1.5 text-xs text-slate-400 px-3 py-1.5 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                      <span className="text-cyan-400">{icon}</span>
                      {text}
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <a
                    href="/AnubhavSharma_Resume.pdf"
                    download="AnubhavSharma_Resume.pdf"
                    className="btn-primary"
                    id="resume-download-btn"
                  >
                    <Download size={16} />
                    Download Resume
                  </a>
                  <a
                    href="mailto:shanubhav2001@gmail.com"
                    className="btn-secondary"
                  >
                    <Briefcase size={15} />
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
