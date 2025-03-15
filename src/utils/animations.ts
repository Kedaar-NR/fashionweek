
import { useEffect, useState } from 'react';

export const useIntersectionObserver = (options: IntersectionObserverInit = {}) => {
  const [ref, setRef] = useState<Element | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return { ref: setRef, isIntersecting };
};

export const useScrollTrigger = (scrollThreshold: number = 200, delay: number = 1000) => {
  const [isTriggered, setIsTriggered] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (hasTriggered) return;

    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        timeoutId = setTimeout(() => {
          setIsTriggered(true);
          setHasTriggered(true);
        }, delay);
      } else {
        clearTimeout(timeoutId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [scrollThreshold, delay, hasTriggered]);

  return { isTriggered, setIsTriggered, resetTrigger: () => setHasTriggered(false) };
};

export const useLazyImage = (src: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setIsLoaded(true);
    };
  }, [src]);

  return { isLoaded, currentSrc };
};
