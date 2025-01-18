import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductList } from './components/ProductList';
import { products } from './data/products';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Product Catalog</h1>
        <p>Browse through our collection of {products.length} products</p>
      </header>
      <main>
        <ProductList products={products} />
      </main>
    </div>
  );
}

export default App
