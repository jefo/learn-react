import { useState } from 'react';
import { Product, FilterOptions } from '../types/product';
import { filterProducts } from '../utils/filters';

interface ProductListProps {
  products: Product[];
}

// Неоптимизированный компонент списка продуктов
export function ProductList({ products }: ProductListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    minPrice: undefined,
    maxPrice: undefined,
    categories: [],
    minRating: undefined,
    brands: [],
    inStock: false
  });

  // Тяжелая фильтрация выполняется при каждом изменении поиска или фильтров
  const filteredProducts = filterProducts(products, filters, searchTerm);

  // Функции обновления фильтров
  const updatePriceRange = (min?: number, max?: number) => {
    setFilters(prev => ({
      ...prev,
      minPrice: min,
      maxPrice: max
    }));
  };

  const toggleCategory = (category: string) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories?.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...(prev.categories || []), category]
    }));
  };

  const toggleBrand = (brand: string) => {
    setFilters(prev => ({
      ...prev,
      brands: prev.brands?.includes(brand)
        ? prev.brands.filter(b => b !== brand)
        : [...(prev.brands || []), brand]
    }));
  };

  return (
    <div className="product-list">
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <div className="filter-group">
          <h3>Price Range</h3>
          <input
            type="number"
            placeholder="Min price"
            onChange={(e) => updatePriceRange(Number(e.target.value), filters.maxPrice)}
          />
          <input
            type="number"
            placeholder="Max price"
            onChange={(e) => updatePriceRange(filters.minPrice, Number(e.target.value))}
          />
        </div>

        <div className="filter-group">
          <h3>Categories</h3>
          {['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports'].map(category => (
            <label key={category}>
              <input
                type="checkbox"
                checked={filters.categories?.includes(category) || false}
                onChange={() => toggleCategory(category)}
              />
              {category}
            </label>
          ))}
        </div>

        <div className="filter-group">
          <h3>Brands</h3>
          {['Apple', 'Samsung', 'Nike', 'Adidas', 'Amazon', 'Sony'].map(brand => (
            <label key={brand}>
              <input
                type="checkbox"
                checked={filters.brands?.includes(brand) || false}
                onChange={() => toggleBrand(brand)}
              />
              {brand}
            </label>
          ))}
        </div>

        <div className="filter-group">
          <h3>Rating</h3>
          <select
            value={filters.minRating || ''}
            onChange={(e) => setFilters(prev => ({
              ...prev,
              minRating: e.target.value ? Number(e.target.value) : undefined
            }))}
          >
            <option value="">Any rating</option>
            {[4, 3, 2, 1].map(rating => (
              <option key={rating} value={rating}>
                {rating}+ stars
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={filters.inStock || false}
              onChange={(e) => setFilters(prev => ({
                ...prev,
                inStock: e.target.checked
              }))}
            />
            In Stock Only
          </label>
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p className="description">{product.description}</p>
            <div className="price">${product.price}</div>
            <div className="details">
              <span className="category">{product.category}</span>
              <span className="brand">{product.brand}</span>
              <span className="rating">★ {product.rating}</span>
              <span className="stock">
                {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
              </span>
            </div>
            <div className="tags">
              {product.tags.map(tag => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
