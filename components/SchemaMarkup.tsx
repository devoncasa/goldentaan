import React from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { Product, Recipe } from '../types';
import { RECIPES_DATA_KEYS, PRODUCTS_DATA } from '../constants';

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
        "aggregateRating": { // Placeholder as requested
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

    const schemas = [organizationSchema, faqSchema, ...productSchemas, ...recipeSchemas];

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
