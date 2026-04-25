'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Programs', href: '#programs' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/40 backdrop-blur-md shadow-md' : 'bg-white/10 bg-transparent backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center text-white font-display font-bold text-sm">
            A
          </div>
          <span
            className={`font-display font-bold text-lg tracking-tight ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            Accredian <span className="text-brand-500">Enterprise</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm font-medium px-5 py-2.5 rounded-full border border-white/30 text-white hover:bg-white hover:text-brand-600 transition-all"
            style={scrolled ? { borderColor: '#2f4ac8', color: '#2f4ac8' } : {}}
          >
            Book Demo
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold px-5 py-2.5 rounded-full bg-brand-500 text-white hover:bg-brand-600 transition-all shadow-lg hover:shadow-brand-500/40"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium py-1 border-b border-gray-100 hover:text-brand-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center font-semibold px-5 py-3 rounded-full bg-brand-500 text-white hover:bg-brand-600 transition-all"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  )
}
