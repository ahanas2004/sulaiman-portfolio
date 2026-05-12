import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ToolsSection from '../components/ToolsSection';
import ContactCTA from '../components/ContactCTA';
import ProjectCard from '../components/ProjectCard';
import SectionHeader from '../components/SectionHeader';
import { getFeaturedProjects, categories } from '../data/projects';
import { staggerContainer, staggerItem, fadeUp } from '../animations/variants';

const featuredProjects = getFeaturedProjects(6);

const serviceCards = [
  {
    icon: '◈',
    title: 'Brand Identity',
    desc: 'Complete visual systems — logo, palette, typography, and collateral.',
    route: '/branding',
  },
  {
    icon: '✦',
    title: 'Poster Design',
    desc: 'Editorial, event, and advertising posters with cinematic impact.',
    route: '/posters',
  },
  {
    icon: '⬡',
    title: 'AI Creatives',
    desc: 'Generative AI art, ads, and concept visuals for the modern era.',
    route: '/ai-works',
  },
  {
    icon: '▶',
    title: 'Video Editing',
    desc: 'Brand reels, commercial edits, and social motion content.',
    route: '/videos',
  },
  {
    icon: '◇',
    title: 'Logo Design',
    desc: 'Timeless wordmarks, monograms, and icon marks for lasting brands.',
    route: '/logos',
  },
  {
    icon: '⊡',
    title: 'Social Media',
    desc: 'Scroll-stopping content systems for Instagram, LinkedIn, and more.',
    route: '/social-media',
  },
];

// Horizontal scrolling marquee for categories
const MarqueeStrip = () => {
  const items = [...categories, ...categories];
  return (
    <div className="overflow-hidden py-6 border-t border-b border-theme-invert/[0.05] my-0">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="flex gap-10 whitespace-nowrap"
      >
        {items.map((cat, i) => (
          <span key={i} className="text-sm text-mid-gray uppercase tracking-widest flex-shrink-0">
            {cat.label} <span className="text-electric-blue mx-4">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

// About preview section
const AboutPreview = () => (
  <section className="section-padding max-w-7xl mx-auto px-6 md:px-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Image side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        className="relative"
      >
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
          <img
            src="https://picsum.photos/seed/aboutsk/700/900"
            alt="Sulaiman Kaif"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.8) saturate(0.8)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        {/* Floating stat card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="absolute -bottom-6 -right-6 glass rounded-2xl p-5"
        >
          <div className="font-display text-3xl font-semibold text-off-white">55+</div>
          <div className="text-xs text-soft-gray mt-1">Premium projects</div>
        </motion.div>
      </motion.div>

      {/* Text side */}
      <div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.3em] text-electric-blue mb-4"
        >
          About Me
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-semibold text-off-white"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
        >
          Design that speaks before words do.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-soft-gray leading-relaxed"
        >
          I'm Sulaiman Kaif — a creative designer with 3+ years of experience crafting
          premium visual identities, bold editorial designs, and AI-powered creative work
          that helps brands stand out in a crowded world.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 text-soft-gray leading-relaxed"
        >
          From luxury brand identities to cutting-edge AI art, I bring cinematic precision
          and creative boldness to every project.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm text-off-white border-b border-theme-invert/30 pb-0.5 hover:border-electric-blue hover:text-electric-blue transition-all duration-300"
          >
            More about me
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

// Services grid
const ServicesSection = () => (
  <section className="section-padding max-w-7xl mx-auto px-6 md:px-10">
    <SectionHeader
      eyebrow="What I Do"
      title="Services"
      subtitle="Full-spectrum creative design tailored to make your brand unforgettable."
    />
    <motion.div
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {serviceCards.map((card) => (
        <motion.div key={card.title} variants={staggerItem}>
          <Link to={card.route}>
            <div className="group glass rounded-2xl p-7 h-full hover:bg-theme-invert/[0.06] transition-all duration-400 cursor-pointer">
              <div className="text-3xl text-electric-blue mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                {card.icon}
              </div>
              <h3 className="font-display text-off-white font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-soft-gray text-sm leading-relaxed">{card.desc}</p>
              <div className="mt-5 flex items-center gap-1 text-xs text-mid-gray group-hover:text-electric-blue transition-colors duration-300">
                View work <span>→</span>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

// Featured works section
const FeaturedWorksSection = () => (
  <section className="section-padding max-w-7xl mx-auto px-6 md:px-10">
    <div className="flex items-end justify-between mb-14">
      <SectionHeader
        eyebrow="Portfolio"
        title="Featured Works"
      />
      <Link
        to="/branding"
        className="hidden md:flex items-center gap-2 text-sm text-soft-gray hover:text-off-white transition-colors border-b border-theme-invert/20 pb-0.5"
      >
        View all <span>→</span>
      </Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredProjects.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </div>
    <div className="mt-10 text-center md:hidden">
      <Link
        to="/branding"
        className="inline-flex items-center gap-2 border border-theme-invert/15 text-off-white px-6 py-3 rounded-full text-sm hover:bg-theme-invert/5 transition-all"
      >
        View all work →
      </Link>
    </div>
  </section>
);

// AI Showcase strip
const AIShowcaseSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)' }}
    />
    <div className="max-w-7xl mx-auto px-6 md:px-10">
      <SectionHeader
        eyebrow="AI Creative"
        title="Generative AI Works"
        subtitle="Cutting-edge AI-assisted visuals pushing the frontier of digital creativity."
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {['ai1', 'ai2', 'ai3', 'ai5'].map((seed, i) => (
          <motion.div
            key={seed}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            whileHover={{ scale: 1.03 }}
            className="rounded-xl overflow-hidden"
            style={{ aspectRatio: '1/1.2' }}
          >
            <img
              src={`https://picsum.photos/seed/${seed}/600/750`}
              alt="AI creative work"
              loading="lazy"
              className="w-full h-full object-cover"
              style={{ filter: 'brightness(0.8) saturate(0.9)' }}
            />
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/ai-works"
          className="inline-flex items-center gap-2 text-sm text-electric-blue hover:text-blue-400 transition-colors"
        >
          Explore AI Works →
        </Link>
      </div>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <AboutPreview />
      <div className="hr-glass max-w-7xl mx-auto" />
      <ServicesSection />
      <div className="hr-glass max-w-7xl mx-auto" />
      <FeaturedWorksSection />
      <AIShowcaseSection />
      <ToolsSection />
      <ContactCTA />
    </>
  );
}
