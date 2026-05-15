import { motion } from 'framer-motion';
import { 
  Palette, 
  Video, 
  Zap, 
  Layout, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Command,
  Search,
  PenTool,
  Layers,
  Rocket,
  Presentation,
  Building2,
  Share2,
  Component,
  Monitor,
  TrendingUp,
  Globe,
  Mail,
  BarChart3,
  Cpu,
  MousePointer2
} from 'lucide-react';
import PageHero from '../components/PageHero';
import ContactCTA from '../components/ContactCTA';
import { staggerContainer, staggerItem } from '../animations/variants';

const serviceCategories = [
  {
    category: 'Branding & Creative',
    services: [
      {
        title: 'Visual Identity & Branding',
        description: 'I create cohesive brand ecosystems that tell a story. From iconic logos to complete visual guidelines, I ensure your brand stands out.',
        icon: <Palette className="w-6 h-6" />,
        color: 'from-blue-500 to-cyan-400',
        features: ['Logo Systems', 'Brand Strategy', 'Typography & Color', 'Brand Identity'],
        tools: ['Illustrator', 'Photoshop', 'InDesign']
      },
      {
        title: 'Expo & Event Branding',
        description: 'Complete visual setup for exhibitions and trade shows. I transform physical spaces into immersive brand experiences.',
        icon: <Presentation className="w-6 h-6" />,
        color: 'from-rose-500 to-orange-400',
        features: ['Booth & Stall Design', 'Backdrop & Stage Banners', 'Roll-up Stands', 'Event Graphics'],
        tools: ['Illustrator', 'Photoshop', 'SketchUp']
      },
      {
        title: 'Office & Workspace Branding',
        description: 'Internal and external brand identity for workspaces. I design motivational and thematic graphics for professional environments.',
        icon: <Building2 className="w-6 h-6" />,
        color: 'from-indigo-500 to-purple-400',
        features: ['Reception Wall Branding', 'Company Logo Walls', 'Glass & Partition Branding', 'Workspace Thematic Design'],
        tools: ['Illustrator', 'Photoshop', 'Dimension']
      },
      {
        title: 'Branding & Creative Advertising',
        description: 'High-impact ad creatives and campaign systems designed for visual storytelling and product promotions.',
        icon: <Sparkles className="w-6 h-6" />,
        color: 'from-pink-500 to-rose-400',
        features: ['Ad Creatives', 'Motion Ads', 'Campaign Systems', 'Visual Storytelling'],
        tools: ['After Effects', 'Photoshop', 'Premiere']
      }
    ]
  },
  {
    category: 'Digital Marketing & Growth',
    services: [
      {
        title: 'Performance Marketing',
        description: 'Strategic ad campaigns focused on ROI and lead generation across major digital advertising platforms.',
        icon: <TrendingUp className="w-6 h-6" />,
        color: 'from-emerald-500 to-teal-400',
        features: ['Meta Ads (FB/IG)', 'Google Ads', 'Campaign Optimization', 'Lead Generation'],
        tools: ['Ads Manager', 'Keyword Planner', 'Analytics']
      },
      {
        title: 'SEO (Search Engine Optimization)',
        description: 'Improving website visibility and organic rankings through technical audits and strategic content optimization.',
        icon: <Globe className="w-6 h-6" />,
        color: 'from-sky-500 to-blue-400',
        features: ['Website Ranking', 'Keyword Research', 'Technical SEO Audits', 'Local SEO & Backlinks'],
        tools: ['Ahrefs', 'Search Console', 'Semrush']
      },
      {
        title: 'Social Media & Content',
        description: 'Full handling of brand presence and content execution. I strategize and schedule content for growth.',
        icon: <Share2 className="w-6 h-6" />,
        color: 'from-orange-500 to-amber-400',
        features: ['Content Planning', 'Monthly Calendars', 'Blog Strategy', 'Instagram & LinkedIn Management'],
        tools: ['Meta Business Suite', 'Canva Pro', 'Figma']
      },
      {
        title: 'Email Marketing & Analytics',
        description: 'Designing automated funnels and performance dashboards to track your digital growth and customer engagement.',
        icon: <Mail className="w-6 h-6" />,
        color: 'from-violet-500 to-purple-400',
        features: ['Newsletter Design', 'Automated Funnels', 'Google Analytics Dashboards', 'Performance Reports'],
        tools: ['Mailchimp', 'GA4', 'Looker Studio']
      }
    ]
  },
  {
    category: 'Media & AI Automation',
    services: [
      {
        title: 'Video & Motion Marketing',
        description: 'Transforming raw footage into cinematic experiences and motion graphics for reels, ads, and product explainers.',
        icon: <Video className="w-6 h-6" />,
        color: 'from-red-500 to-rose-500',
        features: ['Reels & Social Video', 'YouTube Ads', 'Product Explainers', 'Color Grading'],
        tools: ['Premiere Pro', 'DaVinci Resolve', 'After Effects']
      },
      {
        title: 'AI Marketing & Automation',
        description: 'Leveraging generative AI for ad generation, automated content systems, and efficient campaign workflows.',
        icon: <Cpu className="w-6 h-6" />,
        color: 'from-amber-400 to-yellow-500',
        features: ['AI Ad Generation', 'Prompt Engineering', 'Automated Content Systems', 'AI Video Production'],
        tools: ['Midjourney', 'Stable Diffusion', 'Make.com']
      }
    ]
  }
];

const processes = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We dive deep into your goals, audience, and vision to set a solid foundation.',
    icon: <Search className="w-6 h-6" />
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Developing a unique creative path and moodboards that align with your objectives.',
    icon: <Command className="w-6 h-6" />
  },
  {
    step: '03',
    title: 'Creation',
    description: 'The magic happens here. I bring the concepts to life through iterative design.',
    icon: <PenTool className="w-6 h-6" />
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Finalizing every detail and handing over high-quality assets ready for use.',
    icon: <Rocket className="w-6 h-6" />
  }
];

export default function ExpertisePage() {
  return (
    <div className="bg-black text-off-white min-h-screen selection:bg-electric-blue/30 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-electric-blue/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      <PageHero
        title="Full-Spectrum Digital Mastery"
        subtitle="I merge creative artistry with technical marketing precision to deliver world-class solutions that drive real business growth."
        eyebrow="Expertise"
      />

      {/* Expertise Grid Section */}
      <section className="section-padding max-w-7xl mx-auto relative z-10 px-6 md:px-10">
        {serviceCategories.map((cat, catIndex) => (
          <div key={cat.category} className={catIndex > 0 ? 'mt-24 md:mt-32' : ''}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="h-px w-12 bg-electric-blue/30" />
              <h2 className="text-xl font-display font-bold uppercase tracking-[0.3em] text-electric-blue">
                {cat.category}
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer(0.1, 0.05)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8"
            >
              {cat.services.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={staggerItem}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-theme-invert/[0.03] border border-theme-invert/10 rounded-3xl transition-all duration-500 group-hover:bg-theme-invert/[0.06] group-hover:border-theme-invert/20" />
                  
                  <div className="relative p-8 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-8">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-3 text-white shadow-lg flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        {service.icon}
                      </div>
                      <span className="text-theme-invert/10 font-display font-bold text-2xl">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-semibold mb-4 group-hover:text-electric-blue transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-soft-gray text-base mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 mt-auto">
                      {service.features.map(feature => (
                        <div key={feature} className="flex items-center gap-2 text-soft-gray group-hover:text-off-white transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-electric-blue/60" />
                          <span className="text-sm font-medium tracking-wide">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-theme-invert/5 flex flex-wrap gap-2">
                      {service.tools.map(tool => (
                        <span key={tool} className="text-[9px] uppercase tracking-[0.2em] px-3 py-1.5 bg-theme-invert/5 rounded-full text-mid-gray font-bold group-hover:text-off-white transition-all">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </section>

      {/* Process Section */}
      <section className="section-padding bg-charcoal relative">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between mb-20">
            <div className="max-w-2xl">
              <span className="text-electric-blue uppercase tracking-[0.4em] text-xs font-bold mb-4 block">Workflow</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold">Mastering the Craft.</h2>
              <p className="mt-6 text-soft-gray text-lg max-w-xl">
                My creative process is designed to ensure clarity, consistency, and exceptional results from the first conversation to the final pixel.
              </p>
            </div>
            <div className="hidden lg:block">
              <Sparkles className="w-12 h-12 text-electric-blue/30 animate-pulse" />
            </div>
          </div>

          <motion.div 
            variants={staggerContainer(0.2, 0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processes.map((p) => (
              <motion.div 
                key={p.step} 
                variants={staggerItem}
                className="relative p-8 rounded-3xl bg-theme-invert/[0.02] border border-theme-invert/5 hover:border-theme-invert/10 transition-all duration-300 group"
              >
                <div className="text-5xl font-display font-bold text-theme-invert/5 mb-6 group-hover:text-electric-blue/10 transition-colors">
                  {p.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center text-electric-blue mb-6 group-hover:bg-electric-blue group-hover:text-white transition-all duration-300">
                  {p.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{p.title}</h4>
                <p className="text-soft-gray text-sm leading-relaxed">
                  {p.description}
                </p>
                
                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-theme-invert/10 z-0 last:hidden" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding max-w-7xl mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="glass p-12 md:p-24 rounded-[4rem] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent" />
          
          <Layers className="w-16 h-16 text-electric-blue/20 mx-auto mb-10" />
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8 max-w-3xl mx-auto leading-tight">
            "Design is not just what it looks like. Design is how it <span className="text-electric-blue">works</span> and feels."
          </h2>
          <p className="text-soft-gray text-lg max-w-xl mx-auto mb-12">
            I believe in the power of visual storytelling to bridge the gap between businesses and their human audience. Every project is a new opportunity to innovate.
          </p>
          
          <button className="px-10 py-5 bg-off-white text-black font-bold rounded-full hover:bg-electric-blue hover:text-white transition-all duration-300 flex items-center gap-3 mx-auto group">
            Start a Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>

      <ContactCTA />
    </div>
  );
}
