'use client'
import { useState } from 'react'
import { useReveal } from './useReveal'
import { Clock, Users, Award, ArrowRight } from 'lucide-react'

const categories = ['All', 'Data Science', 'AI/ML', 'Product', 'Leadership', 'Cloud']

const programs = [
  {
    category: 'Data Science',
    title: 'PG Certificate in Data Science & AI',
    university: 'IIT Bombay',
    duration: '6 months',
    learners: '2,400+',
    level: 'Advanced',
    badge: 'Bestseller',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  {
    category: 'AI/ML',
    title: 'Executive Program in ML & Deep Learning',
    university: 'IIM Lucknow',
    duration: '8 months',
    learners: '1,800+',
    level: 'Expert',
    badge: 'New',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    category: 'Product',
    title: 'Professional Certificate in Product Management',
    university: 'SP Jain',
    duration: '5 months',
    learners: '3,200+',
    level: 'Intermediate',
    badge: 'Popular',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    category: 'Leadership',
    title: 'Senior Leadership Development Program',
    university: 'IIM Bangalore',
    duration: '12 months',
    learners: '900+',
    level: 'Executive',
    badge: '',
    badgeColor: '',
  },
  {
    category: 'Cloud',
    title: 'Cloud & DevOps Engineering Bootcamp',
    university: 'IIT Delhi',
    duration: '4 months',
    learners: '1,500+',
    level: 'Intermediate',
    badge: 'Trending',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
  {
    category: 'Data Science',
    title: 'Business Analytics & Insights Program',
    university: 'XLRI',
    duration: '5 months',
    learners: '2,100+',
    level: 'Intermediate',
    badge: '',
    badgeColor: '',
  },
]

export default function Programs() {
  const [active, setActive] = useState('All')
  const headRef = useReveal()

  const filtered = active === 'All' ? programs : programs.filter(p => p.category === active)

  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headRef} className="section-reveal text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-500 bg-brand-50 px-4 py-1.5 rounded-full mb-4">
            Program Library
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            200+ programs, top-tier credentials
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Browse our curated library of programs across in-demand domains, all certified by India&apos;s most prestigious institutions.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${active === c
                  ? 'bg-brand-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-300 hover:text-brand-600'
                }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <ProgramCard key={i} {...p} />
          ))}
        </div>

        <div className="text-center mt-12">
          {active !== 'All' && (
            <button
              onClick={() => setActive('All')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-brand-500 text-brand-600 font-semibold hover:bg-brand-500 hover:text-white transition-all"
            >
              View All Programs <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

function ProgramCard({ title, university, duration, learners, level, badge, badgeColor }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:border-brand-200 transition-all duration-300 card-hover flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg gradient-brand flex items-center justify-center text-white font-bold text-sm">
          {university.slice(0, 2)}
        </div>
        {badge && (
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeColor}`}>{badge}</span>
        )}
      </div>

      <h3 className="font-display font-semibold text-gray-900 text-base mb-1">{title}</h3>
      <p className="text-brand-500 text-sm font-medium mb-4">{university}</p>

      <div className="flex items-center gap-4 text-gray-500 text-sm mb-6 mt-auto">
        <span className="flex items-center gap-1.5"><Clock size={14} />{duration}</span>
        <span className="flex items-center gap-1.5"><Users size={14} />{learners}</span>
        <span className="flex items-center gap-1.5"><Award size={14} />{level}</span>
      </div>

      <button className="w-full py-2.5 rounded-xl border-2 border-brand-100 text-brand-600 text-sm font-semibold hover:bg-brand-500 hover:text-white hover:border-brand-500 transition-all">
        Learn More
      </button>
    </div>
  )
}
