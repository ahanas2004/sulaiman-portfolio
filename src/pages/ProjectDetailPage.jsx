import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjectBySlug, getRelatedProjects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ContactCTA from '../components/ContactCTA';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    // Prevent scrolling when lightbox is open
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLightboxOpen]);

  if (!project) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-off-white mb-4">Project not found</h1>
          <Link to="/" className="text-electric-blue hover:underline">← Back to home</Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProjects(project.slug, project.category, 3);

  return (
    <>
      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-8 text-off-white hover:text-electric-blue transition-colors text-xl font-bold"
            >
              ✕ Close
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={project.image}
              alt={project.title}
              className="max-w-full max-h-[90dvh] object-contain rounded-md"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Title Section */}
      <section className="relative pt-32 pb-16 px-6 md:px-14 max-w-7xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-sm text-soft-gray hover:text-electric-blue transition-colors"
        >
          ← Back to Portfolio
        </motion.button>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.3em] text-electric-blue mb-4"
        >
          {project.category.replace('-', ' ')} · {project.year}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
          className="font-display font-semibold text-dark-text dark:text-off-white"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
        >
          {project.title}
        </motion.h1>
      </section>

      {/* Main Content: Split Layout */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Image View (Clickable) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 relative group cursor-zoom-in"
            onClick={() => setIsLightboxOpen(true)}
          >
            <div className="overflow-hidden rounded-2xl bg-black/5 shadow-2xl relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto object-contain max-h-[80vh] transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium px-6 py-3 rounded-full bg-black/50 backdrop-blur-md flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                  Click to Enlarge
                </span>
              </div>
            </div>
          </motion.div>

          {/* Project Details */}
          <div className="lg:col-span-5 space-y-10 sticky top-32">
            
            {/* Description */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-xs uppercase tracking-[0.3em] text-electric-blue mb-4"
              >
                Project Overview
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="text-soft-gray leading-relaxed text-lg"
              >
                {project.description}
              </motion.p>
            </div>

            {/* Meta Info Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="glass rounded-2xl p-6"
            >
              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-mid-gray mb-1.5">Industry</p>
                  <p className="text-dark-text dark:text-off-white text-sm capitalize font-medium">
                    {project.tags?.[0]?.replace('-', ' ') || 'Creative Design'}
                  </p>
                </div>
                <div className="hr-glass" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-mid-gray mb-1.5">Category</p>
                  <p className="text-dark-text dark:text-off-white text-sm capitalize">{project.category.replace('-', ' ')}</p>
                </div>
                <div className="hr-glass" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-mid-gray mb-2">Tools & Tech</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="text-xs px-3 py-1.5 rounded-full"
                        style={{ background: 'rgba(59,130,246,0.1)', color: '#3b82f6', border: '1px solid rgba(59,130,246,0.2)' }}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.tags && project.tags.length > 0 && (
                  <>
                    <div className="hr-glass" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-mid-gray mb-2">Tags</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs text-soft-gray">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Related Projects */}
      {related.length > 0 && (
        <section className="section-padding bg-black/5 dark:bg-black/20">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <p className="text-xs uppercase tracking-[0.3em] text-electric-blue mb-3">Keep Exploring</p>
            <h2 className="font-display text-3xl font-semibold text-dark-text dark:text-off-white mb-10">More {project.category.replace('-', ' ')} work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
    </>
  );
}
