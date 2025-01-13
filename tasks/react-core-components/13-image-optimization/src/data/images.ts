import { ImageItem } from '../types/image';

// Тестовые изображения с Unsplash
export const images: ImageItem[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
    title: 'Mountain Lake',
    description: 'Beautiful mountain lake at sunset',
    width: 1920,
    height: 1280,
    blurhash: 'LKO2:N%2Tw=w]~RBVZRi};RPxuwH',
    tags: ['nature', 'landscape', 'mountains']
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1682687221038-404670f09561',
    title: 'City Streets',
    description: 'Urban landscape at night',
    width: 1920,
    height: 1280,
    blurhash: 'L6PZfSi_.AyE_3t7t7R**0o#DgR4',
    tags: ['city', 'urban', 'night']
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1682687220067-dced0feb0341',
    title: 'Beach Sunset',
    description: 'Golden sunset at the beach',
    width: 1920,
    height: 1280,
    blurhash: 'LQPGRgxa.mxu_4jYjsR*%#o#DgR4',
    tags: ['beach', 'sunset', 'ocean']
  },
  // Добавьте еще 20-30 изображений для демонстрации проблемы
  // ...
];
