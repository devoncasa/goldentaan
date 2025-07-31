

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface AccordionItemProps {
  title: React.ReactNode;
  image?: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, image, children, isOpen, onClick }) => {
  return (
    <div className="border-b border-[#c39b6f]/30">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-5"
        aria-expanded={isOpen}
      >
        <span className="text-xl font-bold text-[#2c2c2c]">{title}</span>
        <div className="text-[#c39b6f] flex-shrink-0 ml-4">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isOpen ? 'minus' : 'plus'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <FiMinus size={24} /> : <FiPlus size={24} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto', marginBottom: '1.5rem' },
              collapsed: { opacity: 0, height: 0, marginBottom: '0rem' },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
            aria-hidden={!isOpen}
          >
            <div className="text-[#2c2c2c] leading-relaxed pr-8">
               {image ? (
                <div className="md:flex md:space-x-8 items-start">
                  <div className="md:w-1/3 mb-4 md:mb-0 flex-shrink-0">
                    <img src={image} alt={typeof title === 'string' ? title : 'Accordion image'} className="rounded-lg shadow-md w-full object-cover border-2 border-[#c39b6f]" />
                  </div>
                  <div className="md:w-2/3">
                    {children}
                  </div>
                </div>
              ) : (
                children
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
    items: {
        title: React.ReactNode;
        content: React.ReactNode;
        image?: string;
    }[];
    defaultOpenIndex?: number | null;
}

const Accordion: React.FC<AccordionProps> = ({ items, defaultOpenIndex = null }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    image={item.image}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};

export default Accordion;