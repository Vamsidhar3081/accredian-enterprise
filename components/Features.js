'use client'
import { useReveal } from './useReveal'
import {
  BarChart3, Users, BookOpen, Star, Globe2,
  Zap, ShieldCheck, Settings2
} from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    color: 'bg-blue-50 text-blue-600',
    title: 'World-Class Curriculum',
    desc: 'Programs co-created with IITs, IIMs, and global universities — rigorously structured for real-world applicability.',
  },
  {
    icon: BarChart3,
    color: 'bg-purple-50 text-purple-600',
    title: 'Real-Time Analytics',
    desc: 'Track completion rates, engagement metrics, and ROI through a live command-center dashboard.',
  },
  {
    icon: Users,
    color: 'bg-green-50 text-green-600',
    title: 'Live Expert Mentorship',
    desc: '1:1 sessions with industry practitioners. 500+ mentors across AI/ML, Data Science, Product, and Leadership.',
  },
  {
    icon: Globe2,
    color: 'bg-amber-50 text-amber-600',
    title: 'Cohort-Based Learning',
    desc: 'Synchronized learning paths that foster collaboration, accountability, and peer learning at scale.',
  },
  {
    icon: Settings2,
    color: 'bg-rose-50 text-rose-600',
    title: 'Custom Programs',
    desc: 'Tailor curriculum entirely to your organisation\'s specific tech stack, skill gaps, and strategic goals.',
  },
  {
    icon: Star,
    color: 'bg-indigo-50 text-indigo-600',
    title: 'Recognised Certifications',
    desc: 'Earn credentials from prestigious institutions that boost employee retention and career trajectory.',
  },
  {
    icon: Zap,
    color: 'bg-cyan-50 text-cyan-600',
    title: 'AI-Adaptive Paths',
    desc: 'Intelligent learning paths that adjust to each learner\'s pace, baseline, and performance data.',
  },
  {
    icon: ShieldCheck,
    color: 'bg-teal-50 text-teal-600',
    title: 'Global Delivery',
    desc: 'Seamlessly upskill distributed teams across different time zones with 24/7 platform access.',
  },
]

export default function Features() {
  const headRef = useReveal()

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div ref={headRef} className="section-reveal text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-500 bg-brand-50 px-4 py-1.5 rounded-full mb-4">
            Platform Features
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything L&amp;D teams need — in one platform
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            From curriculum design to analytics, Accredian Enterprise is the complete operating system for ambitious learning organisations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon: Icon, color, title, desc, delay }) {
  const ref = useReveal(delay)
  return (
    <div
      ref={ref}
      className="section-reveal group p-6 rounded-2xl border border-gray-100 bg-white hover:border-brand-200 hover:shadow-xl transition-all duration-300 card-hover"
    >
      <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon size={22} />
      </div>
      <h3 className="font-display font-semibold text-gray-900 text-base mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}
