export enum Page {
    Home = 'home',
    About = 'about-us',
    Heritage = 'heritage',
    Products = 'products',
    Blog = 'blog',
    Sustainability = 'sustainability',
    Wholesale = 'wholesale',
    ShopNow = 'shop-now',
    Contact = 'contact',
}

export interface NutrientData {
    name: string;
    goldenTaan: number;
    unrefinedSugarcane: number;
    coconutSugar: number;
    refinedWhiteSugar: number;
}

export interface SustainabilityData {
    name: string;
    goldenTaan: number;
    sugarcane: number;
}

export interface FAQ {
    q: string;
    a: string;
}

export interface PackagingInfo {
    title: string;
    caseSize: string;
    palletQuantity: string;
    availability: string;
}

export interface Product {
    id: string;
    img: string;
    title: string;
    shortDescription: string;
    description: string;
    price: number;
    size: string;
    ingredients: string;
    nutrition_highlights: string[];
    dietary_suitability: string[];
    pairings: string[];
    packagingInfo: PackagingInfo;
    featuredInRecipes?: number[];
}

export interface CartItem extends Product {
    quantity: number;
}

export interface BlogContent {
    type: 'heading' | 'paragraph' | 'image';
    text?: string;
    src?: string;
    alt?: string;
}

export interface BlogPost {
    id: number;
    title: string;
    coverImage: string;
    introduction: string;
    category: string;
    content: BlogContent[];
}

// --- New Types for Localization ---
export type Language = 'en' | 'th' | 'ja' | 'zh' | 'ar' | 'fr' | 'ko' | 'nl';

export interface WholesaleTierPricing {
    productLine: string;
    skus: {
        name: string;
        tier1: string;
        tier2: string;
        tier3: string;
        tier4: string;
    }[];
}

export interface AccordionSection {
    title: string;
    subtitle: string;
    content: string;
}

interface HeritagePageContent {
    header: { title: string; subtitle: string; };
    sections: AccordionSection[];
}

interface PageSEO {
    title: string;
    description: string;
    altTags: { [key: string]: string };
}

export interface Translations {
    meta: {
        globalTitle: string;
        globalDescription: string;
    };
    softLaunchModal: {
        title: string;
        mainText: string;
        statusText: string;
        selectLanguage: string;
        enterSite: string;
        lastUpdated: string;
    };
    nav: {
        home: string;
        ourStory: string;
        heritage: string;
        products: string;
        blog: string;
        sustainability: string;
        wholesale: string;
        shopNow: string;
        contact: string;
        homeSubItems: { id: string; label: string; }[];
    };
    home: {
        seo: PageSEO;
        hero: {
            headline: string;
            subheadline: string;
            cta: string;
        };
        trends: {
            headline: string;
            description: string;
            billion: string;
            marketStat: string;
            consumerStat: string;
        };
        health: {
            headline: string;
            description: string;
            chartTitle: string;
            goldenTaan: string;
            unrefinedSugarcane: string;
            coconutSugar: string;
            refinedWhiteSugar: string;
            nutrientData: NutrientData[];
            insight: {
                title: string;
                text: string;
            };
            glycemicIndexTitle: string;
            goldenTaanEffect: string;
            whiteSugarEffect: string;
        };
        process: {
            headline: string;
            description: string;
            artisanal: {
                title: string;
                steps: { title: string; description: string; }[];
            };
            industrial: {
                title: string;
                steps: { title: string; description: string; }[];
            };
        };
        impact: {
            headline: string;
            description: string;
            chartTitle: string;
            conventionalSugarcane: string;
            sustainabilityData: SustainabilityData[];
            community: {
                headline: string;
                description: string;
                stats: { value: number; unit: string; label: string; prefix?: string; }[];
            };
        };
        productSection: {
            headline: string;
            description: string;
            addToCart: string;
            added: string;
        };
        products: Product[];
        faq: {
            headline: string;
            showMore: string;
            items: FAQ[];
        };
    };
    productsPage: {
        seo: PageSEO;
        retail: {
            headline: string;
            subtitle: string;
            products: Product[];
        };
        wholesale: {
            headline: string;
            subtitle: string;
            pricingTable: {
                headers: {
                    sku: string;
                    product: string;
                    size: string;
                    retailPrice: string;
                    tier1: string;
                    tier2: string;
                    tier3: string;
                };
                rows: {
                    sku: string;
                    product: string;
                    size: string;
                    retailPrice: string;
                    tier1_price: string;
                    tier2_price: string;
                    tier3_price: string;
                }[];
                exportCta: string;
            };
            compliance: {
                headline: string;
                tabs: {
                    usa: string;
                    eu: string;
                    japan: string;
                    uae: string;
                };
                content: {
                    usa: string;
                    eu: string;
                    japan: string;
                    uae: string;
                };
                disclaimer: string;
            }
        }
    };
    about: {
        seo: PageSEO;
        header: { title: string; subtitle: string; };
        roots: { title: string; text: string; };
        fadingGold: { title: string; text: string; };
        mission: { title: string; text: string; };
        timelineTitle: string;
        timeline: { title: string; era: string; description: string; }[];
        people: {
            title: string;
            founderName: string;
            founderQuote: string;
            communityTitle: string;
            communityText: string;
        };
        choice: { title: string; text: string; };
    };
    heritage: {
        seo: PageSEO;
        header: { title: string; subtitle: string; };
        sections: AccordionSection[];
    };
    sustainability: {
        seo: PageSEO;
        header: { title: string; subtitle: string; };
        environmental: { title: string; points: { title: string, text: string }[] };
        social: { title: string; points: { title: string, text: string }[] };
        governance: { title: string; points: { title: string, text: string }[] };
        insights: {
            title: string;
            chartTitle: string;
            report: { title: string; text: string; cta: string; };
        };
        resourceChartData: { subject: string; 'Golden Taan': number; 'Cane Sugar': number; fullMark: number; }[];
    };
    wholesale: {
        seo: PageSEO;
        header: { title: string; subtitle: string; };
        insights: { title: string; text: string; };
        pricing: {
            title: string;
            text: string;
            table: {
                headers: {
                    productLine: string;
                    sku: string;
                    tier1: string;
                    tier2: string;
                    tier3: string;
                    tier4: string;
                };
                data: WholesaleTierPricing[];
                note: string;
            }
        };
        logistics: {
            title: string;
            packaging: { title: string; options: string[]; };
            export: { title: string; services: string[]; };
        };
        form: {
            title: string;
            companyName: string;
            contactPerson: string;
            email: string;
            country: string;
            volume: string;
            productType: { label: string; options: string[]; };
            packaging: { label: string; placeholder: string; };
            message: string;
            submit: string;
            successMessage: string;
        };
    };
    shop: {
        seo: PageSEO;
        header: { title: string; subtitle: string; };
        emptyCart: { title: string; text: string; cta: string; };
        summary: { title: string; subtotal: string; shipping: string; total: string; };
        payment: {
            title: string;
            tabs: { qr: string; crypto: string; card: string; };
            qr: { text: string; };
            crypto: { text: string; accept: string; };
            card: { number: string; expiry: string; cvc: string; name: string; pay: string; };
        };
        shippingInfo: {
            title: string;
            policy: { title: string; text: string; };
            delivery: { title: string; text: string; };
            customs: { title: string; text: string; };
        };
    };
    blog: {
        seo: PageSEO;
        header: { title: string; subtitle: string; };
        readMore: string;
        back: string;
        filterTitle: string;
        allCategories: string;
        categories: {
            recipes: string;
            health: string;
            sustainability: string;
        };
        posts: BlogPost[];
    };
    contact: {
        seo: PageSEO;
        header: {
            title: string;
            subtitle: string;
        };
        leftColumn: {
            hq: string;
            phone: string;
            hours: string;
            email: string;
            sales: string;
            cc: string;
        };
        form: {
            title: string;
            fullName: string;
            companyName: string;
            country: string;
            email: string;
            inquiryType: {
                label: string;
                options: {
                    wholesale: string;
                    oem: string;
                    sample: string;
                    productInfo: string;
                    general: string;
                }
            };
            message: string;
            submit: string;
            successMessage: string;
        }
    };
    footer: {
        office: {
            title: string;
            address: string;
        };
        contact: {
            title: string;
            name: string;
            phone: {
                label: string;
                number: string;
            };
            email: {
                label: string;
                address: string;
            };
            cc: {
                label: string;
                address: string;
            };
        };
        quickLinks: string;
        copyright: string;
    };
}