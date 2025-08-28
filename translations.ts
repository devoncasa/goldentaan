import { Translations, Language } from "./types";

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
    ],
     ja: [
        { name: 'カリウム (mg)', goldenTaan: 1030, unrefinedSugarcane: 450, coconutSugar: 625, refinedWhiteSugar: 2 },
        { name: 'カルシウム (mg)', goldenTaan: 8, unrefinedSugarcane: 85, coconutSugar: 30, refinedWhiteSugar: 1 },
        { name: 'リン (mg)', goldenTaan: 79, unrefinedSugarcane: 40, coconutSugar: 79, refinedWhiteSugar: 0 },
        { name: '鉄 (mg)', goldenTaan: 2.6, unrefinedSugarcane: 2.6, coconutSugar: 2, refinedWhiteSugar: 0.1 },
        { name: '亜鉛 (mg)', goldenTaan: 0.3, unrefinedSugarcane: 0.4, coconutSugar: 2, refinedWhiteSugar: 0 },
        { name: '銅 (mg)', goldenTaan: 0.2, unrefinedSugarcane: 0.5, coconutSugar: 0.2, refinedWhiteSugar: 0 },
    ],
    zh: [
        { name: '钾 (毫克)', goldenTaan: 1030, unrefinedSugarcane: 450, coconutSugar: 625, refinedWhiteSugar: 2 },
        { name: '钙 (毫克)', goldenTaan: 8, unrefinedSugarcane: 85, coconutSugar: 30, refinedWhiteSugar: 1 },
        { name: '磷 (毫克)', goldenTaan: 79, unrefinedSugarcane: 40, coconutSugar: 79, refinedWhiteSugar: 0 },
        { name: '铁 (毫克)', goldenTaan: 2.6, unrefinedSugarcane: 2.6, coconutSugar: 2, refinedWhiteSugar: 0.1 },
        { name: '锌 (毫克)', goldenTaan: 0.3, unrefinedSugarcane: 0.4, coconutSugar: 2, refinedWhiteSugar: 0 },
        { name: '铜 (毫克)', goldenTaan: 0.2, unrefinedSugarcane: 0.5, coconutSugar: 0.2, refinedWhiteSugar: 0 },
    ],
    ar: [
        { name: 'بوتاسيوم (ملغ)', goldenTaan: 1030, unrefinedSugarcane: 450, coconutSugar: 625, refinedWhiteSugar: 2 },
        { name: 'كالسيوم (ملغ)', goldenTaan: 8, unrefinedSugarcane: 85, coconutSugar: 30, refinedWhiteSugar: 1 },
        { name: 'فوسفور (ملغ)', goldenTaan: 79, unrefinedSugarcane: 40, coconutSugar: 79, refinedWhiteSugar: 0 },
        { name: 'حديد (ملغ)', goldenTaan: 2.6, unrefinedSugarcane: 2.6, coconutSugar: 2, refinedWhiteSugar: 0.1 },
        { name: 'زنك (ملغ)', goldenTaan: 0.3, unrefinedSugarcane: 0.4, coconutSugar: 2, refinedWhiteSugar: 0 },
        { name: 'نحاس (ملغ)', goldenTaan: 0.2, unrefinedSugarcane: 0.5, coconutSugar: 0.2, refinedWhiteSugar: 0 },
    ],
    fr: [
        { name: 'Potassium (mg)', goldenTaan: 1030, unrefinedSugarcane: 450, coconutSugar: 625, refinedWhiteSugar: 2 },
        { name: 'Calcium (mg)', goldenTaan: 8, unrefinedSugarcane: 85, coconutSugar: 30, refinedWhiteSugar: 1 },
        { name: 'Phosphore (mg)', goldenTaan: 79, unrefinedSugarcane: 40, coconutSugar: 79, refinedWhiteSugar: 0 },
        { name: 'Fer (mg)', goldenTaan: 2.6, unrefinedSugarcane: 2.6, coconutSugar: 2, refinedWhiteSugar: 0.1 },
        { name: 'Zinc (mg)', goldenTaan: 0.3, unrefinedSugarcane: 0.4, coconutSugar: 2, refinedWhiteSugar: 0 },
        { name: 'Cuivre (mg)', goldenTaan: 0.2, unrefinedSugarcane: 0.5, coconutSugar: 0.2, refinedWhiteSugar: 0 },
    ],
    ko: [
        { name: '칼륨 (mg)', goldenTaan: 1030, unrefinedSugarcane: 450, coconutSugar: 625, refinedWhiteSugar: 2 },
        { name: '칼슘 (mg)', goldenTaan: 8, unrefinedSugarcane: 85, coconutSugar: 30, refinedWhiteSugar: 1 },
        { name: '인 (mg)', goldenTaan: 79, unrefinedSugarcane: 40, coconutSugar: 79, refinedWhiteSugar: 0 },
        { name: '철 (mg)', goldenTaan: 2.6, unrefinedSugarcane: 2.6, coconutSugar: 2, refinedWhiteSugar: 0.1 },
        { name: '아연 (mg)', goldenTaan: 0.3, unrefinedSugarcane: 0.4, coconutSugar: 2, refinedWhiteSugar: 0 },
        { name: '구리 (mg)', goldenTaan: 0.2, unrefinedSugarcane: 0.5, coconutSugar: 0.2, refinedWhiteSugar: 0 },
    ],
    nl: [
        { name: 'Kalium (mg)', goldenTaan: 1030, unrefinedSugarcane: 450, coconutSugar: 625, refinedWhiteSugar: 2 },
        { name: 'Calcium (mg)', goldenTaan: 8, unrefinedSugarcane: 85, coconutSugar: 30, refinedWhiteSugar: 1 },
        { name: 'Fosfor (mg)', goldenTaan: 79, unrefinedSugarcane: 40, coconutSugar: 79, refinedWhiteSugar: 0 },
        { name: 'IJzer (mg)', goldenTaan: 2.6, unrefinedSugarcane: 2.6, coconutSugar: 2, refinedWhiteSugar: 0.1 },
        { name: 'Zink (mg)', goldenTaan: 0.3, unrefinedSugarcane: 0.4, coconutSugar: 2, refinedWhiteSugar: 0 },
        { name: 'Koper (mg)', goldenTaan: 0.2, unrefinedSugarcane: 0.5, coconutSugar: 0.2, refinedWhiteSugar: 0 },
    ]
}


const en: Translations = {
    meta: {
        globalTitle: "Buy 100% Pure Palm Sugar Online | Golden TAAN | Low-GI & Sustainable",
        globalDescription: "Buy authentic Thai palm sugar online. Golden TAAN is a premium brand of 100% pure, unrefined palmyra palm sugar, a low-GI, vegan, and healthy sugar alternative.",
    },
    softLaunchModal: {
        title: "Welcome to Our Soft Launch!",
        mainText: "Discover Golden TAAN, your premium source for authentic, low-GI Palmyra Palm Sugar. We are thrilled to share our 100% pure, unrefined, and sustainably sourced healthy sugar alternative with you.",
        statusText: "We are currently in our soft launch phase, with a full global launch planned for 15 Sep 2025. Some features are still being polished. We appreciate your understanding and support!",
        selectLanguage: "Select Language",
        enterSite: "Enter Site",
        lastUpdated: `Last Updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`
    },
    nav: {
        home: "Home",
        ourStory: "Our Story",
        heritage: "Our Heritage",
        products: "Products",
        blog: "Blog",
        sustainability: "Sustainability",
        wholesale: "Wholesale & B2B",
        shopNow: "Shop Now",
        contact: "Contact Us",
        homeSubItems: [
            { id: '#our-story', label: 'Our Story' },
            { id: '#health-benefits', label: 'Health Benefits' },
            { id: '#products', label: 'Products' },
            { id: '#contact', label: 'Contact Us' },
        ]
    },
    home: {
        seo: {
            title: "Golden TAAN | Buy Authentic Thai Palm Sugar | Unrefined & Low GI",
            description: "Looking for where to buy palm sugar? Golden TAAN offers 100% pure, unrefined Palmyra palm sugar blocks, powder, and syrup. A premium, low-GI vegan sugar alternative.",
            altTags: {
                logo: "Golden TAAN official logo, a premium palm sugar brand",
                farmingCommunity: "A vibrant community of Thai farmers harvesting Palmyra palm sap, showcasing sustainable food products.",
                artisanalProcess: "An artisan using traditional Thai cooking methods to simmer Palmyra palm nectar in a wok over a wood fire.",
                industrialProcess: "A macro shot of a Palmyra palm leaf, highlighting the natural texture of this eco-friendly sugar source.",
                communityCollage: "A collage of smiling Thai artisans and farmers who are part of the Golden TAAN fair trade food products community.",
            }
        },
        hero: {
            headline: "Golden TAAN: The Authentic Thai Palm Sugar Experience",
            subheadline: "Experience the natural caramel flavor of a truly unrefined, low-GI, and healthy sugar alternative. Buy palm sugar online today.",
            cta: "Discover Our Story",
        },
        trends: {
            headline: "Clean Label Food Trends 2025: The Rise of Healthy Sugar Alternatives",
            description: "The world is embracing clean eating ingredients. Consumers are actively seeking natural sweeteners and plant-based sugars. The demand for sustainable food products with transparent, ethical food sourcing is a key clean label food trend for 2025.",
            billion: "Billion",
            marketStat: "The natural, paleo-friendly sweeteners market is projected to exceed $55 Billion by 2030.",
            consumerStat: "of global consumers actively choose clean-label, whole food ingredients.",
        },
        health: {
            headline: "Low-GI Sweeteners: A Nutritional Deep Dive",
            description: "Explore the unrefined sugar benefits. Unlike empty-calorie refined sugars, Golden TAAN provides slow energy release and is one of the best healthy sugar alternatives, rich in essential minerals like potassium.",
            chartTitle: "Nutrient Comparison (per 100g)",
            goldenTaan: "Golden TAAN (Palm Sugar)",
            unrefinedSugarcane: "Unrefined Sugarcane",
            coconutSugar: "Coconut Sugar",
            refinedWhiteSugar: "Refined White Sugar",
            nutrientData: nutrientData.en,
            insight: {
                title: "✨ Key Insight: Benefits of Potassium in Diet & Low GI Sweeteners",
                text: "The data proves the superiority of unrefined, plant-based sugars. Golden TAAN's exceptionally high potassium content—a vital natural electrolyte for hydration and health—makes it a standout choice. Its low glycemic index makes it one of the best natural sweeteners for diabetics and those seeking sustained energy.",
            },
            glycemicIndexTitle: "Slow Energy Release: The Low-GI Advantage",
            goldenTaanEffect: "A diabetic-friendly sugar, providing a slow, steady release of energy for sustained vitality.",
            whiteSugarEffect: "Causes a rapid blood sugar spike, followed by an energy crash."
        },
        process: {
            headline: "Artisanal Food: Traditional Thai Cooking Methods vs. Industrial Refining",
            description: "The traditional, farm-to-table process is what makes Golden TAAN a living, whole food ingredient, worlds apart from industrially processed sugar.",
            artisanal: {
                title: "The Golden TAAN Artisanal Method",
                steps: [
                    { title: "Ethical Harvest", description: "Skilled farmers sustainably harvest the sweet nectar, a cornerstone of our fair trade food products." },
                    { title: "Slow Simmering", description: "Using traditional food preservation techniques, the nectar is slow-cooked to develop its signature natural caramel flavor." },
                    { title: "Natural Crystallizing", description: "The sugar cools naturally, preserving vital nutrients and creating a truly artisanal palm sugar." },
                ],
            },
            industrial: {
                title: "Refined White Sugar (Industrial Method)",
                steps: [
                    { title: "Mechanical Harvest", description: "Sugarcane is machine-harvested and crushed to extract juice." },
                    { title: "Chemical Clarification", description: "Chemicals like lime and sulfur dioxide are used to strip impurities." },
                    { title: "Bleaching & Filtering", description: "The juice is filtered, removing all nutrients and natural color." },
                    { title: "High-Speed Crystallization", description: "Centrifuges spin the syrup to form pure sucrose crystals." },
                ]
            }
        },
        impact: {
            headline: "Eco-Friendly Sugar: A Model for Sustainable Food Products",
            description: "Choosing Golden TAAN supports a regenerative and eco-friendly sugar production model that nurtures biodiversity, unlike sugarcane monocultures that can degrade ecosystems.",
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
                headline: "Rooted in Fair Trade Food Products",
                description: "Our commitment to ethical food sourcing creates a cycle of prosperity. By choosing Golden TAAN, you invest in our community of Thai artisans, supporting a heritage Thai product and sustainable exports.",
                stats: [
                    { value: 40, unit: "+", label: "Years a tree provides for a family" },
                    { value: 2000, unit: "+", label: "Rural households supported" },
                    { value: 25, unit: "M+", label: "Annual export revenue for the community", prefix: "$" },
                    { value: 15, unit: "%", label: "Premium paid above market price" },
                ]
            }
        },
        productSection: {
            headline: "Our Artisanal Palm Sugar: Blocks, Powder & Syrup",
            description: "Explore our range of gourmet ingredients. Buy palm sugar online—the perfect healthy sugar alternative for your Asian pantry essentials.",
            addToCart: "Add to Cart",
            added: "Added!",
        },
        products: [
            {
                id: 'p1',
                img: 'https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-blocks.webp',
                title: 'Coarse Crystals',
                size: '150g Jar',
                shortDescription: "Rich, amber palm sugar blocks with a satisfying crunch and deep caramel notes.",
                description: "Experience the signature texture of Golden TAAN. These amber crystals are perfect for the discerning home chef seeking a finishing touch that wows. Its crunchy texture provides a delightful contrast to soft desserts like crème brûlée, puddings, and ice cream. Flavor Profile: Deep, complex notes of smoky caramel and butterscotch. Nutritional Highlight: Boasting over 1000mg of potassium per 100g and a low glycemic index, it's a sweetener that nourishes. Interesting Fact: The irregular shape of our crystals is a hallmark of traditional, slow-cooling methods—each crystal tells a story of artisanal craftsmanship.",
                price: 15.12,
                ingredients: '100% Pure Palmyra Palm Nectar.',
                nutrition_highlights: ["Boasting over 1000mg of potassium per 100g", "A low glycemic index sweetener (GI ≈ 35)", "Naturally rich in trace minerals like iron and zinc"],
                dietary_suitability: ["Vegan-Friendly", "Gluten-Free", "Unrefined & Wholesome", "Paleo-Friendly"],
                pairings: ["Finishing touch on crème brûlée", "Sprinkling over oatmeal or yogurt", "Adding crunch to cookies and muffins"],
                packagingInfo: {
                    title: "Packaging & Wholesale",
                    caseSize: "12 Jars per Case",
                    palletQuantity: "120 Cases per Pallet",
                    availability: "Available from our wholesale palm sugar supplier team. Please contact us for a custom quote."
                },
                featuredInRecipes: [2]
            },
            {
                id: 'p2',
                img: 'https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-blocks.webp',
                title: 'Coarse Crystals',
                size: '200g Jar',
                shortDescription: "A larger jar of our signature crunchy, caramel-flavored palmyra jaggery.",
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
                    availability: "Available for export. Contact our wholesale palm sugar supplier team for pricing."
                },
                featuredInRecipes: [2, 4]
            },
            {
                id: 'p3',
                img: 'https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-syrup.webp',
                title: 'Palm Sugar Syrup',
                size: '150ml Bottle',
                shortDescription: "A velvety, slow-drizzle palm sugar syrup with notes of toffee and vanilla.",
                description: "Discover liquid gold. This velvety palm sugar syrup is an essential for breakfast lovers and dessert aficionados. Elevate pancakes, waffles, and yogurt to gourmet status, or use it as a secret weapon in savory glazes for salmon and pork. Flavor Profile: A slow-drizzle syrup with dominant notes of toffee and vanilla, finishing with a subtle hint of smoke. Nutritional Highlight: Naturally rich in minerals like magnesium and iron, this unrefined syrup offers a more wholesome alternative to highly processed syrups. Interesting Fact: Our syrup is created by gently simmering fresh nectar, never boiling it harshly. This preserves its delicate flavor compounds and nutrients.",
                price: 17.86,
                ingredients: '100% Pure Palmyra Palm Nectar, Filtered Water.',
                nutrition_highlights: ["Rich in minerals like magnesium and iron", "A more wholesome alternative to processed syrups", "Unrefined, preserving natural nutrients"],
                dietary_suitability: ["Vegan & Dairy-Free", "Gluten-Free", "No Artificial Additives", "Perfect for Clean Eating"],
                pairings: ["Drizzling over pancakes and waffles", "A secret weapon in a gourmet glaze for salmon", "Sweetening coffee and tea"],
                packagingInfo: {
                    title: "Packaging & Wholesale",
                    caseSize: "12 Bottles per Case",
                    palletQuantity: "120 Cases per Pallet",
                    availability: "Available in all wholesale pricing tiers. Palm sugar price per kg available upon request."
                },
                featuredInRecipes: [4]
            },
            {
                id: 'p4',
                img: 'https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-syrup.webp',
                title: 'Palm Sugar Syrup',
                size: '200ml Bottle',
                shortDescription: "An indulgent, larger bottle of our luxurious liquid gold toddy palm sugar syrup.",
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
                    availability: "Available for global export. Contact us for a custom quote."
                },
                featuredInRecipes: [4]
            },
            {
                id: 'p5',
                img: 'https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-powder.webp',
                title: 'Palm Sugar Powder',
                size: '150g Jar',
                shortDescription: "An ultra-fine palm sugar powder that dissolves instantly for seamless sweetening.",
                description: "The ultimate baker's companion. Designed for passionate bakers and health-conscious individuals, its fine texture dissolves instantly, making it a seamless 1:1 replacement for refined sugar when baking with palm sugar, in sauces, and your daily coffee or tea. Flavor Profile: A subtle yet rich sweetness with a mild caramel undertone that enhances, not overpowers. Nutritional Highlight: With its low glycemic index (around 35), our powder is an excellent choice for maintaining stable blood sugar levels. Interesting Fact: Our palm sugar powder is made by gently grinding crystallized sugar blocks, a process that avoids the high heat and chemical bleaching used to make white sugar, thus preserving its authentic flavor.",
                price: 16.90,
                ingredients: '100% Pure Palmyra Palm Nectar.',
                nutrition_highlights: ["Low glycemic index for stable blood sugar", "Seamless 1:1 replacement for refined sugar", "Contains natural antioxidants from the palm nectar"],
                dietary_suitability: ["Perfect for Diabetic-Friendly Recipes (in moderation)", "Vegan & Gluten-Free", "Unbleached and Unprocessed", "Ideal for baking"],
                pairings: ["Baking with palm sugar in cakes, cookies, and pastries", "Dissolving instantly in hot or cold beverages", "Making smooth sauces and marinades"],
                packagingInfo: {
                    title: "Packaging & Wholesale",
                    caseSize: "12 Jars per Case",
                    palletQuantity: "120 Cases per Pallet",
                    availability: "Available from our wholesale palm sugar supplier team. Please contact us for a custom quote."
                },
                featuredInRecipes: [2]
            },
            {
                id: 'p6',
                img: 'https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-powder.webp',
                title: 'Palm Sugar Powder',
                size: '200g Jar',
                shortDescription: "Our most versatile sweetener in a larger, pantry-friendly size.",
                description: "Stock your pantry with our most versatile sweetener. This larger jar is perfect for frequent bakers and families looking for a healthier sugar alternative. Use it as a 1:1 replacement for white or brown sugar in all your favorite recipes, from ambitious baking projects to your morning oatmeal. Flavor Profile: A clean, mild caramel sweetness perfect for everyday use. Nutritional Highlight: A smart, flavorful swap for anyone looking to reduce their intake of empty-calorie sugars while retaining a rich taste and natural minerals. Interesting Fact: The fine milling of the powder increases its surface area, allowing it to dissolve quickly and caramelize evenly, making it ideal for creating smooth sauces and perfectly browned baked goods.",
                price: 16.30,
                ingredients: '100% Pure Palmyra Palm Nectar.',
                nutrition_highlights: ["A smart swap to reduce empty-calorie sugar intake", "Provides a mild caramel flavor with nutritional benefits", "Naturally contains vitamins B1, B2, B3, and B6"],
                dietary_suitability: ["Family-friendly healthy sugar alternative", "Vegan", "Gluten-Free", "Non-GMO Project Verified"],
                pairings: ["Everyday use in palm sugar for coffee, tea, and smoothies", "Sweetening oatmeal and breakfast cereals", "How to replace brown sugar with palm sugar powder"],
                packagingInfo: {
                    title: "Packaging & Wholesale",
                    caseSize: "12 Jars per Case",
                    palletQuantity: "120 Cases per Pallet",
                    availability: "Available in all wholesale pricing tiers. Contact us for a quote."
                },
                featuredInRecipes: [2]
            },
        ],
        faq: {
            headline: "Your Questions About Palmyra Palm Sugar Answered",
            showMore: "Show More Questions",
            items: [
                { q: "What is toddy palm sugar?", a: "It's a pure, unrefined natural sweetener harvested from the nectar of the Palmyra palm tree. Golden TAAN is made with traditional, artisanal methods that preserve minerals and a rich, caramel-like flavor, making it a superior, healthy sugar alternative." },
                { q: "Is Golden Taan a healthy sugar alternative?", a: "Yes. It has a low glycemic index (GI ~35) for slow energy release, making it a diabetic-friendly sugar. It's also packed with nutrients like potassium and iron, unlike 'empty calorie' refined sugars." },
                { q: "What is the difference: palm sugar vs coconut sugar?", a: "They come from different trees. Golden TAAN (from the Palmyra Palm, making it a true toddy palm sugar) has a deeper, smokier, butterscotch flavor and is typically higher in minerals. It's a unique gourmet ingredient rooted in Thai heritage." },
                { q: "How can I use this plant-based sugar?", a: "Use it as a 1:1 replacement for conventional sugar. Our Palm Sugar Powder is ideal for baking, the Coarse Crystals are a perfect finishing touch, and the Palm Sugar Syrup is great for drizzling and making glazes." },
                { q: "Is your eco-friendly sugar a sustainable food product?", a: "Absolutely. Our sugar comes from biodiverse groves, not monoculture plantations. The trees are drought-resistant, require no chemical fertilizers, and we support a fair-trade farming model." },
            ],
        },
    },
    productsPage: {
        seo: {
            title: "Products | Retail & Wholesale Palmyra Palm Sugar | Golden TAAN",
            description: "Explore the Golden TAAN collection. We offer premium, single-origin Palmyra Palm Sugar for home chefs and global B2B partners. Inquire for wholesale pricing.",
            altTags: {
                powder: "A jar of Golden TAAN's ultra-fine Palmyra Palm Sugar Powder.",
                blocks: "A jar of Golden TAAN's artisanal Coarse Crystal palm sugar blocks.",
                syrup: "A bottle of Golden TAAN's velvety, slow-drizzle Palmyra Palm Sugar Syrup.",
                giftSet: "An elegant Golden TAAN Discovery Gift Set, showcasing the full product range."
            }
        },
        retail: {
            headline: "Our Retail Collection",
            subtitle: "For the Home Chef, the Connoisseur, and the Health-Conscious Individual.",
            products: [
                {
                    id: 'prod-powder',
                    img: 'https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-powder.webp',
                    title: 'Palm Sugar Powder',
                    shortDescription: "Ultra-fine and instantly dissolving. The ultimate 1:1 replacement for refined sugar in baking and beverages.",
                    description: "Our powder is made by gently grinding crystallized sugar blocks, a process that avoids high heat and chemical bleaching. With a low glycemic index (GI ≈ 35), it's an excellent choice for maintaining stable blood sugar levels while adding a subtle, rich sweetness with a mild caramel undertone.",
                    price: 16.90, size: '150g Jar', ingredients: '100% Pure Palmyra Palm Nectar.',
                    nutrition_highlights: ["Low GI (≈ 35)", "1:1 Refined Sugar Replacement", "Unbleached & Unprocessed"],
                    dietary_suitability: ["Vegan", "Gluten-Free", "Paleo-Friendly"],
                    pairings: ["Baking cakes & cookies", "Sweetening coffee & tea", "Making smooth sauces"],
                    packagingInfo: { title: "", caseSize: "", palletQuantity: "", availability: "" }
                },
                {
                    id: 'prod-blocks',
                    img: 'https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-blocks.webp',
                    title: 'Artisanal Blocks (Crystals)',
                    shortDescription: "Rich, amber crystals with a satisfying crunch and deep, smoky caramel and butterscotch notes.",
                    description: "Experience the signature texture of Golden TAAN. The irregular shape of our crystals is a hallmark of traditional, slow-cooling methods—each crystal tells a story of artisanal craftsmanship. Perfect as a finishing touch that adds texture and complex flavor to desserts, oatmeal, or even roasted vegetables.",
                    price: 15.12, size: '150g Jar', ingredients: '100% Pure Palmyra Palm Nectar.',
                    nutrition_highlights: ["Over 1000mg of potassium per 100g", "Rich in trace minerals", "Low Glycemic Index"],
                    dietary_suitability: ["Vegan-Friendly", "Gluten-Free", "Unrefined & Wholesome"],
                    pairings: ["Finishing crème brûlée", "Sprinkling on yogurt", "Adding crunch to muffins"],
                    packagingInfo: { title: "", caseSize: "", palletQuantity: "", availability: "" }
                },
                {
                    id: 'prod-syrup',
                    img: 'https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-syrup.webp',
                    title: 'Palm Sugar Syrup',
                    shortDescription: "A velvety, slow-drizzle liquid gold with dominant notes of toffee, vanilla, and a hint of smoke.",
                    description: "Our syrup is created by gently simmering fresh nectar, never boiling it harshly, to preserve its delicate flavor compounds and nutrients. Elevate pancakes, waffles, and yogurt, or use it as a secret weapon in savory glazes for salmon and pork or in complex craft cocktails.",
                    price: 17.86, size: '150ml Bottle', ingredients: '100% Pure Palmyra Palm Nectar, Filtered Water.',
                    nutrition_highlights: ["Rich in magnesium and iron", "More wholesome than processed syrups", "Unrefined, preserving nutrients"],
                    dietary_suitability: ["Vegan & Dairy-Free", "Gluten-Free", "No Artificial Additives"],
                    pairings: ["Drizzling on pancakes", "Glazing salmon or pork", "Sweetening cocktails"],
                    packagingInfo: { title: "", caseSize: "", palletQuantity: "", availability: "" }
                },
                {
                    id: 'prod-gift',
                    img: 'https://cdn.jsdelivr.net/gh/devoncasa/goldentaan-assets@main/golden-taan-gift-set.webp',
                    title: 'Discovery Gift Set',
                    shortDescription: "A curated collection to explore the versatility of Palmyra Palm Sugar. The perfect gift for food lovers.",
                    description: "The perfect introduction to the world of Golden TAAN. Our Discovery Set includes our three signature products: Artisanal Blocks (50g), Fine Powder (50g), and our velvety Syrup (50ml). It's the ideal way to explore the versatility of Palmyra Palm Sugar and a thoughtful artisanal food gift for any occasion.",
                    price: 29.99, size: '3-Piece Set', ingredients: '100% Pure Palmyra Palm Nectar.',
                    nutrition_highlights: ["Variety of textures & flavors", "Low Glycemic Index", "Rich in natural minerals"],
                    dietary_suitability: ["Vegan", "Gluten-Free", "Perfect for Gifting"],
                    pairings: ["Experimenting in recipes", "A gourmet pantry starter", "Corporate & holiday gifts"],
                    packagingInfo: { title: "", caseSize: "", palletQuantity: "", availability: "" }
                }
            ]
        },
        wholesale: {
            headline: "For Our Global Partners",
            subtitle: "Premium, single-origin Palmyra Palm Sugar for distributors, retailers, and food manufacturers worldwide.",
            pricingTable: {
                headers: {
                    sku: "SKU",
                    product: "Product",
                    size: "Size",
                    retailPrice: "Retail Price",
                    tier1: "24 - 99 Units (Small)",
                    tier2: "100 - 499 Units (Medium)",
                    tier3: "500+ Units (Distributor)"
                },
                rows: [
                    { sku: "PPSC-150G", product: "Artisanal Coarse Crystals", size: "150g", retailPrice: "$15.50", tier1_price: "$6.50", tier2_price: "$5.75", tier3_price: "$5.00" },
                    { sku: "PPSC-200G", product: "Artisanal Coarse Crystals", size: "200g", retailPrice: "$18.50", tier1_price: "$8.00", tier2_price: "$7.25", tier3_price: "$6.25" },
                    { sku: "PPSP-150G", product: "Artisanal Palm Sugar Powder", size: "150g", retailPrice: "$16.50", tier1_price: "$7.00", tier2_price: "$6.25", tier3_price: "$5.50" },
                    { sku: "PPSP-200G", product: "Artisanal Palm Sugar Powder", size: "200g", retailPrice: "$19.50", tier1_price: "$8.50", tier2_price: "$7.75", tier3_price: "$6.75" },
                    { sku: "PPSS-150ML", product: "Artisanal Palm Sugar Syrup", size: "150ml", retailPrice: "$17.50", tier1_price: "$7.50", tier2_price: "$6.75", tier3_price: "$6.00" },
                    { sku: "PPSS-200ML", product: "Artisanal Palm Sugar Syrup", size: "200ml", retailPrice: "$20.50", tier1_price: "$9.00", tier2_price: "$8.25", tier3_price: "$7.25" }
                ],
                exportCta: "Export to Sheets"
            },
            compliance: {
                headline: "Navigating Global Trade",
                tabs: {
                    usa: "USA",
                    eu: "EU",
                    japan: "Japan",
                    uae: "UAE"
                },
                content: {
                    usa: "FDA registration is required. All packaging must comply with FDA labeling regulations, including nutritional facts panels in the U.S. format. Our products are classified under Harmonized Tariff Schedule (HTS) codes that we can provide upon inquiry.",
                    eu: "Compliance with EU food safety regulations (EC) No 178/2002 is mandatory. We provide all necessary documentation, including Certificates of Origin and analysis for contaminants, to ensure smooth customs clearance.",
                    japan: "Importers must comply with the Food Sanitation Act. We provide detailed product specification sheets and can assist with the necessary testing to meet Japan's rigorous quality standards.",
                    uae: "Products must be registered with the Dubai Municipality's Food Import and Re-export System (FIRS). Halal certification from an accredited body is required. Labels must include product name, ingredients, net weight, and country of origin in both Arabic and English."
                },
                disclaimer: "Please note: This information is for guidance only. We strongly advise consulting with a local import broker to ensure full compliance with your country's specific regulations."
            }
        }
    },
    about: {
        seo: {
            title: "Our Story | The Heritage of Golden TAAN Thai Palm Sugar",
            description: "Learn about the story behind Golden TAAN, a mission to revive a heritage Thai product through fair trade food products and sustainable agriculture in Ratchaburi, Thailand.",
            altTags: {
                farmerClimbing: "An artisan farmer climbing a tall Palmyra palm tree in Ratchaburi, a testament to our authentic Thai palm sugar heritage.",
                ratchaburiGroves: "A serene landscape of Palmyra palm groves at sunset in Ratchaburi, Thailand, the source of our eco-friendly sugar.",
                sugarCrystals: "A close-up of pure, unrefined Golden TAAN palm sugar crystals, showcasing their natural amber color.",
                artisanCrafting: "A Thai artisan crafting a block of traditional palm sugar using time-honored methods.",
                modernKitchen: "Golden TAAN palm sugar being used as a gourmet ingredient in a modern, health-conscious kitchen.",
                healthyLifestyle: "A finished dish of gluten-free blondies, showcasing Golden TAAN as part of a healthy lifestyle with low-GI sweeteners.",
                founderPortrait: "A portrait of Krisada Laohasiri, the founder of Golden TAAN, among the Palmyra palm groves.",
                communityArtisans: "A group of smiling Thai artisans from our fair trade farming community, the heart of Golden TAAN.",
                consciousChoice: "A beautiful gift set of Golden TAAN products, representing a conscious choice for a healthy sugar alternative and artisanal food gifts.",
            }
        },
        header: { title: "Our Story: Reviving Traditional Thai Palm Sugar", subtitle: "We are more than a brand; we are custodians of a centuries-old tradition, preserving the history of Thai desserts for the world." },
        roots: { title: "The Roots of a Natural Sweetener", text: "Our story begins in the fertile plains of Ratchaburi, where generations have lived in harmony with the majestic Palmyra palm. For centuries, this 'tree of life' has gifted our ancestors with its sweet nectar, a pure and unrefined plant-based sugar known as 'Nam Taan Tanod'." },
        fadingGold: { title: "A Fading Artisanal Food", text: "In recent decades, the rise of industrial white sugar threatened this ancient craft. The 'Golden Gold' of Thailand was fading. We saw a heritage Thai product at risk of being forgotten, its pure taste replaced by empty sweetness." },
        mission: { title: "From Farm-to-Table: Our Mission", text: "Golden Taan was born from a mission: to revive this fading tradition and share its wholesome goodness. We combine time-honored, artisanal methods with modern quality standards to bring you a clean-label sweetener that is delicious, nourishing, and a product of ethical food sourcing." },
        timelineTitle: "Our Journey to a Sustainable Future",
        timeline: [
            { era: "Ancient Times", title: "The Gift of the Palmyra", description: "Palmyra palm sugar is a staple in Southeast Asian cuisine and traditional Thai medicine for millennia." },
            { era: "1980s", title: "The Industrial Shift", description: "The rise of commercial white sugar threatens traditional, sustainable palm sugar production." },
            { era: "2015", title: "A Spark of Revival", description: "Our founder begins documenting the disappearing art of farm-to-table palm sugar production in Ratchaburi." },
            { era: "2020", title: "Golden Taan is Born", description: "We establish fair trade farming partnerships, guaranteeing fair wages and preserving this heritage Thai product." },
            { era: "2025", title: "Sustainable Exports to the World", description: "Golden Taan launches internationally, bringing the benefits of our healthy sugar alternative to a global audience." },
        ],
        people: {
            title: "The People Behind Our Plant-Based Sugar",
            founderName: "Krisada Laohasiri, Founder",
            founderQuote: "We don't just sell sugar; we share a piece of our heritage. Every crystal of Golden Taan tells a story of a farmer, a family, and a tradition we are proud to preserve.",
            communityTitle: "Our Community of Artisans",
            communityText: "Our network of over 2,000 farming families is the heart of Golden Taan. We are committed to their empowerment through fair trade food products, ensuring this sweet tradition provides a sustainable livelihood."
        },
        choice: { title: "The Conscious Choice for Clean Eating Ingredients", text: "When you choose Golden Taan, you're not just choosing a sweetener. You're supporting sustainable agriculture, preserving a cultural heritage, and making a healthier choice for yourself and your family." },
    },
    heritage: {
        seo: {
            title: "The Art of Harvest | Golden TAAN's Artisanal Methods & Terroir",
            description: "Explore the artisanal heritage of Golden TAAN. Learn about the unique terroir in food from Phetchaburi and the traditional, eco-friendly sugar harvesting methods we preserve.",
            altTags: {
                'borassus-flabellifer-illustration': "An illustration of the Borassus flabellifer palm tree, source of Golden TAAN sugar.",
                'traditional-simmering-kettle-fire': "A traditional kettle simmering over a fire, showcasing the caramelization process.",
                'palmyra-leaf-texture-macro': "A macro shot of a Palmyra leaf, showing natural textures."
            }
        },
        header: {
            title: "Our Heritage: The Story of Golden Taan",
            subtitle: "Explore the legacy, the craft, and the commitment behind every single-origin ingredient."
        },
        sections: [
            {
                title: "The Golden Taan Legacy",
                subtitle: "From a Fading Tradition to a Global Choice",
                content: "Our story begins in the fertile plains of Ratchaburi, Thailand, where generations of our family have lived in harmony with the majestic Palmyra palm. For centuries, this 'tree of life' has gifted our ancestors with its sweet, life-giving nectar—a pure, unrefined sugar known as 'Nam Taan Tanod'.\n\nIn recent decades, the rise of industrial white sugar and the demanding labor of traditional farming led to a decline in this ancient craft. The 'Golden Gold' of Thailand was fading. We saw a legacy at risk of being forgotten, a pure taste being replaced by an empty sweetness.\n\nGolden Taan was born from a mission: to revive this fading tradition and share its wholesome goodness with the world. We combine time-honored, artisanal methods with modern quality standards to bring you a sweetener that is not only delicious but also deeply nourishing and ethically sourced."
            },
            {
                title: "The Palmyra Palm: Benefits of Palmyra Palm",
                subtitle: "Understanding the Source of Our 'Golden Gold' and the Terroir in Food",
                content: "The foundation of our sugar's quality is the raw sap, or nam tan sod (น้ำตาลสด), which is significantly influenced by Phetchaburi's unique environment, its 'terroir'.\n\n• Soil Composition: The region's soil is characterized by high salinity and rich mineral content due to its proximity to the coast of the Gulf of Thailand. This specific soil profile directly impacts the sap, imparting a subtle, complex minerality and a less intensely sweet flavor compared to palm sap from other regions. It creates a taste that is often described as nuan (นวล), meaning mellow and rounded.\n\n[image: borassus-flabellifer-illustration.png | ratio: 3:4]\n\n• Palm Variety & Harvesting: Phetchaburi is dominated by a specific variety of the Borassus flabellifer perfectly adapted to the local climate. The collection process is a meticulous craft performed by harvesters known as khon khuen tan (คนขึ้นตาล), who climb the tall palms daily. Crucially, small pieces of wood from the kayam tree (พะยอม) are placed in the bamboo collection tubes. This is a traditional food preservation method; the kayam wood contains natural tannins that act as a preservative, preventing the sap from fermenting and maintaining its freshness without chemical additives."
            },
            {
                title: "The Art of the Harvest",
                subtitle: "Generations of Skill in Every Crystal",
                content: "The transformation of sap into sugar is a race against time and a testament to generations of skill. This is where traditional Thai cooking methods create a distinctly superior product.\n\n• The 'Tao Tan' Wok System: The sap is simmered in large, open woks over a traditional clay stove fueled by palm wood. The wide surface area allows for rapid evaporation, and the artisan's ability to control the fire is paramount. Unlike industrial methods that use high, direct heat, the slow simmering process gently caramelizes the sugars without burning them, developing a deep, natural umami flavor.\n\n[image: traditional-simmering-kettle-fire.webp | ratio: 16:9]\n\n• Meticulous Craft: As the sap heats, the artisan continuously skims off impurities. This crucial step results in a cleaner, more refined final product. The goal is to reduce the sap until it reaches a specific viscosity and color—a deep, golden amber. This process can take several hours, and the artisan relies on sensory cues—sight, smell, and sound—to know precisely when it's ready.\n\n• No Additives or Refinement: True Phetchaburi palm sugar is 100% pure palm sap. There is no addition of white cane sugar, molasses, or natural food coloring. The final product is unrefined, meaning it retains the natural vitamins and minerals present in the sap, contributing to its complex flavor and nutritional profile."
            },
            {
                title: "Our Commitment to Ethical Food Sourcing",
                subtitle: "Sweetness That Nurtures People and Planet",
                content: "Choosing Golden Taan means investing in a cycle of prosperity that starts with the tree and flows to farming families. We are built on a foundation of environmental, social, and ethical governance.\n\n• Ecological Sustainability: Palmyra palm farming is inherently regenerative. The trees are powerful carbon sinks, are incredibly drought-resistant, and thrive in biodiverse groves without chemical pesticides or fertilizers. They are a stark contrast to water-intensive, soil-degrading sugarcane monocultures.\n\n[image: palmyra-leaf-texture-macro.webp | ratio: 16:9]\n\n• Social Empowerment: We guarantee fair, above-market prices to our farmers, ensuring a stable and dignified income. We actively work to preserve their traditional knowledge and reinvest a portion of our profits into community development, funding education and local infrastructure.\n\n• Ethical Governance: We offer complete transparency and traceability from palm to pantry. We have a zero-tolerance policy for forced or child labor and are committed to inclusive growth where our farming partners have a voice in our business decisions."
            }
        ]
    },
    sustainability: {
        seo: {
            title: "Sustainable Food Products & Ethical Sourcing | Golden TAAN",
            description: "Discover our commitment to sustainable agriculture. Golden TAAN is an eco-friendly sugar produced with fair trade food products that empower communities and protect the planet.",
            altTags: {
                lushGrove: "A lush, biodiverse Palmyra palm grove, showcasing Golden TAAN's commitment to sustainable agriculture and eco-friendly sugar.",
                communityHands: "The hands of a Thai farmer holding rich soil, symbolizing our social empowerment and fair trade food products.",
                qualitySeal: "A Golden TAAN gift set with a seal of quality, representing our transparent and ethical food sourcing.",
                leafTexture: "A detailed macro shot of a Palmyra palm leaf, highlighting the beauty of our natural, single-origin ingredients."
            }
        },
        header: { title: "Sustainability: An Eco-Friendly Sugar That Nurtures", subtitle: "Our commitment runs deeper than our roots. We believe in a business model that nurtures the planet and its people through sustainable agriculture." },
        environmental: {
            title: "Environmental Stewardship",
            points: [
                { title: "Carbon Sink", text: "Palmyra palms are powerful carbon sequesters. They are not clear-felled like sugarcane, promoting a healthier climate." },
                { title: "Water-Wise Farming", text: "These trees are incredibly drought-resistant, requiring minimal irrigation, unlike water-intensive sugarcane crops." },
                { title: "Biodiversity Haven", text: "Our palm groves are not monocultures. They are integrated into the natural landscape, providing a habitat for diverse flora and fauna." },
                { title: "Zero Waste Philosophy", text: "Every part of the Palmyra palm is utilized by the local community, from leaves to wood, embodying a true circular economy." },
            ]
        },
        social: {
            title: "Social Empowerment",
            points: [
                { title: "Fair Trade Food Products", text: "We guarantee fair, above-market prices, ensuring our farmers receive a dignified income for their skilled labor." },
                { title: "Preserving Thai Heritage", text: "We actively work to preserve the traditional knowledge of palm sugar farming for the next generation through community workshops." },
                { title: "Community Development", text: "A portion of profits is reinvested into the community, funding education, healthcare, and local infrastructure projects." },
                { title: "Zero Forced Labor", text: "We have a zero-tolerance policy for forced or child labor, ensuring ethical food sourcing throughout our supply chain." },
            ]
        },
        governance: {
            title: "Ethical Governance & Transparency",
            points: [
                { title: "Farm-to-Table Transparency", text: "We offer complete traceability from palm to pantry. Scan a QR code on our packaging to meet the farmer who crafted your sugar." },
                { title: "Accountable Leadership", text: "Our leadership is committed to ethical business practices, regularly engaging with stakeholders to meet our social and environmental goals." },
                { title: "Stakeholder Inclusion", text: "Farmers and community representatives have a voice in our business decisions, ensuring a true partnership in our sustainable exports." },
                { title: "Pact of Integrity", text: "We operate with the highest level of integrity, adhering to all local and international laws and regulations." },
            ]
        },
        insights: {
            title: "A Clearer Choice: Resource Efficiency",
            chartTitle: "Resource Efficiency (Score out of 10)",
            report: {
                title: "Our 2025 Sustainability Report",
                text: "Dive deeper into our commitment. Our comprehensive annual report details our progress, challenges, and future goals in sustainability.",
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
        seo: {
            title: "Wholesale Palm Sugar Supplier | Golden TAAN B2B & Export",
            description: "Partner with Golden TAAN, a leading wholesale palm sugar supplier. Get palm sugar price per kg for B2B distribution of our premium, low-GI Palmyra palm sugar for export.",
            altTags: {}
        },
        header: { title: "Wholesale Palm Sugar Supplier & B2B Partnerships", subtitle: "Power your products with pure toddy palm sugar. Join us as a B2B partner for sustainable exports." },
        insights: { title: "Market Insights for Gourmet Ingredients", text: "The global demand for natural, low-GI, and ethically sourced sweeteners is growing. Golden Taan is a unique gourmet ingredient with a compelling story that resonates with health-conscious consumers and premium brands." },
        pricing: {
            title: "Tiered Wholesale Pricing (FOB Bangkok)",
            text: "We offer competitive tiered pricing to support businesses of all sizes, from artisanal bakeries to large-scale food manufacturers. Prices are in USD per kg.",
            table: {
                headers: { productLine: "Product Line", sku: "SKU / Packaging", tier1: "Tier 1 (100-499kg)", tier2: "Tier 2 (500-999kg)", tier3: "Tier 3 (1-5 MT)", tier4: "Tier 4 (5+ MT)" },
                data: [
                    { productLine: "Coarse Crystals", skus: [{ name: "150g Jar", tier1: "$15.12", tier2: "$13.50", tier3: "$11.80", tier4: "Quote" }, { name: "10kg Bulk Bag", tier1: "$14.38", tier2: "$12.90", tier3: "$11.20", tier4: "Quote" }] },
                    { productLine: "Fine Powder", skus: [{ name: "150g Jar", tier1: "$16.90", tier2: "$15.10", tier3: "$13.20", tier4: "Quote" }, { name: "10kg Bulk Bag", tier1: "$16.30", tier2: "$14.60", tier3: "$12.80", tier4: "Quote" }] },
                    { productLine: "Syrup", skus: [{ name: "150ml Bottle", tier1: "$17.86", tier2: "$15.90", tier3: "$13.90", tier4: "Quote" }, { name: "20L Jerry Can", tier1: "$17.29", tier2: "$15.40", tier3: "$13.50", tier4: "Quote" }] }
                ],
                note: "Palm sugar price per kg is indicative and subject to change. Request a formal quote for the latest pricing."
            }
        },
        logistics: {
            title: "Logistics & Sustainable Exports",
            packaging: { title: "Custom & White-Label Packaging", options: ["Retail-ready packaging with your branding.", "Bulk packaging for industrial use (e.g., 10kg, 20kg bags).", "Custom packaging solutions to meet your specific needs."] },
            export: { title: "Global Export Services for Palm Sugar", services: ["Full logistical support from our factory to your port.", "Assistance with all necessary export documentation (e.g., Certificate of Origin, Health Certificate).", "Partnerships with reliable global freight forwarders."] }
        },
        form: {
            title: "Request a Wholesale Quote",
            companyName: "Company Name",
            contactPerson: "Contact Person",
            email: "Email Address",
            country: "Country",
            volume: "Estimated Annual Volume (kg)",
            productType: { label: "Product Type Interest", options: ["Solid (Crystals/Powder)", "Liquid (Syrup)", "Both"] },
            packaging: { label: "Packaging Needs", placeholder: "e.g., Retail Jars, 10kg Bulk Bags" },
            message: "Your Message",
            submit: "Submit RFQ",
            successMessage: "Thank you for your inquiry! Our wholesale palm sugar supplier team will contact you within 2 business days."
        },
    },
    shop: {
        seo: {
            title: "Shop Golden TAAN | Buy Natural Palmyra Palm Sugar Online",
            description: "Buy Golden TAAN's healthy sugar alternative online. We ship our full range of low-GI, vegan-friendly Palmyra palm sugar worldwide from Thailand.",
            altTags: {}
        },
        header: { title: "Shop Golden TAAN", subtitle: "Buy palm sugar online. Bring the authentic taste of our healthy sugar alternative into your home." },
        emptyCart: { title: "Your Cart is Empty", text: "Explore our artisanal foods and add something sweet to your life.", cta: "Browse Products" },
        summary: { title: "Order Summary", subtotal: "Subtotal", shipping: "Int'l Shipping", total: "Total" },
        payment: {
            title: "Payment",
            tabs: { qr: "Thai QR", crypto: "Crypto", card: "Credit Card" },
            qr: { text: "Scan to pay with any Thai banking app." },
            crypto: { text: "Send payment to the following wallet address:", accept: "We accept:" },
            card: { number: "Card Number", expiry: "Expiry Date", cvc: "CVC", name: "Name on Card", pay: "Pay" },
        },
        shippingInfo: {
            title: "International Shipping Information",
            policy: {
                title: "Shipping Policy",
                text: "We ship worldwide from our facility in Thailand via DHL Express or Thai Post. All orders are processed and dispatched within 2-3 business days. Please ensure your shipping address is complete and correct as we cannot reroute packages once they are in transit."
            },
            delivery: {
                title: "Estimated Delivery Times",
                text: "• Standard International (Thai Post): 10-21 business days.\n• Express International (DHL): 5-10 business days.\nPlease note these are estimates and can be affected by customs clearance in your country."
            },
            customs: {
                title: "Customs, Duties, and Taxes",
                text: "Please be aware that your order may be subject to import duties, customs taxes, and/or fees levied by your country's customs department. These charges are not included in the total at checkout and are the responsibility of the recipient. We recommend contacting your local customs office for more information regarding your country's policies."
            }
        }
    },
    blog: {
        seo: {
            title: "The Golden Blog | Recipes with Healthy Sugar Alternatives",
            description: "Explore recipes and stories from the world of Golden TAAN. Discover how to use our low-GI, natural sweetener in your authentic Thai curry recipe, cocktails, and more.",
            altTags: {}
        },
        header: { title: "The Golden Blog", subtitle: "Recipes, stories, and insights from the world of Palmyra palm sugar." },
        readMore: "Read More",
        back: "Back to Blog List",
        posts: [
             {
                id: 2,
                title: "Gluten-Free Brownies with a Healthy Sugar Alternative",
                coverImage: "gluten-free-palmyra-blondies.webp",
                introduction: "Discover a brownie recipe so rich and fudgy, you'd never guess it's gluten-free. The secret? The deep, natural caramel flavor of Golden Taan palm sugar.",
                content: [
                    { type: 'paragraph', text: 'For years, the quest for the perfect gluten-free brownie has haunted bakers. Many recipes end up dry, crumbly, or lacking that deep chocolatey flavor. This recipe changes everything. By using a blend of almond flour and the unique properties of Golden Taan Coarse Crystals, we achieve a texture and taste that rivals any traditional brownie.' },
                    { type: 'heading', text: 'Why Baking with Palm Sugar Makes a Difference' },
                    { type: 'paragraph', text: 'Unlike refined white sugar, Golden Taan adds more than just sweetness. Its natural molasses content contributes to a moister, chewier texture. The smoky, butterscotch flavor profile elevates the chocolate, creating a complex and sophisticated dessert. The Coarse Crystals also create delightful little pockets of caramelization as they bake.' },
                    { type: 'image', src: 'gluten-free-palmyra-blondies.webp', alt: 'Clean eating ingredients laid out for gluten-free brownies, featuring Golden Taan sugar.' },
                    { type: 'heading', text: 'Ingredients' },
                    { type: 'paragraph', text: '• 1 cup (200g) Golden Taan Coarse Crystals\n• 1/2 cup (113g) unsalted butter, melted\n• 2 large eggs\n• 1 teaspoon vanilla extract\n• 3/4 cup (85g) unsweetened cocoa powder\n• 1/2 cup (60g) almond flour\n• 1/4 teaspoon baking soda\n• 1/2 cup chocolate chips' },
                    { type: 'heading', text: 'Instructions' },
                    { type: 'paragraph', text: '1. Preheat your oven to 350°F (175°C) and grease an 8x8 inch baking pan.\n2. In a large bowl, whisk together the melted butter and Golden Taan sugar until well combined.\n3. Add the eggs and vanilla extract, beating until the mixture is smooth.\n4. Sift in the cocoa powder, almond flour, and baking soda. Fold gently until just combined.\n5. Stir in the chocolate chips.\n6. Pour the batter into the prepared pan and bake for 20-25 minutes, or until a toothpick inserted into the center comes out with moist crumbs.\n7. Let cool completely before slicing. Enjoy the richness!' }
                ]
            },
            {
                id: 4,
                title: "Gourmet Glaze for Salmon with Palm Sugar Syrup",
                coverImage: "pan-seared-salmon-glaze.webp",
                introduction: "Elevate a simple salmon dinner into a gourmet experience with this incredible sweet and savory glaze, featuring the versatile Golden Taan Syrup.",
                content: [
                    { type: 'paragraph', text: 'This recipe is a perfect weeknight meal that tastes like it came from a high-end restaurant. The glaze is incredibly simple but packs a huge flavor punch. The Golden Taan Syrup caramelizes beautifully on the salmon, creating a slightly crispy, sweet crust that pairs perfectly with the rich, flaky fish.' },
                    { type: 'heading', text: 'The Magic of the Glaze' },
                    { type: 'paragraph', text: 'The glaze combines four simple ingredients: Golden Taan Syrup, soy sauce, fresh ginger, and garlic. The syrup provides a complex, toffee-like sweetness that is much more interesting than honey or maple syrup. It balances the saltiness of the soy sauce and the spiciness of the ginger and garlic, creating a perfectly harmonious flavor profile.' },
                    { type: 'image', src: 'pan-seared-salmon-glaze.webp', alt: 'Ingredients for the gourmet glaze for salmon, including Golden Taan Syrup.' },
                    { type: 'heading', text: 'Ingredients' },
                    { type: 'paragraph', text: '• 2 salmon fillets (6oz each)\n• 2 tbsp Golden Taan Syrup\n• 2 tbsp soy sauce\n• 1 tsp grated fresh ginger\n• 1 clove garlic, minced\n• Salt and pepper to taste\n• 1 tbsp olive oil' },
                    { type: 'heading', text: 'Instructions' },
                    { type: 'paragraph', text: '1. Preheat your oven to 400°F (200°C).\n2. In a small bowl, whisk together the Golden Taan Syrup, soy sauce, ginger, and garlic.\n3. Pat the salmon fillets dry and season with salt and pepper.\n4. Heat the olive oil in an oven-safe skillet over medium-high heat. Place the salmon skin-side up and sear for 2-3 minutes until golden.\n5. Flip the salmon. Pour the glaze over the fillets.\n6. Transfer the skillet to the oven and bake for 5-7 minutes, or until the salmon is cooked through and the glaze is bubbly and caramelized.\n7. Serve immediately with a side of steamed rice and vegetables.' }
                ]
            },
            {
                id: 5,
                title: "How to Make Thai Iced Tea with a Natural Sweetener",
                coverImage: "golden-taan-caramel-latte.webp",
                introduction: "Recreate the classic Thai street-food favorite with a wholesome twist. Our Golden Taan Syrup adds a complex, caramel depth that refined sugar just can't match.",
                content: [
                    { type: 'paragraph', text: "Thai Iced Tea, or 'Cha Yen', is a beloved beverage known for its creamy texture and sweet, aromatic flavor. Traditionally, it's made with a potent brew of black tea, sweetened condensed milk, and a hefty amount of white sugar. Our version captures all the authentic flavor while upgrading the sweetener for a richer, more nuanced taste." },
                    { type: 'heading', text: "The Golden Taan Difference" },
                    { type: 'paragraph', text: "Swapping out refined sugar for Golden Taan Syrup isn't just a healthier choice; it's a flavor enhancer. The syrup's natural toffee and smoke notes complement the spices in the tea (like star anise and cardamom), creating a beverage that's both refreshing and complex." },
                    { type: 'image', src: "golden-taan-caramel-latte.webp", alt: 'Pouring milk into a glass of Thai tea made with an authentic recipe.' },
                    { type: 'heading', text: 'Ingredients (for 2 servings)' },
                    { type: 'paragraph', text: "• 2 cups strong-brewed Thai black tea, cooled\n• 4 tbsp Golden Taan Syrup (or to taste)\n• 4 tbsp evaporated milk (or coconut milk for a vegan version)\n• Ice" },
                    { type: 'heading', text: 'Instructions' },
                    { type: 'paragraph', text: "1. Brew your Thai tea according to package directions and let it cool completely.\n2. Fill two tall glasses with ice.\n3. Pour 1 cup of the cooled tea into each glass.\n4. Add 2 tablespoons of Golden Taan Syrup to each glass and stir well until it dissolves.\n5. Gently pour 2 tablespoons of evaporated milk over the top of each tea. It will create a beautiful swirling effect.\n6. Serve immediately with a straw and enjoy the authentic taste of Thailand." }
                ]
            },
            {
                id: 6,
                title: "Benefits of Palmyra Palm: Southeast Asia's 'Tree of Life'",
                coverImage: "ratchaburi-palm-groves-landscape.webp",
                introduction: "Explore the incredible story of the Palmyra palm, a tree that has sustained communities for centuries with its versatile gifts, earning it the name 'Tree of Life'.",
                content: [
                    { type: 'paragraph', text: "The Palmyra palm (Borassus flabellifer) is more than just the source of our delicious sugar; it's a cornerstone of rural life in Thailand and across Southeast Asia. For millennia, every single part of this remarkable tree has been used, embodying a true zero-waste philosophy." },
                    { type: 'heading', text: 'A Cornucopia of Uses' },
                    { type: 'paragraph', text: "• The Sap: Harvested to create our Golden Taan sugar, fresh sap (Nam Taan Sod) is also enjoyed as a refreshing drink, and can be fermented into a toddy or vinegar.\n• The Fruit: The tender, jelly-like seeds of the young fruit are a delicacy, while the fibrous outer layer of the ripe fruit can be cooked into sweets.\n• The Leaves: Strong and fan-like, the leaves are used for thatching roofs, weaving baskets, mats, hats, and even as traditional writing material (manuscripts).\n• The Trunk: The sturdy, fibrous wood from the trunk is a valuable, termite-resistant building material for homes and furniture." },
                    { type: 'image', src: "farmer-climbing-palm-tree.webp", alt: 'Hand-woven baskets made from Palmyra palm leaves, a sustainable food product.' },
                    { type: 'heading', text: 'Cultural & Ecological Significance' },
                    { type: 'paragraph', text: "The Palmyra palm is deeply woven into the cultural fabric of the region, symbolizing resilience and self-sufficiency. Ecologically, these trees are vital. They prevent soil erosion, require very little water, and thrive without pesticides, making them a pillar of sustainable agriculture. By supporting products from the Palmyra palm, you help preserve this incredible natural and cultural resource." }
                ]
            },
            {
                id: 7,
                title: "Baking for Blood Sugar Balance with Low-GI Sweeteners",
                coverImage: "gluten-free-palmyra-blondies.webp",
                introduction: "Managing blood sugar doesn't mean giving up delicious baked goods. Learn how Golden Taan Powder can be your secret weapon for healthier treats that don't compromise on taste.",
                content: [
                    { type: 'paragraph', text: "For those mindful of their blood sugar, baking can seem like a minefield of high-glycemic ingredients. But with the right sweetener, you can create treats that are both delicious and gentler on your body's energy levels. This is where low-glycemic index (GI) sweeteners like Golden Taan come in." },
                    { type: 'heading', text: 'What is the Glycemic Index?' },
                    { type: 'paragraph', text: "The GI is a scale from 0 to 100 that ranks carbohydrate-containing foods by how much they raise blood sugar levels. Pure glucose is 100. Refined white sugar has a GI of around 65, causing a rapid spike and crash. Golden Taan, with a GI of only ~35, is considered a low-GI food, meaning it's digested more slowly, leading to a gradual rise in blood sugar and sustained energy." },
                    { type: 'image', src: "gluten-free-palmyra-blondies.webp", alt: 'A batch of freshly baked healthy muffins made with a healthy sugar alternative.' },
                    { type: 'heading', text: 'Simple Low-GI Oat Muffin Recipe' },
                    { type: 'paragraph', text: "This recipe uses Golden Taan Powder and whole grains for a delicious, satisfying, and blood-sugar-friendly snack.\n• 1.5 cups rolled oats\n• 1/2 cup Golden Taan Powder\n• 1 tsp baking powder\n• 1/2 tsp cinnamon\n• 1 cup milk (or dairy-free alternative)\n• 1 egg\n• 1/4 cup melted coconut oil\n• 1 tsp vanilla extract" },
                    { type: 'heading', text: 'Instructions' },
                    { type: 'paragraph', text: "1. Preheat oven to 375°F (190°C) and line a muffin tin.\n2. In a bowl, mix oats, Golden Taan Powder, baking powder, and cinnamon.\n3. In another bowl, whisk together milk, egg, coconut oil, and vanilla.\n4. Pour the wet ingredients into the dry ingredients and stir until just combined.\n5. Spoon batter into the muffin tin and bake for 18-20 minutes.\n6. Enjoy a guilt-free treat that will keep you feeling full and energized." }
                ]
            },
            {
                id: 8,
                title: "Smoky Old Fashioned Cocktail Recipe with Palm Sugar",
                coverImage: "smoky-old-fashioned-cocktail.webp",
                introduction: "Move beyond simple syrup. The smoky, caramel notes of Golden Taan Syrup can add incredible complexity and sophistication to your favorite cocktails.",
                content: [
                    { type: 'paragraph', text: "A great cocktail is all about balance. The sweetener you choose plays a crucial role, and Golden Taan Syrup offers a flavor profile that plain sugar syrup can't replicate. Its rich, butterscotch notes and hint of smoke can elevate classic drinks and inspire new creations." },
                    { type: 'image', src: "smoky-old-fashioned-cocktail.webp", alt: 'A sophisticated Smoky Old Fashioned cocktail recipe made with Golden Taan.' },
                    { type: 'heading', text: 'Recipe: The Palmyra Old Fashioned' },
                    { type: 'paragraph', text: "A smoky, sophisticated twist on a timeless classic.\n• 2 oz Bourbon or Rye Whiskey\n• 1/4 oz Golden Taan Syrup\n• 2 dashes Angostura bitters\n• Orange peel for garnish" },
                    { type: 'heading', text: 'Instructions' },
                    { type: 'paragraph', text: "1. Combine the Golden Taan Syrup and bitters in a mixing glass.\n2. Add the whiskey and fill the glass with ice.\n3. Stir until well-chilled (about 30 seconds).\n4. Strain into a rocks glass over a large ice cube.\n5. Express the oils from an orange peel over the drink and drop it in as garnish." }
                ]
            },
        ]
    },
    contact: {
        seo: {
            title: "Contact Golden TAAN | Wholesale Palm Sugar Inquiries",
            description: "Contact our global team for wholesale palm sugar inquiries, distribution partnerships, and B2B questions. Reach out to Golden TAAN today.",
            altTags: {
                map: "Interactive map showing the location of Golden TAAN's global headquarters in Bangkok."
            }
        },
        header: {
            title: "Contact Our Global Team",
            subtitle: "We welcome inquiries for wholesale partnerships, distribution, and product information. Please use the appropriate channel below to reach the right team."
        },
        leftColumn: {
            hq: "Global Headquarters",
            phone: "Phone / WhatsApp",
            hours: "9:00 AM - 5:00 PM, GMT+7",
            email: "Email Directory",
            sales: "For Sales & Wholesale Inquiries:",
            cc: "CC:"
        },
        form: {
            title: "Send Us Your Inquiry",
            fullName: "Full Name",
            companyName: "Company Name",
            country: "Country",
            email: "Email Address",
            inquiryType: {
                label: "Inquiry Type",
                options: {
                    wholesale: "Wholesale & Distribution",
                    oem: "OEM / Private Label",
                    sample: "Request a Sample",
                    productInfo: "Product Information",
                    general: "General Inquiry",
                }
            },
            message: "Message",
            submit: "Submit Inquiry",
            successMessage: "Thank you for your inquiry! Our team will get back to you shortly."
        }
    },
    footer: {
        office: {
            title: "Office Address",
            address: "919/1 JTC Building, Silom Road, Silom, Bangrak\nBangkok 10500 THAILAND"
        },
        contact: {
            title: "Contact",
            name: "Mr. Krisada Laohasiri",
            phone: {
                label: "Telephone/WeChat",
                number: "+66(0)81 851 9922"
            },
            email: {
                label: "Email",
                address: "info@goldentaan.com"
            },
            cc: {
                label: "cc",
                address: "info.vkamber@gmail.com"
            }
        },
        quickLinks: "Quick Links",
        copyright: "© {year} Golden TAAN Co., Ltd. All Rights Reserved."
    }
};

const th: Translations = JSON.parse(JSON.stringify(en));
th.home.health.nutrientData = nutrientData.th;
// --- THAI TRANSLATIONS (OPTIMIZED) ---
th.meta.globalTitle = "ซื้อน้ำตาลโตนดแท้ 100% | Golden TAAN | น้ำตาล GI ต่ำและยั่งยืน";
th.meta.globalDescription = "สั่งซื้อน้ำตาลโตนดแท้จากไทยออนไลน์ Golden TAAN คือแบรนด์น้ำตาลโตนดบริสุทธิ์ 100% ไม่ขัดสี เป็นน้ำตาลทางเลือกเพื่อสุขภาพ GI ต่ำ และเป็นวีแกน";

th.nav.home = "หน้าแรก";
th.nav.ourStory = "เรื่องราวของเรา";
th.nav.heritage = "มรดกของเรา";
th.nav.products = "ผลิตภัณฑ์";
th.nav.blog = "บล็อก";
th.nav.sustainability = "ความยั่งยืน";
th.nav.wholesale = "ค้าส่ง & B2B";
th.nav.shopNow = "ซื้อสินค้า";
th.nav.contact = "ติดต่อเรา";

th.home.seo.title = "Golden TAAN | ซื้อน้ำตาลโตนดเพชรบุรี | ไม่ผสม GI ต่ำ";
th.home.seo.description = "กำลังมองหาที่ซื้อน้ำตาลโตนด? Golden TAAN มีน้ำตาลโตนดปึก, น้ำตาลโตนดผง และไซรัปน้ำตาลโตนดบริสุทธิ์ 100% เป็นทางเลือกน้ำตาลเพื่อสุขภาพระดับพรีเมียม";
th.home.hero.headline = "Golden TAAN: ประสบการณ์น้ำตาลโตนดแท้ดั้งเดิม";
th.home.hero.subheadline = "สัมผัสรสชาติคาราเมลธรรมชาติจากน้ำตาลโตนดไม่ขัดสี ทางเลือกเพื่อสุขภาพ GI ต่ำ สั่งซื้อน้ำตาลโตนดออนไลน์ได้แล้ววันนี้";
th.home.hero.cta = "ค้นพบเรื่องราวของเรา";

th.home.trends.headline = "เทรนด์อาหารสุขภาพ 2025: การเติบโตของสารให้ความหวานธรรมชาติ";
th.home.trends.description = "ทั่วโลกกำลังหันมาใช้วัตถุดิบอาหารคลีน ผู้บริโภคกำลังมองหาสารให้ความหวานธรรมชาติและน้ำตาลจากพืช ความต้องการผลิตภัณฑ์เกษตรยั่งยืนที่มีที่มาโปร่งใสและมีจริยธรรมเป็นเทรนด์อาหารสุขภาพที่สำคัญสำหรับปี 2025";

th.home.health.headline = "น้ำตาล GI ต่ำ: เจาะลึกคุณค่าทางโภชนาการ";
th.home.health.description = "สำรวจประโยชน์ของน้ำตาลโตนดไม่ผสม ซึ่งแตกต่างจากน้ำตาลทรายขาวที่ให้แต่แคลอรี่ Golden TAAN ให้พลังงานอย่างช้าๆ และเป็นหนึ่งในน้ำตาลทางเลือกเพื่อสุขภาพที่ดีที่สุด อุดมด้วยแร่ธาตุจำเป็นเช่นโพแทสเซียม";
th.home.health.insight.title = "✨ ประโยชน์ของต้นตาล: พลังของน้ำตาลสำหรับคนเป็นเบาหวาน";
th.home.health.insight.text = "ข้อมูลพิสูจน์ให้เห็นถึงความเหนือกว่าของน้ำตาลจากพืชที่ไม่ผ่านการขัดสี ปริมาณโพแทสเซียมที่สูงเป็นพิเศษของ Golden TAAN ซึ่งเป็นอิเล็กโทรไลต์ธรรมชาติที่สำคัญ ทำให้เป็นตัวเลือกที่โดดเด่น ค่าดัชนีน้ำตาลต่ำทำให้เป็นหนึ่งในสารให้ความหวานธรรมชาติที่ดีที่สุดสำหรับผู้ป่วยเบาหวานและผู้ที่ต้องการพลังงานที่ยั่งยืน";

th.home.process.headline = "ภูมิปัญญาท้องถิ่นไทย: วิธีทำน้ำตาลโตนดดั้งเดิม vs. การผลิตอุตสาหกรรม";
th.home.process.description = "กระบวนการผลิตแบบดั้งเดิมจากฟาร์มสู่โต๊ะอาหารคือสิ่งที่ทำให้ Golden TAAN เป็นวัตถุดิบอาหารเพื่อสุขภาพที่แตกต่างจากน้ำตาลที่ผลิตในโรงงานอุตสาหกรรม";

th.home.impact.headline = "น้ำตาลรักษ์โลก: ต้นแบบผลิตภัณฑ์เกษตรยั่งยืน";
th.home.impact.description = "การเลือก Golden TAAN สนับสนุนรูปแบบการผลิตน้ำตาลที่เป็นมิตรต่อสิ่งแวดล้อมและฟื้นฟูระบบนิเวศ ซึ่งแตกต่างจากการปลูกอ้อยเชิงเดี่ยวที่ทำลายระบบนิเวศ";
th.home.impact.community.headline = "หยั่งรากลึกในเศรษฐกิจชุมชน";
th.home.impact.community.description = "ความมุ่งมั่นของเราในการค้าที่เป็นธรรมสร้างวงจรแห่งความเจริญรุ่งเรือง การเลือก Golden TAAN คือการลงทุนในชุมชนช่างฝีมือชาวไทยของเรา สนับสนุนสินค้า OTOP เพื่อการส่งออกที่ยั่งยืน";

th.home.productSection.headline = "ผลิตภัณฑ์น้ำตาลโตนดของเรา: น้ำตาลปึก, ผง และไซรัป";
th.home.productSection.description = "สำรวจกลุ่มผลิตภัณฑ์วัตถุดิบอาหารไทยของเรา สั่งซื้อน้ำตาลโตนดออนไลน์—ทางเลือกที่สมบูรณ์แบบสำหรับห้องครัวของคุณ";

th.home.faq.headline = "คำถามที่พบบ่อยเกี่ยวกับน้ำตาลโตนด";
th.home.faq.items[0].q = "น้ำตาลโตนดแท้คืออะไร?";
th.home.faq.items[0].a = "เป็นสารให้ความหวานธรรมชาติบริสุทธิ์ ไม่ขัดสี ได้จากน้ำหวานของต้นตาล Golden TAAN ผลิตด้วยวิธีดั้งเดิมที่รักษารสชาติคาราเมลเข้มข้นและแร่ธาตุ ทำให้เป็นน้ำตาลทางเลือกเพื่อสุขภาพที่เหนือกว่า";
th.home.faq.items[1].q = "Golden TAAN เป็นน้ำตาลเพื่อสุขภาพหรือไม่?";
th.home.faq.items[1].a = "ใช่ มีค่าดัชนีน้ำตาลต่ำ (GI ~35) ทำให้เป็นน้ำตาลสำหรับคนเป็นเบาหวาน และยังอุดมไปด้วยโพแทสเซียมและธาตุเหล็ก";
th.home.faq.items[2].q = "น้ำตาลโตนด vs น้ำตาลมะพร้าว แตกต่างกันอย่างไร?";
th.home.faq.items[2].a = "มาจากต้นไม้คนละชนิด Golden TAAN (จากต้นตาล) มีรสชาติบัตเตอร์สก็อตช์ที่ลึกและมีกลิ่นควันมากกว่า และโดยทั่วไปมีแร่ธาตุสูงกว่า เป็นวัตถุดิบอาหารที่เป็นเอกลักษณ์ของไทย";
th.home.faq.items[3].q = "จะใช้น้ำตาลจากพืชนี้อย่างไร?";
th.home.faq.items[3].a = "ใช้ทดแทนน้ำตาลทรายในอัตราส่วน 1:1 น้ำตาลโตนดผงของเราเหมาะสำหรับการทำขนม น้ำตาลปึกเหมาะสำหรับตกแต่ง และไซรัปเหมาะสำหรับราดและทำซอสเคลือบ";
th.home.faq.items[4].q = "ผลิตภัณฑ์ของคุณเป็นเกษตรอินทรีย์และยั่งยืนหรือไม่?";
th.home.faq.items[4].a = "แน่นอน น้ำตาลของเรามาจากสวนตาลที่มีความหลากหลายทางชีวภาพ ไม่ใช่สวนเชิงเดี่ยว ต้นไม้ทนแล้ง ไม่ต้องใช้ปุ๋ยเคมี และเราสนับสนุนรูปแบบการค้าที่เป็นธรรม";

th.productsPage.wholesale.compliance.headline = "การนำทางการค้าระหว่างประเทศ";
th.productsPage.wholesale.compliance.tabs.usa = "สหรัฐอเมริกา";
th.productsPage.wholesale.compliance.tabs.eu = "สหภาพยุโรป";
th.productsPage.wholesale.compliance.tabs.japan = "ญี่ปุ่น";
th.productsPage.wholesale.compliance.tabs.uae = "สหรัฐอาหรับเอมิเรตส์";
th.productsPage.wholesale.compliance.content.uae = "ผลิตภัณฑ์ต้องลงทะเบียนกับระบบนำเข้าและส่งออกอาหารของเทศบาลดูไบ (FIRS) จำเป็นต้องมีใบรับรองฮาลาลจากหน่วยงานที่ได้รับการรับรองฉลากต้องระบุชื่อผลิตภัณฑ์ ส่วนผสม น้ำหนักสุทธิ และประเทศต้นกำเนิดเป็นภาษาอาหรับและภาษาอังกฤษ";
th.productsPage.wholesale.pricingTable.headers = {
    sku: "รหัสสินค้า",
    product: "ผลิตภัณฑ์",
    size: "ขนาด",
    retailPrice: "ราคาขายปลีก",
    tier1: "24 - 99 หน่วย (เล็ก)",
    tier2: "100 - 499 หน่วย (กลาง)",
    tier3: "500+ หน่วย (ตัวแทนจำหน่าย)"
};

const ja: Translations = JSON.parse(JSON.stringify(en));
ja.home.health.nutrientData = nutrientData.ja;
// --- JAPANESE TRANSLATIONS (OPTIMIZED) ---
ja.meta.globalTitle = "100%純正パームシュガーを購入 | Golden TAAN | 低GI＆持続可能";
ja.meta.globalDescription = "本格的なタイ産パームシュガーをオンラインで購入。Golden TAANは100%純正、無精製の最高級パルミラパームシュガーブランドで、低GI、ヴィーガン、健康的な砂糖の代替品です。";

ja.nav.home = "ホーム";
ja.nav.ourStory = "私たちの物語";
ja.nav.heritage = "伝統";
ja.nav.products = "製品";
ja.nav.blog = "ブログ";
ja.nav.sustainability = "持続可能性";
ja.nav.wholesale = "卸売 & B2B";
ja.nav.shopNow = "購入";
ja.nav.contact = "お問い合わせ";

ja.home.seo.title = "Golden TAAN | 本格タイ産パームシュガーを購入 | 無精製＆低GI";
ja.home.seo.description = "パームシュガーの販売店をお探しですか？Golden TAANは100%純正、無精製のパルミラパームシュガー（固形、パウダー、シロップ）を提供しています。プレミアムな低GIのヴィーガン砂糖代替品です。";
ja.home.hero.headline = "Golden TAAN: 本格的なタイ産パームシュガー体験";
ja.home.hero.subheadline = "無精製で低GIの健康的な砂糖代替品の天然キャラメル風味を体験してください。今すぐオンラインでパームシュガーを購入。";
ja.home.hero.cta = "私たちの物語を発見する";

ja.home.trends.headline = "クリーンラベル食品トレンド2025：健康的な甘味料の台頭";
ja.home.trends.description = "世界はクリーンイーティングの食材を受け入れています。消費者は天然甘味料や植物由来の砂糖を積極的に求めています。透明でエシカルな食材調達による持続可能な食品への需要は、2025年の重要なクリーンラベル食品トレンドです。";

ja.home.health.headline = "低GI甘味料：栄養の詳細";
ja.home.health.description = "無精製砂糖のメリットを探る。カロリーだけの精製糖とは異なり、Golden TAANはゆっくりとエネルギーを放出し、カリウムなどの必須ミネラルが豊富な最も健康的な砂糖代替品の一つです。";
ja.home.health.insight.title = "✨ 主な洞察：食事におけるカリウムの効果と低GI甘味料";
ja.home.health.insight.text = "データは無精製の植物由来の砂糖の優位性を証明しています。Golden TAANの非常に高いカリウム含有量は、健康に不可欠な天然の電解質であり、際立った選択肢となっています。その低い血糖指数は、糖尿病向けや持続的なエネルギーを求める人々にとって最高の天然甘味料の一つです。";

ja.home.process.headline = "職人技の食品：伝統的なタイの調理法 vs. 工業的精製";
ja.home.process.description = "農場から食卓までの伝統的なプロセスこそが、Golden TAANを工業的に加工された砂糖とは全く異なる、生きたホールフード食材にしています。";

ja.home.impact.headline = "環境に優しい砂糖：持続可能な食品のモデル";
ja.home.impact.description = "Golden TAANを選ぶことは、生態系を劣化させる可能性のあるサトウキビの単一栽培とは異なり、生物多様性を育む再生的で環境に優しい砂糖生産モデルを支援することです。";
ja.home.impact.community.headline = "フェアトレード食品に根ざして";
ja.home.impact.community.description = "エシカルな食材調達への私たちのコミットメントは、繁栄のサイクルを生み出します。Golden TAANを選ぶことで、タイの職人コミュニティに投資し、伝統的なタイの製品と持続可能な輸出を支援します。";

ja.home.productSection.headline = "職人技のパームシュガー：固形、パウダー＆シロップ";
ja.home.productSection.description = "グルメな食材のラインナップをご覧ください。オンラインでパームシュガーを購入し、アジアの調味料の必需品として、完璧な健康的な砂糖の代替品を手に入れましょう。";

ja.home.faq.headline = "パルミラパームシュガーに関するよくある質問";
ja.home.faq.items[0].q = "トディパームシュガーとは何ですか？";
ja.home.faq.items[0].a = "パルミラヤシの樹液から収穫される、純粋で無精製の天然甘味料です。Golden TAANは、ミネラルと豊かなキャラメルのような風味を保つ伝統的な職人技で作られており、優れた健康的な砂糖の代替品です。";
ja.home.faq.items[1].q = "Golden TAANは健康的な砂糖の代替品ですか？";
ja.home.faq.items[1].a = "はい。血糖指数が低く（GI約35）、ゆっくりとエネルギーを放出するため、糖尿病に優しい砂糖です。また、カリウムや鉄分などの栄養素が豊富です。";
ja.home.faq.items[2].q = "パームシュガーとココナッツシュガーの違いは何ですか？";
ja.home.faq.items[2].a = "異なる木から作られます。Golden TAAN（パルミラヤシから）は、より深く、スモーキーなバタースコッチ風味があり、通常ミネラルが豊富です。タイの伝統に根ざしたユニークなグルメ食材です。";
ja.home.faq.items[3].q = "この植物由来の砂糖はどのように使えますか？";
ja.home.faq.items[3].a = "従来の砂糖の1:1の代替品として使用してください。パームシュガーパウダーはベーキングに、固形クリスタルは仕上げに、パームシュガーシロップはソースやグレーズに最適です。";
ja.home.faq.items[4].q = "あなたの環境に優しい砂糖は持続可能な食品ですか？";
ja.home.faq.items[4].a = "もちろんです。私たちの砂糖は生物多様性のある木立から来ており、単一栽培のプランテーションではありません。木は干ばつに強く、化学肥料を必要とせず、私たちはフェアトレードの農業モデルを支援しています。";

ja.productsPage.wholesale.compliance.headline = "グローバル貿易のナビゲーション";
ja.productsPage.wholesale.compliance.tabs.usa = "アメリカ";
ja.productsPage.wholesale.compliance.tabs.eu = "EU";
ja.productsPage.wholesale.compliance.tabs.japan = "日本";
ja.productsPage.wholesale.compliance.tabs.uae = "アラブ首長国連邦";
ja.productsPage.wholesale.compliance.content.uae = "製品はドバイ市役所の食品輸出入システム（FIRS）に登録する必要があります。認定機関からのハラル認証が必須です。ラベルには製品名、原材料、内容量、原産国をアラビア語と英語の両方で記載する必要があります。";
ja.productsPage.wholesale.pricingTable.headers = {
    sku: "SKU",
    product: "製品",
    size: "サイズ",
    retailPrice: "小売価格",
    tier1: "24～99個 (小口)",
    tier2: "100～499個 (中口)",
    tier3: "500個以上 (代理店)"
};

const zh: Translations = JSON.parse(JSON.stringify(en));
zh.home.health.nutrientData = nutrientData.zh;
// --- CHINESE (SIMPLIFIED) TRANSLATIONS (OPTIMIZED) ---
zh.meta.globalTitle = "在线购买100%纯棕榈糖 | Golden TAAN | 低GI与可持续";
zh.meta.globalDescription = "在线购买正宗泰国棕榈糖。Golden TAAN 是一个100%纯净、未精制的优质巴尔米拉棕榈糖品牌，是一种低GI、纯素和健康的糖替代品。";

zh.nav.home = "首页";
zh.nav.ourStory = "我们的故事";
zh.nav.heritage = "传承";
zh.nav.products = "产品";
zh.nav.blog = "博客";
zh.nav.sustainability = "可持续性";
zh.nav.wholesale = "批发与B2B";
zh.nav.shopNow = "立即购买";
zh.nav.contact = "联系我们";

zh.home.seo.title = "Golden TAAN | 购买正宗泰国棕榈糖 | 未精制与低GI";
zh.home.seo.description = "在哪里可以买到棕榈糖？Golden TAAN 提供100%纯净、未精制的巴尔米拉棕榈糖块、糖粉和糖浆。一种优质的低GI纯素糖替代品。";
zh.home.hero.headline = "Golden TAAN: 正宗泰国棕榈糖体验";
zh.home.hero.subheadline = "体验真正未精制、低GI、健康的糖替代品的天然焦糖风味。立即在线购买棕榈糖。";
zh.home.hero.cta = "探索我们的故事";

zh.home.trends.headline = "2025年清洁标签食品趋势：健康糖替代品的兴起";
zh.home.trends.description = "世界正在拥抱清洁饮食配料。消费者正在积极寻找天然甜味剂和植物性糖。对具有透明、道德食品采购的可持续食品的需求是2025年重要的清洁标签食品趋势。";

zh.home.health.headline = "低升糖指数甜味剂：营养深度解析";
zh.home.health.description = "探索未精制糖的好处。与空热量的精制糖不同，Golden TAAN 提供缓慢的能量释放，是最好的健康糖替代品之一，富含钾等必需矿物质。";
zh.home.health.insight.title = "✨ 关键见解：饮食中钾的好处与低GI甜味剂";
zh.home.health.insight.text = "数据证明了未精制的植物性糖的优越性。Golden TAAN 极高的钾含量——一种对健康至关重要的天然电解质——使其成为一个杰出的选择。其低升糖指数使其成为适合糖尿病患者和寻求持续能量的人的最佳天然甜味剂之一。";

zh.home.process.headline = "手工美食：传统泰式烹饪方法 vs. 工业精炼";
zh.home.process.description = "从农场到餐桌的传统过程使 Golden TAAN 成为一种活生生的全食配料，与工业加工的糖截然不同。";

zh.home.impact.headline = "环保糖：可持续食品的典范";
zh.home.impact.description = "选择 Golden TAAN 支持一种可再生的、环保的糖生产模式，滋养生物多样性，不像可能使生态系统退化的甘蔗单一栽培。";
zh.home.impact.community.headline = "植根于公平贸易食品";
zh.home.impact.community.description = "我们对道德食品采购的承诺创造了一个繁荣的循环。选择 Golden TAAN，您就是在投资我们的泰国工匠社区，支持一种传统泰国产品和可持续出口。";

zh.home.productSection.headline = "我们的手工棕榈糖：糖块、糖粉和糖浆";
zh.home.productSection.description = "探索我们的美食配料系列。在线购买棕榈糖——为您亚洲厨房必需品提供的完美健康糖替代品。";

zh.home.faq.headline = "关于巴尔米拉棕榈糖的常见问题解答";
zh.home.faq.items[0].q = "什么是棕榈液糖？";
zh.home.faq.items[0].a = "它是一种从巴尔米拉棕榈树花蜜中收获的纯净、未精制的天然甜味剂。Golden TAAN 采用传统的手工方法制作，保留了矿物质和浓郁的焦糖般风味，使其成为一种卓越的健康糖替代品。";
zh.home.faq.items[1].q = "Golden TAAN 是健康的糖替代品吗？";
zh.home.faq.items[1].a = "是的。它的升糖指数很低（GI约35），能缓慢释放能量，是一种适合糖尿病患者的糖。它还富含钾和铁等营养物质。";
zh.home.faq.items[2].q = "棕榈糖与椰子糖的区别是什么？";
zh.home.faq.items[2].a = "它们来自不同的树。Golden TAAN（来自巴尔米拉棕榈）具有更深、更烟熏的奶油糖果风味，通常矿物质含量更高。它是一种植根于泰国传统的独特美食配料。";
zh.home.faq.items[3].q = "我该如何使用这种植物性糖？";
zh.home.faq.items[3].a = "将其用作常规糖的1:1替代品。我们的棕榈糖粉非常适合烘焙，粗晶体是完美的点缀，而棕榈糖浆则非常适合淋酱和制作釉料。";
zh.home.faq.items[4].q = "你们的环保糖是可持续食品吗？";
zh.home.faq.items[4].a = "当然。我们的糖来自生物多样性的树林，而不是单一栽培的种植园。这些树耐旱，不需要化学肥料，我们支持公平贸易的农业模式。";

zh.productsPage.wholesale.compliance.headline = "驾驭全球贸易";
zh.productsPage.wholesale.compliance.tabs.usa = "美国";
zh.productsPage.wholesale.compliance.tabs.eu = "欧盟";
zh.productsPage.wholesale.compliance.tabs.japan = "日本";
zh.productsPage.wholesale.compliance.tabs.uae = "阿联酋";
zh.productsPage.wholesale.compliance.content.uae = "产品必须在迪拜市政厅的食品进出口系统（FIRS）中注册。需要获得认可机构的清真认证。标签必须包括阿拉伯语和英语的产品名称、成分、净重和原产国。";
zh.productsPage.wholesale.pricingTable.headers = {
    sku: "SKU",
    product: "产品",
    size: "规格",
    retailPrice: "零售价",
    tier1: "24 - 99 件 (小批量)",
    tier2: "100 - 499 件 (中批量)",
    tier3: "500+ 件 (经销商)"
};

const ar: Translations = JSON.parse(JSON.stringify(en));
ar.home.health.nutrientData = nutrientData.ar;
// --- ARABIC TRANSLATIONS (OPTIMIZED) ---
ar.meta.globalTitle = "شراء سكر النخيل النقي 100% عبر الإنترنت | Golden TAAN | منخفض المؤشر الجلايسيمي ومستدام";
ar.meta.globalDescription = "اشترِ سكر النخيل التايلاندي الأصلي عبر الإنترنت. Golden TAAN هي علامة تجارية فاخرة لسكر نخيل بالميرا النقي 100% وغير المكرر، وهو بديل صحي ونباتي للسكر ومنخفض المؤشر الجلايسيمي.";

ar.nav.home = "الرئيسية";
ar.nav.ourStory = "قصتنا";
ar.nav.heritage = "تراثنا";
ar.nav.products = "المنتجات";
ar.nav.blog = "المدونة";
ar.nav.sustainability = "الاستدامة";
ar.nav.wholesale = "البيع بالجملة";
ar.nav.shopNow = "تسوق الآن";
ar.nav.contact = "اتصل بنا";

ar.home.seo.title = "Golden TAAN | شراء سكر النخيل التايلاندي الأصلي | غير مكرر ومنخفض المؤشر الجلايسيمي";
ar.home.seo.description = "أين يمكن شراء سكر النخيل؟ تقدم Golden TAAN كتل ومسحوق وشراب سكر نخيل بالميرا النقي 100% وغير المكرر. بديل سكر نباتي فاخر ومنخفض المؤشر الجلايسيمي.";
ar.home.hero.headline = "Golden TAAN: تجربة سكر النخيل التايلاندي الأصيل";
ar.home.hero.subheadline = "جرّب نكهة الكراميل الطبيعية لبديل السكر الصحي غير المكرر ومنخفض المؤشر الجلايسيمي. اشترِ سكر النخيل عبر الإنترنت اليوم.";
ar.home.hero.cta = "اكتشف قصتنا";

ar.home.trends.headline = "اتجاهات الأغذية ذات العلامات النظيفة 2025: صعود بدائل السكر الصحية";
ar.home.trends.description = "العالم يتبنى مكونات الأكل النظيف. يبحث المستهلكون بنشاط عن المحليات الطبيعية والسكريات النباتية. الطلب على المنتجات الغذائية المستدامة ذات المصادر الغذائية الأخلاقية والشفافة هو اتجاه رئيسي للأغذية ذات العلامات النظيفة لعام 2025.";

ar.home.health.headline = "المحليات ذات المؤشر الجلايسيمي المنخفض: نظرة غذائية معمقة";
ar.home.health.description = "استكشف فوائد السكر غير المكرر. على عكس السكريات المكررة الفارغة من السعرات الحرارية، يوفر Golden TAAN إطلاقًا بطيئًا للطاقة وهو أحد أفضل بدائل السكر الصحية، غني بالمعادن الأساسية مثل البوتاسيوم.";
ar.home.health.insight.title = "✨ رؤية رئيسية: فوائد البوتاسيوم في النظام الغذائي والمحليات منخفضة المؤشر الجلايسيمي";
ar.home.health.insight.text = "تثبت البيانات تفوق السكريات النباتية غير المكررة. محتوى البوتاسيوم العالي بشكل استثنائي في Golden TAAN - وهو إلكتروليت طبيعي حيوي للصحة - يجعله خيارًا متميزًا. مؤشره الجلايسيمي المنخفض يجعله أحد أفضل المحليات الطبيعية لمرضى السكري وأولئك الذين يبحثون عن طاقة مستدامة.";

ar.home.process.headline = "الطعام الحرفي: طرق الطهي التايلاندية التقليدية مقابل التكرير الصناعي";
ar.home.process.description = "العملية التقليدية من المزرعة إلى المائدة هي ما يجعل Golden TAAN مكونًا غذائيًا حيويًا، يختلف تمامًا عن السكر المعالج صناعيًا.";

ar.home.impact.headline = "السكر الصديق للبيئة: نموذج للمنتجات الغذائية المستدامة";
ar.home.impact.description = "اختيار Golden TAAN يدعم نموذج إنتاج سكر متجدد وصديق للبيئة يغذي التنوع البيولوجي، على عكس زراعة قصب السكر الأحادية التي يمكن أن تؤدي إلى تدهور النظم البيئية.";
ar.home.impact.community.headline = "متجذر في منتجات التجارة العادلة";
ar.home.impact.community.description = "التزامنا بمصادر الغذاء الأخلاقية يخلق دورة من الازدهار. باختيار Golden TAAN، فإنك تستثمر في مجتمع الحرفيين التايلانديين لدينا، وتدعم منتجًا تايلانديًا تراثيًا وصادرات مستدامة.";

ar.home.productSection.headline = "سكر النخيل الحرفي لدينا: كتل ومسحوق وشراب";
ar.home.productSection.description = "استكشف مجموعتنا من المكونات الشهية. اشترِ سكر النخيل عبر الإنترنت - البديل الصحي المثالي لأساسيات مطبخك الآسيوي.";

ar.home.faq.headline = "إجابات على أسئلتكم حول سكر نخيل بالميرا";
ar.home.faq.items[0].q = "ما هو سكر نخيل التمر؟";
ar.home.faq.items[0].a = "إنه مُحلي طبيعي نقي وغير مكرر يتم حصاده من رحيق شجرة نخيل بالميرا. يُصنع Golden TAAN بأساليب حرفية تقليدية تحافظ على المعادن ونكهة الكراميل الغنية، مما يجعله بديلاً صحيًا فائقًا للسكر.";
ar.home.faq.items[1].q = "هل Golden TAAN بديل صحي للسكر؟";
ar.home.faq.items[1].a = "نعم. له مؤشر جلايسيمي منخفض (حوالي 35) لإطلاق بطيء للطاقة، مما يجعله سكرًا صديقًا لمرضى السكري. كما أنه غني بالعناصر الغذائية مثل البوتاسيوم والحديد.";
ar.home.faq.items[2].q = "ما الفرق بين سكر النخيل وسكر جوز الهند؟";
ar.home.faq.items[2].a = "يأتيان من أشجار مختلفة. يتمتع Golden TAAN (من نخيل بالميرا) بنكهة بترسكوتش أعمق ومدخنة وعادة ما يكون أغنى بالمعادن. إنه مكون شهي فريد متجذر في التراث التايلاندي.";
ar.home.faq.items[3].q = "كيف يمكنني استخدام هذا السكر النباتي؟";
ar.home.faq.items[3].a = "استخدمه كبديل 1:1 للسكر التقليدي. مسحوق سكر النخيل الخاص بنا مثالي للخبز، والبلورات الخشنة لمسة نهائية مثالية، وشراب سكر النخيل رائع للرش وصنع الصلصات.";
ar.home.faq.items[4].q = "هل سكركم الصديق للبيئة منتج غذائي مستدام؟";
ar.home.faq.items[4].a = "بالتأكيد. يأتي سكرنا من بساتين متنوعة بيولوجيًا، وليس من مزارع أحادية. الأشجار مقاومة للجفاف ولا تتطلب أسمدة كيميائية، ونحن ندعم نموذج زراعة التجارة العادلة.";

ar.productsPage.wholesale.compliance.headline = "التنقل في التجارة العالمية";
ar.productsPage.wholesale.compliance.tabs.usa = "الولايات المتحدة";
ar.productsPage.wholesale.compliance.tabs.eu = "الاتحاد الأوروبي";
ar.productsPage.wholesale.compliance.tabs.japan = "اليابان";
ar.productsPage.wholesale.compliance.tabs.uae = "الإمارات";
ar.productsPage.wholesale.compliance.content.uae = "يجب تسجيل المنتجات في نظام استيراد وتصدير الأغذية (FIRS) التابع لبلدية دبي. شهادة الحلال من جهة معتمدة إلزامية. يجب أن تتضمن الملصقات اسم المنتج والمكونات والوزن الصافي وبلد المنشأ باللغتين العربية والإنجليزية.";
ar.productsPage.wholesale.pricingTable.headers = {
    sku: "SKU",
    product: "المنتج",
    size: "الحجم",
    retailPrice: "سعر التجزئة",
    tier1: "24 - 99 وحدة (صغير)",
    tier2: "100 - 499 وحدة (متوسط)",
    tier3: "500+ وحدة (موزع)"
};

const fr: Translations = JSON.parse(JSON.stringify(en));
fr.home.health.nutrientData = nutrientData.fr;
// --- FRENCH TRANSLATIONS (OPTIMIZED) ---
fr.meta.globalTitle = "Acheter du sucre de palme 100% pur en ligne | Golden TAAN | Faible IG & Durable";
fr.meta.globalDescription = "Achetez du sucre de palme thaïlandais authentique en ligne. Golden TAAN est une marque de luxe de sucre de palmier de Palmyre 100% pur et non raffiné, une alternative saine, végétalienne et à faible IG au sucre.";

fr.nav.home = "Accueil";
fr.nav.ourStory = "Notre Histoire";
fr.nav.heritage = "Héritage";
fr.nav.products = "Produits";
fr.nav.blog = "Blog";
fr.nav.sustainability = "Durabilité";
fr.nav.wholesale = "Vente en Gros & B2B";
fr.nav.shopNow = "Acheter";
fr.nav.contact = "Contactez-nous";

fr.home.seo.title = "Golden TAAN | Acheter du sucre de palme thaïlandais authentique | Non raffiné & Faible IG";
fr.home.seo.description = "Où acheter du sucre de palme ? Golden TAAN propose des blocs, de la poudre et du sirop de sucre de palmier de Palmyre 100% pur et non raffiné. Une alternative végétalienne de luxe au sucre à faible IG.";
fr.home.hero.headline = "Golden TAAN: L'expérience authentique du sucre de palme thaïlandais";
fr.home.hero.subheadline = "Découvrez la saveur naturelle de caramel d'une alternative au sucre vraiment non raffinée, saine et à faible IG. Achetez du sucre de palme en ligne dès aujourd'hui.";
fr.home.hero.cta = "Découvrez Notre Histoire";

fr.home.trends.headline = "Tendances des aliments 'clean label' 2025 : L'essor des alternatives saines au sucre";
fr.home.trends.description = "Le monde adopte des ingrédients pour une alimentation saine. Les consommateurs recherchent activement des édulcorants naturels et des sucres d'origine végétale. La demande pour des produits alimentaires durables avec un approvisionnement alimentaire éthique et transparent est une tendance clé des aliments 'clean label' pour 2025.";

fr.home.health.headline = "Édulcorants à faible IG : une analyse nutritionnelle approfondie";
fr.home.health.description = "Explorez les avantages du sucre non raffiné. Contrairement aux sucres raffinés à calories vides, Golden TAAN fournit une libération lente d'énergie et est l'une des meilleures alternatives saines au sucre, riche en minéraux essentiels comme le potassium.";
fr.home.health.insight.title = "✨ Idée clé : Bienfaits du potassium dans l'alimentation et édulcorants à faible IG";
fr.home.health.insight.text = "Les données prouvent la supériorité des sucres d'origine végétale non raffinés. La teneur exceptionnellement élevée en potassium de Golden TAAN - un électrolyte naturel vital pour la santé - en fait un choix remarquable. Son faible indice glycémique en fait l'un des meilleurs édulcorants naturels pour les diabétiques et ceux qui recherchent une énergie durable.";

fr.home.process.headline = "Alimentation artisanale : Méthodes de cuisson traditionnelles thaïlandaises vs. raffinage industriel";
fr.home.process.description = "Le processus traditionnel de la ferme à la table est ce qui fait de Golden TAAN un ingrédient alimentaire complet et vivant, à des lieues du sucre transformé industriellement.";

fr.home.impact.headline = "Sucre écologique : Un modèle pour des produits alimentaires durables";
fr.home.impact.description = "Choisir Golden TAAN soutient un modèle de production de sucre régénératif et écologique qui nourrit la biodiversité, contrairement aux monocultures de canne à sucre qui peuvent dégrader les écosystèmes.";
fr.home.impact.community.headline = "Ancré dans les produits du commerce équitable";
fr.home.impact.community.description = "Notre engagement envers un approvisionnement alimentaire éthique crée un cycle de prospérité. En choisissant Golden TAAN, vous investissez dans notre communauté d'artisans thaïlandais, soutenant un produit thaïlandais patrimonial et des exportations durables.";

fr.home.productSection.headline = "Notre sucre de palme artisanal : Blocs, Poudre & Sirop";
fr.home.productSection.description = "Explorez notre gamme d'ingrédients gourmands. Achetez du sucre de palme en ligne — l'alternative saine parfaite pour vos essentiels de garde-manger asiatique.";

fr.home.faq.headline = "Vos questions sur le sucre de palmier de Palmyre répondues";
fr.home.faq.items[0].q = "Qu'est-ce que le sucre de toddy palm ?";
fr.home.faq.items[0].a = "C'est un édulcorant naturel pur et non raffiné récolté à partir du nectar du palmier de Palmyre. Golden TAAN est fabriqué avec des méthodes artisanales traditionnelles qui préservent les minéraux et une saveur riche de caramel, ce qui en fait une alternative saine supérieure au sucre.";
fr.home.faq.items[1].q = "Golden TAAN est-il une alternative saine au sucre ?";
// FIX: Corrected corrupted translation string and completed the FAQ section.
fr.home.faq.items[1].a = "Oui. Il a un faible indice glycémique (IG ~35) pour une libération lente d'énergie, ce qui en fait un sucre adapté aux diabétiques. Il est également riche en nutriments comme le potassium et le fer, contrairement aux sucres à 'calories vides'.";
fr.home.faq.items[2].q = "Quelle est la différence entre le sucre de palme et le sucre de coco ?";
fr.home.faq.items[2].a = "Ils proviennent d'arbres différents. Le Golden TAAN (du palmier de Palmyre) a une saveur de caramel au beurre plus profonde et fumée et est généralement plus riche en minéraux. C'est un ingrédient gastronomique unique ancré dans le patrimoine thaïlandais.";
fr.home.faq.items[3].q = "Comment puis-je utiliser ce sucre végétal ?";
fr.home.faq.items[3].a = "Utilisez-le en remplacement 1:1 du sucre conventionnel. Notre poudre de sucre de palme est idéale pour la pâtisserie, les cristaux grossiers sont une touche finale parfaite et le sirop de sucre de palme est excellent pour arroser et faire des glaçages.";
fr.home.faq.items[4].q = "Votre sucre écologique est-il un produit alimentaire durable ?";
fr.home.faq.items[4].a = "Absolument. Notre sucre provient de bosquets biodiversifiés, et non de plantations de monoculture. Les arbres sont résistants à la sécheresse, ne nécessitent aucun engrais chimique, et nous soutenons un modèle agricole de commerce équitable.";

const ko: Translations = JSON.parse(JSON.stringify(en));
ko.home.health.nutrientData = nutrientData.ko;
// --- KOREAN TRANSLATIONS (OPTIMIZED) ---
ko.meta.globalTitle = "100% 순수 팜 슈가 온라인 구매 | Golden TAAN | 저GI 및 지속 가능";
ko.meta.globalDescription = "정통 태국 팜 슈가를 온라인으로 구매하세요. Golden TAAN은 100% 순수, 비정제 팔미라 팜 슈가 프리미엄 브랜드로, 저GI, 비건, 건강한 설탕 대안입니다.";
ko.nav.home = "홈";
ko.nav.ourStory = "우리의 이야기";
ko.nav.heritage = "유산";
ko.nav.products = "제품";
ko.nav.blog = "블로그";
ko.nav.sustainability = "지속가능성";
ko.nav.wholesale = "도매 및 B2B";
ko.nav.shopNow = "지금 쇼핑하기";
ko.nav.contact = "문의하기";


const nl: Translations = JSON.parse(JSON.stringify(en));
nl.home.health.nutrientData = nutrientData.nl;
// --- DUTCH TRANSLATIONS (OPTIMIZED) ---
nl.meta.globalTitle = "Koop 100% pure palmsuiker online | Golden TAAN | Lage GI & Duurzaam";
nl.meta.globalDescription = "Koop authentieke Thaise palmsuiker online. Golden TAAN is een premium merk van 100% pure, ongeraffineerde palmyra palmsuiker, een lage GI, veganistisch en gezond suikeralternatief.";
nl.nav.home = "Home";
nl.nav.ourStory = "Ons Verhaal";
nl.nav.heritage = "Erfgoed";
nl.nav.products = "Producten";
nl.nav.blog = "Blog";
nl.nav.sustainability = "Duurzaamheid";
nl.nav.wholesale = "Groothandel & B2B";
nl.nav.shopNow = "Nu Kopen";
nl.nav.contact = "Contact";

export const siteContent: Record<Language, Translations> = {
    en,
    th,
    ja,
    zh,
    ar,
    fr,
    ko,
    nl,
};
