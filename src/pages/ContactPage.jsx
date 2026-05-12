import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem } from '../animations/variants';

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'branding',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', service: 'branding', budget: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59,130,246,0.06) 0%, transparent 60%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 pt-40 w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-electric-blue mb-4"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            className="font-display font-semibold text-off-white"
            style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '-0.03em', lineHeight: 1.05 }}
          >
            Let's create something
            <br />
            <span style={{ color: '#555' }}>extraordinary.</span>
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding max-w-7xl mx-auto px-6 md:px-10 pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 space-y-12"
          >
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-soft-gray mb-4">Email</h3>
              <a href="mailto:hello@sulaimankaif.com" className="text-xl text-off-white hover:text-electric-blue transition-colors">
                hello@sulaimankaif.com
              </a>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-soft-gray mb-4">Location</h3>
              <p className="text-lg text-off-white">
                Available worldwide
                <br />
                <span className="text-mid-gray text-base mt-1 block">Remote / Freelance</span>
              </p>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-soft-gray mb-4">Socials</h3>
              <div className="flex flex-col gap-3">
                {['Instagram', 'Behance', 'LinkedIn', 'Dribbble'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-base text-off-white hover:text-electric-blue transition-colors w-fit flex items-center gap-2 group"
                  >
                    {social}
                    <span className="text-mid-gray opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-8"
          >
            <div className="glass rounded-3xl p-8 md:p-12">
              <h2 className="font-display text-2xl font-semibold text-off-white mb-8">Send a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-wider text-soft-gray">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-theme-invert/10 px-0 py-3 text-off-white focus:outline-none focus:border-electric-blue transition-colors placeholder:text-mid-gray"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-wider text-soft-gray">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-theme-invert/10 px-0 py-3 text-off-white focus:outline-none focus:border-electric-blue transition-colors placeholder:text-mid-gray"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Service */}
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-xs uppercase tracking-wider text-soft-gray">Service</label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-theme-invert/10 px-0 py-3 text-off-white focus:outline-none focus:border-electric-blue transition-colors appearance-none cursor-pointer"
                    >
                      <option value="branding" className="bg-charcoal text-off-white">Brand Identity</option>
                      <option value="poster" className="bg-charcoal text-off-white">Poster/Flyer Design</option>
                      <option value="video" className="bg-charcoal text-off-white">Video Editing</option>
                      <option value="ai" className="bg-charcoal text-off-white">AI Creative</option>
                      <option value="social" className="bg-charcoal text-off-white">Social Media Kit</option>
                      <option value="other" className="bg-charcoal text-off-white">Other</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-xs uppercase tracking-wider text-soft-gray">Budget (Optional)</label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      value={formState.budget}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-theme-invert/10 px-0 py-3 text-off-white focus:outline-none focus:border-electric-blue transition-colors placeholder:text-mid-gray"
                      placeholder="$1k - $5k"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-wider text-soft-gray">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-theme-invert/10 px-0 py-3 text-off-white focus:outline-none focus:border-electric-blue transition-colors placeholder:text-mid-gray resize-none"
                    placeholder="Tell me about your vision..."
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-electric-blue text-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 ${
                      isSubmitting ? 'opacity-70 cursor-wait' : 'hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/25'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message →'}
                  </button>

                  {isSuccess && (
                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-green-400 text-sm"
                    >
                      Message sent successfully!
                    </motion.span>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
