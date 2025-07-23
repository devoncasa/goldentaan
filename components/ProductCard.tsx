
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { FiPlus, FiSend } from 'react-icons/fi';
import { useTranslations } from '../hooks/useTranslations';
import StyledText from './StyledText';
import { formatCurrency } from '../utils/formatting';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuoteRequest: (product: Product) => void;
  flippedCardId: number | null;
  setFlippedCardId: (id: number | null) => void;
  isHighlighted?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onQuoteRequest, flippedCardId, setFlippedCardId, isHighlighted }) => {
  const { t, language } = useTranslations();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isFlipped = flippedCardId === product.id;

  const handleActionClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation();
    action();
  };

  const handleMouseEnter = () => {
    if (isDesktop) {
        setFlippedCardId(product.id);
    }
  };

  const handleMouseLeave = () => {
      if (isDesktop) {
          setFlippedCardId(null);
      }
  };

  const handleClick = () => {
      if (!isDesktop) {
          setFlippedCardId(isFlipped ? null : product.id);
      }
  };

  const moreInfoTextKey = isDesktop ? 'products.card.moreInfoHover' : 'products.card.moreInfoClick';

  return (
    <div 
        className={`w-full h-[450px] [perspective:1000px] group transition-all duration-300 ease-in-out ${isHighlighted ? 'scale-105 shadow-2xl' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        aria-label={t('products.card.ariaMoreInfo', { title: product.title })}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full [backface-visibility:hidden] bg-[#FDFBF5] rounded-lg shadow-xl flex flex-col items-center justify-between p-4 text-center cursor-pointer">
            <div className="w-full">
                <img src={product.image} alt={product.alt} className="w-full h-56 object-cover rounded-md border-2 border-[#A0522D]" />
                <h3 className="text-base font-bold text-[#3D2B1F] mt-4 h-12 flex items-center justify-center"><StyledText text={product.title} /></h3>
            </div>
            <div className="text-xs text-[#3D2B1F]/80 mt-2">
                <StyledText text={t(moreInfoTextKey)} />
            </div>
        </div>
        
        {/* Back Side */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#FDFBF5] rounded-lg shadow-xl flex flex-col p-4 text-left overflow-y-auto cursor-default">
            <div className="flex-grow">
                 <h3 className="text-base font-bold text-[#A0522D] mb-2"><StyledText text={product.title} /></h3>
                 <p className="text-sm text-[#3D2B1F] mb-2"><StyledText text={product.description} /></p>
                
                <div className="space-y-1 text-xs text-[#3D2B1F]">
                    <div>
                        <strong className="font-semibold text-[#A0522D] block"><StyledText text={t('products.card.targetUsers')} /></strong>
                        <p><StyledText text={product.targetUsers} /></p>
                    </div>
                     <div>
                        <strong className="font-semibold text-[#A0522D] block"><StyledText text={t('products.card.usp')} /></strong>
                         <p><StyledText text={product.usp} /></p>
                    </div>
                     <div>
                        <strong className="font-semibold text-[#A0522D] block"><StyledText text={t('products.card.market')} /></strong>
                         <p><StyledText text={product.market} /></p>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex-shrink-0">
                {product.isQuote ? (
                  <button 
                    onClick={(e) => handleActionClick(e, () => onQuoteRequest(product))}
                    className="w-full bg-[#556B2F] text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-[#4A5D29] transition-colors text-sm"
                    aria-label={t('products.card.ariaRequestQuote', { title: product.title })}
                  >
                    <FiSend />
                    <StyledText as="span" text={t('products.card.requestQuote')} />
                  </button>
                ) : (
                  <button 
                    onClick={(e) => handleActionClick(e, () => onAddToCart(product))}
                    className="w-full bg-[#556B2F] text-white font-bold py-2 px-4 rounded-lg flex items-center justify-between hover:bg-[#4A5D29] transition-colors text-sm"
                    aria-label={t('products.card.ariaAddToCart', { title: product.title, price: formatCurrency(product.price, language) })}
                  >
                    <span className="flex items-center">
                        <FiPlus className="mr-2"/>
                        <StyledText as="span" text={t('products.card.addToCart')} />
                    </span>
                    <span className="font-normal">{formatCurrency(product.price, language)}</span>
                  </button>
                )}
            </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductCard;