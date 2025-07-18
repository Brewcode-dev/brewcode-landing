'use client';

import { useEffect, useRef, RefObject } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}): RefObject<any> => {
  const elementRef = useRef<any>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Dynamic import GSAP
    import('gsap').then(({ gsap }) => {
      // Set initial state
      gsap.set(element, { 
        opacity: 0, 
        y: 50,
        scale: 0.95
      });

      // Create Intersection Observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(element, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: options.delay || 0,
                ease: "power2.out"
              });

              if (options.triggerOnce) {
                observer.unobserve(element);
              }
            } else if (!options.triggerOnce) {
              gsap.set(element, { 
                opacity: 0, 
                y: 50,
                scale: 0.95
              });
            }
          });
        },
        {
          threshold: options.threshold || 0.1,
          rootMargin: options.rootMargin || '0px 0px -50px 0px'
        }
      );

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    }).catch(error => {
      console.error('Failed to load GSAP:', error);
    });
  }, [options]);

  return elementRef;
};

// Specific animation hooks
export const useFadeInUp = (delay: number = 0, threshold: number = 0.1): RefObject<any> => {
  return useScrollAnimation({
    threshold: threshold,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true,
    delay: delay
  });
};

export const useFadeInLeft = (delay: number = 0): RefObject<any> => {
  const elementRef = useRef<any>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    import('gsap').then(({ gsap }) => {
      gsap.set(element, { 
        opacity: 0, 
        x: -50,
        scale: 0.95
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(element, {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.8,
                delay: delay,
                ease: "power2.out"
              });
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    });
  }, [delay]);

  return elementRef;
};

export const useFadeInRight = (delay: number = 0): RefObject<any> => {
  const elementRef = useRef<any>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    import('gsap').then(({ gsap }) => {
      gsap.set(element, { 
        opacity: 0, 
        x: 50,
        scale: 0.95
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(element, {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.8,
                delay: delay,
                ease: "power2.out"
              });
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    });
  }, [delay]);

  return elementRef;
};

export const useStaggerAnimation = (staggerDelay: number = 0.1): RefObject<any> => {
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    import('gsap').then(({ gsap }) => {
      const children = Array.from(container.children);
      
      gsap.set(children, { 
        opacity: 0, 
        y: 30,
        scale: 0.95
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(children, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: staggerDelay,
                ease: "power2.out"
              });
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      observer.observe(container);

      return () => {
        observer.unobserve(container);
      };
    });
  }, [staggerDelay]);

  return containerRef;
};

export const useScaleAnimation = (): RefObject<any> => {
  const elementRef = useRef<any>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    import('gsap').then(({ gsap }) => {
      gsap.set(element, { 
        opacity: 0, 
        scale: 0.8
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(element, {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "back.out(1.7)"
              });
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      observer.observe(element);

      return () => {
        observer.unobserve(element);
      };
    });
  }, []);

  return elementRef;
}; 