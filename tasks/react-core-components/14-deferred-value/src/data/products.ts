import { Product } from '../types/product';

// Генерация большого набора тестовых данных
function generateProducts(count: number): Product[] {
  const categories = ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports'];
  const brands = ['Apple', 'Samsung', 'Nike', 'Adidas', 'Amazon', 'Sony'];
  const tags = ['new', 'sale', 'trending', 'popular', 'limited'];

  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    description: `This is a detailed description for product ${index + 1}`,
    price: Math.floor(Math.random() * 1000) + 10,
    category: categories[Math.floor(Math.random() * categories.length)],
    rating: Math.floor(Math.random() * 5) + 1,
    stock: Math.floor(Math.random() * 100),
    brand: brands[Math.floor(Math.random() * brands.length)],
    tags: Array.from(
      { length: Math.floor(Math.random() * 3) + 1 },
      () => tags[Math.floor(Math.random() * tags.length)]
    )
  }));
}

// Генерация 10,000 продуктов для демонстрации проблемы производительности
export const products = generateProducts(10000);
