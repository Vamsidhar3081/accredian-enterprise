'use client'
import { useReveal } from './useReveal'

const partners = [
  'IIT Bombay', 'IIT Delhi', 'IIM Lucknow', 'IIM Bangalore',
  'XLRI', 'SP Jain', 'IIT Roorkee', 'IIM Visakhapatnam',
]

export default function TrustedBy() {
  const ref = useReveal()

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100" id="partners">
      <div className="max-w-7xl mx-auto px-6">
        <p ref={ref} className="section-reveal text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-10">
          Programs co-designed &amp; certified by
        </p>

        <div className="relative overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...partners, ...partners].map((name, i) => (
              <div
                key={i}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white border border-gray-200 shadow-sm min-w-[160px] text-gray-700 font-display font-semibold text-sm hover:border-brand-500 hover:text-brand-600 transition-all card-hover"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
