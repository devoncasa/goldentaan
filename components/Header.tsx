

import React, { useState, useContext, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_ITEMS } from '../constants';
import { FiMenu, FiX, FiShoppingCart, FiChevronDown } from 'react-icons/fi';
import { LanguageContext } from '../context/LanguageContext';
import { useTranslations } from '../hooks/useTranslations';
import StyledText from './StyledText';
import { Page, MenuItem } from '../types';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  setCartOpen: (isOpen: boolean) => void;
  cartItemCount: number;
  setCurrentPage: (page: Page, anchor?: string) => void;
}

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <div className="flex items-center bg-white/50 rounded-full p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 md:px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-300 ${
          language === 'en' ? 'bg-[#a5a58d] text-white' : 'text-[#2c2c2c]/80 hover:bg-[#c39b6f]/10'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('th')}
        className={`px-2 md:px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-300 ${
          language === 'th' ? 'bg-[#a5a58d] text-white' : 'text-[#2c2c2c]/80 hover:bg-[#c39b6f]/10'
        }`}
      >
        TH
      </button>
    </div>
  );
};

const NavItem: React.FC<{ item: MenuItem; handleNavClick: (page: Page, anchor?: string) => void; className?: string }> = ({ item, handleNavClick, className }) => {
    const { t } = useTranslations();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button
                onClick={() => handleNavClick(item.to, item.anchor)}
                className={`${className} flex items-center gap-1`}
            >
                <StyledText text={t(item.name)} />
                {item.children && <FiChevronDown className={`transition-transform duration-200 ${isHovered ? 'rotate-180' : ''}`} />}
            </button>
            <AnimatePresence>
                {isHovered && item.children && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-48 bg-[#f5eee6] rounded-md shadow-lg py-1 z-50"
                    >
                        {item.children.map(child => (
                            <button
                                key={child.name}
                                onClick={() => handleNavClick(child.to, child.anchor)}
                                className="block w-full text-left px-4 py-2 text-sm text-[#2c2c2c] hover:bg-[#c39b6f]/20"
                            >
                                <StyledText text={t(child.name)} />
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const MobileNavItem: React.FC<{ item: MenuItem; handleNavClick: (page: Page, anchor?: string) => void }> = ({ item, handleNavClick }) => {
    const { t } = useTranslations();
    const [isOpen, setIsOpen] = useState(false);

    const hasChildren = item.children && item.children.length > 0;

    const handleClick = () => {
        if (hasChildren) {
            setIsOpen(!isOpen);
        } else {
            handleNavClick(item.to, item.anchor);
        }
    };
    
    return (
        <div>
            <button
                onClick={handleClick}
                className="text-[#2c2c2c] hover:text-[#c39b6f] hover:bg-[#c39b6f]/10 block w-full text-left px-3 py-2 rounded-md text-base font-medium cursor-pointer flex justify-between items-center"
            >
                <StyledText text={t(item.name)} />
                {hasChildren && <FiChevronDown className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />}
            </button>
            <AnimatePresence>
            {isOpen && hasChildren && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-4 border-l-2 border-[#c39b6f]/50 ml-3"
                >
                    {item.children.map(child => (
                        <button
                            key={child.name}
                            onClick={() => handleNavClick(child.to, child.anchor)}
                            className="text-[#2c2c2c] hover:text-[#c39b6f] hover:bg-[#c39b6f]/10 block w-full text-left px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                        >
                            <StyledText text={t(child.name)} />
                        </button>
                    ))}
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    );
};

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen, setCartOpen, cartItemCount, setCurrentPage }) => {
  const { t } = useTranslations();

  const handleNavClick = (page: Page, anchor?: string) => {
    setCurrentPage(page, anchor);
    if(isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#f5eee6]/80 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button onClick={() => handleNavClick('home')} className="cursor-pointer">
              <img 
                className="h-[50px] w-auto"
                src="https://i.postimg.cc/mrQKP5dZ/taan-logo-small.webp" 
                alt={t('header.brandName')} 
              />
            </button>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {MENU_ITEMS.map((item) => (
                <NavItem 
                    key={item.name}
                    item={item}
                    handleNavClick={handleNavClick}
                    className="text-[#2c2c2c] hover:text-[#c39b6f] px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors"
                />
              ))}
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <button onClick={() => setCartOpen(true)} className="relative p-2 rounded-full text-[#2c2c2c] hover:text-[#c39b6f] hover:bg-[#c39b6f]/10 transition-colors">
              <FiShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">{cartItemCount}</span>
              )}
            </button>
          </div>

          <div className="-mr-2 flex items-center md:hidden">
            <LanguageSwitcher />
            <button onClick={() => setCartOpen(true)} className="relative ml-2 p-2 rounded-full text-[#2c2c2c] hover:text-[#c39b6f] hover:bg-[#c39b6f]/10 transition-colors">
              <FiShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">{cartItemCount}</span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#2c2c2c] hover:text-[#c39b6f] hover:bg-[#c39b6f]/10 focus:outline-none"
            >
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {MENU_ITEMS.map((item) => (
                <MobileNavItem
                  key={item.name}
                  item={item}
                  handleNavClick={handleNavClick}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;