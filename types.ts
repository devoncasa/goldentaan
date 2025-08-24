
export enum Page {
    Home = 'home',
    About = 'about-us',
    Heritage = 'heritage',
    Blog = 'blog',
    Sustainability = 'sustainability',
    Wholesale = 'wholesale',
    ShopNow = 'shop-now',
}

export interface NutrientData {
    name: string;
    goldenTaan: number;
    unrefinedSugarcane: number;
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

export interface Product {
    id: string;
    img: string;
    title: string;
    description: string;
    price: number;
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
    content: BlogContent[];
}

// --- New Types for Localization ---
export type Language = 'en' | 'th' | 'de' | 'ja' | 'ko' | 'fr' | 'zh';

export interface Translations {
    metaTitle: string;
    metaDescription: string;
    nav: {
        home: string;
        ourStory: string;
        heritage: string;
        blog: string;
        sustainability: string;
        wholesale: string;
        shopNow: string;
        homeSubItems: { id: string; label: string; }[];
    };
    home: {
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
            refinedWhiteSugar: string;
            nutrientData: NutrientData[];
            insight: {
                title: string;
                text: string;
            };
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
    about: {
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
        header: { title: string; subtitle: string; };
        tabs: { origin: string; export: string; certs: string; };
        origin: { title: string; paragraphs: string[]; };
        export: {
            title: string;
            intro: string;
            market: { intro: string; value: string; outro: string; };
            keyMarkets: { title: string; markets: { name: string; description: string; }[]; };
        };
        certs: {
            title: string;
            intro: string;
            thai: { title: string; items: { title: string; issuer: string; description: string; }[]; };
            international: { title: string; items: { title: string; issuer: string; description: string; }[]; };
        };
    };
    sustainability: {
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
        header: { title: string; subtitle: string; };
        insights: { title: string; text: string; };
        pricing: {
            title: string;
            text: string;
            table: {
                headers: string[];
                rows: { moq: string; domestic: string; export: string; }[];
                contactRow: { moq: string; price: string; };
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
        header: { title: string; subtitle: string; };
        emptyCart: { title: string; text: string; cta: string; };
        summary: { title: string; subtotal: string; shipping: string; total: string; };
        payment: {
            title: string;
            tabs: { qr: string; crypto: string; card: string; };
            qr: { text: string; };
            crypto: { text: string; accept: string; };
            card: { number: string; expiry: string; cvc: string; name: string; pay: string; };
        }
    };
    blog: {
        header: { title: string; subtitle: string; };
        readMore: string;
        back: string;
        posts: BlogPost[];
    };
    footer: {
        address: string;
        contactPerson: { label: string; name: string; };
        phone: { label: string; number: string; };
        email: { label: string; address: string; };
        quickLinks: string;
        copyright: string;
    };
}
