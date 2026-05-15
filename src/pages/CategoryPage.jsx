import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import PageHero from '../components/PageHero';
import ContactCTA from '../components/ContactCTA';
import ProjectModal from '../components/ProjectModal';
import FilteredGallery from '../components/FilteredGallery';
import { getProjectsByCategory } from '../data/projects';

export default function CategoryPage({ categoryId, title, eyebrow, subtitle, bgSeed }) {
  const projects = getProjectsByCategory(categoryId);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        bgImage={bgSeed ? `https://picsum.photos/seed/${bgSeed}/1920/600` : null}
      />

      <section className="section-padding max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onClick={setSelectedProject} />
          ))}
        </div>
      </section>

      <ContactCTA />

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}
