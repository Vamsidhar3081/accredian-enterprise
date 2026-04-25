'use client'
import { useReveal } from './useReveal'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team\'s velocity improved by 40%. The ROI is undeniable.',
    name: 'Priya Sharma',
    role: 'CHRO, FinTech Unicorn',
    initials: 'PS',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    quote: 'The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers are now capable of leading ML projects independently.',
    name: 'Rajesh Kumar',
    role: 'VP Engineering, MNC',
    initials: 'RK',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    quote: 'We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96% — unprecedented for us.',
    name: 'Anita Verma',
    role: 'L&D Head, Global Bank',
    initials: 'AV',
    gradient: 'from-green-500 to-teal-600',
  },
]

export default function Testimonials() {
  const headRef = useReveal()
  return (
    <section id="testimonials" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headRef} className="section-reveal text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-500 bg-brand-50 px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by 500+ enterprises
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Hear from the L&amp;D leaders and CHROs who transformed their organisations with Accredian Enterprise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} delay={i * 120} />
          ))}
        </div>

        {/* Impact bar */}
        <div className="mt-16 rounded-2xl gradient-brand p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '500+', label: 'Enterprise Clients' },
            { value: '94%', label: 'Avg Completion Rate' },
            { value: '40%', label: 'Avg Productivity Gain' },
            { value: '4.8x', label: 'Average ROI' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-display font-bold text-3xl text-white mb-1">{value}</div>
              <div className="text-white/70 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ quote, name, role, initials, gradient, delay }) {
  const ref = useReveal(delay)
  return (
    <div
      ref={ref}
      className="section-reveal bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-xl transition-all duration-300 card-hover flex flex-col"
    >
      <Quote size={32} className="text-brand-100 mb-4" />
      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-sm font-bold`}>
          {initials}
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">{name}</div>
          <div className="text-gray-400 text-xs">{role}</div>
        </div>
      </div>
    </div>
  )
}
