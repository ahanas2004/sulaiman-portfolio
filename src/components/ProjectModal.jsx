import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-7xl glass-strong rounded-[2.5rem] border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden z-10 cursor-default"
            >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 md:top-8 md:right-8 z-50 w-12 h-12 rounded-full bg-white/10 dark:bg-black/40 text-off-white backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-electric-blue hover:text-white hover:scale-110 transition-all duration-300 group"
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-90 transition-transform duration-300"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="flex flex-col lg:flex-row lg:aspect-video min-h-[500px] max-h-[90dvh] overflow-y-auto lg:overflow-hidden">
              
              {/* Left Panel: Image */}
              <div className="lg:w-1/2 relative bg-[#0a0a0a] flex items-center justify-center p-6 md:p-12 overflow-hidden min-h-[300px]">
                <div className="absolute inset-0 pointer-events-none opacity-20" 
                  style={{ background: `radial-gradient(circle at center, var(--electric-blue) 0%, transparent 70%)`, filter: 'blur(100px)' }}
                />
                
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
                
                <div className="absolute top-8 left-8 opacity-20 hidden md:block">
                  <span className="text-[10px] uppercase tracking-[0.5em] text-white font-bold">
                    SK Portfolio 2024
                  </span>
                </div>
              </div>

              {/* Right Panel: Details */}
              <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center glass relative border-l border-white/5">
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <span className="px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold bg-electric-blue/10 text-electric-blue border border-electric-blue/20">
                      {project.category.replace('-', ' ')}
                    </span>
                    <div className="h-px w-8 bg-white/10" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-soft-gray font-medium">
                      EST. {project.year}
                    </span>
                  </div>

                  <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-semibold text-off-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
                    {project.title}
                  </h2>

                  <div className="mb-8 md:mb-10">
                    <p className="text-soft-gray text-base md:text-lg leading-relaxed max-w-md">
                      {project.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-mid-gray mb-3 font-bold">Project Focus</h4>
                      <p className="text-sm text-off-white font-medium capitalize">
                        {project.tags?.[0] || "Creative Visuals"}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-[0.3em] text-mid-gray mb-3 font-bold">Tools Palette</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.tools.map((tool) => (
                          <span key={tool} className="text-[11px] font-medium text-soft-gray">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Text */}
                <div className="absolute bottom-[-5%] right-[-5%] opacity-[0.02] pointer-events-none select-none hidden lg:block">
                  <span className="font-display text-[10vw] font-black uppercase leading-none">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
