
import { RefObject, useEffect, useCallback } from 'react';

export const useParallax = (sectionRef: RefObject<HTMLElement>, bgRef: RefObject<HTMLDivElement>) => {
  const applyParallax = useCallback(() => {
    // Disable on mobile for performance
    if (window.innerWidth < 768) {
        if(bgRef.current) bgRef.current.style.transform = `translateY(0px)`;
        return;
    }

    if (sectionRef.current && bgRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Speed of parallax. 0.5 means it moves at half the scroll speed.
        const speed = 0.5;

        // Only animate if the section is in the viewport for performance.
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            // Calculate the vertical position.
            const yPos = -rect.top * speed;
            bgRef.current.style.transform = `translateY(${yPos}px)`;
        }
    }
  }, [sectionRef, bgRef]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
            applyParallax();
            ticking = false;
        });
        ticking = true;
      }
    };
    
    // The user explicitly requested waiting for window.onload.
    const handleLoad = () => {
        applyParallax(); // Set initial position on load.
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
    };
    
    // If the page is already loaded, run immediately. Otherwise, wait for 'load' event.
    if (document.readyState === 'complete') {
        handleLoad();
    } else {
        window.addEventListener('load', handleLoad);
    }
    
    // Cleanup listeners on component unmount.
    return () => {
        window.removeEventListener('load', handleLoad);
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
    };
  }, [applyParallax]);
};
