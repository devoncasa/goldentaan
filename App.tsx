



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
                    <Bar dataKey="goldenTaan" name={translations.home.health.goldenTaan} fill="#E5B84B" />
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
                    <Radar name="Golden Taan" dataKey="Golden Taan" stroke="#E5B84B" fill="#E5B84B" fillOpacity={0.6} />
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
            <span className="font-semibold text-lg text-primary-text">{faq.q}</span>
            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                <SvgIcon path="M19.5 8.25l-7.5 7.5-7.5-7.5" className="w-5 h-5"/>
            </span>
        </button>
        <div
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        >
            <p className="pb-4 text-primary-text/80">{faq.a}</p>
        </div>
    </div>
);

// --- Product Detail Modal ---
const DetailSection = ({ title, content, isList = false, isLightBg = false }: { title: string, content: string | string[], isList?: boolean, isLightBg?: boolean }) => {
    return (
        <div className={`p-6 rounded-lg ${isLightBg ? 'bg-medium-bg/20' : 'bg-transparent'}`}>
            <h4 className="font-display text-2xl text-dark-golden mb-3">{title}</h4>
            {isList && Array.isArray(content) ? (
                <ul className="list-disc list-inside space-y-1 text-primary-text/90">
                    {content.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            ) : (
                <p className="text-primary-text/90 whitespace-pre-wrap">{typeof content === 'string' ? content : ''}</p>
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
        'https://via.placeholder.com/600x600.png?text=Product+in+Use',
        'https://via.placeholder.com/600x600.png?text=Lifestyle',
        'https://via.placeholder.com/600x600.png?text=Packaging',
        'https://via.placeholder.com/600x600.png?text=Texture',
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
                            <h2 id="product-modal-title" className="text-4xl font-display text-dark-golden">{product.title}</h2>
                            <p className="text-lg text-primary-text/70 mt-1">{product.size}</p>
                            
                            <div className="mt-4">
                                <h4 className="font-bold text-primary-text">Ingredients:</h4>
                                <p className="text-primary-text/80">{product.ingredients}</p>
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
                                            <h4 className="font-semibold text-primary-text group-hover:text-dark-golden">{recipe.title}</h4>
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
                    <img src="https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-logo-smll.webp" alt="Golden Taan Logo" className="h-24 md:h-32 mx-auto mb-8" />
                    <h1 className="text-5xl md:text-7xl font-display mb-4">{t.hero.headline}</h1>
                    <p className="text-xl md:text-2xl mb-8 font-sans">{t.hero.subheadline}</p>
                    <a href="#our-story" onClick={() => trackPageView('/#our-story')} className="bg-golden-accent text-primary-text font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-105">{t.hero.cta}</a>
                </div>
            </section>
            
            {/* Global Trends Section */}
            <ParallaxSection index={0} id="our-story" className="py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-display text-center mb-4">{t.trends.headline}</h2>
                    <p className="text-center text-lg max-w-3xl mx-auto mb-12">{t.trends.description}</p>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <img src="https://via.placeholder.com/600x700.png?text=Natural+Choices+(6:7)" alt="A display of natural, healthy food choices reflecting the global trend towards authenticity" className="rounded-lg shadow-xl" />
                        <div className="space-y-8">
                            <div className="border border-medium-bg/50 p-6 rounded-lg">
                                <h3 className="text-5xl font-display text-dark-golden">$<AnimatedCounter to={55} />+ <span className="text-3xl">{t.trends.billion}</span></h3>
                                <p className="mt-2">{t.trends.marketStat}</p>
                            </div>
                            <div className="border border-medium-bg/50 p-6 rounded-lg">
                                <h3 className="text-5xl font-display text-dark-golden"><AnimatedCounter to={70} /><span className="text-3xl">%</span></h3>
                                <p className="mt-2">{t.trends.consumerStat}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            {/* Health Benefits Section */}
            <ParallaxSection index={1} id="health-benefits" className="py-20 px-4 md:px-8 text-primary-text">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-display text-center text-dark-golden mb-4">{t.health.headline}</h2>
                    <p className="text-center text-lg max-w-3xl mx-auto mb-12">{t.health.description}</p>
                    
                    <h3 className="text-2xl font-display text-center mb-4">{t.health.chartTitle}</h3>
                    <div className="overflow-x-auto mt-8 rounded-lg shadow-lg border border-dark-accent/20">
                        <table className="min-w-full text-left border-collapse">
                            <thead className="bg-dark-golden/10">
                                <tr>
                                    <th className="p-4 font-display text-lg text-primary-text border-b border-r border-dark-accent/20">Nutrient (per 100g)</th>
                                    <th className="p-4 font-display text-lg text-dark-golden border-b border-dark-accent/20 text-center">{t.health.goldenTaan}</th>
                                    <th className="p-4 font-display text-lg text-primary-text border-b border-dark-accent/20 text-center">{t.health.unrefinedSugarcane}</th>
                                    <th className="p-4 font-display text-lg text-primary-text border-b border-dark-accent/20 text-center">{t.health.coconutSugar}</th>
                                    <th className="p-4 font-display text-lg text-primary-text border-b border-dark-accent/20 text-center">{t.health.refinedWhiteSugar}</th>
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
                            <h4 className="font-display text-xl text-dark-golden">{t.health.insight.title}</h4>
                            <p className="mt-1 text-primary-text/90">{t.health.insight.text}</p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-3xl font-display text-center text-primary-text mb-6">{t.health.glycemicIndexTitle}</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-golden-accent/10 border border-golden-accent/30 rounded-lg p-6 text-center">
                                <h4 className="font-display text-2xl mb-2">⚡ {t.health.goldenTaan}: GI ≈ 35</h4>
                                <p className="text-primary-text/90">{t.health.goldenTaanEffect}</p>
                            </div>
                            <div className="bg-medium-bg/40 border border-dark-accent/30 rounded-lg p-6 text-center">
                                <h4 className="font-display text-2xl mb-2">📉 {t.health.refinedWhiteSugar}: GI ≈ 65</h4>
                                <p className="text-primary-text/90">{t.health.whiteSugarEffect}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            {/* Process Section */}
            <ParallaxSection index={2} className="py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-display text-center mb-4">{t.process.headline}</h2>
                    <p className="text-center text-lg max-w-3xl mx-auto mb-12">{t.process.description}</p>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="border border-medium-bg/50 p-8 rounded-lg">
                            <h3 className="text-2xl font-display text-dark-golden mb-4">{t.process.artisanal.title}</h3>
                            <img src="https://via.placeholder.com/600x400.png?text=Artisanal+Process+(3:2)" alt="The traditional, artisanal process of boiling palmyra palm nectar to create Golden Taan sugar" className="rounded-md mb-6"/>
                            <ul className="space-y-2 list-decimal list-inside">
                                {t.process.artisanal.steps.map((step, i) => <li key={i}><strong>{step.title}:</strong> {step.description}</li>)}
                            </ul>
                        </div>
                        <div className="border border-medium-bg/50 p-8 rounded-lg">
                            <h3 className="text-2xl font-display text-gray-600 mb-4">{t.process.industrial.title}</h3>
                            <img src="https://via.placeholder.com/600x400.png?text=Industrial+Process+(3:2)" alt="The multi-stage industrial refining process of white cane sugar" className="rounded-md mb-6"/>
                            <ul className="space-y-2 list-decimal list-inside">
                                {t.process.industrial.steps.map((step, i) => <li key={i}><strong>{step.title}:</strong> {step.description}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            {/* Impact Section */}
            <ParallaxSection index={3} id="sustainability" className="py-20 px-4 md:px-8 text-primary-text">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-display text-center text-dark-golden mb-4">{t.impact.headline}</h2>
                    <p className="text-center text-lg max-w-3xl mx-auto mb-12">{t.impact.description}</p>
                    <h3 className="text-2xl font-display text-center mb-4">{t.impact.chartTitle}</h3>
                    <SustainabilityChart />

                    <h2 className="text-4xl md:text-5xl font-display text-center text-dark-golden mt-20 mb-4">{t.impact.community.headline}</h2>
                    <p className="text-center text-lg max-w-3xl mx-auto mb-12">{t.impact.community.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
                        {t.impact.community.stats.map((stat, i) => (
                             <div key={i} className="border border-medium-bg/50 p-6 rounded-lg">
                                <p className="text-4xl font-bold text-dark-golden"><AnimatedCounter to={stat.value} />{stat.unit}</p>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                    <img src="https://via.placeholder.com/1200x600.png?text=Our+Community+(2:1)" alt="A collage showing the vibrant community of farmers and artisans behind Golden Taan" className="rounded-lg shadow-xl"/>
                </div>
            </ParallaxSection>
            
            {/* Products Section */}
            <ParallaxSection index={4} id="products" className="py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-display text-center mb-4">{t.productSection.headline}</h2>
                    <p className="text-center text-lg max-w-3xl mx-auto mb-12">{t.productSection.description}</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {products.map(p => (
                             <div key={p.id} className="border border-medium-bg/50 rounded-lg overflow-hidden group transition-transform duration-300 hover:scale-105 flex flex-col">
                                <div onClick={() => setModalProduct(p)} className="cursor-pointer">
                                    <img src={p.img} alt={p.title} className="w-full h-64 object-cover" />
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-display text-dark-golden">{p.title}</h3>
                                    <p className="text-md font-sans text-primary-text/60">{p.size}</p>
                                    <p className="mt-2 text-primary-text/80 flex-grow">{p.shortDescription}</p>
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
                    <h2 className="text-4xl md:text-5xl font-display text-center mb-12">{t.faq.headline}</h2>
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
            <h2 className="text-5xl md:text-6xl font-display text-golden-accent">{t.header.title}</h2>
            <p className="mt-4 text-xl max-w-3xl mx-auto">{t.header.subtitle}</p>
        </header>

        <ParallaxSection index={0} className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-4xl font-display text-dark-golden mb-4">{t.roots.title}</h3>
                        <p className="text-lg text-primary-text/90">{t.roots.text}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://via.placeholder.com/400x533.png?text=Family+Tradition+(3:4)" alt="A multi-generational photo of a family of palm sugar farmers." className="rounded-lg shadow-xl aspect-[3/4] object-cover" />
                        <img src="https://via.placeholder.com/400x533.png?text=Ratchaburi+Palm+Grove+(3:4)" alt="A serene Palmyra palm grove in Ratchaburi, Thailand at sunset." className="rounded-lg shadow-xl aspect-[3/4] object-cover mt-8" />
                    </div>
                </div>
            </div>
        </ParallaxSection>

         <ParallaxSection index={1} className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className="grid grid-cols-2 gap-4 order-last md:order-first">
                        <img src="https://via.placeholder.com/400x533.png?text=Pure+Palm+Sugar+Crystals+(3:4)" alt="Close-up of pure, unrefined Palmyra palm sugar crystals." className="rounded-lg shadow-xl aspect-[3/4] object-cover" />
                        <img src="https://via.placeholder.com/400x533.png?text=Artisanal+Craft+(3:4)" alt="An artisan farmer carefully crafting a block of palm sugar." className="rounded-lg shadow-xl aspect-[3/4] object-cover mt-8" />
                    </div>
                    <div>
                        <h3 className="text-4xl font-display text-dark-golden mb-4">{t.fadingGold.title}</h3>
                        <p className="text-lg text-primary-text/90">{t.fadingGold.text}</p>
                    </div>
                </div>
            </div>
        </ParallaxSection>

        <ParallaxSection index={2} className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-4xl font-display text-dark-golden mb-4">{t.mission.title}</h3>
                        <p className="text-lg text-primary-text/90">{t.mission.text}</p>
                    </div>
                     <div className="grid grid-cols-2 gap-4">
                        <img src="https://via.placeholder.com/400x533.png?text=Global+Kitchen+(3:4)" alt="Golden Taan palm sugar being used in a modern, global kitchen." className="rounded-lg shadow-xl aspect-[3/4] object-cover" />
                        <img src="https://via.placeholder.com/400x533.png?text=Healthy+Lifestyle+(3:4)" alt="A person incorporating Golden Taan into a healthy, active lifestyle." className="rounded-lg shadow-xl aspect-[3/4] object-cover mt-8" />
                    </div>
                </div>
            </div>
        </ParallaxSection>
        
        {/* Timeline Section */}
        <ParallaxSection index={3} className="py-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                <div className="text-center">
                     <h3 className="text-4xl font-display text-dark-golden mb-16">{t.timelineTitle}</h3>
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
                                <h4 className="text-xl font-display text-primary-text mt-1">{item.title}</h4>
                                <p className="text-primary-text/80 mt-2">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ParallaxSection>

        {/* People Behind the Purity Section */}
        <ParallaxSection index={4} className="py-20 px-4 md:px-8 text-primary-text">
            <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                <h3 className="text-4xl font-display text-center text-dark-golden mb-12">{t.people.title}</h3>
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <img src="https://via.placeholder.com/400x533.png?text=Krisada+Laohasiri+(3:4)" alt="Portrait of Krisada Laohasiri, founder of Golden Taan" className="rounded-lg shadow-xl aspect-[3/4] object-cover mx-auto md:mx-0 w-64"/>
                        <h4 className="text-2xl font-display text-primary-text mt-6">{t.people.founderName}</h4>
                        <p className="mt-4 text-xl italic text-primary-text/80">"{t.people.founderQuote}"</p>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/600x400.png?text=Community+of+Artisans+(3:2)" alt="A community of smiling, skilled palm sugar artisans in Thailand." className="rounded-lg shadow-xl aspect-video md:aspect-[4/3] object-cover w-full"/>
                        <h4 className="text-2xl font-display text-primary-text mt-6">{t.people.communityTitle}</h4>
                        <p className="mt-2 text-primary-text/90">{t.people.communityText}</p>
                    </div>
                </div>
            </div>
        </ParallaxSection>


         <ParallaxSection index={5} className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl text-center">
                <h3 className="text-4xl font-display text-dark-golden mb-4">{t.choice.title}</h3>
                <p className="text-lg text-primary-text/90 mb-8">{t.choice.text}</p>
                <img src="https://via.placeholder.com/1200x675.png?text=Natural+Sweeteners+(16:9)" alt="A beautiful flat-lay of various natural sweeteners, with Golden Taan palm sugar at the center." className="rounded-lg shadow-xl aspect-video object-cover"/>
            </div>
        </ParallaxSection>
    </div>
    )
};

const HeritagePage = () => {
    const { translations } = useLocalization();
    const t = translations.heritage;
    const [openKey, setOpenKey] = useState<string | null>('terroir'); // Default first item open

    const ContentRenderer = ({ content }: { content: string }) => {
        const parts = content.split('\n• ').map(part => part.trim());
        const introParagraphs = parts[0].split('\n').filter(p => p);
        const bulletPoints = parts.slice(1);

        return (
            <div className="text-primary-text/90 space-y-4 text-lg">
                {introParagraphs.map((para, index) => <p key={`p-${index}`}>{para}</p>)}
                {bulletPoints.length > 0 && (
                    <ul className="list-disc list-inside space-y-2 pl-4">
                        {bulletPoints.map((bullet, index) => <li key={`b-${index}`}>{bullet}</li>)}
                    </ul>
                )}
            </div>
        );
    };

    const AccordionItem = ({ title, content, imageUrl, newImageUrl, isOpen, onToggle }: {
        title: string;
        content: string;
        imageUrl: string;
        newImageUrl?: string | null;
        isOpen: boolean;
        onToggle: () => void;
    }) => (
        <div className="border-b border-dark-accent/20 last:border-b-0">
            <button
                onClick={onToggle}
                className="w-full text-left py-5 px-6 flex justify-between items-center transition-colors hover:bg-dark-golden/5"
                aria-expanded={isOpen}
            >
                <h3 className="text-2xl font-display text-dark-golden">{title}</h3>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <SvgIcon path="M19.5 8.25l-7.5 7.5-7.5-7.5" className="w-6 h-6 text-dark-golden"/>
                </span>
            </button>
            <div
                className={`grid transition-all duration-700 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                style={{ transitionProperty: 'grid-template-rows, opacity' }}
            >
                <div className="overflow-hidden">
                    <div className="p-6 space-y-6 bg-dark-golden/5">
                        <ContentRenderer content={content} />
                        <img src={imageUrl} alt={title} className="rounded-lg shadow-xl aspect-[16/9] object-cover w-full" />
                        {newImageUrl && <img src={newImageUrl} alt={`${title} detail`} className="rounded-lg shadow-xl aspect-[16/9] object-cover w-full" />}
                    </div>
                </div>
            </div>
        </div>
    );

    const heritageSections = [
        {
            group: t.technical.title,
            items: [
                { 
                    key: 'terroir', 
                    title: t.technical.terroir.title, 
                    content: t.technical.terroir.content,
                    imageUrl: "https://via.placeholder.com/800x450.png?text=Phetchaburi+Terroir+(16:9)",
                },
                { 
                    key: 'artisanal', 
                    title: t.technical.artisanal.title, 
                    content: t.technical.artisanal.content,
                    imageUrl: "https://via.placeholder.com/800x450.png?text=Artisanal+Processing+(16:9)",
                    newImageUrl: "https://via.placeholder.com/800x450.png?text=Slow-Simmering+Process+(16:9)"
                }
            ]
        },
        {
            group: t.marketing.title,
            items: [
                { 
                    key: 'story', 
                    title: t.marketing.story.title, 
                    content: t.marketing.story.content,
                    imageUrl: "https://via.placeholder.com/800x450.png?text=Story+of+Heritage+(16:9)",
                    newImageUrl: "https://via.placeholder.com/800x450.png?text=GI+Certified+Product+(16:9)"
                },
                { 
                    key: 'appeal', 
                    title: t.marketing.appeal.title, 
                    content: t.marketing.appeal.content,
                    imageUrl: "https://via.placeholder.com/800x450.png?text=Purity+and+Wellness+(16:9)",
                }
            ]
        }
    ];

    const handleToggle = (key: string) => {
        setOpenKey(prevKey => (prevKey === key ? null : key));
    };
    
    return (
        <div>
             <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
                <h1 className="text-5xl md:text-6xl font-display text-golden-accent">{t.header.title}</h1>
                <p className="mt-4 text-xl max-w-3xl mx-auto">{t.header.subtitle}</p>
            </header>

            <ParallaxSection index={0} className="py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    {heritageSections.map((section, index) => (
                        <div key={section.group} className={index > 0 ? 'mt-12' : ''}>
                             <h2 className="text-4xl font-display text-center text-primary-text mb-8">{section.group}</h2>
                             <div className="border border-dark-accent/20 rounded-lg overflow-hidden shadow-lg">
                                {section.items.map(item => (
                                    <AccordionItem
                                        key={item.key}
                                        title={item.title}
                                        content={item.content}
                                        imageUrl={item.imageUrl}
                                        newImageUrl={item.newImageUrl}
                                        isOpen={openKey === item.key}
                                        onToggle={() => handleToggle(item.key)}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="mt-12 pt-8 border-t border-medium-bg">
                        <p className="text-lg text-primary-text/90 italic">{t.conclusion}</p>
                    </div>
                </div>
            </ParallaxSection>
        </div>
    );
}



const SustainabilityPage = () => {
    const { translations } = useLocalization();
    const t = translations.sustainability;
    
    return (
        <div>
            <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
                <h2 className="text-5xl md:text-6xl font-display text-golden-accent">{t.header.title}</h2>
                <p className="mt-4 text-xl max-w-3xl mx-auto">{t.header.subtitle}</p>
            </header>

            <ParallaxSection index={0} className="py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <img src="https://via.placeholder.com/600x700.png?text=Lush+Palm+Grove+(6:7)" alt="A lush, green, and biodiverse Palmyra palm grove." className="rounded-lg shadow-xl object-cover w-full h-full" />
                        <div>
                            <h3 className="text-4xl font-display text-dark-golden mb-4">{t.environmental.title}</h3>
                            <ul className="list-disc list-inside space-y-3 text-lg text-primary-text/90">
                                {t.environmental.points.map((point, i) => <li key={i}><strong>{point.title}:</strong> {point.text}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            <ParallaxSection index={1} className="py-16 px-4 md:px-8 text-primary-text">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-last md:order-first">
                            <h3 className="text-4xl font-display text-dark-golden mb-4">{t.social.title}</h3>
                            <ul className="list-disc list-inside space-y-3 text-lg text-primary-text/90">
                                {t.social.points.map((point, i) => <li key={i}><strong>{point.title}:</strong> {point.text}</li>)}
                            </ul>
                        </div>
                        <img src="https://via.placeholder.com/600x700.png?text=Community+Hands+(6:7)" alt="The hands of community farmers holding fresh palmyra palm sugar." className="rounded-lg shadow-xl object-cover w-full h-full" />
                    </div>
                </div>
            </ParallaxSection>

            <ParallaxSection index={2} className="py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <img src="https://via.placeholder.com/600x700.png?text=Quality+Seal+(6:7)" alt="A Golden Taan product with a seal of quality and transparency." className="rounded-lg shadow-xl object-cover w-full h-full" />
                        <div>
                            <h3 className="text-4xl font-display text-dark-golden mb-4">{t.governance.title}</h3>
                            <ul className="list-disc list-inside space-y-3 text-lg text-primary-text/90">
                                {t.governance.points.map((point, i) => <li key={i}><strong>{point.title}:</strong> {point.text}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </ParallaxSection>

            <ParallaxSection index={3} className="py-20 px-4 md:px-8 text-primary-text">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h3 className="text-4xl font-display text-center text-dark-golden mb-12">{t.insights.title}</h3>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h4 className="text-2xl font-display text-center mb-4">{t.insights.chartTitle}</h4>
                            <ResourceEfficiencyRadarChart />
                        </div>
                        <div className="text-center md:text-left">
                            <img src="https://via.placeholder.com/400x533.png?text=Sustainability+Report+(3:4)" alt="Cover of the official Golden Taan Sustainability Report 2025" className="rounded-lg shadow-xl object-cover mx-auto md:mx-0 mb-6" />
                            <h4 className="text-3xl font-display">{t.insights.report.title}</h4>
                            <p className="my-4">{t.insights.report.text}</p>
                            <a href="#" className="inline-block bg-golden-accent text-primary-text font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-105">
                                {t.insights.report.cta}
                            </a>
                        </div>
                    </div>
                </div>
            </ParallaxSection>
        </div>
    );
}

const WholesalePage = () => {
    const { translations } = useLocalization();
    const t = translations.wholesale;

    return (
        <div>
            <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
                <h2 className="text-5xl md:text-6xl font-display text-golden-accent">{t.header.title}</h2>
                <p className="mt-4 text-xl max-w-3xl mx-auto">{t.header.subtitle}</p>
            </header>
            
            <ParallaxSection index={0} className="py-16 px-4 md:px-8">
                <div className="max-w-6xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <div className="text-center mb-12">
                         <h1 className="text-4xl font-display text-dark-golden mb-4">{t.pricing.title}</h1>
                        <p className="text-lg max-w-3xl mx-auto">{t.pricing.text}</p>
                    </div>
                    <div className="overflow-x-auto rounded-lg shadow-lg border border-medium-bg/50">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-dark-golden text-light-text">
                                <tr>
                                    <th className="p-4 font-semibold">{t.pricing.table.headers.productLine}</th>
                                    <th className="p-4 font-semibold">{t.pricing.table.headers.sku}</th>
                                    <th className="p-4 font-semibold text-center">{t.pricing.table.headers.tier1}</th>
                                    <th className="p-4 font-semibold text-center">{t.pricing.table.headers.tier2}</th>
                                    <th className="p-4 font-semibold text-center">{t.pricing.table.headers.tier3}</th>
                                    <th className="p-4 font-semibold text-center">{t.pricing.table.headers.tier4}</th>
                                </tr>
                            </thead>
                            <tbody className="bg-light-bg">
                                {t.pricing.table.data.flatMap((productGroup) => 
                                    productGroup.skus.map((sku, skuIndex) => (
                                        <tr key={`${productGroup.productLine}-${sku.name}`} className="border-t border-medium-bg hover:bg-medium-bg/30 transition-colors">
                                            {skuIndex === 0 ? (
                                                <td rowSpan={productGroup.skus.length} className="p-4 align-top font-display text-lg text-dark-golden border-r border-medium-bg">
                                                    {productGroup.productLine}
                                                </td>
                                            ) : null}
                                            <td className="p-4 text-primary-text/90 border-r border-medium-bg">{sku.name}</td>
                                            <td className="p-4 text-center font-mono">{sku.tier1}</td>
                                            <td className="p-4 text-center font-mono">{sku.tier2}</td>
                                            <td className="p-4 text-center font-mono">{sku.tier3}</td>
                                            <td className="p-4 text-center font-mono">{sku.tier4}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm mt-4 text-right text-primary-text/70">{t.pricing.table.note}</p>
                </div>
            </ParallaxSection>
        </div>
    );
};


const ShopNowPage = ({ cartItems, onUpdateQuantity, setPage }: { cartItems: CartItem[], onUpdateQuantity: (id: string, amount: number) => void, setPage: (page: Page) => void }) => {
    const { translations } = useLocalization();
    const t = translations.shop;
    const [paymentTab, setPaymentTab] = useState('qr');

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal > 0 ? 5 : 0; // Assuming $5 flat shipping for international orders
    const total = subtotal + shipping;

    return (
        <div className="min-h-screen">
            <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
                <h2 className="text-5xl md:text-6xl font-display text-golden-accent">{t.header.title}</h2>
                <p className="mt-4 text-xl max-w-3xl mx-auto">{t.header.subtitle}</p>
            </header>

            <ParallaxSection index={0} className="py-16 px-4 md:px-8">
                {cartItems.length === 0 ? (
                    <div className="max-w-4xl mx-auto text-center py-20 bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                        <h3 className="text-3xl font-display text-dark-golden">{t.emptyCart.title}</h3>
                        <p className="mt-4 mb-8 text-lg">{t.emptyCart.text}</p>
                        <button onClick={() => { setPage(Page.Home); trackPageView(`/#${Page.Home}`); }} className="bg-golden-accent text-primary-text font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-105">
                            {t.emptyCart.cta}
                        </button>
                    </div>
                ) : (
                    <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                        {/* Cart Summary */}
                        <div className="border border-medium-bg/50 p-8 rounded-lg">
                            <h3 className="text-3xl font-display text-dark-golden mb-6">{t.summary.title}</h3>
                            <div className="space-y-4">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                                        <img src={item.img} alt={item.title} className="w-20 h-20 rounded-md object-cover" />
                                        <div className="flex-grow">
                                            <p className="font-semibold">{item.title}</p>
                                            <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                                        </div>
                                        <div className="flex items-center gap-2 border rounded-full px-2">
                                            <button onClick={() => onUpdateQuantity(item.id, -1)} className="text-lg font-bold p-1">-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => onUpdateQuantity(item.id, 1)} className="text-lg font-bold p-1">+</button>
                                        </div>
                                        <p className="font-semibold w-24 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 space-y-2 text-lg">
                                <div className="flex justify-between"><span>{t.summary.subtotal}</span><span>${subtotal.toFixed(2)}</span></div>
                                <div className="flex justify-between"><span>{t.summary.shipping}</span><span>${shipping.toFixed(2)}</span></div>
                                <div className="flex justify-between font-bold text-2xl border-t pt-2 mt-2"><span>{t.summary.total}</span><span>${total.toFixed(2)}</span></div>
                            </div>
                        </div>
                        {/* Payment Options */}
                        <div className="border border-medium-bg/50 p-8 rounded-lg">
                            <h3 className="text-3xl font-display text-dark-golden mb-6">{t.payment.title}</h3>
                            <div className="flex border-b" role="tablist" aria-label="Payment methods">
                                <button id="tab-qr" onClick={() => setPaymentTab('qr')} role="tab" aria-selected={paymentTab === 'qr'} aria-controls="panel-qr" className={`py-2 px-4 ${paymentTab === 'qr' ? 'border-b-2 border-dark-golden font-semibold' : 'text-gray-500'}`}>{t.payment.tabs.qr}</button>
                                <button id="tab-crypto" onClick={() => setPaymentTab('crypto')} role="tab" aria-selected={paymentTab === 'crypto'} aria-controls="panel-crypto" className={`py-2 px-4 ${paymentTab === 'crypto' ? 'border-b-2 border-dark-golden font-semibold' : 'text-gray-500'}`}>{t.payment.tabs.crypto}</button>
                                <button id="tab-card" onClick={() => setPaymentTab('card')} role="tab" aria-selected={paymentTab === 'card'} aria-controls="panel-card" className={`py-2 px-4 ${paymentTab === 'card' ? 'border-b-2 border-dark-golden font-semibold' : 'text-gray-500'}`}>{t.payment.tabs.card}</button>
                            </div>
                            <div className="mt-6">
                                <div id="panel-qr" role="tabpanel" tabIndex={0} aria-labelledby="tab-qr" hidden={paymentTab !== 'qr'}>
                                    <div className="text-center">
                                        <p className="mb-4">{t.payment.qr.text}</p>
                                        <img src="https://via.placeholder.com/300x300.png?text=Thai+QR+Payment+(1:1)" alt="Thai QR Payment Code" className="mx-auto rounded-lg"/>
                                    </div>
                                </div>
                                <div id="panel-crypto" role="tabpanel" tabIndex={0} aria-labelledby="tab-crypto" hidden={paymentTab !== 'crypto'}>
                                    <div>
                                        <p className="mb-2">{t.payment.crypto.text}</p>
                                        <div className="bg-gray-100 p-3 rounded-md text-sm break-all font-mono">0x1234...AbCd</div>
                                        <div className="flex items-center justify-center gap-4 mt-4">
                                            <p>{t.payment.crypto.accept}</p>
                                            <img src="https://via.placeholder.com/40x40.png?text=BTC" alt="Bitcoin" className="w-10 h-10"/>
                                            <img src="https://via.placeholder.com/40x40.png?text=ETH" alt="Ethereum" className="w-10 h-10"/>
                                        </div>
                                    </div>
                                </div>
                                 <div id="panel-card" role="tabpanel" tabIndex={0} aria-labelledby="tab-card" hidden={paymentTab !== 'card'}>
                                    <form className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium">{t.payment.card.number}</label>
                                            <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="0000 0000 0000 0000" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium">{t.payment.card.expiry}</label>
                                                <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="MM / YY" />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium">{t.payment.card.cvc}</label>
                                                <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="123" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium">{t.payment.card.name}</label>
                                            <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="Full Name" />
                                        </div>
                                         <div className="flex items-center gap-4">
                                            <img src="https://via.placeholder.com/50x32.png?text=Visa" alt="Visa" className="h-8"/>
                                            <img src="https://via.placeholder.com/50x32.png?text=MasterCard" alt="MasterCard" className="h-8"/>
                                            <img src="https://via.placeholder.com/50x32.png?text=PayPal" alt="PayPal" className="h-8"/>
                                        </div>
                                         <button type="submit" className="w-full mt-4 bg-dark-golden text-light-text font-bold py-3 px-8 rounded-full hover:bg-primary-text transition duration-300">
                                            {t.payment.card.pay} ${total.toFixed(2)}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </ParallaxSection>
            
            <ParallaxSection index={1} className="py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h3 className="text-3xl font-display text-dark-golden mb-8 text-center">{t.shippingInfo.title}</h3>
                    <div className="space-y-6 text-primary-text/90">
                        <div>
                            <h4 className="font-bold text-lg text-primary-text mb-2">{t.shippingInfo.policy.title}</h4>
                            <p>{t.shippingInfo.policy.text}</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-primary-text mb-2">{t.shippingInfo.delivery.title}</h4>
                            <p className="whitespace-pre-wrap">{t.shippingInfo.delivery.text}</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-primary-text mb-2">{t.shippingInfo.customs.title}</h4>
                            <p>{t.shippingInfo.customs.text}</p>
                        </div>
                    </div>
                </div>
            </ParallaxSection>
        </div>
    );
}

const BlogPage = ({ selectedPost, setSelectedPost }: { selectedPost: BlogPost | null, setSelectedPost: (post: BlogPost | null) => void }) => {
    const { translations } = useLocalization();
    const t = translations.blog;

    const handleSelectPost = (post: BlogPost) => {
        setSelectedPost(post);
        window.scrollTo(0, 0);
        trackPageView(`/#blog/${post.id}`);
    };
    
    const handleBackToList = () => {
        setSelectedPost(null);
        window.scrollTo(0, 0);
        trackPageView('/#blog');
    };

    if (selectedPost) {
        return (
            <ParallaxSection index={0} className="py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <button onClick={handleBackToList} className="mb-8 text-dark-golden font-semibold hover:underline">
                        &larr; {t.back}
                    </button>
                    <h1 className="text-4xl md:text-5xl font-display text-primary-text mb-4">{selectedPost.title}</h1>
                    <img src={selectedPost.coverImage} alt={selectedPost.title} className="w-full aspect-[4/3] object-cover rounded-lg shadow-lg mb-8" />
                    <div className="prose lg:prose-xl max-w-none text-primary-text/90 space-y-6">
                        {selectedPost.content.map((item, index) => {
                            switch (item.type) {
                                case 'heading':
                                    return <h2 key={index} className="font-display text-dark-golden">{item.text}</h2>;
                                case 'paragraph':
                                    return <p key={index}>{item.text}</p>;
                                case 'image':
                                    return <img key={index} src={item.src} alt={item.alt} className="rounded-lg shadow-md" />;
                                default:
                                    return null;
                            }
                        })}
                    </div>
                </div>
            </ParallaxSection>
        );
    }
    
    return (
        <div>
            <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
                <h2 className="text-5xl md:text-6xl font-display text-golden-accent">{t.header.title}</h2>
                <p className="mt-4 text-xl max-w-3xl mx-auto">{t.header.subtitle}</p>
            </header>
            <ParallaxSection index={0} className="py-16 px-4 md:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl space-y-8">
                        {t.posts.map(post => (
                            <div key={post.id} onClick={() => handleSelectPost(post)} className="border border-medium-bg/50 rounded-lg overflow-hidden group transition-shadow duration-300 hover:shadow-2xl cursor-pointer flex flex-col md:flex-row">
                                <img src={post.coverImage} alt={post.title} className="w-full md:w-1/3 object-cover aspect-video md:aspect-[4/3] group-hover:opacity-90 transition-opacity" />
                                <div className="p-6 flex flex-col w-full md:w-2/3">
                                    <h3 className="text-xl font-display text-dark-golden group-hover:text-golden-accent transition-colors">{post.title}</h3>
                                    <p className="mt-2 text-primary-text/80 flex-grow">
                                        {post.introduction}
                                    </p>
                                    <span className="mt-4 self-start text-dark-golden font-semibold group-hover:underline">
                                        {t.readMore} &rarr;
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </ParallaxSection>
        </div>
    );
};

// --- Main Layout Components ---

const Header = ({ setPage, currentPage }: { setPage: (page: Page) => void, currentPage: Page }) => {
    const { language, setLanguage, translations } = useLocalization();
    const t = translations.nav;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

    const languages: { code: Language, name: string, flag: string }[] = [
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'th', name: 'ไทย', flag: '🇹🇭' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'ja', name: '日本語', flag: '🇯🇵' },
        { code: 'ko', name: '한국어', flag: '🇰🇷' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'zh', name: '中文', flag: '🇨🇳' },
    ];
    const currentLang = languages.find(l => l.code === language);

    const navigate = (page: Page) => {
        setPage(page);
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
        trackPageView(`/#${page}`);
    };

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        setIsLangDropdownOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-light-bg/80 backdrop-blur-md border-b border-medium-bg">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" onClick={() => navigate(Page.Home)} className="flex items-center space-x-2">
                            <img className="h-12 w-auto" src="https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-logo-smll.webp" alt="Golden Taan Logo" />
                             <span className="font-display text-2xl text-primary-text tracking-wider">Golden TAAN</span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <div className="relative">
                                <button onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)} onClick={() => navigate(Page.Home)} className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === Page.Home ? 'text-dark-golden' : 'text-primary-text hover:text-dark-golden'}`}>
                                    {t.home}
                                </button>
                                {isDropdownOpen && (
                                    <div onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)} className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            {t.homeSubItems.map(item => (
                                                <a href={item.id} key={item.id} onClick={(e) => { e.preventDefault(); document.querySelector(item.id)?.scrollIntoView({ behavior: 'smooth' }); setIsDropdownOpen(false); trackPageView(`/${item.id}`); }} className="block px-4 py-2 text-sm text-primary-text hover:bg-light-bg">{item.label}</a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <button onClick={() => navigate(Page.About)} className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === Page.About ? 'text-dark-golden' : 'text-primary-text hover:text-dark-golden'}`}>{t.ourStory}</button>
                            <button onClick={() => navigate(Page.Heritage)} className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === Page.Heritage ? 'text-dark-golden' : 'text-primary-text hover:text-dark-golden'}`}>{t.heritage}</button>
                            <button onClick={() => navigate(Page.Sustainability)} className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === Page.Sustainability ? 'text-dark-golden' : 'text-primary-text hover:text-dark-golden'}`}>{t.sustainability}</button>
                            <button onClick={() => navigate(Page.Wholesale)} className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === Page.Wholesale ? 'text-dark-golden' : 'text-primary-text hover:text-dark-golden'}`}>{t.wholesale}</button>
                            <button onClick={() => navigate(Page.Blog)} className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === Page.Blog ? 'text-dark-golden' : 'text-primary-text hover:text-dark-golden'}`}>{t.blog}</button>
                            
                             {/* Language Selector */}
                            <div className="relative">
                                <button onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)} className="px-3 py-2 rounded-md text-sm font-medium text-primary-text hover:text-dark-golden flex items-center" aria-haspopup="true" aria-expanded={isLangDropdownOpen} aria-label="Select language">
                                    <span>{currentLang?.flag}</span>
                                    <span className="ml-2">{currentLang?.name}</span>
                                </button>
                                {isLangDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1" role="menu" aria-orientation="vertical">
                                            {languages.map(lang => (
                                                <button key={lang.code} onClick={() => handleSetLanguage(lang.code)} className="w-full text-left block px-4 py-2 text-sm text-primary-text hover:bg-light-bg" role="menuitem">
                                                    {lang.flag} {lang.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                             <button onClick={() => navigate(Page.ShopNow)} className="ml-4 bg-golden-accent text-primary-text font-bold py-2 px-4 rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-105">
                                {t.shopNow}
                            </button>
                        </div>
                    </div>
                    
                    {/* Mobile Menu Controls */}
                    <div className="flex items-center md:hidden">
                        {/* Language Selector for Mobile */}
                        <div className="relative">
                            <button onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)} className="p-2 rounded-md text-sm font-medium text-primary-text hover:text-dark-golden flex items-center" aria-haspopup="true" aria-expanded={isLangDropdownOpen} aria-label="Select language">
                                <span>{currentLang?.flag}</span>
                            </button>
                            {isLangDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                    <div className="py-1" role="menu" aria-orientation="vertical">
                                        {languages.map(lang => (
                                            <button key={lang.code} onClick={() => handleSetLanguage(lang.code)} className="w-full text-left block px-4 py-2 text-sm text-primary-text hover:bg-light-bg" role="menuitem">
                                                {lang.flag} {lang.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Hamburger Menu Button */}
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-primary-text bg-medium-bg/50 hover:bg-medium-bg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-dark-golden" aria-controls="mobile-menu" aria-expanded={isMenuOpen}>
                            <span className="sr-only">Open main menu</span>
                            <SvgIcon path={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <button onClick={() => navigate(Page.Home)} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-primary-text hover:text-dark-golden hover:bg-medium-bg">{t.home}</button>
                        <button onClick={() => navigate(Page.About)} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-primary-text hover:text-dark-golden hover:bg-medium-bg">{t.ourStory}</button>
                        <button onClick={() => navigate(Page.Heritage)} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-primary-text hover:text-dark-golden hover:bg-medium-bg">{t.heritage}</button>
                        <button onClick={() => navigate(Page.Sustainability)} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-primary-text hover:text-dark-golden hover:bg-medium-bg">{t.sustainability}</button>
                        <button onClick={() => navigate(Page.Wholesale)} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-primary-text hover:text-dark-golden hover:bg-medium-bg">{t.wholesale}</button>
                        <button onClick={() => navigate(Page.Blog)} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-primary-text hover:text-dark-golden hover:bg-medium-bg">{t.blog}</button>
                        
                        <button onClick={() => navigate(Page.ShopNow)} className="block w-full text-center mt-4 bg-golden-accent text-primary-text font-bold py-2 px-4 rounded-full hover:bg-yellow-500">
                            {t.shopNow}
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

const Footer = () => {
    const { translations } = useLocalization();
    const t = translations.footer;
    const year = new Date().getFullYear();
    const socialLinks = [
        { name: 'Facebook', href: '#', path: 'M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.196h3.312z' },
        { name: 'Instagram', href: '#', path: 'M12 2C8.134 2 5 5.134 5 9c0 1.388.423 2.68.969 3.693-.05.16-.09.324-.128.494-.038.17-.07.342-.1.516-.03.174-.05.35-.07.528-.02.178-.04.356-.05.537-.01.18-.02.36-.02.542V15c0 3.866 3.134 7 7 7s7-3.134 7-7v-.188c0-.182-.01-.362-.02-.542-.01-.18-.03-.36-.05-.537-.02-.178-.04-.354-.07-.528-.03-.174-.06-.346-.1-.516-.038-.17-.08-.334-.128-.494A6.945 6.945 0 0 0 19 9c0-3.866-3.134-7-7-7zm0 2c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm0 2c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm5.854-1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z' },
        { name: 'TikTok', href: '#', path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.95-6.43-2.8-1.59-1.87-2.13-4.38-1.73-6.73.34-1.94 1.46-3.64 2.96-4.85.94-.75 2.06-1.25 3.25-1.48.02-.48.01-.96.01-1.43.01-2.52 0-5.04 0-7.56C7.81 2.52 9.47.95 12.525.02z'},
        { name: 'LinkedIn', href: '#', path: 'M16.338 16.338H13.67V12.16c0-.996-.017-2.277-1.387-2.277-1.388 0-1.601 1.086-1.601 2.206v4.248H8.014V8.338h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.651zM5.337 7.163a1.448 1.448 0 1 1 0-2.895 1.448 1.448 0 0 1 0 2.895zM6.617 16.338H4.06v-8h2.557v8zM17.638 2H6.362A4.362 4.362 0 0 0 2 6.362v11.276A4.362 4.362 0 0 0 6.362 22h11.276A4.362 4.362 0 0 0 22 17.638V6.362A4.362 4.362 0 0 0 17.638 2z' },
        { name: 'X', href: '#', path: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z' }
    ];

    return (
        <footer id="contact" className="bg-primary-text text-light-text/80 py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-display text-2xl text-light-text mb-4">Golden TAAN Co., Ltd.</h3>
                    <p>{t.address}</p>
                </div>
                <div>
                    <h3 className="font-display text-2xl text-light-text mb-4">{t.contactPerson.label}</h3>
                    <p>{t.contactPerson.name}</p>
                    <p>{t.phone.label}: {t.phone.number}</p>
                    <p>{t.email.label}: <a href={`mailto:${t.email.address}`} className="hover:text-golden-accent">{t.email.address}</a></p>
                </div>
                <div>
                    <h3 className="font-display text-2xl text-light-text mb-4">{t.quickLinks}</h3>
                     <ul className="space-y-2">
                        <li><a href="#our-story" className="hover:text-golden-accent">{translations.nav.ourStory}</a></li>
                        <li><a href="#health-benefits" className="hover:text-golden-accent">{translations.nav.homeSubItems[1].label}</a></li>
                        <li><a href="#sustainability" className="hover:text-golden-accent">{translations.nav.sustainability}</a></li>
                        <li><a href="#products" className="hover:text-golden-accent">{translations.nav.homeSubItems[2].label}</a></li>
                    </ul>
                </div>
                 <div>
                    <h3 className="font-display text-2xl text-light-text mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        {socialLinks.map(link => (
                            <a key={link.name} href={link.href} className="text-light-text/80 hover:text-golden-accent transition-colors" aria-label={link.name}>
                                <SvgIcon path={link.path} className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-light-text/20 text-center text-sm">
                <p>{t.copyright.replace('{year}', year.toString())}</p>
            </div>
        </footer>
    )
};

const SoftLaunchModal = ({ onClose }: { onClose: () => void }) => {
    const translations = {
      en: { title: "Welcome to the New Golden TAAN", body: "Our website is in a soft launch phase as we finalize our content. You are welcome to explore our authentic Palmyra Palm Sugar products. The complete, feature-rich website will officially launch on 15 September 2025.", note: "Last Updated: 27 August 2025", button: "Continue to Site" },
      th: { title: "ยินดีต้อนรับสู่ โกลเด้น ตาล", body: "เว็บไซต์ของเราอยู่ในช่วง Soft Launch และกำลังปรับปรุงเนื้อหา ขอเชิญทุกท่านเข้าชมผลิตภัณฑ์น้ำตาลโตนดแท้ของเราได้ก่อนใคร เว็บไซต์ฉบับสมบูรณ์จะเปิดตัวอย่างเป็นทางการในวันที่ 15 กันยายน 2025", note: "อัปเดตล่าสุด: 27 สิงหาคม 2025", button: "เข้าชมเว็บไซต์" },
      de: { title: "Willkommen bei Golden TAAN", body: "Unsere Website befindet sich in einer Soft-Launch-Phase. Entdecken Sie gerne unsere authentischen Palmyra-Palmzucker-Produkte. Die vollständige Website wird am 15. September 2025 offiziell gestartet.", note: "Letzte Aktualisierung: 27. August 2025", button: "Weiter zur Seite" },
      ja: { title: "ゴールデン・ターンへようこそ", body: "当社のウェブサイトは現在ソフトローンチ段階です。本物のパルミラヤシ糖製品をぜひご覧ください。完全版のウェブサイトは2025年9月15日に正式に公開されます。", note: "最終更新日：2025年8月27日", button: "サイトに進む" },
      ko: { title: "골든 탄에 오신 것을 환영합니다", body: "저희 웹사이트는 현재 소프트 론칭 단계에 있습니다。 저희의 정통 팔미라 야자 설탕 제품을 둘러보세요。 전체 웹사이트는 2025년 9월 15일에 공식적으로 출시됩니다。", note: "마지막 업데이트: 2025년 8월 27일", button: "사이트 계속 보기" },
      fr: { title: "Bienvenue chez Golden TAAN", body: "Notre site web est en phase de pré-lancement. N'hésitez pas à découvrir nos produits authentiques de sucre de palme Palmyra. Le site complet sera officiellement lancé le 15 septembre 2025.", note: "Dernière mise à jour : 27 août 2025", button: "Continuer vers le site" },
      zh: { title: "欢迎来到 Golden TAAN", body: "我们的网站目前处于试运行阶段。欢迎您探索我们正宗的巴尔米拉棕榈糖产品。功能齐全的完整网站将于2025年9月15日正式上线。", note: "最后更新：2025年8月27日", button: "继续浏览" }
    };

    type ModalLang = keyof typeof translations;
    const [lang, setLang] = useState<ModalLang>('en');
    const content = translations[lang];

    const languages: { code: ModalLang, flag: string, name: string }[] = [
        { code: 'en', flag: '🇬🇧', name: 'English' },
        { code: 'th', flag: '🇹🇭', name: 'Thai' },
        { code: 'de', flag: '🇩🇪', name: 'German' },
        { code: 'ja', flag: '🇯🇵', name: 'Japanese' },
        { code: 'ko', flag: '🇰🇷', name: 'Korean' },
        { code: 'fr', flag: '🇫🇷', name: 'French' },
        { code: 'zh', flag: '🇨🇳', name: 'Chinese' },
    ];

    return (
        <div className="fixed inset-0 bg-black/75 z-[200] flex items-center justify-center p-4 animate-fade-in" role="dialog" aria-modal="true" aria-labelledby="softlaunch-title">
            <div className="bg-[#FAF9F6] text-[#3D2B1F] rounded-lg shadow-2xl max-w-lg w-full p-8 relative font-sans">
                <div className="absolute top-4 right-4">
                    <div className="flex space-x-2">
                        {languages.map(({ code, flag, name }) => (
                            <button
                                key={code}
                                onClick={() => setLang(code)}
                                className={`px-2 py-1 rounded-md text-xl transition-transform transform hover:scale-110 ${lang === code ? 'bg-black/10' : ''}`}
                                aria-label={`Switch to ${name}`}
                            >
                                {flag}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="text-center pt-8">
                    <h2 id="softlaunch-title" className="text-3xl font-display mb-4">{content.title}</h2>
                    <p className="mb-6">{content.body}</p>
                    <p className="text-sm text-[#3D2B1F]/60 mb-8">{content.note}</p>
                    <button
                        onClick={onClose}
                        className="bg-[#3D2B1F] text-[#FAF9F6] font-bold py-3 px-12 rounded-full hover:bg-opacity-80 transition duration-300 transform hover:scale-105"
                    >
                        {content.button}
                    </button>
                </div>
            </div>
        </div>
    );
};


const App = () => {
    const [currentPage, setCurrentPage] = useState<Page>(() => {
        const hash = window.location.hash.replace('#', '');
        return Object.values(Page).includes(hash as Page) ? hash as Page : Page.Home;
    });

    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    // --- Localization State ---
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (Object.values(Page).includes(hash as Page)) {
                setCurrentPage(hash as Page);
                if(hash !== Page.Blog) setSelectedPost(null); // Clear selected post when navigating away from blog
                trackPageView(`/#${hash}`);
            } else {
                setCurrentPage(Page.Home);
                trackPageView('/#home');
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Initial check

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    useEffect(() => {
        if (sessionStorage.getItem('softLaunchModalClosed') !== 'true') {
            setIsModalVisible(true);
        }
    }, []);

    const handleCloseModal = () => {
        setIsModalVisible(false);
        sessionStorage.setItem('softLaunchModalClosed', 'true');
    };

    const setPage = (page: Page) => {
        window.location.hash = page;
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
    
    const handleUpdateQuantity = (id: string, amount: number) => {
        setCartItems(prevItems => {
            return prevItems
                .map(item => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
                .filter(item => item.quantity > 0);
        });
    };

    const localizationContextValue: LocalizationContextType = {
        language,
        setLanguage: (lang: Language) => {
            setLanguage(lang);
            document.documentElement.lang = lang;
        },
        translations: siteContent[language] || siteContent.en
    };

    const renderPage = () => {
        switch (currentPage) {
            case Page.Home: return <HomePage onAddToCart={handleAddToCart} setPage={setPage} setSelectedPost={setSelectedPost} />;
            case Page.About: return <AboutUsPage />;
            case Page.Heritage: return <HeritagePage />;
            case Page.Sustainability: return <SustainabilityPage />;
            case Page.Wholesale: return <WholesalePage />;
            case Page.Blog: return <BlogPage selectedPost={selectedPost} setSelectedPost={setSelectedPost} />;
            case Page.ShopNow: return <ShopNowPage cartItems={cartItems} onUpdateQuantity={handleUpdateQuantity} setPage={setPage} />;
            default: return <HomePage onAddToCart={handleAddToCart} setPage={setPage} setSelectedPost={setSelectedPost} />;
        }
    };
    
    useEffect(() => {
        const t = localizationContextValue.translations;
        document.title = t.metaTitle;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', t.metaDescription);
        }
    }, [localizationContextValue.translations]);

    return (
        <LocalizationContext.Provider value={localizationContextValue}>
             {isModalVisible && <SoftLaunchModal onClose={handleCloseModal} />}
            <div className="pt-20">
                <Header setPage={setPage} currentPage={currentPage} />
                <main>
                    {renderPage()}
                </main>
                <Footer />
            </div>
        </LocalizationContext.Provider>
    );
};

export default App;