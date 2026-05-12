import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)' }}
      />
      <div className="absolute inset-0 border-t border-b border-theme-invert/[0.04] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-electric-blue mb-5"
        >
          Ready to Create?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          className="font-display font-semibold text-off-white"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
        >
          Let's build something{' '}
          <span style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            unforgettable
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 text-soft-gray max-w-lg mx-auto"
        >
          Have a project in mind? Let's talk about how premium design can elevate your brand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-wrap gap-4 justify-center mt-10"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-electric-blue text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-blue-400 transition-all duration-300"
            style={{ boxShadow: '0 0 40px rgba(59,130,246,0.25)' }}
          >
            Start a Project
            <span>→</span>
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 border border-theme-invert/15 text-off-white px-8 py-4 rounded-full text-sm hover:bg-theme-invert/5 transition-all duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
