export interface ImageItem {
  id: number;
  url: string;
  title: string;
  description: string;
  width: number;
  height: number;
  blurhash: string;
  tags: string[];
}

export interface ImageGridProps {
  images: ImageItem[];
  columns?: number;
  gap?: number;
}
