import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import ProjectCard from '../components/ProjectCard';
import ContactCTA from '../components/ContactCTA';
import SectionHeader from '../components/SectionHeader';
import { getProjectsByCategory } from '../data/projects';
import { staggerContainer, staggerItem } from '../animations/variants';

const videoProjects = getProjectsByCategory('videos');

const VideoCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      className="relative rounded-2xl overflow-hidden group cursor-pointer bg-charcoal"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
        <motion.img
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.5)' }}
        />

        {/* Play button */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0.7, scale: hovered ? 1.1 : 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-16 h-16 rounded-full flex items-center justify-center glass-strong border-2 border-theme-invert/30">
            <span className="text-white text-xl ml-1">▶</span>
          </div>
        </motion.div>

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/40"
        />
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-off-white">{project.title}</h3>
        <p className="text-soft-gray text-sm mt-1 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tools.map((tool) => (
            <span key={tool} className="text-xs px-2 py-1 rounded glass" style={{ color: '#93c5fd' }}>
              {tool}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="Motion & Video"
        title="Video Editing"
        subtitle="Cinematic editing, color grading, and motion content — from brand reels to social clips."
        bgImage="https://picsum.photos/seed/videohero/1920/600"
      />

      {/* Video types */}
      <section className="section-padding max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { icon: '🎬', label: 'Brand Reels' },
            { icon: '📺', label: 'Commercials' },
            { icon: '🎥', label: 'Event Recaps' },
            { icon: '📱', label: 'Social Content' },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={staggerItem}
              className="glass rounded-xl p-5 text-center"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="text-sm text-soft-gray">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <SectionHeader eyebrow="Projects" title="Video Showcase" />

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videoProjects.map((project, i) => (
            <VideoCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
