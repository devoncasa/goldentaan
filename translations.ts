

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
    ]
}


const en: Translations = {
    metaTitle: "Golden Taan | Authentic Palmyra Palm Sugar - Sustainably Sourced",
    metaDescription: "Discover Golden Taan, the premium, low-GI Palmyra Palm Sugar. 100% pure, unrefined, and sustainably sourced from our family farms in Ratchaburi, Thailand.",
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
            title: "Our Heritage: The Story of Golden Taan",
            subtitle: "Explore the legacy, the craft, and the commitment behind every golden crystal."
        },
        sections: [
            {
                title: "The Golden Taan Legacy",
                subtitle: "From a Fading Tradition to a Global Choice",
                content: "Our story begins in the fertile plains of Ratchaburi, Thailand, where generations of our family have lived in harmony with the majestic Palmyra palm. For centuries, this 'tree of life' has gifted our ancestors with its sweet, life-giving nectar—a pure, unrefined sugar known as 'Nam Taan Tanod'.\n\nIn recent decades, the rise of industrial white sugar and the demanding labor of traditional farming led to a decline in this ancient craft. The 'Golden Gold' of Thailand was fading. We saw a legacy at risk of being forgotten, a pure taste being replaced by an empty sweetness.\n\nGolden Taan was born from a mission: to revive this fading tradition and share its wholesome goodness with the world. We combine time-honored, artisanal methods with modern quality standards to bring you a sweetener that is not only delicious but also deeply nourishing and ethically sourced."
            },
            {
                title: "The Palmyra Palm: The Tree of Life",
                subtitle: "Understanding the Source of Our 'Golden Gold'",
                content: "The foundation of our sugar's quality is the raw sap, or nam tan sod (น้ำตาลสด), which is significantly influenced by Phetchaburi's unique environment, its 'terroir'.\n\n• Soil Composition: The region's soil is characterized by high salinity and rich mineral content due to its proximity to the coast of the Gulf of Thailand. This specific soil profile directly impacts the sap, imparting a subtle, complex minerality and a less intensely sweet flavor compared to palm sap from other regions. It creates a taste that is often described as nuan (นวล), meaning mellow and rounded.\n\n[image: map-of-ratchaburi-terroir.png]\n\n• Palm Variety & Harvesting: Phetchaburi is dominated by a specific variety of the Palmyra palm (Borassus flabellifer) perfectly adapted to the local climate. The collection process is a meticulous craft performed by harvesters known as khon khuen tan (คนขึ้นตาล), who climb the tall palms daily. Crucially, small pieces of wood from the kayam tree (พะยอม) are placed in the bamboo collection tubes. The kayam wood contains natural tannins that act as a preservative, preventing the sap from fermenting and maintaining its freshness without chemical additives."
            },
            {
                title: "The Art of the Harvest",
                subtitle: "Generations of Skill in Every Crystal",
                content: "The transformation of sap into sugar is a race against time and a testament to generations of skill. This is where traditional methods create a distinctly superior product.\n\n• The 'Tao Tan' Wok System: The sap is simmered in large, open woks over a traditional clay stove fueled by palm wood. The wide surface area allows for rapid evaporation, and the artisan's ability to control the fire is paramount. Unlike industrial methods that use high, direct heat, the slow simmering process gently caramelizes the sugars without burning them, developing a deep, complex flavor.\n\n[image: caramelization-diagram.png]\n\n• Meticulous Craft: As the sap heats, the artisan continuously skims off impurities. This crucial step results in a cleaner, more refined final product. The goal is to reduce the sap until it reaches a specific viscosity and color—a deep, golden amber. This process can take several hours, and the artisan relies on sensory cues—sight, smell, and sound—to know precisely when it's ready.\n\n• No Additives or Refinement: True Phetchaburi palm sugar is 100% pure palm sap. There is no addition of white cane sugar, molasses, or artificial coloring. The final product is unrefined, meaning it retains the natural vitamins and minerals present in the sap, contributing to its complex flavor and nutritional profile."
            },
            {
                title: "Our Commitment",
                subtitle: "Sweetness That Nurtures People and Planet",
                content: "Choosing Golden Taan means investing in a cycle of prosperity that starts with the tree and flows to farming families. We are built on a foundation of environmental, social, and ethical governance.\n\n• Ecological Sustainability: Palmyra palm farming is inherently regenerative. The trees are powerful carbon sinks, are incredibly drought-resistant, and thrive in biodiverse groves without chemical pesticides or fertilizers. They are a stark contrast to water-intensive, soil-degrading sugarcane monocultures.\n\n[image: palm-vs-cane-sustainability-graphic.png]\n\n• Social Empowerment: We guarantee fair, above-market prices to our farmers, ensuring a stable and dignified income. We actively work to preserve their traditional knowledge and reinvest a portion of our profits into community development, funding education and local infrastructure.\n\n• Ethical Governance: We offer complete transparency and traceability from palm to pantry. We have a zero-tolerance policy for forced or child labor and are committed to inclusive growth where our farming partners have a voice in our business decisions."
            }
        ]
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
        insights: { title: "Market Insights & Opportunities", text: "The global demand for natural, low-GI, and ethically sourced sweeteners is growing exponentially. Golden Taan is perfectly positioned to meet this demand, offering a unique product with a compelling story that resonates with health-conscious consumers and premium brands." },
        pricing: {
            title: "Tiered Wholesale Pricing (FOB Bangkok)",
            text: "We offer competitive tiered pricing based on volume to support businesses of all sizes, from small artisanal bakeries to large-scale food manufacturers. Prices are listed in USD per kg.",
            table: {
                headers: { productLine: "Product Line", sku: "SKU / Packaging", tier1: "Tier 1 (100-499kg)", tier2: "Tier 2 (500-999kg)", tier3: "Tier 3 (1-5 MT)", tier4: "Tier 4 (5+ MT)" },
                data: [
                    { productLine: "Coarse Crystals", skus: [{ name: "150g Jar", tier1: "$15.12", tier2: "$13.50", tier3: "$11.80", tier4: "Quote" }, { name: "10kg Bulk Bag", tier1: "$14.38", tier2: "$12.90", tier3: "$11.20", tier4: "Quote" }] },
                    { productLine: "Fine Powder", skus: [{ name: "150g Jar", tier1: "$16.90", tier2: "$15.10", tier3: "$13.20", tier4: "Quote" }, { name: "10kg Bulk Bag", tier1: "$16.30", tier2: "$14.60", tier3: "$12.80", tier4: "Quote" }] },
                    { productLine: "Syrup", skus: [{ name: "150ml Bottle", tier1: "$17.86", tier2: "$15.90", tier3: "$13.90", tier4: "Quote" }, { name: "20L Jerry Can", tier1: "$17.29", tier2: "$15.40", tier3: "$13.50", tier4: "Quote" }] }
                ],
                note: "Prices are indicative and subject to change. Please request a formal quote for the latest pricing."
            }
        },
        logistics: {
            title: "Logistics & Export",
            packaging: { title: "Custom & White-Label Packaging", options: ["Retail-ready packaging with your branding.", "Bulk packaging for industrial use (e.g., 10kg, 20kg bags).", "Custom packaging solutions to meet your specific needs."] },
            export: { title: "Global Export Services", services: ["Full logistical support from our factory to your port.", "Assistance with all necessary export documentation (e.g., Certificate of Origin, Health Certificate).", "Partnerships with reliable global freight forwarders."] }
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
            successMessage: "Thank you for your inquiry! We will get back to you within 2 business days."
        },
    },
    shop: {
        header: { title: "Shop Now", subtitle: "Bring the authentic taste of Golden Taan into your home. Currently shipping worldwide from Thailand." },
        emptyCart: { title: "Your Cart is Empty", text: "Explore our products and add something sweet to your life.", cta: "Browse Products" },
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
        header: { title: "The Golden Blog", subtitle: "Recipes, stories, and insights from the world of Palmyra palm sugar." },
        readMore: "Read More",
        back: "Back to Blog List",
        posts: [
             {
                id: 2,
                title: "The Ultimate Gluten-Free Brownies with Golden Taan",
                coverImage: "https://via.placeholder.com/800x600.png?text=Gluten-Free+Brownies",
                introduction: "Discover a brownie recipe so rich, fudgy, and decadent, you'd never guess it's gluten-free. The secret? The deep, caramel notes of Golden Taan palm sugar.",
                content: [
                    { type: 'paragraph', text: 'For years, the quest for the perfect gluten-free brownie has haunted bakers. Many recipes end up dry, crumbly, or lacking that deep chocolatey flavor. This recipe changes everything. By using a blend of almond flour and the unique properties of Golden Taan Coarse Crystals, we achieve a texture and taste that rivals any traditional brownie.' },
                    { type: 'heading', text: 'Why Golden Taan Makes a Difference' },
                    { type: 'paragraph', text: 'Unlike refined white sugar, Golden Taan adds more than just sweetness. Its natural molasses content contributes to a moister, chewier texture. The smoky, butterscotch flavor profile elevates the chocolate, creating a complex and sophisticated dessert. The Coarse Crystals also create delightful little pockets of caramelization as they bake.' },
                    { type: 'image', src: 'https://via.placeholder.com/600x400.png?text=Ingredients+for+Brownies', alt: 'Ingredients laid out for gluten-free brownies, featuring Golden Taan sugar.' },
                    { type: 'heading', text: 'Ingredients' },
                    { type: 'paragraph', text: '• 1 cup (200g) Golden Taan Coarse Crystals\n• 1/2 cup (113g) unsalted butter, melted\n• 2 large eggs\n• 1 teaspoon vanilla extract\n• 3/4 cup (85g) unsweetened cocoa powder\n• 1/2 cup (60g) almond flour\n• 1/4 teaspoon baking soda\n• 1/2 cup chocolate chips' },
                    { type: 'heading', text: 'Instructions' },
                    { type: 'paragraph', text: '1. Preheat your oven to 350°F (175°C) and grease an 8x8 inch baking pan.\n2. In a large bowl, whisk together the melted butter and Golden Taan sugar until well combined.\n3. Add the eggs and vanilla extract, beating until the mixture is smooth.\n4. Sift in the cocoa powder, almond flour, and baking soda. Fold gently until just combined.\n5. Stir in the chocolate chips.\n6. Pour the batter into the prepared pan and bake for 20-25 minutes, or until a toothpick inserted into the center comes out with moist crumbs.\n7. Let cool completely before slicing. Enjoy the richness!' }
                ]
            },
            {
                id: 4,
                title: "Savory & Sweet: Golden Taan Glazed Salmon",
                coverImage: "https://via.placeholder.com/800x600.png?text=Glazed+Salmon",
                introduction: "Elevate a simple salmon dinner into a gourmet experience with this incredible sweet and savory glaze, featuring the versatile Golden Taan Syrup.",
                content: [
                    { type: 'paragraph', text: 'This recipe is a perfect weeknight meal that tastes like it came from a high-end restaurant. The glaze is incredibly simple but packs a huge flavor punch. The Golden Taan Syrup caramelizes beautifully on the salmon, creating a slightly crispy, sweet crust that pairs perfectly with the rich, flaky fish.' },
                    { type: 'heading', text: 'The Magic of the Glaze' },
                    { type: 'paragraph', text: 'The glaze combines four simple ingredients: Golden Taan Syrup, soy sauce, fresh ginger, and garlic. The syrup provides a complex, toffee-like sweetness that is much more interesting than honey or maple syrup. It balances the saltiness of the soy sauce and the spiciness of the ginger and garlic, creating a perfectly harmonious flavor profile.' },
                    { type: 'image', src: 'https://via.placeholder.com/600x400.png?text=Salmon+Glaze+Ingredients', alt: 'Ingredients for the salmon glaze, including Golden Taan Syrup.' },
                    { type: 'heading', text: 'Ingredients' },
                    { type: 'paragraph', text: '• 2 salmon fillets (6oz each)\n• 2 tbsp Golden Taan Syrup\n• 2 tbsp soy sauce\n• 1 tsp grated fresh ginger\n• 1 clove garlic, minced\n• Salt and pepper to taste\n• 1 tbsp olive oil' },
                    { type: 'heading', text: 'Instructions' },
                    { type: 'paragraph', text: '1. Preheat your oven to 400°F (200°C).\n2. In a small bowl, whisk together the Golden Taan Syrup, soy sauce, ginger, and garlic.\n3. Pat the salmon fillets dry and season with salt and pepper.\n4. Heat the olive oil in an oven-safe skillet over medium-high heat. Place the salmon skin-side up and sear for 2-3 minutes until golden.\n5. Flip the salmon. Pour the glaze over the fillets.\n6. Transfer the skillet to the oven and bake for 5-7 minutes, or until the salmon is cooked through and the glaze is bubbly and caramelized.\n7. Serve immediately with a side of steamed rice and vegetables.' }
                ]
            },
            {
                id: 5,
                title: "A Healthier Thai Iced Tea with Golden Taan Syrup",
                coverImage: "https://via.placeholder.com/800x600.png?text=Thai+Iced+Tea",
                introduction: "Recreate the classic Thai street-food favorite with a wholesome twist. Our Golden Taan Syrup adds a complex, caramel depth that refined sugar just can't match.",
                content: [
                    { type: 'paragraph', text: "Thai Iced Tea, or 'Cha Yen', is a beloved beverage known for its creamy texture and sweet, aromatic flavor. Traditionally, it's made with a potent brew of black tea, sweetened condensed milk, and a hefty amount of white sugar. Our version captures all the authentic flavor while upgrading the sweetener for a richer, more nuanced taste." },
                    { type: 'heading', text: "The Golden Taan Difference" },
                    { type: 'paragraph', text: "Swapping out refined sugar for Golden Taan Syrup isn't just a healthier choice; it's a flavor enhancer. The syrup's natural toffee and smoke notes complement the spices in the tea (like star anise and cardamom), creating a beverage that's both refreshing and complex." },
                    { type: 'image', src: 'https://via.placeholder.com/600x400.png?text=Making+Thai+Tea', alt: 'Pouring milk into a glass of Thai tea.' },
                    { type: 'heading', text: 'Ingredients (for 2 servings)' },
                    { type: 'paragraph', text: "• 2 cups strong-brewed Thai black tea, cooled\n• 4 tbsp Golden Taan Syrup (or to taste)\n• 4 tbsp evaporated milk (or coconut milk for a vegan version)\n• Ice" },
                    { type: 'heading', text: 'Instructions' },
                    { type: 'paragraph', text: "1. Brew your Thai tea according to package directions and let it cool completely.\n2. Fill two tall glasses with ice.\n3. Pour 1 cup of the cooled tea into each glass.\n4. Add 2 tablespoons of Golden Taan Syrup to each glass and stir well until it dissolves.\n5. Gently pour 2 tablespoons of evaporated milk over the top of each tea. It will create a beautiful swirling effect.\n6. Serve immediately with a straw and enjoy the authentic taste of Thailand." }
                ]
            },
            {
                id: 6,
                title: "The Palmyra Palm: Southeast Asia's 'Tree of Life'",
                coverImage: "https://via.placeholder.com/800x600.png?text=Palmyra+Palm+Tree",
                introduction: "Explore the incredible story of the Palmyra palm, a tree that has sustained communities for centuries with its versatile gifts, earning it the name 'Tree of Life'.",
                content: [
                    { type: 'paragraph', text: "The Palmyra palm (Borassus flabellifer) is more than just the source of our delicious sugar; it's a cornerstone of rural life in Thailand and across Southeast Asia. For millennia, every single part of this remarkable tree has been used, embodying a true zero-waste philosophy." },
                    { type: 'heading', text: 'A Cornucopia of Uses' },
                    { type: 'paragraph', text: "• The Sap: Harvested to create our Golden Taan sugar, fresh sap (Nam Taan Sod) is also enjoyed as a refreshing drink, and can be fermented into a toddy or vinegar.\n• The Fruit: The tender, jelly-like seeds of the young fruit are a delicacy, while the fibrous outer layer of the ripe fruit can be cooked into sweets.\n• The Leaves: Strong and fan-like, the leaves are used for thatching roofs, weaving baskets, mats, hats, and even as traditional writing material (manuscripts).\n• The Trunk: The sturdy, fibrous wood from the trunk is a valuable, termite-resistant building material for homes and furniture." },
                    { type: 'image', src: 'https://via.placeholder.com/600x400.png?text=Woven+Palm+Leaves', alt: 'Hand-woven baskets made from Palmyra palm leaves.' },
                    { type: 'heading', text: 'Cultural & Ecological Significance' },
                    { type: 'paragraph', text: "The Palmyra palm is deeply woven into the cultural fabric of the region, symbolizing resilience and self-sufficiency. Ecologically, these trees are vital. They prevent soil erosion, require very little water, and thrive without pesticides, making them a pillar of sustainable agriculture. By supporting products from the Palmyra palm, you help preserve this incredible natural and cultural resource." }
                ]
            },
            {
                id: 7,
                title: "Baking for Blood Sugar Balance: A Guide to Low-GI Sweeteners",
                coverImage: "https://via.placeholder.com/800x600.png?text=Low-GI+Baking",
                introduction: "Managing blood sugar doesn't mean giving up delicious baked goods. Learn how Golden Taan Powder can be your secret weapon for healthier treats that don't compromise on taste.",
                content: [
                    { type: 'paragraph', text: "For those mindful of their blood sugar, baking can seem like a minefield of high-glycemic ingredients. But with the right sweetener, you can create treats that are both delicious and gentler on your body's energy levels. This is where low-glycemic index (GI) sweeteners like Golden Taan come in." },
                    { type: 'heading', text: 'What is the Glycemic Index?' },
                    { type: 'paragraph', text: "The GI is a scale from 0 to 100 that ranks carbohydrate-containing foods by how much they raise blood sugar levels. Pure glucose is 100. Refined white sugar has a GI of around 65, causing a rapid spike and crash. Golden Taan, with a GI of only ~35, is considered a low-GI food, meaning it's digested more slowly, leading to a gradual rise in blood sugar and sustained energy." },
                    { type: 'image', src: 'https://via.placeholder.com/600x400.png?text=Healthy+Muffins', alt: 'A batch of freshly baked healthy muffins made with Golden Taan.' },
                    { type: 'heading', text: 'Simple Low-GI Oat Muffin Recipe' },
                    { type: 'paragraph', text: "This recipe uses Golden Taan Powder and whole grains for a delicious, satisfying, and blood-sugar-friendly snack.\n• 1.5 cups rolled oats\n• 1/2 cup Golden Taan Powder\n• 1 tsp baking powder\n• 1/2 tsp cinnamon\n• 1 cup milk (or dairy-free alternative)\n• 1 egg\n• 1/4 cup melted coconut oil\n• 1 tsp vanilla extract" },
                    { type: 'heading', text: 'Instructions' },
                    { type: 'paragraph', text: "1. Preheat oven to 375°F (190°C) and line a muffin tin.\n2. In a bowl, mix oats, Golden Taan Powder, baking powder, and cinnamon.\n3. In another bowl, whisk together milk, egg, coconut oil, and vanilla.\n4. Pour the wet ingredients into the dry ingredients and stir until just combined.\n5. Spoon batter into the muffin tin and bake for 18-20 minutes.\n6. Enjoy a guilt-free treat that will keep you feeling full and energized." }
                ]
            },
            {
                id: 8,
                title: "Craft Cocktails: The Mixologist's Guide to Golden Taan",
                coverImage: "https://via.placeholder.com/800x600.png?text=Craft+Cocktails",
                introduction: "Move beyond simple syrup. The smoky, caramel notes of Golden Taan Syrup can add incredible complexity and sophistication to your favorite cocktails.",
                content: [
                    { type: 'paragraph', text: "A great cocktail is all about balance. The sweetener you choose plays a crucial role, and Golden Taan Syrup offers a flavor profile that plain sugar syrup can't replicate. Its rich, butterscotch notes and hint of smoke can elevate classic drinks and inspire new creations." },
                    { type: 'image', src: 'https://via.placeholder.com/600x400.png?text=Palmyra+Old+Fashioned', alt: 'A sophisticated Old Fashioned cocktail made with Golden Taan.' },
                    { type: 'heading', text: 'Recipe: The Palmyra Old Fashioned' },
                    { type: 'paragraph', text: "A smoky, sophisticated twist on a timeless classic.\n• 2 oz Bourbon or Rye Whiskey\n• 1/4 oz Golden Taan Syrup\n• 2 dashes Angostura bitters\n• Orange peel for garnish" },
                    { type: 'heading', text: 'Instructions' },
                    { type: 'paragraph', text: "1. Combine the Golden Taan Syrup and bitters in a mixing glass.\n2. Add the whiskey and fill the glass with ice.\n3. Stir until well-chilled (about 30 seconds).\n4. Strain into a rocks glass over a large ice cube.\n5. Express the oils from an orange peel over the drink and drop it in as garnish." }
                ]
            },
            {
                id: 9,
                title: "A Day in the Life of a Palm Sugar Farmer",
                coverImage: "https://via.placeholder.com/800x600.png?text=Palm+Sugar+Farmer",
                introduction: "Meet the artisans behind our sugar. A journey into the daily craft, rhythm, and dedication required to create Golden Taan.",
                content: [
                    { type: 'paragraph', text: "The creation of authentic palm sugar is not a factory process; it's a daily ritual guided by nature and tradition. It requires strength, patience, and an intimate knowledge of the Palmyra palms." },
                    { type: 'heading', text: 'The Morning Harvest (5 AM)' },
                    { type: 'paragraph', text: "The day begins before dawn. Farmers, known as 'khon khuen tan', expertly scale the towering palms, some over 80 feet tall. They collect the bamboo cylinders filled with sweet sap that has been dripping overnight and carefully slice the palm blossom to encourage the flow for the day." },
                    { type: 'image', src: 'https://via.placeholder.com/600x400.png?text=Climbing+the+Palm', alt: 'A farmer climbing a Palmyra palm tree at sunrise.' },
                    { type: 'heading', text: 'The Slow Simmer (7 AM - 12 PM)' },
                    { type: 'paragraph', text: "The collected sap is immediately brought to a wok over a wood fire. For the next several hours, it is simmered slowly, never boiled. The farmer gently stirs, skimming impurities and watching as the watery sap thickens into a golden, fragrant syrup. This step is crucial for developing the deep caramel flavor." },
                    { type: 'image', src: 'https://via.placeholder.com/600x400.png?text=Simmering+the+Sap', alt: 'Sap being slow-cooked in a large wok over a wood fire.' },
                    { type: 'heading', text: 'The Afternoon Harvest & Cooling (4 PM)' },
                    { type: 'paragraph', text: "In the late afternoon, the farmers climb the trees again to collect the day's sap. Meanwhile, the thickened syrup from the morning is poured into molds or containers to cool and crystallize naturally. It is this dedication, day in and day out, that ensures the quality and authenticity of every batch of Golden Taan." }
                ]
            },
            {
                id: 10,
                title: "Sweet Sustainability: How Palmyra Farming Nurtures the Planet",
                coverImage: "https://via.placeholder.com/800x600.png?text=Sustainable+Farming",
                introduction: "Discover how choosing Golden Taan is a vote for a healthier planet. We explore the eco-friendly benefits of traditional Palmyra palm farming compared to industrial agriculture.",
                content: [
                    { type: 'paragraph', text: "In a world searching for sustainable solutions, the ancient practice of Palmyra palm farming offers a powerful model. It's a form of agriculture that works in harmony with nature, rather than against it." },
                    { type: 'heading', text: 'Water-Wise and Drought-Resistant' },
                    { type: 'paragraph', text: "Unlike thirsty crops like sugarcane that require massive amounts of irrigation, Palmyra palms are incredibly drought-resistant. They thrive in arid conditions and rely almost entirely on natural rainfall, conserving precious water resources." },
                    { type: 'heading', text: 'No Monoculture, No Pesticides' },
                    { type: 'paragraph', text: "Golden Taan comes from palms that grow in biodiverse groves, not in destructive monoculture plantations. These trees are naturally hardy and require no chemical fertilizers or pesticides, protecting the soil and surrounding ecosystem." },
                    { type: 'image', src: 'https://via.placeholder.com/600x400.png?text=Biodiverse+Palm+Grove', alt: 'A natural, biodiverse grove of Palmyra palm trees.' },
                    { type: 'heading', text: 'A Carbon Sink' },
                    { type: 'paragraph', text: "The trees themselves are not cut down for harvest. A single Palmyra palm can be productive for over 40 years, acting as a 'carbon sink' by absorbing CO2 from the atmosphere throughout its long life. Choosing Golden Taan supports an agricultural system that is inherently regenerative and good for the Earth." }
                ]
            },
            {
                id: 11,
                title: "The Ultimate Cheese Board Companion: Golden Taan Pairings",
                coverImage: "https://via.placeholder.com/800x600.png?text=Cheese+Board",
                introduction: "Unlock a new level of flavor on your next cheese and charcuterie board. The rich, complex notes of Golden Taan create surprising and delicious pairings.",
                content: [
                    { type: 'paragraph', text: "While honey and fruit preserves are common on cheese boards, Golden Taan offers a unique alternative that can elevate your pairings from ordinary to extraordinary." },
                    { type: 'heading', text: 'How to Pair' },
                    { type: 'paragraph', text: "The key is to match the intensity. The smoky, caramel flavor of Golden Taan stands up beautifully to strong, aged, and salty cheeses." },
                    { type: 'image', src: 'https://via.placeholder.com/600x400.png?text=Cheese+and+Syrup', alt: 'Golden Taan syrup being drizzled over a piece of cheese.' },
                    { type: 'heading', text: 'Perfect Pairings' },
                    { type: 'paragraph', text: "• Sharp Aged Cheddar: Drizzle a little Golden Taan Syrup over a slice of sharp cheddar. The sweetness cuts through the saltiness and complements the cheese's nutty notes.\n• Creamy Brie or Camembert: Sprinkle Golden Taan Coarse Crystals over a wheel of baked brie. The crystals add a delightful crunch and caramel flavor to the gooey cheese.\n• Salty Blue Cheese: A classic pairing for sweet things, blue cheese like Stilton or Gorgonzola is magnificent with a drizzle of our syrup. The sweetness balances the cheese's pungent funk perfectly.\n• Hard Cheeses like Parmesan or Manchego: The crystals offer a textural contrast and a sweet counterpoint to the saltiness of these hard, aged cheeses." }
                ]
            },
            {
                id: 12,
                title: "DIY Beauty: A Rejuvenating Face Scrub with Golden Taan",
                coverImage: "https://via.placeholder.com/800x600.png?text=DIY+Face+Scrub",
                introduction: "Feed your skin with the natural goodness of Golden Taan. This simple, 3-ingredient face scrub gently exfoliates, brightens, and nourishes.",
                content: [
                    { type: 'paragraph', text: "Why use harsh chemical exfoliants when you can create a gentle, effective, and delicious-smelling scrub right in your own kitchen? The natural texture of Golden Taan Coarse Crystals makes for a perfect, skin-softening exfoliant." },
                    { type: 'heading', text: 'The Power of Natural Ingredients' },
                    { type: 'paragraph', text: "• Golden Taan Coarse Crystals: The fine, irregular crystals gently buff away dead skin cells without being too abrasive. Palm sugar also contains natural glycolic acid, which helps to promote cell turnover for brighter skin.\n• Coconut Oil: A fantastic natural moisturizer that leaves skin feeling soft and hydrated.\n• Raw Honey: Naturally antibacterial and anti-inflammatory, honey is great for soothing skin and locking in moisture." },
                    { type: 'image', src: 'https://via.placeholder.com/600x400.png?text=Scrub+Ingredients', alt: 'Ingredients for the DIY face scrub in small bowls.' },
                    { type: 'heading', text: 'Simple Recipe' },
                    { type: 'paragraph', text: "• 2 tablespoons Golden Taan Coarse Crystals\n• 1 tablespoon melted coconut oil\n• 1 teaspoon raw honey" },
                    { type: 'heading', text: 'Instructions' },
                    { type: 'paragraph', text: "1. In a small bowl, combine all ingredients and mix well.\n2. To use, take a small amount and gently massage onto damp skin in circular motions, avoiding the eye area.\n3. Rinse thoroughly with warm water and pat your face dry.\n4. Enjoy your smooth, glowing skin! (Note: As with any new skincare product, do a patch test first.)" }
                ]
            },
            {
                id: 13,
                title: "The Easiest Vegan Caramel Sauce You'll Ever Make",
                coverImage: "https://via.placeholder.com/800x600.png?text=Vegan+Caramel",
                introduction: "Creamy, decadent, and completely dairy-free. Golden Taan Syrup and full-fat coconut milk are all you need for a luscious vegan caramel sauce.",
                content: [
                    { type: 'paragraph', text: "Craving a rich caramel sauce for your ice cream, apples, or coffee, but want to keep it plant-based? This two-ingredient recipe is a game-changer. The inherent caramel flavor of Golden Taan Syrup makes it incredibly easy to achieve a deep, authentic taste without any dairy." },
                    { type: 'heading', text: 'Why This Recipe Works' },
                    { type: 'paragraph', text: "Traditional caramel requires carefully cooking sugar until it amberizes, then adding cream and butter. It can be tricky to get right. By using Golden Taan Syrup, which already has those complex caramel notes, and full-fat coconut milk for creaminess, you skip the difficult steps and get a foolproof, delicious result every time." },
                    { type: 'image', src: 'https://via.placeholder.com/600x400.png?text=Sauce+in+a+Jar', alt: 'A jar of creamy vegan caramel sauce with a spoon.' },
                    { type: 'heading', text: 'The 2-Ingredient Recipe' },
                    { type: 'paragraph', text: "• 1 cup full-fat coconut milk (from a can)\n• 1/2 cup Golden Taan Syrup\n• (Optional: a pinch of sea salt and 1/2 tsp vanilla extract)" },
                    { type: 'heading', text: 'Instructions' },
                    { type: 'paragraph', text: "1. In a small saucepan, combine the coconut milk and Golden Taan Syrup.\n2. Bring to a gentle simmer over medium heat, whisking to combine.\n3. Reduce the heat to low and let it simmer gently for 20-25 minutes, stirring occasionally, until the sauce has thickened and coats the back of a spoon.\n4. Remove from heat and stir in the optional salt and vanilla.\n5. Let the sauce cool. It will thicken further as it cools. Store in an airtight container in the refrigerator for up to two weeks." }
                ]
            },
            {
                id: 14,
                title: "Game-Changing BBQ Sauce with a Golden Taan Kick",
                coverImage: "https://via.placeholder.com/800x600.png?text=BBQ+Sauce",
                introduction: "Get ready for your new favorite BBQ sauce. The smoky depth of Golden Taan Syrup creates a sauce that's perfectly balanced between sweet, tangy, and savory.",
                content: [
                    { type: 'paragraph', text: "A great homemade BBQ sauce is a point of pride for any home cook. This recipe swaps out the usual brown sugar or molasses for Golden Taan Syrup, and the result is a sauce with incredible depth and a sophisticated, smoky sweetness." },
                    { type: 'heading', text: 'The Secret Ingredient' },
                    { type: 'paragraph', text: "Golden Taan Syrup's natural smoky and toffee-like notes are a perfect match for the tangy, savory flavors of a classic BBQ sauce. It caramelizes beautifully, creating a fantastic glaze on grilled meats or vegetables." },
                    { type: 'image', src: 'https://via.placeholder.com/600x400.png?text=Grilling+with+Sauce', alt: 'Brushing BBQ sauce onto chicken on a grill.' },
                    { type: 'heading', text: 'Ingredients' },
                    { type: 'paragraph', text: "• 1 cup ketchup\n• 1/2 cup Golden Taan Syrup\n• 1/4 cup apple cider vinegar\n• 2 tbsp soy sauce or tamari\n• 1 tbsp dijon mustard\n• 1 tsp smoked paprika\n• 1/2 tsp garlic powder\n• 1/4 tsp black pepper" },
                    { type: 'heading', text: 'Instructions' },
                    { type: 'paragraph', text: "1. In a medium saucepan, combine all ingredients.\n2. Whisk together until smooth.\n3. Bring the mixture to a simmer over medium heat.\n4. Reduce the heat to low and let it cook for at least 20 minutes, stirring occasionally, to allow the flavors to meld and the sauce to thicken.\n5. Use immediately on ribs, chicken, or burgers, or let it cool and store in an airtight container in the refrigerator for up to a month." }
                ]
            },
            {
                id: 15,
                title: "The Best Sticky Toffee Pudding You've Ever Had",
                coverImage: "https://via.placeholder.com/800x600.png?text=Sticky+Toffee+Pudding",
                introduction: "A British classic gets a Thai upgrade. The rich, butterscotch flavor of Golden Taan takes this beloved, decadent dessert to a whole new level of deliciousness.",
                content: [
                    { type: 'paragraph', text: "Sticky toffee pudding is the ultimate comfort dessert: a moist, date-sweetened sponge cake drenched in a warm toffee sauce. By using Golden Taan in both the cake and the sauce, we amplify the deep, caramel flavors that make this pudding so irresistible." },
                    { type: 'heading', text: 'For the Pudding' },
                    { type: 'paragraph', text: "• 1 cup chopped dates\n• 1 tsp baking soda\n• 1 cup boiling water\n• 1/4 cup unsalted butter, softened\n• 3/4 cup Golden Taan Powder\n• 2 large eggs\n• 1 1/2 cups all-purpose flour\n• 1 tsp baking powder" },
                    { type: 'heading', text: 'For the Toffee Sauce' },
                    { type: 'paragraph', text: "• 1/2 cup unsalted butter\n• 1 cup Golden Taan Syrup\n• 1/2 cup heavy cream\n• 1 tsp vanilla extract" },
                    { type: 'image', src: 'https://via.placeholder.com/600x400.png?text=Pudding+with+Sauce', alt: 'A slice of sticky toffee pudding with sauce poured over it.' },
                    { type: 'heading', text: 'Instructions' },
                    { type: 'paragraph', text: "1. Preheat oven to 350°F (175°C). Grease a baking dish.\n2. In a bowl, combine dates and baking soda. Pour boiling water over them and let sit for 15 minutes.\n3. In a separate bowl, cream together the butter and Golden Taan Powder. Beat in the eggs one at a time.\n4. Stir in the flour and baking powder, then fold in the date mixture (including the water).\n5. Pour into the prepared dish and bake for 30-35 minutes.\n6. While the cake bakes, make the sauce: Melt butter in a saucepan, stir in Golden Taan Syrup and bring to a simmer. Cook for 3 minutes, then remove from heat and whisk in the cream and vanilla.\n7. To serve, poke holes in the warm cake and pour over half the sauce. Serve each slice with an extra drizzle of warm sauce." }
                ]
            },
             {
                id: 16,
                title: "From Sap to Syrup: The Alchemical Journey of Golden Taan",
                coverImage: "https://via.placeholder.com/800x600.png?text=Syrup+Making",
                introduction: "Ever wondered how the clear, watery sap from a palm tree transforms into a thick, luxurious syrup? We break down the traditional, time-honored process.",
                content: [
                    { type: 'paragraph', text: 'The creation of Golden Taan Syrup is a beautiful example of slow food alchemy. It is a process of concentration and transformation, relying on patience and the gentle application of heat to turn a simple natural resource into liquid gold.' },
                    { type: 'heading', text: 'Step 1: The Harvest' },
                    { type: 'paragraph', text: "It all begins with the fresh sap, or 'Nam Taan Sod'. This watery liquid is nearly clear and only mildly sweet. It's crucial to begin the simmering process within a few hours of harvesting to prevent natural fermentation." },
                    { type: 'heading', text: 'Step 2: The Slow Simmer' },
                    { type: 'paragraph', text: "The sap is poured into large woks over a carefully controlled wood fire. The key here is 'simmer', not 'boil'. A rolling boil would scorch the sugars, creating a bitter taste. A gentle simmer allows the water to evaporate slowly, concentrating the sugars and minerals." },
                    { type: 'image', src: 'https://via.placeholder.com/600x400.png?text=Simmering+in+Woks', alt: 'A close-up of palm sap simmering in a large wok.' },
                    { type: 'heading', text: 'Step 3: Transformation and Flavor Development' },
                    { type: 'paragraph', text: "As the water content reduces, the magic happens. The sugars begin to caramelize, and the liquid transforms from a pale yellow to a deep, rich amber. The flavor develops from simply sweet to a complex profile of caramel, butterscotch, and a hint of smoke from the wood fire. The artisan knows it's ready not by a timer, but by its viscosity, color, and aroma—a skill passed down through generations." }
                ]
            },
            {
                id: 17,
                title: "The Ancient Sweetener: Palm Sugar in Traditional Thai Medicine",
                coverImage: "https://via.placeholder.com/800x600.png?text=Thai+Medicine",
                introduction: "Beyond the kitchen, Palmyra palm sugar has a long and respected history in Thai traditional medicine for its unique, balancing properties.",
                content: [
                    { type: 'paragraph', text: "In Thai Traditional Medicine, foods are often classified by their inherent properties—hot, cool, neutral. Pure, unrefined Palmyra palm sugar is considered to have a 'cooling' or 'calming' effect on the body." },
                    { type: 'heading', text: 'A Source of Gentle Energy' },
                    { type: 'paragraph', text: "Unlike the 'hot' and sharp energy spike from white sugar, palm sugar was traditionally used as a source of gentle, sustained energy. It was often given to children or those recovering from illness as a way to replenish vitality without overwhelming the system. Its mineral content, especially potassium, was intuitively understood to be restorative." },
                    { type: 'image', src: 'https://via.placeholder.com/600x400.png?text=Herbal+Remedies', alt: 'A collection of traditional Thai herbs and ingredients.' },
                    { type: 'heading', text: 'Role in Herbal Remedies' },
                    { type: 'paragraph', text: "Palm sugar was also a key ingredient in many herbal preparations. Its pleasant taste helped to make bitter medicinal herbs more palatable. More importantly, it was believed to act as a 'carrier' (or 'anupana' in Ayurvedic terms), helping to deliver the therapeutic properties of the herbs more effectively throughout the body. It was often dissolved in herbal teas or mixed into medicinal pastes to balance flavors and enhance efficacy." }
                ]
            },
            {
                id: 18,
                title: "What is 'Terroir'? Exploring the Taste of Place in Palm Sugar",
                coverImage: "https://via.placeholder.com/800x600.png?text=Terroir+Map",
                introduction: "Just like fine wine or single-origin coffee, the flavor of palm sugar is deeply shaped by its environment. Dive into the concept of 'terroir' and discover what makes our Phetchaburi sugar so unique.",
                content: [
                    { type: 'paragraph', text: "'Terroir' is a French term that describes the complete natural environment in which a particular product is produced, including factors such as the soil, topography, and climate. It's the reason why a Chardonnay from Burgundy tastes different from one from California. The same principle applies to our palm sugar." },
                    { type: 'heading', text: 'The Phetchaburi Difference' },
                    { type: 'paragraph', text: "Our Golden Taan is sourced from Phetchaburi province in Thailand, a region renowned for producing the country's highest quality palm sugar. This is due to its unique terroir:\n• Coastal Soil: Phetchaburi's proximity to the Gulf of Thailand gives its soil a higher salinity and mineral content. This translates directly into the sap, imparting a subtle minerality and a more rounded, less cloyingly sweet flavor.\n• Climate: The specific balance of sun and humidity in the region affects the sugar concentration in the sap.\n• Local Palm Variety: The variety of Palmyra palm that thrives in this region is perfectly adapted to the local conditions, yielding a sap with a consistently superior flavor profile." },
                    { type: 'image', src: 'https://via.placeholder.com/600x400.png?text=Phetchaburi+Landscape', alt: 'The landscape of Phetchaburi with Palmyra palm trees.' },
                    { type: 'paragraph', text: "When you taste Golden Taan, you're not just tasting a sweetener; you're experiencing the unique 'taste of place' of Phetchaburi." }
                ]
            },
            {
                id: 19,
                title: "Create Your Own Infused Vinegar with Golden Taan",
                coverImage: "https://via.placeholder.com/800x600.png?text=Infused+Vinegar",
                introduction: "A simple kitchen project for a gourmet result. Learn how to make a sweet and tangy infused vinegar using Golden Taan, perfect for salad dressings and marinades.",
                content: [
                    { type: 'paragraph', text: "Infused vinegars are a fantastic way to add a layer of flavor to your cooking. By combining the acidity of vinegar with the complex sweetness of Golden Taan, you can create a versatile pantry staple." },
                    { type: 'heading', text: 'The Basic Recipe' },
                    { type: 'paragraph', text: "This is a base recipe that you can customize with your favorite herbs and spices.\n• 2 cups Apple Cider Vinegar (or white wine vinegar)\n• 1/4 cup Golden Taan Coarse Crystals\n• Flavorings: a sprig of rosemary, a few black peppercorns, a chili flake, or a strip of lemon peel are all great options." },
                    { type: 'image', src: 'https://via.placeholder.com/600x400.png?text=Vinegar+Infusion+Jar', alt: 'A glass jar with vinegar, Golden Taan, and rosemary infusing.' },
                    { type: 'heading', text: 'The Infusion Process' },
                    { type: 'paragraph', text: "1. In a clean glass jar, combine the vinegar, Golden Taan Coarse Crystals, and your chosen flavorings.\n2. Seal the jar and shake well to help dissolve the sugar crystals.\n3. Store the jar in a cool, dark place for about one week, giving it a shake every day or so.\n4. After a week, taste the vinegar. If you're happy with the flavor, strain out the solids using a fine-mesh sieve.\n5. Pour the infused vinegar into a clean bottle for storage. It will keep for several months." },
                    { type: 'heading', text: 'How to Use It' },
                    { type: 'paragraph', text: "Use your Golden Taan infused vinegar to make a vibrant vinaigrette for salads, as a marinade for chicken or pork, or to deglaze a pan after searing meat." }
                ]
            }
        ]
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

const de: Translations = JSON.parse(JSON.stringify(en));
const ja: Translations = JSON.parse(JSON.stringify(en));
const ko: Translations = JSON.parse(JSON.stringify(en));
const fr: Translations = JSON.parse(JSON.stringify(en));
const zh: Translations = JSON.parse(JSON.stringify(en));


export const siteContent: Record<Language, Translations> = {
  en,
  th,
  de,
  ja,
  ko,
  fr,
  zh,
};