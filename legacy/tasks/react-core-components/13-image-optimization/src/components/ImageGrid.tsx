import { useState } from 'react';
import { ImageItem, ImageGridProps } from '../types/image';

// Неоптимизированная сетка изображений
export function ImageGrid({ images, columns = 3, gap = 16 }: ImageGridProps) {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  // Разделение изображений по колонкам без виртуализации
  const getColumnImages = () => {
    const columnImages: ImageItem[][] = Array.from({ length: columns }, () => []);
    images.forEach((image, index) => {
      columnImages[index % columns].push(image);
    });
    return columnImages;
  };

  // Загрузка всех изображений сразу без ленивой загрузки
  return (
    <div className="image-grid">
      <div
        className="grid-container"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: `${gap}px`
        }}
      >
        {getColumnImages().map((column, columnIndex) => (
          <div key={columnIndex} className="grid-column">
            {column.map(image => (
              <div
                key={image.id}
                className="image-item"
                onClick={() => setSelectedImage(image)}
              >
                {/* Загрузка изображения без оптимизации */}
                <img
                  src={image.url}
                  alt={image.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
                <div className="image-info">
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                  <div className="tags">
                    {image.tags.map(tag => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Модальное окно без анимации и оптимизации */}
      {selectedImage && (
        <div
          className="modal"
          onClick={() => setSelectedImage(null)}
        >
          <div className="modal-content">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh'
              }}
            />
            <div className="modal-info">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
              <div className="tags">
                {selectedImage.tags.map(tag => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
