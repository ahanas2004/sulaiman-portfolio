import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

let lenisInstance = null;

export const useLenis = () => {
  useEffect(() => {
    lenisInstance = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
      lenisInstance = null;
    };
  }, []);

  return lenisInstance;
};

export const getLenis = () => lenisInstance;
