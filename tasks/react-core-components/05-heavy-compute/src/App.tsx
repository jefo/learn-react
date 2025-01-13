import { useState } from 'react';
import { ItemList } from './components/ItemList';

// Генерируем большой список товаров для демонстрации проблемы
const generateItems = () => {
  const items = [];
  const categories = ['Electronics', 'Books', 'Clothing', 'Food'];
  
  for (let i = 0; i < 1000; i++) {
    items.push({
      id: i,
      name: `Item ${i}`,
      price: Math.floor(Math.random() * 1000),
      category: categories[Math.floor(Math.random() * categories.length)]
    });
  }
  
  return items;
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price'>('name');
  const [count, setCount] = useState(0);

  // Этот список не меняется, но фильтрация и сортировка происходят при каждом рендере
  const items = generateItems();

  return (
    <div className="app">
      <div className="controls">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'name' | 'price')}
        >
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
        
        {/* Кнопка для демонстрации ререндеров */}
        <button onClick={() => setCount(c => c + 1)}>
          Increment Counter: {count}
        </button>
      </div>

      <ItemList
        items={items}
        searchTerm={searchTerm}
        sortBy={sortBy}
      />
    </div>
  );
}

export default App;
