'use client'
import { useEffect, useRef } from 'react'
import { ArrowRight, Play, Users, TrendingUp, Award } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: 'Enterprise Clients' },
  { icon: TrendingUp, value: '94%', label: 'Completion Rate' },
  { icon: Award, value: '200+', label: 'Programs Available' },
]

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    setTimeout(() => el.classList.add('revealed'), 100)
  }, [])

  return (
    <section className="gradient-hero min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-brand-500/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[100px]" />
        {/* Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div ref={ref} className="section-reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/80 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              India&apos;s #1 Enterprise Learning Platform
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Upskill Your Workforce{' '}
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(90deg, #f59e0b, #fbbf24)' }}>
                at Scale
              </span>
            </h1>

            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg">
              Partner with IITs, IIMs, and global universities to deliver curated programs, live mentorship, and real-time analytics — with measurable ROI.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent-400 hover:bg-accent-500 text-white font-semibold transition-all shadow-xl hover:shadow-amber-400/40 hover:scale-105"
              >
                Book a Free Demo
                <ArrowRight size={18} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass text-white font-semibold hover:bg-white/15 transition-all"
              >
                <Play size={16} fill="white" />
                See How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg glass flex items-center justify-center text-white">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-white font-display font-bold text-xl">{value}</div>
                    <div className="text-white/60 text-xs">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Dashboard */}
          <div className="hidden lg:block relative">
            <div className="relative animate-float">
              <div className="glass rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-display font-semibold text-sm">Learning Dashboard</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-300">Live</span>
                </div>

                {/* Mini chart */}
                <div className="flex items-end gap-2 h-28 mb-4">
                  {[60, 80, 55, 90, 75, 95, 88].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-md" style={{
                      height: `${h}%`,
                      background: i === 5 ? '#f59e0b' : 'rgba(255,255,255,0.2)'
                    }} />
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Active Learners', value: '2,847' },
                    { label: 'Avg Completion', value: '94%' },
                    { label: 'Programs Active', value: '12' },
                    { label: 'ROI Score', value: '4.8x' },
                  ].map(({ label, value }) => (
                    <div key={label} className="glass rounded-lg p-3">
                      <div className="text-white/60 text-xs mb-1">{label}</div>
                      <div className="text-white font-display font-bold text-lg">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl p-3 flex items-center gap-2 shadow-lg">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">↑</div>
                <div>
                  <div className="text-white text-xs font-semibold">Productivity</div>
                  <div className="text-green-400 text-xs font-bold">+40% this quarter</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 20C1200 80 960 0 720 20C480 40 240 0 0 20L0 80Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
