

import { Translations, Language, BlogPost } from "./types";

const nutrientData = {
    en: [
        { name: 'Potassium (mg)', goldenTaan: 1030, unrefinedSugarcane: 450, coconutSugar: 625, refinedWhiteSugar: 2 },
        { name: 'Calcium (mg)', goldenTaan: 8, unrefinedSugarcane: 85, coconutSugar: 30, refinedWhiteSugar: 1 },
        { name: 'Phosphorus (mg)', goldenTaan: 79, unrefinedSugarcane: 40, coconutSugar: 79, refinedWhiteSugar: 0 },
        { name: 'Iron (mg)', goldenTaan: 2.6, unrefinedSugarcane: 2.6, coconutSugar: 2, refinedWhiteSugar: 0.1 },
        { name: 'Zinc (mg)', goldenTaan: 0.3, unrefinedSugarcane: 0.4, coconutSugar: 2, refinedWhiteSugar: 0 },
        { name: 'Copper (mg)', goldenTaan: 0.2, unrefinedSugarcane: 0.5, coconutSugar: 0.2, refinedWhiteSugar: 0 },
    ],
    th: [
        { name: 'โพแทสเซียม (มก.)', goldenTaan: 1030, unrefinedSugarcane: 450, coconutSugar: 625, refinedWhiteSugar: 2 },
        { name: 'แคลเซียม (มก.)', goldenTaan: 8, unrefinedSugarcane: 85, coconutSugar: 30, refinedWhiteSugar: 1 },
        { name: 'ฟอสฟอรัส (มก.)', goldenTaan: 79, unrefinedSugarcane: 40, coconutSugar: 79, refinedWhiteSugar: 0 },
        { name: 'ธาตุเหล็ก (มก.)', goldenTaan: 2.6, unrefinedSugarcane: 2.6, coconutSugar: 2, refinedWhiteSugar: 0.1 },
        { name: 'สังกะสี (มก.)', goldenTaan: 0.3, unrefinedSugarcane: 0.4, coconutSugar: 2, refinedWhiteSugar: 0 },
        { name: 'ทองแดง (มก.)', goldenTaan: 0.2, unrefinedSugarcane: 0.5, coconutSugar: 0.2, refinedWhiteSugar: 0 },
    ]
};

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "The Art of Palmyra: From Blossom to Block",
        coverImage: "https://via.placeholder.com/800x600.png?text=Palmyra+Harvest+(4:3)",
        introduction: "Journey with us into the heart of Thailand's palm groves to discover the ancient, artisanal process behind every crystal of Golden Taan.",
        content: [
            { type: 'heading', text: "A Dawn Harvest" },
            { type: 'paragraph', text: "The day begins before sunrise, as skilled farmers ascend the towering Palmyra palms. This is a craft passed down through generations, requiring immense skill and respect for the tree. They gently slice the flower's spathe to coax out the sweet, translucent nectar, which drips into bamboo containers placed overnight." },
            { type: 'image', src: "https://via.placeholder.com/1200x800.png?text=Collecting+Nectar+(3:2)", alt: "A farmer collecting palm nectar at dawn." },
            { type: 'paragraph', text: "The collected nectar, known as 'Neera', is fresh and delicate. It must be transported and processed quickly to prevent fermentation. This sense of urgency is what preserves the purity of the final product." },
            { type: 'heading', text: "The Slow Simmer" },
            { type: 'paragraph', text: "The magic happens over a slow, wood-fired flame. The nectar is poured into large woks and gently simmered for hours. This isn't a process that can be rushed. The artisan constantly stirs and skims the liquid, carefully monitoring its transformation as water evaporates and the sugars concentrate. The air fills with a rich, caramel aroma—the very essence of Golden Taan." },
            { type: 'paragraph', text: "Unlike industrial sugar which uses chemicals for clarification, our process relies on skill and patience. The result is a thick, golden syrup, rich in the natural minerals from the nectar." },
            { type: 'heading', text: "Crystallization: The Final Touch" },
            { type: 'paragraph', text: "The final step is allowing the concentrated syrup to cool and crystallize naturally. It's poured into molds or stirred to create different textures—from our coarse crystals to our fine powder. This natural crystallization is what gives Golden Taan its unique texture and locks in its complex flavor profile." }
        ]
    },
    {
        id: 2,
        title: "Recipe: Golden Taan Glazed Salmon",
        coverImage: "https://via.placeholder.com/800x600.png?text=Glazed+Salmon+(4:3)",
        introduction: "Elevate a simple weeknight dinner into a gourmet experience with this sweet and savory salmon glaze, featuring the deep, caramel notes of Golden Taan.",
        content: [
            { type: 'heading', text: "Ingredients" },
            { type: 'paragraph', text: "• 2 salmon fillets (6 oz each)\n• 2 tbsp Golden Taan Syrup\n• 1 tbsp soy sauce\n• 1 tsp grated ginger\n• 1 clove garlic, minced\n• Salt and pepper to taste\n• 1 tsp sesame oil\n• Toasted sesame seeds and sliced green onions for garnish" },
            { type: 'heading', text: "Instructions" },
            { type: 'paragraph', text: "1. Preheat your oven to 400°F (200°C).\n2. In a small bowl, whisk together the Golden Taan Syrup, soy sauce, ginger, garlic, and sesame oil. This will be your glaze.\n3. Pat the salmon fillets dry and season with salt and pepper. Place them skin-down on a baking sheet lined with parchment paper.\n4. Brush half of the glaze mixture evenly over the salmon fillets.\n5. Bake for 12-15 minutes, or until the salmon is cooked through. In the last 2 minutes of cooking, brush the remaining glaze over the salmon.\n6. Garnish with toasted sesame seeds and green onions before serving. Pairs beautifully with steamed rice and vegetables." },
            { type: 'image', src: "https://via.placeholder.com/1200x800.png?text=Finished+Salmon+Dish+(3:2)", alt: "A plated dish of Golden Taan glazed salmon." },
        ]
    },
    {
        id: 3,
        title: "Beyond Sweetness: The Health Benefits of Palmyra Palm Sugar",
        coverImage: "https://via.placeholder.com/800x600.png?text=Healthy+Ingredients+(4:3)",
        introduction: "We often think of sugar as an indulgence, but what if a sweetener could offer more? Discover the nutritional powerhouse that is Golden Taan.",
        content: [
            { type: 'heading', text: "Low Glycemic Index" },
            { type: 'paragraph', text: "One of the most significant benefits of Golden Taan is its low glycemic index (GI), which is around 35. This is much lower than refined white sugar (GI ≈ 65). A low GI means it's absorbed more slowly into the bloodstream, preventing the sharp spikes and crashes in blood sugar and energy levels. This makes it a smarter choice for sustained energy." },
            { type: 'heading', text: "A Treasure Trove of Minerals" },
            { type: 'paragraph', text: "Because it's unrefined, Golden Taan retains the minerals naturally present in the palm nectar. It is exceptionally rich in potassium, an essential electrolyte for regulating blood pressure and muscle function. It also contains significant amounts of iron, magnesium, zinc, and B vitamins—nutrients that are completely stripped away during the industrial refining of white sugar." },
        ]
    },
    {
        id: 4,
        title: "Cocktail Hour: The Golden Taan Old Fashioned",
        coverImage: "https://via.placeholder.com/800x600.png?text=Old+Fashioned+Cocktail+(4:3)",
        introduction: "Reimagine a classic cocktail with the complex, smoky-caramel notes of our signature Golden Taan Syrup.",
        content: [
            { type: 'heading', text: "Ingredients" },
            { type: 'paragraph', text: "• 2 oz Bourbon or Rye Whiskey\n• 1/4 oz Golden Taan Syrup\n• 2 dashes Angostura bitters\n• Orange peel for garnish" },
            { type: 'heading', text: "Instructions" },
            { type: 'paragraph', text: "1. In a mixing glass, combine the whiskey, Golden Taan Syrup, and bitters.\n2. Add a large ice cube and stir until well-chilled (about 30 seconds).\n3. Strain into a rocks glass over a fresh, large ice cube.\n4. Express the orange peel over the drink by squeezing it to release its oils, then rub the peel around the rim of the glass and drop it in as a garnish." },
        ]
    },
];

const en: Translations = {
    metaTitle: "Golden Taan | Authentic Palmyra Palm Sugar - Sustainably Sourced",
    metaDescription: "Discover Golden Taan, the premium, low-GI Palmyra Palm Sugar. 100% pure, unrefined, and sustainably sourced from our family farms in Ratchaburi, Thailand.",
    nav: {
        home: "Home",
        ourStory: "Our Story",
        heritage: "Our Heritage",
        blog: "Blog",
        sustainability: "Sustainability",
        wholesale: "Wholesale & B2B",
        shopNow: "Shop Now",
        homeSubItems: [
            { id: '#our-story', label: 'Our Story' },
            { id: '#health-benefits', label: 'Health Benefits' },
            { id: '#products', label: 'Products' },
            { id: '#contact', label: 'Contact Us' },
        ]
    },
    home: {
        hero: {
            headline: "Golden Taan: A Legacy of Sweetness",
            subheadline: "Discover the pure taste of authentic Palmyra Palm Sugar, perfected by nature.",
            cta: "Discover Our Story",
        },
        trends: {
            headline: "A World Craving Authenticity",
            description: "The global food landscape is undergoing a monumental shift. Modern consumers are looking beyond flavor, seeking transparency, health, and sustainability in every bite.",
            billion: "Billion",
            marketStat: "The natural sweeteners market is projected to reach over $55B by 2030.",
            consumerStat: "of global consumers are actively choosing products with natural, clean-label ingredients.",
        },
        health: {
            headline: "The Wholesome Difference: A Nutritional Deep Dive",
            description: "Unlike refined white sugar which is stripped of nutrients, unrefined sweeteners like Golden Taan and raw sugarcane retain a significant amount of their natural minerals. This chart breaks down the stark difference in nutritional value per 100g.",
            chartTitle: "Nutrient Comparison (per 100g)",
            goldenTaan: "Golden TAAN (Palm Sugar)",
            unrefinedSugarcane: "Unrefined Sugarcane",
            coconutSugar: "Coconut Sugar",
            refinedWhiteSugar: "Refined White Sugar",
            nutrientData: nutrientData.en,
            insight: {
                title: "✨ Key Insight: The Power of Unrefined",
                text: "The data clearly shows the superiority of unrefined sweeteners. While both Golden TAAN and raw sugarcane are rich in essential minerals, Golden TAAN's exceptionally high potassium content—over 500 times that of white sugar and more than double that of sugarcane—sets it apart. Potassium is a vital electrolyte essential for regulating blood pressure, nerve function, and muscle contractions, making Golden TAAN a uniquely beneficial choice for a health-conscious lifestyle.",
            },
            glycemicIndexTitle: "Glycemic Index & Energy Release",
            goldenTaanEffect: "Provides a slow, steady release of energy for sustained vitality.",
            whiteSugarEffect: "Causes a rapid blood sugar spike, followed by an energy crash."
        },
        process: {
            headline: "A Tale of Two Processes",
            description: "The process is what separates a living sweetener from an empty one. This is what makes all the difference.",
            artisanal: {
                title: "Golden Taan (Artisanal Method)",
                steps: [
                    { title: "Harvesting", description: "Skilled farmers climb the palms to collect the sweet nectar from blossoms using bamboo cylinders." },
                    { title: "Simmering", description: "The fresh nectar is slow-cooked in large woks over a gentle wood fire until it thickens." },
                    { title: "Crystallizing", description: "It is then allowed to cool and crystallize naturally, preserving its color, aroma, and nutrients." },
                ],
            },
            industrial: {
                title: "White Sugar (Industrial Method)",
                steps: [
                    { title: "Harvest & Crush", description: "Sugarcane is machine-harvested and crushed to extract its juice." },
                    { title: "Clarification", description: "Chemicals like lime and sulfur dioxide are used to remove impurities from the juice." },
                    { title: "Bleaching & Filtering", description: "The juice is filtered through activated carbon to achieve its pure white color." },
                    { title: "Crystallization", description: "Centrifuges spin the syrup to form crystals of nearly 100% pure sucrose." },
                ]
            }
        },
        impact: {
            headline: "A Sustainable Ecosystem",
            description: "Palmyra palm farming is an inherently sustainable form of agriculture that positively impacts the environment, unlike sugarcane monocultures which often degrade ecosystems.",
            chartTitle: "Sustainability Impact Index (Score out of 10)",
            conventionalSugarcane: "Conventional Sugarcane",
            sustainabilityData: [
                { name: 'Water Efficiency', goldenTaan: 9, sugarcane: 3 },
                { name: 'Soil Regeneration', goldenTaan: 9, sugarcane: 2 },
                { name: 'Low Pesticide Use', goldenTaan: 10, sugarcane: 3 },
                { name: 'Biodiversity', goldenTaan: 8, sugarcane: 4 },
                { name: 'Carbon Storage', goldenTaan: 7, sugarcane: 3 },
            ],
            community: {
                headline: "Rooted in Community",
                description: "Choosing Golden Taan means investing in a cycle of prosperity that starts with the tree, flows to farming families, and returns to you as a product of unparalleled quality.",
                stats: [
                    { value: 40, unit: "+", label: "Years a single tree can provide income for a family" },
                    { value: 2000, unit: "+", label: "Rural households supported with stable income" },
                    { value: 25, unit: "M+", label: "Annual export revenue for community enterprises", prefix: "$" },
                    { value: 15, unit: "%", label: "Premium paid to farmers above market price" },
                ]
            }
        },
        productSection: {
            headline: "Our Products",
            description: "Crafted with care, from our palms to your pantry.",
            addToCart: "Add to Cart",
            added: "Added!",
        },
        products: [
            { 
                id: 'p1', 
                img: 'https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/products/coarse-crystals-150.webp', 
                title: 'Coarse Crystals', 
                size: '150g Jar',
                shortDescription: "Rich, coarse amber crystals with a satisfying crunch.",
                description: "Experience the signature texture of Golden Taan. These amber crystals are perfect for the discerning home chef seeking a finishing touch that wows. Its crunchy texture provides a delightful contrast to soft desserts like crème brûlée, puddings, and ice cream. Flavor Profile: Deep, complex notes of smoky caramel and butterscotch. Nutritional Highlight: Boasting over 1000mg of potassium per 100g and a low glycemic index, it's a sweetener that nourishes. Interesting Fact: The irregular shape of our crystals is a hallmark of traditional, slow-cooling methods—each crystal tells a story of artisanal craftsmanship.",
                price: 15.12, 
                ingredients: '100% Pure Palmyra Palm Nectar.',
                nutrition_highlights: ["Boasting over 1000mg of potassium per 100g", "A low glycemic index sweetener (GI ≈ 35)", "Naturally rich in trace minerals like iron and zinc"],
                dietary_suitability: ["Vegan-Friendly", "Gluten-Free", "Unrefined & Wholesome", "Paleo-Friendly"],
                pairings: ["Finishing touch on crème brûlée", "Sprinkling over oatmeal or yogurt", "Adding crunch to cookies and muffins"],
                packagingInfo: {
                    title: "Packaging & Wholesale",
                    caseSize: "12 Jars per Case",
                    palletQuantity: "120 Cases per Pallet",
                    availability: "Available in all wholesale pricing tiers. Please contact us for a custom quote."
                },
                featuredInRecipes: [2] 
            },
            { 
                id: 'p2', 
                img: 'https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/products/coarse-crystals-200.webp', 
                title: 'Coarse Crystals', 
                size: '200g Jar',
                shortDescription: "A larger jar of our signature crunchy, caramel-flavored crystals.",
                description: "Our larger jar of signature coarse crystals, for the true enthusiast. An essential for bakers and chefs who appreciate texture and depth. The delightful crunch and deep, smoky caramel notes are perfect for baking into cookies, sprinkling over roasted vegetables, or rimming a craft cocktail glass. Flavor Profile: Rich butterscotch and smoky caramel. Nutritional Highlight: A fantastic source of potassium and trace minerals with a low GI for sustained energy. Interesting Fact: Unlike uniform industrial sugars, the varied size of our crystals releases flavor at different rates, creating a more complex taste experience on the palate.",
                price: 14.38,
                ingredients: '100% Pure Palmyra Palm Nectar.',
                nutrition_highlights: ["Excellent source of potassium for electrolyte balance", "Low GI for sustained energy release", "Contains essential minerals stripped from white sugar"],
                dietary_suitability: ["100% Natural & Unprocessed", "Gluten-Free Certified", "Suitable for Vegan Diets", "Non-GMO"],
                pairings: ["Rimming cocktail glasses", "Baking into breads for a crunchy crust", "Sprinkling over roasted vegetables"],
                packagingInfo: {
                    title: "Packaging & Wholesale",
                    caseSize: "12 Jars per Case",
                    palletQuantity: "120 Cases per Pallet",
                    availability: "Available in all wholesale pricing tiers. Please contact us for a custom quote."
                },
                featuredInRecipes: [2, 4] 
            },
            { 
                id: 'p3', 
                img: 'https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/products/syrup-150.webp', 
                title: 'Syrup', 
                size: '150ml Bottle',
                shortDescription: "A velvety, slow-drizzle syrup with notes of toffee and vanilla.",
                description: "Discover liquid gold. This velvety syrup is an essential for breakfast lovers and dessert aficionados. Elevate pancakes, waffles, and yogurt to gourmet status, or use it as a secret weapon in savory glazes for salmon and pork. Flavor Profile: A slow-drizzle syrup with dominant notes of toffee and vanilla, finishing with a subtle hint of smoke. Nutritional Highlight: Naturally rich in minerals like magnesium and iron, this unrefined syrup offers a more wholesome alternative to highly processed syrups. Interesting Fact: Our syrup is created by gently simmering fresh nectar, never boiling it harshly. This preserves its delicate flavor compounds and nutrients.",
                price: 17.86,
                ingredients: '100% Pure Palmyra Palm Nectar, Filtered Water.',
                nutrition_highlights: ["Rich in minerals like magnesium and iron", "A more wholesome alternative to processed syrups", "Unrefined, preserving natural nutrients"],
                dietary_suitability: ["Vegan & Dairy-Free", "Gluten-Free", "No Artificial Additives", "Perfect for Clean Eating"],
                pairings: ["Drizzling over pancakes and waffles", "A secret weapon in savory glazes for salmon or pork", "Sweetening coffee and tea"],
                packagingInfo: {
                    title: "Packaging & Wholesale",
                    caseSize: "12 Bottles per Case",
                    palletQuantity: "120 Cases per Pallet",
                    availability: "Available in all wholesale pricing tiers. Please contact us for a custom quote."
                },
                featuredInRecipes: [4] 
            },
            { 
                id: 'p4', 
                img: 'https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/products/syrup-200.webp', 
                title: 'Syrup', 
                size: '200ml Bottle',
                shortDescription: "An indulgent, larger bottle of our luxurious liquid gold syrup.",
                description: "Indulge with a larger bottle of our luxurious syrup, perfect for families or those who can't get enough of its taste. A must-have for creative mixologists and chefs, it adds complexity to cocktails and dressings. Drizzle with abandon over your favorite foods. Flavor Profile: Luxurious toffee and vanilla with a sophisticated smoky finish. Nutritional Highlight: Retains the natural goodness of Palmyra nectar, providing essential minerals often stripped away in refined sweeteners. Interesting Fact: The color of the syrup can vary slightly from batch to batch, reflecting the season and specific palm grove—a true sign of an all-natural, unstandardized product.",
                price: 17.29,
                ingredients: '100% Pure Palmyra Palm Nectar, Filtered Water.',
                nutrition_highlights: ["Retains the natural goodness of Palmyra nectar", "Provides trace minerals for daily wellness", "A complex carbohydrate source, unlike simple sugars"],
                dietary_suitability: ["All-Natural Liquid Sweetener", "Gluten-Free", "Vegan", "Ideal for unprocessed diets"],
                pairings: ["Creating complex craft cocktails", "Whisking into salad dressings", "Stirring into warm milk for a comforting drink"],
                packagingInfo: {
                    title: "Packaging & Wholesale",
                    caseSize: "12 Bottles per Case",
                    palletQuantity: "120 Cases per Pallet",
                    availability: "Available in all wholesale pricing tiers. Please contact us for a custom quote."
                },
                featuredInRecipes: [4] 
            },
            { 
                id: 'p5', 
                img: 'https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/products/powder-150.webp', 
                title: 'Powder', 
                size: '150g Jar',
                shortDescription: "An ultra-fine powder that dissolves instantly for seamless sweetening.",
                description: "The ultimate baker's companion. Designed for passionate bakers and health-conscious individuals, its fine texture dissolves instantly, making it a seamless 1:1 replacement for refined sugar in cakes, sauces, and your daily coffee or tea. Flavor Profile: A subtle yet rich sweetness with a mild caramel undertone that enhances, not overpowers. Nutritional Highlight: With its low glycemic index (around 35), our powder is an excellent choice for maintaining stable blood sugar levels. Interesting Fact: Our powder is made by gently grinding crystallized sugar blocks, a process that avoids the high heat and chemical bleaching used to make white sugar, thus preserving its authentic flavor.",
                price: 16.90,
                ingredients: '100% Pure Palmyra Palm Nectar.',
                nutrition_highlights: ["Low glycemic index for stable blood sugar", "Seamless 1:1 replacement for refined sugar", "Contains natural antioxidants from the palm nectar"],
                dietary_suitability: ["Perfect for Diabetic-Friendly Recipes (in moderation)", "Vegan & Gluten-Free", "Unbleached and Unprocessed", "Ideal for baking"],
                pairings: ["Baking into cakes, cookies, and pastries", "Dissolving instantly in hot or cold beverages", "Making smooth sauces and marinades"],
                packagingInfo: {
                    title: "Packaging & Wholesale",
                    caseSize: "12 Jars per Case",
                    palletQuantity: "120 Cases per Pallet",
                    availability: "Available in all wholesale pricing tiers. Please contact us for a custom quote."
                },
                featuredInRecipes: [2] 
            },
            { 
                id: 'p6', 
                img: 'https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/products/powder-200.webp', 
                title: 'Powder', 
                size: '200g Jar',
                shortDescription: "Our most versatile sweetener in a larger, pantry-friendly size.",
                description: "Stock your pantry with our most versatile sweetener. This larger jar is perfect for frequent bakers and families looking for a healthier sugar alternative. Use it as a 1:1 replacement for white or brown sugar in all your favorite recipes, from ambitious baking projects to your morning oatmeal. Flavor Profile: A clean, mild caramel sweetness perfect for everyday use. Nutritional Highlight: A smart, flavorful swap for anyone looking to reduce their intake of empty-calorie sugars while retaining a rich taste and natural minerals. Interesting Fact: The fine milling of the powder increases its surface area, allowing it to dissolve quickly and caramelize evenly, making it ideal for creating smooth sauces and perfectly browned baked goods.",
                price: 16.30,
                ingredients: '100% Pure Palmyra Palm Nectar.',
                nutrition_highlights: ["A smart swap to reduce empty-calorie sugar intake", "Provides a mild caramel flavor with nutritional benefits", "Naturally contains vitamins B1, B2, B3, and B6"],
                dietary_suitability: ["Family-friendly healthy sugar alternative", "Vegan", "Gluten-Free", "Non-GMO Project Verified"],
                pairings: ["Everyday use in coffee, tea, and smoothies", "Sweetening oatmeal and breakfast cereals", "Caramelizing evenly for perfect baked goods"],
                packagingInfo: {
                    title: "Packaging & Wholesale",
                    caseSize: "12 Jars per Case",
                    palletQuantity: "120 Cases per Pallet",
                    availability: "Available in all wholesale pricing tiers. Please contact us for a custom quote."
                },
                featuredInRecipes: [2] 
            },
        ],
        faq: {
            headline: "Frequently Asked Questions",
            showMore: "Show More Questions",
            items: [
                { q: "What is Palmyra Palm Sugar?", a: "It's a pure, unrefined sweetener harvested from the nectar of the Palmyra palm tree's flowers. Unlike industrial sugars, Golden Taan is created using traditional, artisanal methods. The nectar is hand-harvested and slow-cooked in woks, a minimal process that preserves its natural spectrum of vitamins, minerals, and its rich, caramel-like flavor, making it a true 'whole food' sweetener." },
                { q: "Is Golden Taan sugar healthy?", a: "Yes, it is a significantly healthier choice than refined sugars. Its primary benefit is a very low glycemic index (GI of ~35), which means it provides a slow, sustained energy release without the sharp blood sugar spikes and subsequent 'crash' associated with white sugar (GI of ~65). It's also packed with nutrients, boasting exceptionally high levels of potassium (vital for blood pressure and nerve function), along with iron, magnesium, and B vitamins, distinguishing it from the 'empty calories' of processed sweeteners." },
                { q: "How is Golden Taan different from coconut sugar?", a: "While both are natural palm sugars, they come from different trees and have distinct profiles. Golden Taan is from the Palmyra Palm, while coconut sugar is from the Coconut Palm. This results in a noticeable difference in taste: Golden Taan has a deeper, smokier, more complex butterscotch flavor, whereas coconut sugar is often milder. Nutritionally, Palmyra palm sugar typically contains a higher concentration of minerals, particularly potassium. Furthermore, it holds a unique, centuries-old place in Thai heritage and traditional cuisine." },
                { q: "How can I use Golden Taan sugar?", a: "Golden Taan is incredibly versatile and can generally be used as a 1:1 replacement for conventional sugar. For best results: use our fine Powder for baking and dissolving seamlessly in drinks; use the Coarse Crystals as a finishing sugar for a delightful crunch on top of oatmeal, yogurt, or crème brûlée; and use our rich Syrup for drizzling on pancakes, as a base for savory glazes on salmon or pork, or as a unique sweetener in craft cocktails." },
                { q: "Is your product organic and sustainable?", a: "Absolutely. Sustainability and ethics are at the core of our brand. Our sugar comes from Palmyra palms that grow naturally in biodiverse environments, not in monoculture plantations. These trees are drought-resistant, require no chemical fertilizers, and are not cut down for harvest. By choosing Golden Taan, you are supporting a fair-trade model that empowers smallholder farming families, preserves an ancient craft, and invests directly back into the rural communities that are the custodians of this tradition." },
            ],
        },
    },
    about: {
        header: { title: "Our Story: A Tradition Reawakened", subtitle: "We are more than a brand; we are custodians of a centuries-old Thai tradition, preserving the 'Golden Gold' of our land for the world." },
        roots: { title: "The Roots of Golden Taan", text: "Our story begins in the fertile plains of Ratchaburi, Thailand, where generations of our family have lived in harmony with the majestic Palmyra palm. For centuries, this 'tree of life' has gifted our ancestors with its sweet, life-giving nectar, a pure and unrefined sugar known as 'Nam Taan Tanod'." },
        fadingGold: { title: "The Fading Gold", text: "In recent decades, the rise of industrial white sugar and the demanding labor of traditional farming led to a decline in this ancient craft. The 'Golden Gold' of Thailand was fading. We saw a legacy at risk of being forgotten, a pure taste being replaced by an empty sweetness." },
        mission: { title: "Our Mission: From Local Treasure to Global Choice", text: "Golden Taan was born from a mission: to revive this fading tradition and share its wholesome goodness with the world. We combine time-honored, artisanal methods with modern quality standards to bring you a sweetener that is not only delicious but also deeply nourishing and ethically sourced." },
        timelineTitle: "Our Journey",
        timeline: [
            { era: "Ancient Times", title: "The Gift of the Palmyra", description: "Palmyra palm sugar is a staple in Southeast Asian cuisine and medicine for millennia." },
            { era: "1980s", title: "The Industrial Shift", description: "The rise of commercial white sugar begins to threaten traditional palm sugar production." },
            { era: "2015", title: "A Spark of Revival", description: "Our founder, Krisada, begins documenting the disappearing art of palm sugar farming in Ratchaburi." },
            { era: "2020", title: "Golden Taan is Born", description: "We establish fair-trade partnerships with local farming families, guaranteeing fair wages and preserving their craft." },
            { era: "2025", title: "Sharing with the World", description: "Golden Taan launches internationally, bringing the authentic taste and health benefits of Palmyra palm sugar to a global audience." },
        ],
        people: {
            title: "The People Behind the Purity",
            founderName: "Krisada Laohasiri, Founder",
            founderQuote: "We don't just sell sugar; we share a piece of our heritage, a taste of our home. Every crystal of Golden Taan tells a story of a farmer, a family, and a tradition we are proud to preserve.",
            communityTitle: "Our Community of Artisans",
            communityText: "Our network of over 2,000 farming families is the heart of Golden Taan. We are committed to their economic empowerment through fair-trade practices, ensuring this sweet tradition provides a sustainable livelihood for generations to come."
        },
        choice: { title: "The Conscious Choice", text: "When you choose Golden Taan, you're not just choosing a sweetener. You're supporting sustainable agriculture, preserving a cultural heritage, and making a healthier choice for yourself and your family." },
    },
    heritage: {
        header: {
            title: "The Uniqueness of Phetchaburi Palm Sugar",
            subtitle: "A Technical and Marketing Deep Dive"
        },
        technical: {
            title: "1. The Technical Edge: \"Why It's Actually Different\"",
            terroir: {
                title: "A. Terroir and Raw Material: The Gift of the Land",
                content: "The foundation of its quality is the raw sap, or nam tan sod (น้ำตาลสด), which is significantly influenced by Phetchaburi's unique environment.\n• Soil Composition: The region's soil is characterized by high salinity and rich mineral content due to its proximity to the coast of the Gulf of Thailand. This specific soil profile is believed to directly impact the sap, imparting a subtle, complex minerality and a less intensely sweet flavor compared to palm sap from other regions. It creates a taste that is often described as nuan (นวล), meaning mellow, rounded, and gentle.\n• Palm Variety: Phetchaburi is dominated by a specific variety of the Palmyra palm (Borassus flabellifer), known locally as Tan Tanot (ต้นตาลโตนด). Generations of farmers have cultivated these trees, which are perfectly adapted to the local climate and soil, yielding a sap with a consistently high-quality flavor profile.\n• Harvesting Technique: The collection process is a meticulous craft. Harvesters, known as khon khuen tan (คนขึ้นตาล), climb the tall palms daily, typically twice a day (early morning and late afternoon). They carefully slice the palm inflorescence and attach bamboo containers (krabok) to collect the dripping sap. Crucially, small pieces of wood from the kayam tree (พะยอม) are often placed in the bamboo tubes. The kayam wood contains natural tannins and antibacterial agents that act as a preservative, preventing the sap from fermenting and souring in the tropical heat. This traditional method maintains the sap's freshness and purity without the need for chemical additives."
            },
            artisanal: {
                title: "B. Artisanal Processing: The Human Touch",
                content: "The transformation of sap into sugar is a race against time and a testament to generations of skill. This is where Phetchaburi's methods create a distinctly superior product.\n• The \"Tao Tan\" Wok System: The sap is simmered in large, open woks over a traditional clay stove fueled by palm wood, known as a tao tan (เตาตาล). This setup is not accidental; the wide surface area allows for rapid evaporation, and the artisan's ability to control the fire is paramount. Unlike industrial methods that use high, direct heat, the slow simmering process gently caramelizes the sugars without burning them.\n• Meticulous Simmering and Clarification: As the sap heats, the artisan continuously skims off impurities that rise to the surface. This crucial step results in a cleaner, more refined final product. The goal is to reduce the sap until it reaches a specific viscosity and color—a deep, golden amber. This process can take several hours, and the artisan relies on sensory cues—sight, smell, and the sound of the bubbling liquid—to know precisely when it's ready.\n• No Additives or Refinement: True Phetchaburi palm sugar is 100% pure palm sap. There is no addition of white cane sugar (a common adulterant in cheaper versions), molasses, or artificial coloring. The final product is unrefined, meaning it retains the natural vitamins and minerals present in the sap, contributing to its complex flavor and nutritional profile. The result is a soft, paste-like sugar (nam tan puek) that melts easily and has a fragrant, smoky aroma from the slow cooking process."
            }
        },
        marketing: {
            title: "2. The Marketing Power: \"Why We Believe It's Better\"",
            story: {
                title: "A. The Story of Heritage and Authenticity",
                content: "In a market flooded with generic sweeteners, Phetchaburi palm sugar is sold not just as a product, but as an experience and a piece of Thai heritage.\n• Geographical Indication (GI): Phetchaburi Palm Sugar is a registered Geographical Indication product in Thailand. This certification is a powerful marketing tool, legally protecting its origin and guaranteeing that products bearing the name adhere to the traditional production standards of the region. For consumers, the GI label is a mark of authenticity and superior quality, similar to Champagne from France or Parmesan from Italy.\n• Artisanal and Handcrafted Narrative: The story of the khon khuen tan scaling towering palms and artisans patiently stirring woks over wood fires is incredibly compelling. It taps directly into the consumer trends of valuing handcrafted, small-batch products over mass-produced industrial goods. This narrative of \"slow food\" and human skill justifies its premium price point.\n• Cultural Significance: Phetchaburi is often called Mueang Sam Wang (เมืองสามวัง), the \"City of Three Palaces,\" and has a rich history connected to the royal court. Its culinary traditions, including its palm sugar, are seen as part of this elevated royal heritage, adding a layer of prestige and cultural capital to the product."
            },
            appeal: {
                title: "B. The Appeal of Purity and Wellness",
                content: "As consumers become more health-conscious, the natural and unrefined qualities of Phetchaburi palm sugar become a key selling point.\n• \"Clean Label\" Product: With only one ingredient—pure palm sap—it appeals to the clean-label movement. It is marketed as a natural, wholesome alternative to highly processed white sugar and artificial sweeteners.\n• Lower Glycemic Index and Nutritional Value: While still a sugar, palm sugar has a lower glycemic index than table sugar and contains trace minerals like potassium, magnesium, and iron. This \"better-for-you\" angle is a significant part of its marketing to health-aware consumers, both domestically and internationally.\n• Unique Flavor for a Discerning Palate: Marketers and chefs position Phetchaburi palm sugar as a \"finishing sugar\" or a gourmet ingredient. Its unique smoky, caramel, and slightly savory notes are highlighted as a way to add depth and complexity to both sweet and savory dishes, from traditional Thai curries (kaeng) to modern desserts. It is sold not just for its sweetness, but for its flavor."
            }
        },
        conclusion: "In conclusion, the uniqueness of Phetchaburi palm sugar is a perfect synergy of place, process, and perception. The mineral-rich soil and traditional harvesting create a superior raw material. The artisanal, slow-simmering process transforms that sap into a product with unparalleled aroma and flavor. Finally, a powerful marketing narrative, anchored by GI certification and the story of heritage, communicates this exceptional quality to the world, cementing its status as the gold standard of palm sugar."
    },
    sustainability: {
        header: { title: "Sustainability: Sweetness That Nurtures", subtitle: "Our commitment runs deeper than our roots. We believe in a model of business that nurtures the planet and its people." },
        environmental: {
            title: "Environmental Stewardship",
            points: [
                { title: "Carbon Sink", text: "Palmyra palms are powerful carbon sequesters, absorbing CO2 and helping combat climate change. They are not clear-felled like sugarcane." },
                { title: "Water-Wise", text: "These trees are incredibly drought-resistant and thrive on natural rainfall, requiring minimal to no irrigation, unlike water-intensive sugarcane crops." },
                { title: "Biodiversity Haven", text: "Our palm groves are not monocultures. They are integrated into the natural landscape, providing a habitat for diverse flora and fauna." },
                { title: "Zero Waste", text: "Every part of the Palmyra palm is utilized by the local community, from the leaves for thatching to the wood for construction, embodying a true circular economy." },
            ]
        },
        social: {
            title: "Social Empowerment",
            points: [
                { title: "Fair Trade Principles", text: "We guarantee fair, above-market prices to our farmers, ensuring they receive a stable and dignified income for their skilled labor." },
                { title: "Preserving Heritage", text: "We actively work to preserve the traditional knowledge of palm sugar farming, passing it down to the next generation through community workshops." },
                { title: "Community Development", text: "A portion of our profits is reinvested into the community, funding education, healthcare, and local infrastructure projects." },
                { title: "No Forced Labor", text: "We have a zero-tolerance policy for forced or child labor, ensuring ethical practices throughout our entire supply chain." },
            ]
        },
        governance: {
            title: "Ethical Governance",
            points: [
                { title: "Full Transparency", text: "We offer complete traceability from palm to pantry. Consumers can scan a QR code on our packaging to meet the farmer who crafted their sugar." },
                { title: "Accountable Leadership", text: "Our leadership is committed to ethical business practices, regularly engaging with stakeholders to ensure we meet our social and environmental goals." },
                { title: "Stakeholder Inclusion", text: "We believe in inclusive growth. Farmers and community representatives have a voice in our business decisions, ensuring a true partnership." },
                { title: "Integrity Pact", text: "We operate with the highest level of integrity, adhering to all local and international laws and regulations." },
            ]
        },
        insights: {
            title: "A Clearer Choice: Resource Efficiency",
            chartTitle: "Resource Efficiency (Score out of 10)",
            report: { 
                title: "Our 2025 Sustainability Report", 
                text: "Dive deeper into our commitment to the planet and its people. Our comprehensive annual report details our progress, challenges, and future goals in sustainability.", 
                cta: "Download the Report" 
            },
        },
        resourceChartData: [
            { subject: 'Water Use', 'Golden Taan': 9, 'Cane Sugar': 3, fullMark: 10 },
            { subject: 'Land Use', 'Golden Taan': 8, 'Cane Sugar': 4, fullMark: 10 },
            { subject: 'Biodiversity', 'Golden Taan': 8, 'Cane Sugar': 2, fullMark: 10 },
            { subject: 'Carbon Sequestration', 'Golden Taan': 7, 'Cane Sugar': 3, fullMark: 10 },
        ],
    },
    wholesale: {
        header: { title: "Wholesale & B2B Partnerships", subtitle: "Power your products with the pure, authentic taste of Golden Taan Palmyra Palm Sugar. Join us as a distribution partner." },
        pricing: {
            title: "Tiered Wholesale Pricing (FOB Bangkok)",
            text: "We offer competitive tiered pricing based on volume to support businesses of all sizes, from small artisanal bakeries to large-scale food manufacturers. Prices are listed in USD per kg.",
            table: {
                headers: { productLine: "Product Line", sku: "SKU / Packaging", tier1: "Tier 1 (100-499kg)", tier2: "Tier 2 (500-999kg)", tier3: "Tier 3 (1-5 MT)", tier4: "Tier 4 (5+ MT)" },
                data: [
                    { 
                        productLine: "Coarse Crystals", 
                        skus: [
                            { name: "150g Jar", tier1: "$15.12", tier2: "$13.61", tier3: "$12.25", tier4: "Quote" },
                            { name: "200g Jar", tier1: "$14.38", tier2: "$12.94", tier3: "$11.65", tier4: "Quote" }
                        ]
                    },
                    { 
                        productLine: "Fine Powder", 
                        skus: [
                            { name: "150g Jar", tier1: "$16.90", tier2: "$15.21", tier3: "$13.69", tier4: "Quote" },
                            { name: "200g Jar", tier1: "$16.30", tier2: "$14.67", tier3: "$13.20", tier4: "Quote" }
                        ]
                    },
                    { 
                        productLine: "Syrup", 
                        skus: [
                            { name: "150ml Bottle", tier1: "$17.86", tier2: "$16.07", tier3: "$14.46", tier4: "Quote" },
                            { name: "200ml Bottle", tier1: "$17.29", tier2: "$15.56", tier3: "$14.00", tier4: "Quote" }
                        ]
                    }
                ],
                note: "Prices are indicative and subject to change. Please request a formal quote for the latest pricing."
            }
        },
    },
    shop: {
        header: { title: "Shop Our Collection", subtitle: "Bring the authentic taste of Thailand's finest Palmyra Palm Sugar into your home." },
        emptyCart: { title: "Your Cart is Empty", text: "Explore our collection and find the perfect sweetener for your pantry.", cta: "Continue Shopping" },
        summary: { title: "Order Summary", subtotal: "Subtotal", shipping: "International Shipping", total: "Total" },
        payment: {
            title: "Payment",
            tabs: { qr: "Thai QR", crypto: "Crypto", card: "Credit Card" },
            qr: { text: "Scan the QR code with your Thai banking app to complete payment." },
            crypto: { text: "Send payment to the following wallet address:", accept: "We accept:" },
            card: { number: "Card Number", expiry: "Expiry Date", cvc: "CVC", name: "Name on Card", pay: "Pay" },
        },
        shippingInfo: {
            title: "International Shipping Information",
            policy: { title: "Shipping Policy", text: "We proudly ship worldwide from our facility in Bangkok, Thailand. All orders are processed within 2-3 business days. Please ensure your shipping address is correct as we cannot change it once the order is dispatched." },
            delivery: { title: "Estimated Delivery Times", text: "• Asia Pacific: 5-10 business days\n• North America & Europe: 10-20 business days\n• Rest of the World: 15-25 business days" },
            customs: { title: "Customs, Duties, and Taxes", text: "Golden TAAN is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.)." },
        },
    },
    blog: {
        header: { title: "The Golden Blog", subtitle: "Recipes, stories, and insights from the world of Palmyra Palm Sugar." },
        readMore: "Read More",
        back: "Back to Blog List",
        posts: blogPosts
    },
    footer: {
        address: "123 Sukhumvit Road, Klongtoei, Bangkok 10110, Thailand",
        contactPerson: { label: "Contact Person", name: "Ms. Araya S." },
        phone: { label: "Phone", number: "+66 2 123 4567" },
        email: { label: "Email", address: "wholesale@goldentaan.com" },
        quickLinks: "Quick Links",
        copyright: "© {year} Golden TAAN Co., Ltd. All Rights Reserved."
    },
};

const th: Translations = { ...en, metaTitle: "[TH] Golden Taan | Authentic Palmyra Palm Sugar", nav: { ...en.nav, home: "[TH] Home" } };
const de: Translations = { ...en, metaTitle: "[DE] Golden Taan | Authentic Palmyra Palm Sugar", nav: { ...en.nav, home: "[DE] Home" } };
const ja: Translations = { ...en, metaTitle: "[JA] Golden Taan | Authentic Palmyra Palm Sugar", nav: { ...en.nav, home: "[JA] Home" } };
const ko: Translations = { ...en, metaTitle: "[KO] Golden Taan | Authentic Palmyra Palm Sugar", nav: { ...en.nav, home: "[KO] Home" } };
const fr: Translations = { ...en, metaTitle: "[FR] Golden Taan | Authentic Palmyra Palm Sugar", nav: { ...en.nav, home: "[FR] Home" } };
const zh: Translations = { ...en, metaTitle: "[ZH] Golden Taan | Authentic Palmyra Palm Sugar", nav: { ...en.nav, home: "[ZH] Home" } };

export const siteContent: Record<Language, Translations> = {
    en,
    th,
    de,
    ja,
    ko,
    fr,
    zh,
};
