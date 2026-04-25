'use client'
import { useState } from 'react'
import { useReveal } from './useReveal'
import { CheckCircle, Loader } from 'lucide-react'

export default function ContactForm() {
  const headRef = useReveal()
  const [form, setForm] = useState({
    name: '', email: '', company: '', size: '', message: ''
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
      setForm({ name: '', email: '', company: '', size: '', message: '' })
    } catch {
      setStatus('error')
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-24 gradient-hero relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div ref={headRef} className="section-reveal text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 bg-white/10 px-4 py-1.5 rounded-full mb-4">
            Get Started
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to transform your workforce?
          </h2>
          <p className="text-white/70 max-w-lg mx-auto">
            Book a free consultation. Our enterprise team will reach out within 24 hours.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
          {status === 'success' ? (
            <div className="text-center py-10">
              <CheckCircle size={56} className="text-green-400 mx-auto mb-4" />
              <h3 className="font-display font-bold text-2xl text-white mb-2">We&apos;ll be in touch!</h3>
              <p className="text-white/70">Our enterprise team will reach out within 24 hours.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 px-6 py-2.5 rounded-full bg-white/20 text-white hover:bg-white/30 transition-all text-sm font-semibold"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
              <FormField label="Full Name" name="name" value={form.name} onChange={handleChange} required placeholder="Rajesh Kumar" />
              <FormField label="Work Email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="rajesh@company.com" />
              <FormField label="Company Name" name="company" value={form.company} onChange={handleChange} required placeholder="Acme Corp" />
              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Team Size</label>
                <select
                  name="size"
                  value={form.size}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                >
                  <option value="" disabled className="text-gray-900">Select team size</option>
                  <option value="10-50" className="text-gray-900">10–50</option>
                  <option value="50-200" className="text-gray-900">50–200</option>
                  <option value="200-1000" className="text-gray-900">200–1,000</option>
                  <option value="1000+" className="text-gray-900">1,000+</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-white/80 text-sm font-medium mb-2">Message (optional)</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us about your learning goals..."
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all resize-none"
                />
              </div>

              {error && (
                <p className="md:col-span-2 text-red-400 text-sm text-center">{error}</p>
              )}

              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-xl bg-accent-400 hover:bg-accent-500 text-white font-semibold text-base transition-all shadow-xl hover:shadow-amber-400/40 disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <><Loader size={18} className="animate-spin" /> Submitting...</>
                  ) : 'Book My Free Demo'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function FormField({ label, name, type = 'text', value, onChange, required, placeholder }) {
  return (
    <div>
      <label className="block text-white/80 text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
      />
    </div>
  )
}
