export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  stock: number;
  brand: string;
  tags: string[];
}

export interface FilterOptions {
  minPrice?: number;
  maxPrice?: number;
  categories?: string[];
  minRating?: number;
  brands?: string[];
  inStock?: boolean;
}
