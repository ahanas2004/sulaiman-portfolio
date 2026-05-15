import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactCTA from '../components/ContactCTA';
import { staggerContainer, staggerItem } from '../animations/variants';

const stats = [
  { num: '50+', label: 'Projects Delivered' },
  { num: '3+', label: 'Years Experience' },
  { num: '10+', label: 'Brand Collabs' },
  { num: '8', label: 'Design Disciplines' },
];

const experience = [
  { 
    year: 'May 2025 - Present', 
    role: 'Graphic Designer Executive', 
    org: 'CME LABORATORIES BHARAT PVT LTD', 
    type: 'Full-time',
    desc: 'Building CME into a visual experience that commands attention. Executing complete branding, AI-powered posters, cinematic product shoots, and strategic marketing collaterals. Key contributor for WIND EXPO 2025 (Chennai) and EXCON EXPO 2025 (Bengaluru), driving brand credibility and lead generation through visual storytelling.' 
  },
  { 
    year: 'Mar 2025 - Apr 2025', 
    role: 'Graphic Design & Digital Marketing Intern', 
    org: 'CME LABORATORIES BHARAT PVT LTD', 
    type: 'Internship',
    desc: 'Contributed to branding, marketing creatives, and lead generation support. Designed social media content and promotional materials while collaborating on strategic campaign execution.' 
  },
  { 
    year: 'Dec 2024 - Jan 2025', 
    role: 'Web Development Intern', 
    org: 'WearCheck Laboratories India Pvt ltd', 
    type: 'Internship',
    desc: 'Created and improved user-friendly, visually appealing websites. Designed layouts, enhanced UX, and ensured smooth functionality. Gained real-world experience in building structured, responsive web pages.' 
  },
  { 
    year: 'May 2023 - Present', 
    role: 'Freelance Graphic Designer', 
    org: 'Remote', 
    type: 'Freelance',
    desc: 'Delivering engaging visual content for various global clients. Designing high-impact posters, banners, and digital creatives tailored for social media and marketing campaigns to boost audience engagement.' 
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/aboutbg/1920/1080"
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.2) saturate(0.4)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse 60% 40% at 30% 50%, rgba(59,130,246,0.08) 0%, transparent 60%)' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-20 pt-40 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-electric-blue mb-4"
          >
            About
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            className="font-display font-semibold text-off-white"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.03em', lineHeight: 1 }}
          >
            Designer.
            <br />
            <span className="text-[#ffffff]">Storyteller.</span>
            <br />
            Creator.
          </motion.h1>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-theme-invert/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={staggerItem} className="text-center">
                <div className="font-display text-4xl font-semibold text-off-white">{s.num}</div>
                <div className="text-xs text-soft-gray mt-2 uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bio */}
      <section className="section-padding max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="font-display font-semibold text-off-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
            >
              I create visuals that make brands impossible to ignore.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 space-y-4 text-soft-gray leading-relaxed"
            >
              <p>
                I'm Sulaiman Kaif — a creative designer specializing in crafting 
                premium visual identities, bold editorial posters, AI-powered creative 
                work, and cinematic motion content.
              </p>
              <p>
                My work spans across logo design, branding, flyers, posters, product mockups, 
                social media creatives, and AI generative art. I believe great design isn't just 
                about looking good — it's about communicating something powerful at first glance.
              </p>
              <p>
                Whether it's a complete brand identity system or a single-frame poster, 
                I bring the same level of cinematic precision and creative boldness to 
                every project I take on.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-electric-blue text-white px-6 py-3 rounded-full text-sm hover:bg-blue-400 transition-all"
              >
                Work Together →
              </Link>
            </motion.div>
          </div>

          {/* Portrait + skills */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="rounded-2xl overflow-hidden"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src="https://picsum.photos/seed/sulaimanwork/900/700"
                alt="Creative workspace"
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.75) saturate(0.7)' }}
              />
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-xs uppercase tracking-widest text-soft-gray mb-5">Expertise</h3>
              <div className="space-y-4">
                {[
                  { skill: 'Brand Identity', level: 95 },
                  { skill: 'Poster & Editorial Design', level: 92 },
                  { skill: 'AI Creative Direction', level: 88 },
                  { skill: 'Video Editing', level: 82 },
                  { skill: 'Social Media Design', level: 90 },
                ].map(({ skill, level }) => (
                  <div key={skill}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-soft-gray">{skill}</span>
                      <span className="text-mid-gray">{level}%</span>
                    </div>
                    <div className="h-px bg-theme-invert/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                        className="h-full bg-gradient-to-r from-electric-blue to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience timeline */}
      <section className="section-padding max-w-7xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-electric-blue mb-8"
        >
          Detailed Experience
        </motion.p>
        <div className="space-y-0">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.org + exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              className="grid grid-cols-12 gap-6 py-10 border-t border-theme-invert/[0.06]"
            >
              <div className="col-span-12 md:col-span-3">
                <span className="text-xs text-mid-gray uppercase tracking-widest font-medium block mb-1">{exp.year}</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-electric-blue/10 text-electric-blue border border-electric-blue/20 inline-block">
                  {exp.type}
                </span>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-display font-semibold text-off-white text-xl">{exp.role}</h3>
                <p className="text-mid-gray text-sm mt-1 font-medium">{exp.org}</p>
                <p className="text-soft-gray text-sm mt-4 leading-relaxed max-w-2xl">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
