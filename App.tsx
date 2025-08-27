
import React, { useState, useEffect, useRef, useCallback, createContext, useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Page, NutrientData, SustainabilityData, FAQ, Product, CartItem, BlogPost, BlogContent, Language, Translations } from './types';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { siteContent } from './translations';


// --- GA4 Tracking ---
declare global {
    interface Window { gtag: (...args: any[]) => void; }
}

const trackPageView = (path: string) => {
    if (typeof window.gtag === 'function') {
        window.gtag('config', 'G-01XHYZQ38G', {
            page_path: path
        });
    }
};

const ASSET_BASE_URL = 'https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/';

// --- Brand Name Renderer ---
const renderStyledText = (text: string | undefined) => {
    if (!text) return null;
    const parts = text.split(/(Golden TAAN)/g);
    return (
        <>
            {parts.map((part, index) => {
                if (part === 'Golden TAAN') {
                    return <strong key={index} className="font-bold text-[#B8860B]">Golden TAAN</strong>;
                }
                return part;
            })}
        </>
    );
};


// --- Localization Context & Hooks ---
interface LocalizationContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    translations: Translations;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

const useLocalization = () => {
    const context = useContext(LocalizationContext);
    if (!context) throw new Error('useLocalization must be used within a LocalizationProvider');
    return context;
};

// --- UI Helper Components ---

const SvgIcon = ({ path, className }: { path: string, className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className || 'w-6 h-6'}>
        <path fillRule="evenodd" d={path} clipRule="evenodd" />
    </svg>
);

const AnimatedCounter = ({ to }: { to: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const entry = useIntersectionObserver(ref, {});
    const isVisible = !!entry?.isIntersecting;

    useEffect(() => {
        if (!isVisible) return;
        
        let start = 0;
        const duration = 2000;
        const end = to;
        if (start === end) return;
        
        const startTime = Date.now();

        const timer = () => {
            const now = Date.now();
            const progress = Math.min(1, (now - startTime) / duration);
            const current = Math.floor(progress * (end - start) + start);
            setCount(current);
            if (progress < 1) {
                requestAnimationFrame(timer);
            }
        };
        requestAnimationFrame(timer);

    }, [to, isVisible]);

    return <span ref={ref}>{count.toLocaleString('en-US')}</span>;
};


// --- Parallax Section Component ---
const ParallaxSection: React.FC<{ index: number; children: React.ReactNode; className?: string; id?: string }> = ({ index, children, className, id }) => {
    const imageNumber = (index % 52) + 1;
    const imageUrl = `https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/goldentaan-section-background/goldentaan-section-background-${imageNumber}.webp`;

    const isDarkContrast = index % 2 === 0;
    const contrastFilter = isDarkContrast
        ? 'contrast(110%) sepia(10%) hue-rotate(-10deg)'
        : 'contrast(90%) sepia(10%) hue-rotate(20deg)';

    const backgroundStyles: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -2,
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        filter: `blur(10px) ${contrastFilter}`,
    };

    const overlayStyles: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
    };
    
    const sectionStyles: React.CSSProperties = {
        position: 'relative',
        isolation: 'isolate',
    };

    return (
        <section id={id} className={className} style={sectionStyles}>
            <div style={backgroundStyles} aria-hidden="true" />
            <div style={overlayStyles} aria-hidden="true" />
            {children}
        </section>
    );
};


// --- Chart Components ---

const SustainabilityChart = () => {
    const { translations } = useLocalization();
    const data = translations.home.impact.sustainabilityData;
    
    return (
        <div className="w-full h-96">
            <ResponsiveContainer>
                <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
                    <XAxis type="number" stroke="#3D2B1F" domain={[0, 10]} />
                    <YAxis type="category" dataKey="name" stroke="#3D2B1F" width={100} />
                    <Tooltip contentStyle={{ backgroundColor: '#3D2B1F', border: 'none', color: '#FBF8F1' }} />
                    <Legend wrapperStyle={{ color: '#3D2B1F' }} />
                    <Bar dataKey="goldenTaan" name={renderStyledText(translations.home.health.goldenTaan)?.toString()} fill="#E5B84B" />
                    <Bar dataKey="sugarcane" name={translations.home.impact.conventionalSugarcane} fill="#EAE0D5" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

const ResourceEfficiencyRadarChart = () => {
    const { translations } = useLocalization();
    const data = translations.sustainability.resourceChartData;

    return (
        <div className="w-full h-96">
            <ResponsiveContainer>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid stroke="#3D2B1F" />
                    <PolarAngleAxis dataKey="subject" stroke="#3D2B1F" tick={{ fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 10]} stroke="#3D2B1F" />
                    <Tooltip contentStyle={{ backgroundColor: '#3D2B1F', border: 'none', color: '#FBF8F1' }} />
                    <Legend wrapperStyle={{ color: '#3D2B1F' }} />
                    <Radar name="Golden TAAN" dataKey="Golden TAAN" stroke="#E5B84B" fill="#E5B84B" fillOpacity={0.6} />
                    <Radar name="Cane Sugar" dataKey="Cane Sugar" stroke="#EAE0D5" fill="#EAE0D5" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};


// --- Page-Specific Components ---
const FaqItem = ({ faq, isOpen, onClick, index }: { faq: FAQ, isOpen: boolean, onClick: () => void, index: number }) => (
    <div className="border-b border-medium-bg">
        <button
            onClick={onClick}
            className="w-full text-left py-4 flex justify-between items-center"
            aria-expanded={isOpen}
            aria-controls={`faq-answer-${index}`}
            id={`faq-question-${index}`}
        >
            <span className="font-semibold text-lg text-primary-text">{renderStyledText(faq.q)}</span>
            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                <SvgIcon path="M19.5 8.25l-7.5 7.5-7.5-7.5" className="w-5 h-5"/>
            </span>
        </button>
        <div
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        >
            <p className="pb-4 text-primary-text/80">{renderStyledText(faq.a)}</p>
        </div>
    </div>
);

// --- Product Detail Modal ---
const DetailSection = ({ title, content, isList = false, isLightBg = false }: { title: string, content: string | string[], isList?: boolean, isLightBg?: boolean }) => {
    return (
        <div className={`p-6 rounded-lg ${isLightBg ? 'bg-medium-bg/20' : 'bg-transparent'}`}>
            <h4 className="font-display text-2xl text-dark-golden mb-3">{renderStyledText(title)}</h4>
            {isList && Array.isArray(content) ? (
                <ul className="list-disc list-inside space-y-1 text-primary-text/90">
                    {content.map((item, index) => <li key={index}>{renderStyledText(item)}</li>)}
                </ul>
            ) : (
                <p className="text-primary-text/90 whitespace-pre-wrap">{typeof content === 'string' ? renderStyledText(content) : ''}</p>
            )}
        </div>
    );
};

const ProductDetailModal = ({ product, onClose, onAddToCart, setPage, setSelectedPost }: { product: Product, onClose: () => void, onAddToCart: (product: Product) => void, setPage: (page: Page) => void, setSelectedPost: (post: BlogPost) => void }) => {
    const { translations } = useLocalization();
    const t = translations.home.productSection;
    const allPosts = translations.blog.posts;
    const featuredRecipes = allPosts.filter(post => product.featuredInRecipes?.includes(post.id));
    const [isAdded, setIsAdded] = useState(false);

    const galleryImages = [
        product.img,
        `${ASSET_BASE_URL}golden-taan-caramel-latte.webp`,
        `${ASSET_BASE_URL}gluten-free-palmyra-blondies.webp`,
        `${ASSET_BASE_URL}golden-taan-gift-set.webp`,
        `${ASSET_BASE_URL}palmyra-leaf-texture-macro.webp`,
    ];
    const [mainImage, setMainImage] = useState(galleryImages[0]);


    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);
    
    const handleAddToCartInModal = (product: Product) => {
        onAddToCart(product);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    const handleRecipeClick = (post: BlogPost) => {
        setSelectedPost(post);
        setPage(Page.Blog);
        onClose();
    };

    return (
        <div 
            className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
        >
            <div 
                className="bg-light-bg rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
            >
                <div className="p-8 relative">
                    <button onClick={onClose} className="absolute top-4 right-4 text-primary-text/50 hover:text-primary-text z-10" aria-label="Close modal">
                        <SvgIcon path="M6 18L18 6M6 6l12 12" className="w-6 h-6" />
                    </button>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <img src={mainImage} alt={product.title} className="w-full h-auto object-cover rounded-lg aspect-square mb-4 transition-all duration-300" />
                            <div className="grid grid-cols-5 gap-2">
                                {galleryImages.map((img, index) => (
                                    <button key={index} onClick={() => setMainImage(img)} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-golden rounded-md">
                                        <img 
                                            src={img} 
                                            alt={`${product.title} view ${index + 1}`} 
                                            className={`w-full h-auto object-cover rounded-md aspect-square cursor-pointer transition-all ${mainImage === img ? 'ring-2 ring-dark-golden' : 'opacity-70 hover:opacity-100'}`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h2 id="product-modal-title" className="text-4xl font-display text-dark-golden">{renderStyledText(product.title)}</h2>
                            <p className="text-lg text-primary-text/70 mt-1">{product.size}</p>
                            
                            <div className="mt-4">
                                <h4 className="font-bold text-primary-text">Ingredients:</h4>
                                <p className="text-primary-text/80">{renderStyledText(product.ingredients)}</p>
                            </div>
                            
                            <div className="flex-grow"></div>

                            <div className="mt-6 flex items-center justify-between">
                                <span className="text-3xl font-display text-primary-text">${product.price.toFixed(2)}</span>
                                <button
                                    onClick={() => handleAddToCartInModal(product)}
                                    disabled={isAdded}
                                    className="bg-dark-golden text-light-text font-bold py-3 px-8 rounded-full hover:bg-primary-text transition duration-300 disabled:bg-green-600"
                                >
                                    {isAdded ? t.added : t.addToCart}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-medium-bg space-y-6">
                        <DetailSection title="Description" content={product.description} />
                        <DetailSection title="Nutritional Highlights" content={product.nutrition_highlights} isList={true} isLightBg={true} />
                        <DetailSection title="Perfect For" content={product.dietary_suitability} isList={true} />
                        <DetailSection title="Pairing Suggestions" content={product.pairings} isList={true} isLightBg={true} />
                        {product.packagingInfo && (
                            <DetailSection 
                                title={product.packagingInfo.title}
                                content={[
                                    `Case Size: ${product.packagingInfo.caseSize}`,
                                    `Pallet Quantity: ${product.packagingInfo.palletQuantity}`,
                                    `Availability: ${product.packagingInfo.availability}`
                                ]}
                                isList={true} 
                            />
                        )}
                    </div>


                    {featuredRecipes.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-medium-bg">
                            <h3 className="text-3xl font-display text-center text-dark-golden mb-8">Featured Recipes</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {featuredRecipes.map(recipe => (
                                    <div key={recipe.id} onClick={() => handleRecipeClick(recipe)} className="bg-white/50 rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-transform hover:scale-105">
                                        <img src={recipe.coverImage} alt={recipe.title} className="w-full h-40 object-cover" />
                                        <div className="p-4">
                                            <h4 className="font-semibold text-primary-text group-hover:text-dark-golden">{renderStyledText(recipe.title)}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


// --- Page Components ---

const HomePage = ({ onAddToCart, setPage, setSelectedPost }: { onAddToCart: (product: Product) => void, setPage: (page: Page) => void, setSelectedPost: (post: BlogPost) => void }) => {
    const { translations } = useLocalization();
    const t = translations.home;
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    const [showAllFaqs, setShowAllFaqs] = useState(false);
    const [addedProductId, setAddedProductId] = useState<string | null>(null);
    const [modalProduct, setModalProduct] = useState<Product | null>(null);
    
    const faqs = t.faq.items;

    const mainFaqs = faqs.slice(0, 3);
    const additionalFaqs = faqs.slice(3);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const products: Product[] = t.products;
    
    const handleAddToCartClick = (product: Product) => {
        onAddToCart(product);
        setAddedProductId(product.id);
        setTimeout(() => setAddedProductId(null), 2000);
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-light-text overflow-hidden">
                {/* Background Image */}
                <div 
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={{ 
                        backgroundImage: "url('https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/goldentann-herosection-banner.webp')",
                    }}
                />
                {/* Overlay with Blur and Dim */}
                <div 
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.15)', // 15% opaque black overlay
                        backdropFilter: 'blur(3px)' // Interpreting "5%" as a 3px blur for aesthetics
                    }}
                ></div>
                {/* Content */}
                <div className="relative z-10 text-center p-4">
                    <img src="https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-logo-smll.webp" alt="Golden TAAN Logo" className="h-24 md:h-32 mx-auto mb-8" />
                    <h1 className="text-5xl md:text-7xl font-display mb-4">{renderStyledText(t.hero.headline)}</h1>
                    <p className="text-xl md:text-2xl mb-8 font-sans">{renderStyledText(t.hero.subheadline)}</p>
                    <a href="#our-story" onClick={() => trackPageView('/#our-story')} className="bg-golden-accent text-primary-text font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-105">{t.hero.cta}</a>
                </div>
            </section>
            
            {/* Global Trends Section */}
            <ParallaxSection index={0} id="our-story" className="py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-display text-center mb-4">{renderStyledText(t.trends.headline)}</h2>
                    <p className="text-center text-lg max-w-3xl mx-auto mb-12">{renderStyledText(t.trends.description)}</p>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <img src={`${ASSET_BASE_URL}ratchaburi-farming-community.webp`} alt="A display of natural, healthy food choices reflecting the global trend towards authenticity" className="rounded-lg shadow-xl aspect-[4/3] object-cover" />
                        <div className="space-y-8">
                            <div className="border border-medium-bg/50 p-6 rounded-lg">
                                <h3 className="text-5xl font-display text-dark-golden">$<AnimatedCounter to={55} />+ <span className="text-3xl">{t.trends.billion}</span></h3>
                                <p className="mt-2">{renderStyledText(t.trends.marketStat)}</p>
                            </div>
                            <div className="border border-medium-bg/50 p-6 rounded-lg">
                                <h3 className="text-5xl font-display text-dark-golden"><AnimatedCounter to={70} /><span className="text-3xl">%</span></h3>
                                <p className="mt-2">{renderStyledText(t.trends.consumerStat)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            {/* Health Benefits Section */}
            <ParallaxSection index={1} id="health-benefits" className="py-20 px-4 md:px-8 text-primary-text">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-display text-center text-dark-golden mb-4">{renderStyledText(t.health.headline)}</h2>
                    <p className="text-center text-lg max-w-3xl mx-auto mb-12">{renderStyledText(t.health.description)}</p>
                    
                    <h3 className="text-2xl font-display text-center mb-4">{renderStyledText(t.health.chartTitle)}</h3>
                    <div className="overflow-x-auto mt-8 rounded-lg shadow-lg border border-dark-accent/20">
                        <table className="min-w-full text-left border-collapse">
                            <thead className="bg-dark-golden/10">
                                <tr>
                                    <th className="p-4 font-display text-lg text-primary-text border-b border-r border-dark-accent/20">Nutrient (per 100g)</th>
                                    <th className="p-4 font-display text-lg text-dark-golden border-b border-dark-accent/20 text-center">{renderStyledText(t.health.goldenTaan)}</th>
                                    <th className="p-4 font-display text-lg text-primary-text border-b border-dark-accent/20 text-center">{renderStyledText(t.health.unrefinedSugarcane)}</th>
                                    <th className="p-4 font-display text-lg text-primary-text border-b border-dark-accent/20 text-center">{renderStyledText(t.health.coconutSugar)}</th>
                                    <th className="p-4 font-display text-lg text-primary-text border-b border-dark-accent/20 text-center">{renderStyledText(t.health.refinedWhiteSugar)}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {t.health.nutrientData.map((nutrient, index) => (
                                    <tr key={nutrient.name} className={`transition-colors hover:bg-dark-golden/10 ${index % 2 === 0 ? 'bg-medium-bg/20' : 'bg-transparent'}`}>
                                        <td className="p-4 font-semibold text-primary-text/90 border-r border-dark-accent/20">{nutrient.name}</td>
                                        <td className="p-4 text-center font-sans text-lg font-bold text-dark-golden">{nutrient.goldenTaan.toLocaleString('en-US')}</td>
                                        <td className="p-4 text-center font-sans text-primary-text/80">{nutrient.unrefinedSugarcane.toLocaleString('en-US')}</td>
                                        <td className="p-4 text-center font-sans text-primary-text/80">{nutrient.coconutSugar.toLocaleString('en-US')}</td>
                                        <td className="p-4 text-center font-sans text-primary-text/80">{nutrient.refinedWhiteSugar.toLocaleString('en-US')}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="max-w-3xl mx-auto mt-12 bg-golden-accent/10 border border-golden-accent/30 rounded-lg p-6 flex items-start space-x-4">
                        <div>
                            <h4 className="font-display text-xl text-dark-golden">{renderStyledText(t.health.insight.title)}</h4>
                            <p className="mt-1 text-primary-text/90">{renderStyledText(t.health.insight.text)}</p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-3xl font-display text-center text-primary-text mb-6">{renderStyledText(t.health.glycemicIndexTitle)}</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-golden-accent/10 border border-golden-accent/30 rounded-lg p-6 text-center">
                                <h4 className="font-display text-2xl mb-2">⚡ {renderStyledText(t.health.goldenTaan)}: GI ≈ 35</h4>
                                <p className="text-primary-text/90">{renderStyledText(t.health.goldenTaanEffect)}</p>
                            </div>
                            <div className="bg-medium-bg/40 border border-dark-accent/30 rounded-lg p-6 text-center">
                                <h4 className="font-display text-2xl mb-2">📉 {renderStyledText(t.health.refinedWhiteSugar)}: GI ≈ 65</h4>
                                <p className="text-primary-text/90">{renderStyledText(t.health.whiteSugarEffect)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            {/* Process Section */}
            <ParallaxSection index={2} className="py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-display text-center mb-4">{renderStyledText(t.process.headline)}</h2>
                    <p className="text-center text-lg max-w-3xl mx-auto mb-12">{renderStyledText(t.process.description)}</p>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="border border-medium-bg/50 p-8 rounded-lg">
                            <h3 className="text-2xl font-display text-dark-golden mb-4">{renderStyledText(t.process.artisanal.title)}</h3>
                            <img src={`${ASSET_BASE_URL}traditional-simmering-kettle-fire.webp`} alt="The traditional, artisanal process of boiling palmyra palm nectar" className="rounded-md mb-6 aspect-video object-cover"/>
                            <ul className="space-y-2 list-decimal list-inside">
                                {t.process.artisanal.steps.map((step, i) => <li key={i}><strong>{step.title}:</strong> {renderStyledText(step.description)}</li>)}
                            </ul>
                        </div>
                        <div className="border border-medium-bg/50 p-8 rounded-lg">
                            <h3 className="text-2xl font-display text-gray-600 mb-4">{renderStyledText(t.process.industrial.title)}</h3>
                            <img src={`${ASSET_BASE_URL}palmyra-leaf-texture-macro.webp`} alt="The multi-stage industrial refining process of white cane sugar" className="rounded-md mb-6 aspect-video object-cover"/>
                            <ul className="space-y-2 list-decimal list-inside">
                                {t.process.industrial.steps.map((step, i) => <li key={i}><strong>{step.title}:</strong> {renderStyledText(step.description)}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            {/* Impact Section */}
            <ParallaxSection index={3} id="sustainability" className="py-20 px-4 md:px-8 text-primary-text">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-display text-center text-dark-golden mb-4">{renderStyledText(t.impact.headline)}</h2>
                    <p className="text-center text-lg max-w-3xl mx-auto mb-12">{renderStyledText(t.impact.description)}</p>
                    <h3 className="text-2xl font-display text-center mb-4">{renderStyledText(t.impact.chartTitle)}</h3>
                    <SustainabilityChart />

                    <h2 className="text-4xl md:text-5xl font-display text-center text-dark-golden mt-20 mb-4">{renderStyledText(t.impact.community.headline)}</h2>
                    <p className="text-center text-lg max-w-3xl mx-auto mb-12">{renderStyledText(t.impact.community.description)}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
                        {t.impact.community.stats.map((stat, i) => (
                             <div key={i} className="border border-medium-bg/50 p-6 rounded-lg">
                                <p className="text-4xl font-bold text-dark-golden"><AnimatedCounter to={stat.value} />{stat.unit}</p>
                                <p>{renderStyledText(stat.label)}</p>
                            </div>
                        ))}
                    </div>
                    <img src={`${ASSET_BASE_URL}ratchaburi-farming-community.webp`} alt="A collage showing the vibrant community of farmers and artisans" className="rounded-lg shadow-xl aspect-video object-cover w-full"/>
                </div>
            </ParallaxSection>
            
            {/* Products Section */}
            <ParallaxSection index={4} id="products" className="py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-display text-center mb-4">{renderStyledText(t.productSection.headline)}</h2>
                    <p className="text-center text-lg max-w-3xl mx-auto mb-12">{renderStyledText(t.productSection.description)}</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {products.map(p => (
                             <div key={p.id} className="border border-medium-bg/50 rounded-lg overflow-hidden group transition-transform duration-300 hover:scale-105 flex flex-col">
                                <div onClick={() => setModalProduct(p)} className="cursor-pointer">
                                    <img src={p.img} alt={p.title} className="w-full h-64 object-cover" />
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-display text-dark-golden">{renderStyledText(p.title)}</h3>
                                    <p className="text-md font-sans text-primary-text/60">{p.size}</p>
                                    <p className="mt-2 text-primary-text/80 flex-grow">{renderStyledText(p.shortDescription)}</p>
                                    <p className="text-2xl font-display text-primary-text mt-4">${p.price.toFixed(2)}</p>
                                </div>
                                <div className="p-6 pt-0 mt-auto">
                                    <button 
                                        onClick={() => handleAddToCartClick(p)}
                                        disabled={addedProductId === p.id}
                                        className="w-full bg-dark-golden text-light-text font-bold py-2 px-4 rounded-full hover:bg-primary-text transition duration-300 disabled:bg-green-600"
                                    >
                                        {addedProductId === p.id ? t.productSection.added : t.productSection.addToCart}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxSection>

            {/* FAQ Section */}
            <ParallaxSection index={5} className="py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-display text-center mb-12">{renderStyledText(t.faq.headline)}</h2>
                    <div className="space-y-2">
                        {mainFaqs.map((faq, index) => (
                            <FaqItem key={index} faq={faq} isOpen={openFaqIndex === index} onClick={() => toggleFaq(index)} index={index} />
                        ))}
                    </div>
                    <div className={`transition-all duration-700 ease-in-out overflow-hidden ${showAllFaqs ? 'max-h-[2000px] mt-2' : 'max-h-0'}`}>
                        <div className="space-y-2">
                            {additionalFaqs.map((faq, index) => (
                                <FaqItem key={index + 3} faq={faq} isOpen={openFaqIndex === index + 3} onClick={() => toggleFaq(index + 3)} index={index + 3} />
                            ))}
                        </div>
                    </div>
                    {!showAllFaqs && (
                        <div className="text-center mt-8">
                            <button onClick={() => setShowAllFaqs(true)} className="bg-dark-golden text-light-text font-bold py-3 px-8 rounded-full hover:bg-primary-text transition duration-300 transform hover:scale-105">
                                {t.faq.showMore}
                            </button>
                        </div>
                    )}
                </div>
            </ParallaxSection>

            {modalProduct && (
                <ProductDetailModal
                    product={modalProduct}
                    onClose={() => setModalProduct(null)}
                    onAddToCart={onAddToCart}
                    setPage={setPage}
                    setSelectedPost={setSelectedPost}
                />
            )}
        </div>
    );
};


const AboutUsPage = () => {
    const { translations } = useLocalization();
    const t = translations.about;

    const timelineData = t.timeline;

    return (
    <div>
        <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
            <h2 className="text-5xl md:text-6xl font-display text-golden-accent">{renderStyledText(t.header.title)}</h2>
            <p className="mt-4 text-xl max-w-3xl mx-auto">{renderStyledText(t.header.subtitle)}</p>
        </header>

        <ParallaxSection index={0} className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-4xl font-display text-dark-golden mb-4">{renderStyledText(t.roots.title)}</h3>
                        <p className="text-lg text-primary-text/90">{renderStyledText(t.roots.text)}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src={`${ASSET_BASE_URL}farmer-climbing-palm-tree.webp`} alt="A multi-generational photo of a family of palm sugar farmers." className="rounded-lg shadow-xl aspect-[3/4] object-cover" />
                        <img src={`${ASSET_BASE_URL}ratchaburi-palm-groves-landscape.webp`} alt="A serene Palmyra palm grove in Ratchaburi, Thailand at sunset." className="rounded-lg shadow-xl aspect-[3/4] object-cover mt-8" />
                    </div>
                </div>
            </div>
        </ParallaxSection>

         <ParallaxSection index={1} className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className="grid grid-cols-2 gap-4 order-last md:order-first">
                        <img src={`${ASSET_BASE_URL}golden-taan-blocks.webp`} alt="Close-up of pure, unrefined Palmyra palm sugar crystals." className="rounded-lg shadow-xl aspect-[3/4] object-cover" />
                        <img src={`${ASSET_BASE_URL}traditional-simmering-kettle-fire.webp`} alt="An artisan farmer carefully crafting a block of palm sugar." className="rounded-lg shadow-xl aspect-[3/4] object-cover mt-8" />
                    </div>
                    <div>
                        <h3 className="text-4xl font-display text-dark-golden mb-4">{renderStyledText(t.fadingGold.title)}</h3>
                        <p className="text-lg text-primary-text/90">{renderStyledText(t.fadingGold.text)}</p>
                    </div>
                </div>
            </div>
        </ParallaxSection>

        <ParallaxSection index={2} className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-4xl font-display text-dark-golden mb-4">{renderStyledText(t.mission.title)}</h3>
                        <p className="text-lg text-primary-text/90">{renderStyledText(t.mission.text)}</p>
                    </div>
                     <div className="grid grid-cols-2 gap-4">
                        <img src={`${ASSET_BASE_URL}golden-taan-caramel-latte.webp`} alt="Golden TAAN palm sugar being used in a modern, global kitchen." className="rounded-lg shadow-xl aspect-[3/4] object-cover" />
                        <img src={`${ASSET_BASE_URL}gluten-free-palmyra-blondies.webp`} alt="A person incorporating Golden TAAN into a healthy, active lifestyle." className="rounded-lg shadow-xl aspect-[3/4] object-cover mt-8" />
                    </div>
                </div>
            </div>
        </ParallaxSection>
        
        {/* Timeline Section */}
        <ParallaxSection index={3} className="py-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                <div className="text-center">
                     <h3 className="text-4xl font-display text-dark-golden mb-16">{renderStyledText(t.timelineTitle)}</h3>
                </div>
                <div className="max-w-xl md:max-w-3xl mx-auto relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-medium-bg transform -translate-x-1/2"></div>
                    {timelineData.map((item, index) => (
                        <div key={index} className="mb-12 flex items-center w-full">
                            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-dark-golden ring-4 ring-light-bg"></div>
                            <div className={`w-1/2 p-4 rounded-lg shadow-lg border border-medium-bg/50 ${index % 2 === 0 ? 'ml-auto text-left' : 'mr-auto text-right'}`}>
                                 <p className="text-sm font-semibold text-dark-golden">{item.era}</p>
                                <h4 className="text-xl font-display text-primary-text mt-1">{renderStyledText(item.title)}</h4>
                                <p className="text-primary-text/80 mt-2">{renderStyledText(item.description)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ParallaxSection>

        {/* People Behind the Purity Section */}
        <ParallaxSection index={4} className="py-20 px-4 md:px-8 text-primary-text">
            <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                <h3 className="text-4xl font-display text-center text-dark-golden mb-12">{renderStyledText(t.people.title)}</h3>
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <img src={`${ASSET_BASE_URL}ratchaburi-farming-community.webp`} alt="Portrait of Krisada Laohasiri, founder of Golden TAAN" className="rounded-lg shadow-xl aspect-[3/4] object-cover mx-auto md:mx-0 w-64"/>
                        <h4 className="text-2xl font-display text-primary-text mt-6">{renderStyledText(t.people.founderName)}</h4>
                        <p className="mt-4 text-xl italic text-primary-text/80">"{renderStyledText(t.people.founderQuote)}"</p>
                    </div>
                    <div>
                        <img src={`${ASSET_BASE_URL}ratchaburi-farming-community.webp`} alt="A community of smiling, skilled palm sugar artisans in Thailand." className="rounded-lg shadow-xl aspect-video md:aspect-[4/3] object-cover w-full"/>
                        <h4 className="text-2xl font-display text-primary-text mt-6">{renderStyledText(t.people.communityTitle)}</h4>
                        <p className="mt-2 text-primary-text/90">{renderStyledText(t.people.communityText)}</p>
                    </div>
                </div>
            </div>
        </ParallaxSection>


         <ParallaxSection index={5} className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl text-center">
                <h3 className="text-4xl font-display text-dark-golden mb-4">{renderStyledText(t.choice.title)}</h3>
                <p className="text-lg text-primary-text/90 mb-8">{renderStyledText(t.choice.text)}</p>
                <img src={`${ASSET_BASE_URL}golden-taan-gift-set.webp`} alt="A beautiful flat-lay of various natural sweeteners, with Golden TAAN palm sugar at the center." className="rounded-lg shadow-xl aspect-video object-cover"/>
            </div>
        </ParallaxSection>
    </div>
    )
};

const HeritagePage = () => {
    const { translations } = useLocalization();
    const t = translations.heritage;
    const [openSections, setOpenSections] = useState<number[]>([0]);

    const toggleSection = (index: number) => {
        setOpenSections(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const ContentRenderer = ({ content }: { content: string }) => {
        // Split by the [image:...] tag, but keep the delimiter
        const parts = content.split(/(\[image:.*?\])/g).filter(part => part.trim());

        return (
            <div className="text-primary-text/90 text-lg">
                {parts.map((part, index) => {
                    const imageMatch = part.match(/\[image:(.*?)\]/);
                    if (imageMatch) {
                        const imageName = imageMatch[1];
                        const altText = imageName.replace(/\.(webp|png)$/, '').replace(/-/g, ' ');
                        return (
                            <div key={index} className="my-8">
                                <img
                                    src={`${ASSET_BASE_URL}${imageName}`}
                                    alt={altText}
                                    className="rounded-lg shadow-xl aspect-[16/9] object-cover w-full"
                                />
                            </div>
                        );
                    } else {
                        // This part is text. Process it for paragraphs and lists.
                        const paragraphs = part.split('\n').filter(p => p.trim() !== '');
                        const elements = [];
                        let currentList: string[] = [];

                        for (let i = 0; i < paragraphs.length; i++) {
                            const p = paragraphs[i].trim();
                            if (p.startsWith('•')) {
                                currentList.push(p.substring(1).trim());
                            } else {
                                if (currentList.length > 0) {
                                    elements.push(
                                        <ul key={`ul-${i}`} className="list-disc list-outside space-y-2 pl-5">
                                            {currentList.map((item, li) => <li key={li}>{renderStyledText(item)}</li>)}
                                        </ul>
                                    );
                                    currentList = [];
                                }
                                elements.push(<p key={`p-${i}`}>{renderStyledText(p)}</p>);
                            }
                        }
                        
                        if (currentList.length > 0) {
                            elements.push(
                                <ul key="ul-end" className="list-disc list-outside space-y-2 pl-5">
                                    {currentList.map((item, li) => <li key={li}>{renderStyledText(item)}</li>)}
                                </ul>
                            );
                        }

                        return <div className="space-y-6" key={index}>{elements}</div>;
                    }
                })}
            </div>
        );
    };

    return (
        <div>
            <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
                <h1 className="text-5xl md:text-6xl font-display text-golden-accent">{renderStyledText(t.header.title)}</h1>
                <p className="mt-4 text-xl max-w-3xl mx-auto">{renderStyledText(t.header.subtitle)}</p>
            </header>

            <ParallaxSection index={0} className="py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <div className="space-y-4">
                        {t.sections.map((section, index) => {
                            const isOpen = openSections.includes(index);
                            return (
                                <div key={index} className="border-b border-medium-bg transition-all duration-500">
                                    <button
                                        onClick={() => toggleSection(index)}
                                        className="w-full text-left py-6 flex flex-col"
                                        aria-expanded={isOpen}
                                        aria-controls={`heritage-content-${index}`}
                                    >
                                        <div className="flex justify-between items-center">
                                            <h2 className="text-3xl md:text-4xl font-display text-dark-golden">{renderStyledText(section.title)}</h2>
                                            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                                                <SvgIcon path="M19.5 8.25l-7.5 7.5-7.5-7.5" className="w-6 h-6 text-primary-text"/>
                                            </span>
                                        </div>
                                        <p className="mt-2 text-primary-text/70 text-lg">{renderStyledText(section.subtitle)}</p>
                                    </button>
                                    <div
                                        id={`heritage-content-${index}`}
                                        className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[4000px] pb-8' : 'max-h-0'}`}
                                    >
                                        <ContentRenderer content={section.content} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </ParallaxSection>
        </div>
    );
};




const SustainabilityPage = () => {
    const { translations } = useLocalization();
    const t = translations.sustainability;
    
    return (
        <div>
            <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
                <h2 className="text-5xl md:text-6xl font-display text-golden-accent">{renderStyledText(t.header.title)}</h2>
                <p className="mt-4 text-xl max-w-3xl mx-auto">{renderStyledText(t.header.subtitle)}</p>
            </header>

            <ParallaxSection index={0} className="py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <img src={`${ASSET_BASE_URL}ratchaburi-palm-groves-landscape.webp`} alt="A lush, green, and biodiverse Palmyra palm grove." className="rounded-lg shadow-xl object-cover w-full h-full" />
                        <div>
                            <h3 className="text-4xl font-display text-dark-golden mb-4">{renderStyledText(t.environmental.title)}</h3>
                            <ul className="list-disc list-inside space-y-3 text-lg text-primary-text/90">
                                {t.environmental.points.map((point, i) => <li key={i}><strong>{renderStyledText(point.title)}:</strong> {renderStyledText(point.text)}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            <ParallaxSection index={1} className="py-16 px-4 md:px-8 text-primary-text">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-last md:order-first">
                            <h3 className="text-4xl font-display text-dark-golden mb-4">{renderStyledText(t.social.title)}</h3>
                            <ul className="list-disc list-inside space-y-3 text-lg text-primary-text/90">
                                {t.social.points.map((point, i) => <li key={i}><strong>{renderStyledText(point.title)}:</strong> {renderStyledText(point.text)}</li>)}
                            </ul>
                        </div>
                        <img src={`${ASSET_BASE_URL}hands-holding-rich-soil.webp`} alt="The hands of community farmers holding fresh palmyra palm sugar." className="rounded-lg shadow-xl object-cover w-full h-full" />
                    </div>
                </div>
            </ParallaxSection>

            <ParallaxSection index={2} className="py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <img src={`${ASSET_BASE_URL}golden-taan-gift-set.webp`} alt="A Golden TAAN product with a seal of quality and transparency." className="rounded-lg shadow-xl object-cover w-full h-full" />
                        <div>
                            <h3 className="text-4xl font-display text-dark-golden mb-4">{renderStyledText(t.governance.title)}</h3>
                            <ul className="list-disc list-inside space-y-3 text-lg text-primary-text/90">
                                {t.governance.points.map((point, i) => <li key={i}><strong>{renderStyledText(point.title)}:</strong> {renderStyledText(point.text)}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            <ParallaxSection index={3} className="py-20 px-4 md:px-8 text-primary-text">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h3 className="text-4xl font-display text-center text-dark-golden mb-12">{renderStyledText(t.insights.title)}</h3>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h4 className="text-2xl font-display text-center mb-4">{renderStyledText(t.insights.chartTitle)}</h4>
                            <ResourceEfficiencyRadarChart />
                        </div>
                        <div className="text-center md:text-left">
                            <img src={`${ASSET_BASE_URL}palmyra-leaf-texture-macro.webp`} alt="A detailed macro shot of a Palmyra palm leaf, highlighting its natural texture." className="rounded-lg shadow-xl aspect-video md:aspect-[4/3] object-cover w-full"/>
                            <div className="mt-8 bg-golden-accent/10 border border-golden-accent/30 rounded-lg p-6 text-center">
                                <h4 className="font-display text-xl text-dark-golden">{renderStyledText(t.insights.report.title)}</h4>
                                <p className="mt-1 text-primary-text/90">{renderStyledText(t.insights.report.text)}</p>
                                <button className="mt-4 bg-dark-golden text-light-text font-bold py-2 px-6 rounded-full hover:bg-primary-text transition duration-300">
                                    {renderStyledText(t.insights.report.cta)}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxSection>
        </div>
    );
};

const WholesalePage = () => {
    const { translations } = useLocalization();
    const t = translations.wholesale;
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        country: '',
        volume: '',
        productType: '',
        packaging: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Wholesale Inquiry:', formData);
        setIsSubmitted(true);
    };

    return (
        <div>
            <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
                <h2 className="text-5xl md:text-6xl font-display text-golden-accent">{renderStyledText(t.header.title)}</h2>
                <p className="mt-4 text-xl max-w-3xl mx-auto">{renderStyledText(t.header.subtitle)}</p>
            </header>

            <ParallaxSection index={0} className="py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h3 className="text-4xl font-display text-dark-golden mb-4 text-center">{renderStyledText(t.insights.title)}</h3>
                    <p className="text-lg text-primary-text/90 text-center max-w-3xl mx-auto">{renderStyledText(t.insights.text)}</p>
                </div>
            </ParallaxSection>

            <ParallaxSection index={1} className="py-16 px-4 md:px-8">
                <div className="max-w-5xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h3 className="text-4xl font-display text-dark-golden mb-4 text-center">{renderStyledText(t.pricing.title)}</h3>
                    <p className="text-lg text-primary-text/90 text-center max-w-3xl mx-auto mb-12">{renderStyledText(t.pricing.text)}</p>
                    
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left border-collapse">
                             <thead className="bg-dark-golden/10">
                                <tr>
                                    <th className="p-4 font-display text-lg text-primary-text">{t.pricing.table.headers.productLine}</th>
                                    <th className="p-4 font-display text-lg text-primary-text">{t.pricing.table.headers.sku}</th>
                                    <th className="p-4 font-display text-lg text-primary-text">{t.pricing.table.headers.tier1}</th>
                                    <th className="p-4 font-display text-lg text-primary-text">{t.pricing.table.headers.tier2}</th>
                                    <th className="p-4 font-display text-lg text-primary-text">{t.pricing.table.headers.tier3}</th>
                                    <th className="p-4 font-display text-lg text-primary-text">{t.pricing.table.headers.tier4}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {t.pricing.table.data.map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line.skus.map((sku, skuIndex) => (
                                            <tr key={`${index}-${skuIndex}`} className="border-t border-medium-bg">
                                                {skuIndex === 0 && <td rowSpan={line.skus.length} className="p-4 font-semibold align-top">{renderStyledText(line.productLine)}</td>}
                                                <td className="p-4">{renderStyledText(sku.name)}</td>
                                                <td className="p-4">{sku.tier1}</td>
                                                <td className="p-4">{sku.tier2}</td>
                                                <td className="p-4">{sku.tier3}</td>
                                                <td className="p-4">{sku.tier4}</td>
                                            </tr>
                                        ))}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                     <p className="text-sm text-primary-text/70 mt-4 text-center">{renderStyledText(t.pricing.table.note)}</p>
                </div>
            </ParallaxSection>

            <ParallaxSection index={2} className="py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                     <h3 className="text-4xl font-display text-dark-golden mb-12 text-center">{renderStyledText(t.logistics.title)}</h3>
                     <div className="grid md:grid-cols-2 gap-12">
                         <div>
                             <h4 className="text-2xl font-display text-primary-text mb-4">{renderStyledText(t.logistics.packaging.title)}</h4>
                             <ul className="list-disc list-inside space-y-2 text-primary-text/90">
                                 {t.logistics.packaging.options.map((opt, i) => <li key={i}>{renderStyledText(opt)}</li>)}
                             </ul>
                         </div>
                         <div>
                             <h4 className="text-2xl font-display text-primary-text mb-4">{renderStyledText(t.logistics.export.title)}</h4>
                             <ul className="list-disc list-inside space-y-2 text-primary-text/90">
                                 {t.logistics.export.services.map((svc, i) => <li key={i}>{renderStyledText(svc)}</li>)}
                             </ul>
                         </div>
                     </div>
                </div>
            </ParallaxSection>

            <ParallaxSection index={3} className="py-16 px-4 md:px-8">
                 <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h3 className="text-4xl font-display text-dark-golden mb-8 text-center">{renderStyledText(t.form.title)}</h3>
                    {isSubmitted ? (
                        <div className="text-center p-8 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                            <p className="text-xl">{renderStyledText(t.form.successMessage)}</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
                             <div>
                                <label className="block text-primary-text/80 mb-1">{t.form.companyName}</label>
                                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required className="w-full p-2 border border-medium-bg rounded-md bg-light-bg"/>
                            </div>
                            <div>
                                <label className="block text-primary-text/80 mb-1">{t.form.contactPerson}</label>
                                <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} required className="w-full p-2 border border-medium-bg rounded-md bg-light-bg"/>
                            </div>
                            <div>
                                <label className="block text-primary-text/80 mb-1">{t.form.email}</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 border border-medium-bg rounded-md bg-light-bg"/>
                            </div>
                             <div>
                                <label className="block text-primary-text/80 mb-1">{t.form.country}</label>
                                <input type="text" name="country" value={formData.country} onChange={handleChange} required className="w-full p-2 border border-medium-bg rounded-md bg-light-bg"/>
                            </div>
                             <div>
                                <label className="block text-primary-text/80 mb-1">{t.form.volume}</label>
                                <input type="text" name="volume" value={formData.volume} onChange={handleChange} required className="w-full p-2 border border-medium-bg rounded-md bg-light-bg"/>
                            </div>
                             <div>
                                <label className="block text-primary-text/80 mb-1">{t.form.productType.label}</label>
                                <select name="productType" value={formData.productType} onChange={handleChange} required className="w-full p-2 border border-medium-bg rounded-md bg-light-bg">
                                    <option value="" disabled>Select a type</option>
                                    {t.form.productType.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-primary-text/80 mb-1">{t.form.packaging.label}</label>
                                <input type="text" name="packaging" value={formData.packaging} onChange={handleChange} placeholder={t.form.packaging.placeholder} className="w-full p-2 border border-medium-bg rounded-md bg-light-bg"/>
                            </div>
                             <div className="md:col-span-2">
                                <label className="block text-primary-text/80 mb-1">{t.form.message}</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full p-2 border border-medium-bg rounded-md bg-light-bg"></textarea>
                            </div>
                             <div className="md:col-span-2 text-center">
                                <button type="submit" className="bg-dark-golden text-light-text font-bold py-3 px-12 rounded-full hover:bg-primary-text transition duration-300">
                                    {t.form.submit}
                                </button>
                            </div>
                        </form>
                    )}
                 </div>
            </ParallaxSection>
        </div>
    );
};

const ShopNowPage = ({ cartItems, setCartItems, setPage }: { cartItems: CartItem[], setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>, setPage: (page: Page) => void }) => {
    const { translations } = useLocalization();
    const t = translations.shop;
    const [activePaymentTab, setActivePaymentTab] = useState<'qr' | 'crypto' | 'card'>('card');

    const updateQuantity = (productId: string, newQuantity: number) => {
        if (newQuantity <= 0) {
            setCartItems(prev => prev.filter(item => item.id !== productId));
        } else {
            setCartItems(prev => prev.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item));
        }
    };
    
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = subtotal > 0 ? 25.00 : 0; // Flat international shipping rate
    const total = subtotal + shipping;

    if (cartItems.length === 0) {
        return (
             <div>
                <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
                    <h2 className="text-5xl md:text-6xl font-display text-golden-accent">{renderStyledText(t.header.title)}</h2>
                    <p className="mt-4 text-xl max-w-3xl mx-auto">{renderStyledText(t.header.subtitle)}</p>
                </header>
                <ParallaxSection index={0} className="py-32 px-4 md:px-8 text-center">
                    <div className="max-w-xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                         <h3 className="text-4xl font-display text-dark-golden">{renderStyledText(t.emptyCart.title)}</h3>
                         <p className="mt-4 text-lg">{renderStyledText(t.emptyCart.text)}</p>
                         <button onClick={() => setPage(Page.Home)} className="mt-8 bg-dark-golden text-light-text font-bold py-3 px-8 rounded-full hover:bg-primary-text transition duration-300">
                             {t.emptyCart.cta}
                         </button>
                    </div>
                </ParallaxSection>
            </div>
        );
    }
    
    return (
        <div>
            <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
                <h2 className="text-5xl md:text-6xl font-display text-golden-accent">{renderStyledText(t.header.title)}</h2>
                <p className="mt-4 text-xl max-w-3xl mx-auto">{renderStyledText(t.header.subtitle)}</p>
            </header>
            <ParallaxSection index={0} className="py-16 px-4 md:px-8">
                 <div className="max-w-6xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl grid lg:grid-cols-3 gap-12">
                     <div className="lg:col-span-2 space-y-4">
                        <h3 className="text-3xl font-display text-dark-golden mb-4">Your Cart</h3>
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center gap-4 border-b border-medium-bg pb-4">
                                <img src={item.img} alt={item.title} className="w-24 h-24 object-cover rounded-md"/>
                                <div className="flex-grow">
                                    <h4 className="font-bold text-lg">{renderStyledText(item.title)}</h4>
                                    <p className="text-sm text-primary-text/70">{item.size}</p>
                                    <p className="font-display text-xl">${item.price.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 border rounded-md hover:bg-medium-bg">-</button>
                                    <span className="w-8 text-center">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 border rounded-md hover:bg-medium-bg">+</button>
                                </div>
                                <p className="font-bold text-lg w-24 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                     </div>
                     <div className="lg:col-span-1 space-y-8">
                        <div className="bg-light-bg p-6 rounded-lg border border-medium-bg">
                            <h3 className="text-2xl font-display text-dark-golden mb-4">{t.summary.title}</h3>
                            <div className="space-y-2 text-lg">
                                <div className="flex justify-between"><span>{t.summary.subtotal}</span><span>${subtotal.toFixed(2)}</span></div>
                                <div className="flex justify-between"><span>{t.summary.shipping}</span><span>${shipping.toFixed(2)}</span></div>
                                <div className="flex justify-between font-bold text-xl border-t pt-2 mt-2"><span>{t.summary.total}</span><span>${total.toFixed(2)}</span></div>
                            </div>
                        </div>
                        <div className="bg-light-bg p-6 rounded-lg border border-medium-bg">
                             <h3 className="text-2xl font-display text-dark-golden mb-4">{t.payment.title}</h3>
                             <div className="border-b border-medium-bg mb-4">
                                <nav className="flex space-x-4">
                                    <button onClick={() => setActivePaymentTab('card')} className={`py-2 px-4 ${activePaymentTab === 'card' ? 'border-b-2 border-dark-golden text-primary-text' : 'text-primary-text/60'}`}>{t.payment.tabs.card}</button>
                                    <button onClick={() => setActivePaymentTab('qr')} className={`py-2 px-4 ${activePaymentTab === 'qr' ? 'border-b-2 border-dark-golden text-primary-text' : 'text-primary-text/60'}`}>{t.payment.tabs.qr}</button>
                                    <button onClick={() => setActivePaymentTab('crypto')} className={`py-2 px-4 ${activePaymentTab === 'crypto' ? 'border-b-2 border-dark-golden text-primary-text' : 'text-primary-text/60'}`}>{t.payment.tabs.crypto}</button>
                                </nav>
                            </div>
                            {activePaymentTab === 'card' && (
                                <form className="space-y-4">
                                    <div><input placeholder={t.payment.card.number} className="w-full p-2 border rounded bg-light-bg"/></div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input placeholder={t.payment.card.expiry} className="w-full p-2 border rounded bg-light-bg"/>
                                        <input placeholder={t.payment.card.cvc} className="w-full p-2 border rounded bg-light-bg"/>
                                    </div>
                                    <div><input placeholder={t.payment.card.name} className="w-full p-2 border rounded bg-light-bg"/></div>
                                    <button className="w-full bg-dark-golden text-light-text font-bold py-3 rounded-full hover:bg-primary-text">{t.payment.card.pay} ${total.toFixed(2)}</button>
                                </form>
                            )}
                            {activePaymentTab === 'qr' && (
                                <div className="text-center">
                                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=example" alt="Thai QR Payment" className="mx-auto"/>
                                    <p className="mt-2 text-sm">{t.payment.qr.text}</p>
                                </div>
                            )}
                            {activePaymentTab === 'crypto' && (
                                <div className="text-sm">
                                    <p>{t.payment.crypto.text}</p>
                                    <p className="font-mono bg-medium-bg p-2 rounded text-xs my-2 break-all">0x1A2b3c4D5e6F7g8H9i0J1k2L3m4N5o6P7q8R9s0T</p>
                                    <p>{t.payment.crypto.accept} BTC, ETH</p>
                                </div>
                            )}
                        </div>
                         <div className="bg-light-bg p-6 rounded-lg border border-medium-bg text-sm space-y-4">
                            <h3 className="text-xl font-display text-dark-golden -mb-2">{t.shippingInfo.title}</h3>
                            <div>
                                <h4 className="font-bold">{t.shippingInfo.policy.title}</h4>
                                <p className="text-primary-text/80">{t.shippingInfo.policy.text}</p>
                            </div>
                             <div>
                                <h4 className="font-bold">{t.shippingInfo.delivery.title}</h4>
                                <p className="text-primary-text/80 whitespace-pre-wrap">{t.shippingInfo.delivery.text}</p>
                            </div>
                             <div>
                                <h4 className="font-bold">{t.shippingInfo.customs.title}</h4>
                                <p className="text-primary-text/80">{t.shippingInfo.customs.text}</p>
                            </div>
                         </div>
                     </div>
                 </div>
            </ParallaxSection>
        </div>
    );
};

const BlogPage = ({ selectedPost, setSelectedPost }: { selectedPost: BlogPost | null, setSelectedPost: (post: BlogPost | null) => void }) => {
    const { translations } = useLocalization();
    const t = translations.blog;

    const BlogContentRenderer = ({ content }: { content: BlogContent[] }) => {
        return (
            <div className="space-y-6 text-lg text-primary-text/90">
                {content.map((item, index) => {
                    switch (item.type) {
                        case 'heading':
                            return <h3 key={index} className="text-3xl font-display text-dark-golden mt-8">{renderStyledText(item.text)}</h3>;
                        case 'paragraph': {
                             const lines = item.text?.split('\n') || [];
                             const isList = lines.every(line => line.trim().startsWith('•'));
                             if (isList) {
                                 return <ul key={index} className="list-disc list-outside space-y-2 pl-5">{lines.map((li, i) => <li key={i}>{renderStyledText(li.substring(1).trim())}</li>)}</ul>;
                             }
                             return lines.map((p, i) => <p key={`${index}-${i}`}>{renderStyledText(p)}</p>);
                        }
                        case 'image':
                            const imageUrl = item.src?.startsWith('http') ? item.src : `${ASSET_BASE_URL}${item.src}`;
                            return <img key={index} src={imageUrl} alt={item.alt} className="rounded-lg shadow-xl my-8 aspect-video object-cover w-full"/>;
                        default:
                            return null;
                    }
                })}
            </div>
        );
    };

    if (selectedPost) {
        const coverImageUrl = selectedPost.coverImage.startsWith('http') ? selectedPost.coverImage : `${ASSET_BASE_URL}${selectedPost.coverImage}`;
        return (
            <div>
                <header className="relative h-96">
                    <img src={coverImageUrl} alt={selectedPost.title} className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-display text-light-text text-center max-w-4xl px-4">{renderStyledText(selectedPost.title)}</h1>
                    </div>
                </header>
                <ParallaxSection index={0} className="py-16 px-4 md:px-8">
                     <div className="max-w-3xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                        <button onClick={() => setSelectedPost(null)} className="mb-8 text-dark-golden hover:underline">&larr; {t.back}</button>
                        <p className="text-xl italic text-primary-text/80 mb-8">{renderStyledText(selectedPost.introduction)}</p>
                        <BlogContentRenderer content={selectedPost.content} />
                     </div>
                </ParallaxSection>
            </div>
        );
    }
    
    return (
        <div>
            <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
                <h2 className="text-5xl md:text-6xl font-display text-golden-accent">{renderStyledText(t.header.title)}</h2>
                <p className="mt-4 text-xl max-w-3xl mx-auto">{renderStyledText(t.header.subtitle)}</p>
            </header>
            <ParallaxSection index={0} className="py-16 px-4 md:px-8">
                 <div className="max-w-5xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {t.posts.map(post => {
                             const coverImageUrl = post.coverImage.startsWith('http') ? post.coverImage : `${ASSET_BASE_URL}${post.coverImage}`;
                             return (
                                <div key={post.id} onClick={() => setSelectedPost(post)} className="border border-medium-bg/50 rounded-lg overflow-hidden group transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col">
                                    <img src={coverImageUrl} alt={post.title} className="w-full h-48 object-cover"/>
                                    <div className="p-6 flex-grow flex flex-col">
                                        <h3 className="text-2xl font-display text-dark-golden group-hover:underline">{renderStyledText(post.title)}</h3>
                                        <p className="mt-2 text-primary-text/80 flex-grow">{renderStyledText(post.introduction)}</p>
                                        <span className="mt-4 font-semibold text-dark-golden">{t.readMore} &rarr;</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                 </div>
            </ParallaxSection>
        </div>
    );
};

const Header = ({ setPage, page, cartItems }: { setPage: (page: Page) => void, page: Page, cartItems: CartItem[] }) => {
    const { translations, setLanguage, language } = useLocalization();
    const t = translations.nav;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isStoryOpen, setIsStoryOpen] = useState(false);
    const storyTimeoutRef = useRef<number | null>(null);

    const handleSetPage = (newPage: Page) => {
        setPage(newPage);
        setIsMenuOpen(false);
        setIsStoryOpen(false);
    };
    
    const handleStoryEnter = () => {
        if (storyTimeoutRef.current) clearTimeout(storyTimeoutRef.current);
        setIsStoryOpen(true);
    };

    const handleStoryLeave = () => {
        storyTimeoutRef.current = window.setTimeout(() => {
            setIsStoryOpen(false);
        }, 300);
    };

    const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="bg-primary-text text-light-text sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 cursor-pointer" onClick={() => handleSetPage(Page.Home)}>
                        <img className="h-12" src="https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-logo-smll.webp" alt="Golden Taan Logo"/>
                    </div>
                    <nav className="hidden md:flex items-center space-x-6">
                        <button onClick={() => handleSetPage(Page.Home)} className={`hover:text-golden-accent transition ${page === Page.Home ? 'text-golden-accent' : ''}`}>{t.home}</button>
                        <div className="relative" onMouseEnter={handleStoryEnter} onMouseLeave={handleStoryLeave}>
                             <button onClick={() => handleSetPage(Page.About)} className={`hover:text-golden-accent transition flex items-center ${[Page.About, Page.Heritage].includes(page) ? 'text-golden-accent' : ''}`}>
                                 {t.ourStory} <SvgIcon path="M19.5 8.25l-7.5 7.5-7.5-7.5" className="w-4 h-4 ml-1" />
                            </button>
                             {isStoryOpen && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-primary-text rounded-md shadow-lg py-1 animate-fade-in">
                                    <button onClick={() => handleSetPage(Page.About)} className="block w-full text-left px-4 py-2 text-sm hover:bg-dark-golden transition">{t.ourStory}</button>
                                    <button onClick={() => handleSetPage(Page.Heritage)} className="block w-full text-left px-4 py-2 text-sm hover:bg-dark-golden transition">{t.heritage}</button>
                                </div>
                            )}
                        </div>
                        <button onClick={() => handleSetPage(Page.Sustainability)} className={`hover:text-golden-accent transition ${page === Page.Sustainability ? 'text-golden-accent' : ''}`}>{t.sustainability}</button>
                        <button onClick={() => handleSetPage(Page.Blog)} className={`hover:text-golden-accent transition ${page === Page.Blog ? 'text-golden-accent' : ''}`}>{t.blog}</button>
                        <button onClick={() => handleSetPage(Page.Wholesale)} className={`hover:text-golden-accent transition ${page === Page.Wholesale ? 'text-golden-accent' : ''}`}>{t.wholesale}</button>
                    </nav>
                    <div className="hidden md:flex items-center space-x-4">
                         <select value={language} onChange={e => setLanguage(e.target.value as Language)} className="bg-primary-text border border-light-text/30 rounded-md p-1 text-sm">
                            <option value="en">EN</option>
                            <option value="th">TH</option>
                            <option value="de">DE</option>
                            <option value="ja">JA</option>
                            <option value="ko">KO</option>
                            <option value="fr">FR</option>
                            <option value="zh">ZH</option>
                        </select>
                        <button onClick={() => handleSetPage(Page.ShopNow)} className="bg-golden-accent text-primary-text font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition relative">
                            {t.shopNow}
                            {totalCartItems > 0 && <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{totalCartItems}</span>}
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
                            <SvgIcon path="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden p-4 space-y-2 animate-fade-in">
                     <button onClick={() => handleSetPage(Page.Home)} className="block w-full text-left py-2 hover:text-golden-accent">{t.home}</button>
                     <button onClick={() => handleSetPage(Page.About)} className="block w-full text-left py-2 hover:text-golden-accent">{t.ourStory}</button>
                     <button onClick={() => handleSetPage(Page.Heritage)} className="block w-full text-left py-2 hover:text-golden-accent">{t.heritage}</button>
                     <button onClick={() => handleSetPage(Page.Sustainability)} className="block w-full text-left py-2 hover:text-golden-accent">{t.sustainability}</button>
                     <button onClick={() => handleSetPage(Page.Blog)} className="block w-full text-left py-2 hover:text-golden-accent">{t.blog}</button>
                     <button onClick={() => handleSetPage(Page.Wholesale)} className="block w-full text-left py-2 hover:text-golden-accent">{t.wholesale}</button>
                     <button onClick={() => handleSetPage(Page.ShopNow)} className="mt-4 w-full bg-golden-accent text-primary-text font-bold py-2 px-4 rounded-full">{t.shopNow} ({totalCartItems})</button>
                </div>
            )}
        </header>
    );
};

const Footer = () => {
    const { translations, setLanguage } = useLocalization();
    const t = translations.footer;
    const nav = translations.nav;

    const quickLinks = [
        { label: nav.home, page: Page.Home },
        { label: nav.ourStory, page: Page.About },
        { label: nav.heritage, page: Page.Heritage },
        { label: nav.sustainability, page: Page.Sustainability },
        { label: nav.blog, page: Page.Blog },
        { label: nav.wholesale, page: Page.Wholesale },
    ];
    
    return (
        <footer id="contact" className="bg-primary-text text-light-text/70 pt-16 pb-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
                <div>
                    <h3 className="font-display text-2xl text-golden-accent mb-4">{t.office.title}</h3>
                    <p className="whitespace-pre-wrap">{t.office.address}</p>
                </div>
                <div>
                    <h3 className="font-display text-2xl text-golden-accent mb-4">{t.contact.title}</h3>
                    <p>{t.contact.name}</p>
                    <p>{t.contact.phone.label}: {t.contact.phone.number}</p>
                    <p>{t.contact.email.label}: <a href={`mailto:${t.contact.email.address}`} className="hover:underline">{t.contact.email.address}</a></p>
                    <p>{t.contact.cc.label}: <a href={`mailto:${t.contact.cc.address}`} className="hover:underline">{t.contact.cc.address}</a></p>
                </div>
                <div>
                    <h3 className="font-display text-2xl text-golden-accent mb-4">{t.quickLinks}</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {quickLinks.map(link => (
                            <a key={link.page} href={`#${link.page}`} onClick={() => window.history.pushState(null, '', `#${link.page}`)} className="hover:text-golden-accent hover:underline">{link.label}</a>
                        ))}
                         <a href={`#shop-now`} onClick={() => window.history.pushState(null, '', `#shop-now`)} className="hover:text-golden-accent hover:underline">{nav.shopNow}</a>
                    </div>
                </div>
            </div>
            <div className="mt-12 text-center border-t border-light-text/20 pt-8">
                <img src="https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-logo-smll.webp" alt="Small Golden TAAN Logo" className="h-16 mx-auto mb-4" />
                <p className="text-sm">{t.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
            </div>
        </footer>
    );
};

const SoftLaunchModal = ({ onClose }: { onClose: () => void }) => {
    const { translations, setLanguage, language } = useLocalization();
    const t = translations.softLaunchModal;

    return (
        <div className="fixed inset-0 bg-black/70 z-[200] flex items-center justify-center p-4 animate-fade-in" role="dialog" aria-modal="true">
            <div className="bg-light-bg rounded-lg shadow-2xl max-w-lg w-full p-8 text-center text-primary-text">
                <img src="https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-logo-smll.webp" alt="Golden TAAN Logo" className="h-20 mx-auto mb-6" />
                <h2 className="text-3xl font-display text-dark-golden mb-4">{renderStyledText(t.title)}</h2>
                <p className="mb-4">{renderStyledText(t.mainText)}</p>
                <div className="bg-golden-accent/10 border border-golden-accent/30 rounded-lg p-4 text-sm mb-6">
                    <p>{renderStyledText(t.statusText)}</p>
                    <p className="mt-2 text-xs text-primary-text/60">{t.lastUpdated}</p>
                </div>

                <div className="mb-6">
                     <label htmlFor="lang-select" className="block mb-2 text-sm font-medium text-gray-900">{t.selectLanguage}</label>
                     <select id="lang-select" value={language} onChange={e => setLanguage(e.target.value as Language)} className="bg-medium-bg border border-dark-accent text-primary-text text-sm rounded-lg focus:ring-dark-golden focus:border-dark-golden block w-full p-2.5">
                        <option value="en">English (EN)</option>
                        <option value="th">ภาษาไทย (TH)</option>
                        <option value="de">Deutsch (DE)</option>
                        <option value="ja">日本語 (JA)</option>
                        <option value="ko">한국어 (KO)</option>
                        <option value="fr">Français (FR)</option>
                        <option value="zh">中文 (ZH)</option>
                    </select>
                </div>
                
                <button onClick={onClose} className="w-full bg-dark-golden text-light-text font-bold py-3 px-8 rounded-full hover:bg-primary-text transition duration-300">
                    {t.enterSite}
                </button>
            </div>
        </div>
    );
};


const LocalizationProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');
    const translations = siteContent[language] || siteContent.en;

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
    };

    return (
        <LocalizationContext.Provider value={{ language, setLanguage: handleSetLanguage, translations }}>
            {children}
        </LocalizationContext.Provider>
    );
};

const App = () => {
    const [page, setPage] = useState<Page>(Page.Home);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const hasSeenModal = sessionStorage.getItem('hasSeenSoftLaunchModal');
        if (!hasSeenModal) {
            setShowModal(true);
        }

        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            const pageValue = Object.values(Page).find(p => p === hash);
            if (pageValue) {
                setPage(pageValue);
                setSelectedPost(null); // Clear post selection on page change
                trackPageView(`/${hash}`);
                window.scrollTo(0, 0);
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Initial check

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const handleSetPage = (newPage: Page) => {
        window.location.hash = newPage;
    };

    const handleAddToCart = (product: Product) => {
        setCartItems(prevItems => {
            const itemInCart = prevItems.find(item => item.id === product.id);
            if (itemInCart) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };
    
     const handleCloseModal = () => {
        setShowModal(false);
        sessionStorage.setItem('hasSeenSoftLaunchModal', 'true');
    };

    const renderPage = () => {
        switch (page) {
            case Page.Home:
                return <HomePage onAddToCart={handleAddToCart} setPage={handleSetPage} setSelectedPost={setSelectedPost} />;
            case Page.About:
                return <AboutUsPage />;
            case Page.Heritage:
                return <HeritagePage />;
            case Page.Sustainability:
                return <SustainabilityPage />;
             case Page.Wholesale:
                return <WholesalePage />;
            case Page.ShopNow:
                return <ShopNowPage cartItems={cartItems} setCartItems={setCartItems} setPage={handleSetPage} />;
            case Page.Blog:
                return <BlogPage selectedPost={selectedPost} setSelectedPost={setSelectedPost} />;
            default:
                return <HomePage onAddToCart={handleAddToCart} setPage={handleSetPage} setSelectedPost={setSelectedPost}/>;
        }
    };

    return (
        <LocalizationProvider>
            <AppContent
                page={page}
                setPage={handleSetPage}
                cartItems={cartItems}
                onAddToCart={handleAddToCart}
                selectedPost={selectedPost}
                setSelectedPost={setSelectedPost}
                showModal={showModal}
                onCloseModal={handleCloseModal}
            />
        </LocalizationProvider>
    );
};

// Sub-component to access localization context
const AppContent = ({ page, setPage, cartItems, onAddToCart, selectedPost, setSelectedPost, showModal, onCloseModal }: {
    page: Page;
    setPage: (page: Page) => void;
    cartItems: CartItem[];
    onAddToCart: (product: Product) => void;
    selectedPost: BlogPost | null;
    setSelectedPost: (post: BlogPost | null) => void;
    showModal: boolean;
    onCloseModal: () => void;
}) => {
    const { translations } = useLocalization();

    useEffect(() => {
        document.title = translations.metaTitle;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', translations.metaDescription);
        }
    }, [translations]);
    
    const renderPage = () => {
        switch (page) {
            case Page.Home:
                return <HomePage onAddToCart={onAddToCart} setPage={setPage} setSelectedPost={setSelectedPost} />;
            case Page.About:
                return <AboutUsPage />;
            case Page.Heritage:
                return <HeritagePage />;
            case Page.Sustainability:
                return <SustainabilityPage />;
             case Page.Wholesale:
                return <WholesalePage />;
            case Page.ShopNow:
                return <ShopNowPage cartItems={cartItems} setCartItems={() => {}} setPage={setPage} />;
            case Page.Blog:
                return <BlogPage selectedPost={selectedPost} setSelectedPost={setSelectedPost} />;
            default:
                return <HomePage onAddToCart={onAddToCart} setPage={setPage} setSelectedPost={setSelectedPost}/>;
        }
    };

    return (
        <>
            {showModal && <SoftLaunchModal onClose={onCloseModal} />}
            <Header setPage={setPage} page={page} cartItems={cartItems} />
            <main>
                {renderPage()}
            </main>
            <Footer />
        </>
    );
};

export default App;
