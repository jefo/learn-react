import { useState } from 'react';
import { ImageGrid } from './components/ImageGrid';
import { images } from './data/images';

function App() {
  const [columns, setColumns] = useState(3);

  return (
    <div className="app">
      <header>
        <h1>Image Gallery</h1>
        <div className="controls">
          <label>
            Columns:
            <select
              value={columns}
              onChange={(e) => setColumns(Number(e.target.value))}
            >
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </label>
        </div>
      </header>
      <main>
        <ImageGrid images={images} columns={columns} gap={16} />
      </main>
    </div>
  );
}

export default App;
