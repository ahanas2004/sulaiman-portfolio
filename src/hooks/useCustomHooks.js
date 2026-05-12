import { useState, useEffect, useRef } from 'react';

// Custom cursor hook
export const useCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    };

    const animate = () => {
      outlineX += (mouseX - outlineX) * 0.12;
      outlineY += (mouseY - outlineY) * 0.12;
      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate(${outlineX}px, ${outlineY}px) translate(-50%, -50%)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    animate();

    // Hover effect on interactive elements
    const interactibles = document.querySelectorAll('a, button, [data-cursor-hover]');
    const enterHover = () => {
      if (dotRef.current) dotRef.current.style.transform += ' scale(0)';
      if (outlineRef.current) {
        outlineRef.current.style.width = '60px';
        outlineRef.current.style.height = '60px';
        outlineRef.current.style.borderColor = 'rgba(59,130,246,0.8)';
      }
    };
    const leaveHover = () => {
      if (outlineRef.current) {
        outlineRef.current.style.width = '40px';
        outlineRef.current.style.height = '40px';
        outlineRef.current.style.borderColor = 'rgba(59,130,246,0.5)';
      }
    };

    interactibles.forEach((el) => {
      el.addEventListener('mouseenter', enterHover);
      el.addEventListener('mouseleave', leaveHover);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return { dotRef, outlineRef };
};

// Scroll-based navbar background
export const useScrolled = (threshold = 80) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [threshold]);

  return scrolled;
};

// Intersection observer for reveal animations
export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
};
