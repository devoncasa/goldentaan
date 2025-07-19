
import React, { useRef, useState, useEffect } from 'react';
import { SECTION_BACKGROUND_IMAGES } from '../constants';

interface ParallaxSectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  animationDirection: 'left' | 'right';
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, id, className, animationDirection }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [bgImage, setBgImage] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * SECTION_BACKGROUND_IMAGES.length);
    setBgImage(SECTION_BACKGROUND_IMAGES[randomIndex]);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Animate only once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative py-20 md:py-32 overflow-hidden ${className || ''}`}
    >
      <div
        className="parallax-bg absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-white/60" />
      </div>
      <div className="absolute inset-0 z-0 filter backdrop-blur-[8px]" />
      
      <div
        className={`relative z-10 content-animate from-${animationDirection} ${isVisible ? 'is-visible' : ''}`}
      >
        {children}
      </div>
    </section>
  );
};

export default ParallaxSection;