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

      {/* Cinematic dark gradient overlays - using literal hex for guaranteed darkness regardless of theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/80 via-[#000000]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-transparent to-[#000000]/40" />
      
      {/* Smooth white gradient overlay for content readability - subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />

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
          <span className="text-xs uppercase tracking-[0.3em] text-[#ffffff] font-bold drop-shadow-md">
            Creative Designer
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="font-display font-semibold text-[#ffffff] leading-none drop-shadow-2xl"
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
            className="font-display font-semibold leading-none drop-shadow-2xl"
            style={{
              fontSize: 'clamp(3rem, 9vw, 8rem)',
              letterSpacing: '-0.03em',
              background: 'linear-gradient(90deg, #ffffff, #cccccc)',
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
          className="mt-6 text-[#ffffff]/95 max-w-sm leading-relaxed drop-shadow-lg font-semibold"
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
            className="inline-flex items-center gap-2 bg-electric-blue text-[#ffffff] px-7 py-3.5 rounded-full text-sm font-bold hover:bg-blue-400 transition-all duration-300 hover:shadow-lg"
            style={{ boxShadow: '0 0 30px rgba(59,130,246,0.3)' }}
          >
            View My Work
            <span className="text-base">→</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-electric-blue text-[#ffffff] px-7 py-3.5 rounded-full text-sm font-bold hover:bg-blue-400 transition-all duration-300 hover:shadow-lg shadow-[0_10px_30px_rgba(37,99,235,0.3)]"
          >
            Get in Touch
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
        <span className="text-xs uppercase tracking-[0.2em] text-[#ffffff] font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[#ffffff] to-transparent"
        />
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-14 right-8 md:right-14 flex flex-col md:flex-row gap-6 md:gap-12"
      >
        {[
          { num: '10+', label: 'Collaborations' },
          { num: '3+', label: 'Years Exp.' },
          { num: '50+', label: 'Delivered' },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 + (i * 0.1), duration: 0.5 }}
            className="text-right flex flex-col items-end"
          >
            <div className="font-display text-2xl md:text-3xl font-bold text-[#ffffff] drop-shadow-md">
              {s.num}
            </div>
            <div className="text-[10px] md:text-xs text-[#ffffff] uppercase tracking-widest font-bold">
              {s.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
