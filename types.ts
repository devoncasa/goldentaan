

// This represents the raw product data from constants.tsx
export interface ProductData {
  id: number;
  sku: string;
  images: string[];
  price: number;
  isQuote: boolean;
  key: string;
}

// This represents the fully hydrated product with a single selected image and translated text
export interface Product extends Omit<ProductData, 'key' | 'images'> {
  image: string; // The single selected image
  title: string;
  description: string;
  targetUsers: string;
  usp: string;
  market: string;
}

export interface CartItem extends Product {
  quantity: number;
}
