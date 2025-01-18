interface Item {
  id: number;
  name: string;
  price: number;
  category: string;
}

interface ItemListProps {
  items: Item[];
  searchTerm: string;
  sortBy: 'name' | 'price';
}

export function ItemList({ items, searchTerm, sortBy }: ItemListProps) {
  console.log('Rendering ItemList');

  // Тяжелые вычисления при каждом рендере
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    return a.price - b.price;
  });

  return (
    <div className="item-list">
      {sortedItems.map(item => (
        <div key={item.id} className="item">
          <h3>{item.name}</h3>
          <p>Category: {item.category}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
}
