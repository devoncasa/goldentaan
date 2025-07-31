

import React, { useState } from 'react';
import { Recipe, Page } from '../types';
import { useTranslations } from '../hooks/useTranslations';
import PageSection from '../components/ParallaxSection';
import StyledText from '../components/StyledText';
import RecipeCard from '../components/RecipeCard';

interface RecipesPageProps {
    backgrounds: string[];
    translatedRecipes: Recipe[];
    setCurrentPage: (page: Page) => void;
}

type RecipeCategory = 'all' | Recipe['category'];

const RecipesPage: React.FC<RecipesPageProps> = ({ backgrounds, translatedRecipes, setCurrentPage }) => {
    const { t } = useTranslations();
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [activeCategory, setActiveCategory] = useState<RecipeCategory>('all');

    const categories: { key: RecipeCategory, label: string }[] = [
        { key: 'all', label: t('recipesPage.categories.all') },
        { key: 'thai-traditional', label: t('recipesPage.categories.thai-traditional') },
        { key: 'thai-dessert', label: t('recipesPage.categories.thai-dessert') },
        { key: 'western-dish', label: t('recipesPage.categories.western-dish') },
        { key: 'beverage', label: t('recipesPage.categories.beverage') },
    ];

    const filteredRecipes = activeCategory === 'all'
        ? translatedRecipes
        : translatedRecipes.filter(r => r.category === activeCategory);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main>
            <PageSection id="recipes" bgImage={backgrounds[10]}>
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2c2c2c]"><StyledText text={t('recipesPage.title')} /></h2>
                    <p className="mt-4 text-lg text-[#2c2c2c] max-w-2xl mx-auto"><StyledText text={t('recipesPage.subtitle')} /></p>
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

                <div className="mt-8">
                    {filteredRecipes.length > 0 ? (
                        filteredRecipes.map((recipe, index) => (
                            <RecipeCard 
                                key={recipe.key}
                                recipe={recipe}
                                isOpen={openIndex === index}
                                onClick={() => handleClick(index)}
                                setCurrentPage={setCurrentPage}
                            />
                        ))
                    ) : (
                        <div className="text-center py-12 text-[#2c2c2c]/80">
                            <p>{t('recipesPage.noRecipes')}</p>
                        </div>
                    )}
                </div>
            </PageSection>
        </main>
    );
};

export default RecipesPage;