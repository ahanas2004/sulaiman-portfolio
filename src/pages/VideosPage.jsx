import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactCTA from '../components/ContactCTA';
import { getProjectsByCategory } from '../data/projects';

const videoProjects = getProjectsByCategory('videos');

/* ─── Stat Pill ──────────────────────────────────────────────────── */
const StatPill = ({ value, label }) => (
  <div 
    className="flex flex-col items-center justify-center p-3 sm:p-4 glass rounded-xl text-center"
    style={{ border: '1px solid var(--glass-border)' }}
  >
    <span className="text-xl sm:text-3xl font-display font-bold" style={{ color: 'var(--electric-blue)' }}>{value}</span>
    <span className="text-[9px] sm:text-xs mt-1 uppercase tracking-wider" style={{ color: 'var(--soft-gray)' }}>{label}</span>
  </div>
);

/* ─── Category Badge ─────────────────────────────────────────────── */
const CategoryBadge = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0"
    style={{
      background: active
        ? 'linear-gradient(135deg, var(--electric-blue), #8b5cf6)'
        : 'var(--glass-bg)',
      color: active ? '#fff' : 'var(--soft-gray)',
      border: active ? 'none' : '1px solid var(--glass-border)',
      backdropFilter: 'blur(12px)',
    }}
  >
    <span>{icon}</span>
    {label}
  </button>
);

/* ─── Video Card (Responsive Layout) ────────────────────────────── */
const VideoCard = ({ project, index, onPlay }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(index * 0.05, 0.3), duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      onClick={() => onPlay(project)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative flex flex-col sm:flex-row gap-4 sm:gap-5 cursor-pointer rounded-2xl p-4 transition-all duration-300 bg-charcoal/30 sm:bg-transparent"
      style={{
        border: '1px solid var(--glass-border)',
        borderColor: hovered ? 'var(--electric-blue)' : 'var(--glass-border)',
        boxShadow: hovered ? '0 10px 30px rgba(37,99,235,0.06)' : 'none',
      }}
    >
      {/* Number (hidden on mobile) */}
      <div
        className="hidden sm:flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full self-center font-display font-bold text-sm"
        style={{
          background: hovered
            ? 'linear-gradient(135deg, var(--electric-blue), #8b5cf6)'
            : 'var(--charcoal)',
          color: hovered ? '#fff' : 'var(--soft-gray)',
          transition: 'all 0.3s',
          minWidth: 40,
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Thumbnail */}
      <div
        className="relative w-full sm:w-[200px] flex-shrink-0 rounded-xl overflow-hidden"
        style={{ aspectRatio: '16/9' }}
      >
        <video
          src={project.videoSrc}
          className="w-full h-full object-cover"
          style={{
            filter: `brightness(${hovered ? 0.65 : 0.5})`,
            transition: 'filter 0.4s',
            pointerEvents: 'none',
          }}
          muted
          playsInline
          preload="metadata"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(139,92,246,0.1) 100%)',
          }}
        />
        {/* Play icon */}
        <motion.div
          animate={{ scale: hovered ? 1.1 : 1, opacity: hovered ? 1 : 0.85 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.18)',
              backdropFilter: 'blur(8px)',
              border: '1.5px solid rgba(255,255,255,0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
          >
            <svg width="12" height="14" viewBox="0 0 14 16" fill="white">
              <path d="M1 1l12 7-12 7V1z"/>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center gap-1.5 flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          {project.tags?.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-medium"
              style={{
                background: 'rgba(59,130,246,0.12)',
                color: '#60a5fa',
                border: '1px solid rgba(59,130,246,0.15)',
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
        <h3
          className="font-display font-semibold text-base sm:text-lg leading-snug"
          style={{ color: 'var(--off-white)' }}
        >
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm line-clamp-2" style={{ color: 'var(--soft-gray)' }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="text-[10px] sm:text-xs px-2 py-0.5 rounded"
              style={{
                background: 'var(--charcoal)',
                color: 'var(--mid-gray)',
                border: '1px solid var(--glass-border)',
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow (hidden on mobile) */}
      <motion.div
        animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0.3 }}
        transition={{ duration: 0.25 }}
        className="self-center flex-shrink-0 hidden sm:block"
        style={{ color: 'var(--electric-blue)' }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 10h12M10 4l6 6-6 6"/>
        </svg>
      </motion.div>
    </motion.div>
  );
};

/* ─── Hero Video Card ────────────────────────────────────────────── */
const HeroVideoCard = ({ project, onPlay }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      onClick={() => onPlay(project)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative w-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer bg-charcoal/40 sm:bg-black transition-all duration-300"
      style={{
        border: '1px solid var(--glass-border)',
        boxShadow: hovered
          ? '0 20px 40px rgba(37,99,235,0.12), 0 0 0 1px rgba(59,130,246,0.2)'
          : '0 10px 30px rgba(0,0,0,0.15)',
      }}
    >
      {/* Media Container */}
      <div className="relative w-full aspect-[16/9] sm:aspect-auto sm:absolute sm:inset-0 bg-black overflow-hidden">
        {/* Video BG */}
        <video
          src={project.videoSrc}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: `brightness(${hovered ? 0.5 : 0.35})`,
            transition: 'filter 0.4s',
            pointerEvents: 'none',
          }}
          muted
          playsInline
          preload="metadata"
        />

        {/* Gradients */}
        <div
          className="hidden sm:block absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(37,99,235,0.2) 0%, rgba(139,92,246,0.1) 50%, transparent 100%)',
          }}
        />
        <div
          className="hidden sm:block absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.3) 60%, transparent 100%)',
          }}
        />

        {/* Featured badge */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
          <span
            className="text-[9px] sm:text-xs font-semibold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full"
            style={{
              background: 'linear-gradient(135deg, var(--electric-blue), #8b5cf6)',
              color: '#fff',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
            }}
          >
            Featured
          </span>
        </div>

        {/* Center play */}
        <motion.div
          animate={{ scale: hovered ? 1.05 : 1, opacity: hovered ? 1 : 0.85 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div
            className="w-14 h-14 sm:w-20 sm:h-20"
            style={{
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.18)',
              backdropFilter: 'blur(12px)',
              border: '2px solid rgba(255,255,255,0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 30px rgba(59,130,246,0.25)',
            }}
          >
            <svg className="w-4 h-5 sm:w-6 sm:h-7" viewBox="0 0 22 26" fill="white">
              <path d="M2 2l18 11L2 24V2z"/>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Spacer for desktop layout aspect ratio */}
      <div className="hidden sm:block" style={{ aspectRatio: '16/9' }} />

      {/* Info block */}
      <div className="relative p-5 sm:absolute sm:bottom-0 sm:left-0 sm:right-0 sm:p-8 sm:z-10 bg-transparent">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex gap-1.5 mb-2 sm:mb-3">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{
                    background: 'rgba(59,130,246,0.12)',
                    color: '#60a5fa',
                    border: '1px solid rgba(59,130,246,0.15)',
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-display font-bold text-off-white sm:text-white leading-tight">
              {project.title}
            </h2>
            <p className="text-soft-gray sm:text-white/70 mt-2 max-w-lg text-xs sm:text-sm">
              {project.description}
            </p>
          </div>
          <div className="flex gap-1.5 flex-wrap">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full sm:bg-white/10 sm:backdrop-blur-md sm:border-white/15 sm:text-white/90 bg-charcoal text-soft-gray border border-glass-border"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Video Modal ────────────────────────────────────────────────── */
const VideoModal = ({ project, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => {
    if (videoRef.current) videoRef.current.play().catch(() => {});
  }, []);

  const handleClose = () => {
    if (videoRef.current) videoRef.current.pause();
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4"
      style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(20px)' }}
      onClick={handleClose}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.88, opacity: 0, y: 30 }}
        transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
        className="relative w-full rounded-2xl overflow-hidden"
        style={{
          maxWidth: 1000,
          boxShadow: '0 30px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-3"
          style={{
            background: 'rgba(10,10,15,0.95)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, var(--electric-blue), #8b5cf6)' }}
            >
              <svg width="8" height="10" viewBox="0 0 10 12" fill="white">
                <path d="M1 1l8 5-8 5V1z"/>
              </svg>
            </div>
            <div>
              <p className="text-white text-xs sm:text-sm font-semibold leading-none">{project.title}</p>
              <p className="text-white/40 text-[10px] sm:text-xs mt-0.5">{project.year}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="hidden sm:inline text-xs px-2 py-0.5 rounded"
                style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}
              >
                {tool}
              </span>
            ))}
            <button
              onClick={handleClose}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 1l10 10M11 1L1 11"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Video */}
        <div style={{ background: '#000', position: 'relative' }}>
          <video
            ref={videoRef}
            src={project.videoSrc}
            controls
            className="w-full"
            style={{ display: 'block', maxHeight: '75vh' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── Page ───────────────────────────────────────────────────────── */
const FILTERS = [
  { id: 'all', icon: '🎞️', label: 'All Videos' },
  { id: 'reel', icon: '🎬', label: 'Reels' },
  { id: 'social', icon: '📱', label: 'Social' },
  { id: 'event', icon: '🎥', label: 'Events' },
];

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? videoProjects
    : videoProjects.filter((p) => p.tags?.includes(activeFilter));

  const [hero, ...rest] = filtered;

  return (
    <>
      {/* ── Custom Hero ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden px-4"
        style={{ minHeight: '40vh', paddingTop: 100, paddingBottom: 40 }}
      >
        {/* Ambient blobs */}
        <div
          className="absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: 'var(--electric-blue)' }}
        >
          Motion &amp; Video
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-bold"
          style={{ color: 'var(--off-white)', lineHeight: 1.05 }}
        >
          Video Edits
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-lg text-sm sm:text-base px-4"
          style={{ color: 'var(--soft-gray)' }}
        >
          Cinematic editing, colour grading and motion content — from brand reels to social clips.
        </motion.p>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 w-full max-w-xl mx-auto px-4"
        >
          <StatPill value={`${videoProjects.length}+`} label="Videos" />
          <StatPill value="4K" label="Quality" />
          <StatPill value="3+" label="Tools Used" />
          <div 
            className="flex flex-col items-center justify-center p-3 sm:p-4 glass rounded-xl text-center"
            style={{ border: '1px solid var(--glass-border)' }}
          >
            <span className="text-xl sm:text-3xl font-display font-bold" style={{ color: 'var(--electric-blue)' }}>2024</span>
            <span className="text-[9px] sm:text-xs mt-1 uppercase tracking-wider" style={{ color: 'var(--soft-gray)' }}>Year</span>
          </div>
        </motion.div>
      </section>

      {/* ── Main Content ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pb-24">

        {/* Filter pills - scrollable horizontally on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap"
        >
          {FILTERS.map((f) => (
            <CategoryBadge
              key={f.id}
              icon={f.icon}
              label={f.label}
              active={activeFilter === f.id}
              onClick={() => setActiveFilter(f.id)}
            />
          ))}
        </motion.div>

        {filtered.length === 0 ? (
          <div className="text-center py-24" style={{ color: 'var(--soft-gray)' }}>
            No videos in this category yet.
          </div>
        ) : (
          <>
            {/* Hero large card */}
            {hero && (
              <div className="mb-8">
                <HeroVideoCard project={hero} onPlay={setActiveVideo} />
              </div>
            )}

            {/* Divider label */}
            {rest.length > 0 && (
              <div className="flex items-center gap-4 my-8">
                <div className="flex-1 h-px" style={{ background: 'var(--glass-border)' }} />
                <span className="text-[10px] sm:text-xs uppercase tracking-widest whitespace-nowrap" style={{ color: 'var(--soft-gray)' }}>
                  More Videos
                </span>
                <div className="flex-1 h-px" style={{ background: 'var(--glass-border)' }} />
              </div>
            )}

            {/* List of remaining videos */}
            <div className="flex flex-col gap-4 sm:gap-3">
              {rest.map((project, i) => (
                <VideoCard
                  key={project.id}
                  project={project}
                  index={i}
                  onPlay={setActiveVideo}
                />
              ))}
            </div>
          </>
        )}
      </section>

      {/* ── Modal ── */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal project={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>

      <ContactCTA />
    </>
  );
}
