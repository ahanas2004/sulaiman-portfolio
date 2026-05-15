import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function PageHero({ eyebrow, title, subtitle, bgImage }) {
  return (
    <section className="relative min-h-[55vh] flex items-end overflow-hidden">
      {/* Background */}
      {bgImage ? (
        <>
          <img
            src={bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.3) saturate(0.6)' }}
          />
          <div className="absolute inset-0 gradient-overlay" />
        </>
      ) : (
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.06) 0%, transparent 60%)' }}
        />
      )}

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-40 w-full">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-electric-blue mb-4"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          className={`font-display font-semibold ${bgImage ? 'text-white' : 'text-off-white'}`}
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 text-soft-gray max-w-xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
