import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cardHover, overlayHover, imageScaleHover } from '../animations/variants';

export default function ProjectCard({ project, index = 0 }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.76, 0, 0.24, 1] }}
    >
      <Link to={`/project/${project.slug}`}>
        <motion.article
          initial="rest"
          whileHover="hover"
          animate={hovered ? 'hover' : 'rest'}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          className="group relative rounded-2xl overflow-hidden cursor-pointer bg-charcoal"
        >
          {/* Image */}
          <div className="relative overflow-hidden" style={{ aspectRatio: project.category === 'videos' || project.category === 'mockups' ? '16/10' : '4/5' }}>
            <motion.img
              variants={imageScaleHover}
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />

            {/* Gradient overlay — always present */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            {/* Hover overlay */}
            <motion.div
              variants={overlayHover}
              className="absolute inset-0 flex flex-col justify-end p-5"
              style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(2px)' }}
            >
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ background: 'rgba(59,130,246,0.2)', color: '#93c5fd', border: '1px solid rgba(59,130,246,0.3)' }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p className="text-[#f0ede8] text-xs line-clamp-2">{project.description}</p>
                <div className="flex items-center gap-1 text-electric-blue text-xs font-medium">
                  View Project
                  <span>→</span>
                </div>
              </div>
            </motion.div>

            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span className="text-xs uppercase tracking-widest text-white/80 px-3 py-1.5 rounded-full" style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)' }}>
                {project.category.replace('-', ' ')}
              </span>
            </div>
          </div>

          {/* Card info — always visible */}
          <div className="p-4">
            <h3 className="font-display text-off-white font-semibold text-base leading-tight">{project.title}</h3>
            <p className="text-soft-gray text-xs mt-1">{project.year}</p>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}
