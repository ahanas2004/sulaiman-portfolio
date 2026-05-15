import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectBySlug } from '../data/projects';
import ContactCTA from '../components/ContactCTA';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center text-center px-6">
        <div>
          <h1 className="font-display text-4xl text-off-white mb-4">Project not found</h1>
          <Link to="/" className="text-electric-blue hover:underline">← Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black/10 py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="mb-10 flex items-center gap-2 text-sm text-soft-gray hover:text-off-white transition-all group"
        >
          <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span> 
          Back to Portfolio
        </motion.button>

        {/* Simplified 16:9 Split Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="relative bg-charcoal rounded-[2.5rem] border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden group/card"
        >
          <div className="flex flex-col lg:flex-row lg:aspect-video min-h-[650px]">
            
            {/* Left Panel: The Poster/Image */}
            <div className="lg:w-1/2 relative bg-[#0a0a0a] flex items-center justify-center p-6 md:p-12 overflow-hidden">
              {/* Animated Background Glow */}
              <div className="absolute inset-0 pointer-events-none opacity-20" 
                style={{ 
                  background: `radial-gradient(circle at center, var(--electric-blue) 0%, transparent 70%)`, 
                  filter: 'blur(100px)' 
                }}
              />
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 w-full h-full flex items-center justify-center"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-700 group-hover/card:scale-[1.03]"
                />
              </motion.div>
              
              {/* Dynamic Watermark Overlay */}
              <div className="absolute top-8 left-8 opacity-20">
                <span className="text-[10px] uppercase tracking-[0.5em] text-white font-bold">
                  SK Portfolio 2024
                </span>
              </div>
            </div>

            {/* Right Panel: Project Details */}
            <div className="lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center bg-gradient-to-br from-charcoal to-[#050505] relative border-l border-white/5">
              
              <div className="relative z-10">
                {/* Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-center gap-3 mb-8"
                >
                  <span className="px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-electric-blue/10 text-electric-blue border border-electric-blue/20">
                    {project.category.replace('-', ' ')}
                  </span>
                  <div className="h-px w-8 bg-white/10" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-soft-gray font-medium">
                    EST. {project.year}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="font-display text-4xl md:text-5xl lg:text-7xl font-semibold text-off-white mb-10 leading-[1.1] tracking-tight"
                >
                  {project.title}
                </motion.h1>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mb-12"
                >
                  <p className="text-soft-gray text-lg leading-relaxed max-w-md">
                    {project.description}
                  </p>
                </motion.div>

                {/* Technical Meta */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="grid grid-cols-2 gap-10 pt-10 border-t border-white/5"
                >
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-mid-gray mb-4 font-bold">Project Focus</h4>
                    <p className="text-sm text-off-white font-medium capitalize">
                      {project.tags?.[0] || "Creative Visuals"}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-mid-gray mb-4 font-bold">Tools Palette</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tools.map((tool) => (
                        <span key={tool} className="text-[11px] font-medium text-soft-gray">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Large BG Text */}
              <div className="absolute bottom-[-10%] right-[-5%] opacity-[0.03] pointer-events-none select-none">
                <span className="font-display text-[15vw] font-black uppercase leading-none">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Simplified Footer CTA */}
      <div className="mt-32">
        <ContactCTA />
      </div>
    </div>
  );
}
