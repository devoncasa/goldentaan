



import React, { useState, useEffect, useRef, useCallback, createContext, useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Page, NutrientData, SustainabilityData, FAQ, Product, CartItem, BlogPost, BlogContent, Language, Translations } from './types';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { siteContent } from './translations';

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

// --- Chart Components ---

const NutrientComparisonChart = () => {
    const { translations } = useLocalization();
    const data = translations.home.health.nutrientData;

    return (
        <div className="w-full h-96 bg-primary-text/30 p-4 rounded-lg">
            <ResponsiveContainer>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" stroke="#FBF8F1" />
                    <YAxis stroke="#FBF8F1" />
                    <Tooltip contentStyle={{ backgroundColor: '#5A3E2B', border: 'none', color: '#FBF8F1' }} />
                    <Legend wrapperStyle={{ color: '#FBF8F1' }} />
                    <Bar dataKey="goldenTaan" name={translations.home.health.goldenTaan} fill="#E5B84B" />
                    <Bar dataKey="unrefinedSugarcane" name={translations.home.health.unrefinedSugarcane} fill="#8C6D46" />
                    <Bar dataKey="refinedWhiteSugar" name={translations.home.health.refinedWhiteSugar} fill="#EAE0D5" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

const SustainabilityChart = () => {
    const { translations } = useLocalization();
    const data = translations.home.impact.sustainabilityData;
    
    return (
        <div className="w-full h-96 bg-primary-text/30 p-4 rounded-lg">
            <ResponsiveContainer>
                <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
                    <XAxis type="number" stroke="#FBF8F1" domain={[0, 10]} />
                    <YAxis type="category" dataKey="name" stroke="#FBF8F1" width={100} />
                    <Tooltip contentStyle={{ backgroundColor: '#5A3E2B', border: 'none', color: '#FBF8F1' }} />
                    <Legend wrapperStyle={{ color: '#FBF8F1' }} />
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
        <div className="w-full h-96 bg-primary-text/30 p-4 rounded-lg">
            <ResponsiveContainer>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid stroke="#FBF8F1" />
                    <PolarAngleAxis dataKey="subject" stroke="#FBF8F1" tick={{ fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 10]} stroke="#FBF8F1" />
                    <Tooltip contentStyle={{ backgroundColor: '#5A3E2B', border: 'none', color: '#FBF8F1' }} />
                    <Legend wrapperStyle={{ color: '#FBF8F1' }} />
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

// --- Page Components ---

const HomePage = ({ onAddToCart }: { onAddToCart: (product: Product) => void }) => {
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
                    <a href="#our-story" className="bg-golden-accent text-primary-text font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-105">{t.hero.cta}</a>
                </div>
            </section>
            
            {/* Global Trends Section */}
            <section id="our-story" className="py-20 px-4 md:px-8 bg-light-bg">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-display text-center mb-4">{t.trends.headline}</h2>
                    <p className="text-center text-lg max-w-3xl mx-auto mb-12">{t.trends.description}</p>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <img src="https://via.placeholder.com/600x700.png?text=Natural+Choices+(6:7)" alt="A display of natural, healthy food choices reflecting the global trend towards authenticity" className="rounded-lg shadow-xl" />
                        <div className="space-y-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-5xl font-display text-dark-golden">$<AnimatedCounter to={55} />+ <span className="text-3xl">{t.trends.billion}</span></h3>
                                <p className="mt-2">{t.trends.marketStat}</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h3 className="text-5xl font-display text-dark-golden"><AnimatedCounter to={70} /><span className="text-3xl">%</span></h3>
                                <p className="mt-2">{t.trends.consumerStat}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Health Benefits Section */}
            <section id="health-benefits" className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-display text-center text-golden-accent mb-4">{t.health.headline}</h2>
                    <p className="text-center text-lg max-w-3xl mx-auto mb-12">{t.health.description}</p>
                    <h3 className="text-2xl font-display text-center mb-4">{t.health.chartTitle}</h3>
                    <NutrientComparisonChart />
                    
                    <div className="max-w-3xl mx-auto mt-8 bg-golden-accent/10 border border-golden-accent/30 rounded-lg p-6 flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <SvgIcon path="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.565L16.5 21.75l-.398-1.185a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.185-.398a2.25 2.25 0 001.423-1.423L16.5 15.75l.398 1.185a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.185.398a2.25 2.25 0 00-1.423 1.423z" className="w-8 h-8 text-golden-accent" />
                        </div>
                        <div>
                            <h4 className="font-display text-xl text-golden-accent">{t.health.insight.title}</h4>
                            <p className="mt-1 text-light-text/90">{t.health.insight.text}</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mt-12">
                        <div className="bg-primary-text/50 p-8 rounded-lg text-center shadow-2xl flex flex-col items-center">
                            <h3 className="font-display text-2xl mb-2">{t.health.goldenTaan}</h3>
                            <div className="flex items-baseline justify-center gap-4">
                                <p className="text-6xl font-bold text-golden-accent">35</p>
                                <SvgIcon path="M3 6c2.446 0 4.28.67 5.83 1.95.16.13.3.26.45.39.42.36.87.66 1.38.86.5.2 1.03.3 1.6.3s1.1-.1 1.6-.3c.51-.2.96-.5 1.38-.86.15-.13.29-.26.45-.39C16.72 6.67 18.554 6 21 6v2c-2.446 0-4.28.67-5.83 1.95-.16.13-.3.26-.45.39-.42.36-.87.66-1.38.86-.5.2-1.03.3-1.6.3s-1.1-.1-1.6-.3c-.51-.2-.96-.5-1.38-.86-.15-.13-.29-.26-.45-.39C7.28 8.67 5.446 8 3 8V6zm0 6c2.446 0 4.28.67 5.83 1.95.16.13.3.26.45.39.42.36.87.66 1.38.86.5.2 1.03.3 1.6.3s1.1-.1 1.6-.3c.51-.2-.96-.5-1.38-.86.15-.13.29-.26.45-.39C16.72 12.67 18.554 12 21 12v2c-2.446 0-4.28.67-5.83 1.95-.16.13-.3.26-.45.39-.42.36-.87.66-1.38.86-.5.2-1.03.3-1.6.3s-1.1-.1-1.6-.3c-.51-.2-.96-.5-1.38-.86-.15-.13-.29-.26-.45-.39C7.28 14.67 5.446 14 3 14v-2z" className="w-10 h-10 text-golden-accent/70"/>
                            </div>
                            <p className="mt-4">{t.health.goldenTaanEffect}</p>
                        </div>
                        <div className="bg-primary-text/50 p-8 rounded-lg text-center shadow-2xl flex flex-col items-center">
                            <h3 className="font-display text-2xl mb-2">{t.health.refinedWhiteSugar}</h3>
                            <div className="flex items-baseline justify-center gap-4">
                                <p className="text-6xl font-bold text-red-400">65</p>
                                <SvgIcon path="M3 13.998l3.75-6.999L9 12l2.25-8.999L13.5 9l2.25-5.249L18 10.498l3-7.499V6.5l-3 7.499L15.75 8l-2.25 5.249L11.25 9 9 14.998 5.25 8 3 13.998z" className="w-10 h-10 text-red-400/70"/>
                            </div>
                            <p className="mt-4">{t.health.whiteSugarEffect}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 px-4 md:px-8 bg-light-bg">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-display text-center mb-4">{t.process.headline}</h2>
                    <p className="text-center text-lg max-w-3xl mx-auto mb-12">{t.process.description}</p>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-lg shadow-xl">
                            <h3 className="text-2xl font-display text-dark-golden mb-4">{t.process.artisanal.title}</h3>
                            <img src="https://via.placeholder.com/600x400.png?text=Artisanal+Process+(3:2)" alt="The traditional, artisanal process of boiling palmyra palm nectar to create Golden Taan sugar" className="rounded-md mb-6"/>
                            <ul className="space-y-2 list-decimal list-inside">
                                {t.process.artisanal.steps.map((step, i) => <li key={i}><strong>{step.title}:</strong> {step.description}</li>)}
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-xl">
                            <h3 className="text-2xl font-display text-gray-600 mb-4">{t.process.industrial.title}</h3>
                            <img src="https://via.placeholder.com/600x400.png?text=Industrial+Process+(3:2)" alt="The multi-stage industrial refining process of white cane sugar" className="rounded-md mb-6"/>
                            <ul className="space-y-2 list-decimal list-inside">
                                {t.process.industrial.steps.map((step, i) => <li key={i}><strong>{step.title}:</strong> {step.description}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section id="sustainability" className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-display text-center text-golden-accent mb-4">{t.impact.headline}</h2>
                    <p className="text-center text-lg max-w-3xl mx-auto mb-12">{t.impact.description}</p>
                    <h3 className="text-2xl font-display text-center mb-4">{t.impact.chartTitle}</h3>
                    <SustainabilityChart />

                    <h2 className="text-4xl md:text-5xl font-display text-center text-golden-accent mt-20 mb-4">{t.impact.community.headline}</h2>
                    <p className="text-center text-lg max-w-3xl mx-auto mb-12">{t.impact.community.description}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
                        {t.impact.community.stats.map((stat, i) => (
                             <div key={i} className="bg-primary-text/50 p-6 rounded-lg">
                                <p className="text-4xl font-bold text-golden-accent"><AnimatedCounter to={stat.value} />{stat.unit}</p>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                    <img src="https://via.placeholder.com/1200x600.png?text=Our+Community+(2:1)" alt="A collage showing the vibrant community of farmers and artisans behind Golden Taan" className="rounded-lg shadow-xl"/>
                </div>
            </section>
            
            {/* Products Section */}
            <section id="products" className="py-20 px-4 md:px-8 bg-light-bg">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-display text-center mb-4">{t.productSection.headline}</h2>
                    <p className="text-center text-lg max-w-3xl mx-auto mb-12">{t.productSection.description}</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {products.map(p => (
                            <div key={p.id} className="bg-white rounded-lg shadow-xl overflow-hidden group transition-transform duration-300 hover:scale-105">
                                <img src={p.img} alt={p.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-display text-dark-golden">{p.title}</h3>
                                    <p className="mt-2 mb-4 text-primary-text/80">{p.description}</p>
                                    <button 
                                        onClick={() => handleAddToCartClick(p)}
                                        disabled={addedProductId === p.id}
                                        className="w-full bg-dark-golden text-light-text font-bold py-2 px-4 rounded-full hover:bg-primary-text transition duration-300 disabled:bg-green-600"
                                    >
                                        {addedProductId === p.id ? t.productSection.added : `${t.productSection.addToCart} - $${p.price}`}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 md:px-8 bg-light-bg">
                <div className="max-w-4xl mx-auto">
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
            </section>
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

        <section className="py-16 px-4 md:px-8 bg-light-bg">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-4xl font-display text-dark-golden mb-4">{t.roots.title}</h3>
                    <p className="text-lg text-primary-text/90">{t.roots.text}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img src="https://via.placeholder.com/400x533.png?text=Family+Tradition+(3:4)" alt="A multi-generational photo of a family of palm sugar farmers." className="rounded-lg shadow-xl aspect-[3/4] object-cover" />
                    <img src="https://via.placeholder.com/400x533.png?text=Ratchaburi+Palm+Grove+(3:4)" alt="A serene Palmyra palm grove in Ratchaburi, Thailand at sunset." className="rounded-lg shadow-xl aspect-[3/4] object-cover mt-8" />
                </div>
            </div>
        </section>

         <section className="py-16 px-4 md:px-8 bg-medium-bg">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                 <div className="grid grid-cols-2 gap-4 order-last md:order-first">
                    <img src="https://via.placeholder.com/400x533.png?text=Pure+Palm+Sugar+Crystals+(3:4)" alt="Close-up of pure, unrefined Palmyra palm sugar crystals." className="rounded-lg shadow-xl aspect-[3/4] object-cover" />
                    <img src="https://via.placeholder.com/400x533.png?text=Artisanal+Craft+(3:4)" alt="An artisan farmer carefully crafting a block of palm sugar." className="rounded-lg shadow-xl aspect-[3/4] object-cover mt-8" />
                </div>
                <div>
                    <h3 className="text-4xl font-display text-dark-golden mb-4">{t.fadingGold.title}</h3>
                    <p className="text-lg text-primary-text/90">{t.fadingGold.text}</p>
                </div>
            </div>
        </section>

        <section className="py-16 px-4 md:px-8 bg-light-bg">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h3 className="text-4xl font-display text-dark-golden mb-4">{t.mission.title}</h3>
                    <p className="text-lg text-primary-text/90">{t.mission.text}</p>
                </div>
                 <div className="grid grid-cols-2 gap-4">
                    <img src="https://via.placeholder.com/400x533.png?text=Global+Kitchen+(3:4)" alt="Golden Taan palm sugar being used in a modern, global kitchen." className="rounded-lg shadow-xl aspect-[3/4] object-cover" />
                    <img src="https://via.placeholder.com/400x533.png?text=Healthy+Lifestyle+(3:4)" alt="A person incorporating Golden Taan into a healthy, active lifestyle." className="rounded-lg shadow-xl aspect-[3/4] object-cover mt-8" />
                </div>
            </div>
        </section>
        
        {/* Timeline Section */}
        <section className="py-20 px-4 md:px-8 bg-light-bg">
            <div className="max-w-4xl mx-auto text-center">
                 <h3 className="text-4xl font-display text-dark-golden mb-16">{t.timelineTitle}</h3>
            </div>
            <div className="max-w-xl md:max-w-3xl mx-auto relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-medium-bg transform -translate-x-1/2"></div>
                {timelineData.map((item, index) => (
                    <div key={index} className="mb-12 flex items-center w-full">
                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-dark-golden ring-4 ring-light-bg"></div>
                        <div className={`w-1/2 p-4 rounded-lg shadow-lg bg-white ${index % 2 === 0 ? 'ml-auto text-left' : 'mr-auto text-right'}`}>
                             <p className="text-sm font-semibold text-dark-golden">{item.era}</p>
                            <h4 className="text-xl font-display text-primary-text mt-1">{item.title}</h4>
                            <p className="text-primary-text/80 mt-2">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* People Behind the Purity Section */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text">
            <div className="max-w-6xl mx-auto">
                <h3 className="text-4xl font-display text-center text-golden-accent mb-12">{t.people.title}</h3>
                 <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <img src="https://via.placeholder.com/400x533.png?text=Krisada+Laohasiri+(3:4)" alt="Portrait of Krisada Laohasiri, founder of Golden Taan" className="rounded-lg shadow-xl aspect-[3/4] object-cover mx-auto md:mx-0 w-64"/>
                        <h4 className="text-2xl font-display text-light-text mt-6">{t.people.founderName}</h4>
                        <p className="mt-4 text-xl italic text-light-text/80">"{t.people.founderQuote}"</p>
                    </div>
                    <div>
                        <img src="https://via.placeholder.com/600x400.png?text=Community+of+Artisans+(3:2)" alt="A community of smiling, skilled palm sugar artisans in Thailand." className="rounded-lg shadow-xl aspect-video md:aspect-[4/3] object-cover w-full"/>
                        <h4 className="text-2xl font-display text-light-text mt-6">{t.people.communityTitle}</h4>
                        <p className="mt-2 text-light-text/90">{t.people.communityText}</p>
                    </div>
                </div>
            </div>
        </section>


         <section className="py-16 px-4 md:px-8 bg-medium-bg">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-4xl font-display text-dark-golden mb-4">{t.choice.title}</h3>
                <p className="text-lg text-primary-text/90 mb-8">{t.choice.text}</p>
                <img src="https://via.placeholder.com/1200x675.png?text=Natural+Sweeteners+(16:9)" alt="A beautiful flat-lay of various natural sweeteners, with Golden Taan palm sugar at the center." className="rounded-lg shadow-xl aspect-video object-cover"/>
            </div>
        </section>
    </div>
    )
};

const HeritagePage = () => {
    const { translations } = useLocalization();
    const t = translations.heritage;
    const [activeTab, setActiveTab] = useState('origin');

    const CertificationCard = ({ title, issuer, description }: { title: string, issuer: string, description: string }) => (
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
            <h4 className="font-display text-xl text-dark-golden">{title}</h4>
            <p className="text-sm font-semibold text-primary-text/70 mb-2">{issuer}</p>
            <p className="text-primary-text/90">{description}</p>
        </div>
    );
    
    return (
        <div>
             <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
                <h2 className="text-5xl md:text-6xl font-display text-golden-accent">{t.header.title}</h2>
                <p className="mt-4 text-xl max-w-3xl mx-auto">{t.header.subtitle}</p>
            </header>

            <div className="sticky top-20 bg-light-bg/80 backdrop-blur-md z-40 border-b border-medium-bg">
                <div className="max-w-6xl mx-auto flex justify-center">
                    <button onClick={() => setActiveTab('origin')} className={`py-4 px-6 font-semibold border-b-4 transition-colors ${activeTab === 'origin' ? 'border-dark-golden text-primary-text' : 'border-transparent text-primary-text/60 hover:text-primary-text'}`}>{t.tabs.origin}</button>
                    <button onClick={() => setActiveTab('export')} className={`py-4 px-6 font-semibold border-b-4 transition-colors ${activeTab === 'export' ? 'border-dark-golden text-primary-text' : 'border-transparent text-primary-text/60 hover:text-primary-text'}`}>{t.tabs.export}</button>
                    <button onClick={() => setActiveTab('certs')} className={`py-4 px-6 font-semibold border-b-4 transition-colors ${activeTab === 'certs' ? 'border-dark-golden text-primary-text' : 'border-transparent text-primary-text/60 hover:text-primary-text'}`}>{t.tabs.certs}</button>
                </div>
            </div>

            <main className="py-16 px-4 md:px-8 bg-light-bg">
                <div className="max-w-6xl mx-auto">
                    {activeTab === 'origin' && (
                        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-in">
                             <div>
                                <h3 className="text-4xl font-display text-dark-golden mb-4">{t.origin.title}</h3>
                                {t.origin.paragraphs.map((p, i) => <p key={i} className="text-primary-text/90 mb-4">{p}</p>)}
                            </div>
                            <img src="https://via.placeholder.com/600x700.png?text=Palmyra+Palm+Tree+(6:7)" alt="A majestic Palmyra Palm Tree, the source of Golden Taan sugar, in rural Thailand." className="rounded-lg shadow-xl object-cover w-full h-full" />
                        </div>
                    )}
                    {activeTab === 'export' && (
                         <div className="animate-fade-in">
                            <h3 className="text-4xl font-display text-dark-golden mb-4 text-center">{t.export.title}</h3>
                             <p className="text-lg text-primary-text/90 mb-12 max-w-4xl mx-auto text-center">{t.export.intro}</p>
                             <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-auto mb-12">
                                <p className="text-lg">{t.export.market.intro}</p>
                                <p className="text-5xl font-display text-dark-golden my-2">{t.export.market.value}</p>
                                <p>{t.export.market.outro}</p>
                            </div>

                            <h4 className="text-3xl font-display text-dark-golden mb-8 text-center">{t.export.keyMarkets.title}</h4>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {t.export.keyMarkets.markets.map(market => (
                                    <div key={market.name} className="bg-white p-6 rounded-lg shadow-lg">
                                        <h5 className="font-display text-xl text-primary-text mb-2">{market.name}</h5>
                                        <p>{market.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {activeTab === 'certs' && (
                        <div className="animate-fade-in">
                            <h3 className="text-4xl font-display text-dark-golden mb-4 text-center">{t.certs.title}</h3>
                            <p className="text-lg text-primary-text/90 mb-12 max-w-4xl mx-auto text-center">{t.certs.intro}</p>

                            <h4 className="text-3xl font-display text-dark-golden mb-8">{t.certs.thai.title}</h4>
                             <div className="grid md:grid-cols-3 gap-8 mb-12">
                                {t.certs.thai.items.map(cert => (
                                    <CertificationCard 
                                        key={cert.title}
                                        title={cert.title}
                                        issuer={cert.issuer}
                                        description={cert.description}
                                    />
                                ))}
                            </div>

                             <h4 className="text-3xl font-display text-dark-golden mb-8">{t.certs.international.title}</h4>
                             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {t.certs.international.items.map(cert => (
                                    <CertificationCard 
                                        key={cert.title}
                                        title={cert.title}
                                        issuer={cert.issuer}
                                        description={cert.description}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
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

            <section className="py-16 px-4 md:px-8 bg-light-bg">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <img src="https://via.placeholder.com/600x700.png?text=Lush+Palm+Grove+(6:7)" alt="A lush, green, and biodiverse Palmyra palm grove." className="rounded-lg shadow-xl object-cover w-full h-full" />
                    <div>
                        <h3 className="text-4xl font-display text-dark-golden mb-4">{t.environmental.title}</h3>
                        <ul className="list-disc list-inside space-y-3 text-lg text-primary-text/90">
                            {t.environmental.points.map((point, i) => <li key={i}><strong>{point.title}:</strong> {point.text}</li>)}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-last md:order-first">
                        <h3 className="text-4xl font-display text-golden-accent mb-4">{t.social.title}</h3>
                        <ul className="list-disc list-inside space-y-3 text-lg text-light-text/90">
                            {t.social.points.map((point, i) => <li key={i}><strong>{point.title}:</strong> {point.text}</li>)}
                        </ul>
                    </div>
                    <img src="https://via.placeholder.com/600x700.png?text=Community+Hands+(6:7)" alt="The hands of community farmers holding fresh palmyra palm sugar." className="rounded-lg shadow-xl object-cover w-full h-full" />
                </div>
            </section>

            <section className="py-16 px-4 md:px-8 bg-light-bg">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <img src="https://via.placeholder.com/600x700.png?text=Quality+Seal+(6:7)" alt="A Golden Taan product with a seal of quality and transparency." className="rounded-lg shadow-xl object-cover w-full h-full" />
                    <div>
                        <h3 className="text-4xl font-display text-dark-golden mb-4">{t.governance.title}</h3>
                        <ul className="list-disc list-inside space-y-3 text-lg text-primary-text/90">
                            {t.governance.points.map((point, i) => <li key={i}><strong>{point.title}:</strong> {point.text}</li>)}
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-4xl font-display text-center text-golden-accent mb-12">{t.insights.title}</h3>
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
            </section>
        </div>
    );
}

const WholesalePage = () => {
    const { translations } = useLocalization();
    const t = translations.wholesale;
    
    const [formState, setFormState] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        country: '',
        volume: '',
        productType: 'Solid',
        packaging: '',
        message: '',
    });
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('RFQ Submitted:', formState);
        alert(t.form.successMessage);
        setFormState({
            companyName: '', contactPerson: '', email: '', country: '',
            volume: '', productType: 'Solid', packaging: '', message: '',
        });
    };

    return (
        <div>
            <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
                <h2 className="text-5xl md:text-6xl font-display text-golden-accent">{t.header.title}</h2>
                <p className="mt-4 text-xl max-w-3xl mx-auto">{t.header.subtitle}</p>
            </header>
            
            <section className="py-16 px-4 md:px-8 bg-light-bg">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-4xl font-display text-dark-golden mb-4">{t.insights.title}</h3>
                        <p className="text-lg text-primary-text/90">{t.insights.text}</p>
                    </div>
                    <img src="https://via.placeholder.com/600x400.png?text=Global+Market+Map+(3:2)" alt="A map of the world highlighting key growth markets for natural sweeteners." className="rounded-lg shadow-xl" />
                </div>
            </section>

            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                         <h3 className="text-4xl font-display text-dark-golden mb-4">{t.pricing.title}</h3>
                        <p className="text-lg max-w-3xl mx-auto">{t.pricing.text}</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-dark-golden text-light-text">
                                <tr>
                                    {t.pricing.table.headers.map(header => <th key={header} className="p-4">{header}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {t.pricing.table.rows.map((row, index) => (
                                    <tr key={index} className={`border-b border-medium-bg ${index % 2 !== 0 ? 'bg-light-bg' : ''}`}>
                                        <td className="p-4">{row.moq}</td>
                                        <td className="p-4">{row.domestic}</td>
                                        <td className="p-4">{row.export}</td>
                                    </tr>
                                ))}
                                <tr className="border-b border-medium-bg bg-light-bg">
                                    <td className="p-4 font-bold">{t.pricing.table.contactRow.moq}</td>
                                    <td className="p-4 font-bold" colSpan={2}>{t.pricing.table.contactRow.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm mt-4 text-right">{t.pricing.table.note}</p>
                </div>
            </section>

            <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="text-4xl font-display text-golden-accent mb-12">{t.logistics.title}</h3>
                    <div className="grid md:grid-cols-2 gap-12 items-start text-left">
                        <div>
                            <h4 className="text-3xl font-display text-light-text mb-4">{t.logistics.packaging.title}</h4>
                            <ul className="list-disc list-inside space-y-2 text-lg">
                                {t.logistics.packaging.options.map(opt => <li key={opt}>{opt}</li>)}
                            </ul>
                            <img src="https://via.placeholder.com/600x400.png?text=Packaging+Options+(3:2)" alt="Various wholesale and retail packaging options for Golden Taan products." className="rounded-lg shadow-xl mt-8" />
                        </div>
                         <div>
                            <h4 className="text-3xl font-display text-light-text mb-4">{t.logistics.export.title}</h4>
                             <ul className="list-disc list-inside space-y-2 text-lg">
                                 {t.logistics.export.services.map(srv => <li key={srv}>{srv}</li>)}
                            </ul>
                            <img src="https://via.placeholder.com/600x400.png?text=Global+Logistics+(3:2)" alt="A visual representation of Golden Taan's global logistics network." className="rounded-lg shadow-xl mt-8" />
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-16 px-4 md:px-8 bg-light-bg">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-2xl">
                    <h2 className="text-4xl font-display text-dark-golden mb-8 text-center">{t.form.title}</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="companyName" className="block text-sm font-medium text-primary-text">{t.form.companyName}</label>
                                <input type="text" name="companyName" id="companyName" value={formState.companyName} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-golden focus:ring-dark-golden"/>
                            </div>
                             <div>
                                <label htmlFor="contactPerson" className="block text-sm font-medium text-primary-text">{t.form.contactPerson}</label>
                                <input type="text" name="contactPerson" id="contactPerson" value={formState.contactPerson} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-golden focus:ring-dark-golden"/>
                            </div>
                        </div>
                         <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-primary-text">{t.form.email}</label>
                                <input type="email" name="email" id="email" value={formState.email} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-golden focus:ring-dark-golden"/>
                            </div>
                             <div>
                                <label htmlFor="country" className="block text-sm font-medium text-primary-text">{t.form.country}</label>
                                <input type="text" name="country" id="country" value={formState.country} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-golden focus:ring-dark-golden"/>
                            </div>
                        </div>
                         <div className="grid md:grid-cols-2 gap-6">
                             <div>
                                <label htmlFor="volume" className="block text-sm font-medium text-primary-text">{t.form.volume}</label>
                                <input type="text" name="volume" id="volume" value={formState.volume} onChange={handleInputChange} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-golden focus:ring-dark-golden"/>
                            </div>
                            <div>
                                <label htmlFor="productType" className="block text-sm font-medium text-primary-text">{t.form.productType.label}</label>
                                <select id="productType" name="productType" value={formState.productType} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-golden focus:ring-dark-golden">
                                    {t.form.productType.options.map(opt => <option key={opt}>{opt}</option>)}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="packaging" className="block text-sm font-medium text-primary-text">{t.form.packaging.label}</label>
                            <input type="text" name="packaging" id="packaging" value={formState.packaging} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-golden focus:ring-dark-golden" placeholder={t.form.packaging.placeholder}/>
                        </div>
                         <div>
                            <label htmlFor="message" className="block text-sm font-medium text-primary-text">{t.form.message}</label>
                            <textarea id="message" name="message" rows={4} value={formState.message} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-golden focus:ring-dark-golden"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-golden-accent text-primary-text font-bold py-3 px-12 rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-105">
                                {t.form.submit}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
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

            <section className="py-16 px-4 md:px-8 bg-light-bg">
                {cartItems.length === 0 ? (
                    <div className="max-w-6xl mx-auto text-center py-20">
                        <h3 className="text-3xl font-display text-dark-golden">{t.emptyCart.title}</h3>
                        <p className="mt-4 mb-8 text-lg">{t.emptyCart.text}</p>
                        <button onClick={() => setPage(Page.Home)} className="bg-golden-accent text-primary-text font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-105">
                            {t.emptyCart.cta}
                        </button>
                    </div>
                ) : (
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
                        {/* Cart Summary */}
                        <div className="bg-white p-8 rounded-lg shadow-xl">
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
                        <div className="bg-white p-8 rounded-lg shadow-xl">
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
            </section>
        </div>
    );
}

const BlogPage = () => {
    const { translations } = useLocalization();
    const t = translations.blog;
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

    const handleSelectPost = (post: BlogPost) => {
        setSelectedPost(post);
        window.scrollTo(0, 0);
    };
    
    const handleBackToList = () => {
        setSelectedPost(null);
        window.scrollTo(0, 0);
    };

    if (selectedPost) {
        return (
            <div className="bg-light-bg">
                <div className="max-w-4xl mx-auto px-4 py-16">
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
            </div>
        );
    }
    
    return (
        <div>
            <header className="py-20 px-4 md:px-8 bg-gradient-to-br from-primary-text to-dark-golden text-light-text text-center">
                <h2 className="text-5xl md:text-6xl font-display text-golden-accent">{t.header.title}</h2>
                <p className="mt-4 text-xl max-w-3xl mx-auto">{t.header.subtitle}</p>
            </header>
            <main className="py-16 px-4 md:px-8 bg-light-bg">
                <div className="max-w-4xl mx-auto space-y-8">
                    {t.posts.map(post => (
                        <div key={post.id} onClick={() => handleSelectPost(post)} className="bg-white rounded-lg shadow-xl overflow-hidden group transition-shadow duration-300 hover:shadow-2xl cursor-pointer flex">
                            <img src={post.coverImage} alt={post.title} className="w-1/3 object-cover aspect-[4/3] group-hover:opacity-90 transition-opacity" />
                            <div className="p-6 flex flex-col w-2/3">
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
            </main>
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
        { code: 'zh', name: '简体中文', flag: '🇨🇳' },
    ];
    
    const navItems = [
        { id: Page.About, label: t.ourStory },
        { id: Page.Heritage, label: t.heritage },
        { id: Page.Blog, label: t.blog },
        { id: Page.Sustainability, label: t.sustainability },
        { id: Page.Wholesale, label: t.wholesale },
    ];
    
    const homeSubItems = t.homeSubItems;

    const handleHomeClick = (hash?: string) => {
        setPage(Page.Home);
        setIsMenuOpen(false);
        if (hash) {
            setTimeout(() => {
                document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    };
    
    const handleNavClick = (page: Page) => {
        setPage(page);
        setIsMenuOpen(false); // also close for mobile
        window.scrollTo(0, 0);
    };

    const handleLangChange = (lang: Language) => {
        setLanguage(lang);
        setIsLangDropdownOpen(false);
    }

    return (
        <header className="bg-light-bg/80 backdrop-blur-md sticky top-0 left-0 right-0 z-50 shadow-md">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    
                    {/* Desktop Menu */}
                    <div className="hidden lg:flex w-full items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <button onClick={() => handleHomeClick()} aria-label="Go to homepage" className="flex items-center space-x-3">
                                    <img className="h-12 w-auto" src="https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-logo-smll.webp" alt="Golden Taan Logo" />
                                    <span className="font-display text-2xl text-dark-golden font-bold">Golden TAAN</span>
                                </button>
                            </div>
                            <div className="ml-10 flex items-baseline space-x-4">
                                <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                                    <button onClick={() => handleHomeClick()} className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === Page.Home ? 'text-dark-golden' : 'text-primary-text hover:text-dark-golden'}`}>
                                        {t.home}
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                            <div className="py-1">
                                                {homeSubItems.map(item => (
                                                    <a key={item.id} href={item.id} onClick={(e) => { e.preventDefault(); handleHomeClick(item.id); }} className="block px-4 py-2 text-sm text-primary-text hover:bg-gray-100">{item.label}</a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {navItems.map(item => (
                                    <button key={item.id} onClick={() => handleNavClick(item.id)} className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === item.id ? 'text-dark-golden' : 'text-primary-text hover:text-dark-golden'}`}>
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                 <button onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)} className="flex items-center gap-2 text-sm font-medium text-primary-text hover:text-dark-golden">
                                    {languages.find(l => l.code === language)?.flag}
                                    <span>{languages.find(l => l.code === language)?.name}</span>
                                    <SvgIcon path="M19.5 8.25l-7.5 7.5-7.5-7.5" className="w-4 h-4" />
                                </button>
                                {isLangDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1">
                                            {languages.map(lang => (
                                                <button key={lang.code} onClick={() => handleLangChange(lang.code)} className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-primary-text hover:bg-gray-100">
                                                    <span>{lang.flag}</span>
                                                    <span>{lang.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                             <button onClick={() => handleNavClick(Page.ShopNow)} className="bg-golden-accent text-primary-text font-bold py-2 px-6 rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-105">{t.shopNow}</button>
                        </div>
                    </div>

                    {/* Mobile Header */}
                    <div className="flex lg:hidden items-center justify-between w-full">
                        {/* Left: Logo & Name */}
                        <button onClick={() => handleHomeClick()} aria-label="Go to homepage" className="flex items-center space-x-2">
                            <img className="h-10 w-auto" src="https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-logo-smll.webp" alt="Golden Taan Logo" />
                            <span className="font-display text-xl text-dark-golden font-bold">Golden TAAN</span>
                        </button>
    
                        {/* Right: Language Switcher and Hamburger */}
                        <div className="flex items-center">
                            {/* Language Switcher */}
                            <div className="relative">
                                <button onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)} className="flex items-center gap-2 text-sm font-medium text-primary-text hover:text-dark-golden p-2 rounded-md hover:bg-medium-bg/50">
                                    {languages.find(l => l.code === language)?.flag}
                                    <span>{languages.find(l => l.code === language)?.name}</span>
                                </button>
                                {isLangDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                        <div className="py-1">
                                            {languages.map(lang => (
                                                <button key={lang.code} onClick={() => handleLangChange(lang.code)} className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-primary-text hover:bg-gray-100">
                                                    <span>{lang.flag}</span>
                                                    <span>{lang.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
    
                            {/* Hamburger Icon */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="relative z-50 flex items-center justify-center p-2 rounded-md hover:bg-medium-bg/50"
                                aria-controls="mobile-menu"
                                aria-expanded={isMenuOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                <div className="relative h-6 w-6">
                                    <span aria-hidden="true" className={`absolute block h-0.5 w-6 transform bg-primary-text transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
                                    <span aria-hidden="true" className={`absolute block h-0.5 w-6 bg-primary-text transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                    <span aria-hidden="true" className={`absolute block h-0.5 w-6 transform bg-primary-text transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Panel (slides down) */}
            <div
                id="mobile-menu"
                className={`lg:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <div className="flex flex-col items-center py-6 space-y-6">
                    <button onClick={() => handleHomeClick()} className="text-xl font-sans font-medium text-primary-text hover:text-dark-golden">{t.home}</button>
                    {navItems.map(item => (
                        <button key={item.id} onClick={() => handleNavClick(item.id)} className="text-xl font-sans font-medium text-primary-text hover:text-dark-golden">
                            {item.label}
                        </button>
                    ))}
                    <button onClick={() => handleNavClick(Page.ShopNow)} className="mt-4 bg-golden-accent text-primary-text font-medium py-2.5 px-6 rounded-full text-xl hover:bg-yellow-500 transition duration-300 transform hover:scale-105">
                        {t.shopNow}
                    </button>
                </div>
            </div>
        </header>
    );
};


const Footer = ({ setPage }: { setPage: (page: Page) => void }) => {
    const { translations } = useLocalization();
    const t = translations.footer;
    const t_en = siteContent.en.footer; // Always use English for contact details

    const handleFooterLinkClick = (page: Page) => {
        setPage(page);
        window.scrollTo(0, 0);
    }
    const links = [
        { page: Page.Home, label: translations.nav.home },
        { page: Page.About, label: translations.nav.ourStory },
        { page: Page.Heritage, label: translations.nav.heritage },
        { page: Page.Sustainability, label: translations.nav.sustainability },
        { page: Page.Wholesale, label: translations.nav.wholesale },
        { page: Page.ShopNow, label: translations.nav.shopNow },
    ];
    return (
        <footer id="contact" className="bg-primary-text text-light-text/80 py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
                <div>
                    <img src="https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-logo-smll.webp" alt="Golden Taan Logo" className="h-12 mb-4" />
                    <p>{t_en.address}</p>
                    <p className="mt-2">{t_en.contactPerson.label}: {t_en.contactPerson.name}</p>
                    <p>{t_en.phone.label}: {t_en.phone.number}</p>
                    <p>{t_en.email.label}: {t_en.email.address}</p>
                </div>
                <div>
                     <h3 className="font-display text-xl text-light-text mb-4">{t.quickLinks}</h3>
                     <ul className="space-y-2">
                        {links.map(link => (
                            <li key={link.page}><button onClick={() => handleFooterLinkClick(link.page)} className="hover:text-golden-accent transition-colors">{link.label}</button></li>
                        ))}
                     </ul>
                </div>
                <div>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.875235889239!2d100.52199041535712!3d13.72594630188613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298df36357429%3A0x8e122783363364f!2sJewelry%20Trade%20Center!5e0!3m2!1sen!2sth!4v1684321098765!5m2!1sen!2sth" 
                        width="100%" 
                        height="200" 
                        style={{ border: 0 }} 
                        allowFullScreen={false}
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Golden Taan Office Location"
                        className="rounded-md"
                    ></iframe>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 border-t border-light-text/20 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">{t.copyright.replace('{year}', new Date().getFullYear().toString())}</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" aria-label="Facebook"><SvgIcon path="M12 2.032c-5.514 0-9.968 4.454-9.968 9.968s4.454 9.968 9.968 9.968c5.514 0 9.968-4.454 9.968-9.968S17.514 2.032 12 2.032zm3.11 6.232h-1.396c-.732 0-.874.348-.874.858v1.11h2.24l-.292 2.268H12.84v6.86h-2.34v-6.86H9.172V9.232h1.328V8.01c0-1.316.804-2.032 1.978-2.032h1.672v2.284z"/></a>
                    <a href="#" aria-label="Instagram"><SvgIcon path="M11.97 2.017c-2.67 0-3.01.01-4.05.058-.97.045-1.64.22-2.23.447-.63.245-1.13.56-1.64.96-.5.41-.82.91-1.06 1.54-.23.59-.4 1.26-.45 2.23-.05 1.03-.06 1.38-.06 4.05s.01 3.01.06 4.05c.04.97.22 1.64.45 2.23.24.63.56 1.13.96 1.64.41.5.91.82 1.54 1.06.59.23 1.26.4 2.23.45 1.03.05 1.38.06 4.05.06s3.01-.01 4.05-.06c.97-.04 1.64-.22 2.23-.45.63-.24 1.13-.56 1.64-.96.5-.41.82.91 1.06-1.54.23-.59.4-1.26.45-2.23.05-1.03.06-1.38.06-4.05s-.01-3.01-.06-4.05c-.04-.97-.22-1.64-.45-2.23-.24-.63-.56-1.13-.96-1.64-.41-.5-.91-.82-1.54-1.06-.59-.23-1.26-.4-2.23-.45-1.03-.05-1.38-.06-4.05-.06zm0 1.8c2.6 0 2.92.01 3.95.057.88.04 1.4.21 1.8.36.49.18.82.41 1.15.74.33.33.56.66.74 1.15.15.4.32.91.36 1.8.047 1.02.057 1.34.057 3.95s-.01 2.92-.057 3.95c-.04.88-.21 1.4-.36 1.8-.18.49-.41.82-.74 1.15-.33.33-.66.56-1.15.74-.4.15-.91.32-1.8.36-1.02.047-1.34.057-3.95.057s-2.92-.01-3.95-.057c-.88-.04-1.4-.21-1.8-.36-.49-.18-.82-.41-1.15-.74-.33-.33-.56-.66-.74-1.15-.15-.4-.32-.91-.36-1.8-.047-1.02-.057-1.34-.057-3.95s.01-2.92.057-3.95c.04-.88.21 1.4.36-1.8.18.49.41.82.74-1.15.33-.33.66.56 1.15-.74.4-.15.91.32 1.8-.36C9.05 3.827 9.37 3.817 11.97 3.817zm0 2.73c-2.97 0-5.38 2.41-5.38 5.38s2.41 5.38 5.38 5.38 5.38-2.41 5.38-5.38-2.41-5.38-5.38-5.38zm0 8.82c-1.9 0-3.43-1.54-3.43-3.43s1.54-3.43 3.43 3.43 3.43 1.54 3.43 3.43-1.54 3.43-3.43 3.43zm6.34-8.98c-.74 0-1.34-.6-1.34-1.34s.6-1.34 1.34-1.34 1.34.6 1.34 1.34-.6 1.34-1.34 1.34z"/></a>
                    <a href="#" aria-label="TikTok"><SvgIcon path="M21.5 8.1v6.9c0 1.17-1.04 2.06-2.2 1.88-1.51-.23-2.33-1.7-2.3-3.04V9.85c0-1.37.8-2.8 2.28-3.02 1.1-.16 2.22.75 2.22 1.8V8.1zm-8.8 3.55v-2.3c0-1.28-1.06-2.3-2.35-2.3-1.3 0-2.35 1.02-2.35 2.3v5.1c0 1.28 1.05 2.3 2.35 2.3 1.3 0 2.35-1.02 2.35-2.3v-2.8zm-6.92-3.83c-1.3 0-2.35 1.02-2.35 2.3v2.85c0 1.28 1.05 2.3 2.35 2.3 1.3 0 2.35-1.02 2.35-2.3V10.1c0-1.28-1.05-2.3-2.35-2.3z" /></a>
                </div>
            </div>
        </footer>
    )
};

// --- Main App Component ---

const AppContent = () => {
    const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const { translations } = useLocalization();

    const handleAddToCart = (product: Product) => {
        setCartItems(prevItems => {
            // Use translated product details for the cart
            const p = translations.home.products.find(tp => tp.id === product.id) || product;
            const existingItem = prevItems.find(item => item.id === p.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === p.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...p, quantity: 1 }];
        });
    };

    const handleUpdateCartQuantity = (id: string, amount: number) => {
        setCartItems(prevItems => {
            return prevItems.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + amount } : item
            ).filter(item => item.quantity > 0);
        });
    };

    const renderPage = () => {
        switch (currentPage) {
            case Page.Home:
                return <HomePage onAddToCart={handleAddToCart} />;
            case Page.About:
                return <AboutUsPage />;
            case Page.Heritage:
                return <HeritagePage />;
            case Page.Sustainability:
                return <SustainabilityPage />;
            case Page.Wholesale:
                return <WholesalePage />;
            case Page.ShopNow:
                return <ShopNowPage cartItems={cartItems} onUpdateQuantity={handleUpdateCartQuantity} setPage={setCurrentPage} />;
            case Page.Blog:
                return <BlogPage />;
            default:
                return <HomePage onAddToCart={handleAddToCart} />;
        }
    };
    
    useEffect(() => {
        if (currentPage !== Page.Home) {
            window.scrollTo(0, 0);
        }
    }, [currentPage]);

    return (
        <div className="bg-light-bg">
            <Header setPage={setCurrentPage} currentPage={currentPage} />
            <main>
                {renderPage()}
            </main>
            <Footer setPage={setCurrentPage} />
        </div>
    );
}

const App = () => {
    const [language, setLanguageState] = useState<Language>(() => {
        const storedLang = localStorage.getItem('language');
        return (storedLang && ['en', 'th', 'de', 'ja', 'ko', 'fr', 'zh'].includes(storedLang) ? storedLang : 'en') as Language;
    });

    const setLanguage = (lang: Language) => {
        localStorage.setItem('language', lang);
        setLanguageState(lang);
    };

    useEffect(() => {
        const translations = siteContent[language];
        document.title = translations.metaTitle;
        document.querySelector('meta[name="description"]')?.setAttribute('content', translations.metaDescription);
        document.documentElement.lang = language;
    }, [language]);

    const contextValue = {
        language,
        setLanguage,
        translations: siteContent[language],
    };

    return (
        <LocalizationContext.Provider value={contextValue}>
            <AppContent />
        </LocalizationContext.Provider>
    );
};


export default App;