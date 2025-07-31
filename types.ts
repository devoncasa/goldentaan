

export type Page = 'home' | 'products' | 'about' | 'community' | 'faq' | 'contact' | 'recipes' | 'benefits' | 'compare-sugars';

export interface MenuItem {
  name: string;
  to: Page;
  anchor?: string;
  children?: MenuItem[];
}

export interface Product {
  id: number;
  title: string;
  image: string;
  alt: string;
  description: string;
  targetUsers: string;
  usp: string;
  market: string;
  price: number;
  isQuote: boolean;
  sku: string;
  category: 'bar' | 'powder' | 'syrup' | 'bulk' | 'specialty';
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Recipe {
    key: string;
    image: string;
    name: string;
    alt: string;
    description: string;
    category: 'thai-dessert' | 'western-dish' | 'beverage' | 'thai-traditional';
    recipeIngredient: string[];
    recipeInstructions: { name: string; text: string; }[];
    nutrition: {
        calories: string;
        sugarContent: string;
    };
}