import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

export default function SectionHeader({ eyebrow, title, subtitle, centered = false }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`mb-14 ${centered ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className="text-xs uppercase tracking-[0.3em] text-electric-blue mb-4"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className="font-display font-semibold text-off-white"
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`mt-4 text-soft-gray leading-relaxed ${centered ? 'mx-auto' : ''} max-w-xl`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
