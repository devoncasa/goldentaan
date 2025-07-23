
import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { Product, Recipe } from '../types';
import { RECIPES_DATA_KEYS, PRODUCTS_DATA, MENU_ITEMS } from '../constants';

interface SchemaMarkupProps {
    products: Product[];
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ products }) => {
    const { t, language } = useTranslations();

    const siteUrl = "https://goldentaan.com"; // Placeholder URL

    // Organization Schema
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Golden Taan",
        "url": siteUrl,
        "logo": "https://i.postimg.cc/mrQKP5dZ/taan-logo-small.webp",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "96/3 Moo.2, T. Wanyai",
            "addressLocality": "Bang Phae",
            "addressRegion": "Ratchaburi",
            "postalCode": "70160",
            "addressCountry": "TH"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+66-96-861-5795",
            "contactType": "Customer Service"
        },
        "sameAs": [
            "https://facebook.com",
            "https://instagram.com",
            "https://youtube.com"
        ]
    };

    // Product Schema
    const productSchemas = products.map(product => ({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.title,
        "image": product.image,
        "description": product.description,
        "sku": product.sku,
        "brand": {
            "@type": "Brand",
            "name": "Golden Taan"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "187"
        },
        "offers": {
            "@type": product.isQuote ? "Demand" : "Offer",
            "url": `${siteUrl}#products`,
            "priceCurrency": language === 'th' ? "THB" : "USD",
            ...(product.isQuote ? {} : { "price": product.price }),
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "Organization",
                "name": "Golden Taan"
            }
        }
    }));
    
    // FAQ Schema
    const faqItems = Object.values(t('faq.items'));
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map((item: any) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answerIsTable ? t('faq.table.intro') : item.answer
            }
        }))
    };
    
    // Recipe Schema
    const translatedRecipes: Recipe[] = RECIPES_DATA_KEYS.map(recipeKey => ({
        ...recipeKey,
        ...t(recipeKey.key)
    }));

    const recipeSchemas = translatedRecipes.map(recipe => ({
        "@context": "https://schema.org",
        "@type": "Recipe",
        "name": recipe.name,
        "image": recipe.image,
        "description": recipe.description,
        "keywords": "Palmyra Palm Sugar, Toddy Palm Sugar Recipe, Natural Sweetener Recipe",
        "recipeIngredient": recipe.recipeIngredient,
        "recipeInstructions": recipe.recipeInstructions.map((step, index) => ({
            "@type": "HowToStep",
            "name": step.name,
            "text": step.text,
            "url": `${siteUrl}#recipes-step-${index + 1}`
        })),
        "nutrition": {
            "@type": "NutritionInformation",
            "calories": recipe.nutrition.calories,
            "sugarContent": recipe.nutrition.sugarContent
        },
        "author": {
            "@type": "Organization",
            "name": "Golden Taan"
        }
    }));

    // Article Schema for educational content
    const storySections = [
        { id: 'legacy', key: 'ourStory.legacy', image: 'https://i.postimg.cc/T3YjD6gQ/golden-taan-legacy-intro.jpg' },
        { id: 'palmyra-palm', key: 'ourStory.palmyraPalm', image: 'https://i.postimg.cc/kXg20sL0/borassus-flabellifer-illustration.png' },
        { id: 'harvest-art', key: 'ourStory.harvestArt', image: 'https://i.postimg.cc/0jWvM7Nn/farmer-climbing-palm-tree.jpg' },
        { id: 'commitment', key: 'ourStory.commitment', image: 'https://i.postimg.cc/50tZ8Jp2/ecological-sustainability.jpg' },
        { id: 'community', key: 'ourStory.communityImpact', image: 'https://i.postimg.cc/SRGKVRT3/hero-section-background-00126.webp' }
    ];

    const articleSchemas = storySections.map(section => ({
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteUrl}#${section.id}`
        },
        "headline": t(`${section.key}.title`),
        "description": t(`${section.key}.subtitle`),
        "image": section.image,
        "author": {
            "@type": "Organization",
            "name": "Golden Taan"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Golden Taan",
            "logo": {
                "@type": "ImageObject",
                "url": "https://i.postimg.cc/mrQKP5dZ/taan-logo-small.webp"
            }
        },
        "datePublished": "2025-01-01",
        "dateModified": "2025-01-01"
    }));

    // BreadcrumbList Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": MENU_ITEMS.filter(item => !item.subItems).map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": t(item.name),
            "item": `${siteUrl}#${item.to}`
        }))
    };

    const schemas = [organizationSchema, faqSchema, breadcrumbSchema, ...productSchemas, ...recipeSchemas, ...articleSchemas];

    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
};

export default SchemaMarkup;