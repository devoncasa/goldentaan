

import React, { useState, useCallback, useRef, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import LiveChatButton from './components/LiveChatButton';
import MetaTagManager from './components/MetaTagManager';
import SchemaMarkup from './components/SchemaMarkup';
import StyledText from './components/StyledText';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import CommunityPage from './pages/CommunityPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';
import RecipesPage from './pages/RecipesPage';
import BenefitsPage from './pages/BenefitsPage';
import CompareSugarsPage from './pages/CompareSugarsPage';
import { BACKGROUND_IMAGES, PRODUCTS_DATA, RECIPES_DATA_KEYS } from './constants';
import { Product, CartItem, Page, Recipe } from './types';
import { useTranslations } from './hooks/useTranslations';

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};


const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const { t, isLoading } = useTranslations();
    const [backgrounds, setBackgrounds] = useState<string[]>([]);
    const [currentPage, setCurrentPageInternal] = useState<Page>('home');

    useEffect(() => {
        setBackgrounds(shuffleArray(BACKGROUND_IMAGES));
    }, []);

    const setCurrentPage = (page: Page, anchor?: string) => {
        setCurrentPageInternal(page);
        // Use a timeout to ensure the page component has rendered before trying to scroll
        setTimeout(() => {
            if (anchor) {
                const element = document.getElementById(anchor);
                if (element) {
                    const headerOffset = 80; // height of the fixed header
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            } else {
                window.scrollTo(0, 0); // Scroll to top on page change
            }
        }, 100);
    };

    const addToCart = useCallback((product: Product) => {
        setCartItems(prevItems => {
            const exist = prevItems.find(item => item.id === product.id);
            if (exist) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
        setCartOpen(true);
    }, []);
    
    const requestQuote = useCallback((product: Product) => {
        setCurrentPage('contact');
        // Small timeout to allow page to render before scrolling
        setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
            alert(`Requesting a quote for: ${product.title}`);
        }, 100);
    }, []);

    const removeFromCart = useCallback((id: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    }, []);
    
    const updateQuantity = useCallback((id: number, quantity: number) => {
        if (quantity < 1) {
            removeFromCart(id);
            return;
        }
        setCartItems(prevItems => prevItems.map(item => item.id === id ? {...item, quantity: quantity} : item));
    }, [removeFromCart]);
    
    const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
    
    if (isLoading) {
        return (
            <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#f5eee6] text-[#c39b6f]">
                 <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#a5a58d]"></div>
                 <h1 className="text-2xl font-semibold mt-4"><StyledText text={t('loadingMessage')} /></h1>
            </div>
        );
    }

    const translatedProducts = PRODUCTS_DATA.map(({ key, ...product }) => ({
        ...product,
        title: t(`${key}.title`),
        alt: t(`${key}.alt`),
        description: t(`${key}.description`),
        targetUsers: t(`${key}.targetUsers`),
        usp: t(`${key}.usp`),
        market: t(`${key}.market`),
    }));
    
    const translatedRecipes: Recipe[] = RECIPES_DATA_KEYS.map(recipeKey => ({
        ...recipeKey,
        ...t(recipeKey.key)
    }));

    const renderPage = () => {
        const pageProps = {
            backgrounds,
            translatedProducts,
            translatedRecipes,
            addToCart,
            requestQuote,
            setCurrentPage,
        };
        switch(currentPage) {
            case 'home': return <HomePage {...pageProps} />;
            case 'products': return <ProductsPage {...pageProps} />;
            case 'about': return <AboutPage {...pageProps} />;
            case 'community': return <CommunityPage {...pageProps} />;
            case 'faq': return <FaqPage {...pageProps} />;
            case 'contact': return <ContactPage {...pageProps} />;
            case 'recipes': return <RecipesPage {...pageProps} />;
            case 'benefits': return <BenefitsPage {...pageProps} />;
            case 'compare-sugars': return <CompareSugarsPage {...pageProps} />;
            default: return <HomePage {...pageProps} />;
        }
    }

    return (
        <div className="bg-transparent text-[#2c2c2c]">
            <MetaTagManager />
            <SchemaMarkup products={translatedProducts} />
            <Header 
                isMenuOpen={isMenuOpen} 
                setIsMenuOpen={setIsMenuOpen} 
                setCartOpen={setCartOpen} 
                cartItemCount={cartItemCount}
                setCurrentPage={setCurrentPage}
            />
            <Cart isOpen={isCartOpen} setIsOpen={setCartOpen} cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity}/>
            <LiveChatButton />
            
            {renderPage()}
            
            <Footer />
        </div>
    );
};

export default App;