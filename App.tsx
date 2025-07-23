
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import LiveChatButton from './components/LiveChatButton';
import Accordion from './components/Accordion';
import JourneyInfographic from './components/JourneyInfographic';
import FaqTable from './components/FaqTable';
import MetaTagManager from './components/MetaTagManager';
import SchemaMarkup from './components/SchemaMarkup';
import StyledText from './components/StyledText';
import PageSection from './components/ParallaxSection'; // Renamed to PageSection conceptually
import CommunityImpactCard from './components/CommunityImpactCard';
import { PRODUCTS_DATA, FAQ_DATA, RECIPES_DATA_KEYS, BACKGROUND_IMAGES } from './constants';
import { Product, CartItem, Recipe } from './types';
import { FiChevronDown, FiMail, FiPhone, FiMapPin, FiArrowRight, FiCheck, FiStar } from 'react-icons/fi';
import { useTranslations } from './hooks/useTranslations';

const FAQItem: React.FC<{ faqData: any; index: number }> = ({ faqData, index }) => {
    const [isOpen, setIsOpen] = useState(index === 0);
    const { t } = useTranslations();

    return (
        <div className="border-b border-[#A0522D]/20 py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-[#3D2B1F]"
            >
                <StyledText as="span" text={faqData.question} />
                <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                    <FiChevronDown />
                </motion.div>
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0, marginTop: isOpen ? '1rem' : '0rem' }}
                className="overflow-hidden"
            >
                <div className="text-[#3D2B1F] leading-relaxed pt-4 whitespace-pre-line">{faqData.answerIsTable ? <FaqTable /> : <StyledText text={faqData.answer} />}</div>
            </motion.div>
        </div>
    );
};

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
    const [flippedCardId, setFlippedCardId] = useState<number | null>(null);
    const [highlightedProductId, setHighlightedProductId] = useState<number | null>(null);
    const { t, isLoading } = useTranslations();
    const [backgrounds, setBackgrounds] = useState<string[]>([]);

    useEffect(() => {
        setBackgrounds(shuffleArray(BACKGROUND_IMAGES));
    }, []);

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
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        alert(`Requesting a quote for: ${product.title}`);
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
    
    const palmyraPalmAccordionItems = [
        { image: "https://i.postimg.cc/kXg20sL0/borassus-flabellifer-illustration.png", key: '1' },
        { image: "https://i.postimg.cc/8zQJtV5M/terroir-of-ratchaburi.jpg", key: '2' },
        { image: "https://i.postimg.cc/bNkTg4sV/tree-of-life-historical.jpg", key: '3' }
    ].map(item => ({...item, title: <StyledText text={t(`ourStory.palmyraPalm.items.${item.key}.title`)} />, content: <StyledText text={t(`ourStory.palmyraPalm.items.${item.key}.content`)} /> }));

    const harvestArtAccordionItems = [
        { image: "https://i.postimg.cc/0jWvM7Nn/farmer-climbing-palm-tree.jpg", key: '1' },
        { image: "https://i.postimg.cc/VLzJ7GzP/science-of-simmering.jpg", key: '2' },
        { image: "https://i.postimg.cc/prgQdYvV/nectar-to-crystal.jpg", key: '3' }
    ].map(item => ({ ...item, title: <StyledText text={t(`ourStory.harvestArt.items.${item.key}.title`)} />, content: <StyledText text={t(`ourStory.harvestArt.items.${item.key}.content`)} /> }));

    const commitmentAccordionItems = [
        { image: "https://i.postimg.cc/50tZ8Jp2/ecological-sustainability.jpg", key: '1' },
        { image: "https://i.postimg.cc/Wb7SgDkj/ratchaburi-farming-community.jpg", key: '2' },
        { image: "https://i.postimg.cc/XvjL1ZHy/purity-quality-assurance.jpg", key: '3' },
    ].map(item => ({ ...item, title: <StyledText text={t(`ourStory.commitment.items.${item.key}.title`)} />, content: <StyledText text={t(`ourStory.commitment.items.${item.key}.content`)} /> }));
    
    const healthBenefitsAccordionItems = [
        { image: "https://i.postimg.cc/J0P5zKcg/low-glycemic-index.jpg", key: '1' },
        { image: "https://i.postimg.cc/9M3g0x7r/rich-in-minerals.jpg", key: '2' },
        { image: "https://i.postimg.cc/44rY4M9W/natural-electrolytes.jpg", key: '3' },
        { image: "https://i.postimg.cc/pT3Y3g4J/clean-label-promise.jpg", key: '4' }
    ].map(item => ({ ...item, title: <StyledText text={t(`benefits.items.${item.key}.title`)} />, content: <StyledText text={t(`benefits.items.${item.key}.content`)} /> }));


    if (isLoading) {
        return (
            <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#FAF9F6] text-[#A0522D]">
                 <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#556B2F]"></div>
                 <h1 className="text-2xl font-semibold mt-4"><StyledText text={t('loadingMessage')} /></h1>
            </div>
        );
    }

    const translatedProducts = PRODUCTS_DATA.map(product => ({
        ...product,
        title: t(`${product.key}.title`),
        alt: t(`${product.key}.alt`),
        description: t(`${product.key}.description`),
        targetUsers: t(`${product.key}.targetUsers`),
        usp: t(`${product.key}.usp`),
        market: t(`${product.key}.market`),
    }));

    const translatedFaqs = Object.values(t('faq.items'));

    const translatedRecipes: (Recipe & { productId: number })[] = RECIPES_DATA_KEYS.map(recipe => ({
        ...recipe, // contains image, key, productId
        ...t(recipe.key) // contains name, alt, description, etc.
    }));

    const AuthorBio = () => (
        <div className="mt-12 pt-6 border-t border-[#A0522D]/20 text-center">
            <p className="text-sm italic text-[#3D2B1F]/80">
                <StyledText text={t('ourStory.authorBio')} />
            </p>
        </div>
    );

    return (
        <div className="bg-transparent text-[#3D2B1F]">
            <MetaTagManager />
            <SchemaMarkup products={translatedProducts} />
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setCartOpen={setCartOpen} cartItemCount={cartItemCount} />
            <Cart isOpen={isCartOpen} setIsOpen={setCartOpen} cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity}/>
            <LiveChatButton />
            
            <main>
                <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
                    {backgrounds[0] && <div className="section-bg-container" style={{ backgroundImage: `url(${backgrounds[0]})` }} />}
                    <div className="absolute inset-0 bg-white/20 z-[2]" />
                    <div className="relative z-[3] bg-white/50 backdrop-blur-sm border-2 border-[#A0522D] rounded-xl shadow-2xl p-8 md:p-12 text-center max-w-4xl mx-4">
                        <img 
                            src="https://i.postimg.cc/mrQKP5dZ/taan-logo-small.webp" 
                            alt={t('header.brandName')}
                            className="h-20 w-auto mx-auto mb-6"
                        />
                        <h1 className="text-4xl md:text-5xl font-bold" style={{color: '#3D2B1F'}}>
                            <StyledText text={t('hero.title')} />
                        </h1>
                        <p className="mt-4 text-xl md:text-2xl font-medium" style={{color: '#B87333'}}>
                            <StyledText text={t('hero.subtitle')} />
                        </p>
                        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto" style={{color: '#3D2B1F'}}>
                            <StyledText text={t('hero.intro')} />
                        </p>
                        <a href="#products" className="mt-8 inline-block bg-[#556B2F] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#4A5D29] transition-colors cursor-pointer transform hover:scale-105 shadow-xl">
                            <StyledText text={t('hero.button')} />
                        </a>
                    </div>
                </section>
                
                 <>
                    <PageSection id="why-choose-us" bgImage={backgrounds[1]}>
                        <div className="text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#3D2B1F]"><StyledText text={t('whyChoose.title')} /></h2>
                        </div>
                        <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                        {Object.values(t('whyChoose.items')).map((item: any, index: number) => (
                            <div key={index} className="text-center">
                            <div className="text-5xl mb-4 inline-block">{item.icon}</div>
                            <h3 className="text-xl font-bold text-[#3D2B1F]"><StyledText text={item.title} /></h3>
                            <p className="mt-2 text-[#3D2B1F]"><StyledText text={item.text} /></p>
                            </div>
                        ))}
                        </div>
                    </PageSection>
                    
                    <JourneyInfographic bgImage={backgrounds[2]} />

                    {/* --- OUR STORY START --- */}
                    <PageSection id="legacy" bgImage={backgrounds[3]}>
                        <div className="text-center mb-8">
                        <img src="https://i.postimg.cc/T3YjD6gQ/golden-taan-legacy-intro.jpg" alt={t('ourStory.legacy.title')} className="w-full h-64 object-cover rounded-lg shadow-md border-2 border-[#A0522D]" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#3D2B1F] whitespace-pre-line leading-normal"><StyledText text={t('ourStory.legacy.title')} /></h2>
                        <p className="mt-4 text-lg md:text-xl text-[#3D2B1F]"><StyledText text={t('ourStory.legacy.subtitle')} /></p>
                    </div>
                    
                    <div className="mt-12 text-left space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-[#A0522D] mb-3"><StyledText text={t('ourStory.legacy.rootsTitle')} /></h3>
                            <p className="text-[#3D2B1F] leading-relaxed"><StyledText text={t('ourStory.legacy.rootsText')} /></p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#A0522D] mb-3"><StyledText text={t('ourStory.legacy.harvestTitle')} /></h3>
                            <p className="text-[#3D2B1F] leading-relaxed"><StyledText text={t('ourStory.legacy.harvestText')} /></p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#A0522D] mb-3"><StyledText text={t('ourStory.legacy.promiseTitle')} /></h3>
                            <p className="text-[#3D2B1F] leading-relaxed"><StyledText text={t('ourStory.legacy.promiseText')} /></p>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <a href="#palmyra-palm" className="group text-center p-4 cursor-pointer">
                            <h4 className="font-bold text-[#A0522D] group-hover:underline"><StyledText text={t('ourStory.legacy.link1')} /></h4>
                            <FiArrowRight className="mx-auto mt-2 text-[#A0522D]/70"/>
                        </a>
                        <a href="#harvest-art" className="group text-center p-4 cursor-pointer">
                            <h4 className="font-bold text-[#A0522D] group-hover:underline"><StyledText text={t('ourStory.legacy.link2')} /></h4>
                            <FiArrowRight className="mx-auto mt-2 text-[#A0522D]/70"/>
                        </a>
                        <a href="#commitment" className="group text-center p-4 cursor-pointer">
                            <h4 className="font-bold text-[#A0522D] group-hover:underline"><StyledText text={t('ourStory.legacy.link3')} /></h4>
                            <FiArrowRight className="mx-auto mt-2 text-[#A0522D]/70"/>
                        </a>
                    </div>
                    </PageSection>

                    <PageSection id="palmyra-palm" bgImage={backgrounds[4]}>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#3D2B1F]"><StyledText text={t('ourStory.palmyraPalm.title')} /></h2>
                            <p className="mt-4 text-lg md:text-xl text-[#3D2B1F]">
                                <StyledText text={t('ourStory.palmyraPalm.subtitle')} />
                            </p>
                            <div className="mt-8 mx-auto w-24 h-1 bg-[#A0522D]/30 rounded-full" />
                        </div>
                        <Accordion items={palmyraPalmAccordionItems} defaultOpenIndex={0} />
                    </PageSection>
                    
                    <PageSection id="harvest-art" bgImage={backgrounds[5]}>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#3D2B1F]"><StyledText text={t('ourStory.harvestArt.title')} /></h2>
                            <p className="mt-4 text-lg md:text-xl text-[#3D2B1F]"><StyledText text={t('ourStory.harvestArt.subtitle')} /></p>
                        </div>
                        <Accordion items={harvestArtAccordionItems} defaultOpenIndex={0} />
                    </PageSection>

                    <PageSection id="commitment" bgImage={backgrounds[6]}>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#3D2B1F]"><StyledText text={t('ourStory.commitment.title')} /></h2>
                            <p className="mt-4 text-lg md:text-xl text-[#3D2B1F]"><StyledText text={t('ourStory.commitment.subtitle')} /></p>
                        </div>
                        <Accordion items={commitmentAccordionItems} defaultOpenIndex={0} />
                        <AuthorBio />
                    </PageSection>

                    <PageSection id="community" bgImage={backgrounds[7]}>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#3D2B1F]"><StyledText text={t('ourStory.communityImpact.title')} /></h2>
                            <p className="mt-4 text-lg md:text-xl text-[#3D2B1F] max-w-3xl mx-auto">
                                <StyledText text={t('ourStory.communityImpact.subtitle')} />
                            </p>
                        </div>
                        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {t('ourStory.communityImpact.items').map((item: any, index: number) => (
                                <CommunityImpactCard
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                    text={item.text}
                                />
                            ))}
                        </div>
                        <AuthorBio />
                    </PageSection>
                    {/* --- OUR STORY END --- */}

                    <PageSection id="products" bgImage={backgrounds[8]}>
                        <div className="text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#3D2B1F]"><StyledText text={t('products.title')} /></h2>
                            <p className="mt-4 text-lg text-[#3D2B1F]"><StyledText text={t('products.subtitle')} /></p>
                        </div>
                        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                            {translatedProducts.map((product) => (
                                <ProductCard 
                                    key={product.id} 
                                    product={product} 
                                    onAddToCart={addToCart} 
                                    onQuoteRequest={requestQuote}
                                    flippedCardId={flippedCardId}
                                    setFlippedCardId={setFlippedCardId}
                                    isHighlighted={product.id === highlightedProductId}
                                />
                            ))}
                        </div>
                    </PageSection>
                    
                    <PageSection id="benefits" bgImage={backgrounds[9]}>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#3D2B1F]"><StyledText text={t('benefits.title')} /></h2>
                            <p className="mt-4 text-lg text-[#3D2B1F]"><StyledText text={t('benefits.subtitle')} /></p>
                        </div>
                        <Accordion items={healthBenefitsAccordionItems} defaultOpenIndex={0} />
                        <AuthorBio />
                    </PageSection>
                    
                    <PageSection id="recipes" bgImage={backgrounds[10]}>
                        <div className="text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#3D2B1F]"><StyledText text={t('recipes.title')} /></h2>
                            <p className="mt-4 text-lg text-[#3D2B1F]"><StyledText text={t('recipes.subtitle')} /></p>
                        </div>
                        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {translatedRecipes.map(recipe => (
                            <div 
                                key={recipe.key}
                                className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 border-2 border-[#A0522D] flex flex-col"
                                onMouseEnter={() => setHighlightedProductId(recipe.productId)}
                                onMouseLeave={() => setHighlightedProductId(null)}
                            >
                                <div className="overflow-hidden">
                                <img src={recipe.image} alt={recipe.alt} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"/>
                                </div>
                                <div className="p-6 text-left flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold text-[#3D2B1F]"><StyledText text={recipe.name} /></h3>
                                    <div className="flex-grow">
                                        <p className="mt-2 text-sm text-[#3D2B1F]"><StyledText text={recipe.description} /></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                        <div className="mt-16 pt-12 border-t border-[#A0522D]/20">
                            <h3 className="text-center text-3xl font-bold text-[#3D2B1F]"><StyledText text={t('recipes.globalPairings.title')} /></h3>
                            <div className="mt-8 grid md:grid-cols-3 gap-8 text-center">
                                {t('recipes.globalPairings.items').map((item: any, index: number) => (
                                    <div key={index} className="bg-[#A0522D]/5 p-6 rounded-lg">
                                        <div className="text-4xl mb-3">
                                            { index === 0 ? '🍮' : index === 1 ? '🍖' : '🍦'}
                                        </div>
                                        <h4 className="font-bold text-lg text-[#A0522D]"><StyledText text={item.title} /></h4>
                                        <p className="mt-2 text-sm text-[#3D2B1F]"><StyledText text={item.text} /></p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </PageSection>

                    <PageSection id="faq" bgImage={backgrounds[11]}>
                        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#3D2B1F]"><StyledText text={t('faq.title')} /></h2>
                        <div className="mt-12">
                            {translatedFaqs.map((faq, index) => (
                                <FAQItem key={index} faqData={faq} index={index} />
                            ))}
                        </div>
                    </PageSection>

                    <PageSection id="partnership" bgImage={backgrounds[12]}>
                        <div className="text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#3D2B1F]"><StyledText text={t('partnership.title')} /></h2>
                            <p className="mt-6 text-lg text-[#3D2B1F] max-w-2xl mx-auto"><StyledText text={t('partnership.content')} /></p>
                            <a href="#contact" className="mt-8 inline-block bg-[#556B2F] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#4A5D29] transition-colors cursor-pointer transform hover:scale-105 shadow-xl">
                                <StyledText text={t('partnership.button')} />
                            </a>
                        </div>
                        <div className="mt-12">
                            <h3 className="text-center text-xl font-semibold text-[#3D2B1F]"><StyledText text={t('partnership.formatsTitle')} /></h3>
                            <div className="mt-4 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[#3D2B1F]">
                                {t('partnership.formats').map((format: string) => (
                                    <div key={format} className="flex items-center space-x-2">
                                        <FiCheck className="text-[#556B2F]"/>
                                        <span><StyledText text={format} /></span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-[#A0522D]/20 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-[#3D2B1F]">
                            {t('partnership.badges').map((badge: any) => (
                                <div key={badge.text} className="flex items-center space-x-2">
                                    <span className="text-2xl">{badge.icon}</span>
                                    <span className="font-medium"><StyledText text={badge.text} /></span>
                                </div>
                            ))}
                        </div>
                    </PageSection>
                    
                    <PageSection id="contact" bgImage={backgrounds[13]}>
                        <div className="text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#3D2B1F]"><StyledText text={t('contact.title')} /></h2>
                            <p className="mt-6 text-lg text-[#3D2B1F]"><StyledText text={t('contact.subtitle')} /></p>
                        </div>
                        <div className="mt-16 grid md:grid-cols-2 gap-12 items-start">
                            <div className="space-y-6">
                                <div className="mb-6">
                                    <img src="https://i.postimg.cc/P5gSz5gd/hero-section-background-0052.webp" alt={t('contact.title')} className="rounded-lg shadow-md w-full h-48 object-cover border-2 border-[#A0522D]" />
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-[#A0522D]/10 p-3 rounded-full text-[#A0522D] mt-1"><FiMapPin className="w-6 h-6"/></div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#3D2B1F]"><StyledText text={t('contact.addressTitle')} /></h3>
                                        <p className="text-[#3D2B1F]"><StyledText text={t('contact.addressText')} /></p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-[#A0522D]/10 p-3 rounded-full text-[#A0522D] mt-1"><FiPhone className="w-6 h-6"/></div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#3D2B1F]"><StyledText text={t('contact.phoneTitle')} /></h3>
                                        <p className="text-[#3D2B1F]">
                                            <a href="tel:+66968615795" className="hover:underline hover:text-[#556B2F]">+66 (0)96 861 5795</a>
                                        </p>
                                        <p className="text-sm text-[#3D2B1F]/80"><StyledText text={t('contact.phoneHours')} /></p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-[#A0522D]/10 p-3 rounded-full text-[#A0522D] mt-1"><FiMail className="w-6 h-6"/></div>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#3D2B1F]"><StyledText text={t('contact.emailTitle')} /></h3>
                                        <p className="text-[#3D2B1F]">
                                            <a href={`mailto:${t('contact.emailLink')}`} className="hover:underline hover:text-[#556B2F]"><StyledText text={t('contact.emailLink')} /></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#A0522D]">
                                <h3 className="text-2xl font-bold text-[#3D2B1F] mb-6"><StyledText text={t('contact.formTitle')} /></h3>
                                <form action={`mailto:${t('contact.emailLink')}`} method="post" encType="text/plain" className="space-y-5">
                                    <input type="text" name="name" placeholder={t('contact.form.name')} required className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#A0522D] focus:outline-none"/>
                                    <input type="email" name="email" placeholder={t('contact.form.email')} required className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#A0522D] focus:outline-none"/>
                                    <input type="text" name="subject" placeholder={t('contact.form.subject')} required className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#A0522D] focus:outline-none"/>
                                    <textarea name="message" placeholder={t('contact.form.message')} rows={5} required className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#A0522D] focus:outline-none"></textarea>
                                    <button type="submit" className="w-full bg-[#556B2F] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#4A5D29] transition-colors text-lg"><StyledText text={t('contact.form.button')} /></button>
                                </form>
                            </div>
                        </div>
                        <div className="pt-8 mt-8 border-t border-[#A0522D]/20">
                            <iframe 
                            src="https://maps.google.com/maps?q=Golden%20Taan%2C%2096%2F3%20Moo.2%2C%20T.%20Wanyai%2C%20A.%20Bang%20Phae%2C%20Ratchaburi%2070160%2C%20Thailand&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                            width="100%" 
                            height="350" 
                            style={{ border: 0 }} 
                            allowFullScreen={false}
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg shadow-md"
                            ></iframe>
                        </div>
                    </PageSection>
                 </>
            </main>
            <Footer />
        </div>
    );
};

export default App;