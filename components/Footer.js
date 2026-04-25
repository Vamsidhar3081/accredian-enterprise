import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react'

const footerLinks = {
  'Platform': ['Features', 'Programs', 'Analytics Dashboard', 'Mentorship', 'Certifications'],
  'Company': ['About Us', 'Careers', 'Blog', 'Press', 'Contact'],
  'Resources': ['Case Studies', 'Whitepapers', 'ROI Calculator', 'API Docs', 'Help Center'],
  'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'],
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center text-white font-bold text-sm">A</div>
              <span className="font-display font-bold text-lg text-white">
                Accredian <span className="text-brand-500">Enterprise</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              India&apos;s most trusted enterprise learning platform. Partner with IITs, IIMs, and global universities to upskill your teams at scale.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><Mail size={14} /><span>enterprise@accredian.com</span></div>
              <div className="flex items-center gap-2"><Phone size={14} /><span>+91 99-1800-1800</span></div>
              <div className="flex items-center gap-2"><MapPin size={14} /><span>Gurugram, Haryana, India</span></div>
            </div>
            <div className="flex gap-3 mt-6">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-500 flex items-center justify-center transition-colors">
                  <Icon size={16} className="text-gray-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold text-sm mb-4 font-display">{heading}</h4>
              <ul className="space-y-2">
                {links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-sm hover:text-white transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Accredian. All rights reserved.</p>
          <p>Built with Next.js · Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  )
}
