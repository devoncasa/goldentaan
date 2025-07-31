
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus, FiExternalLink } from 'react-icons/fi';
import { Recipe, Page } from '../types';
import StyledText from './StyledText';
import { useTranslations } from '../hooks/useTranslations';

interface RecipeCardProps {
  recipe: Recipe;
  isOpen: boolean;
  onClick: () => void;
  setCurrentPage: (page: Page) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, isOpen, onClick, setCurrentPage }) => {
  const { t } = useTranslations();

  return (
    <div className="border-b border-[#c39b6f]/30">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-5"
        aria-expanded={isOpen}
      >
        <div className="flex items-center space-x-4">
            <img src={recipe.image} alt={recipe.alt} className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg border-2 border-[#c39b6f]" />
            <span className="text-lg font-bold text-[#2c2c2c]"><StyledText text={recipe.name} /></span>
        </div>
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
            <div className="pl-4 md:pl-24 pr-8 text-[#2c2c2c] leading-relaxed">
              <p className="mb-6 italic"><StyledText text={recipe.description} /></p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <h4 className="font-bold text-[#c39b6f] mb-2">Ingredients</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {recipe.recipeIngredient.map((ing, i) => <li key={i}><StyledText text={ing} /></li>)}
                  </ul>
                  <button 
                    onClick={() => setCurrentPage('products')}
                    className="mt-4 text-sm bg-[#a5a58d] text-white font-semibold py-2 px-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-[#8f8f74] transition-colors"
                  >
                    <span>View Product</span>
                    <FiExternalLink />
                  </button>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-bold text-[#c39b6f] mb-2">Instructions</h4>
                  <div className="space-y-4 text-sm">
                    {recipe.recipeInstructions.map((step, i) => (
                      <div key={i}>
                        <p className="font-semibold"><StyledText text={step.name} /></p>
                        <p><StyledText text={step.text} /></p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RecipeCard;
