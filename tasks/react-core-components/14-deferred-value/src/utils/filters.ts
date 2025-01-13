import { Product, FilterOptions } from '../types/product';

// Тяжелая функция фильтрации для демонстрации проблемы производительности
export function filterProducts(products: Product[], filters: FilterOptions, searchTerm: string): Product[] {
  // Искусственная задержка для имитации сложных вычислений
  const startTime = performance.now();
  while (performance.now() - startTime < 5) {
    // Блокируем поток на 5мс
  }

  return products.filter(product => {
    // Поиск по тексту
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !product.description.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }

    // Фильтр по цене
    if (filters.minPrice !== undefined && product.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice !== undefined && product.price > filters.maxPrice) {
      return false;
    }

    // Фильтр по категориям
    if (filters.categories?.length && !filters.categories.includes(product.category)) {
      return false;
    }

    // Фильтр по рейтингу
    if (filters.minRating !== undefined && product.rating < filters.minRating) {
      return false;
    }

    // Фильтр по брендам
    if (filters.brands?.length && !filters.brands.includes(product.brand)) {
      return false;
    }

    // Фильтр по наличию
    if (filters.inStock && product.stock === 0) {
      return false;
    }

    return true;
  });
}
