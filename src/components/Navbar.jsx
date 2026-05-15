import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrolled } from '../hooks/useCustomHooks';
import { useTheme } from '../hooks/useTheme';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Expertise', path: '/expertise' },
  {
    label: 'Work',
    children: [
      { label: 'Posters', path: '/posters' },
      { label: 'Logos', path: '/logos' },
      { label: 'Branding', path: '/branding' },
      { label: 'Flyers', path: '/flyers' },
      { label: 'AI Works', path: '/ai-works' },
      { label: 'Mockups', path: '/mockups' },
      { label: 'Social Media', path: '/social-media' },
      { label: 'Video Editing', path: '/videos' },
    ],
  },
  { label: 'Contact', path: '/contact' },
];

const MobileMenu = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
        animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
        exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-40 flex flex-col justify-center items-center"
        style={{ background: 'var(--overlay-bg)', backdropFilter: 'blur(30px)' }}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <div key={link.label}>
              {link.children ? (
                <div className="text-center">
                  <span className="text-soft-gray text-sm uppercase tracking-widest block mb-4">
                    {link.label}
                  </span>
                  <div className="flex flex-col gap-3">
                    {link.children.map((child) => (
                      <motion.div
                        key={child.path}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * i, duration: 0.5 }}
                      >
                        <Link
                          to={child.path}
                          onClick={onClose}
                          className="text-xl font-display text-off-white hover:text-electric-blue transition-colors duration-300 block"
                        >
                          {child.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.6 }}
                >
                  <Link
                    to={link.path}
                    onClick={onClose}
                    className="font-display text-5xl text-off-white hover:text-electric-blue transition-colors duration-300 block"
                    style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-12 text-soft-gray text-sm"
        >
          © 2024 Sulaiman Kaif
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const DropdownMenu = ({ items }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    transition={{ duration: 0.2 }}
    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 glass rounded-2xl p-4 min-w-[200px]"
    style={{ border: '1px solid var(--glass-border)' }}
  >
    <div className="grid grid-cols-2 gap-1">
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="px-3 py-2 text-sm text-soft-gray hover:text-off-white hover:bg-theme-invert/5 rounded-lg transition-all duration-200 whitespace-nowrap"
        >
          {item.label}
        </Link>
      ))}
    </div>
  </motion.div>
);

export default function Navbar() {
  const scrolled = useScrolled(20);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isHomePage = location.pathname === '/';
  const showTransparent = isHomePage && !scrolled;

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: showTransparent
            ? 'transparent'
            : 'var(--nav-bg)',
          backdropFilter: showTransparent ? 'none' : 'blur(20px)',
          borderBottom: showTransparent ? 'none' : '1px solid var(--glass-border)',
          boxShadow: showTransparent ? 'none' : '0 4px 30px rgba(0, 0, 0, 0.03)',
        }}
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-4 md:py-5">
          {/* Logo */}
          <Link to="/" className={`font-display font-semibold text-lg tracking-tight z-50 transition-colors duration-300 ${showTransparent ? 'text-white' : 'text-off-white'}`}>
            SK<span className="text-electric-blue">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.children ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="relative"
                  >
                    <button className={`text-sm transition-colors duration-200 flex items-center gap-1 ${showTransparent ? 'text-white/80 hover:text-white' : 'text-soft-gray hover:text-off-white'}`}>
                      {link.label}
                      <span className="text-xs opacity-60">▾</span>
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <DropdownMenu items={link.children} />
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-sm transition-colors duration-200 ${showTransparent ? 'text-white/80 hover:text-white' : 'text-soft-gray hover:text-off-white'}`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Hamburger + Theme Toggle */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={toggleTheme}
              className={`transition-colors duration-200 ${showTransparent ? 'text-white/80 hover:text-white' : 'text-soft-gray hover:text-off-white'}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>
            <Link
              to="/contact"
              className="hidden md:flex items-center gap-2 text-sm bg-electric-blue text-white px-6 py-2.5 rounded-full hover:bg-blue-600 transition-all duration-300 font-semibold shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:scale-105"
            >
              Get in touch
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex flex-col gap-1.5 z-50 p-1 md:hidden transition-colors duration-300 ${showTransparent ? 'text-white' : 'text-off-white'}`}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
                className={`block w-6 h-px transition-all ${showTransparent ? 'bg-white' : 'bg-off-white'}`}
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className={`block w-4 h-px transition-all ${showTransparent ? 'bg-white' : 'bg-off-white'}`}
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
                className={`block w-6 h-px transition-all ${showTransparent ? 'bg-white' : 'bg-off-white'}`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
