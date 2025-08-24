import { Translations } from "./types";

const nutrientData = {
    en: [
        { name: 'Potassium (mg)', goldenTaan: 1030, unrefinedSugarcane: 450, refinedWhiteSugar: 2 },
        { name: 'Phosphorus (mg)', goldenTaan: 79, unrefinedSugarcane: 40, refinedWhiteSugar: 0 },
        { name: 'Magnesium (mg)', goldenTaan: 31, unrefinedSugarcane: 80, refinedWhiteSugar: 0 },
        { name: 'Calcium (mg)', goldenTaan: 8, unrefinedSugarcane: 85, refinedWhiteSugar: 1 },
        { name: 'Iron (mg)', goldenTaan: 2.6, unrefinedSugarcane: 2.6, refinedWhiteSugar: 0.1 },
        { name: 'Zinc (mg)', goldenTaan: 0.3, unrefinedSugarcane: 0.4, refinedWhiteSugar: 0 },
        { name: 'Copper (mg)', goldenTaan: 0.2, unrefinedSugarcane: 0.5, refinedWhiteSugar: 0 },
    ],
    de: [
        { name: 'Kalium (mg)', goldenTaan: 1030, unrefinedSugarcane: 450, refinedWhiteSugar: 2 },
        { name: 'Phosphor (mg)', goldenTaan: 79, unrefinedSugarcane: 40, refinedWhiteSugar: 0 },
        { name: 'Magnesium (mg)', goldenTaan: 31, unrefinedSugarcane: 80, refinedWhiteSugar: 0 },
        { name: 'Kalzium (mg)', goldenTaan: 8, unrefinedSugarcane: 85, refinedWhiteSugar: 1 },
        { name: 'Eisen (mg)', goldenTaan: 2.6, unrefinedSugarcane: 2.6, refinedWhiteSugar: 0.1 },
        { name: 'Zink (mg)', goldenTaan: 0.3, unrefinedSugarcane: 0.4, refinedWhiteSugar: 0 },
        { name: 'Kupfer (mg)', goldenTaan: 0.2, unrefinedSugarcane: 0.5, refinedWhiteSugar: 0 },
    ],
    default: [
        { name: 'Potassium (mg)', goldenTaan: 1030, unrefinedSugarcane: 450, refinedWhiteSugar: 2 },
        { name: 'Phosphorus (mg)', goldenTaan: 79, unrefinedSugarcane: 40, refinedWhiteSugar: 0 },
        { name: 'Magnesium (mg)', goldenTaan: 31, unrefinedSugarcane: 80, refinedWhiteSugar: 0 },
        { name: 'Calcium (mg)', goldenTaan: 8, unrefinedSugarcane: 85, refinedWhiteSugar: 1 },
        { name: 'Iron (mg)', goldenTaan: 2.6, unrefinedSugarcane: 2.6, refinedWhiteSugar: 0.1 },
        { name: 'Zinc (mg)', goldenTaan: 0.3, unrefinedSugarcane: 0.4, refinedWhiteSugar: 0 },
        { name: 'Copper (mg)', goldenTaan: 0.2, unrefinedSugarcane: 0.5, refinedWhiteSugar: 0 },
    ]
}


const en: Translations = {
    metaTitle: "Golden Taan | Authentic Palmyra Palm Sugar - Sustainably Sourced",
    metaDescription: "Discover Golden Taan, the premium, low-GI Palmyra Palm Sugar. 100% pure, unrefined, and sustainably sourced from our family farms in Ratchaburi, Thailand.",
    nav: {
        home: "Home",
        ourStory: "Our Story",
        heritage: "Heritage & Standards",
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
            goldenTaan: "Golden Taan",
            unrefinedSugarcane: "Unrefined Sugarcane",
            refinedWhiteSugar: "Refined White Sugar",
            nutrientData: nutrientData.en,
            insight: {
                title: "Key Insight: The Power of Unrefined",
                text: "The data clearly shows the superiority of unrefined sweeteners. While both Golden TAAN and raw sugarcane are rich in essential minerals, Golden TAAN's exceptionally high potassium content—over 500 times that of white sugar and more than double that of sugarcane—sets it apart. Potassium is a vital electrolyte essential for regulating blood pressure, nerve function, and muscle contractions, making Golden TAAN a uniquely beneficial choice for a health-conscious lifestyle.",
            },
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
            { id: 'p1', img: 'https://via.placeholder.com/400x400.png?text=Palm+Sugar+Block+(1:1)', title: 'Palmyra Palm Sugar Block', description: 'Rich, deep flavor with a unique aroma. A soft, fudge-like texture perfect for traditional Thai cuisine and desserts.', price: 8 },
            { id: 'p2', img: 'https://via.placeholder.com/400x400.png?text=Palm+Sugar+Powder+(1:1)', title: 'Palmyra Palm Sugar Powder', description: 'Finely ground for easy use and quick dissolving. Ideal for modern baking and sweetening beverages.', price: 10 },
            { id: 'p3', img: 'https://via.placeholder.com/400x400.png?text=Palm+Sugar+Syrup+(1:1)', title: 'Palmyra Palm Sugar Syrup', description: 'A rich, concentrated liquid sweetness. Perfect for topping pancakes, ice cream, or mixing in cocktails.', price: 12 },
        ],
        faq: {
            headline: "Frequently Asked Questions",
            showMore: "Show More Questions",
            items: [
                { q: 'How can I distinguish authentic Golden Taan from imitations?', a: 'Authentic Golden Taan has a natural golden-brown color, a rich caramel-like aroma, and a smooth, mellow sweetness. Imitations are often darker due to added brown sugar and have a sharp, sugary taste.' },
                { q: 'What is the difference between Palmyra Palm Sugar and Coconut Sugar?', a: 'Both are palm sugars but from different species. Palmyra Palm Sugar comes from the Palmyra Palm tree (Borassus flabellifer), while Coconut Sugar comes from the Coconut Palm tree. Palmyra sugar typically has a more complex, aromatic flavor profile.' },
                { q: 'What is the shelf life of your products?', a: 'Our solid blocks and powder can be stored for 12-18 months in a cool, dry place. The syrup should be refrigerated and consumed within 6 months of opening.' },
                { q: 'What is the Glycemic Index (GI) of Golden Taan?', a: 'Golden Taan has a low Glycemic Index, around 35, which is significantly lower than white sugar (approx. 65) and honey (approx. 58).' },
                { q: 'Are your products organic?', a: 'Our Palmyra palm trees grow naturally without the use of pesticides or chemical fertilizers. While we are not yet officially certified organic, our process follows all principles of organic farming.' },
                { q: 'Can I substitute Golden Taan for white sugar in recipes?', a: 'Absolutely. You can use it as a 1:1 substitute. It may give your baked goods a slightly darker color and add a unique, delicious aroma.' },
                { q: 'Is Golden Taan suitable for diabetics?', a: 'Due to its low GI, it is a better alternative to white sugar. However, as with any sweetener, individuals with diabetes should consult their doctor before consumption.' },
                { q: 'Does the production process harm the palm trees?', a: 'Not at all. Tapping the palm blossoms is a sustainable, age-old tradition that does not harm the tree. A single Palmyra palm tree can provide sap for decades.' },
                { q: 'What is your shipping policy?', a: 'We ship throughout Thailand using private courier services. For bulk orders and international exports, please contact our wholesale department.' },
                { q: 'Do your products contain preservatives?', a: 'No, our products are 100% natural, free from preservatives, artificial colors, or any additives.' },
                { q: 'Why is Golden Taan more expensive than white sugar?', a: 'The higher price reflects the labor-intensive, artisanal production process, its superior nutritional value, and our commitment to fair-trade practices that support local farming communities.' },
                { q: 'Where can I buy your products?', a: 'You can order directly from our website or find our products in select premium supermarkets and health food stores.' },
                { q: 'How does palm farming help with climate change?', a: 'Palm groves are excellent carbon sinks. The long-living trees have deep root systems that improve soil quality and prevent erosion.' },
                { q: 'Can I visit your palm groves?', a: 'We are in the process of developing an agro-tourism program. Please follow us on social media for future announcements.' },
                { q: 'What kind of quality control do you have?', a: 'We implement strict quality control at every stage, from sap collection to packaging, to ensure you receive the purest, highest-quality product.' },
            ]
        }
    },
    about: {
        header: {
            title: "Our Story",
            subtitle: "Our story didn't begin in a boardroom. It began under the shade of Palmyra palm trees in Ratchaburi, where a legacy of sweetness has been passed down for generations.",
        },
        roots: {
            title: "The Roots of Sweetness",
            text: "Our family has been connected to the Palmyra palm for over a century. We grew up with the sound of wind rustling through palm leaves, the sweet aroma of simmering nectar, and the pride of pure, unadulterated craftsmanship. This is the heritage we want to share with the world.",
        },
        fadingGold: {
            title: "The Fading Gold",
            text: "In an era where speed and quantity often trump quality, authentic Palmyra palm sugar was being replaced by cheaper products mixed with cane sugar and additives. We saw this cultural 'gold' beginning to fade, and that was the beginning of 'Golden Taan'.",
        },
        mission: {
            title: "A Mission for Sustainable Sweetness",
            text: "Our mission is to revive and elevate the value of authentic Palmyra palm sugar. We work directly with farming communities to preserve traditional wisdom while implementing modern quality standards, ensuring every Golden Taan product is not only delicious, but also good for your health, the community, and the planet.",
        },
        timelineTitle: "The Sweet Journey: Past to Present",
        timeline: [
            { title: "Origins in Southeast Asia", era: "9th Century", description: "Early records show Palmyra palm sap used as a prized sweetener across Southeast Asia." },
            { title: "A Family Heritage", era: "From Generation to Generation", description: "The traditional methods of palm tapping and slow-cooking sap are passed down as family wisdom." },
            { title: "In Royal Courts & Ayurveda", era: "Royal Courts & Ayurveda", description: "Palm sugar was used in royal Thai desserts and as a key ingredient in ancient Ayurvedic medicine." },
            { title: "The Birth of Golden Taan", era: "Present Day", description: "The 'Golden Taan' brand is founded with a mission to preserve this heritage and bring pure sweetness to the world." }
        ],
        people: {
            title: "The People Behind the Purity",
            founderName: "Krisada Laohasiri (Founder)",
            founderQuote: "We aren't just making sugar; we're preserving the heritage of our homeland.",
            communityTitle: "Our Community of Artisans",
            communityText: "The heart of Golden Taan is our skilled farming partners. They are the guardians of ancestral wisdom, the ones who climb the palms each morning with a deep respect for nature to collect the precious nectar for us.",
        },
        choice: {
            title: "The Healthier Choice",
            text: "We believe sweetness doesn't have to be a \"guilty pleasure.\" Golden Taan is a natural alternative with a low glycemic index, rich in minerals, and a more complex flavor than common sweeteners like coconut sugar or cane sugar. We are committed to offering a choice that lets you enjoy sweetness with peace of mind.",
        }
    },
    heritage: {
        header: {
            title: "Heritage & Global Standards",
            subtitle: "Behind the quality of Golden Taan is a commitment to excellence at every step, from our soil to your shelf.",
        },
        tabs: {
            origin: "Origin & Heritage",
            export: "Export Markets",
            certs: "Certifications",
        },
        origin: {
            title: "Palmyra Palm Sugar: A Legacy of Thai Flavor",
            paragraphs: [
                "Thai Palmyra Palm Sugar is an indigenous sweetener with deep cultural roots, distinct from common cane and coconut sugars.",
                "Its source is the Palmyra palm (Borassus flabellifer), native to Southeast Asia, with the Phetchaburi and Ratchaburi provinces serving as the historic epicenters of authentic production for centuries. The region's unique mineral-rich soil, or terroir, is believed to contribute to the sugar's deep, caramel-like flavor and subtle smoky notes.",
                "The production process is a time-honored craft passed down through generations. Farmers, known as \"tappers,\" climb the tall palms daily to collect nectar from the tree's blossoms. This nectar is then slow-cooked in large woks over wood fires for hours—a meticulous process that naturally thickens and caramelizes the sugar, concentrating its flavor and preserving its nutrients without any additives or industrial refining."
            ]
        },
        export: {
            title: "Thailand's Palm Sugar Export Market",
            intro: "While specific data for \"pure Palmyra palm sugar\" is often grouped with \"coconut sugar\" in export statistics, Thailand is a significant player in the global market for natural sweeteners. This demand is driven by the worldwide trend towards healthier, organic, and minimally processed foods.",
            market: {
                intro: "The global palm sugar market is expected to reach",
                value: "$2.78 Billion",
                outro: "by 2032, with the organic segment showing the most prominent and rapid growth.",
            },
            keyMarkets: {
                title: "Key Export Markets",
                markets: [
                    { name: "The Americas (USA & Canada)", description: "A primary market where health-conscious consumers value palm sugar for its low glycemic index and high nutritional content." },
                    { name: "Europe", description: "A strong market for organic and Fair-trade goods, especially in Germany, France, and the UK. Certifications are crucial." },
                    { name: "UAE & Middle East", description: "Demand is largely driven by the need for Halal-certified products and its use in traditional sweets and desserts." },
                    { name: "Asia-Pacific", description: "Neighboring countries and markets like Japan, South Korea, and Australia show high interest for use in both traditional and modern Asian cuisine." },
                ]
            }
        },
        certs: {
            title: "Essential Export Certifications",
            intro: "To successfully export palm sugar and assure international buyers of quality and compliance, a combination of domestic and globally recognized certifications is essential.",
            thai: {
                title: "Thai Certifications (The Foundation of Trust)",
                items: [
                    { title: "GMP (Good Manufacturing Practice)", issuer: "Thai FDA", description: "Ensures the production process meets strict hygiene and safety standards, from sap collection to packaging." },
                    { title: "HACCP (Hazard Analysis and Critical Control Points)", issuer: "Global Standard", description: "An advanced food safety management system that identifies and controls potential hazards in the production process." },
                    { title: "Thai FDA Approval", issuer: "Thai FDA", description: "All food products must be registered and approved by the Thai Food and Drug Administration." },
                ]
            },
            international: {
                title: "International & Market-Specific Certifications (Global Market Access)",
                items: [
                    { title: "Halal Certification", issuer: "For UAE & Halal Markets", description: "Crucial for export to the UAE and most Muslim countries, ensuring the entire production process adheres to Islamic law." },
                    { title: "USDA Organic", issuer: "For USA Market", description: "Guarantees the palm trees are grown without synthetic pesticides or fertilizers, and the processing is chemical-free." },
                    { title: "EU Organic", issuer: "For European Market", description: "Required to market a product as 'organic' within the EU, which has its own strict standards." },
                    { title: "Fair Trade Certification", issuer: "Ethical Consumer Appeal", description: "Highly regarded in Europe and North America, ensuring farmers and workers are paid fairly and work in good conditions." },
                ]
            }
        }
    },
    sustainability: {
        header: {
            title: "Our Commitment to Sustainability",
            subtitle: "For Golden Taan, sustainability isn't a buzzword—it's the core of our operation. We are guided by ESG principles to create a lasting positive impact on the planet and society.",
        },
        environmental: {
            title: "E: Environmental Responsibility",
            points: [
                { title: "Agroecology", text: "Our palm groves are integrated farming systems that promote biodiversity and use zero chemical inputs." },
                { title: "Water Efficiency", text: "Palmyra palms are drought-resistant, requiring significantly less water than sugarcane." },
                { title: "Carbon Sequestration", text: "Long-living palm groves act as vital carbon sinks, helping to mitigate global warming." },
                { title: "Eco-Friendly Packaging", text: "We are committed to using recyclable and biodegradable materials for our packaging." },
            ]
        },
        social: {
            title: "S: Social Responsibility",
            points: [
                { title: "Fair Trade", text: "We purchase directly from farmers at prices above the market rate to ensure a stable and sustainable income." },
                { title: "Community Development", text: "We invest in skill development and educational programs for farming families." },
                { title: "Preserving Local Wisdom", text: "We work to preserve and pass on the traditional knowledge of artisanal palm sugar making." },
                { title: "Health & Wellness", text: "We promote a product that contributes positively to the health of our consumers." },
            ]
        },
        governance: {
            title: "G: Governance & Transparency",
            points: [
                { title: "Supply Chain Transparency", text: "We offer full traceability for our products, right back to the grove and the farmer." },
                { title: "Quality Standards", text: "We adhere to strict quality control processes at every stage of production." },
                { title: "Ethical Business Practices", text: "We are committed to operating with integrity and fairness to all stakeholders." },
                { title: "Open Communication", text: "We provide accurate and complete information about our products and processes to consumers." },
            ]
        },
        insights: {
            title: "Data-Driven Insights & Transparency",
            chartTitle: "Resource Efficiency Comparison",
            report: {
                title: "Our Full Sustainability Report",
                text: "Download our comprehensive report for a deep dive into our practices, metrics, and future goals.",
                cta: "Download Report (PDF)",
            }
        },
        resourceChartData: [
            { subject: 'Water Efficiency', 'Golden Taan': 9, 'Cane Sugar': 3, fullMark: 10 },
            { subject: 'Low Land Use', 'Golden Taan': 8, 'Cane Sugar': 4, fullMark: 10 },
            { subject: 'Low Pesticide Use', 'Golden Taan': 10, 'Cane Sugar': 3, fullMark: 10 },
            { subject: 'Biodiversity', 'Golden Taan': 8, 'Cane Sugar': 4, fullMark: 10 },
            { subject: 'Carbon Storage', 'Golden Taan': 7, 'Cane Sugar': 3, fullMark: 10 },
        ]
    },
    wholesale: {
        header: {
            title: "Partner with Golden Taan",
            subtitle: "Offer your customers pure, sustainable sweetness with our premium Palmyra palm sugar products.",
        },
        insights: {
            title: "Global Market Insights & Opportunities",
            text: "The natural sweeteners market is experiencing steady growth, projected to reach $2.78 billion by 2032 with a CAGR of 3.4%. The organic segment, in particular, holds the largest market share and is poised for the fastest growth. This presents a significant opportunity for our partners to offer a high-demand, differentiated product.",
        },
        pricing: {
            title: "Pricing Structure & Partnership Models",
            text: "We offer a tiered pricing structure that rewards volume, and we are flexible in discussing partnership models that best suit your business needs.",
            table: {
                headers: ["Minimum Order Quantity (MOQ)", "Domestic Price (THB/kg) (Approx.)", "Export Price (USD/kg) (FOB)*"],
                rows: [
                    { moq: "50 kg", domestic: "~165", export: "~$6.50" },
                    { moq: "100 kg", domestic: "~150", export: "~$5.80" },
                    { moq: "500 kg", domestic: "~135", export: "~$5.20" },
                ],
                contactRow: {
                    moq: "1,000+ kg",
                    price: "Contact for special pricing",
                },
                note: "*Export prices are subject to change based on global markets, exchange rates, and specific packaging/certification requirements.",
            }
        },
        logistics: {
            title: "Flexible Packaging & Shipping",
            packaging: {
                title: "Packaging Options",
                options: ["Bulk bags, Jumbo bags (for large volume exports)", "OEM/Private Label packaging services", "Food Service Gallons for HORECA", "Retail-ready packaging options"]
            },
            export: {
                title: "Export & Logistics",
                services: ["Full support for e-Customs clearance", "Provision of Health Certificates and necessary documentation", "Arrangement for Certificate of Origin (CO)", "Coordination for global shipping"]
            }
        },
        form: {
            title: "Request for Quote (RFQ)",
            companyName: "Company Name",
            contactPerson: "Contact Person",
            email: "Email",
            country: "Country",
            volume: "Desired Volume (kg/ton)",
            productType: {
                label: "Product Type",
                options: ["Solid (Block)", "Powder", "Syrup", "Organic"]
            },
            packaging: {
                label: "Packaging Requirements",
                placeholder: "e.g., OEM, Bulk bags, etc.",
            },
            message: "Additional Message",
            submit: "Submit RFQ",
            successMessage: "Your request has been submitted successfully. Our team will contact you shortly.",
        }
    },
    shop: {
        header: {
            title: "Your Cart & Checkout",
            subtitle: "Review your items and select a convenient payment method.",
        },
        emptyCart: {
            title: "Your shopping cart is empty.",
            text: "Add some natural sweetness to your life by exploring our products.",
            cta: "Return to Homepage",
        },
        summary: {
            title: "Order Summary",
            subtotal: "Subtotal",
            shipping: "Shipping",
            total: "Total",
        },
        payment: {
            title: "Choose Payment Method",
            tabs: {
                qr: "QR Code",
                crypto: "Cryptocurrency",
                card: "Card / PayPal",
            },
            qr: {
                text: "Scan this QR Code to pay with your mobile banking application.",
            },
            crypto: {
                text: "Send payment to the wallet address below:",
                accept: "We accept:",
            },
            card: {
                number: "Card Number",
                expiry: "Expiry (MM/YY)",
                cvc: "CVC",
                name: "Name on Card",
                pay: "Pay",
            }
        }
    },
    blog: {
        header: {
            title: "Blog: Stories of Sweetness",
            subtitle: "Explore the deep stories, wisdom, and value of authentic Palmyra Palm Sugar.",
        },
        readMore: "Read More",
        back: "Back to Blog",
        posts: [
            {
                id: 1,
                title: "What is Palmyra Palm Sugar? The Complete Guide",
                coverImage: "https://via.placeholder.com/400x300.png?text=Palm+Sugar+Guide+(4:3)",
                introduction: "A comprehensive guide to authentic Palmyra Palm Sugar, from its origin and production process to the reasons it stands apart from other sweeteners.",
                content: [
                    { type: 'paragraph', text: 'When it comes to sweetness in Thai culture, "Namtan Tanode" (Palmyra Palm Sugar) is a name that evokes a rich heritage and a unique flavor profile passed down through generations. For the global market, it remains a precious treasure waiting to be discovered. This is your complete guide to authentic Palmyra Palm Sugar, exploring its origin, artisanal production, and what makes it completely different from other sweeteners.' },
                    { type: 'heading', text: 'A Heritage from the Palmyra Palm' },
                    { type: 'paragraph', text: 'The source is the Palmyra palm (Borassus flabellifer), native to Southeast Asia. The production process is a time-honored craft. Farmers, known as "tappers," climb the tall palms daily to collect nectar from the tree\'s blossoms. This nectar is then slow-cooked in large woks over wood fires for hours—a meticulous process that naturally thickens and caramelizes the sugar, preserving its nutrients without any additives or industrial refining.' },
                ]
            },
            {
                id: 2,
                title: "The Golden Recipe: Palmyra Sugar & Mango Sticky Rice",
                coverImage: "https://via.placeholder.com/400x300.png?text=Mango+Sticky+Rice+(4:3)",
                introduction: "Discover how Golden Taan Palmyra Palm Sugar elevates the classic Thai dessert, Mango Sticky Rice, to a new level of deliciousness with its unique caramel and smoky notes.",
                content: [
                    { type: 'heading', text: 'A Sweetness with Character' },
                    { type: 'paragraph', text: 'Standard Mango Sticky Rice is sweet, but often one-dimensionally so. By replacing white or regular palm sugar with Golden Taan, you introduce a deeper, more complex flavor profile. The rich, caramel-like taste and subtle smoky aroma complement the creamy coconut milk and sweet mango perfectly, creating a dessert that is both familiar and excitingly new.' },
                    { type: 'image', src: 'https://via.placeholder.com/800x600.png?text=Ingredients+Flat+Lay+(4:3)', alt: 'Ingredients for Mango Sticky Rice' },
                    { type: 'heading', text: 'Ingredients' },
                    { type: 'paragraph', text: '• 1 cup Thai sweet rice (glutinous rice), soaked in water for at least 4 hours\n• 1 cup coconut milk\n• 1/2 cup Golden Taan Palmyra Palm Sugar, chopped\n• 1/4 teaspoon salt\n• 1 large ripe mango, peeled and sliced\n• Toasted sesame seeds for garnish (optional)' },
                    { type: 'heading', text: 'Instructions' },
                    { type: 'paragraph', text: '1. Drain the soaked glutinous rice. Steam it for about 20-25 minutes, or until cooked through and tender.\n2. While the rice is steaming, gently heat the coconut milk, Golden Taan Palmyra Palm Sugar, and salt in a saucepan over medium-low heat. Stir until the sugar is completely dissolved. Do not boil.\n3. Once the rice is cooked, transfer it to a bowl. Pour the warm, sweet coconut milk mixture over the hot rice. Stir gently to combine, then cover and let it sit for 20 minutes for the rice to absorb the liquid.\n4. To serve, place a portion of the sticky rice on a plate, arrange fresh mango slices alongside it, and sprinkle with toasted sesame seeds if desired. Enjoy the elevated taste!' },
                ]
            },
            {
                id: 3,
                title: "A Day in the Life of a Palm Tapper",
                coverImage: "https://via.placeholder.com/400x300.png?text=Palm+Tapper+(4:3)",
                introduction: "Meet Somchai, a guardian of tradition. Discover the daily craft, dedication, and wisdom behind every granule of Golden Taan sugar through the eyes of one of our partner farmers.",
                content: [
                    { type: 'heading', text: 'The Morning Climb' },
                    { type: 'paragraph', text: 'Long before the sun graces the plains of Ratchaburi, Somchai’s day begins. With a practiced ease that belies the difficulty of his task, he begins his ascent up the towering Palmyra palm. This is not just a climb; it is a daily ritual, a conversation with the trees that have sustained his family for generations.' },
                    { type: 'image', src: 'https://via.placeholder.com/800x600.png?text=Farmer+Climbing+Palm+(4:3)', alt: 'A farmer climbing a palmyra palm tree at dawn.' },
                    { type: 'heading', text: 'The Art of Collection' },
                    { type: 'paragraph', text: 'At the top, he skillfully tends to the palm blossoms, carefully slicing the stalk to encourage the flow of the sweet sap, or nectar, into the bamboo containers he places. This is a delicate process that requires immense knowledge to ensure the tree remains healthy and productive for decades to come.' },
                    { type: 'heading', text: 'More Than a Job, A Legacy' },
                    { type: 'paragraph', text: 'For Somchai, this is more than a livelihood. "I am not just collecting sap," he says, looking over the grove. "I am carrying the story of my ancestors. Every drop of this nectar holds their wisdom. With Golden Taan, we can share this story with the world, and ensure this way of life continues." It is this profound connection between people and nature that you taste in every spoonful of our sugar.' },
                ]
            },
            {
                id: 4,
                title: "Golden Taan Glazed Salmon: A Healthy Delight",
                coverImage: "https://via.placeholder.com/400x300.png?text=Glazed+Salmon+(4:3)",
                introduction: "Move beyond traditional desserts and discover how Golden Taan's complex sweetness can create a spectacular savory dish. This glazed salmon recipe is simple, healthy, and incredibly flavorful.",
                content: [
                    { type: 'heading', text: 'Savory Meets Sweet' },
                    { type: 'paragraph', text: "The deep, caramel notes of Golden Taan Palmyra Palm Sugar are a perfect match for the rich flavor of salmon. This glaze caramelizes beautifully, creating a slightly crispy exterior while keeping the fish moist and tender inside. It's a restaurant-quality meal you can easily make at home." },
                    { type: 'heading', text: 'Ingredients' },
                    { type: 'paragraph', text: '• 2 salmon fillets (about 6 oz / 170g each)\n• 2 tablespoons Golden Taan Palmyra Palm Sugar, powder or finely chopped\n• 2 tablespoons soy sauce (or tamari for gluten-free)\n• 1 tablespoon fresh ginger, grated\n• 1 clove garlic, minced\n• 1 tablespoon lime juice\n• Chopped cilantro and sesame seeds for garnish' },
                    { type: 'heading', text: 'Instructions' },
                    { type: 'paragraph', text: "1. Preheat your oven to 400°F (200°C).\n2. In a small bowl, whisk together the Golden Taan sugar, soy sauce, ginger, garlic, and lime juice until the sugar is dissolved.\n3. Place the salmon fillets on a baking sheet lined with parchment paper. Brush the glaze generously over the top and sides of the salmon.\n4. Bake for 12-15 minutes, or until the salmon is cooked through and flakes easily with a fork. For a more caramelized top, you can broil for the last 1-2 minutes, watching carefully to prevent burning.\n5. Garnish with fresh cilantro and sesame seeds before serving. It pairs wonderfully with steamed rice and vegetables." },
                ]
            },
            {
                id: 5,
                title: "From Grove to Globe: The Journey of Our Sugar",
                coverImage: "https://via.placeholder.com/400x300.png?text=Global+Journey+(4:3)",
                introduction: "Every block of Golden Taan sugar tells a story of sustainable farming, community empowerment, and meticulous quality control. Follow the journey from a single palm blossom to your kitchen.",
                content: [
                    { type: 'heading', text: 'Step 1: The Sustainable Harvest' },
                    { type: 'paragraph', text: "The journey begins in our pristine palm groves, where farmers practice a form of agroecology. They don't just take from the trees; they nurture the entire ecosystem. The nectar is collected using traditional, non-harmful methods, ensuring the trees remain healthy for future generations." },
                    { type: 'heading', text: 'Step 2: The Artisanal Process' },
                    { type: 'paragraph', text: "The collected sap is transported to a community processing center. Here, it is slow-cooked in open woks. This isn't just about evaporation; it's a craft. The artisans know exactly when the sugar has reached the perfect consistency, color, and aroma. This gentle, unhurried process preserves the vital minerals and nutrients." },
                    { type: 'heading', text: 'Step 3: Quality and Purity Checks' },
                    { type: 'paragraph', text: "Before packaging, every batch of Golden Taan is tested for quality. We check for moisture content, flavor profile, and purity to ensure it meets our exacting standards. There are no additives, no mixing with other sugars—just 100% pure Palmyra palm nectar." },
                     { type: 'heading', text: 'Step 4: Reaching the World' },
                    { type: 'paragraph', text: "Finally, the sugar is carefully packaged to preserve its freshness and shipped to discerning customers worldwide. This entire process is built on a foundation of fairness, paying our farmers a premium price that honors their skill and dedication. When you choose Golden Taan, you're not just buying a sweetener; you're supporting a sustainable and ethical chain of production." },
                ]
            }
        ]
    },
    footer: {
        address: "919/1 JTC Building, Silom Road, Silom, Bangrak, Bangkok 10500, Thailand",
        contactPerson: { label: "Contact Person", name: "Mr. Krisada Laohasiri" },
        phone: { label: "Tel/WhatsApp", number: "+66(0)81 851 9922" },
        email: { label: "Email", address: "info@goldentaan.com" },
        quickLinks: "Quick Links",
        copyright: "© {year} Golden TAAN Co., Ltd. All rights reserved.",
    }
};

const th: Translations = {
    metaTitle: "โกลเด้น ตาล | น้ำตาลโตนดแท้ - จากแหล่งผลิตที่ยั่งยืน",
    metaDescription: "ค้นพบ โกลเด้น ตาล น้ำตาลโตนดเกรดพรีเมียม GI ต่ำ บริสุทธิ์ 100% ไม่ผ่านการขัดสี และมาจากฟาร์มของครอบครัวเราในจังหวัดราชบุรีอย่างยั่งยืน",
    nav: {
        home: "หน้าแรก",
        ourStory: "เรื่องราวของเรา",
        heritage: "มรดกและมาตรฐาน",
        blog: "บล็อก",
        sustainability: "ความยั่งยืน",
        wholesale: "ขายส่งและ B2B",
        shopNow: "ซื้อสินค้า",
        homeSubItems: [
            { id: '#our-story', label: 'เรื่องราวของเรา' },
            { id: '#health-benefits', label: 'ประโยชน์ต่อสุขภาพ' },
            { id: '#products', label: 'ผลิตภัณฑ์' },
            { id: '#contact', label: 'ติดต่อเรา' },
        ]
    },
    home: {
        hero: {
            headline: "โกลเด้น ตาล: มรดกแห่งความหวาน",
            subheadline: "ค้นพบรสชาติอันบริสุทธิ์ของน้ำตาลโตนดแท้ ที่ธรรมชาติได้รังสรรค์อย่างสมบูรณ์แบบ",
            cta: "ค้นพบเรื่องราวของเรา",
        },
        trends: {
            headline: "โลกที่โหยหาความเป็นของแท้",
            description: "ภูมิทัศน์อาหารทั่วโลกกำลังเปลี่ยนแปลงครั้งใหญ่ ผู้บริโภคยุคใหม่มองหามากกว่ารสชาติ แต่ยังต้องการความโปร่งใส สุขภาพ และความยั่งยืนในทุกคำที่ลิ้มลอง",
            billion: "พันล้าน",
            marketStat: "ตลาดสารให้ความหวานจากธรรมชาติคาดว่าจะเติบโตถึง 5.5 หมื่นล้านดอลลาร์สหรัฐภายในปี 2030",
            consumerStat: "ของผู้บริโภคทั่วโลกเลือกซื้อผลิตภัณฑ์ที่มีส่วนผสมจากธรรมชาติและฉลากสะอาด (Clean Label) อย่างจริงจัง",
        },
        health: {
            headline: "ความแตกต่างที่ดีต่อสุขภาพ: เจาะลึกคุณค่าทางโภชนาการ",
            description: "แตกต่างจากน้ำตาลทรายขาวที่ถูกขจัดสารอาหารออกไป สารให้ความหวานที่ไม่ผ่านการขัดสีเช่น โกลเด้น ตาล และน้ำตาลอ้อยดิบ ยังคงรักษาแร่ธาตุตามธรรมชาติไว้ได้เป็นจำนวนมาก แผนภูมินี้แสดงให้เห็นถึงความแตกต่างที่ชัดเจนในคุณค่าทางโภชนาการต่อ 100 กรัม",
            chartTitle: "เปรียบเทียบสารอาหาร (ต่อ 100 กรัม)",
            goldenTaan: "โกลเด้น ตาล",
            unrefinedSugarcane: "น้ำตาลอ้อยไม่ขัดสี",
            refinedWhiteSugar: "น้ำตาลทรายขาวบริสุทธิ์",
            nutrientData: nutrientData.default,
            insight: {
                title: "ข้อมูลเชิงลึกที่สำคัญ: พลังของสารให้ความหวานที่ไม่ผ่านการขัดสี",
                text: "ข้อมูลแสดงให้เห็นถึงความเหนือกว่าของสารให้ความหวานที่ไม่ผ่านการขัดสีอย่างชัดเจน ในขณะที่ทั้งโกลเด้น ตาลและน้ำตาลอ้อยดิบอุดมไปด้วยแร่ธาตุที่จำเป็น ปริมาณโพแทสเซียมที่สูงเป็นพิเศษของโกลเด้น ตาล—มากกว่าน้ำตาลทรายขาว 500 เท่าและมากกว่าน้ำตาลอ้อยสองเท่า—ทำให้โดดเด่น โพแทสเซียมเป็นอิเล็กโทรไลต์ที่สำคัญซึ่งจำเป็นต่อการควบคุมความดันโลหิต การทำงานของเส้นประสาท และการหดตัวของกล้ามเนื้อ ทำให้โกลเด้น ตาลเป็นตัวเลือกที่เป็นประโยชน์อย่างยิ่งสำหรับไลฟ์สไตล์ที่ใส่ใจสุขภาพ",
            },
            goldenTaanEffect: "ให้พลังงานอย่างช้าๆ และสม่ำเสมอ เพื่อความกระปรี้กระเปร่าที่ยาวนาน",
            whiteSugarEffect: "ทำให้น้ำตาลในเลือดพุ่งสูงอย่างรวดเร็ว ตามมาด้วยภาวะหมดแรง"
        },
        process: {
            headline: "เรื่องเล่าของสองกระบวนการผลิต",
            description: "กระบวนการผลิตคือสิ่งที่แยกระหว่างสารให้ความหวานที่มีชีวิตกับสารให้ความหวานที่ว่างเปล่า นี่คือสิ่งที่สร้างความแตกต่างทั้งหมด",
            artisanal: {
                title: "โกลเด้น ตาล (วิธีดั้งเดิม)",
                steps: [
                    { title: "การเก็บเกี่ยว", description: "ชาวสวนผู้ชำนาญปีนขึ้นต้นตาลเพื่อเก็บน้ำหวานจากจั่นตาลโดยใช้กระบอกไม้ไผ่" },
                    { title: "การเคี่ยว", description: "น้ำหวานสดจะถูกเคี่ยวอย่างช้าๆ ในกระทะใบบัวขนาดใหญ่บนไฟไม้อ่อนๆ จนข้น" },
                    { title: "การตกผลึก", description: "จากนั้นปล่อยให้เย็นและตกผลึกตามธรรมชาติ เพื่อรักษาสี กลิ่น และสารอาหารไว้" },
                ],
            },
            industrial: {
                title: "น้ำตาลทรายขาว (วิธีอุตสาหกรรม)",
                steps: [
                    { title: "เก็บเกี่ยวและบีบอัด", description: "อ้อยถูกเก็บเกี่ยวด้วยเครื่องจักรและบีบอัดเพื่อสกัดน้ำ" },
                    { title: "การทำให้ใส", description: "ใช้สารเคมีเช่นปูนขาวและซัลเฟอร์ไดออกไซด์เพื่อกำจัดสิ่งเจือปน" },
                    { title: "การฟอกสีและกรอง", description: "น้ำอ้อยจะถูกกรองผ่านถ่านกัมมันต์เพื่อให้ได้สีขาวบริสุทธิ์" },
                    { title: "การตกผลึก", description: "เครื่องปั่นเหวี่ยงจะปั่นน้ำเชื่อมเพื่อสร้างผลึกซูโครสเกือบบริสุทธิ์ 100%" },
                ]
            }
        },
        impact: {
            headline: "ระบบนิเวศที่ยั่งยืน",
            description: "การทำสวนตาลโตนดเป็นการเกษตรที่ยั่งยืนโดยเนื้อแท้ซึ่งส่งผลดีต่อสิ่งแวดล้อม ซึ่งแตกต่างจากการปลูกอ้อยเชิงเดี่ยวที่มักทำให้ระบบนิเวศเสื่อมโทรม",
            chartTitle: "ดัชนีผลกระทบต่อความยั่งยืน (คะแนนเต็ม 10)",
            conventionalSugarcane: "อ้อยเชิงเดี่ยว",
            sustainabilityData: [
                { name: 'ประสิทธิภาพการใช้น้ำ', goldenTaan: 9, sugarcane: 3 },
                { name: 'การฟื้นฟูดิน', goldenTaan: 9, sugarcane: 2 },
                { name: 'การใช้ยาฆ่าแมลงต่ำ', goldenTaan: 10, sugarcane: 3 },
                { name: 'ความหลากหลายทางชีวภาพ', goldenTaan: 8, sugarcane: 4 },
                { name: 'การกักเก็บคาร์บอน', goldenTaan: 7, sugarcane: 3 },
            ],
            community: {
                headline: "หยั่งรากลึกในชุมชน",
                description: "การเลือก โกลเด้น ตาล หมายถึงการลงทุนในวงจรแห่งความเจริญรุ่งเรืองที่เริ่มต้นจากต้นไม้ ส่งต่อไปยังครอบครัวเกษตรกร และกลับคืนสู่คุณในรูปแบบของผลิตภัณฑ์คุณภาพที่ไม่มีใครเทียบได้",
                stats: [
                    { value: 40, unit: "+", label: "ปีที่ต้นตาลหนึ่งต้นสามารถสร้างรายได้ให้ครอบครัว" },
                    { value: 2000, unit: "+", label: "ครัวเรือนในชนบทที่ได้รับการสนับสนุนด้วยรายได้ที่มั่นคง" },
                    { value: 25, unit: "ล้าน+", label: "รายได้จากการส่งออกต่อปีสำหรับวิสาหกิจชุมชน", prefix: "฿" },
                    { value: 15, unit: "%", label: "เบี้ยประกันที่จ่ายให้เกษตรกรสูงกว่าราคาตลาด" },
                ]
            }
        },
        productSection: {
            headline: "ผลิตภัณฑ์ของเรา",
            description: "รังสรรค์ด้วยความใส่ใจ จากต้นตาลสู่ครัวของคุณ",
            addToCart: "เพิ่มลงตะกร้า",
            added: "เพิ่มแล้ว!",
        },
        products: [
            { id: 'p1', img: 'https://via.placeholder.com/400x400.png?text=Palm+Sugar+Block+(1:1)', title: 'น้ำตาลโตนดปึก', description: 'รสชาติเข้มข้นล้ำลึกพร้อมกลิ่นหอมที่เป็นเอกลักษณ์ เนื้อสัมผัสนุ่มเหมือนฟัดจ์ เหมาะสำหรับอาหารไทยและของหวานแบบดั้งเดิม', price: 280 },
            { id: 'p2', img: 'https://via.placeholder.com/400x400.png?text=Palm+Sugar+Powder+(1:1)', title: 'น้ำตาลโตนดผง', description: 'บดละเอียดเพื่อให้ใช้งานง่ายและละลายเร็ว เหมาะสำหรับการอบขนมสมัยใหม่และเพิ่มความหวานให้เครื่องดื่ม', price: 350 },
            { id: 'p3', img: 'https://via.placeholder.com/400x400.png?text=Palm+Sugar+Syrup+(1:1)', title: 'น้ำเชื่อมน้ำตาลโตนด', description: 'ความหวานเข้มข้นในรูปแบบของเหลว เหมาะสำหรับราดบนแพนเค้ก ไอศกรีม หรือผสมในค็อกเทล', price: 420 },
        ],
        faq: {
            headline: "คำถามที่พบบ่อย",
            showMore: "แสดงคำถามเพิ่มเติม",
            items: [
                { q: 'จะแยกแยะ โกลเด้น ตาล ของแท้จากของเลียนแบบได้อย่างไร?', a: 'โกลเด้น ตาล ของแท้มีสีน้ำตาลทองตามธรรมชาติ มีกลิ่นหอมคล้ายคาราเมล และมีความหวานที่นุ่มนวล ของเลียนแบบมักมีสีเข้มกว่าเนื่องจากมีการเติมน้ำตาลทรายแดงและมีรสชาติหวานแหลม' },
                { q: 'น้ำตาลโตนดกับน้ำตาลมะพร้าวต่างกันอย่างไร?', a: 'ทั้งสองเป็นน้ำตาลจากต้นปาล์มแต่คนละสายพันธุ์ น้ำตาลโตนดมาจากต้นตาล (Borassus flabellifer) ในขณะที่น้ำตาลมะพร้าวมาจากต้นมะพร้าว โดยทั่วไปแล้วน้ำตาลโตนดจะมีรสชาติที่ซับซ้อนและมีกลิ่นหอมมากกว่า' },
                { q: 'ผลิตภัณฑ์มีอายุการเก็บรักษานานเท่าไหร่?', a: 'น้ำตาลปึกและน้ำตาลผงสามารถเก็บได้นาน 12-18 เดือนในที่แห้งและเย็น ส่วนน้ำเชื่อมควรเก็บในตู้เย็นและบริโภคภายใน 6 เดือนหลังจากเปิด' },
                { q: 'ดัชนีน้ำตาล (GI) ของโกลเด้น ตาล คือเท่าไหร่?', a: 'โกลเด้น ตาล มีดัชนีน้ำตาลต่ำ อยู่ที่ประมาณ 35 ซึ่งต่ำกว่าน้ำตาลทรายขาว (ประมาณ 65) และน้ำผึ้ง (ประมาณ 58) อย่างมีนัยสำคัญ' },
                { q: 'ผลิตภัณฑ์ของคุณเป็นออร์แกนิกหรือไม่?', a: 'ต้นตาลของเราเติบโตตามธรรมชาติโดยไม่ใช้ยาฆ่าแมลงหรือปุ๋ยเคมี แม้ว่าเราจะยังไม่ได้รับการรับรองออร์แกนิกอย่างเป็นทางการ แต่กระบวนการของเราปฏิบัติตามหลักการทำเกษตรอินทรีย์ทั้งหมด' },
                { q: 'สามารถใช้โกลเด้น ตาล แทนน้ำตาลทรายขาวในสูตรอาหารได้หรือไม่?', a: 'ได้อย่างแน่นอน คุณสามารถใช้แทนในอัตราส่วน 1:1 ได้เลย อาจทำให้ขนมอบของคุณมีสีเข้มขึ้นเล็กน้อยและเพิ่มกลิ่นหอมที่เป็นเอกลักษณ์และอร่อย' },
                { q: 'โกลเด้น ตาล เหมาะสำหรับผู้ป่วยเบาหวานหรือไม่?', a: 'เนื่องจากมี GI ต่ำ จึงเป็นทางเลือกที่ดีกว่าน้ำตาลทรายขาว อย่างไรก็ตาม เช่นเดียวกับสารให้ความหวานอื่นๆ ผู้ป่วยเบาหวานควรปรึกษาแพทย์ก่อนบริโภค' },
                { q: 'กระบวนการผลิตเป็นอันตรายต่อต้นตาลหรือไม่?', a: 'ไม่เลย การปาดจั่นตาลเป็นประเพณีที่ยั่งยืนและเก่าแก่ซึ่งไม่เป็นอันตรายต่อต้นไม้ ต้นตาลหนึ่งต้นสามารถให้น้ำหวานได้นานหลายสิบปี' },
                { q: 'นโยบายการจัดส่งของคุณคืออะไร?', a: 'เราจัดส่งทั่วประเทศไทยโดยใช้บริการขนส่งเอกชน สำหรับการสั่งซื้อจำนวนมากและการส่งออกระหว่างประเทศ โปรดติดต่อแผนกขายส่งของเรา' },
                { q: 'ผลิตภัณฑ์ของคุณมีสารกันบูดหรือไม่?', a: 'ไม่ ผลิตภัณฑ์ของเราเป็นธรรมชาติ 100% ปราศจากสารกันบูด สีสังเคราะห์ หรือสารเติมแต่งใดๆ' },
                { q: 'ทำไมโกลเด้น ตาล ถึงมีราคาแพงกว่าน้ำตาลทรายขาว?', a: 'ราคาที่สูงขึ้นสะท้อนถึงกระบวนการผลิตแบบดั้งเดิมที่ใช้แรงงานมาก คุณค่าทางโภชนาการที่เหนือกว่า และความมุ่งมั่นของเราในการปฏิบัติตามหลักการค้าที่เป็นธรรมซึ่งสนับสนุนชุมชนเกษตรกรในท้องถิ่น' },
                { q: 'ฉันจะซื้อผลิตภัณฑ์ของคุณได้ที่ไหน?', a: 'คุณสามารถสั่งซื้อได้โดยตรงจากเว็บไซต์ของเรา หรือพบผลิตภัณฑ์ของเราได้ในซูเปอร์มาร์เก็ตพรีเมียมและร้านค้าเพื่อสุขภาพที่ร่วมรายการ' },
                { q: 'การทำสวนตาลช่วยเรื่องการเปลี่ยนแปลงสภาพภูมิอากาศได้อย่างไร?', a: 'สวนตาลเป็นแหล่งกักเก็บคาร์บอนที่ยอดเยี่ยม ต้นไม้ที่มีอายุยืนยาวมีระบบรากที่ลึกซึ่งช่วยปรับปรุงคุณภาพดินและป้องกันการพังทลาย' },
                { q: 'ฉันสามารถเยี่ยมชมสวนตาลของคุณได้หรือไม่?', a: 'เรากำลังอยู่ในขั้นตอนการพัฒนาโครงการท่องเที่ยวเชิงเกษตร โปรดติดตามเราบนโซเชียลมีเดียเพื่อรับข่าวสารในอนาคต' },
                { q: 'คุณมีการควบคุมคุณภาพแบบใด?', a: 'เราใช้การควบคุมคุณภาพอย่างเข้มงวดในทุกขั้นตอน ตั้งแต่การเก็บน้ำหวานไปจนถึงการบรรจุ เพื่อให้แน่ใจว่าคุณจะได้รับผลิตภัณฑ์ที่บริสุทธิ์และมีคุณภาพสูงสุด' },
            ]
        }
    },
    about: {
        header: {
            title: "เรื่องราวของเรา",
            subtitle: "เรื่องราวของเราไม่ได้เริ่มต้นในห้องประชุม แต่เริ่มต้นใต้ร่มเงาของต้นตาลในจังหวัดราชบุรี ที่ซึ่งมรดกแห่งความหวานได้ถูกส่งต่อจากรุ่นสู่รุ่น",
        },
        roots: {
            title: "รากเหง้าแห่งความหวาน",
            text: "ครอบครัวของเราผูกพันกับต้นตาลมานานกว่าศตวรรษ เราเติบโตมากับเสียงลมที่พัดผ่านใบตาล กลิ่นหอมหวานของน้ำตาลที่กำลังเคี่ยว และความภาคภูมิใจในงานฝีมือที่บริสุทธิ์และไม่มีการปรุงแต่ง นี่คือมรดกที่เราต้องการแบ่งปันให้โลกได้รับรู้",
        },
        fadingGold: {
            title: "ทองคำที่เลือนหาย",
            text: "ในยุคที่ความเร็วและปริมาณมักจะสำคัญกว่าคุณภาพ น้ำตาลโตนดแท้กำลังถูกแทนที่ด้วยผลิตภัณฑ์ราคาถูกที่ผสมน้ำตาลอ้อยและสารเติมแต่ง เราเห็น 'ทองคำ' ทางวัฒนธรรมนี้เริ่มจางหายไป และนั่นคือจุดเริ่มต้นของ 'โกลเด้น ตาล'",
        },
        mission: {
            title: "ภารกิจเพื่อความหวานที่ยั่งยืน",
            text: "ภารกิจของเราคือการฟื้นฟูและยกระดับคุณค่าของน้ำตาลโตนดแท้ เราทำงานโดยตรงกับชุมชนเกษตรกรเพื่อรักษาภูมิปัญญาท้องถิ่นพร้อมกับการใช้มาตรฐานคุณภาพสมัยใหม่ เพื่อให้แน่ใจว่าทุกผลิตภัณฑ์ของ โกลเด้น ตาล ไม่เพียงแต่อร่อย แต่ยังดีต่อสุขภาพ ชุมชน และโลกใบนี้",
        },
        timelineTitle: "การเดินทางอันแสนหวาน: จากอดีตสู่ปัจจุบัน",
        timeline: [
            { title: "ต้นกำเนิดในเอเชียตะวันออกเฉียงใต้", era: "ศตวรรษที่ 9", description: "บันทึกในยุคแรกๆ แสดงให้เห็นว่าน้ำจากต้นตาลถูกใช้เป็นสารให้ความหวานล้ำค่าทั่วเอเชียตะวันออกเฉียงใต้" },
            { title: "มรดกของครอบครัว", era: "จากรุ่นสู่รุ่น", description: "วิธีการขึ้นตาลแบบดั้งเดิมและการเคี่ยวน้ำตาลอย่างช้าๆ ถูกส่งต่อเป็นภูมิปัญญาของครอบครัว" },
            { title: "ในราชสำนักและอายุรเวท", era: "ราชสำนักและอายุรเวท", description: "น้ำตาลโตนดถูกใช้ในขนมไทยชาววังและเป็นส่วนประกอบสำคัญในยาอายุรเวทโบราณ" },
            { title: "กำเนิด โกลเด้น ตาล", era: "ปัจจุบัน", description: "แบรนด์ 'โกลเด้น ตาล' ก่อตั้งขึ้นพร้อมภารกิจในการอนุรักษ์มรดกนี้และนำความหวานบริสุทธิ์สู่ชาวโลก" }
        ],
        people: {
            title: "ผู้คนเบื้องหลังความบริสุทธิ์",
            founderName: "กฤษฎา เลาหศิริ (ผู้ก่อตั้ง)",
            founderQuote: "เราไม่ได้แค่ทำน้ำตาล แต่เรากำลังรักษามรดกของบ้านเกิดของเรา",
            communityTitle: "ชุมชนช่างฝีมือของเรา",
            communityText: "หัวใจของ โกลเด้น ตาล คือพันธมิตรเกษตรกรผู้ชำนาญของเรา พวกเขาคือผู้พิทักษ์ภูมิปัญญาของบรรพบุรุษ ผู้ที่ปีนขึ้นต้นตาลทุกเช้าด้วยความเคารพต่อธรรมชาติเพื่อเก็บน้ำหวานอันล้ำค่ามาให้เรา",
        },
        choice: {
            title: "ทางเลือกที่ดีต่อสุขภาพ",
            text: "เราเชื่อว่าความหวานไม่จำเป็นต้องเป็น \"ความสุขที่รู้สึกผิด\" โกลเด้น ตาล เป็นทางเลือกจากธรรมชาติที่มีดัชนีน้ำตาลต่ำ อุดมด้วยแร่ธาตุ และมีรสชาติที่ซับซ้อนกว่าสารให้ความหวานทั่วไปเช่นน้ำตาลมะพร้าวหรือน้ำตาลอ้อย เรามุ่งมั่นที่จะนำเสนอทางเลือกที่ให้คุณเพลิดเพลินกับความหวานได้อย่างสบายใจ",
        }
    },
    heritage: {
        header: {
            title: "มรดกและมาตรฐานระดับโลก",
            subtitle: "เบื้องหลังคุณภาพของ โกลเด้น ตาล คือความมุ่งมั่นสู่ความเป็นเลิศในทุกขั้นตอน ตั้งแต่ผืนดินไปจนถึงชั้นวางของคุณ",
        },
        tabs: {
            origin: "ต้นกำเนิดและมรดก",
            export: "ตลาดส่งออก",
            certs: "การรับรอง",
        },
        origin: {
            title: "น้ำตาลโตนด: มรดกแห่งรสชาติไทย",
            paragraphs: [
                "น้ำตาลโตนดของไทยเป็นสารให้ความหวานพื้นเมืองที่มีรากฐานทางวัฒนธรรมอย่างลึกซึ้ง แตกต่างจากน้ำตาลอ้อยและน้ำตาลมะพร้าวทั่วไป",
                "แหล่งกำเนิดมาจากต้นตาล (Borassus flabellifer) ซึ่งเป็นพืชพื้นเมืองของเอเชียตะวันออกเฉียงใต้ โดยมีจังหวัดเพชรบุรีและราชบุรีเป็นศูนย์กลางการผลิตของแท้มานานหลายศตวรรษ เชื่อกันว่าดินที่อุดมด้วยแร่ธาตุอันเป็นเอกลักษณ์ของภูมิภาค หรือ terroir มีส่วนทำให้เกิดรสชาติคล้ายคาราเมลที่ล้ำลึกและกลิ่นควันจางๆ",
                "กระบวนการผลิตเป็นงานฝีมือที่สืบทอดกันมาหลายชั่วอายุคน เกษตรกรที่เรียกว่า \"คนขึ้นตาล\" จะปีนขึ้นต้นตาลสูงทุกวันเพื่อเก็บน้ำหวานจากจั่นตาล จากนั้นน้ำหวานจะถูกเคี่ยวอย่างช้าๆ ในกระทะใบบัวขนาดใหญ่บนไฟฟืนเป็นเวลาหลายชั่วโมง ซึ่งเป็นกระบวนการที่พิถีพิถันที่ทำให้น้ำตาลข้นขึ้นและเกิดคาราเมลตามธรรมชาติ โดยไม่เติมสารปรุงแต่งหรือผ่านการกลั่นทางอุตสาหกรรม"
            ]
        },
        export: {
            title: "ตลาดส่งออกน้ำตาลโตนดของไทย",
            intro: "แม้ว่าข้อมูลเฉพาะสำหรับ \"น้ำตาลโตนดบริสุทธิ์\" มักจะถูกรวมกับ \"น้ำตาลมะพร้าว\" ในสถิติการส่งออก แต่ประเทศไทยก็เป็นผู้เล่นที่สำคัญในตลาดโลกสำหรับสารให้ความหวานจากธรรมชาติ ความต้องการนี้ได้รับแรงหนุนจากกระแสโลกที่มุ่งสู่อาหารที่ดีต่อสุขภาพ ออร์แกนิก และผ่านการแปรรูปน้อยที่สุด",
            market: {
                intro: "ตลาดน้ำตาลโตนดทั่วโลกคาดว่าจะสูงถึง",
                value: "2.78 พันล้านดอลลาร์สหรัฐ",
                outro: "ภายในปี 2032 โดยกลุ่มผลิตภัณฑ์ออร์แกนิกมีการเติบโตที่โดดเด่นและรวดเร็วที่สุด",
            },
            keyMarkets: {
                title: "ตลาดส่งออกที่สำคัญ",
                markets: [
                    { name: "อเมริกา (สหรัฐอเมริกาและแคนาดา)", description: "ตลาดหลักที่ผู้บริโภคที่ใส่ใจสุขภาพให้ความสำคัญกับน้ำตาลโตนดเนื่องจากมีดัชนีน้ำตาลต่ำและมีคุณค่าทางโภชนาการสูง" },
                    { name: "ยุโรป", description: "ตลาดที่แข็งแกร่งสำหรับสินค้าออร์แกนิกและ Fair-trade โดยเฉพาะในเยอรมนี ฝรั่งเศส และสหราชอาณาจักร การรับรองเป็นสิ่งสำคัญ" },
                    { name: "สหรัฐอาหรับเอมิเรตส์และตะวันออกกลาง", description: "ความต้องการส่วนใหญ่มาจากความต้องการผลิตภัณฑ์ที่ได้รับการรับรองฮาลาลและการใช้ในขนมหวานและของหวานแบบดั้งเดิม" },
                    { name: "เอเชียแปซิฟิก", description: "ประเทศเพื่อนบ้านและตลาดเช่นญี่ปุ่น เกาหลีใต้ และออสเตรเลียให้ความสนใจสูงในการใช้ทั้งในอาหารเอเชียแบบดั้งเดิมและสมัยใหม่" },
                ]
            }
        },
        certs: {
            title: "การรับรองที่จำเป็นสำหรับการส่งออก",
            intro: "เพื่อให้การส่งออกน้ำตาลโตนดประสบความสำเร็จและสร้างความมั่นใจให้กับผู้ซื้อต่างชาติในด้านคุณภาพและการปฏิบัติตามข้อกำหนด การผสมผสานระหว่างการรับรองในประเทศและที่ได้รับการยอมรับทั่วโลกจึงเป็นสิ่งจำเป็น",
            thai: {
                title: "การรับรองของไทย (รากฐานแห่งความไว้วางใจ)",
                items: [
                    { title: "GMP (Good Manufacturing Practice)", issuer: "อย. ไทย", description: "รับประกันว่ากระบวนการผลิตเป็นไปตามมาตรฐานสุขอนามัยและความปลอดภัยที่เข้มงวด ตั้งแต่การเก็บน้ำหวานจนถึงการบรรจุ" },
                    { title: "HACCP (Hazard Analysis and Critical Control Points)", issuer: "มาตรฐานสากล", description: "ระบบการจัดการความปลอดภัยของอาหารขั้นสูงที่ระบุและควบคุมอันตรายที่อาจเกิดขึ้นในกระบวนการผลิต" },
                    { title: "การอนุมัติจาก อย. ไทย", issuer: "อย. ไทย", description: "ผลิตภัณฑ์อาหารทั้งหมดต้องได้รับการจดทะเบียนและอนุมัติจากสำนักงานคณะกรรมการอาหารและยาของไทย" },
                ]
            },
            international: {
                title: "การรับรองระหว่างประเทศและเฉพาะตลาด (การเข้าถึงตลาดโลก)",
                items: [
                    { title: "การรับรองฮาลาล", issuer: "สำหรับตลาดสหรัฐอาหรับเอมิเรตส์และฮาลาล", description: "สำคัญอย่างยิ่งสำหรับการส่งออกไปยังสหรัฐอาหรับเอมิเรตส์และประเทศมุสลิมส่วนใหญ่ เพื่อให้แน่ใจว่ากระบวนการผลิตทั้งหมดเป็นไปตามกฎหมายอิสลาม" },
                    { title: "USDA Organic", issuer: "สำหรับตลาดสหรัฐอเมริกา", description: "รับประกันว่าต้นตาลปลูกโดยไม่ใช้ยาฆ่าแมลงหรือปุ๋ยสังเคราะห์ และกระบวนการแปรรูปปราศจากสารเคมี" },
                    { title: "EU Organic", issuer: "สำหรับตลาดยุโรป", description: "จำเป็นสำหรับการทำการตลาดผลิตภัณฑ์เป็น 'ออร์แกนิก' ภายในสหภาพยุโรปซึ่งมีมาตรฐานที่เข้มงวดของตนเอง" },
                    { title: "Fair Trade Certification", issuer: "ดึงดูดผู้บริโภคที่มีจริยธรรม", description: "ได้รับการยอมรับอย่างสูงในยุโรปและอเมริกาเหนือ ทำให้มั่นใจได้ว่าเกษตรกรและคนงานได้รับค่าจ้างที่เป็นธรรมและทำงานในสภาพที่ดี" },
                ]
            }
        }
    },
    sustainability: {
        header: {
            title: "ความมุ่งมั่นของเราต่อความยั่งยืน",
            subtitle: "สำหรับ โกลเด้น ตาล ความยั่งยืนไม่ใช่แค่คำพูดสวยหรู แต่เป็นหัวใจของการดำเนินงานของเรา เรายึดมั่นในหลักการ ESG เพื่อสร้างผลกระทบเชิงบวกที่ยั่งยืนต่อโลกและสังคม",
        },
        environmental: {
            title: "E: ความรับผิดชอบต่อสิ่งแวดล้อม",
            points: [
                { title: "เกษตรนิเวศ", text: "สวนตาลของเราเป็นระบบการทำฟาร์มแบบผสมผสานที่ส่งเสริมความหลากหลายทางชีวภาพและไม่ใช้สารเคมี" },
                { title: "ประสิทธิภาพการใช้น้ำ", text: "ต้นตาลทนแล้งได้ดีและต้องการน้ำน้อยกว่าอ้อยอย่างมาก" },
                { title: "การกักเก็บคาร์บอน", text: "สวนตาลที่มีอายุยืนยาวทำหน้าที่เป็นแหล่งกักเก็บคาร์บอนที่สำคัญ ช่วยลดภาวะโลกร้อน" },
                { title: "บรรจุภัณฑ์ที่เป็นมิตรกับสิ่งแวดล้อม", text: "เรามุ่งมั่นที่จะใช้วัสดุที่สามารถรีไซเคิลและย่อยสลายได้ทางชีวภาพสำหรับบรรจุภัณฑ์ของเรา" },
            ]
        },
        social: {
            title: "S: ความรับผิดชอบต่อสังคม",
            points: [
                { title: "การค้าที่เป็นธรรม", text: "เราซื้อโดยตรงจากเกษตรกรในราคาสูงกว่าตลาดเพื่อให้แน่ใจว่ามีรายได้ที่มั่นคงและยั่งยืน" },
                { title: "การพัฒนาชุมชน", text: "เราลงทุนในการพัฒนาทักษะและโปรแกรมการศึกษาสำหรับครอบครัวเกษตรกร" },
                { title: "การอนุรักษ์ภูมิปัญญาท้องถิ่น", text: "เราทำงานเพื่ออนุรักษ์และถ่ายทอดความรู้ดั้งเดิมของการทำน้ำตาลโตนด" },
                { title: "สุขภาพและความเป็นอยู่ที่ดี", text: "เราส่งเสริมผลิตภัณฑ์ที่ส่งผลดีต่อสุขภาพของผู้บริโภค" },
            ]
        },
        governance: {
            title: "G: ธรรมาภิบาลและความโปร่งใส",
            points: [
                { title: "ความโปร่งใสของห่วงโซ่อุปทาน", text: "เราให้ความสามารถในการตรวจสอบย้อนกลับผลิตภัณฑ์ของเราได้อย่างสมบูรณ์ กลับไปถึงสวนและเกษตรกร" },
                { title: "มาตรฐานคุณภาพ", text: "เรายึดมั่นในกระบวนการควบคุมคุณภาพที่เข้มงวดในทุกขั้นตอนการผลิต" },
                { title: "แนวปฏิบัติด้านจริยธรรมทางธุรกิจ", text: "เรามุ่งมั่นที่จะดำเนินงานด้วยความซื่อสัตย์และเป็นธรรมต่อผู้มีส่วนได้ส่วนเสียทั้งหมด" },
                { title: "การสื่อสารที่เปิดเผย", text: "เราให้ข้อมูลที่ถูกต้องและครบถ้วนเกี่ยวกับผลิตภัณฑ์และกระบวนการของเราแก่ผู้บริโภค" },
            ]
        },
        insights: {
            title: "ข้อมูลเชิงลึกและความโปร่งใสที่ขับเคลื่อนด้วยข้อมูล",
            chartTitle: "การเปรียบเทียบประสิทธิภาพการใช้ทรัพยากร",
            report: {
                title: "รายงานความยั่งยืนฉบับเต็มของเรา",
                text: "ดาวน์โหลดรายงานฉบับสมบูรณ์ของเราเพื่อดูรายละเอียดเกี่ยวกับแนวทางปฏิบัติ ตัวชี้วัด และเป้าหมายในอนาคตของเรา",
                cta: "ดาวน์โหลดรายงาน (PDF)",
            }
        },
        resourceChartData: [
            { subject: 'ประสิทธิภาพการใช้น้ำ', 'Golden Taan': 9, 'Cane Sugar': 3, fullMark: 10 },
            { subject: 'การใช้ที่ดินต่ำ', 'Golden Taan': 8, 'Cane Sugar': 4, fullMark: 10 },
            { subject: 'การใช้ยาฆ่าแมลงต่ำ', 'Golden Taan': 10, 'Cane Sugar': 3, fullMark: 10 },
            { subject: 'ความหลากหลายทางชีวภาพ', 'Golden Taan': 8, 'Cane Sugar': 4, fullMark: 10 },
            { subject: 'การกักเก็บคาร์บอน', 'Golden Taan': 7, 'Cane Sugar': 3, fullMark: 10 },
        ]
    },
    wholesale: {
        header: {
            title: "ร่วมเป็นพันธมิตรกับ โกลเด้น ตาล",
            subtitle: "นำเสนอความหวานบริสุทธิ์และยั่งยืนให้กับลูกค้าของคุณด้วยผลิตภัณฑ์น้ำตาลโตนดเกรดพรีเมียมของเรา",
        },
        insights: {
            title: "ข้อมูลเชิงลึกและโอกาสในตลาดโลก",
            text: "ตลาดสารให้ความหวานจากธรรมชาติกำลังเติบโตอย่างต่อเนื่อง คาดว่าจะสูงถึง 2.78 พันล้านดอลลาร์สหรัฐภายในปี 2032 โดยมี CAGR 3.4% โดยเฉพาะกลุ่มผลิตภัณฑ์ออร์แกนิกมีส่วนแบ่งการตลาดที่ใหญ่ที่สุดและพร้อมที่จะเติบโตเร็วที่สุด นี่เป็นโอกาสสำคัญสำหรับพันธมิตรของเราในการนำเสนอผลิตภัณฑ์ที่เป็นที่ต้องการและแตกต่าง",
        },
        pricing: {
            title: "โครงสร้างราคาและรูปแบบความร่วมมือ",
            text: "เราเสนอโครงสร้างราคาแบบขั้นบันไดที่ให้ผลตอบแทนตามปริมาณ และเรามีความยืดหยุ่นในการหารือเกี่ยวกับรูปแบบความร่วมมือที่เหมาะสมกับความต้องการทางธุรกิจของคุณมากที่สุด",
            table: {
                headers: ["ปริมาณการสั่งซื้อขั้นต่ำ (MOQ)", "ราคาในประเทศ (บาท/กก.) (โดยประมาณ)", "ราคาส่งออก (USD/กก.) (FOB)*"],
                rows: [
                    { moq: "50 กก.", domestic: "~165", export: "~$6.50" },
                    { moq: "100 กก.", domestic: "~150", export: "~$5.80" },
                    { moq: "500 กก.", domestic: "~135", export: "~$5.20" },
                ],
                contactRow: {
                    moq: "1,000+ กก.",
                    price: "ติดต่อเพื่อรับราคาพิเศษ",
                },
                note: "*ราคาส่งออกอาจมีการเปลี่ยนแปลงตามตลาดโลก อัตราแลกเปลี่ยน และข้อกำหนดด้านบรรจุภัณฑ์/การรับรองเฉพาะ",
            }
        },
        logistics: {
            title: "บรรจุภัณฑ์และการจัดส่งที่ยืดหยุ่น",
            packaging: {
                title: "ตัวเลือกบรรจุภัณฑ์",
                options: ["ถุงขนาดใหญ่, ถุงจัมโบ้ (สำหรับการส่งออกปริมาณมาก)", "บริการบรรจุภัณฑ์ OEM/Private Label", "แกลลอนสำหรับบริการอาหารสำหรับ HORECA", "ตัวเลือกบรรจุภัณฑ์พร้อมจำหน่ายปลีก"]
            },
            export: {
                title: "การส่งออกและโลจิสติกส์",
                services: ["การสนับสนุนเต็มรูปแบบสำหรับพิธีการศุลกากรอิเล็กทรอนิกส์", "การจัดหาใบรับรองสุขภาพและเอกสารที่จำเป็น", "การจัดการใบรับรองแหล่งกำเนิดสินค้า (CO)", "การประสานงานสำหรับการขนส่งทั่วโลก"]
            }
        },
        form: {
            title: "ขอใบเสนอราคา (RFQ)",
            companyName: "ชื่อบริษัท",
            contactPerson: "ผู้ติดต่อ",
            email: "อีเมล",
            country: "ประเทศ",
            volume: "ปริมาณที่ต้องการ (กก./ตัน)",
            productType: {
                label: "ประเภทผลิตภัณฑ์",
                options: ["แบบปึก", "แบบผง", "แบบน้ำเชื่อม", "ออร์แกนิก"]
            },
            packaging: {
                label: "ข้อกำหนดด้านบรรจุภัณฑ์",
                placeholder: "เช่น OEM, ถุงขนาดใหญ่, ฯลฯ",
            },
            message: "ข้อความเพิ่มเติม",
            submit: "ส่งคำขอใบเสนอราคา",
            successMessage: "คำขอของคุณถูกส่งเรียบร้อยแล้ว ทีมงานของเราจะติดต่อคุณในไม่ช้า",
        }
    },
    shop: {
        header: {
            title: "ตะกร้าสินค้าและการชำระเงินของคุณ",
            subtitle: "ตรวจสอบรายการของคุณและเลือกวิธีการชำระเงินที่สะดวก",
        },
        emptyCart: {
            title: "ตะกร้าสินค้าของคุณว่างเปล่า",
            text: "เพิ่มความหวานจากธรรมชาติให้กับชีวิตของคุณโดยการสำรวจผลิตภัณฑ์ของเรา",
            cta: "กลับสู่หน้าแรก",
        },
        summary: {
            title: "สรุปคำสั่งซื้อ",
            subtotal: "ยอดรวม",
            shipping: "ค่าจัดส่ง",
            total: "ทั้งหมด",
        },
        payment: {
            title: "เลือกวิธีการชำระเงิน",
            tabs: {
                qr: "QR Code",
                crypto: "คริปโตเคอเรนซี",
                card: "บัตรเครดิต / PayPal",
            },
            qr: {
                text: "สแกน QR Code นี้เพื่อชำระเงินด้วยแอปพลิเคชันธนาคารบนมือถือของคุณ",
            },
            crypto: {
                text: "ส่งการชำระเงินไปยังที่อยู่กระเป๋าเงินด้านล่าง:",
                accept: "เรารับ:",
            },
            card: {
                number: "หมายเลขบัตร",
                expiry: "วันหมดอายุ (ดด/ปป)",
                cvc: "CVC",
                name: "ชื่อบนบัตร",
                pay: "ชำระเงิน",
            }
        }
    },
    blog: {
        header: {
            title: "บล็อก: เรื่องเล่าแห่งความหวาน",
            subtitle: "สำรวจเรื่องราวลึกซึ้ง ภูมิปัญญา และคุณค่าของน้ำตาลโตนดแท้",
        },
        readMore: "อ่านต่อ",
        back: "กลับไปที่บล็อก",
        posts: [
            {
                id: 1,
                title: "น้ำตาลโตนดคืออะไร? คู่มือฉบับสมบูรณ์",
                coverImage: "https://via.placeholder.com/400x300.png?text=Palm+Sugar+Guide+(4:3)",
                introduction: "คู่มือฉบับสมบูรณ์เกี่ยวกับน้ำตาลโตนดแท้ ตั้งแต่ต้นกำเนิดและกระบวนการผลิตไปจนถึงเหตุผลที่ทำให้โดดเด่นกว่าสารให้ความหวานอื่นๆ",
                content: [
                    { type: 'paragraph', text: 'เมื่อพูดถึงความหวานในวัฒนธรรมไทย "น้ำตาลโตนด" เป็นชื่อที่ gợi ถึงมรดกอันยาวนานและรสชาติที่เป็นเอกลักษณ์ที่สืบทอดกันมารุ่นสู่รุ่น สำหรับตลาดโลก มันยังคงเป็นสมบัติล้ำค่าที่รอการค้นพบ นี่คือคู่มือฉบับสมบูรณ์เกี่ยวกับน้ำตาลโตนดแท้ สำรวจต้นกำเนิด การผลิตแบบดั้งเดิม และสิ่งที่ทำให้มันแตกต่างจากสารให้ความหวานอื่นๆ อย่างสิ้นเชิง' },
                    { type: 'heading', text: 'มรดกจากต้นตาล' },
                    { type: 'paragraph', text: 'แหล่งกำเนิดคือต้นตาล (Borassus flabellifer) ซึ่งเป็นพืชพื้นเมืองของเอเชียตะวันออกเฉียงใต้ กระบวนการผลิตเป็นงานฝีมือที่สืบทอดกันมานาน คนทำตาลที่เรียกว่า "คนปาดตาล" จะปีนขึ้นต้นตาลสูงทุกวันเพื่อเก็บน้ำหวานจากจั่นตาล จากนั้นน้ำหวานจะถูกเคี่ยวอย่างช้าๆ ในกระทะใบบัวขนาดใหญ่บนไฟฟืนเป็นเวลาหลายชั่วโมง ซึ่งเป็นกระบวนการที่พิถีพิถันที่ทำให้น้ำตาลข้นขึ้นและเกิดคาราเมลตามธรรมชาติ โดยคงสารอาหารไว้โดยไม่มีสารเติมแต่งหรือการกลั่นทางอุตสาหกรรม' },
                ]
            },
            {
                id: 2,
                title: "สูตรทองคำ: น้ำตาลโตนดและข้าวเหนียวมะม่วง",
                coverImage: "https://via.placeholder.com/400x300.png?text=Mango+Sticky+Rice+(4:3)",
                introduction: "ค้นพบว่าน้ำตาลโตนดโกลเด้น ตาล ยกระดับขนมไทยคลาสสิกอย่างข้าวเหนียวมะม่วงสู่ความอร่อยระดับใหม่ด้วยกลิ่นคาราเมลและกลิ่นควันที่เป็นเอกลักษณ์ได้อย่างไร",
                content: [
                    { type: 'heading', text: 'ความหวานที่มีเอกลักษณ์' },
                    { type: 'paragraph', text: 'ข้าวเหนียวมะม่วงทั่วไปนั้นหวาน แต่บ่อยครั้งก็มีมิติเดียว การแทนที่น้ำตาลทรายขาวหรือน้ำตาลปี๊บทั่วไปด้วยโกลเด้น ตาล จะทำให้ได้รสชาติที่ลึกซึ้งและซับซ้อนยิ่งขึ้น รสชาติเข้มข้นคล้ายคาราเมลและกลิ่นควันจางๆ เข้ากันได้ดีกับกะทิครีมมี่และมะม่วงหวาน ทำให้เกิดเป็นของหวานที่ทั้งคุ้นเคยและแปลกใหม่น่าตื่นเต้น' },
                    { type: 'image', src: 'https://via.placeholder.com/800x600.png?text=Ingredients+Flat+Lay+(4:3)', alt: 'ส่วนผสมสำหรับข้าวเหนียวมะม่วง' },
                    { type: 'heading', text: 'ส่วนผสม' },
                    { type: 'paragraph', text: '• ข้าวเหนียวเขี้ยวงู 1 ถ้วย (แช่น้ำอย่างน้อย 4 ชั่วโมง)\n• กะทิ 1 ถ้วย\n• น้ำตาลโตนดโกลเด้น ตาล สับ 1/2 ถ้วย\n• เกลือ 1/4 ช้อนชา\n• มะม่วงสุกลูกใหญ่ 1 ลูก ปอกเปลือกและหั่น\n• งาขาวคั่วสำหรับโรยหน้า (ถ้ามี)' },
                    { type: 'heading', text: 'วิธีทำ' },
                    { type: 'paragraph', text: '1. สะเด็ดน้ำข้าวเหนียวที่แช่ไว้ นึ่งประมาณ 20-25 นาที หรือจนสุกและนุ่ม\n2. ขณะที่นึ่งข้าวเหนียว ให้นำกะทิ น้ำตาลโตนดโกลเด้น ตาล และเกลือใส่หม้อตั้งไฟอ่อน คนจนน้ำตาลละลายหมด อย่าให้เดือด\n3. เมื่อข้าวเหนียวสุกแล้ว ให้ตักใส่ชาม เทส่วนผสมกะทิหวานอุ่นๆ ลงบนข้าวเหนียวร้อนๆ คนเบาๆ ให้เข้ากัน แล้วปิดฝาทิ้งไว้ 20 นาทีเพื่อให้ข้าวเหนียวดูดซับของเหลว\n4. จัดเสิร์ฟโดยตักข้าวเหนียวมูนใส่จาน วางมะม่วงสดหั่นชิ้นข้างๆ และโรยด้วยงาขาวคั่วหากต้องการ เพลิดเพลินกับรสชาติที่ยกระดับขึ้น!' },
                ]
            },
            {
                id: 3,
                title: "หนึ่งวันในชีวิตของคนปาดตาล",
                coverImage: "https://via.placeholder.com/400x300.png?text=Palm+Tapper+(4:3)",
                introduction: "พบกับสมชาย ผู้พิทักษ์ประเพณี ค้นพบงานฝีมือ ความทุ่มเท และภูมิปัญญาในแต่ละเม็ดของน้ำตาลโกลเด้น ตาล ผ่านสายตาของเกษตรกรพันธมิตรของเรา",
                content: [
                    { type: 'heading', text: 'การปีนขึ้นต้นตาลยามเช้า' },
                    { type: 'paragraph', text: 'ก่อนที่ดวงอาทิตย์จะสาดส่องลงมายังทุ่งราบของจังหวัดราชบุรี วันของสมชายได้เริ่มต้นขึ้นแล้ว ด้วยความคล่องแคล่วที่ดูเหมือนง่ายดาย เขาเริ่มปีนขึ้นสู่ยอดต้นตาลสูงตระหง่าน นี่ไม่ใช่แค่การปีน แต่เป็นพิธีกรรมประจำวัน เป็นการสนทนากับต้นไม้ที่หล่อเลี้ยงครอบครัวของเขามาหลายชั่วอายุคน' },
                    { type: 'image', src: 'https://via.placeholder.com/800x600.png?text=Farmer+Climbing+Palm+(4:3)', alt: 'ชาวสวนกำลังปีนต้นตาลในยามเช้า' },
                    { type: 'heading', text: 'ศิลปะแห่งการเก็บเกี่ยว' },
                    { type: 'paragraph', text: 'บนยอดไม้ เขาดูแลจั่นตาลอย่างชำนาญ ค่อยๆ ปาดงวงตาลเพื่อให้น้ำหวานไหลลงสู่กระบอกไม้ไผ่ที่เขาวางไว้ นี่เป็นกระบวนการที่ละเอียดอ่อนซึ่งต้องใช้ความรู้อย่างมหาศาลเพื่อให้แน่ใจว่าต้นไม้จะยังคงแข็งแรงและให้ผลผลิตได้นานหลายสิบปี' },
                    { type: 'heading', text: 'มากกว่างาน แต่คือมรดก' },
                    { type: 'paragraph', text: 'สำหรับสมชาย นี่เป็นมากกว่าอาชีพ "ผมไม่ได้แค่เก็บน้ำหวาน" เขากล่าวพลางมองไปทั่วสวน "ผมกำลังสืบสานเรื่องราวของบรรพบุรุษของผม น้ำหวานทุกหยดมีความรู้ของพวกเขาอยู่ ด้วยโกลเด้น ตาล เราสามารถแบ่งปันเรื่องราวนี้กับโลก และทำให้วิถีชีวิตนี้ยังคงอยู่ต่อไป" ความเชื่อมโยงอันลึกซึ้งระหว่างผู้คนและธรรมชาตินี้เองที่คุณได้ลิ้มรสในทุกช้อนของน้ำตาลของเรา' },
                ]
            },
            {
                id: 4,
                title: "ปลาแซลมอนเคลือบโกลเด้น ตาล: ความอร่อยที่ดีต่อสุขภาพ",
                coverImage: "https://via.placeholder.com/400x300.png?text=Glazed+Salmon+(4:3)",
                introduction: "ก้าวข้ามของหวานแบบดั้งเดิมและค้นพบว่าความหวานที่ซับซ้อนของโกลเด้น ตาล สามารถสร้างสรรค์เมนูอาหารคาวที่น่าตื่นตาตื่นใจได้อย่างไร สูตรปลาแซลมอนเคลือบนี้ง่าย ดีต่อสุขภาพ และมีรสชาติที่น่าทึ่ง",
                content: [
                    { type: 'heading', text: 'เมื่ออาหารคาวพบกับความหวาน' },
                    { type: 'paragraph', text: "กลิ่นคาราเมลที่ล้ำลึกของน้ำตาลโตนดโกลเด้น ตาล เข้ากันได้อย่างลงตัวกับรสชาติที่เข้มข้นของปลาแซลมอน น้ำเคลือบนี้จะเกิดคาราเมลอย่างสวยงาม ทำให้เกิดผิวกรอบเล็กน้อยในขณะที่เนื้อปลายังคงความชุ่มฉ่ำและนุ่มนวล เป็นอาหารคุณภาพระดับภัตตาคารที่คุณสามารถทำเองได้ง่ายๆ ที่บ้าน" },
                    { type: 'heading', text: 'ส่วนผสม' },
                    { type: 'paragraph', text: '• เนื้อปลาแซลมอน 2 ชิ้น (ประมาณชิ้นละ 170 กรัม)\n• น้ำตาลโตนดโกลเด้น ตาล แบบผงหรือสับละเอียด 2 ช้อนโต๊ะ\n• ซีอิ๊ว 2 ช้อนโต๊ะ (หรือทามาริสำหรับสูตรปลอดกลูเตน)\n• ขิงสดขูด 1 ช้อนโต๊ะ\n• กระเทียมสับ 1 กลีบ\n• น้ำมะนาว 1 ช้อนโต๊ะ\n• ผักชีสับและงาสำหรับโรยหน้า' },
                    { type: 'heading', text: 'วิธีทำ' },
                    { type: 'paragraph', text: "1. เปิดเตาอบที่อุณหภูมิ 200°C (400°F)\n2. ในชามเล็ก ผสมน้ำตาลโกลเด้น ตาล, ซีอิ๊ว, ขิง, กระเทียม และน้ำมะนาวเข้าด้วยกันจนน้ำตาลละลาย\n3. วางเนื้อปลาแซลมอนบนถาดอบที่รองด้วยกระดาษรองอบ ทาน้ำเคลือบให้ทั่วด้านบนและด้านข้างของปลาแซลมอน\n4. อบประมาณ 12-15 นาที หรือจนกว่าปลาจะสุกและเนื้อปลาแยกออกจากกันได้ง่ายด้วยส้อม หากต้องการให้ด้านบนมีสีคาราเมลมากขึ้น สามารถย่างไฟบน 1-2 นาทีสุดท้าย โดยระวังไม่ให้ไหม้\n5. ก่อนเสิร์ฟ โรยหน้าด้วยผักชีสดและงาขาว เข้ากันได้ดีกับข้าวสวยและผักนึ่ง" },
                ]
            },
            {
                id: 5,
                title: "จากสวนสู่โลก: การเดินทางของน้ำตาลของเรา",
                coverImage: "https://via.placeholder.com/400x300.png?text=Global+Journey+(4:3)",
                introduction: "น้ำตาลโกลเด้น ตาล ทุกก้อนบอกเล่าเรื่องราวของการทำเกษตรกรรมที่ยั่งยืน การเสริมสร้างพลังให้ชุมชน และการควบคุมคุณภาพอย่างพิถีพิถัน ติดตามการเดินทางจากจั่นตาลดอกเดียวสู่ครัวของคุณ",
                content: [
                    { type: 'heading', text: 'ขั้นตอนที่ 1: การเก็บเกี่ยวที่ยั่งยืน' },
                    { type: 'paragraph', text: "การเดินทางเริ่มต้นที่สวนตาลอันบริสุทธิ์ของเรา ที่ซึ่งเกษตรกรปฏิบัติการเกษตรเชิงนิเวศ พวกเขาไม่ได้แค่เก็บเกี่ยวจากต้นไม้ แต่ยังบำรุงรักษาระบบนิเวศทั้งหมด น้ำหวานถูกเก็บด้วยวิธีการดั้งเดิมที่ไม่เป็นอันตราย เพื่อให้แน่ใจว่าต้นไม้จะยังคงแข็งแรงสำหรับคนรุ่นต่อไป" },
                    { type: 'heading', text: 'ขั้นตอนที่ 2: กระบวนการแบบดั้งเดิม' },
                    { type: 'paragraph', text: "น้ำตาลสดที่เก็บได้จะถูกขนส่งไปยังศูนย์แปรรูปของชุมชน ที่นี่จะถูกเคี่ยวอย่างช้าๆ ในกระทะเปิด นี่ไม่ใช่แค่การระเหย แต่เป็นงานฝีมือ ช่างฝีมือรู้ดีว่าเมื่อไหร่น้ำตาลจะมีความข้น สี และกลิ่นที่สมบูรณ์แบบ กระบวนการที่อ่อนโยนและไม่เร่งรีบนี้ช่วยรักษแร่ธาตุและสารอาหารที่สำคัญไว้" },
                    { type: 'heading', text: 'ขั้นตอนที่ 3: การตรวจสอบคุณภาพและความบริสุทธิ์' },
                    { type: 'paragraph', text: "ก่อนการบรรจุ น้ำตาลโกลเด้น ตาล ทุกชุดจะถูกทดสอบคุณภาพ เราตรวจสอบความชื้น รสชาติ และความบริสุทธิ์เพื่อให้แน่ใจว่าเป็นไปตามมาตรฐานที่เข้มงวดของเรา ไม่มีการเติมสารปรุงแต่ง ไม่มีการผสมกับน้ำตาลอื่น ๆ มีเพียงน้ำหวานจากต้นตาลโตนดบริสุทธิ์ 100%" },
                     { type: 'heading', text: 'ขั้นตอนที่ 4: การเข้าถึงทั่วโลก' },
                    { type: 'paragraph', text: "สุดท้าย น้ำตาลจะถูกบรรจุอย่างระมัดระวังเพื่อรักษาความสดใหม่และจัดส่งไปยังลูกค้าทั่วโลก กระบวนการทั้งหมดนี้สร้างขึ้นบนรากฐานของความเป็นธรรม โดยจ่ายราคาพรีเมี่ยมให้กับเกษตรกรของเราเพื่อเป็นเกียรติแก่ทักษะและความทุ่มเทของพวกเขา เมื่อคุณเลือกโกลเด้น ตาล คุณไม่ได้แค่ซื้อสารให้ความหวาน แต่คุณกำลังสนับสนุนห่วงโซ่การผลิตที่ยั่งยืนและมีจริยธรรม" },
                ]
            }
        ]
    },
    footer: {
        address: "919/1 อาคารเจมส์ ทาวเวอร์, ถนนสีลม, แขวงสีลม, เขตบางรัก, กรุงเทพมหานคร 10500, ประเทศไทย",
        contactPerson: { label: "ผู้ติดต่อ", name: "คุณกฤษฎา เลาหศิริ" },
        phone: { label: "โทร/WhatsApp", number: "+66(0)81 851 9922" },
        email: { label: "อีเมล", address: "info@goldentaan.com" },
        quickLinks: "ลิงก์ด่วน",
        copyright: "© {year} บริษัท โกลเด้น ตาล จำกัด สงวนลิขสิทธิ์",
    }
};

const de: Translations = {
    metaTitle: "Golden Taan | Authentischer Palmzucker - Nachhaltig bezogen",
    metaDescription: "Entdecken Sie Golden Taan, den Premium-Palmyrazucker mit niedrigem GI. 100% rein, unraffiniert und nachhaltig bezogen von unseren Familienfarmen in Ratchaburi, Thailand.",
    nav: {
        home: "Startseite",
        ourStory: "Unsere Geschichte",
        heritage: "Herkunft & Standards",
        blog: "Blog",
        sustainability: "Nachhaltigkeit",
        wholesale: "Großhandel & B2B",
        shopNow: "Jetzt Kaufen",
        homeSubItems: [
            { id: '#our-story', label: 'Unsere Geschichte' },
            { id: '#health-benefits', label: 'Gesundheitliche Vorteile' },
            { id: '#products', label: 'Produkte' },
            { id: '#contact', label: 'Kontakt' },
        ]
    },
    home: {
        hero: {
            headline: "Golden Taan: Ein Erbe der Süße",
            subheadline: "Entdecken Sie den reinen Geschmack von authentischem Palmyrazucker, von der Natur perfektioniert.",
            cta: "Entdecken Sie unsere Geschichte",
        },
        trends: {
            headline: "Eine Welt, die sich nach Authentizität sehnt",
            description: "Die globale Lebensmittellandschaft befindet sich in einem monumentalen Wandel. Moderne Verbraucher achten nicht nur auf den Geschmack, sondern suchen in jedem Bissen nach Transparenz, Gesundheit und Nachhaltigkeit.",
            billion: "Milliarden",
            marketStat: "Der Markt für natürliche Süßstoffe wird bis 2030 voraussichtlich über 55 Mrd. $ erreichen.",
            consumerStat: "der weltweiten Verbraucher entscheiden sich aktiv für Produkte mit natürlichen, clean-label Zutaten.",
        },
        health: {
            headline: "Der gesunde Unterschied: Ein tiefer Einblick in die Nährwerte",
            description: "Im Gegensatz zu raffiniertem weißem Zucker, dem die Nährstoffe entzogen werden, behalten unraffinierte Süßstoffe wie Golden Taan und roher Rohrzucker einen erheblichen Teil ihrer natürlichen Mineralien. Dieses Diagramm zeigt den krassen Unterschied im Nährwert pro 100g.",
            chartTitle: "Nährstoffvergleich (pro 100g)",
            goldenTaan: "Golden Taan",
            unrefinedSugarcane: "Unraffinierter Rohrzucker",
            refinedWhiteSugar: "Raffinierter Weißzucker",
            nutrientData: nutrientData.de,
            insight: {
                title: "Wichtige Erkenntnis: Die Kraft des Unraffinierten",
                text: "Die Daten zeigen deutlich die Überlegenheit unraffinierter Süßstoffe. Während sowohl Golden TAAN als auch roher Rohrzucker reich an essentiellen Mineralien sind, zeichnet sich Golden TAAN durch seinen außergewöhnlich hohen Kaliumgehalt aus – über 500-mal mehr als weißer Zucker und mehr als doppelt so viel wie Rohrzucker. Kalium ist ein lebenswichtiger Elektrolyt, der für die Regulierung des Blutdrucks, der Nervenfunktion und der Muskelkontraktionen unerlässlich ist, was Golden TAAN zu einer einzigartig vorteilhaften Wahl für einen gesundheitsbewussten Lebensstil macht.",
            },
            goldenTaanEffect: "Sorgt für eine langsame, stetige Energiefreisetzung für anhaltende Vitalität.",
            whiteSugarEffect: "Verursacht einen schnellen Blutzuckeranstieg, gefolgt von einem Energieabfall."
        },
        process: {
            headline: "Eine Geschichte von zwei Prozessen",
            description: "Der Prozess unterscheidet ein lebendiges Süßungsmittel von einem leeren. Das macht den ganzen Unterschied.",
            artisanal: {
                title: "Golden Taan (Handwerkliche Methode)",
                steps: [
                    { title: "Ernte", description: "Erfahrene Bauern klettern auf die Palmen, um den süßen Nektar aus den Blüten mit Bambuszylindern zu sammeln." },
                    { title: "Köcheln", description: "Der frische Nektar wird langsam in großen Woks über einem sanften Holzfeuer gekocht, bis er eindickt." },
                    { title: "Kristallisieren", description: "Anschließend lässt man ihn abkühlen und natürlich kristallisieren, wodurch Farbe, Aroma und Nährstoffe erhalten bleiben." },
                ],
            },
            industrial: {
                title: "Weißer Zucker (Industrielle Methode)",
                steps: [
                    { title: "Ernte & Zerkleinern", description: "Zuckerrohr wird maschinell geerntet und zerkleinert, um den Saft zu extrahieren." },
                    { title: "Klärung", description: "Chemikalien wie Kalk und Schwefeldioxid werden verwendet, um Verunreinigungen aus dem Saft zu entfernen." },
                    { title: "Bleichen & Filtern", description: "Der Saft wird durch Aktivkohle gefiltert, um seine reinweiße Farbe zu erhalten." },
                    { title: "Kristallisation", description: "Zentrifugen schleudern den Sirup, um Kristalle aus fast 100% reiner Saccharose zu bilden." },
                ]
            }
        },
        impact: {
            headline: "Ein nachhaltiges Ökosystem",
            description: "Der Anbau von Palmyra-Palmen ist eine von Natur aus nachhaltige Form der Landwirtschaft, die sich positiv auf die Umwelt auswirkt, im Gegensatz zu Zuckerrohr-Monokulturen, die oft Ökosysteme schädigen.",
            chartTitle: "Nachhaltigkeits-Impact-Index (Score von 10)",
            conventionalSugarcane: "Konventioneller Zuckerrohranbau",
            sustainabilityData: [
                { name: 'Wassereffizienz', goldenTaan: 9, sugarcane: 3 },
                { name: 'Bodenregeneration', goldenTaan: 9, sugarcane: 2 },
                { name: 'Geringer Pestizideinsatz', goldenTaan: 10, sugarcane: 3 },
                { name: 'Biodiversität', goldenTaan: 8, sugarcane: 4 },
                { name: 'Kohlenstoffspeicherung', goldenTaan: 7, sugarcane: 3 },
            ],
            community: {
                headline: "In der Gemeinschaft verwurzelt",
                description: "Die Wahl von Golden Taan bedeutet, in einen Kreislauf des Wohlstands zu investieren, der beim Baum beginnt, zu den Bauernfamilien fließt und als Produkt von unvergleichlicher Qualität zu Ihnen zurückkehrt.",
                stats: [
                    { value: 40, unit: "+", label: "Jahre kann ein einzelner Baum einer Familie Einkommen sichern" },
                    { value: 2000, unit: "+", label: "Ländliche Haushalte mit stabilem Einkommen unterstützt" },
                    { value: 25, unit: "Mio.+", label: "Jährliche Exporterlöse für Gemeinschaftsunternehmen", prefix: "€" },
                    { value: 15, unit: "%", label: "Prämie, die an Bauern über dem Marktpreis gezahlt wird" },
                ]
            }
        },
        productSection: {
            headline: "Unsere Produkte",
            description: "Mit Sorgfalt hergestellt, von unseren Palmen in Ihre Vorratskammer.",
            addToCart: "In den Warenkorb",
            added: "Hinzugefügt!",
        },
        products: [
            { id: 'p1', img: 'https://via.placeholder.com/400x400.png?text=Palm+Sugar+Block+(1:1)', title: 'Palmyrazucker-Block', description: 'Reicher, tiefer Geschmack mit einem einzigartigen Aroma. Eine weiche, fudge-ähnliche Textur, perfekt für traditionelle thailändische Küche und Desserts.', price: 8 },
            { id: 'p2', img: 'https://via.placeholder.com/400x400.png?text=Palm+Sugar+Powder+(1:1)', title: 'Palmyrazucker-Pulver', description: 'Fein gemahlen für einfache Anwendung und schnelles Auflösen. Ideal für modernes Backen und zum Süßen von Getränken.', price: 10 },
            { id: 'p3', img: 'https://via.placeholder.com/400x400.png?text=Palm+Sugar+Syrup+(1:1)', title: 'Palmyrazucker-Sirup', description: 'Eine reiche, konzentrierte flüssige Süße. Perfekt als Topping für Pfannkuchen, Eiscreme oder zum Mischen in Cocktails.', price: 12 },
        ],
        faq: {
            headline: "Häufig gestellte Fragen",
            showMore: "Weitere Fragen anzeigen",
            items: [
                { q: 'Wie kann ich authentischen Golden Taan von Imitationen unterscheiden?', a: 'Authentischer Golden Taan hat eine natürliche goldbraune Farbe, ein reiches karamellartiges Aroma und eine sanfte, milde Süße. Imitationen sind oft dunkler durch zugesetzten braunen Zucker und haben einen scharfen, zuckerigen Geschmack.' },
                { q: 'Was ist der Unterschied zwischen Palmyrazucker und Kokosblütenzucker?', a: 'Beide sind Palmzucker, stammen aber von verschiedenen Arten. Palmyrazucker stammt von der Palmyra-Palme (Borassus flabellifer), während Kokosblütenzucker von der Kokospalme stammt. Palmyrazucker hat typischerweise ein komplexeres, aromatischeres Geschmacksprofil.' },
                { q: 'Was ist die Haltbarkeit Ihrer Produkte?', a: 'Unsere festen Blöcke und Pulver können 12-18 Monate an einem kühlen, trockenen Ort gelagert werden. Der Sirup sollte gekühlt und innerhalb von 6 Monaten nach dem Öffnen verbraucht werden.' },
                { q: 'Was ist der glykämische Index (GI) von Golden Taan?', a: 'Golden Taan hat einen niedrigen glykämischen Index von etwa 35, was deutlich niedriger ist als bei weißem Zucker (ca. 65) und Honig (ca. 58).' },
                { q: 'Sind Ihre Produkte biologisch?', a: 'Unsere Palmyra-Palmen wachsen natürlich ohne den Einsatz von Pestiziden oder chemischen Düngemitteln. Obwohl wir noch nicht offiziell bio-zertifiziert sind, folgt unser Prozess allen Prinzipien des biologischen Landbaus.' },
                { q: 'Kann ich Golden Taan in Rezepten anstelle von weißem Zucker verwenden?', a: 'Absolut. Sie können es als 1:1-Ersatz verwenden. Es kann Ihren Backwaren eine etwas dunklere Farbe und ein einzigartiges, köstliches Aroma verleihen.' },
                { q: 'Ist Golden Taan für Diabetiker geeignet?', a: 'Aufgrund seines niedrigen GI ist es eine bessere Alternative zu weißem Zucker. Wie bei jedem Süßstoff sollten Personen mit Diabetes jedoch vor dem Verzehr ihren Arzt konsultieren.' },
                { q: 'Schadet der Produktionsprozess den Palmen?', a: 'Überhaupt nicht. Das Anzapfen der Palmenblüten ist eine nachhaltige, jahrhundertealte Tradition, die dem Baum nicht schadet. Eine einzige Palmyra-Palme kann jahrzehntelang Saft liefern.' },
                { q: 'Was ist Ihre Versandrichtlinie?', a: 'Wir versenden in ganz Thailand mit privaten Kurierdiensten. Für Großbestellungen und internationale Exporte wenden Sie sich bitte an unsere Großhandelsabteilung.' },
                { q: 'Enthalten Ihre Produkte Konservierungsstoffe?', a: 'Nein, unsere Produkte sind 100% natürlich, frei von Konservierungsstoffen, künstlichen Farbstoffen oder jeglichen Zusatzstoffen.' },
                { q: 'Warum ist Golden Taan teurer als weißer Zucker?', a: 'Der höhere Preis spiegelt den arbeitsintensiven, handwerklichen Produktionsprozess, seinen überlegenen Nährwert und unser Engagement für faire Handelspraktiken wider, die lokale Bauerngemeinschaften unterstützen.' },
                { q: 'Wo kann ich Ihre Produkte kaufen?', a: 'Sie können direkt auf unserer Website bestellen oder unsere Produkte in ausgewählten Premium-Supermärkten und Bioläden finden.' },
                { q: 'Wie hilft der Palmenanbau beim Klimawandel?', a: 'Palmenhaine sind ausgezeichnete Kohlenstoffsenken. Die langlebigen Bäume haben tiefe Wurzelsysteme, die die Bodenqualität verbessern und Erosion verhindern.' },
                { q: 'Kann ich Ihre Palmenhaine besuchen?', a: 'Wir sind dabei, ein Agrotourismus-Programm zu entwickeln. Bitte folgen Sie uns in den sozialen Medien für zukünftige Ankündigungen.' },
                { q: 'Welche Art von Qualitätskontrolle haben Sie?', a: 'Wir implementieren in jeder Phase, von der Saftsammlung bis zur Verpackung, eine strenge Qualitätskontrolle, um sicherzustellen, dass Sie das reinste und hochwertigste Produkt erhalten.' },
            ]
        }
    },
    about: {
        header: {
            title: "Unsere Geschichte",
            subtitle: "Unsere Geschichte begann nicht in einem Sitzungssaal. Sie begann im Schatten der Palmyra-Palmen in Ratchaburi, wo ein Erbe der Süße seit Generationen weitergegeben wird.",
        },
        roots: {
            title: "Die Wurzeln der Süße",
            text: "Unsere Familie ist seit über einem Jahrhundert mit der Palmyra-Palme verbunden. Wir sind mit dem Geräusch des Windes in den Palmblättern, dem süßen Duft von köchelndem Nektar und dem Stolz auf reines, unverfälschtes Handwerk aufgewachsen. Das ist das Erbe, das wir mit der Welt teilen möchten.",
        },
        fadingGold: {
            title: "Das verblassende Gold",
            text: "In einer Zeit, in der Geschwindigkeit und Quantität oft über Qualität stehen, wurde authentischer Palmyrazucker durch billigere Produkte ersetzt, die mit Rohrzucker und Zusatzstoffen gemischt wurden. Wir sahen, wie dieses kulturelle 'Gold' zu verblassen begann, und das war der Anfang von 'Golden Taan'.",
        },
        mission: {
            title: "Eine Mission für nachhaltige Süße",
            text: "Unsere Mission ist es, den Wert von authentischem Palmyrazucker wiederzubeleben und zu steigern. Wir arbeiten direkt mit Bauerngemeinschaften zusammen, um traditionelles Wissen zu bewahren und gleichzeitig moderne Qualitätsstandards umzusetzen, um sicherzustellen, dass jedes Golden Taan Produkt nicht nur köstlich ist, sondern auch gut für Ihre Gesundheit, die Gemeinschaft und den Planeten.",
        },
        timelineTitle: "Die süße Reise: Vergangenheit bis Gegenwart",
        timeline: [
            { title: "Ursprünge in Südostasien", era: "9. Jahrhundert", description: "Frühe Aufzeichnungen zeigen, dass Palmyra-Palmensaft als geschätztes Süßungsmittel in ganz Südostasien verwendet wurde." },
            { title: "Ein Familienerbe", era: "Von Generation zu Generation", description: "Die traditionellen Methoden des Palmenzapfens und des langsamen Kochens von Saft werden als Familienwissen weitergegeben." },
            { title: "An königlichen Höfen & im Ayurveda", era: "Königliche Höfe & Ayurveda", description: "Palmzucker wurde in königlichen thailändischen Desserts und als wichtige Zutat in der alten ayurvedischen Medizin verwendet." },
            { title: "Die Geburt von Golden Taan", era: "Heute", description: "Die Marke 'Golden Taan' wird mit der Mission gegründet, dieses Erbe zu bewahren und reine Süße in die Welt zu bringen." }
        ],
        people: {
            title: "Die Menschen hinter der Reinheit",
            founderName: "Krisada Laohasiri (Gründer)",
            founderQuote: "Wir stellen nicht nur Zucker her; wir bewahren das Erbe unserer Heimat.",
            communityTitle: "Unsere Gemeinschaft von Handwerkern",
            communityText: "Das Herz von Golden Taan sind unsere qualifizierten Bauernpartner. Sie sind die Hüter des überlieferten Wissens, die jeden Morgen mit tiefem Respekt vor der Natur auf die Palmen klettern, um den kostbaren Nektar für uns zu sammeln.",
        },
        choice: {
            title: "Die gesündere Wahl",
            text: "Wir glauben, dass Süße kein \"schlechtes Gewissen\" sein muss. Golden Taan ist eine natürliche Alternative mit einem niedrigen glykämischen Index, reich an Mineralien und einem komplexeren Geschmack als übliche Süßungsmittel wie Kokos- oder Rohrzucker. Wir sind bestrebt, eine Wahl anzubieten, mit der Sie Süße unbesorgt genießen können.",
        }
    },
    heritage: {
        header: {
            title: "Herkunft & Globale Standards",
            subtitle: "Hinter der Qualität von Golden Taan steht ein Bekenntnis zu Exzellenz bei jedem Schritt, von unserem Boden bis zu Ihrem Regal.",
        },
        tabs: {
            origin: "Herkunft & Erbe",
            export: "Exportmärkte",
            certs: "Zertifizierungen",
        },
        origin: {
            title: "Palmyrazucker: Ein Erbe des thailändischen Geschmacks",
            paragraphs: [
                "Thailändischer Palmyrazucker ist ein einheimisches Süßungsmittel mit tiefen kulturellen Wurzeln, das sich von gewöhnlichem Rohr- und Kokoszucker unterscheidet.",
                "Seine Quelle ist die Palmyra-Palme (Borassus flabellifer), die in Südostasien beheimatet ist, wobei die Provinzen Phetchaburi und Ratchaburi seit Jahrhunderten die historischen Epizentren der authentischen Produktion sind. Es wird angenommen, dass der einzigartige mineralreiche Boden der Region, oder Terroir, zum tiefen, karamellartigen Geschmack und den subtilen rauchigen Noten des Zuckers beiträgt.",
                "Der Produktionsprozess ist ein altehrwürdiges Handwerk, das über Generationen weitergegeben wird. Bauern, bekannt als \"Zapfer\", klettern täglich auf die hohen Palmen, um Nektar aus den Blüten des Baumes zu sammeln. Dieser Nektar wird dann stundenlang langsam in großen Woks über Holzfeuern gekocht – ein sorgfältiger Prozess, der den Zucker auf natürliche Weise eindickt und karamellisiert, seinen Geschmack konzentriert und seine Nährstoffe ohne jegliche Zusatzstoffe oder industrielle Raffination bewahrt."
            ]
        },
        export: {
            title: "Thailands Palmzucker-Exportmarkt",
            intro: "Während spezifische Daten für \"reinen Palmyrazucker\" oft mit \"Kokoszucker\" in Exportstatistiken zusammengefasst werden, ist Thailand ein bedeutender Akteur auf dem globalen Markt für natürliche Süßstoffe. Diese Nachfrage wird durch den weltweiten Trend zu gesünderen, biologischen und minimal verarbeiteten Lebensmitteln angetrieben.",
            market: {
                intro: "Der globale Palmzuckermarkt wird voraussichtlich erreichen",
                value: "2,78 Milliarden US-Dollar",
                outro: "bis 2032, wobei das Bio-Segment das prominenteste und schnellste Wachstum zeigt.",
            },
            keyMarkets: {
                title: "Wichtige Exportmärkte",
                markets: [
                    { name: "Nord- und Südamerika (USA & Kanada)", description: "Ein Primärmarkt, auf dem gesundheitsbewusste Verbraucher Palmzucker wegen seines niedrigen glykämischen Index und seines hohen Nährwerts schätzen." },
                    { name: "Europa", description: "Ein starker Markt für Bio- und Fair-Trade-Waren, insbesondere in Deutschland, Frankreich und Großbritannien. Zertifizierungen sind entscheidend." },
                    { name: "VAE & Naher Osten", description: "Die Nachfrage wird größtenteils durch den Bedarf an Halal-zertifizierten Produkten und deren Verwendung in traditionellen Süßigkeiten und Desserts angetrieben." },
                    { name: "Asien-Pazifik", description: "Nachbarländer und Märkte wie Japan, Südkorea und Australien zeigen großes Interesse an der Verwendung in sowohl traditioneller als auch moderner asiatischer Küche." },
                ]
            }
        },
        certs: {
            title: "Wesentliche Exportzertifizierungen",
            intro: "Um Palmzucker erfolgreich zu exportieren und internationalen Käufern Qualität und Konformität zu versichern, ist eine Kombination aus nationalen und weltweit anerkannten Zertifizierungen unerlässlich.",
            thai: {
                title: "Thailändische Zertifizierungen (Die Grundlage des Vertrauens)",
                items: [
                    { title: "GMP (Gute Herstellungspraxis)", issuer: "Thailändische FDA", description: "Sicherstellung, dass der Produktionsprozess strengen Hygiene- und Sicherheitsstandards entspricht, von der Saftsammlung bis zur Verpackung." },
                    { title: "HACCP (Gefahrenanalyse und kritische Kontrollpunkte)", issuer: "Globaler Standard", description: "Ein fortschrittliches Managementsystem für Lebensmittelsicherheit, das potenzielle Gefahren im Produktionsprozess identifiziert und kontrolliert." },
                    { title: "Thailändische FDA-Zulassung", issuer: "Thailändische FDA", description: "Alle Lebensmittelprodukte müssen bei der thailändischen Lebensmittel- und Arzneimittelbehörde registriert und zugelassen sein." },
                ]
            },
            international: {
                title: "Internationale & marktspezifische Zertifizierungen (Globaler Marktzugang)",
                items: [
                    { title: "Halal-Zertifizierung", issuer: "Für VAE & Halal-Märkte", description: "Entscheidend für den Export in die VAE und die meisten muslimischen Länder, um sicherzustellen, dass der gesamte Produktionsprozess dem islamischen Recht entspricht." },
                    { title: "USDA Organic", issuer: "Für den US-Markt", description: "Garantiert, dass die Palmen ohne synthetische Pestizide oder Düngemittel angebaut werden und die Verarbeitung chemikalienfrei ist." },
                    { title: "EU Organic", issuer: "Für den europäischen Markt", description: "Erforderlich, um ein Produkt als 'biologisch' innerhalb der EU zu vermarkten, die ihre eigenen strengen Standards hat." },
                    { title: "Fair-Trade-Zertifizierung", issuer: "Appell an ethische Verbraucher", description: "In Europa und Nordamerika hoch angesehen, um sicherzustellen, dass Bauern und Arbeiter fair bezahlt werden und unter guten Bedingungen arbeiten." },
                ]
            }
        }
    },
    sustainability: {
        header: {
            title: "Unser Engagement für Nachhaltigkeit",
            subtitle: "Für Golden Taan ist Nachhaltigkeit kein Schlagwort – es ist der Kern unseres Handelns. Wir orientieren uns an ESG-Prinzipien, um einen dauerhaften positiven Einfluss auf den Planeten und die Gesellschaft zu schaffen.",
        },
        environmental: {
            title: "E: Umweltverantwortung",
            points: [
                { title: "Agrarökologie", text: "Unsere Palmenhaine sind integrierte Anbausysteme, die die Biodiversität fördern und ohne chemische Zusätze auskommen." },
                { title: "Wassereffizienz", text: "Palmyra-Palmen sind trockenresistent und benötigen deutlich weniger Wasser als Zuckerrohr." },
                { title: "Kohlenstoffbindung", text: "Langlebige Palmenhaine fungieren als wichtige Kohlenstoffsenken und helfen, die globale Erwärmung zu mildern." },
                { title: "Umweltfreundliche Verpackung", text: "Wir verpflichten uns, recycelbare und biologisch abbaubare Materialien für unsere Verpackungen zu verwenden." },
            ]
        },
        social: {
            title: "S: Soziale Verantwortung",
            points: [
                { title: "Fairer Handel", text: "Wir kaufen direkt von den Bauern zu Preisen über dem Marktniveau, um ein stabiles und nachhaltiges Einkommen zu gewährleisten." },
                { title: "Gemeinschaftsentwicklung", text: "Wir investieren in die Kompetenzentwicklung und Bildungsprogramme für Bauernfamilien." },
                { title: "Bewahrung lokalen Wissens", text: "Wir arbeiten daran, das traditionelle Wissen der handwerklichen Palmzuckerherstellung zu bewahren und weiterzugeben." },
                { title: "Gesundheit & Wohlbefinden", text: "Wir fördern ein Produkt, das positiv zur Gesundheit unserer Verbraucher beiträgt." },
            ]
        },
        governance: {
            title: "G: Governance & Transparenz",
            points: [
                { title: "Transparenz der Lieferkette", text: "Wir bieten volle Rückverfolgbarkeit für unsere Produkte, bis hin zum Hain und zum Bauern." },
                { title: "Qualitätsstandards", text: "Wir halten uns in jeder Produktionsphase an strenge Qualitätskontrollprozesse." },
                { title: "Ethische Geschäftspraktiken", text: "Wir verpflichten uns, mit Integrität und Fairness gegenüber allen Interessengruppen zu handeln." },
                { title: "Offene Kommunikation", text: "Wir stellen den Verbrauchern genaue und vollständige Informationen über unsere Produkte und Prozesse zur Verfügung." },
            ]
        },
        insights: {
            title: "Datengestützte Einblicke & Transparenz",
            chartTitle: "Vergleich der Ressourceneffizienz",
            report: {
                title: "Unser vollständiger Nachhaltigkeitsbericht",
                text: "Laden Sie unseren umfassenden Bericht herunter, um einen tiefen Einblick in unsere Praktiken, Kennzahlen und zukünftigen Ziele zu erhalten.",
                cta: "Bericht herunterladen (PDF)",
            }
        },
        resourceChartData: [
            { subject: 'Wassereffizienz', 'Golden Taan': 9, 'Cane Sugar': 3, fullMark: 10 },
            { subject: 'Geringer Landnutzung', 'Golden Taan': 8, 'Cane Sugar': 4, fullMark: 10 },
            { subject: 'Geringer Pestizideinsatz', 'Golden Taan': 10, 'Cane Sugar': 3, fullMark: 10 },
            { subject: 'Biodiversität', 'Golden Taan': 8, 'Cane Sugar': 4, fullMark: 10 },
            { subject: 'Kohlenstoffspeicherung', 'Golden Taan': 7, 'Cane Sugar': 3, fullMark: 10 },
        ]
    },
    wholesale: {
        header: {
            title: "Partner von Golden Taan werden",
            subtitle: "Bieten Sie Ihren Kunden reine, nachhaltige Süße mit unseren Premium-Palmyrazuckerprodukten.",
        },
        insights: {
            title: "Globale Markteinblicke & Chancen",
            text: "Der Markt für natürliche Süßstoffe verzeichnet ein stetiges Wachstum und wird bis 2032 voraussichtlich 2,78 Milliarden US-Dollar erreichen, mit einer CAGR von 3,4 %. Insbesondere das Bio-Segment hält den größten Marktanteil und ist für das schnellste Wachstum positioniert. Dies stellt eine bedeutende Chance für unsere Partner dar, ein nachgefragtes, differenziertes Produkt anzubieten.",
        },
        pricing: {
            title: "Preisstruktur & Partnerschaftsmodelle",
            text: "Wir bieten eine gestaffelte Preisstruktur, die Volumen belohnt, und sind flexibel bei der Erörterung von Partnerschaftsmodellen, die am besten zu Ihren Geschäftsanforderungen passen.",
            table: {
                headers: ["Mindestbestellmenge (MOQ)", "Inlandspreis (THB/kg) (ca.)", "Exportpreis (USD/kg) (FOB)*"],
                rows: [
                    { moq: "50 kg", domestic: "~165", export: "~$6.50" },
                    { moq: "100 kg", domestic: "~150", export: "~$5.80" },
                    { moq: "500 kg", domestic: "~135", export: "~$5.20" },
                ],
                contactRow: {
                    moq: "1.000+ kg",
                    price: "Kontakt für Sonderpreise",
                },
                note: "*Exportpreise können sich je nach globalen Märkten, Wechselkursen und spezifischen Verpackungs-/Zertifizierungsanforderungen ändern.",
            }
        },
        logistics: {
            title: "Flexible Verpackung & Versand",
            packaging: {
                title: "Verpackungsoptionen",
                options: ["Großpackungen, Jumbo-Säcke (für große Exportmengen)", "OEM/Private-Label-Verpackungsdienste", "Lebensmittel-Service-Gallonen für HORECA", "Einzelhandelsfertige Verpackungsoptionen"]
            },
            export: {
                title: "Export & Logistik",
                services: ["Volle Unterstützung bei der e-Zollabfertigung", "Bereitstellung von Gesundheitszeugnissen und notwendigen Dokumenten", "Organisation des Ursprungszeugnisses (CO)", "Koordination des weltweiten Versands"]
            }
        },
        form: {
            title: "Angebotsanfrage (RFQ)",
            companyName: "Firmenname",
            contactPerson: "Ansprechpartner",
            email: "E-Mail",
            country: "Land",
            volume: "Gewünschte Menge (kg/Tonne)",
            productType: {
                label: "Produkttyp",
                options: ["Fest (Block)", "Pulver", "Sirup", "Bio"]
            },
            packaging: {
                label: "Verpackungsanforderungen",
                placeholder: "z.B. OEM, Großpackungen, etc.",
            },
            message: "Zusätzliche Nachricht",
            submit: "Anfrage senden",
            successMessage: "Ihre Anfrage wurde erfolgreich übermittelt. Unser Team wird sich in Kürze mit Ihnen in Verbindung setzen.",
        }
    },
    shop: {
        header: {
            title: "Ihr Warenkorb & Kasse",
            subtitle: "Überprüfen Sie Ihre Artikel und wählen Sie eine bequeme Zahlungsmethode.",
        },
        emptyCart: {
            title: "Ihr Warenkorb ist leer.",
            text: "Fügen Sie Ihrem Leben etwas natürliche Süße hinzu, indem Sie unsere Produkte entdecken.",
            cta: "Zurück zur Startseite",
        },
        summary: {
            title: "Bestellübersicht",
            subtotal: "Zwischensumme",
            shipping: "Versand",
            total: "Gesamt",
        },
        payment: {
            title: "Zahlungsmethode wählen",
            tabs: {
                qr: "QR-Code",
                crypto: "Kryptowährung",
                card: "Karte / PayPal",
            },
            qr: {
                text: "Scannen Sie diesen QR-Code, um mit Ihrer Mobile-Banking-Anwendung zu bezahlen.",
            },
            crypto: {
                text: "Senden Sie die Zahlung an die folgende Wallet-Adresse:",
                accept: "Wir akzeptieren:",
            },
            card: {
                number: "Kartennummer",
                expiry: "Gültig bis (MM/JJ)",
                cvc: "CVC",
                name: "Name auf der Karte",
                pay: "Bezahlen",
            }
        }
    },
    blog: {
        header: {
            title: "Blog: Geschichten der Süße",
            subtitle: "Entdecken Sie die tiefen Geschichten, die Weisheit und den Wert von authentischem Palmyrazucker.",
        },
        readMore: "Weiterlesen",
        back: "Zurück zum Blog",
        posts: [
            {
                id: 1,
                title: "Was ist Palmyrazucker? Der vollständige Leitfaden",
                coverImage: "https://via.placeholder.com/400x300.png?text=Palm+Sugar+Guide+(4:3)",
                introduction: "Ein umfassender Leitfaden zu authentischem Palmyrazucker, von seiner Herkunft und seinem Herstellungsprozess bis zu den Gründen, warum er sich von anderen Süßungsmitteln abhebt.",
                content: [
                    { type: 'paragraph', text: 'Wenn es in der thailändischen Kultur um Süße geht, ist "Namtan Tanode" (Palmyrazucker) ein Name, der ein reiches Erbe und ein einzigartiges Geschmacksprofil hervorruft, das über Generationen weitergegeben wurde. Für den globalen Markt bleibt er ein kostbarer Schatz, der darauf wartet, entdeckt zu werden. Dies ist Ihr vollständiger Leitfaden zu authentischem Palmyrazucker, der seine Herkunft, die handwerkliche Herstellung und das, was ihn von anderen Süßungsmitteln völlig unterscheidet, erforscht.' },
                    { type: 'heading', text: 'Ein Erbe der Palmyra-Palme' },
                    { type: 'paragraph', text: 'Die Quelle ist die Palmyra-Palme (Borassus flabellifer), die in Südostasien beheimatet ist. Der Herstellungsprozess ist ein althergebrachtes Handwerk. Bauern, bekannt als "Zapfer", klettern täglich auf die hohen Palmen, um Nektar aus den Blüten des Baumes zu sammeln. Dieser Nektar wird dann stundenlang langsam in großen Woks über Holzfeuer gekocht – ein sorgfältiger Prozess, der den Zucker auf natürliche Weise eindickt und karamellisiert und seine Nährstoffe ohne jegliche Zusatzstoffe oder industrielle Raffination bewahrt.' },
                ]
            },
            {
                id: 2,
                title: "Das goldene Rezept: Palmyrazucker & Mango-Klebreis",
                coverImage: "https://via.placeholder.com/400x300.png?text=Mango+Sticky+Rice+(4:3)",
                introduction: "Entdecken Sie, wie Golden Taan Palmyrazucker das klassische thailändische Dessert, Mango-Klebreis, mit seinen einzigartigen Karamell- und Rauchnoten auf ein neues Niveau der Köstlichkeit hebt.",
                content: [
                    { type: 'heading', text: 'Eine Süße mit Charakter' },
                    { type: 'paragraph', text: 'Standard-Mango-Klebreis ist süß, aber oft eindimensional. Durch den Ersatz von weißem oder normalem Palmzucker durch Golden Taan führen Sie ein tieferes, komplexeres Geschmacksprofil ein. Der reiche, karamellartige Geschmack und das subtile Raucharoma ergänzen die cremige Kokosmilch und die süße Mango perfekt und schaffen ein Dessert, das sowohl vertraut als auch aufregend neu ist.' },
                    { type: 'image', src: 'https://via.placeholder.com/800x600.png?text=Ingredients+Flat+Lay+(4:3)', alt: 'Zutaten für Mango-Klebreis' },
                    { type: 'heading', text: 'Zutaten' },
                    { type: 'paragraph', text: '• 1 Tasse thailändischer süßer Reis (Klebreis), mindestens 4 Stunden in Wasser eingeweicht\n• 1 Tasse Kokosmilch\n• 1/2 Tasse gehackter Golden Taan Palmyrazucker\n• 1/4 Teelöffel Salz\n• 1 große reife Mango, geschält und in Scheiben geschnitten\n• Geröstete Sesamsamen zum Garnieren (optional)' },
                    { type: 'heading', text: 'Anleitung' },
                    { type: 'paragraph', text: '1. Den eingeweichten Klebreis abtropfen lassen. Etwa 20-25 Minuten dämpfen, oder bis er durchgegart und zart ist.\n2. Während der Reis dämpft, die Kokosmilch, den Golden Taan Palmyrazucker und das Salz in einem Topf bei schwacher bis mittlerer Hitze langsam erhitzen. Rühren, bis der Zucker vollständig aufgelöst ist. Nicht kochen lassen.\n3. Sobald der Reis gar ist, in eine Schüssel geben. Die warme, süße Kokosmilchmischung über den heißen Reis gießen. Vorsichtig umrühren, dann abdecken und 20 Minuten ziehen lassen, damit der Reis die Flüssigkeit aufnimmt.\n4. Zum Servieren eine Portion Klebreis auf einen Teller geben, frische Mangoscheiben daneben anrichten und nach Wunsch mit gerösteten Sesamsamen bestreuen. Genießen Sie den gehobenen Geschmack!' },
                ]
            },
            {
                id: 3,
                title: "Ein Tag im Leben eines Palmenzapfers",
                coverImage: "https://via.placeholder.com/400x300.png?text=Palm+Tapper+(4:3)",
                introduction: "Treffen Sie Somchai, einen Hüter der Tradition. Entdecken Sie das tägliche Handwerk, die Hingabe und die Weisheit hinter jedem Körnchen Golden Taan Zucker durch die Augen eines unserer Partnerbauern.",
                content: [
                    { type: 'heading', text: 'Der morgendliche Aufstieg' },
                    { type: 'paragraph', text: 'Lange bevor die Sonne die Ebenen von Ratchaburi beehrt, beginnt Somchais Tag. Mit einer geübten Leichtigkeit, die die Schwierigkeit seiner Aufgabe verbirgt, beginnt er seinen Aufstieg auf die hoch aufragende Palmyra-Palme. Dies ist nicht nur ein Klettern; es ist ein tägliches Ritual, ein Gespräch mit den Bäumen, die seine Familie seit Generationen ernährt haben.' },
                    { type: 'image', src: 'https://via.placeholder.com/800x600.png?text=Farmer+Climbing+Palm+(4:3)', alt: 'Ein Bauer klettert im Morgengrauen auf eine Palmyra-Palme.' },
                    { type: 'heading', text: 'Die Kunst des Sammelns' },
                    { type: 'paragraph', text: 'Oben angekommen, kümmert er sich geschickt um die Palmenblüten, schneidet den Stiel sorgfältig an, um den Fluss des süßen Saftes oder Nektars in die von ihm platzierten Bambusbehälter zu fördern. Dies ist ein heikler Prozess, der immenses Wissen erfordert, um sicherzustellen, dass der Baum gesund und über Jahrzehnte hinweg produktiv bleibt.' },
                    { type: 'heading', text: 'Mehr als ein Job, ein Erbe' },
                    { type: 'paragraph', text: 'Für Somchai ist dies mehr als ein Lebensunterhalt. "Ich sammle nicht nur Saft", sagt er und blickt über den Hain. "Ich trage die Geschichte meiner Vorfahren weiter. Jeder Tropfen dieses Nektars enthält ihre Weisheit. Mit Golden Taan können wir diese Geschichte mit der Welt teilen und sicherstellen, dass diese Lebensweise fortbesteht." Es ist diese tiefe Verbindung zwischen Mensch und Natur, die Sie in jedem Löffel unseres Zuckers schmecken.' },
                ]
            },
            {
                id: 4,
                title: "Golden Taan glasierter Lachs: Ein gesunder Genuss",
                coverImage: "https://via.placeholder.com/400x300.png?text=Glazed+Salmon+(4:3)",
                introduction: "Gehen Sie über traditionelle Desserts hinaus und entdecken Sie, wie die komplexe Süße von Golden Taan ein spektakuläres herzhaftes Gericht kreieren kann. Dieses glasierte Lachsrezept ist einfach, gesund und unglaublich aromatisch.",
                content: [
                    { type: 'heading', text: 'Herzhaft trifft Süß' },
                    { type: 'paragraph', text: "Die tiefen Karamellnoten des Golden Taan Palmyrazuckers passen perfekt zum reichen Geschmack von Lachs. Diese Glasur karamellisiert wunderschön und erzeugt eine leicht knusprige Außenseite, während der Fisch innen saftig und zart bleibt. Es ist ein Gericht in Restaurantqualität, das Sie leicht zu Hause zubereiten können." },
                    { type: 'heading', text: 'Zutaten' },
                    { type: 'paragraph', text: '• 2 Lachsfilets (je ca. 170g)\n• 2 Esslöffel Golden Taan Palmyrazucker, Pulver oder fein gehackt\n• 2 Esslöffel Sojasauce (oder Tamari für glutenfrei)\n• 1 Esslöffel frischer Ingwer, gerieben\n• 1 Knoblauchzehe, gehackt\n• 1 Esslöffel Limettensaft\n• Gehackter Koriander und Sesamsamen zum Garnieren' },
                    { type: 'heading', text: 'Anleitung' },
                    { type: 'paragraph', text: "1. Heizen Sie Ihren Ofen auf 200°C vor.\n2. In einer kleinen Schüssel den Golden Taan Zucker, Sojasauce, Ingwer, Knoblauch und Limettensaft verquirlen, bis sich der Zucker aufgelöst hat.\n3. Die Lachsfilets auf ein mit Backpapier ausgelegtes Backblech legen. Die Glasur großzügig über die Ober- und Seitenflächen des Lachses streichen.\n4. 12-15 Minuten backen, oder bis der Lachs durchgegart ist und sich leicht mit einer Gabel zerteilen lässt. Für eine stärker karamellisierte Oberseite können Sie die letzten 1-2 Minuten grillen, dabei sorgfältig beobachten, um ein Anbrennen zu verhindern.\n5. Vor dem Servieren mit frischem Koriander und Sesamsamen garnieren. Passt wunderbar zu gedämpftem Reis und Gemüse." },
                ]
            },
            {
                id: 5,
                title: "Vom Hain zum Globus: Die Reise unseres Zuckers",
                coverImage: "https://via.placeholder.com/400x300.png?text=Global+Journey+(4:3)",
                introduction: "Jeder Block Golden Taan Zucker erzählt eine Geschichte von nachhaltiger Landwirtschaft, Stärkung der Gemeinschaft und sorgfältiger Qualitätskontrolle. Verfolgen Sie die Reise von einer einzelnen Palmenblüte bis in Ihre Küche.",
                content: [
                    { type: 'heading', text: 'Schritt 1: Die nachhaltige Ernte' },
                    { type: 'paragraph', text: "Die Reise beginnt in unseren unberührten Palmenhainen, wo Bauern eine Form der Agrarökologie praktizieren. Sie nehmen nicht nur von den Bäumen; sie pflegen das gesamte Ökosystem. Der Nektar wird mit traditionellen, unschädlichen Methoden gesammelt, um sicherzustellen, dass die Bäume für zukünftige Generationen gesund bleiben." },
                    { type: 'heading', text: 'Schritt 2: Der handwerkliche Prozess' },
                    { type: 'paragraph', text: "Der gesammelte Saft wird zu einem gemeinschaftlichen Verarbeitungszentrum transportiert. Hier wird er langsam in offenen Woks gekocht. Dies ist nicht nur Verdunstung; es ist ein Handwerk. Die Handwerker wissen genau, wann der Zucker die perfekte Konsistenz, Farbe und das perfekte Aroma erreicht hat. Dieser sanfte, gemächliche Prozess bewahrt die lebenswichtigen Mineralien und Nährstoffe." },
                    { type: 'heading', text: 'Schritt 3: Qualitäts- und Reinheitsprüfungen' },
                    { type: 'paragraph', text: "Vor dem Verpacken wird jede Charge Golden Taan auf Qualität geprüft. Wir überprüfen den Feuchtigkeitsgehalt, das Geschmacksprofil und die Reinheit, um sicherzustellen, dass sie unseren strengen Standards entspricht. Es gibt keine Zusatzstoffe, keine Mischung mit anderen Zuckern – nur 100% reinen Palmyra-Palmennektar." },
                     { type: 'heading', text: 'Schritt 4: Die Welt erreichen' },
                    { type: 'paragraph', text: "Schließlich wird der Zucker sorgfältig verpackt, um seine Frische zu bewahren, und an anspruchsvolle Kunden weltweit versandt. Dieser gesamte Prozess basiert auf Fairness und zahlt unseren Bauern einen Premiumpreis, der ihre Fähigkeiten und ihr Engagement ehrt. Wenn Sie sich für Golden Taan entscheiden, kaufen Sie nicht nur ein Süßungsmittel; Sie unterstützen eine nachhaltige und ethische Produktionskette." },
                ]
            }
        ]
    },
    footer: {
        address: "919/1 JTC Building, Silom Road, Silom, Bangrak, Bangkok 10500, Thailand",
        contactPerson: { label: "Ansprechpartner", name: "Herr Krisada Laohasiri" },
        phone: { label: "Tel/WhatsApp", number: "+66(0)81 851 9922" },
        email: { label: "E-Mail", address: "info@goldentaan.com" },
        quickLinks: "Schnell-Links",
        copyright: "© {year} Golden TAAN Co., Ltd. Alle Rechte vorbehalten.",
    }
};

const ja: Translations = {
    metaTitle: "ゴールデン・ターン | 本物のパルミラ椰子糖 - 持続可能な供給源から",
    metaDescription: "タイ、ラチャブリ県の家族経営農園から持続可能な方法で調達された、プレミアムで低GIのパルミラ椰子糖「ゴールデン・ターン」を発見してください。100%純粋で未精製です。",
    nav: {
        home: "ホーム",
        ourStory: "私たちの物語",
        heritage: "伝統と基準",
        blog: "ブログ",
        sustainability: "持続可能性",
        wholesale: "卸売 & B2B",
        shopNow: "購入する",
        homeSubItems: [
            { id: '#our-story', label: '私たちの物語' },
            { id: '#health-benefits', label: '健康上の利点' },
            { id: '#products', label: '製品' },
            { id: '#contact', label: 'お問い合わせ' },
        ]
    },
    home: {
        hero: {
            headline: "ゴールデン・ターン：甘さの伝統",
            subheadline: "自然が完成させた、本物のパルミラ椰子糖の純粋な味を発見してください。",
            cta: "私たちの物語を発見する",
        },
        trends: {
            headline: "本物を求める世界",
            description: "世界の食の風景は大きな変化を遂げています。現代の消費者は味だけでなく、一口ごとに透明性、健康、持続可能性を求めています。",
            billion: "十億",
            marketStat: "天然甘味料市場は2030年までに550億ドル以上に達すると予測されています。",
            consumerStat: "の世界の消費者が、天然でクリーンラベルの成分を含む製品を積極的に選んでいます。",
        },
        health: {
            headline: "健康的な違い：栄養の詳細な比較",
            description: "栄養素が除去された精製白砂糖とは異なり、ゴールデン・ターンや未精製のサトウキビ糖のような未精製甘味料は、天然のミネラルを豊富に保持しています。このチャートは、100gあたりの栄養価の顕著な違いを分析します。",
            chartTitle: "栄養比較（100gあたり）",
            goldenTaan: "ゴールデン・ターン",
            unrefinedSugarcane: "未精製サトウキビ糖",
            refinedWhiteSugar: "精製白砂糖",
            nutrientData: nutrientData.default,
            insight: {
                title: "重要な洞察：未精製の力",
                text: "データは未精製甘味料の優位性を明確に示しています。ゴールデン・ターンと生のサトウキビはどちらも必須ミネラルが豊富ですが、ゴールデン・ターンの非常に高いカリウム含有量（白砂糖の500倍以上、サトウキビの2倍以上）が際立っています。カリウムは血圧、神経機能、筋肉の収縮を調節するために不可欠な重要な電解質であり、ゴールデン・ターンを健康志向のライフスタイルにとってユニークで有益な選択肢にしています。",
            },
            goldenTaanEffect: "持続的な活力のために、ゆっくりと安定したエネルギーを供給します。",
            whiteSugarEffect: "血糖値の急激な上昇を引き起こし、その後エネルギーが急降下します。"
        },
        process: {
            headline: "二つのプロセスの物語",
            description: "プロセスこそが、生きている甘味料と空っぽの甘味料を分けるものです。これが全ての違いを生み出します。",
            artisanal: {
                title: "ゴールデン・ターン（伝統的な製法）",
                steps: [
                    { title: "収穫", description: "熟練した農家がヤシの木に登り、竹の筒を使って花から甘い蜜を集めます。" },
                    { title: "煮詰める", description: "新鮮な蜜は大きな中華鍋で穏やかな薪の火でゆっくりと煮詰められます。" },
                    { title: "結晶化", description: "その後、自然に冷やして結晶化させ、色、香り、栄養素を保ちます。" },
                ],
            },
            industrial: {
                title: "白砂糖（工業的な製法）",
                steps: [
                    { title: "収穫と圧搾", description: "サトウキビは機械で収穫され、圧搾してジュースを抽出します。" },
                    { title: "清澄化", description: "石灰や二酸化硫黄などの化学物質を使用して、ジュースから不純物を取り除きます。" },
                    { title: "漂白とろ過", description: "ジュースを活性炭でろ過して、純粋な白色にします。" },
                    { title: "結晶化", description: "遠心分離機でシロップを回転させ、ほぼ100%純粋なショ糖の結晶を形成します。" },
                ]
            }
        },
        impact: {
            headline: "持続可能な生態系",
            description: "パルミラヤシの農業は、しばしば生態系を劣化させるサトウキビの単一栽培とは異なり、環境にプラスの影響を与える本質的に持続可能な農業形態です。",
            chartTitle: "持続可能性影響指数（10点満点）",
            conventionalSugarcane: "従来のサトウキビ",
            sustainabilityData: [
                { name: '水利用効率', goldenTaan: 9, sugarcane: 3 },
                { name: '土壌再生', goldenTaan: 9, sugarcane: 2 },
                { name: '低農薬使用', goldenTaan: 10, sugarcane: 3 },
                { name: '生物多様性', goldenTaan: 8, sugarcane: 4 },
                { name: '炭素貯蔵', goldenTaan: 7, sugarcane: 3 },
            ],
            community: {
                headline: "コミュニティに根ざして",
                description: "ゴールデン・ターンを選ぶことは、木から始まり、農家に流れ、比類のない品質の製品としてあなたに戻ってくる繁栄のサイクルに投資することを意味します。",
                stats: [
                    { value: 40, unit: "年以上", label: "一本の木が家族に収入を提供できる年数" },
                    { value: 2000, unit: "世帯以上", label: "安定した収入で支援される農村世帯" },
                    { value: 25, unit: "百万+", label: "コミュニティ企業の年間輸出収益", prefix: "¥" },
                    { value: 15, unit: "%", label: "市場価格以上に農家に支払われるプレミアム" },
                ]
            }
        },
        productSection: {
            headline: "私たちの製品",
            description: "私たちのヤシの木からあなたの食料棚へ、心を込めて作られました。",
            addToCart: "カートに入れる",
            added: "追加しました！",
        },
        products: [
            { id: 'p1', img: 'https://via.placeholder.com/400x400.png?text=Palm+Sugar+Block+(1:1)', title: 'パルミラ椰子糖ブロック', description: '豊かで深い風味と独特の香り。伝統的なタイ料理やデザートに最適な、柔らかいファッジのような食感。', price: 1200 },
            { id: 'p2', img: 'https://via.placeholder.com/400x400.png?text=Palm+Sugar+Powder+(1:1)', title: 'パルミラ椰子糖パウダー', description: '使いやすく、すぐに溶けるように細かく粉砕。現代のベーキングや飲み物の甘味料として最適。', price: 1500 },
            { id: 'p3', img: 'https://via.placeholder.com/400x400.png?text=Palm+Sugar+Syrup+(1:1)', title: 'パルミラ椰子糖シロップ', description: '豊かで濃縮された液体の甘さ。パンケーキやアイスクリームのトッピング、カクテルに混ぜるのに最適。', price: 1800 },
        ],
        faq: {
            headline: "よくある質問",
            showMore: "もっと質問を見る",
            items: [
                { q: '本物のゴールデン・ターンと模倣品を見分ける方法は？', a: '本物のゴールデン・ターンは自然な黄金色で、豊かなキャラメルのような香りがあり、滑らかでまろやかな甘さがあります。模倣品はブラウンシュガーが加えられているため色が濃く、鋭い砂糖の味がします。' },
                { q: 'パルミラ椰子糖とココナッツシュガーの違いは何ですか？', a: 'どちらもヤシの砂糖ですが、種類が異なります。パルミラ椰子糖はパルミラヤシ（Borassus flabellifer）から、ココナッツシュガーはココヤシから作られます。通常、パルミラ椰子糖の方が複雑で香り高い風味プロファイルを持っています。' },
                { q: '製品の賞味期限はどのくらいですか？', a: '固形ブロックと粉末は、涼しく乾燥した場所で12〜18ヶ月間保存できます。シロップは冷蔵保存し、開封後6ヶ月以内に消費してください。' },
                { q: 'ゴールデン・ターンのグリセミック指数（GI）はどのくらいですか？', a: 'ゴールデン・ターンはグリセミック指数が低く、約35です。これは白砂糖（約65）や蜂蜜（約58）よりも大幅に低いです。' },
                { q: '製品はオーガニックですか？', a: '私たちのパルミラヤシは農薬や化学肥料を使用せずに自然に育ちます。まだ正式なオーガニック認証は受けていませんが、私たちのプロセスは有機農業のすべての原則に従っています。' },
                { q: 'レシピで白砂糖の代わりにゴールデン・ターンを使用できますか？', a: 'もちろんです。1:1の代替品として使用できます。焼き菓子に少し濃い色をつけ、ユニークで美味しい香りを加えることがあります。' },
                { q: 'ゴールデン・ターンは糖尿病患者に適していますか？', a: 'GI値が低いため、白砂糖よりも良い代替品です。ただし、他の甘味料と同様に、糖尿病の人は摂取前に医師に相談する必要があります。' },
                { q: '生産プロセスはヤシの木に害を与えますか？', a: 'まったくありません。ヤシの花を叩くことは、木に害を与えない持続可能な古くからの伝統です。一本のパルミラヤシは何十年も樹液を提供できます。' },
                { q: '配送ポリシーはどうなっていますか？', a: 'タイ国内では民間の宅配便サービスを利用して配送します。大量注文や国際輸出については、卸売部門にお問い合わせください。' },
                { q: '製品に保存料は含まれていますか？', a: 'いいえ、私たちの製品は100％天然で、保存料、人工着色料、その他の添加物は一切含まれていません。' },
                { q: 'なぜゴールデン・ターンは白砂糖より高いのですか？', a: '価格が高いのは、労働集約的な職人技による生産プロセス、優れた栄養価、そして地元の農家コミュニティを支援するフェアトレードの実践への私たちのコミットメントを反映しています。' },
                { q: '製品はどこで購入できますか？', a: '当社のウェブサイトから直接注文するか、一部のプレミアムスーパーマーケットや健康食品店で当社の製品を見つけることができます。' },
                { q: 'ヤシの農業は気候変動にどのように役立ちますか？', a: 'ヤシの木立は優れた炭素吸収源です。長寿命の木々は深い根系を持ち、土壌の質を改善し、浸食を防ぎます。' },
                { q: 'ヤシの木立を訪れることはできますか？', a: '私たちはアグロツーリズムプログラムを開発中です。今後の発表については、ソーシャルメディアでフォローしてください。' },
                { q: 'どのような品質管理を行っていますか？', a: '樹液の収集から包装まで、あらゆる段階で厳格な品質管理を実施し、最も純粋で最高品質の製品をお届けできるようにしています。' },
            ]
        }
    },
    about: {
        header: {
            title: "私たちの物語",
            subtitle: "私たちの物語は会議室で始まったのではありません。それは、甘さの伝統が世代を超えて受け継がれてきたラチャブリのパルミラヤシの木陰で始まりました。",
        },
        roots: {
            title: "甘さのルーツ",
            text: "私たちの家族は一世紀以上にわたりパルミラヤシと関わってきました。私たちはヤシの葉が風にそよぐ音、煮詰めた蜜の甘い香り、そして純粋で混じりけのない職人技への誇りとともに育ちました。これが私たちが世界と分かち合いたい遺産です。",
        },
        fadingGold: {
            title: "色あせる黄金",
            text: "速さと量が品質よりも優先される時代において、本物のパルミラ椰子糖は、サトウキビ糖や添加物を混ぜた安価な製品に取って代わられつつありました。私たちはこの文化的な「黄金」が色あせ始めているのを見て、それが「ゴールデン・ターン」の始まりでした。",
        },
        mission: {
            title: "持続可能な甘さへの使命",
            text: "私たちの使命は、本物のパルミラ椰子糖の価値を復活させ、高めることです。私たちは農村コミュニティと直接協力して、伝統的な知恵を保存しながら現代の品質基準を導入し、すべてのゴールデン・ターン製品が美味しいだけでなく、あなたの健康、コミュニティ、そして地球にとっても良いものであることを保証します。",
        },
        timelineTitle: "甘い旅：過去から現在へ",
        timeline: [
            { title: "東南アジアでの起源", era: "9世紀", description: "初期の記録には、東南アジア全域でパルミラヤシの蜜が貴重な甘味料として使用されていたことが示されています。" },
            { title: "家族の伝統", era: "世代から世代へ", description: "ヤシの蜜を採取し、ゆっくりと煮詰める伝統的な方法は、家族の知恵として受け継がれています。" },
            { title: "王宮とアーユルヴェーダで", era: "王宮とアーユルヴェーダ", description: "パルミラ椰子糖はタイ王室のデザートや古代アーユルヴェーダ医学の重要な成分として使用されていました。" },
            { title: "ゴールデン・ターンの誕生", era: "現代", description: "この伝統を保存し、純粋な甘さを世界に届けるという使命を持って、「ゴールデン・ターン」ブランドが設立されました。" }
        ],
        people: {
            title: "純粋さの背後にいる人々",
            founderName: "クリサダ・ラオハシリ（創設者）",
            founderQuote: "私たちはただ砂糖を作っているだけではありません。故郷の伝統を守っているのです。",
            communityTitle: "職人たちのコミュニティ",
            communityText: "ゴールデン・ターンの心臓部は、熟練した農家のパートナーです。彼らは先祖代々の知恵の守護者であり、毎朝自然への深い敬意を込めてヤシの木に登り、貴重な蜜を私たちのために集めてくれる人々です。",
        },
        choice: {
            title: "より健康的な選択",
            text: "私たちは、甘さが「罪悪感のある喜び」である必要はないと信じています。ゴールデン・ターンは、低グリセミック指数でミネラルが豊富、ココナッツシュガーやサトウキビ糖のような一般的な甘味料よりも複雑な風味を持つ自然な代替品です。安心して甘さを楽しめる選択肢を提供することに尽力しています。",
        }
    },
    heritage: {
        header: {
            title: "伝統とグローバル基準",
            subtitle: "ゴールデン・ターンの品質の背後には、土壌からあなたの棚まで、あらゆる段階での卓越性へのコミットメントがあります。",
        },
        tabs: {
            origin: "起源と伝統",
            export: "輸出市場",
            certs: "認証",
        },
        origin: {
            title: "パルミラ椰子糖：タイの風味の遺産",
            paragraphs: [
                "タイのパルミラ椰子糖は、一般的なサトウキビ糖やココナッツシュガーとは異なる、深い文化的ルーツを持つ土着の甘味料です。",
                "その源は東南アジア原産のパルミラヤシ（Borassus flabellifer）であり、ペッチャブリー県とラチャブリー県が何世紀にもわたって本物の生産の歴史的中心地として機能してきました。この地域のユニークなミネラル豊富な土壌、つまりテロワールが、砂糖の深くキャラメルのような風味と微妙なスモーキーなノートに寄与していると考えられています。",
                "生産プロセスは、世代を超えて受け継がれてきた由緒ある技術です。「タッパー」として知られる農家は、毎日高いヤシの木に登り、木の花から蜜を集めます。この蜜は、その後、大きな中華鍋で薪の火の上で何時間もゆっくりと煮詰められます。これは、添加物や工業的な精製なしに、砂糖を自然に濃縮し、キャラメル化させ、その風味を凝縮し、栄養素を保存する細心の注意を払ったプロセスです。"
            ]
        },
        export: {
            title: "タイのパームシュガー輸出市場",
            intro: "「純粋なパルミラ椰子糖」に関する具体的なデータは、輸出統計で「ココナッツシュガー」とまとめられることが多いですが、タイは天然甘味料の世界市場で重要なプレーヤーです。この需要は、より健康的で、オーガニックで、最小限に加工された食品への世界的なトレンドによって牽引されています。",
            market: {
                intro: "世界のパームシュガー市場は",
                value: "27.8億ドル",
                outro: "に達すると予想されており、特にオーガニックセグメントが最も顕著で急速な成長を示しています。",
            },
            keyMarkets: {
                title: "主要な輸出市場",
                markets: [
                    { name: "アメリカ大陸（米国＆カナダ）", description: "健康志向の消費者が、低グリセミック指数と高い栄養価のためにパームシュガーを評価する主要市場。" },
                    { name: "ヨーロッパ", description: "特にドイツ、フランス、英国におけるオーガニックおよびフェアトレード製品の強力な市場。認証が非常に重要です。" },
                    { name: "UAE＆中東", description: "需要は主にハラル認証製品の必要性と、伝統的なお菓子やデザートでの使用によって牽引されています。" },
                    { name: "アジア太平洋", description: "近隣諸国や日本、韓国、オーストラリアなどの市場では、伝統的および現代的なアジア料理での使用に高い関心を示しています。" },
                ]
            }
        },
        certs: {
            title: "必須の輸出認証",
            intro: "パームシュガーを成功裏に輸出し、国際的なバイヤーに品質とコンプライアンスを保証するためには、国内および世界的に認められた認証の組み合わせが不可欠です。",
            thai: {
                title: "タイの認証（信頼の基盤）",
                items: [
                    { title: "GMP（適正製造規範）", issuer: "タイFDA", description: "蜜の収集から包装まで、生産プロセスが厳格な衛生および安全基準を満たしていることを保証します。" },
                    { title: "HACCP（危害分析重要管理点）", issuer: "グローバルスタンダード", description: "生産プロセスにおける潜在的な危険を特定し、管理する高度な食品安全管理システム。" },
                    { title: "タイFDA承認", issuer: "タイFDA", description: "すべての食品は、タイの食品医薬品局に登録され、承認される必要があります。" },
                ]
            },
            international: {
                title: "国際および市場固有の認証（グローバル市場アクセス）",
                items: [
                    { title: "ハラル認証", issuer: "UAEおよびハラル市場向け", description: "UAEおよびほとんどのイスラム諸国への輸出に不可欠であり、生産プロセス全体がイスラム法に準拠していることを保証します。" },
                    { title: "USDAオーガニック", issuer: "米国市場向け", description: "ヤシの木が合成農薬や肥料なしで栽培され、加工が化学物質不使用であることを保証します。" },
                    { title: "EUオーガニック", issuer: "ヨーロッパ市場向け", description: "EU内で製品を「オーガニック」として販売するために必要であり、EUには独自の厳しい基準があります。" },
                    { title: "フェアトレード認証", issuer: "倫理的消費者の魅力", description: "ヨーロッパと北米で高く評価されており、農家や労働者が公正に支払われ、良好な条件で働くことを保証します。" },
                ]
            }
        }
    },
    sustainability: {
        header: {
            title: "持続可能性への私たちのコミットメント",
            subtitle: "ゴールデン・ターンにとって、持続可能性は流行語ではありません。それは私たちの事業の中核です。私たちはESG原則に導かれ、地球と社会に永続的なプラスの影響を生み出します。",
        },
        environmental: {
            title: "E: 環境責任",
            points: [
                { title: "アグロエコロジー", text: "私たちのヤシ園は、生物多様性を促進し、化学物質を一切使用しない統合農業システムです。" },
                { title: "水利用効率", text: "パルミラヤシは干ばつに強く、サトウキビよりも大幅に少ない水しか必要としません。" },
                { title: "炭素隔離", text: "長寿命のヤシ園は重要な炭素吸収源として機能し、地球温暖化の緩和に貢献します。" },
                { title: "エコフレンドリーな包装", text: "私たちは包装にリサイクル可能で生分解性の素材を使用することにコミットしています。" },
            ]
        },
        social: {
            title: "S: 社会的責任",
            points: [
                { title: "フェアトレード", text: "私たちは農家から市場価格以上の価格で直接購入し、安定した持続可能な収入を確保します。" },
                { title: "コミュニティ開発", text: "私たちは農家の家族のためのスキル開発と教育プログラムに投資します。" },
                { title: "地域の知恵の保存", text: "私たちは伝統的なパルミラ椰子糖作りの知識を保存し、伝承するために活動しています。" },
                { title: "健康とウェルネス", text: "私たちは消費者の健康に積極的に貢献する製品を推進しています。" },
            ]
        },
        governance: {
            title: "G: ガバナンスと透明性",
            points: [
                { title: "サプライチェーンの透明性", text: "私たちは製品の完全なトレーサビリティを提供し、ヤシ園や農家まで遡ることができます。" },
                { title: "品質基準", text: "私たちは生産のあらゆる段階で厳格な品質管理プロセスを遵守します。" },
                { title: "倫理的な事業慣行", text: "私たちはすべての利害関係者に対して誠実かつ公正に事業を行うことを約束します。" },
                { title: "オープンなコミュニケーション", text: "私たちは製品とプロセスに関する正確で完全な情報を消費者に提供します。" },
            ]
        },
        insights: {
            title: "データ駆動の洞察と透明性",
            chartTitle: "資源効率の比較",
            report: {
                title: "私たちの完全な持続可能性レポート",
                text: "私たちの実践、指標、将来の目標についての詳細な情報については、包括的なレポートをダウンロードしてください。",
                cta: "レポートをダウンロード（PDF）",
            }
        },
        resourceChartData: [
            { subject: '水利用効率', 'Golden Taan': 9, 'Cane Sugar': 3, fullMark: 10 },
            { subject: '低土地利用', 'Golden Taan': 8, 'Cane Sugar': 4, fullMark: 10 },
            { subject: '低農薬使用', 'Golden Taan': 10, 'Cane Sugar': 3, fullMark: 10 },
            { subject: '生物多様性', 'Golden Taan': 8, 'Cane Sugar': 4, fullMark: 10 },
            { subject: '炭素貯蔵', 'Golden Taan': 7, 'Cane Sugar': 3, fullMark: 10 },
        ]
    },
    wholesale: {
        header: {
            title: "ゴールデン・ターンと提携する",
            subtitle: "私たちのプレミアムパルミラ椰子糖製品で、お客様に純粋で持続可能な甘さを提供してください。",
        },
        insights: {
            title: "グローバル市場の洞察と機会",
            text: "天然甘味料市場は着実な成長を遂げており、2032年までに27.8億ドルに達すると予測され、CAGRは3.4%です。特にオーガニックセグメントは最大の市場シェアを占め、最も速い成長が見込まれています。これは、パートナーが高需要で差別化された製品を提供する大きな機会を提示しています。",
        },
        pricing: {
            title: "価格構造とパートナーシップモデル",
            text: "私たちは数量に応じた段階的な価格設定を提供しており、お客様のビジネスニーズに最適なパートナーシップモデルについて柔軟に話し合います。",
            table: {
                headers: ["最小注文数量（MOQ）", "国内価格（THB/kg）（約）", "輸出価格（USD/kg）（FOB）*"],
                rows: [
                    { moq: "50 kg", domestic: "~165", export: "~$6.50" },
                    { moq: "100 kg", domestic: "~150", export: "~$5.80" },
                    { moq: "500 kg", domestic: "~135", export: "~$5.20" },
                ],
                contactRow: {
                    moq: "1,000+ kg",
                    price: "特別価格についてはお問い合わせください",
                },
                note: "*輸出価格は、世界市場、為替レート、特定の包装/認証要件に基づいて変更される場合があります。",
            }
        },
        logistics: {
            title: "柔軟な包装と配送",
            packaging: {
                title: "包装オプション",
                options: ["バルクバッグ、ジャンボバッグ（大量輸出用）", "OEM/プライベートブランド包装サービス", "HORECA向けフードサービスガロン", "小売対応包装オプション"]
            },
            export: {
                title: "輸出とロジスティクス",
                services: ["電子税関手続きの完全サポート", "健康証明書および必要書類の提供", "原産地証明書（CO）の手配", "グローバル配送の調整"]
            }
        },
        form: {
            title: "見積依頼（RFQ）",
            companyName: "会社名",
            contactPerson: "担当者名",
            email: "Eメール",
            country: "国",
            volume: "希望数量（kg/トン）",
            productType: {
                label: "製品タイプ",
                options: ["固形（ブロック）", "粉末", "シロップ", "オーガニック"]
            },
            packaging: {
                label: "包装要件",
                placeholder: "例：OEM、バルクバッグなど",
            },
            message: "追加メッセージ",
            submit: "見積依頼を送信",
            successMessage: "ご依頼は正常に送信されました。担当者より追ってご連絡いたします。",
        }
    },
    shop: {
        header: {
            title: "カートとチェックアウト",
            subtitle: "商品を確認し、便利な支払い方法を選択してください。",
        },
        emptyCart: {
            title: "ショッピングカートは空です。",
            text: "私たちの製品を探して、あなたの生活に自然な甘さを加えてください。",
            cta: "ホームページに戻る",
        },
        summary: {
            title: "注文概要",
            subtotal: "小計",
            shipping: "送料",
            total: "合計",
        },
        payment: {
            title: "支払い方法を選択",
            tabs: {
                qr: "QRコード",
                crypto: "暗号通貨",
                card: "カード / PayPal",
            },
            qr: {
                text: "このQRコードをスキャンして、モバイルバンキングアプリケーションで支払います。",
            },
            crypto: {
                text: "以下のウォレットアドレスに支払いを送信してください：",
                accept: "対応通貨：",
            },
            card: {
                number: "カード番号",
                expiry: "有効期限（MM/YY）",
                cvc: "CVC",
                name: "カード名義人",
                pay: "支払う",
            }
        }
    },
    blog: {
        header: {
            title: "ブログ：甘さの物語",
            subtitle: "本物のパルミラ椰子糖の深い物語、知恵、価値を探求してください。",
        },
        readMore: "続きを読む",
        back: "ブログに戻る",
        posts: [
            {
                id: 1,
                title: "パルミラ椰子糖とは？完全ガイド",
                coverImage: "https://via.placeholder.com/400x300.png?text=Palm+Sugar+Guide+(4:3)",
                introduction: "本物のパルミラ椰子糖の包括的なガイド。その起源や製造プロセスから、他の甘味料とは一線を画す理由まで。",
                content: [
                    { type: 'paragraph', text: 'タイの文化で甘さと言えば、「ナムターン・タノード」（パルミラ椰子糖）は、世代を超えて受け継がれてきた豊かな伝統と独特の風味を思い起こさせる名前です。世界市場にとって、それはまだ発見されるのを待っている貴重な宝物です。これは、本物のパルミラ椰子糖に関する完全なガイドであり、その起源、職人による製造、そして他の甘味料とは全く異なる点を探求します。' },
                    { type: 'heading', text: 'パルミラヤシからの遺産' },
                    { type: 'paragraph', text: 'その源は東南アジア原産のパルミラヤシ（Borassus flabellifer）です。製造プロセスは古くから伝わる職人技です。「タッパー」として知られる農家は、毎日高いヤシの木に登り、木の花から蜜を集めます。この蜜は、その後、大きな中華鍋で薪の火の上で何時間もゆっくりと煮詰められます。これは、添加物や工業的な精製なしに、砂糖を自然に濃縮し、キャラメル化させ、その栄養素を保存する細心の注意を払ったプロセスです。' },
                ]
            },
            {
                id: 2,
                title: "黄金のレシピ：パルミラ椰子糖とマンゴーもち米",
                coverImage: "https://via.placeholder.com/400x300.png?text=Mango+Sticky+Rice+(4:3)",
                introduction: "ゴールデン・ターン パルミラ椰子糖が、そのユニークなキャラメルとスモーキーなノートで、古典的なタイのデザート、マンゴーもち米を新しいレベルの美味しさに引き上げる方法を発見してください。",
                content: [
                    { type: 'heading', text: '個性のある甘さ' },
                    { type: 'paragraph', text: '標準的なマンゴーもち米は甘いですが、しばしば一次元的です。白砂糖や通常のパームシュガーをゴールデン・ターンに置き換えることで、より深く、より複雑な風味のプロファイルが導入されます。豊かなキャラメルのような味と微妙なスモーキーな香りが、クリーミーなココナッツミルクと甘いマンゴーを完璧に補完し、親しみやすくも刺激的に新しいデザートを生み出します。' },
                    { type: 'image', src: 'https://via.placeholder.com/800x600.png?text=Ingredients+Flat+Lay+(4:3)', alt: 'マンゴーもち米の材料' },
                    { type: 'heading', text: '材料' },
                    { type: 'paragraph', text: '• タイのもち米 1カップ（少なくとも4時間水に浸す）\n• ココナッツミルク 1カップ\n• ゴールデン・ターン パルミラ椰子糖 1/2カップ、刻んだもの\n• 塩 小さじ1/4\n• 熟した大きなマンゴー 1個、皮をむいてスライス\n• 飾り用の炒りごま（お好みで）' },
                    { type: 'heading', text: '作り方' },
                    { type: 'paragraph', text: '1. 浸したもち米の水を切ります。約20〜25分蒸すか、火が通って柔らかくなるまで蒸します。\n2. 米を蒸している間に、ココナッツミルク、ゴールデン・ターン パルミラ椰子糖、塩を鍋に入れ、中火から弱火でゆっくりと加熱します。砂糖が完全に溶けるまでかき混ぜます。沸騰させないでください。\n3. 米が炊き上がったら、ボウルに移します。温かい甘いココナッツミルクの混合物を熱いご飯の上に注ぎます。やさしく混ぜ合わせ、蓋をして20分間置き、米が液体を吸収するようにします。\n4. 盛り付けるには、もち米を皿に盛り、新鮮なマンゴーのスライスを添え、お好みで炒りごまを振りかけます。格上げされた味をお楽しみください！' },
                ]
            },
            {
                id: 3,
                title: "パームタッパーの一日",
                coverImage: "https://via.placeholder.com/400x300.png?text=Palm+Tapper+(4:3)",
                introduction: "伝統の守護者、ソムチャイに会いましょう。私たちのパートナー農家の一人の目を通して、ゴールデン・ターン砂糖の一粒一粒の背後にある日々の職人技、献身、そして知恵を発見してください。",
                content: [
                    { type: 'heading', text: '朝の登山' },
                    { type: 'paragraph', text: '太陽がラチャブリの平野を照らすずっと前に、ソムチャイの一日は始まります。彼の仕事の難しさを感じさせない熟練した手つきで、彼はそびえ立つパルミラヤシの木への登頂を開始します。これは単なる登山ではありません。それは日々の儀式であり、彼の家族を何世代にもわたって支えてきた木々との対話です。' },
                    { type: 'image', src: 'https://via.placeholder.com/800x600.png?text=Farmer+Climbing+Palm+(4:3)', alt: '夜明けにパルミラヤシの木に登る農家。' },
                    { type: 'heading', text: '収集の芸術' },
                    { type: 'paragraph', text: '頂上で、彼は巧みにヤシの花を手入れし、茎を慎重に切り込み、甘い樹液、つまり蜜が彼が置いた竹の容器に流れ込むように促します。これは、木が健康で何十年も生産性を保つことを確実にするために、莫大な知識を必要とする繊細なプロセスです。' },
                    { type: 'heading', text: '仕事以上のもの、遺産' },
                    { type: 'paragraph', text: 'ソムチャイにとって、これは生計以上のものです。「私はただ樹液を集めているだけではありません」と彼は木立を見渡しながら言います。「私は先祖の物語を運んでいます。この蜜の一滴一滴に彼らの知恵が込められています。ゴールデン・ターンによって、私たちはこの物語を世界と分かち合い、この生活様式が続くことを確実にすることができます。」私たちの砂糖の一さじ一さじで味わうのは、この人間と自然の深いつながりなのです。' },
                ]
            },
            {
                id: 4,
                title: "ゴールデン・ターン グレーズドサーモン：ヘルシーなご馳走",
                coverImage: "https://via.placeholder.com/400x300.png?text=Glazed+Salmon+(4:3)",
                introduction: "伝統的なデザートを超えて、ゴールデン・ターンの複雑な甘さがどのように素晴らしいセイボリー料理を生み出すことができるかを発見してください。このグレーズドサーモンのレシピは、シンプルで健康的、そして信じられないほど風味豊かです。",
                content: [
                    { type: 'heading', text: 'セイボリーとスイートの出会い' },
                    { type: 'paragraph', text: "ゴールデン・ターン パルミラ椰子糖の深いキャラメルのノートは、サーモンの豊かな風味と完璧にマッチします。このグレーズは美しくキャラメル化し、魚を内側はしっとりと柔らかく保ちながら、外側はわずかにカリッとした食感を生み出します。これは、自宅で簡単に作れるレストラン品質の食事です。" },
                    { type: 'heading', text: '材料' },
                    { type: 'paragraph', text: '• サーモンの切り身2枚（各約170g）\n• ゴールデン・ターン パルミラ椰子糖 大さじ2、粉末または細かく刻んだもの\n• 醤油 大さじ2（グルテンフリーの場合はたまり醤油）\n• すりおろした新鮮な生姜 大さじ1\n• みじん切りにしたニンニク 1片\n• ライムジュース 大さじ1\n• 飾り用の刻んだコリアンダーとゴマ' },
                    { type: 'heading', text: '作り方' },
                    { type: 'paragraph', text: "1. オーブンを200°Cに予熱します。\n2. 小さなボウルで、ゴールデン・ターンの砂糖、醤油、生姜、ニンニク、ライムジュースを砂糖が溶けるまで混ぜ合わせます。\n3. パーチメント紙を敷いた天板にサーモンの切り身を置きます。サーモンの上面と側面にグレーズをたっぷりと塗ります。\n4. 12〜15分焼くか、サーモンに火が通り、フォークで簡単にほぐれるようになるまで焼きます。上面をよりキャラメル化させたい場合は、最後の1〜2分間、焦げ付かないように注意しながらブロイルします。\n5. 提供する前に、新鮮なコリアンダーとゴマで飾ります。蒸したご飯や野菜と非常によく合います。" },
                ]
            },
            {
                id: 5,
                title: "木立から世界へ：私たちの砂糖の旅",
                coverImage: "https://via.placeholder.com/400x300.png?text=Global+Journey+(4:3)",
                introduction: "ゴールデン・ターンのすべてのブロックは、持続可能な農業、コミュニティのエンパワーメント、そして細心の品質管理の物語を語っています。一本のヤシの花からあなたのキッチンまでの旅を追ってください。",
                content: [
                    { type: 'heading', text: 'ステップ1：持続可能な収穫' },
                    { type: 'paragraph', text: "旅は、農家がアグロエコロジーの一形態を実践している私たちの手付かずのヤシ園で始まります。彼らは木から取るだけではありません。彼らは生態系全体を育てます。蜜は、将来の世代のために木々が健康を維持することを保証する、伝統的で無害な方法で収集されます。" },
                    { type: 'heading', text: 'ステップ2：職人によるプロセス' },
                    { type: 'paragraph', text: "収集された樹液は、コミュニティの加工センターに運ばれます。ここで、それは開放された中華鍋でゆっくりと煮詰められます。これは単なる蒸発ではありません。それは職人技です。職人たちは、砂糖が完璧な粘稠度、色、香りに達したときを正確に知っています。この穏やかで、急がないプロセスは、重要なミネラルと栄養素を保存します。" },
                    { type: 'heading', text: 'ステップ3：品質と純度のチェック' },
                    { type: 'paragraph', text: "包装する前に、ゴールデン・ターンのすべてのバッチは品質がテストされます。私たちは、それが私たちの厳しい基準を満たしていることを確認するために、水分含有量、風味プロファイル、および純度をチェックします。添加物も、他の砂糖との混合もありません。100％純粋なパルミラヤシの蜜だけです。" },
                     { type: 'heading', text: 'ステップ4：世界へ届ける' },
                    { type: 'paragraph', text: "最後に、砂糖は新鮮さを保つために慎重に包装され、世界中の目の肥えた顧客に出荷されます。この全プロセスは、彼らの技術と献身を称えるプレミアム価格を農家に支払うという公正さの基盤の上に構築されています。ゴールデン・ターンを選ぶとき、あなたは単に甘味料を買っているだけではありません。あなたは持続可能で倫理的な生産の連鎖を支援しているのです。" },
                ]
            }
        ]
    },
    footer: {
        address: "919/1 JTC Building, Silom Road, Silom, Bangrak, Bangkok 10500, Thailand",
        contactPerson: { label: "担当者", name: "クリサダ・ラオハシリ氏" },
        phone: { label: "電話/WhatsApp", number: "+66(0)81 851 9922" },
        email: { label: "Eメール", address: "info@goldentaan.com" },
        quickLinks: "クイックリンク",
        copyright: "© {year} Golden TAAN Co., Ltd. 無断複写・転載を禁じます。",
    }
};

const ko: Translations = {
    metaTitle: "골든 탄 | 정통 팔미라 야자 설탕 - 지속 가능한 공급원",
    metaDescription: "태국 랏차부리의 가족 농장에서 지속 가능하게 공급되는 프리미엄 저 GI 팔미라 야자 설탕, 골든 탄을 만나보세요. 100% 순수, 비정제 제품입니다.",
    nav: {
        home: "홈",
        ourStory: "우리의 이야기",
        heritage: "유산 및 표준",
        blog: "블로그",
        sustainability: "지속 가능성",
        wholesale: "도매 및 B2B",
        shopNow: "지금 구매",
        homeSubItems: [
            { id: '#our-story', label: '우리의 이야기' },
            { id: '#health-benefits', label: '건강상의 이점' },
            { id: '#products', label: '제품' },
            { id: '#contact', label: '문의하기' },
        ]
    },
    home: {
        hero: {
            headline: "골든 탄: 달콤함의 유산",
            subheadline: "자연이 완성한 정통 팔미라 야자 설탕의 순수한 맛을 발견하세요.",
            cta: "우리의 이야기 발견하기",
        },
        trends: {
            headline: "진정성을 갈망하는 세상",
            description: "전 세계 식품 환경은 기념비적인 변화를 겪고 있습니다. 현대 소비자들은 맛을 넘어 모든 한 입에서 투명성, 건강, 지속 가능성을 추구합니다.",
            billion: "십억",
            marketStat: "천연 감미료 시장은 2030년까지 550억 달러 이상에 이를 것으로 예상됩니다.",
            consumerStat: "의 전 세계 소비자들이 천연, 클린 라벨 성분이 포함된 제품을 적극적으로 선택하고 있습니다.",
        },
        health: {
            headline: "건강한 차이: 영양 성분 심층 분석",
            description: "영양소가 제거된 정제된 백설탕과 달리, 골든 탄 및 비정제 사탕수수와 같은 비정제 감미료는 상당량의 천연 미네랄을 유지합니다. 이 차트는 100g당 영양 가치의 현저한 차이를 보여줍니다.",
            chartTitle: "영양소 비교 (100g당)",
            goldenTaan: "골든 탄",
            unrefinedSugarcane: "비정제 사탕수수당",
            refinedWhiteSugar: "정제 백설탕",
            nutrientData: nutrientData.default,
            insight: {
                title: "핵심 통찰: 비정제의 힘",
                text: "데이터는 비정제 감미료의 우수성을 명확하게 보여줍니다. 골든 탄과 생 사탕수수 모두 필수 미네랄이 풍부하지만, 골든 탄의 매우 높은 칼륨 함량(백설탕의 500배 이상, 사탕수수의 2배 이상)이 이를 차별화합니다. 칼륨은 혈압, 신경 기능 및 근육 수축을 조절하는 데 필수적인 중요한 전해질이므로 골든 탄은 건강을 의식하는 라이프스타일에 특히 유익한 선택입니다.",
            },
            goldenTaanEffect: "지속적인 활력을 위해 느리고 꾸준한 에너지 방출을 제공합니다.",
            whiteSugarEffect: "급격한 혈당 상승을 유발한 후 에너지 충돌을 일으킵니다."
        },
        process: {
            headline: "두 가지 공정 이야기",
            description: "살아있는 감미료와 빈 감미료를 구분하는 것은 바로 공정입니다. 이것이 모든 차이를 만듭니다.",
            artisanal: {
                title: "골든 탄 (장인 방식)",
                steps: [
                    { title: "수확", description: "숙련된 농부들이 야자수에 올라 대나무 통을 사용하여 꽃에서 달콤한 수액을 채취합니다." },
                    { title: "끓이기", description: "신선한 수액은 큰 웍에서 부드러운 장작불로 걸쭉해질 때까지 천천히 조리됩니다." },
                    { title: "결정화", description: "그런 다음 자연적으로 식히고 결정화시켜 색, 향 및 영양소를 보존합니다." },
                ],
            },
            industrial: {
                title: "백설탕 (산업 방식)",
                steps: [
                    { title: "수확 및 압착", description: "사탕수수는 기계로 수확하고 압착하여 즙을 추출합니다." },
                    { title: "정제", description: "석회 및 이산화황과 같은 화학 물질을 사용하여 즙에서 불순물을 제거합니다." },
                    { title: "표백 및 여과", description: "활성탄을 통해 즙을 여과하여 순수한 흰색을 만듭니다." },
                    { title: "결정화", description: "원심 분리기가 시럽을 회전시켜 거의 100% 순수한 자당 결정을 형성합니다." },
                ]
            }
        },
        impact: {
            headline: "지속 가능한 생태계",
            description: "팔미라 야자 농업은 종종 생태계를 저하시키는 사탕수수 단일 재배와 달리 환경에 긍정적인 영향을 미치는 본질적으로 지속 가능한 농업 형태입니다.",
            chartTitle: "지속 가능성 영향 지수 (10점 만점)",
            conventionalSugarcane: "전통적인 사탕수수",
            sustainabilityData: [
                { name: '물 효율성', goldenTaan: 9, sugarcane: 3 },
                { name: '토양 재생', goldenTaan: 9, sugarcane: 2 },
                { name: '낮은 살충제 사용', goldenTaan: 10, sugarcane: 3 },
                { name: '생물 다양성', goldenTaan: 8, sugarcane: 4 },
                { name: '탄소 저장', goldenTaan: 7, sugarcane: 3 },
            ],
            community: {
                headline: "커뮤니티에 뿌리내리다",
                description: "골든 탄을 선택하는 것은 나무에서 시작하여 농가로 흘러가 비교할 수 없는 품질의 제품으로 당신에게 돌아오는 번영의 순환에 투자하는 것을 의미합니다.",
                stats: [
                    { value: 40, unit: "년 이상", label: "단일 나무가 가족에게 소득을 제공할 수 있는 기간" },
                    { value: 2000, unit: "가구 이상", label: "안정적인 소득으로 지원되는 농촌 가구" },
                    { value: 25, unit: "백만+", label: "커뮤니티 기업의 연간 수출 수익", prefix: "₩" },
                    { value: 15, unit: "%", label: "시장 가격보다 농부들에게 더 지급되는 프리미엄" },
                ]
            }
        },
        productSection: {
            headline: "우리의 제품",
            description: "우리의 야자수에서 당신의 식료품 저장실까지 정성껏 만들었습니다.",
            addToCart: "장바구니에 담기",
            added: "추가됨!",
        },
        products: [
            { id: 'p1', img: 'https://via.placeholder.com/400x400.png?text=Palm+Sugar+Block+(1:1)', title: '팔미라 야자 설탕 블록', description: '독특한 향과 함께 풍부하고 깊은 맛. 전통 태국 요리 및 디저트에 완벽한 부드러운 퍼지 같은 질감.', price: 10000 },
            { id: 'p2', img: 'https://via.placeholder.com/400x400.png?text=Palm+Sugar+Powder+(1:1)', title: '팔미라 야자 설탕 분말', description: '사용하기 쉽고 빠르게 녹도록 미세하게 분쇄. 현대적인 베이킹 및 음료 감미료로 이상적.', price: 12000 },
            { id: 'p3', img: 'https://via.placeholder.com/400x400.png?text=Palm+Sugar+Syrup+(1:1)', title: '팔미라 야자 설탕 시럽', description: '풍부하고 농축된 액체 단맛. 팬케이크, 아이스크림 토핑 또는 칵테일에 섞기에 완벽함.', price: 15000 },
        ],
        faq: {
            headline: "자주 묻는 질문",
            showMore: "더 많은 질문 보기",
            items: [
                { q: '정통 골든 탄과 모조품을 어떻게 구별할 수 있나요?', a: '정통 골든 탄은 자연스러운 황금빛 갈색을 띠며, 풍부한 캐러멜 같은 향과 부드럽고 온화한 단맛이 있습니다. 모조품은 종종 흑설탕이 첨가되어 더 어두운 색을 띠고 날카로운 단맛이 납니다.' },
                { q: '팔미라 야자 설탕과 코코넛 설탕의 차이점은 무엇인가요?', a: '둘 다 야자 설탕이지만 다른 종에서 나옵니다. 팔미라 야자 설탕은 팔미라 야자수(Borassus flabellifer)에서, 코코넛 설탕은 코코넛 야자수에서 나옵니다. 팔미라 설탕은 일반적으로 더 복잡하고 향기로운 풍미 프로필을 가지고 있습니다.' },
                { q: '제품의 유통기한은 어떻게 되나요?', a: '고체 블록과 분말은 서늘하고 건조한 곳에서 12-18개월 동안 보관할 수 있습니다. 시럽은 냉장 보관하고 개봉 후 6개월 이내에 섭취해야 합니다.' },
                { q: '골든 탄의 혈당 지수(GI)는 얼마인가요?', a: '골든 탄은 약 35의 낮은 혈당 지수를 가지고 있으며, 이는 백설탕(약 65)과 꿀(약 58)보다 훨씬 낮습니다.' },
                { q: '제품이 유기농인가요?', a: '우리 팔미라 야자수는 살충제나 화학 비료를 사용하지 않고 자연적으로 자랍니다. 아직 공식적으로 유기농 인증을 받지는 않았지만, 우리 공정은 유기농업의 모든 원칙을 따릅니다.' },
                { q: '요리법에서 백설탕 대신 골든 탄을 사용할 수 있나요?', a: '물론입니다. 1:1 대체품으로 사용할 수 있습니다. 구운 제품에 약간 더 어두운 색을 주고 독특하고 맛있는 향을 더할 수 있습니다.' },
                { q: '골든 탄은 당뇨병 환자에게 적합한가요?', a: 'GI가 낮기 때문에 백설탕보다 더 나은 대안입니다. 그러나 다른 감미료와 마찬가지로 당뇨병 환자는 섭취 전에 의사와 상담해야 합니다.' },
                { q: '생산 과정이 야자수에 해를 끼치나요?', a: '전혀 그렇지 않습니다. 야자 꽃을 두드리는 것은 나무에 해를 끼치지 않는 지속 가능하고 오래된 전통입니다. 단일 팔미라 야자수는 수십 년 동안 수액을 제공할 수 있습니다.' },
                { q: '배송 정책은 어떻게 되나요?', a: '태국 전역에 민간 택배 서비스를 이용하여 배송합니다. 대량 주문 및 국제 수출의 경우 도매 부서에 문의하십시오.' },
                { q: '제품에 방부제가 포함되어 있나요?', a: '아니요, 우리 제품은 100% 천연이며 방부제, 인공 색소 또는 기타 첨가물이 없습니다.' },
                { q: '골든 탄이 백설탕보다 비싼 이유는 무엇인가요?', a: '더 높은 가격은 노동 집약적인 장인 생산 과정, 우수한 영양가, 그리고 지역 농업 공동체를 지원하는 공정 무역 관행에 대한 우리의 약속을 반영합니다.' },
                { q: '제품은 어디서 구매할 수 있나요?', a: '우리 웹사이트에서 직접 주문하거나 일부 프리미엄 슈퍼마켓 및 건강 식품점에서 우리 제품을 찾을 수 있습니다.' },
                { q: '야자 농업이 기후 변화에 어떻게 도움이 되나요?', a: '야자수 숲은 훌륭한 탄소 흡수원입니다. 수명이 긴 나무는 토양 품질을 개선하고 침식을 방지하는 깊은 뿌리 시스템을 가지고 있습니다.' },
                { q: '야자수 숲을 방문할 수 있나요?', a: '우리는 농업 관광 프로그램을 개발 중입니다. 향후 공지 사항은 소셜 미디어에서 팔로우하십시오.' },
                { q: '어떤 종류의 품질 관리를 하고 있나요?', a: '우리는 수액 채취에서 포장까지 모든 단계에서 엄격한 품질 관리를 시행하여 가장 순수하고 최고 품질의 제품을 받을 수 있도록 보장합니다.' },
            ]
        }
    },
    about: {
        header: {
            title: "우리의 이야기",
            subtitle: "우리의 이야기는 회의실에서 시작되지 않았습니다. 수 세대에 걸쳐 달콤함의 유산이 전해져 내려온 랏차부리의 팔미라 야자수 그늘 아래에서 시작되었습니다.",
        },
        roots: {
            title: "달콤함의 뿌리",
            text: "우리 가족은 한 세기 이상 팔미라 야자수와 연결되어 왔습니다. 우리는 야자수 잎이 바람에 스치는 소리, 끓는 수액의 달콤한 향기, 그리고 순수하고 첨가물 없는 장인 정신에 대한 자부심 속에서 자랐습니다. 이것이 우리가 세상과 나누고 싶은 유산입니다.",
        },
        fadingGold: {
            title: "사라지는 황금",
            text: "속도와 양이 종종 품질을 능가하는 시대에, 정통 팔미라 야자 설탕은 사탕수수 설탕과 첨가물이 섞인 저렴한 제품으로 대체되고 있었습니다. 우리는 이 문화적 '황금'이 사라지기 시작하는 것을 보았고, 그것이 '골든 탄'의 시작이었습니다.",
        },
        mission: {
            title: "지속 가능한 달콤함을 위한 사명",
            text: "우리의 사명은 정통 팔미라 야자 설탕의 가치를 되살리고 높이는 것입니다. 우리는 전통적인 지혜를 보존하면서 현대적인 품질 기준을 구현하기 위해 농업 공동체와 직접 협력하여 모든 골든 탄 제품이 맛있을 뿐만 아니라 건강, 지역 사회, 그리고 지구에도 좋도록 보장합니다.",
        },
        timelineTitle: "달콤한 여정: 과거에서 현재까지",
        timeline: [
            { title: "동남아시아의 기원", era: "9세기", description: "초기 기록에 따르면 팔미라 야자 수액은 동남아시아 전역에서 귀한 감미료로 사용되었습니다." },
            { title: "가족의 유산", era: "대대로", description: "야자수액 채취와 수액을 천천히 끓이는 전통적인 방법은 가족의 지혜로 전수됩니다." },
            { title: "왕궁과 아유르베다에서", era: "왕궁과 아유르베다", description: "야자 설탕은 태국 왕실 디저트와 고대 아유르베다 의학의 핵심 성분으로 사용되었습니다." },
            { title: "골든 탄의 탄생", era: "현재", description: "이 유산을 보존하고 순수한 달콤함을 세상에 전파하려는 사명을 가지고 '골든 탄' 브랜드가 설립되었습니다." }
        ],
        people: {
            title: "순수함 뒤의 사람들",
            founderName: "크리사다 라오하시리 (창립자)",
            founderQuote: "우리는 단지 설탕을 만드는 것이 아닙니다. 우리는 우리 고향의 유산을 보존하고 있습니다.",
            communityTitle: "장인 공동체",
            communityText: "골든 탄의 핵심은 숙련된 농업 파트너입니다. 그들은 조상의 지혜를 지키는 수호자이며, 매일 아침 자연에 대한 깊은 존경심을 가지고 야자수에 올라 우리를 위해 귀중한 수액을 채취하는 사람들입니다.",
        },
        choice: {
            title: "더 건강한 선택",
            text: "우리는 달콤함이 \"죄책감 있는 즐거움\"일 필요는 없다고 믿습니다. 골든 탄은 낮은 혈당 지수, 풍부한 미네랄, 그리고 코코넛 설탕이나 사탕수수 설탕과 같은 일반적인 감미료보다 더 복잡한 풍미를 가진 자연적인 대안입니다. 우리는 마음 편히 달콤함을 즐길 수 있는 선택을 제공하기 위해 최선을 다하고 있습니다.",
        }
    },
    heritage: {
        header: {
            title: "유산 및 글로벌 표준",
            subtitle: "골든 탄의 품질 뒤에는 토양에서 선반까지 모든 단계에서 탁월함을 추구하는 헌신이 있습니다.",
        },
        tabs: {
            origin: "기원 및 유산",
            export: "수출 시장",
            certs: "인증",
        },
        origin: {
            title: "팔미라 야자 설탕: 태국 풍미의 유산",
            paragraphs: [
                "태국 팔미라 야자 설탕은 일반적인 사탕수수 및 코코넛 설탕과는 구별되는 깊은 문화적 뿌리를 가진 토착 감미료입니다.",
                "그 원천은 동남아시아가 원산지인 팔미라 야자수(Borassus flabellifer)이며, 펫차부리 및 랏차부리 지방은 수세기 동안 정통 생산의 역사적 중심지 역할을 해왔습니다. 이 지역의 독특한 미네랄이 풍부한 토양, 즉 테루아는 설탕의 깊은 캐러멜 같은 풍미와 미묘한 스모키 노트에 기여하는 것으로 여겨집니다.",
                "생산 과정은 여러 세대에 걸쳐 전수된 유서 깊은 기술입니다. '태퍼'로 알려진 농부들은 매일 높은 야자수에 올라 나무의 꽃에서 수액을 채취합니다. 이 수액은 큰 웍에서 장작불 위에서 몇 시간 동안 천천히 조리됩니다. 이는 첨가물이나 산업적 정제 없이 설탕을 자연적으로 걸쭉하게 만들고 캐러멜화하여 풍미를 농축하고 영양소를 보존하는 세심한 과정입니다."
            ]
        },
        export: {
            title: "태국의 야자 설탕 수출 시장",
            intro: "\"순수 팔미라 야자 설탕\"에 대한 구체적인 데이터는 종종 수출 통계에서 \"코코넛 설탕\"과 함께 분류되지만, 태국은 천연 감미료의 글로벌 시장에서 중요한 역할을 합니다. 이 수요는 더 건강하고, 유기농이며, 최소한으로 가공된 식품에 대한 전 세계적인 추세에 의해 주도됩니다.",
            market: {
                intro: "글로벌 야자 설탕 시장은",
                value: "27억 8천만 달러",
                outro: "에 이를 것으로 예상되며, 유기농 부문이 가장 두드러지고 빠른 성장을 보이고 있습니다.",
            },
            keyMarkets: {
                title: "주요 수출 시장",
                markets: [
                    { name: "아메리카 (미국 및 캐나다)", description: "건강에 관심이 많은 소비자들이 낮은 혈당 지수와 높은 영양 함량으로 야자 설탕을 가치 있게 여기는 주요 시장입니다." },
                    { name: "유럽", description: "특히 독일, 프랑스, 영국에서 유기농 및 공정 무역 상품에 대한 강력한 시장입니다. 인증이 매우 중요합니다." },
                    { name: "UAE 및 중동", description: "수요는 주로 할랄 인증 제품에 대한 필요성과 전통 과자 및 디저트에서의 사용에 의해 주도됩니다." },
                    { name: "아시아 태평양", description: "일본, 한국, 호주와 같은 이웃 국가 및 시장은 전통 및 현대 아시아 요리 모두에 대한 사용에 높은 관심을 보입니다." },
                ]
            }
        },
        certs: {
            title: "필수 수출 인증",
            intro: "야자 설탕을 성공적으로 수출하고 국제 구매자에게 품질 및 규정 준수를 보장하려면 국내 및 전 세계적으로 인정받는 인증의 조합이 필수적입니다.",
            thai: {
                title: "태국 인증 (신뢰의 기초)",
                items: [
                    { title: "GMP (우수 제조 기준)", issuer: "태국 FDA", description: "수액 채취에서 포장까지 생산 공정이 엄격한 위생 및 안전 기준을 충족하도록 보장합니다." },
                    { title: "HACCP (위해 요소 분석 및 중요 관리점)", issuer: "글로벌 표준", description: "생산 공정에서 잠재적 위험을 식별하고 제어하는 고급 식품 안전 관리 시스템입니다." },
                    { title: "태국 FDA 승인", issuer: "태국 FDA", description: "모든 식품은 태국 식품의약품안전처에 등록 및 승인을 받아야 합니다." },
                ]
            },
            international: {
                title: "국제 및 시장별 인증 (글로벌 시장 접근)",
                items: [
                    { title: "할랄 인증", issuer: "UAE 및 할랄 시장용", description: "UAE 및 대부분의 이슬람 국가로의 수출에 매우 중요하며, 전체 생산 공정이 이슬람 율법을 준수하도록 보장합니다." },
                    { title: "USDA 유기농", issuer: "미국 시장용", description: "야자수가 합성 살충제나 비료 없이 재배되고 가공 과정이 화학 물질이 없음을 보장합니다." },
                    { title: "EU 유기농", issuer: "유럽 시장용", description: "EU 내에서 제품을 '유기농'으로 판매하기 위해 필요하며, 자체적인 엄격한 기준이 있습니다." },
                    { title: "공정 무역 인증", issuer: "윤리적 소비자 어필", description: "유럽과 북미에서 높이 평가되며, 농부와 노동자가 공정하게 대우받고 좋은 조건에서 일하도록 보장합니다." },
                ]
            }
        }
    },
    sustainability: {
        header: {
            title: "지속 가능성에 대한 우리의 약속",
            subtitle: "골든 탄에게 지속 가능성은 유행어가 아닙니다. 우리 운영의 핵심입니다. 우리는 ESG 원칙에 따라 지구와 사회에 지속적인 긍정적 영향을 창출합니다.",
        },
        environmental: {
            title: "E: 환경적 책임",
            points: [
                { title: "농업 생태학", text: "우리의 야자수 숲은 생물 다양성을 증진하고 화학 물질을 전혀 사용하지 않는 통합 농업 시스템입니다." },
                { title: "물 효율성", text: "팔미라 야자수는 가뭄에 강하여 사탕수수보다 훨씬 적은 물을 필요로 합니다." },
                { title: "탄소 격리", text: "오래 사는 야자수 숲은 중요한 탄소 흡수원 역할을 하여 지구 온난화를 완화하는 데 도움을 줍니다." },
                { title: "친환경 포장", text: "우리는 포장에 재활용 가능하고 생분해성인 재료를 사용하기 위해 최선을 다하고 있습니다." },
            ]
        },
        social: {
            title: "S: 사회적 책임",
            points: [
                { title: "공정 무역", text: "안정적이고 지속 가능한 소득을 보장하기 위해 시장 가격보다 높은 가격으로 농부들로부터 직접 구매합니다." },
                { title: "지역 사회 개발", text: "농가 가족을 위한 기술 개발 및 교육 프로그램에 투자합니다." },
                { title: "지역 지혜 보존", text: "전통적인 장인 야자 설탕 제조 지식을 보존하고 전수하기 위해 노력합니다." },
                { title: "건강 및 웰빙", text: "소비자의 건강에 긍정적으로 기여하는 제품을 홍보합니다." },
            ]
        },
        governance: {
            title: "G: 거버넌스 및 투명성",
            points: [
                { title: "공급망 투명성", text: "우리는 숲과 농부에 이르기까지 제품에 대한 완전한 추적 가능성을 제공합니다." },
                { title: "품질 표준", text: "우리는 모든 생산 단계에서 엄격한 품질 관리 프로세스를 준수합니다." },
                { title: "윤리적 사업 관행", text: "우리는 모든 이해 관계자에게 정직하고 공정하게 운영하기 위해 최선을 다하고 있습니다." },
                { title: "열린 소통", text: "우리는 제품 및 프로세스에 대한 정확하고 완전한 정보를 소비자에게 제공합니다." },
            ]
        },
        insights: {
            title: "데이터 기반 통찰력 및 투명성",
            chartTitle: "자원 효율성 비교",
            report: {
                title: "전체 지속 가능성 보고서",
                text: "우리의 관행, 지표 및 미래 목표에 대한 심층적인 내용을 보려면 종합 보고서를 다운로드하십시오.",
                cta: "보고서 다운로드 (PDF)",
            }
        },
        resourceChartData: [
            { subject: '물 효율성', 'Golden Taan': 9, 'Cane Sugar': 3, fullMark: 10 },
            { subject: '낮은 토지 이용', 'Golden Taan': 8, 'Cane Sugar': 4, fullMark: 10 },
            { subject: '낮은 살충제 사용', 'Golden Taan': 10, 'Cane Sugar': 3, fullMark: 10 },
            { subject: '생물 다양성', 'Golden Taan': 8, 'Cane Sugar': 4, fullMark: 10 },
            { subject: '탄소 저장', 'Golden Taan': 7, 'Cane Sugar': 3, fullMark: 10 },
        ]
    },
    wholesale: {
        header: {
            title: "골든 탄과 파트너 되기",
            subtitle: "프리미엄 팔미라 야자 설탕 제품으로 고객에게 순수하고 지속 가능한 달콤함을 제공하십시오.",
        },
        insights: {
            title: "글로벌 시장 통찰력 및 기회",
            text: "천연 감미료 시장은 꾸준히 성장하여 2032년까지 27억 8천만 달러에 이를 것으로 예상되며 연평균 성장률(CAGR)은 3.4%입니다. 특히 유기농 부문은 가장 큰 시장 점유율을 차지하고 있으며 가장 빠른 성장을 보일 것으로 예상됩니다. 이는 파트너들이 수요가 많고 차별화된 제품을 제공할 수 있는 중요한 기회를 제공합니다.",
        },
        pricing: {
            title: "가격 구조 및 파트너십 모델",
            text: "우리는 물량에 따라 보상하는 계층적 가격 구조를 제공하며, 귀하의 비즈니스 요구에 가장 적합한 파트너십 모델을 논의하는 데 유연합니다.",
            table: {
                headers: ["최소 주문 수량(MOQ)", "국내 가격(THB/kg)(약)", "수출 가격(USD/kg)(FOB)*"],
                rows: [
                    { moq: "50 kg", domestic: "~165", export: "~$6.50" },
                    { moq: "100 kg", domestic: "~150", export: "~$5.80" },
                    { moq: "500 kg", domestic: "~135", export: "~$5.20" },
                ],
                contactRow: {
                    moq: "1,000+ kg",
                    price: "특별 가격 문의",
                },
                note: "*수출 가격은 글로벌 시장, 환율 및 특정 포장/인증 요구 사항에 따라 변경될 수 있습니다.",
            }
        },
        logistics: {
            title: "유연한 포장 및 배송",
            packaging: {
                title: "포장 옵션",
                options: ["벌크 백, 점보 백(대량 수출용)", "OEM/개인 상표 포장 서비스", "HORECA용 식품 서비스 갤런", "소매용 포장 옵션"]
            },
            export: {
                title: "수출 및 물류",
                services: ["전자 통관 전체 지원", "건강 증명서 및 필요 서류 제공", "원산지 증명서(CO) 준비", "글로벌 배송 조정"]
            }
        },
        form: {
            title: "견적 요청(RFQ)",
            companyName: "회사명",
            contactPerson: "담당자",
            email: "이메일",
            country: "국가",
            volume: "원하는 양(kg/톤)",
            productType: {
                label: "제품 유형",
                options: ["고체(블록)", "분말", "시럽", "유기농"]
            },
            packaging: {
                label: "포장 요구 사항",
                placeholder: "예: OEM, 벌크 백 등",
            },
            message: "추가 메시지",
            submit: "견적 요청 제출",
            successMessage: "요청이 성공적으로 제출되었습니다. 저희 팀이 곧 연락드리겠습니다.",
        }
    },
    shop: {
        header: {
            title: "장바구니 및 결제",
            subtitle: "상품을 검토하고 편리한 결제 방법을 선택하세요.",
        },
        emptyCart: {
            title: "장바구니가 비어 있습니다.",
            text: "우리 제품을 탐색하여 당신의 삶에 자연스러운 달콤함을 더하세요.",
            cta: "홈페이지로 돌아가기",
        },
        summary: {
            title: "주문 요약",
            subtotal: "소계",
            shipping: "배송비",
            total: "총계",
        },
        payment: {
            title: "결제 방법 선택",
            tabs: {
                qr: "QR 코드",
                crypto: "암호화폐",
                card: "카드 / 페이팔",
            },
            qr: {
                text: "모바일 뱅킹 앱으로 이 QR 코드를 스캔하여 결제하세요.",
            },
            crypto: {
                text: "아래 지갑 주소로 결제 금액을 보내주세요:",
                accept: "지원 코인:",
            },
            card: {
                number: "카드 번호",
                expiry: "유효 기간 (월/년)",
                cvc: "CVC",
                name: "카드 소유주 이름",
                pay: "결제하기",
            }
        }
    },
    blog: {
        header: {
            title: "블로그: 달콤함의 이야기",
            subtitle: "정통 팔미라 야자 설탕의 깊은 이야기, 지혜, 가치를 탐색하세요.",
        },
        readMore: "더 읽기",
        back: "블로그로 돌아가기",
        posts: [
            {
                id: 1,
                title: "팔미라 야자 설탕이란? 완벽 가이드",
                coverImage: "https://via.placeholder.com/400x300.png?text=Palm+Sugar+Guide+(4:3)",
                introduction: "정통 팔미라 야자 설탕에 대한 포괄적인 가이드. 기원과 생산 과정부터 다른 감미료와 차별화되는 이유까지.",
                content: [
                    { type: 'paragraph', text: '태국 문화에서 단맛에 관해 이야기할 때, "남딴 따놋"(팔미라 야자 설탕)은 여러 세대에 걸쳐 전해 내려온 풍부한 유산과 독특한 풍미 프로필을 연상시키는 이름입니다. 세계 시장에서는 아직 발견되기를 기다리는 귀중한 보물로 남아 있습니다. 이것은 정통 팔미라 야자 설탕에 대한 완벽한 가이드로, 그 기원, 장인 생산 방식, 그리고 다른 감미료와 완전히 다른 점을 탐구합니다.' },
                    { type: 'heading', text: '팔미라 야자수의 유산' },
                    { type: 'paragraph', text: '그 원천은 동남아시아가 원산지인 팔미라 야자수(Borassus flabellifer)입니다. 생산 과정은 유서 깊은 공예입니다. "태퍼"로 알려진 농부들은 매일 높은 야자수에 올라 나무의 꽃에서 수액을 채취합니다. 이 수액은 큰 웍에서 장작불 위에서 몇 시간 동안 천천히 조리됩니다. 이는 첨가물이나 산업적 정제 없이 설탕을 자연적으로 걸쭉하게 만들고 캐러멜화하여 영양소를 보존하는 세심한 과정입니다.' },
                ]
            },
            {
                id: 2,
                title: "황금 레시피: 팔미라 설탕과 망고 찰밥",
                coverImage: "https://via.placeholder.com/400x300.png?text=Mango+Sticky+Rice+(4:3)",
                introduction: "골든 탄 팔미라 야자 설탕이 독특한 캐러멜과 스모키한 향으로 클래식한 태국 디저트인 망고 찰밥을 새로운 차원의 맛으로 끌어올리는 방법을 알아보세요.",
                content: [
                    { type: 'heading', text: '개성 있는 달콤함' },
                    { type: 'paragraph', text: '일반적인 망고 찰밥은 달콤하지만 종종 단조롭습니다. 백설탕이나 일반 야자 설탕을 골든 탄으로 대체하면 더 깊고 복잡한 풍미 프로필을 경험할 수 있습니다. 풍부한 캐러멜 같은 맛과 미묘한 스모키한 향이 크리미한 코코넛 밀크와 달콤한 망고와 완벽하게 어우러져 친숙하면서도 흥미롭게 새로운 디저트를 만들어냅니다.' },
                    { type: 'image', src: 'https://via.placeholder.com/800x600.png?text=Ingredients+Flat+Lay+(4:3)', alt: '망고 찰밥 재료' },
                    { type: 'heading', text: '재료' },
                    { type: 'paragraph', text: '• 태국 찹쌀 1컵 (최소 4시간 물에 불린 것)\n• 코코넛 밀크 1컵\n• 잘게 썬 골든 탄 팔미라 야자 설탕 1/2컵\n• 소금 1/4 티스푼\n• 잘 익은 큰 망고 1개, 껍질을 벗기고 썬 것\n• 장식용 볶은 참깨 (선택 사항)' },
                    { type: 'heading', text: '조리법' },
                    { type: 'paragraph', text: '1. 불린 찹쌀의 물기를 뺍니다. 약 20-25분간 찌거나, 완전히 익고 부드러워질 때까지 찝니다.\n2. 밥이 쪄지는 동안, 코코넛 밀크, 골든 탄 팔미라 야자 설탕, 소금을 냄비에 넣고 중약불에서 부드럽게 가열합니다. 설탕이 완전히 녹을 때까지 저어줍니다. 끓이지 마세요.\n3. 밥이 다 익으면 그릇에 옮겨 담습니다. 따뜻하고 달콤한 코코넛 밀크 혼합물을 뜨거운 밥 위에 붓습니다. 부드럽게 섞은 후, 뚜껑을 덮고 20분간 두어 밥이 액체를 흡수하도록 합니다.\n4. 서빙하려면, 찰밥 한 부분을 접시에 담고 신선한 망고 조각을 옆에 배열한 다음, 원한다면 볶은 참깨를 뿌립니다. 한 차원 높은 맛을 즐기세요!' },
                ]
            },
            {
                id: 3,
                title: "야자수액 채취가의 하루",
                coverImage: "https://via.placeholder.com/400x300.png?text=Palm+Tapper+(4:3)",
                introduction: "전통의 수호자, 솜차이를 만나보세요. 우리 파트너 농부 중 한 명의 눈을 통해 골든 탄 설탕 한 알 한 알 뒤에 숨겨진 일상의 기술, 헌신, 지혜를 발견하세요.",
                content: [
                    { type: 'heading', text: '아침의 등반' },
                    { type: 'paragraph', text: '해가 랏차부리 평원을 비추기 훨씬 전, 솜차이의 하루는 시작됩니다. 그의 작업의 어려움을 무색하게 하는 숙련된 편안함으로, 그는 우뚝 솟은 팔미라 야자수 위로 오르기 시작합니다. 이것은 단순한 등반이 아닙니다. 이것은 매일의 의식이자, 여러 세대에 걸쳐 그의 가족을 부양해 온 나무들과의 대화입니다.' },
                    { type: 'image', src: 'https://via.placeholder.com/800x600.png?text=Farmer+Climbing+Palm+(4:3)', alt: '새벽에 팔미라 야자수를 오르는 농부.' },
                    { type: 'heading', text: '수집의 기술' },
                    { type: 'paragraph', text: '꼭대기에서 그는 능숙하게 야자 꽃을 돌보고, 줄기를 조심스럽게 잘라 달콤한 수액, 즉 꿀이 그가 놓은 대나무 용기로 흘러 들어가도록 합니다. 이것은 나무가 건강하고 수십 년 동안 생산성을 유지하도록 하기 위해 엄청난 지식이 필요한 섬세한 과정입니다.' },
                    { type: 'heading', text: '직업 이상, 유산' },
                    { type: 'paragraph', text: '솜차이에게 이것은 생계 수단 이상입니다. "저는 단지 수액을 모으는 것이 아닙니다." 그는 숲을 바라보며 말합니다. "저는 제 조상들의 이야기를 이어가고 있습니다. 이 꿀 한 방울 한 방울에 그들의 지혜가 담겨 있습니다. 골든 탄을 통해 우리는 이 이야기를 세상과 공유하고, 이 삶의 방식이 계속되도록 할 수 있습니다." 우리 설탕 한 스푼에서 맛보는 것은 바로 사람과 자연 사이의 이 깊은 연결입니다.' },
                ]
            },
            {
                id: 4,
                title: "골든 탄 글레이즈드 연어: 건강한 즐거움",
                coverImage: "https://via.placeholder.com/400x300.png?text=Glazed+Salmon+(4:3)",
                introduction: "전통적인 디저트를 넘어 골든 탄의 복합적인 단맛이 어떻게 화려한 짭짤한 요리를 만들어낼 수 있는지 알아보세요. 이 글레이즈드 연어 레시피는 간단하고 건강하며 믿을 수 없을 정도로 풍미가 좋습니다.",
                content: [
                    { type: 'heading', text: '짭짤함과 달콤함의 만남' },
                    { type: 'paragraph', text: "골든 탄 팔미라 야자 설탕의 깊은 캐러멜 향은 연어의 풍부한 맛과 완벽하게 어울립니다. 이 글레이즈는 아름답게 캐러멜화되어 생선 속은 촉촉하고 부드럽게 유지하면서 겉은 약간 바삭하게 만듭니다. 집에서 쉽게 만들 수 있는 레스토랑 수준의 식사입니다." },
                    { type: 'heading', text: '재료' },
                    { type: 'paragraph', text: '• 연어 필레 2개 (각 약 170g)\n• 골든 탄 팔미라 야자 설탕 2큰술, 분말 또는 잘게 다진 것\n• 간장 2큰술 (글루텐 프리는 타마리)\n• 신선한 생강 간 것 1큰술\n• 다진 마늘 1쪽\n• 라임 주스 1큰술\n• 장식용 다진 고수와 참깨' },
                    { type: 'heading', text: '조리법' },
                    { type: 'paragraph', text: "1. 오븐을 200°C로 예열합니다.\n2. 작은 그릇에 골든 탄 설탕, 간장, 생강, 마늘, 라임 주스를 넣고 설탕이 녹을 때까지 섞습니다.\n3. 양피지를 깐 베이킹 시트에 연어 필레를 놓습니다. 연어의 윗면과 옆면에 글레이즈를 넉넉하게 바릅니다.\n4. 12-15분간 굽거나, 연어가 완전히 익고 포크로 쉽게 부서질 때까지 굽습니다. 윗면을 더 캐러멜화하고 싶다면 마지막 1-2분 동안 브로일링하되, 타지 않도록 주의 깊게 관찰합니다.\n5. 서빙하기 전에 신선한 고수와 참깨로 장식합니다. 찐 밥과 채소와 잘 어울립니다." },
                ]
            },
            {
                id: 5,
                title: "숲에서 세계로: 우리 설탕의 여정",
                coverImage: "https://via.placeholder.com/400x300.png?text=Global+Journey+(4:3)",
                introduction: "골든 탄 설탕의 모든 블록은 지속 가능한 농업, 지역 사회 역량 강화, 세심한 품질 관리의 이야기를 담고 있습니다. 단 하나의 야자 꽃에서 당신의 주방까지의 여정을 따라가 보세요.",
                content: [
                    { type: 'heading', text: '1단계: 지속 가능한 수확' },
                    { type: 'paragraph', text: "여정은 농부들이 농업 생태학의 한 형태를 실천하는 우리의 깨끗한 야자수 숲에서 시작됩니다. 그들은 단지 나무에서 가져가는 것이 아닙니다. 그들은 전체 생태계를 양육합니다. 수액은 전통적이고 해롭지 않은 방법으로 수집되어 나무가 미래 세대를 위해 건강하게 유지되도록 보장합니다." },
                    { type: 'heading', text: '2단계: 장인 정신의 과정' },
                    { type: 'paragraph', text: "수집된 수액은 지역 사회 가공 센터로 운송됩니다. 여기서는 열린 웍에서 천천히 조리됩니다. 이것은 단순한 증발이 아닙니다. 이것은 기술입니다. 장인들은 설탕이 완벽한 농도, 색상, 향에 도달했을 때를 정확히 알고 있습니다. 이 부드럽고 서두르지 않는 과정은 중요한 미네랄과 영양소를 보존합니다." },
                    { type: 'heading', text: '3단계: 품질 및 순도 검사' },
                    { type: 'paragraph', text: "포장하기 전에 모든 골든 탄 배치는 품질 검사를 받습니다. 우리는 수분 함량, 풍미 프로필 및 순도를 확인하여 엄격한 기준을 충족하는지 확인합니다. 첨가물도 없고, 다른 설탕과 섞이지도 않습니다. 오직 100% 순수 팔미라 야자 수액뿐입니다." },
                     { type: 'heading', text: '4단계: 세계로 나아가기' },
                    { type: 'paragraph', text: "마지막으로, 설탕은 신선도를 보존하기 위해 신중하게 포장되어 전 세계의 안목 있는 고객에게 배송됩니다. 이 전체 과정은 농부들에게 그들의 기술과 헌신을 존중하는 프리미엄 가격을 지불하는 공정성의 기반 위에 구축되었습니다. 골든 탄을 선택할 때, 당신은 단지 감미료를 사는 것이 아닙니다. 당신은 지속 가능하고 윤리적인 생산 사슬을 지원하는 것입니다." },
                ]
            }
        ]
    },
    footer: {
        address: "919/1 JTC Building, Silom Road, Silom, Bangrak, Bangkok 10500, Thailand",
        contactPerson: { label: "담당자", name: "Mr. Krisada Laohasiri" },
        phone: { label: "전화/WhatsApp", number: "+66(0)81 851 9922" },
        email: { label: "이메일", address: "info@goldentaan.com" },
        quickLinks: "빠른 링크",
        copyright: "© {year} Golden TAAN Co., Ltd. All rights reserved.",
    }
};

export const siteContent = {
    en,
    th,
    de,
    ja,
    ko,
    fr: en,
    zh: en,
};