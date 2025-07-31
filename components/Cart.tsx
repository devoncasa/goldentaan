

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiTrash2 } from 'react-icons/fi';
import { CartItem } from '../types';
import { useTranslations } from '../hooks/useTranslations';
import StyledText from './StyledText';
import { formatCurrency } from '../utils/formatting';

interface CartProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  cartItems: CartItem[];
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, setIsOpen, cartItems, removeFromCart, updateQuantity }) => {
  const { t, language } = useTranslations();
  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const cartVariants = {
    visible: { x: 0 },
    hidden: { x: '100%' },
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="absolute inset-0 bg-black/50"
            variants={backdropVariants}
            onClick={() => setIsOpen(false)}
          ></motion.div>
          
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#f5eee6] shadow-2xl flex flex-col"
            variants={cartVariants}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center justify-between p-6 border-b border-stone-300">
              <h2 className="text-2xl font-bold text-[#2c2c2c]"><StyledText text={t('cart.title')} /></h2>
              <button onClick={() => setIsOpen(false)} className="p-2 rounded-full hover:bg-[#c39b6f]/10">
                <FiX className="h-6 w-6 text-[#2c2c2c]/80" />
              </button>
            </div>

            <div className="flex-grow p-6 overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="text-center text-[#2c2c2c]/80 mt-20">
                  <p><StyledText text={t('cart.empty')} /></p>
                  <button onClick={() => setIsOpen(false)} className="mt-4 text-[#c39b6f] font-semibold hover:underline">
                    <StyledText text={t('cart.continueShopping')} />
                  </button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {cartItems.map(item => (
                    <li key={item.id} className="flex items-start space-x-4">
                      <img src={item.image} alt={item.title} className="w-20 h-20 rounded-lg object-cover border-2 border-[#c39b6f]" />
                      <div className="flex-grow">
                        <h3 className="font-semibold text-[#2c2c2c]"><StyledText text={item.title} /></h3>
                        <p className="text-sm text-[#2c2c2c]/80">{formatCurrency(item.price, language)}</p>
                        <div className="flex items-center mt-2">
                          <input 
                            type="number" 
                            value={item.quantity}
                            min="1"
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                            className="w-16 p-1 border rounded-md text-center"
                          />
                        </div>
                      </div>
                      <div className="text-right">
                         <p className="font-bold text-[#2c2c2c]">{formatCurrency(item.price * item.quantity, language)}</p>
                         <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 mt-2">
                           <FiTrash2 />
                         </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t border-stone-300">
                <div className="flex justify-between items-center font-bold text-xl">
                  <span><StyledText text={t('cart.total')} /></span>
                  <span>{formatCurrency(total, language)}</span>
                </div>
                <button className="w-full mt-4 bg-[#a5a58d] text-white py-3 rounded-lg font-bold hover:bg-[#8f8f74] transition-colors">
                  <StyledText text={t('cart.checkout')} />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;