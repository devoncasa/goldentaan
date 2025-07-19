
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
    recipeIngredient: string[];
    recipeInstructions: { name: string; text: string; }[];
    nutrition: {
        calories: string;
        sugarContent: string;
    };
}
