import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden flex items-center">
      {/* Cinematic video background */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <video
          ref={videoRef}
          className="video-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://picsum.photos/seed/herobg/1920/1080"
        >
          {/* Cinematic abstract background video */}
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Cinematic dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

      {/* Blue accent glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-px bg-electric-blue" />
          <span className="text-xs uppercase tracking-[0.3em] text-electric-blue">
            Creative Designer
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="font-display font-semibold text-white leading-none"
            style={{ fontSize: 'clamp(3rem, 9vw, 8rem)', letterSpacing: '-0.03em' }}
          >
            Sulaiman
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className="font-display font-semibold leading-none"
            style={{
              fontSize: 'clamp(3rem, 9vw, 8rem)',
              letterSpacing: '-0.03em',
              background: 'linear-gradient(90deg, #f0ede8, #888)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Kaif
          </motion.h1>
        </div>

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-6 text-soft-gray max-w-sm leading-relaxed"
          style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
        >
          Crafting premium visual identities, AI-powered creatives & cinematic motion experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <Link
            to="/branding"
            className="inline-flex items-center gap-2 bg-electric-blue text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-blue-400 transition-all duration-300 hover:shadow-lg"
            style={{ boxShadow: '0 0 30px rgba(59,130,246,0.3)' }}
          >
            View My Work
            <span className="text-base">→</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-white/5 transition-all duration-300"
          >
            Let's Collaborate
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-soft-gray">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-soft-gray to-transparent"
        />
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-14 right-8 md:right-14 flex gap-8"
      >
        {[
          { num: '55+', label: 'Projects' },
          { num: '3+', label: 'Years' },
          { num: '100%', label: 'Premium' },
        ].map((s) => (
          <div key={s.label} className="text-right">
            <div className="font-display text-2xl font-semibold text-off-white">{s.num}</div>
            <div className="text-xs text-soft-gray uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
