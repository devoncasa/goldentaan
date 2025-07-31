
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import StyledText from '../components/StyledText';
import PageSection from '../components/ParallaxSection';
import { Product } from '../types';
import { useTranslations } from '../hooks/useTranslations';

interface ProductsPageProps {
    backgrounds: string[];
    translatedProducts: Product[];
    addToCart: (product: Product) => void;
    requestQuote: (product: Product) => void;
}

type Category = 'all' | Product['category'];

const ProductsPage: React.FC<ProductsPageProps> = ({ backgrounds, translatedProducts, addToCart, requestQuote }) => {
    const [flippedCardId, setFlippedCardId] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState<Category>('all');
    const { t } = useTranslations();

    const categories: { key: Category; label: string }[] = [
        { key: 'all', label: 'All' },
        { key: 'bar', label: 'Bars' },
        { key: 'powder', label: 'Powder' },
        { key: 'syrup', label: 'Syrup' },
        { key: 'bulk', label: 'Bulk' },
        { key: 'specialty', label: 'Specialty' },
    ];

    const filteredProducts = activeCategory === 'all'
        ? translatedProducts
        : translatedProducts.filter(p => p.category === activeCategory);

    return (
        <main>
            <PageSection id="products" bgImage={backgrounds[8]}>
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c]"><StyledText text={t('products.title')} /></h2>
                    <p className="mt-4 text-lg text-[#2c2c2c]"><StyledText text={t('products.subtitle')} /></p>
                </div>
                
                <div className="my-8 flex justify-center flex-wrap gap-2">
                    {categories.map(({ key, label }) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                                activeCategory === key
                                    ? 'bg-[#a5a58d] text-white'
                                    : 'bg-white/50 text-[#2c2c2c] hover:bg-[#a5a58d]/50'
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {filteredProducts.map((product) => (
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
            </PageSection>
        </main>
    );
}

export default ProductsPage;
