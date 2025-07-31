import React, { useRef } from 'react';
import { motion, useInView, useSpring, useTransform, Variants } from 'framer-motion';
import { useTranslations } from '../hooks/useTranslations';
import StyledText from './StyledText';
import { FiTrendingUp, FiUsers, FiClock, FiGlobe } from 'react-icons/fi';

// Animated counter component
const AnimatedCounter: React.FC<{ value: string }> = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  // Initialize with 0 and let the spring animation handle the rest
  const spring = useSpring(0, { duration: 2000, stiffness: 100, damping: 30 });

  React.useEffect(() => {
    if (isInView) {
      // Set the target value when the component is in view
      spring.set(parseInt(value.replace('+', ''), 10));
    }
  }, [isInView, spring, value]);

  // Transform the spring value to a rounded integer for display
  const rounded = useTransform(spring, latest => Math.round(latest));

  return (
    <div ref={ref}>
      <motion.span>{rounded}</motion.span>
      {value.includes('+') && '+'}
    </div>
  );
};


const JourneyInfographic: React.FC = () => {
  const { t } = useTranslations();
  const sections: { icon: keyof typeof iconMap; title: string; content: string; stat: { value: string; label: string; } }[] = t('journeyInfographic.sections');
  
  const iconMap = {
    'heritage': <FiTrendingUp className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    'community': <FiUsers className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    'craft': <FiClock className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    'global': <FiGlobe className="w-8 h-8 md:w-10 md:h-10 text-white" />
  };

  if (!sections || sections.length === 0) {
    return null;
  }
  
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          <StyledText text={t('journeyInfographic.title')} />
        </h2>
        <p className="text-lg text-[#2c2c2c]/80 max-w-3xl mx-auto">
          <StyledText text={t('journeyInfographic.subtitle')} />
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        {/* The timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-1 bg-[#c39b6f]/30 rounded-full -translate-x-1/2" aria-hidden="true"></div>

        <motion.div
            className="space-y-12 md:space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          {sections.map((section, index) => (
            <motion.div 
              key={index} 
              className="relative flex items-start pl-12 md:pl-24"
              variants={itemVariants}
            >
              {/* Timeline Dot and Icon */}
              <div className="absolute left-4 md:left-8 top-0 -translate-x-1/2 flex-shrink-0 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[#c39b6f] border-4 border-[#f5eee6] z-10 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="hidden md:flex mt-8 w-20 h-20 rounded-full bg-[#a5a58d] items-center justify-center shadow-lg">
                  {iconMap[section.icon]}
                </div>
              </div>

              {/* Content Card */}
              <div className="w-full bg-white/70 p-6 rounded-lg shadow-lg border border-gray-200">
                  <div className="md:flex justify-between items-start">
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-[#c39b6f] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                        <StyledText text={section.title} />
                      </h3>
                      <p className="text-[#2c2c2c] leading-relaxed">
                        <StyledText text={section.content} />
                      </p>
                    </div>
                    <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-6 text-center">
                        <div className="text-5xl font-black text-[#a5a58d]">
                          <AnimatedCounter value={section.stat.value} />
                        </div>
                        <p className="text-sm font-semibold text-[#2c2c2c]/80 uppercase tracking-wider">
                          <StyledText text={section.stat.label} />
                        </p>
                    </div>
                  </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default JourneyInfographic;