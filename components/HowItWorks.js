'use client'
import { useReveal } from './useReveal'
import { Search, BookOpen, BarChart3, Trophy } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Skill Gap Assessment',
    desc: 'Our consultants map your team\'s skill gaps, business goals, and strategic requirements through a structured discovery process.',
    color: 'text-blue-500',
    bg: 'bg-blue-50',
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Custom Program Design',
    desc: 'We co-design a tailored learning path from our 200+ program library, customised for your tech stack and team structure.',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'Live Delivery & Mentorship',
    desc: 'Cohort-based learning with live expert sessions, capstone projects, and real-time progress tracking on your dashboard.',
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    number: '04',
    icon: Trophy,
    title: 'Measure ROI & Certify',
    desc: 'Track measurable outcomes: productivity gains, project delivery, and certified employees with recognised credentials.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
]

export default function HowItWorks() {
  const headRef = useReveal()
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headRef} className="section-reveal text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-500 bg-brand-50 px-4 py-1.5 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            From skill gaps to measurable ROI
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            A simple, proven 4-step process that transforms how your organisation thinks about talent development.
          </p>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-amber-200" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <StepCard key={i} {...s} delay={i * 120} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StepCard({ number, icon: Icon, title, desc, color, bg, delay }) {
  const ref = useReveal(delay)
  return (
    <div ref={ref} className="section-reveal text-center group">
      <div className={`w-20 h-20 rounded-2xl ${bg} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform shadow-sm`}>
        <Icon size={32} className={color} />
      </div>
      <div className="text-xs font-bold text-gray-300 tracking-widest mb-2">{number}</div>
      <h3 className="font-display font-semibold text-gray-900 text-base mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}
