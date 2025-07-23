import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface PageSectionProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  bgImage?: string;
}

const PageSection: React.FC<PageSectionProps> = ({ children, id, className, bgImage }) => {
  const sectionRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative py-20 ${className || ''}`}
    >
      {bgImage && <div className="section-bg-container" style={{ backgroundImage: `url(${bgImage})` }} />}
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: isInView ? 0 : 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-[3] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-12 border border-white/20">
          {children}
        </div>
      </motion.div>
    </section>
  );
};

export default PageSection;