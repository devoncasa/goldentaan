// Fix: Add useMemo for optimization in LocalizationProvider
import React, { useState, useEffect, useRef, useCallback, createContext, useContext, useMemo } from 'react';
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

// --- SEO & Schema Components ---
const SchemaInjector = ({ schema }: { schema: object }) => {
    useEffect(() => {
        const scriptId = 'dynamic-schema-script';
        // Remove existing schema script if it exists
        const existingScript = document.getElementById(scriptId);
        if (existingScript) {
            existingScript.remove();
        }

        // Add new schema script
        const script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify(schema);
        document.head.appendChild(script);

        return () => {
            const scriptInHead = document.getElementById(scriptId);
            if (scriptInHead) {
                scriptInHead.remove();
            }
        };
    }, [schema]);

    return null;
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
                    <Radar name="Golden TAAN" dataKey="Golden Taan" stroke="#E5B84B" fill="#E5B84B" fillOpacity={0.6} />
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

const ProductDetailModal = ({ product, onClose, onAddToCart, setPage, setSelectedPost }: { product: Product, onClose: () => void, onAddToCart: (product: Product) => void, setPage: (page: Page) => void, setSelectedPost: (post: BlogPost | null) => void }) => {
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

    const productSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.title,
        "image": product.img,
        "description": product.description,
        "sku": product.id,
        "brand": {
            "@type": "Brand",
            "name": "Golden TAAN"
        },
        "offers": {
            "@type": "Offer",
            "url": `https://www.goldentaan.com/#${Page.ShopNow}`,
            "priceCurrency": "USD",
            "price": product.price.toFixed(2),
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
        },
         "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "187"
        }
    };


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
            <SchemaInjector schema={productSchema} />
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

const ProductSchemas = ({ products }: { products: Product[] }) => {
    const productSchemas = useMemo(() => products.map(product => ({
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.title,
        "image": product.img,
        "description": product.shortDescription,
        "sku": product.id,
        "brand": {
            "@type": "Brand",
            "name": "Golden TAAN"
        },
        "offers": {
            "@type": "Offer",
            "url": `https://www.goldentaan.com/#products`,
            "priceCurrency": "USD",
            "price": product.price.toFixed(2),
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "187"
        }
    })), [products]);

    useEffect(() => {
        const injectedScripts: HTMLScriptElement[] = [];
        document.querySelectorAll('script[data-schema-type="homepage-product"]').forEach(node => node.remove());

        productSchemas.forEach(schema => {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.setAttribute('data-schema-type', 'homepage-product');
            script.innerHTML = JSON.stringify(schema);
            document.head.appendChild(script);
            injectedScripts.push(script);
        });

        return () => {
            injectedScripts.forEach(script => {
                if (document.head.contains(script)) {
                    document.head.removeChild(script);
                }
            });
        };
    }, [productSchemas]);

    return null;
};

const HomePage = ({ onAddToCart, setPage, setSelectedPost, onProductSelect }: { onAddToCart: (product: Product) => void, setPage: (page: Page) => void, setSelectedPost: (post: BlogPost | null) => void, onProductSelect: (product: Product) => void }) => {
    const { translations } = useLocalization();
    const t = translations.home;
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    const [showAllFaqs, setShowAllFaqs] = useState(false);
    const [addedProductId, setAddedProductId] = useState<string | null>(null);
    
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

     const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <div>
            <SchemaInjector schema={faqSchema} />
            <ProductSchemas products={products} />
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
                <div className="relative z-10 text-center p-4 w-full lg:w-3/5 max-w-[1200px] mx-auto">
                    <img src="https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-logo-smll.webp" alt={t.seo.altTags.logo} className="h-24 md:h-32 mx-auto mb-8" />
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
                        <img src={`${ASSET_BASE_URL}ratchaburi-farming-community.webp`} alt={t.seo.altTags.farmingCommunity} className="rounded-lg shadow-xl aspect-[4/3] object-cover" />
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
                            <img src={`${ASSET_BASE_URL}traditional-simmering-kettle-fire.webp`} alt={t.seo.altTags.artisanalProcess} className="rounded-md mb-6 aspect-video object-cover"/>
                            <ul className="space-y-2 list-decimal list-inside">
                                {t.process.artisanal.steps.map((step, i) => <li key={i}><strong>{step.title}:</strong> {renderStyledText(step.description)}</li>)}
                            </ul>
                        </div>
                        <div className="border border-medium-bg/50 p-8 rounded-lg">
                            <h3 className="text-2xl font-display text-gray-600 mb-4">{renderStyledText(t.process.industrial.title)}</h3>
                            <img src={`${ASSET_BASE_URL}palmyra-leaf-texture-macro.webp`} alt={t.seo.altTags.industrialProcess} className="rounded-md mb-6 aspect-video object-cover"/>
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
                    <img src={`${ASSET_BASE_URL}ratchaburi-farming-community.webp`} alt={t.seo.altTags.communityCollage} className="rounded-lg shadow-xl aspect-video object-cover w-full"/>
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
                                <div onClick={() => onProductSelect(p)} className="cursor-pointer">
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
        </div>
    );
};


const AboutUsPage = () => {
    const { translations } = useLocalization();
    const t = translations.about;

    return (
    <div>
        <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
            <h1 className="text-5xl md:text-6xl font-display text-golden-accent">{renderStyledText(t.header.title)}</h1>
            <p className="mt-4 text-xl max-w-3xl mx-auto">{renderStyledText(t.header.subtitle)}</p>
        </header>

        <ParallaxSection index={0} className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-display text-dark-golden mb-4">{renderStyledText(t.roots.title)}</h2>
                        <p className="text-lg text-primary-text/90">{renderStyledText(t.roots.text)}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src={`${ASSET_BASE_URL}farmer-climbing-palm-tree.webp`} alt={t.seo.altTags.farmerClimbing} className="rounded-lg shadow-xl aspect-[3/4] object-cover" />
                        <img src={`${ASSET_BASE_URL}ratchaburi-palm-groves-landscape.webp`} alt={t.seo.altTags.ratchaburiGroves} className="rounded-lg shadow-xl aspect-[3/4] object-cover mt-8" />
                    </div>
                </div>
            </div>
        </ParallaxSection>

         <ParallaxSection index={1} className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                     <div className="grid grid-cols-2 gap-4 order-last md:order-first">
                        <img src={`${ASSET_BASE_URL}golden-taan-blocks.webp`} alt={t.seo.altTags.sugarCrystals} className="rounded-lg shadow-xl aspect-[3/4] object-cover" />
                        <img src={`${ASSET_BASE_URL}traditional-simmering-kettle-fire.webp`} alt={t.seo.altTags.artisanCrafting} className="rounded-lg shadow-xl aspect-[3/4] object-cover mt-8" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-display text-dark-golden mb-4">{renderStyledText(t.fadingGold.title)}</h2>
                        <p className="text-lg text-primary-text/90">{renderStyledText(t.fadingGold.text)}</p>
                    </div>
                </div>
            </div>
        </ParallaxSection>

        <ParallaxSection index={2} className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-display text-dark-golden mb-4">{renderStyledText(t.mission.title)}</h2>
                        <p className="text-lg text-primary-text/90">{renderStyledText(t.mission.text)}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src={`${ASSET_BASE_URL}modern-kitchen-with-palmyra-sugar.webp`} alt={t.seo.altTags.modernKitchen} className="rounded-lg shadow-xl aspect-[3/4] object-cover" />
                        <img src={`${ASSET_BASE_URL}healthy-lifestyle-with-low-gi.webp`} alt={t.seo.altTags.healthyLifestyle} className="rounded-lg shadow-xl aspect-[3/4] object-cover mt-8" />
                    </div>
                </div>
            </div>
        </ParallaxSection>

         <ParallaxSection index={3} className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                 <h2 className="text-4xl font-display text-center text-dark-golden mb-8">{renderStyledText(t.timelineTitle)}</h2>
                <div className="relative border-l-2 border-dark-golden/30 ml-6 md:ml-0">
                    {t.timeline.map((item, index) => (
                        <div key={index} className="mb-10 ml-10">
                            <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-medium-bg rounded-full ring-4 ring-light-bg">
                                <SvgIcon path="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" className="w-5 h-5 text-dark-golden" />
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-primary-text">{item.title} <span className="text-dark-golden text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3 bg-dark-golden/10">{item.era}</span></h3>
                            <p className="text-base font-normal text-primary-text/80">{renderStyledText(item.description)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </ParallaxSection>
        
        <ParallaxSection index={4} className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                <h2 className="text-4xl font-display text-center text-dark-golden mb-8">{renderStyledText(t.people.title)}</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center">
                         <img src={`${ASSET_BASE_URL}founder-krisada-laohasiri.webp`} alt={t.seo.altTags.founderPortrait} className="w-48 h-48 rounded-full mx-auto mb-4 shadow-lg object-cover" />
                        <h3 className="text-2xl font-semibold">{t.people.founderName}</h3>
                        <p className="text-primary-text/80 italic mt-2">"{renderStyledText(t.people.founderQuote)}"</p>
                    </div>
                     <div>
                        <h3 className="text-3xl font-display text-dark-golden mb-4">{renderStyledText(t.people.communityTitle)}</h3>
                        <p className="text-lg text-primary-text/90">{renderStyledText(t.people.communityText)}</p>
                    </div>
                </div>
            </div>
        </ParallaxSection>

        <ParallaxSection index={5} className="py-16 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl text-center">
                <h2 className="text-4xl font-display text-dark-golden mb-4">{renderStyledText(t.choice.title)}</h2>
                <p className="text-lg text-primary-text/90 max-w-3xl mx-auto">{renderStyledText(t.choice.text)}</p>
                <button onClick={() => window.location.hash = Page.ShopNow} className="mt-8 bg-golden-accent text-primary-text font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-105">{translations.nav.shopNow}</button>
            </div>
        </ParallaxSection>
    </div>
    );
};

const SustainabilityPage = () => {
    const { translations } = useLocalization();
    const t = translations.sustainability;

    const renderPoints = (points: {title: string, text: string}[]) => (
        <div className="grid md:grid-cols-2 gap-8">
            {points.map((point, index) => (
                <div key={index} className="bg-white/50 p-6 rounded-lg shadow-md">
                    <h4 className="font-display text-xl text-dark-golden mb-2">{renderStyledText(point.title)}</h4>
                    <p className="text-primary-text/90">{renderStyledText(point.text)}</p>
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
                <h1 className="text-5xl md:text-6xl font-display text-golden-accent">{renderStyledText(t.header.title)}</h1>
                <p className="mt-4 text-xl max-w-3xl mx-auto">{renderStyledText(t.header.subtitle)}</p>
            </header>
            
            <ParallaxSection index={0} className="py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h2 className="text-3xl font-display text-center text-dark-golden mb-8">{renderStyledText(t.environmental.title)}</h2>
                    {renderPoints(t.environmental.points)}
                </div>
            </ParallaxSection>

            <ParallaxSection index={1} className="py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h2 className="text-3xl font-display text-center text-dark-golden mb-8">{renderStyledText(t.social.title)}</h2>
                    {renderPoints(t.social.points)}
                </div>
            </ParallaxSection>

            <ParallaxSection index={2} className="py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h2 className="text-3xl font-display text-center text-dark-golden mb-8">{renderStyledText(t.governance.title)}</h2>
                    {renderPoints(t.governance.points)}
                </div>
            </ParallaxSection>

            <ParallaxSection index={3} className="py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h2 className="text-3xl font-display text-center text-dark-golden mb-8">{renderStyledText(t.insights.title)}</h2>
                    <h3 className="text-2xl font-display text-center mb-4">{renderStyledText(t.insights.chartTitle)}</h3>
                    <ResourceEfficiencyRadarChart />
                </div>
            </ParallaxSection>
        </div>
    );
};

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = useCallback(() => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, [toggleVisibility]);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 bg-dark-golden text-light-text p-3 rounded-full shadow-lg transition-opacity duration-300 z-[99] ${isVisible ? 'opacity-100 hover:bg-primary-text' : 'opacity-0 pointer-events-none'}`}
            aria-label="Go to top"
        >
            <SvgIcon path="M12 8.25L5.625 14.625 6.687 15.687 12 10.375 17.313 15.687 18.375 14.625z" className="w-6 h-6" />
        </button>
    );
};


const HeritagePage = () => {
    const { translations } = useLocalization();
    const t = translations.heritage;
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

    const renderContent = (content: string) => {
        // Split by the image tag, keeping the delimiter
        const parts = content.split(/(\[image:.*?\])/g).filter(part => part);

        return parts.map((part, index) => {
            const match = part.match(/\[image:(.*?)\s*\|\s*ratio:\s*(.*?)\]/);
            if (match) {
                const [, src, ratio] = match;
                const imageName = src.trim();
                const altKey = imageName.substring(0, imageName.lastIndexOf('.'));
                const [width, height] = ratio.split(':');
                
                return (
                    <div key={index} className="my-6" style={{ aspectRatio: `${width} / ${height}` }}>
                        <img 
                            src={`${ASSET_BASE_URL}${imageName}`} 
                            alt={t.seo.altTags[altKey] || altKey}
                            className="rounded-lg shadow-lg w-full h-full object-cover"
                        />
                    </div>
                );
            }
            // Render text parts, splitting by newlines to create paragraphs
            return part.split('\n').map((text, i) => (
                text.trim() && <p key={`${index}-${i}`} className="mb-4 whitespace-pre-wrap">{renderStyledText(text)}</p>
            ));
        });
    };

    return (
        <div>
            <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
                <h1 className="text-5xl md:text-6xl font-display text-golden-accent">{renderStyledText(t.header.title)}</h1>
                <p className="mt-4 text-xl max-w-3xl mx-auto">{renderStyledText(t.header.subtitle)}</p>
            </header>

            <ParallaxSection index={6} className="py-16 px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    {t.sections.map((section, index) => (
                        <div key={index} className="border-b border-medium-bg last:border-b-0 py-6">
                            <button
                                onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                                className="w-full text-left flex justify-between items-center group"
                                aria-expanded={openAccordion === index}
                                aria-controls={`accordion-content-${index}`}
                            >
                                <div className="flex-grow">
                                    <h2 className="text-3xl font-display text-dark-golden group-hover:text-primary-text transition-colors">{renderStyledText(section.title)}</h2>
                                    <p className="text-md text-primary-text/70 mt-1">{renderStyledText(section.subtitle)}</p>
                                </div>
                                <span className={`transform transition-transform duration-300 ${openAccordion === index ? 'rotate-180' : 'rotate-0'}`}>
                                    <SvgIcon path="M19.5 8.25l-7.5 7.5-7.5-7.5" className="w-5 h-5"/>
                                </span>
                            </button>
                            <div
                                id={`accordion-content-${index}`}
                                className={`overflow-hidden transition-all duration-700 ease-in-out ${openAccordion === index ? 'max-h-[3000px] mt-6' : 'max-h-0'}`}
                            >
                                <div className="prose max-w-none text-primary-text/90">
                                    {renderContent(section.content)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ParallaxSection>
            <ScrollToTopButton />
        </div>
    );
};


// --- Blog Components ---
const BlogPostPage = ({ post, onBack }: { post: BlogPost; onBack: () => void; }) => {
    const { translations } = useLocalization();
    const t = translations.blog;

    return (
        <div className="max-w-3xl mx-auto p-4 md:p-8 animate-fade-in">
            <button onClick={onBack} className="mb-8 text-dark-golden hover:underline">&larr; {t.back}</button>
            <h1 className="text-4xl md:text-5xl font-display text-dark-golden mb-4">{renderStyledText(post.title)}</h1>
            <img src={`${ASSET_BASE_URL}${post.coverImage}`} alt={post.title} className="w-full h-auto object-cover rounded-lg mb-6"/>
            <p className="text-lg text-primary-text/80 italic mb-8">{renderStyledText(post.introduction)}</p>
            <div className="prose max-w-none text-primary-text/90">
                {post.content.map((item, index) => {
                    switch (item.type) {
                        case 'heading':
                            return <h2 key={index} className="text-3xl font-display text-primary-text mt-8 mb-4">{renderStyledText(item.text)}</h2>;
                        case 'paragraph':
                            return <p key={index} className="mb-4 whitespace-pre-wrap">{renderStyledText(item.text)}</p>;
                        case 'image':
                            return <img key={index} src={`${ASSET_BASE_URL}${item.src}`} alt={item.alt || ''} className="rounded-lg my-6" />;
                        default:
                            return null;
                    }
                })}
            </div>
        </div>
    );
};

const BlogPage = ({ onPostSelect }: { onPostSelect: (post: BlogPost) => void }) => {
    const { translations } = useLocalization();
    const t = translations.blog;
    const [filter, setFilter] = useState<string>('all');

    const filteredPosts = filter === 'all'
        ? t.posts
        : t.posts.filter(p => p.category === filter);

    const categories = {
        'all': t.allCategories,
        'recipes': t.categories.recipes,
        'health': t.categories.health,
        'sustainability': t.categories.sustainability,
    };

    return (
        <div>
            <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
                <h1 className="text-5xl md:text-6xl font-display text-golden-accent">{renderStyledText(t.header.title)}</h1>
                <p className="mt-4 text-xl max-w-3xl mx-auto">{renderStyledText(t.header.subtitle)}</p>
            </header>
            <div className="max-w-7xl mx-auto p-4 md:p-8">
                <div className="mb-12 flex justify-center items-center flex-wrap gap-4">
                    <h3 className="font-bold text-lg">{t.filterTitle}:</h3>
                    {Object.entries(categories).map(([key, value]) => (
                        <button
                            key={key}
                            onClick={() => setFilter(key)}
                            className={`px-4 py-2 rounded-full transition-colors text-sm font-semibold ${filter === key ? 'bg-dark-golden text-light-text' : 'bg-medium-bg hover:bg-dark-accent/80'}`}
                        >
                            {value}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map(post => (
                        <div key={post.id} className="border border-medium-bg/50 rounded-lg overflow-hidden group transition-transform duration-300 hover:scale-105 flex flex-col cursor-pointer" onClick={() => onPostSelect(post)}>
                            <img src={post.coverImage.startsWith('http') ? post.coverImage : `${ASSET_BASE_URL}${post.coverImage}`} alt={post.title} className="w-full h-48 object-cover" />
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-2xl font-display text-dark-golden">{renderStyledText(post.title)}</h3>
                                <p className="mt-2 text-primary-text/80 flex-grow text-sm">{renderStyledText(post.introduction)}</p>
                                <span className="mt-4 text-dark-golden font-semibold group-hover:underline">{t.readMore} &rarr;</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ProductsPage = ({ onAddToCart, onProductSelect }: { onAddToCart: (product: Product) => void, onProductSelect: (product: Product) => void }) => {
    const { translations } = useLocalization();
    const t = translations.productsPage;

    const ProductCard = ({ product }: { product: Product }) => {
        const [isAdded, setIsAdded] = useState(false);
        const handleAddToCart = () => {
            onAddToCart(product);
            setIsAdded(true);
            setTimeout(() => setIsAdded(false), 2000);
        };
        return (
            <div className="border border-medium-bg/50 rounded-lg overflow-hidden group transition-transform duration-300 hover:scale-105 flex flex-col">
                <div onClick={() => onProductSelect(product)} className="cursor-pointer">
                    <img src={product.img} alt={product.title} className="w-full h-64 object-cover" />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-display text-dark-golden">{renderStyledText(product.title)}</h3>
                    <p className="mt-2 text-primary-text/80 flex-grow">{renderStyledText(product.shortDescription)}</p>
                    <p className="text-2xl font-display text-primary-text mt-4">${product.price.toFixed(2)}</p>
                </div>
                <div className="p-6 pt-0 mt-auto">
                    <button
                        onClick={handleAddToCart}
                        disabled={isAdded}
                        className="w-full bg-dark-golden text-light-text font-bold py-2 px-4 rounded-full hover:bg-primary-text transition duration-300 disabled:bg-green-600"
                    >
                        {isAdded ? translations.home.productSection.added : translations.home.productSection.addToCart}
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div>
            <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
                <h1 className="text-5xl md:text-6xl font-display text-golden-accent">{renderStyledText(t.retail.headline)}</h1>
                <p className="mt-4 text-xl max-w-3xl mx-auto">{renderStyledText(t.retail.subtitle)}</p>
            </header>
            
            <ParallaxSection index={0} className="py-16 px-4 md:px-8">
                <div className="max-w-5xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {t.retail.products.map(p => <ProductCard key={p.id} product={p} />)}
                    </div>
                </div>
            </ParallaxSection>

             <ParallaxSection index={1} className="py-16 px-4 md:px-8">
                <div className="max-w-5xl mx-auto bg-white/50 p-8 md:p-12 rounded-lg shadow-2xl">
                    <h2 className="text-4xl font-display text-center text-dark-golden mb-4">{renderStyledText(t.wholesale.headline)}</h2>
                    <p className="text-center text-lg max-w-3xl mx-auto mb-12">{renderStyledText(t.wholesale.subtitle)}</p>
                    
                     <div className="overflow-x-auto mt-8 rounded-lg shadow-lg border border-dark-accent/20">
                        <table className="min-w-full text-left border-collapse">
                           <thead className="bg-dark-golden/10">
                                <tr>
                                    <th className="p-3 font-display text-primary-text">{t.wholesale.pricingTable.headers.sku}</th>
                                    <th className="p-3 font-display text-primary-text">{t.wholesale.pricingTable.headers.product}</th>
                                    <th className="p-3 font-display text-primary-text">{t.wholesale.pricingTable.headers.tier1}</th>
                                    <th className="p-3 font-display text-primary-text">{t.wholesale.pricingTable.headers.tier2}</th>
                                    <th className="p-3 font-display text-primary-text">{t.wholesale.pricingTable.headers.tier3}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {t.wholesale.pricingTable.rows.map((row, index) => (
                                    <tr key={index} className={`transition-colors hover:bg-dark-golden/10 ${index % 2 === 0 ? 'bg-medium-bg/20' : 'bg-transparent'}`}>
                                        <td className="p-3">{row.sku}</td>
                                        <td className="p-3 font-semibold">{renderStyledText(row.product)}</td>
                                        <td className="p-3">{row.tier1_price}</td>
                                        <td className="p-3">{row.tier2_price}</td>
                                        <td className="p-3">{row.tier3_price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </ParallaxSection>
        </div>
    );
};

const ContactPage = () => {
    const { translations } = useLocalization();
    const t = translations.contact;
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 5000);
    };

    return (
        <div>
            <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
                <h1 className="text-5xl md:text-6xl font-display text-golden-accent">{renderStyledText(t.header.title)}</h1>
                <p className="mt-4 text-xl max-w-3xl mx-auto">{renderStyledText(t.header.subtitle)}</p>
            </header>
            <div className="max-w-5xl mx-auto p-4 md:p-8 grid md:grid-cols-2 gap-12 my-16">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-display text-dark-golden">{t.leftColumn.hq}</h3>
                        <p>{translations.footer.office.address}</p>
                    </div>
                     <div>
                        <h3 className="text-2xl font-display text-dark-golden">{t.leftColumn.phone}</h3>
                        <p>{translations.footer.contact.phone.number}</p>
                        <p className="text-sm text-primary-text/70">{t.leftColumn.hours}</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-display text-dark-golden">{t.leftColumn.email}</h3>
                        <p><strong>{t.leftColumn.sales}</strong> <a href={`mailto:${translations.footer.contact.email.address}`} className="hover:underline">{translations.footer.contact.email.address}</a></p>
                        <p><strong>{t.leftColumn.cc}</strong> <a href={`mailto:${translations.footer.contact.cc.address}`} className="hover:underline">{translations.footer.contact.cc.address}</a></p>
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-display text-center text-dark-golden mb-6">{t.form.title}</h2>
                    {submitSuccess ? (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                            {t.form.successMessage}
                        </div>
                    ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input type="text" placeholder={t.form.fullName} className="w-full p-3 border border-medium-bg rounded-lg" required/>
                        <input type="email" placeholder={t.form.email} className="w-full p-3 border border-medium-bg rounded-lg" required/>
                        <select className="w-full p-3 border border-medium-bg rounded-lg" required>
                            <option value="">{t.form.inquiryType.label}</option>
                            {Object.values(t.form.inquiryType.options).map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                        <textarea placeholder={t.form.message} rows={5} className="w-full p-3 border border-medium-bg rounded-lg" required></textarea>
                        <button type="submit" className="w-full bg-dark-golden text-light-text font-bold py-3 px-8 rounded-full hover:bg-primary-text transition duration-300">
                            {t.form.submit}
                        </button>
                    </form>
                    )}
                </div>
            </div>
        </div>
    );
};

const ShopPage = ({ cart, onUpdateQuantity, onRemoveFromCart, setPage }: { cart: CartItem[], onUpdateQuantity: (productId: string, quantity: number) => void, onRemoveFromCart: (productId: string) => void, setPage: (page: Page) => void }) => {
    const { translations } = useLocalization();
    const t = translations.shop;

    const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);
    const shipping = subtotal > 0 ? 25.00 : 0; // Flat international shipping
    const total = subtotal + shipping;

    if (cart.length === 0) {
        return (
             <div className="text-center py-20 px-4">
                <h1 className="text-4xl font-display text-dark-golden mb-4">{t.emptyCart.title}</h1>
                <p className="text-lg mb-8">{t.emptyCart.text}</p>
                <button onClick={() => setPage(Page.Products)} className="bg-golden-accent text-primary-text font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition duration-300">
                    {t.emptyCart.cta}
                </button>
            </div>
        );
    }
    
    return (
        <div>
            <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
                <h1 className="text-5xl md:text-6xl font-display text-golden-accent">{renderStyledText(t.header.title)}</h1>
            </header>
            <div className="max-w-5xl mx-auto p-4 md:p-8 my-16 grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                     <h2 className="text-3xl font-display text-dark-golden mb-6">{t.summary.title}</h2>
                     <div className="space-y-4">
                        {cart.map(item => (
                            <div key={item.id} className="flex items-center justify-between border-b border-medium-bg pb-4">
                                <div className="flex items-center gap-4">
                                    <img src={item.img} alt={item.title} className="w-20 h-20 object-cover rounded-lg"/>
                                    <div>
                                        <h3 className="font-bold">{item.title}</h3>
                                        <p className="text-sm text-primary-text/70">${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                     <input type="number" value={item.quantity} onChange={e => onUpdateQuantity(item.id, parseInt(e.target.value, 10))} min="1" className="w-16 p-2 border border-medium-bg rounded-lg text-center" />
                                     <button onClick={() => onRemoveFromCart(item.id)} className="text-red-500 hover:text-red-700">
                                        <SvgIcon path="M18 6L6 18M6 6l12 12" className="w-5 h-5"/>
                                     </button>
                                </div>
                            </div>
                        ))}
                     </div>
                </div>
                <div className="bg-white/50 p-8 rounded-lg shadow-2xl">
                    <h3 className="text-2xl font-display text-dark-golden mb-6">{t.summary.title}</h3>
                    <div className="space-y-2 border-b border-medium-bg pb-4 mb-4">
                        <div className="flex justify-between"><span>{t.summary.subtotal}</span><span>${subtotal.toFixed(2)}</span></div>
                        <div className="flex justify-between"><span>{t.summary.shipping}</span><span>${shipping.toFixed(2)}</span></div>
                    </div>
                    <div className="flex justify-between font-bold text-xl"><span>{t.summary.total}</span><span>${total.toFixed(2)}</span></div>
                    <button className="mt-8 w-full bg-dark-golden text-light-text font-bold py-3 px-8 rounded-full hover:bg-primary-text transition duration-300">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

const Footer = () => {
    const { translations, setLanguage } = useLocalization();
    const t = translations.footer;
    const year = new Date().getFullYear();
    const copyrightText = t.copyright.replace('{year}', year.toString());

    return (
        <footer className="bg-primary-text text-light-text py-12 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-logo-smll.webp" alt="Golden TAAN Logo" className="h-12 mx-auto md:mx-0 mb-4 invert brightness-0" />
                    <p className="text-sm text-light-text/70">{copyrightText}</p>
                </div>
                 <div>
                    <h3 className="font-bold mb-4">{t.quickLinks}</h3>
                    <ul className="space-y-2">
                        <li><a href={`#${Page.Home}`} className="hover:underline text-light-text/80">{translations.nav.home}</a></li>
                        <li><a href={`#${Page.About}`} className="hover:underline text-light-text/80">{translations.nav.ourStory}</a></li>
                        <li><a href={`#${Page.Products}`} className="hover:underline text-light-text/80">{translations.nav.products}</a></li>
                        <li><a href={`#${Page.Contact}`} className="hover:underline text-light-text/80">{translations.nav.contact}</a></li>
                    </ul>
                </div>
                 <div>
                    <h3 className="font-bold mb-4">{t.office.title}</h3>
                    <p className="text-light-text/80 whitespace-pre-line">{t.office.address}</p>
                    <div className="mt-4 flex justify-center md:justify-start space-x-4">
                        <a href="https://facebook.com/goldentaan" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
                        <a href="https://instagram.com/goldentaan" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const SoftLaunchModal = ({ onLanguageSelect, onEnter }: { onLanguageSelect: (lang: Language) => void, onEnter: () => void }) => {
    const { translations, setLanguage, language } = useLocalization();
    const t = translations.softLaunchModal;

    const languages: { code: Language; name: string }[] = [
        { code: 'en', name: 'English' }, { code: 'th', name: 'ไทย' }, { code: 'ja', name: '日本語' },
        { code: 'zh', name: '中文' }, { code: 'ar', name: 'العربية' }, { code: 'fr', name: 'Français' },
        { code: 'ko', name: '한국어' }, { code: 'nl', name: 'Nederlands' },
    ];

    return (
        <div className="fixed inset-0 bg-black/70 z-[200] flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-light-bg rounded-lg shadow-2xl max-w-lg w-full p-8 text-center">
                <h2 className="text-3xl font-display text-dark-golden mb-4">{t.title}</h2>
                <p className="mb-4">{t.mainText}</p>
                <p className="mb-6 bg-medium-bg/50 p-3 rounded-lg text-sm">{t.statusText}</p>
                
                <h3 className="font-bold mb-2">{t.selectLanguage}</h3>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {languages.map(lang => (
                        <button key={lang.code} onClick={() => setLanguage(lang.code)} className={`px-4 py-2 text-sm rounded-full ${language === lang.code ? 'bg-dark-golden text-light-text' : 'bg-medium-bg'}`}>
                            {lang.name}
                        </button>
                    ))}
                </div>

                <button onClick={onEnter} className="bg-golden-accent text-primary-text font-bold py-3 px-12 rounded-full hover:bg-yellow-500 transition duration-300">
                    {t.enterSite}
                </button>
                <p className="text-xs text-primary-text/50 mt-4">{t.lastUpdated}</p>
            </div>
        </div>
    );
};


// --- Main App Component ---
const AppInternal = () => {
    const { translations, language, setLanguage } = useLocalization();
    const [page, setPage] = useState<Page>(() => (window.location.hash.substring(1) as Page) || Page.Home);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isStoryDropdownOpen, setStoryDropdownOpen] = useState(false);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const langDropdownRef = useRef<HTMLDivElement>(null);

    // FIX: Add a safe mapping from Page enum to navigation translation keys.
    const pageToNavKeyMap: { [key in Page]?: keyof Omit<Translations['nav'], 'homeSubItems'> } = {
        [Page.Home]: 'home',
        [Page.About]: 'ourStory',
        [Page.Heritage]: 'heritage',
        [Page.Products]: 'products',
        [Page.Blog]: 'blog',
        [Page.Sustainability]: 'sustainability',
        [Page.Wholesale]: 'wholesale',
        [Page.ShopNow]: 'shopNow',
        [Page.Contact]: 'contact',
    };

    const handleNavigate = (targetPage: Page) => {
        setPage(targetPage);
        window.scrollTo(0, 0);
        setMenuOpen(false);
        trackPageView(`/${targetPage}`);
    };

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1) as Page;
            if (Object.values(Page).includes(hash)) {
                setPage(hash);
            } else {
                setPage(Page.Home);
            }
        };
        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Initial check
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);
    
    useEffect(() => {
        if(page) window.location.hash = page;
    }, [page]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
                setIsLangDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);


    const handleAddToCart = (product: Product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };
    
    const handleUpdateCartQuantity = (productId: string, quantity: number) => {
        if(quantity < 1) return;
        setCart(cart.map(item => item.id === productId ? {...item, quantity} : item));
    }
    
    const handleRemoveFromCart = (productId: string) => {
        setCart(cart.filter(item => item.id !== productId));
    }

    const renderPage = () => {
        if (selectedPost) {
            return <BlogPostPage post={selectedPost} onBack={() => setSelectedPost(null)} />;
        }
        switch (page) {
            case Page.Home: return <HomePage onAddToCart={handleAddToCart} setPage={handleNavigate} setSelectedPost={setSelectedPost} onProductSelect={setSelectedProduct} />;
            case Page.About: return <AboutUsPage />;
            case Page.Heritage: return <HeritagePage />;
            case Page.Products: return <ProductsPage onAddToCart={handleAddToCart} onProductSelect={setSelectedProduct} />;
            case Page.Blog: return <BlogPage onPostSelect={setSelectedPost} />;
            case Page.Sustainability: return <SustainabilityPage />;
            case Page.Contact: return <ContactPage />;
            case Page.ShopNow: return <ShopPage cart={cart} onUpdateQuantity={handleUpdateCartQuantity} onRemoveFromCart={handleRemoveFromCart} setPage={handleNavigate}/>;
            default: return <HomePage onAddToCart={handleAddToCart} setPage={handleNavigate} setSelectedPost={setSelectedPost} onProductSelect={setSelectedProduct} />;
        }
    };
    
    const itemCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
    const languages: { code: Language; name: string }[] = [
        { code: 'en', name: 'English' }, { code: 'th', name: 'ไทย' }, { code: 'ja', name: '日本語' },
        { code: 'zh', name: '中文' }, { code: 'ar', name: 'العربية' }, { code: 'fr', name: 'Français' },
        { code: 'ko', name: '한국어' }, { code: 'nl', name: 'Nederlands' },
    ];


    const mainNavPages = [
        Page.Home,
        Page.About,
        Page.Products,
        Page.Blog,
        Page.Sustainability,
        Page.Wholesale,
        Page.Contact,
    ];

    // --- Mobile Menu Overlay ---
    const MobileMenu = () => (
        <div className="fixed inset-0 bg-light-bg/95 backdrop-blur-md z-40 flex flex-col items-center justify-center animate-fade-in md:hidden">
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-primary-text hover:text-dark-golden"
                aria-label="Close menu"
            >
                <SvgIcon path="M6 18L18 6M6 6l12 12" className="w-8 h-8" />
            </button>
            <ul className="flex flex-col items-center space-y-6 text-center">
               {mainNavPages.map(p => {
                   const navKey = pageToNavKeyMap[p];
                   if (!navKey) return null;
                   const navLabel = translations.nav[navKey];
                   
                   if (p === Page.About) {
                       return (
                           <li key={p}>
                               <button onClick={() => handleNavigate(p)} className="text-3xl font-display hover:text-dark-golden transition-colors py-2">
                                   {navLabel}
                               </button>
                               <ul className="mt-2">
                                   <li>
                                       <button onClick={() => handleNavigate(Page.Heritage)} className="text-xl font-sans text-primary-text/80 hover:text-dark-golden transition-colors py-1">
                                           {translations.nav.heritage}
                                       </button>
                                   </li>
                               </ul>
                           </li>
                       );
                   }

                   return (
                       <li key={p}>
                           <button onClick={() => handleNavigate(p)} className="text-3xl font-display hover:text-dark-golden transition-colors py-2">
                               {navLabel}
                           </button>
                       </li>
                   );
               })}
            </ul>
        </div>
    );

    return (
        <div className={`font-sans ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            <header className="sticky top-0 z-50 bg-light-bg/80 backdrop-blur-md shadow-md">
                <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <button onClick={() => handleNavigate(Page.Home)} className="flex items-center">
                        <img src="https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-logo-smll.webp" alt="Golden TAAN Logo" className="h-12" />
                    </button>

                    <div className="hidden md:flex items-center space-x-6">
                        <button onClick={() => handleNavigate(Page.Home)} className="font-semibold hover:text-dark-golden">{translations.nav.home}</button>
                        <div className="relative" onMouseEnter={() => setStoryDropdownOpen(true)} onMouseLeave={() => setStoryDropdownOpen(false)}>
                             <button onClick={() => handleNavigate(Page.About)} className="font-semibold hover:text-dark-golden flex items-center">{translations.nav.ourStory} <SvgIcon path="M19.5 8.25l-7.5 7.5-7.5-7.5" className="w-4 h-4 ml-1"/></button>
                             {isStoryDropdownOpen && <div className="absolute top-full left-0 mt-2 w-48 bg-light-bg shadow-lg rounded-md py-2"><a href={`#${Page.Heritage}`} onClick={() => handleNavigate(Page.Heritage)} className="block px-4 py-2 hover:bg-medium-bg">{translations.nav.heritage}</a></div>}
                        </div>
                        <button onClick={() => handleNavigate(Page.Products)} className="font-semibold hover:text-dark-golden">{translations.nav.products}</button>
                        <button onClick={() => handleNavigate(Page.Blog)} className="font-semibold hover:text-dark-golden">{translations.nav.blog}</button>
                        <button onClick={() => handleNavigate(Page.Sustainability)} className="font-semibold hover:text-dark-golden">{translations.nav.sustainability}</button>
                        <button onClick={() => handleNavigate(Page.Contact)} className="font-semibold hover:text-dark-golden">{translations.nav.contact}</button>
                    </div>

                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <div className="relative">
                            <button onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)} className="flex items-center text-primary-text hover:text-dark-golden">
                                <SvgIcon path="M12 21a9.75 9.75 0 110-19.5 9.75 9.75 0 010 19.5zm0-17.25a7.5 7.5 0 100 15 7.5 7.5 0 000-15z M2.25 12a9.745 9.745 0 013.06-7.032l-1.02-.34A.75.75 0 003 4.253L1.625 5.628a.75.75 0 00.54 1.306l1.02.34A9.745 9.745 0 012.25 12zm18-7.747a.75.75 0 00-1.306-.54L17.93 5.06a9.745 9.745 0 01-1.25-2.806l.34-1.02a.75.75 0 00-1.306-.54L14.34 2.06a9.745 9.745 0 00-4.68 0L8.285.686a.75.75 0 00-1.306.54l.34 1.02A9.745 9.745 0 016.07 5.06l-1.02-.34a.75.75 0 00-1.306.54L5.117 6.63a9.745 9.745 0 000 10.74l-1.372 1.373a.75.75 0 00.54 1.306l1.02-.34a9.745 9.745 0 002.806 1.25l-.34 1.02a.75.75 0 001.306.54l1.373-1.372a9.745 9.745 0 0010.74 0l1.373 1.372a.75.75 0 001.306-.54l-.34-1.02a9.745 9.745 0 002.806-1.25l1.02.34a.75.75 0 001.306-.54l-1.372-1.373a9.745 9.745 0 000-10.74l1.372-1.373z" className="w-6 h-6"/>
                                <span className="ml-1 uppercase">{language}</span>
                            </button>
                             {isLangDropdownOpen && (
                                <div ref={langDropdownRef} className="absolute right-0 mt-2 w-40 bg-light-bg shadow-lg rounded-md py-2 z-50">
                                    {languages.map(lang => (
                                        <button key={lang.code} onClick={() => { setLanguage(lang.code); setIsLangDropdownOpen(false); }} className="block w-full text-left px-4 py-2 hover:bg-medium-bg">
                                            {lang.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button onClick={() => handleNavigate(Page.ShopNow)} className="relative text-primary-text hover:text-dark-golden">
                            <SvgIcon path="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" className="w-6 h-6"/>
                            {itemCount > 0 && <span className="absolute -top-2 -right-2 bg-golden-accent text-light-text text-xs rounded-full h-5 w-5 flex items-center justify-center">{itemCount}</span>}
                        </button>
                        <div className="md:hidden">
                            <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-dark-golden">
                                <SvgIcon path={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </nav>
                {isMenuOpen && <MobileMenu />}
            </header>
            
            <main>{renderPage()}</main>
            
            <Footer />

            {selectedProduct && <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAddToCart={handleAddToCart} setPage={handleNavigate} setSelectedPost={setSelectedPost} />}
        </div>
    );
};

const LocalizationProvider = ({ children }: { children: React.ReactNode }) => {
    const getInitialLanguage = (): Language => {
        const storedLang = localStorage.getItem('golden-taan-lang') as Language;
        if (storedLang && siteContent[storedLang]) return storedLang;
        const browserLang = navigator.language.split('-')[0] as Language;
        return siteContent[browserLang] ? browserLang : 'en';
    };
    
    const [language, setLanguage] = useState<Language>(getInitialLanguage);
    const [showModal, setShowModal] = useState<boolean>(!localStorage.getItem('golden-taan-visited'));

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        if (params.get('reset_welcome') === 'true') {
            localStorage.removeItem('golden-taan-visited');
            setShowModal(true);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('golden-taan-lang', lang);
    };

    const handleEnterSite = () => {
        localStorage.setItem('golden-taan-visited', 'true');
        setShowModal(false);
    };

    const translations = useMemo(() => siteContent[language] || siteContent.en, [language]);
    
    const value = useMemo(() => ({ language, setLanguage: handleSetLanguage, translations }), [language, translations]);

    return (
        <LocalizationContext.Provider value={value}>
            {showModal && <SoftLaunchModal onLanguageSelect={handleSetLanguage} onEnter={handleEnterSite} />}
            {children}
        </LocalizationContext.Provider>
    );
};

const App = () => (
    <LocalizationProvider>
        <AppInternal />
    </LocalizationProvider>
);

export default App;