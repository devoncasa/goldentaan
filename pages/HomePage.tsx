
import React, { useState } from 'react';
import JourneyInfographic from '../components/JourneyInfographic';
import StyledText from '../components/StyledText';
import PageSection from '../components/ParallaxSection';
import { Product, Recipe, Page } from '../types';
import { useTranslations } from '../hooks/useTranslations';
import ProductCard from '../components/ProductCard';
import { FiArrowRight } from 'react-icons/fi';

interface HomePageProps {
    backgrounds: string[];
    translatedProducts: Product[];
    translatedRecipes: Recipe[];
    addToCart: (product: Product) => void;
    requestQuote: (product: Product) => void;
    setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ backgrounds, translatedProducts, translatedRecipes, addToCart, requestQuote, setCurrentPage }) => {
    const { t } = useTranslations();
    const [flippedCardId, setFlippedCardId] = useState<number | null>(null);

    const featuredProducts = translatedProducts.slice(0, 3);
    const featuredRecipes = translatedRecipes.slice(0, 4);

    return (
        <main>
            {/* Hero Section */}
            <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
                {backgrounds[0] && <div className="section-bg-container" style={{ backgroundImage: `url(${backgrounds[0]})` }} />}
                <div className="absolute inset-0 bg-white/20 z-[2]" />
                <div className="relative z-[3] bg-white/60 backdrop-blur-sm border-2 border-[#c39b6f] rounded-xl shadow-2xl p-8 md:p-12 text-center max-w-4xl mx-4">
                    <img 
                        src="https://i.postimg.cc/mrQKP5dZ/taan-logo-small.webp" 
                        alt={t('header.brandName')}
                        className="h-20 w-auto mx-auto mb-6"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-[#2c2c2c]">
                        <StyledText text={t('hero.title')} />
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl font-medium text-[#c39b6f]">
                        <StyledText text={t('hero.subtitle')} />
                    </p>
                    <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-[#2c2c2c]">
                        <StyledText text={t('hero.intro')} />
                    </p>
                    <button onClick={() => setCurrentPage('products')} className="mt-8 inline-block bg-[#a5a58d] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#8f8f74] transition-colors cursor-pointer transform hover:scale-105 shadow-xl">
                        <StyledText text={t('hero.button')} />
                    </button>
                </div>
            </section>
            
            {/* Why Choose Us Section */}
            <PageSection id="why-choose-us" bgImage={backgrounds[1]}>
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c]"><StyledText text={t('whyChoose.title')} /></h2>
                </div>
                <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                {Object.values(t('whyChoose.items')).map((item: any, index: number) => (
                    <div key={index} className="text-center">
                    <div className="text-5xl mb-4 inline-block">{item.icon}</div>
                    <h3 className="text-xl font-bold text-[#2c2c2c]"><StyledText text={item.title} /></h3>
                    <p className="mt-2 text-[#2c2c2c]"><StyledText text={item.text} /></p>
                    </div>
                ))}
                </div>
            </PageSection>

            {/* Featured Products Section */}
            <PageSection id="featured-products" bgImage={backgrounds[2]}>
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c]"><StyledText text={t('homePage.featuredProducts.title')} /></h2>
                <p className="mt-4 text-lg text-[#2c2c2c] max-w-2xl mx-auto"><StyledText text={t('homePage.featuredProducts.subtitle')} /></p>
              </div>
              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {featuredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                    onQuoteRequest={requestQuote}
                    flippedCardId={flippedCardId}
                    setFlippedCardId={setFlippedCardId}
                  />
                ))}
              </div>
              <div className="mt-12 text-center">
                <button onClick={() => setCurrentPage('products')} className="inline-flex items-center gap-2 bg-[#a5a58d] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#8f8f74] transition-colors transform hover:scale-105 shadow-xl">
                  <StyledText text={t('homePage.featuredProducts.button')} />
                  <FiArrowRight />
                </button>
              </div>
            </PageSection>

            {/* Featured Recipes Section */}
            <PageSection id="featured-recipes" bgImage={backgrounds[3]}>
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c]"><StyledText text={t('homePage.featuredRecipes.title')} /></h2>
                    <p className="mt-4 text-lg text-[#2c2c2c] max-w-2xl mx-auto"><StyledText text={t('homePage.featuredRecipes.subtitle')} /></p>
                </div>
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {featuredRecipes.map((recipe) => (
                        <div key={recipe.key} className="group overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer" onClick={() => setCurrentPage('recipes')}>
                            <div className="relative">
                                <img src={recipe.image} alt={recipe.alt} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                            </div>
                            <div className="p-4 flex flex-col h-40">
                                <h3 className="font-bold text-lg text-[#2c2c2c] flex-grow"><StyledText text={recipe.name} /></h3>
                                <div className="mt-4">
                                    <span className="inline-flex items-center gap-2 text-[#c39b6f] font-semibold">
                                        <StyledText text={t('homePage.featuredRecipes.viewRecipe')} />
                                        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <button onClick={() => setCurrentPage('recipes')} className="inline-flex items-center gap-2 bg-[#a5a58d] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#8f8f74] transition-colors transform hover:scale-105 shadow-xl">
                        <StyledText text={t('homePage.featuredRecipes.button')} />
                        <FiArrowRight />
                    </button>
                </div>
            </PageSection>

            {/* Journey Infographic Section */}
            <PageSection id="journey" bgImage={backgrounds[4]}>
                <JourneyInfographic />
            </PageSection>
        </main>
    );
}

export default HomePage;
