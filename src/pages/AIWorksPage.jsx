import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import ProjectCard from '../components/ProjectCard';
import ContactCTA from '../components/ContactCTA';
import ProjectModal from '../components/ProjectModal';
import SectionHeader from '../components/SectionHeader';
import { getProjectsByCategory } from '../data/projects';
import { staggerContainer, staggerItem } from '../animations/variants';

const aiProjects = getProjectsByCategory('ai-works');

const aiCapabilities = [
  { icon: '◈', title: 'Prompt Engineering', desc: 'Crafting precision prompts that generate exactly the right visual.' },
  { icon: '✦', title: 'AI Compositing', desc: 'Seamlessly blending AI output with traditional design in Photoshop.' },
  { icon: '⬡', title: 'Generative Video', desc: 'Using Runway & Kling to create AI-driven motion content.' },
  { icon: '◇', title: 'Style Consistency', desc: 'Maintaining visual cohesion across multi-image AI campaigns.' },
];

export default function AIWorksPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <PageHero
        eyebrow="Generative AI"
        title="AI Creative Works"
        subtitle="Pushing the boundaries of design with cutting-edge AI tools — from surreal dreamscapes to photorealistic campaigns."
        bgImage="https://picsum.photos/seed/aihero/1920/600"
      />

      {/* AI Capabilities */}
      <section className="section-padding max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader
          eyebrow="AI Workflow"
          title="How I Work with AI"
          subtitle="AI is a creative amplifier — not a replacement. I combine the precision of traditional design with the power of generative AI to create something neither could achieve alone."
        />
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {aiCapabilities.map((cap) => (
            <motion.div
              key={cap.title}
              variants={staggerItem}
              className="glass rounded-xl p-5"
              style={{ border: '1px solid rgba(59,130,246,0.15)' }}
            >
              <div className="text-2xl text-electric-blue mb-3">{cap.icon}</div>
              <h3 className="font-display text-off-white text-base font-semibold mb-2">{cap.title}</h3>
              <p className="text-soft-gray text-xs leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <SectionHeader eyebrow="Portfolio" title="AI Creative Gallery" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onClick={setSelectedProject} />
          ))}
        </div>
      </section>

      {/* Tools used */}
      <section className="section-padding max-w-7xl mx-auto px-6 md:px-10">
        <div className="glass rounded-2xl p-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-electric-blue mb-4">AI Tools</p>
          <h3 className="font-display font-semibold text-off-white text-2xl mb-6">Powered by the Latest AI</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Midjourney', 'Runway', 'Kling', 'Leonardo AI', 'ChatGPT', 'Gemini', 'Stable Diffusion'].map((tool) => (
              <span key={tool} className="text-sm px-4 py-2 rounded-full" style={{ background: 'rgba(59,130,246,0.1)', color: '#93c5fd', border: '1px solid rgba(59,130,246,0.2)' }}>
                {tool}
              </span>
            ))}
          </div>
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
