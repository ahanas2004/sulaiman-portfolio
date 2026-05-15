import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../animations/variants';

const footerLinks = {
  Work: [
    { label: 'Posters', path: '/posters' },
    { label: 'Logos', path: '/logos' },
    { label: 'Branding', path: '/branding' },
    { label: 'Flyers', path: '/flyers' },
  ],
  Creative: [
    { label: 'AI Works', path: '/ai-works' },
    { label: 'Mockups', path: '/mockups' },
    { label: 'Social Media', path: '/social-media' },
    { label: 'Video Editing', path: '/videos' },
  ],
  Connect: [
    { label: 'About', path: '/about' },
    { label: 'Expertise', path: '/expertise' },
    { label: 'Contact', path: '/contact' },
  ],
};

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/sulaimankaif.png/' },
  { label: 'Behance', href: 'https://www.behance.net/sulaimankaif' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sulaimankaif' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-theme-invert/[0.06] bg-black pt-20 pb-10 overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(59,130,246,0.04) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-3xl font-semibold text-off-white">
              SK<span className="text-electric-blue">.</span>
            </Link>
            <p className="mt-4 text-soft-gray text-sm leading-relaxed max-w-xs">
              Creative designer specializing in branding, visual identity, AI-assisted design, and motion content.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-mid-gray hover:text-off-white transition-colors duration-200 uppercase tracking-wider"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-xs uppercase tracking-widest text-soft-gray mb-5">{group}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-mid-gray hover:text-off-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="hr-glass mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-mid-gray">
          <span>© 2024 Sulaiman Kaif. All rights reserved.</span>
          <span>Crafted with precision & creativity by Ahamed Anas</span>
        </div>
      </div>
    </footer>
  );
}
