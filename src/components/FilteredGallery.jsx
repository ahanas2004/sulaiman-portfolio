import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function FilteredGallery({ projects, categories }) {
  const [active, setActive] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const filtered = projects.filter((p) => {
    const matchCat = active === 'all' || p.category === active;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tags?.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-10">
        {/* Filter pills */}
        <div className="flex flex-wrap gap-2">
          {[{ id: 'all', label: 'All' }, ...categories].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`text-xs px-4 py-2 rounded-full border transition-all duration-300 ${
                active === cat.id
                  ? 'bg-electric-blue border-electric-blue text-white'
                  : 'border-theme-invert/10 text-soft-gray hover:border-theme-invert/30 hover:text-off-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search projects…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent border border-theme-invert/10 text-off-white text-sm px-4 py-2 rounded-full w-full sm:w-56 focus:outline-none focus:border-electric-blue/50 transition-colors placeholder-mid-gray"
        />
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active + search}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.length ? (
            filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onClick={setSelectedProject} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-soft-gray">
              No projects found.
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
