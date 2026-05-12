import { motion } from 'framer-motion';
import { tools } from '../data/projects';
import SectionHeader from './SectionHeader';
import { staggerContainer, staggerItem } from '../animations/variants';

const ToolCard = ({ tool, index }) => (
  <motion.div
    variants={staggerItem}
    whileHover={{ y: -4, scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="glass rounded-xl p-4 flex items-center gap-3 group cursor-default"
  >
    <div
      className="w-10 h-10 rounded-lg flex items-center justify-center font-display font-bold text-sm flex-shrink-0 transition-all duration-300 group-hover:scale-110"
      style={{ background: `${tool.color}18`, color: tool.color, border: `1px solid ${tool.color}30` }}
    >
      {tool.icon}
    </div>
    <span className="text-sm text-soft-gray group-hover:text-off-white transition-colors duration-200">
      {tool.name}
    </span>
  </motion.div>
);

export default function ToolsSection() {
  return (
    <section className="section-padding max-w-7xl mx-auto px-6 md:px-10">
      <SectionHeader
        eyebrow="My Arsenal"
        title="Tools & Software"
        subtitle="A curated set of industry-leading tools I use to bring creative visions to life."
      />

      <div className="space-y-10">
        {[
          { group: 'Design & Illustration', items: tools.design },
          { group: 'AI & Generative', items: tools.ai },
          { group: 'Video & Motion', items: tools.video },
        ]
          .filter((section) => section.items && section.items.length > 0)
          .map(({ group, items }) => (
          <div key={group}>
            <p className="text-xs uppercase tracking-[0.25em] text-mid-gray mb-4">{group}</p>
            <motion.div
              variants={staggerContainer(0.05, 0)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
            >
              {items.map((tool, i) => (
                <ToolCard key={tool.name} tool={tool} index={i} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
