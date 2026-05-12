// Framer Motion animation variants – reusable across the entire site

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const fadeUpDelayed = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay },
  },
});

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
};

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
};

export const cardHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
};

export const overlayHover = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

export const imageScaleHover = {
  rest: { scale: 1 },
  hover: { scale: 1.08, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } },
};

export const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(59,130,246,0.1)',
      '0 0 40px rgba(59,130,246,0.2)',
      '0 0 20px rgba(59,130,246,0.1)',
    ],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
  },
};
