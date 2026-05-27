import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Mail, Send, User, MessageSquare, Loader2, CheckCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

const contacts = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'shanubhav2001@gmail.com',
    href: 'mailto:shanubhav2001@gmail.com',
    color: '#00d4ff',
    bg: 'rgba(0,212,255,0.08)',
    border: 'rgba(0,212,255,0.15)',
  },
  {
    icon: <LinkedinIcon size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/anubhav-sharma-967292202',
    href: 'https://linkedin.com/in/anubhav-sharma-967292202',
    color: '#0077b5',
    bg: 'rgba(0,119,181,0.08)',
    border: 'rgba(0,119,181,0.15)',
  },
  {
    icon: <GithubIcon size={20} />,
    label: 'GitHub',
    value: 'github.com/Anubhav2808GIT',
    href: 'https://github.com/Anubhav2808GIT',
    color: '#a855f7',
    bg: 'rgba(168,85,247,0.08)',
    border: 'rgba(168,85,247,0.15)',
  },
]

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success

  const handleChange = e => setFormState(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    
    if (!accessKey) {
      // Graceful simulated success for development preview
      setTimeout(() => {
        setStatus('success')
        setFormState({ name: '', email: '', message: '' })
      }, 1000)
      return
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: formState.name,
          email: formState.email,
          message: formState.message,
          subject: `New Portfolio Message from ${formState.name}`,
        }),
      })

      const data = await response.json()
      if (data.success) {
        setStatus('success')
        setFormState({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error('Contact submission error:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={ref} className="text-center mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}>
          <div className="section-tag mb-4">Contact</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Let's Build <span className="gradient-text">Intelligent Systems</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Open to GenAI engineering roles, software engineering positions, and AI automation opportunities.
            Let's connect and build something impactful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact cards */}
          <div className="lg:col-span-2 space-y-4"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-24px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}>
            {contacts.map((c, i) => (
              <a key={c.label} href={c.href} target={c.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl group transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  background: 'rgba(10,14,26,0.8)',
                  border: `1px solid rgba(255,255,255,0.05)`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = c.border
                  e.currentTarget.style.boxShadow = `0 4px 24px ${c.color}10`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
                aria-label={`Contact via ${c.label}`}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.color }}>
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 mb-0.5">{c.label}</p>
                  <p className="text-sm font-medium text-slate-200 truncate group-hover:text-white transition-colors">
                    {c.value}
                  </p>
                </div>
              </a>
            ))}

            {/* CTA note */}
            <div className="mt-4 p-5 rounded-2xl text-center"
              style={{ background: 'rgba(0,212,255,0.04)', border: '1px solid rgba(0,212,255,0.08)' }}>
              <p className="text-xs text-slate-500 leading-relaxed">
                📍 Based in India · Open to remote, hybrid & on-site opportunities
              </p>
              <p className="text-xs text-cyan-400 mt-2 font-medium">Available for immediate start</p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(24px)',
              transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
            }}>
            <div className="rounded-2xl p-7"
              style={{ background: 'rgba(10,14,26,0.9)', border: '1px solid rgba(255,255,255,0.05)' }}>
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">
                    Thanks for reaching out! Your message was delivered successfully. I'll get back to you as soon as possible.
                  </p>
                  {!import.meta.env.VITE_WEB3FORMS_ACCESS_KEY && (
                    <div className="mt-6 p-4 rounded-xl text-left bg-[#050810] border border-white/5 max-w-xs mx-auto">
                      <p className="text-[9px] text-amber-500 font-mono font-bold uppercase mb-1 tracking-wider">🛠️ Developer Note</p>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        To receive actual emails to your inbox, create a free key at <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">web3forms.com</a> and add it as <code className="text-slate-300">VITE_WEB3FORMS_ACCESS_KEY</code> in a <code className="text-slate-300">.env</code> file.
                      </p>
                    </div>
                  )}
                  <button onClick={() => setStatus('idle')} className="mt-6 text-xs text-cyan-400 hover:underline">
                    Send another message
                  </button>
                </div>
              ) : status === 'error' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)' }}>
                    <span className="text-red-400 text-2xl font-bold">!</span>
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">Submission Failed</h3>
                  <p className="text-slate-400 text-sm max-w-xs mx-auto leading-relaxed">
                    Something went wrong. Please check your internet connection or try again.
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn-secondary mt-6 text-xs px-5 py-2.5">
                    Try Again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-medium text-slate-400 mb-2">
                      <User size={11} className="inline mr-1.5" />Full Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl text-sm text-slate-200 placeholder-slate-600 transition-all duration-200 outline-none"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                      onFocus={e => { e.target.style.borderColor = 'rgba(0,212,255,0.35)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.05)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-medium text-slate-400 mb-2">
                      <Mail size={11} className="inline mr-1.5" />Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl text-sm text-slate-200 placeholder-slate-600 transition-all duration-200 outline-none"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                      onFocus={e => { e.target.style.borderColor = 'rgba(0,212,255,0.35)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.05)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-slate-400 mb-2">
                      <MessageSquare size={11} className="inline mr-1.5" />Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about the role or project..."
                      className="w-full px-4 py-3 rounded-xl text-sm text-slate-200 placeholder-slate-600 transition-all duration-200 outline-none resize-none"
                      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                      onFocus={e => { e.target.style.borderColor = 'rgba(0,212,255,0.35)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.05)' }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    id="contact-submit-btn"
                    className="btn-primary w-full justify-center py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <><Loader2 size={16} className="animate-spin" /> Sending...</>
                    ) : (
                      <><Send size={15} /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
