import React from 'react';
import type { UploadFile } from '../types';

interface Props {
  files: UploadFile[];
  onRetry: (fileId: string) => void;
  onCancel: (fileId: string) => void;
}

/**
 * Компонент списка загружаемых файлов
 * 
 * Подумайте:
 * 1. Как оптимизировать рендеринг списка?
 * 2. Как показывать прогресс загрузки?
 * 3. Как обрабатывать разные состояния файлов?
 */
export const UploadList: React.FC<Props> = ({ files, onRetry, onCancel }) => {
  /**
   * Рендер элемента списка
   * 
   * Подумайте:
   * 1. Когда использовать memo?
   * 2. Как избежать лишних ререндеров?
   * 3. Как сделать анимации плавными?
   */
  const renderItem = (file: UploadFile) => {
    // Изучите: как работает CSS Grid и Flexbox?
    return (
      <li key={file.id} className="upload-item">
        {/* 
          Подумайте:
          1. Как показывать разные типы файлов?
          2. Как сделать прогресс бар доступным?
          3. Какие действия доступны в разных состояниях?
        */}
      </li>
    );
  };

  return (
    <ul className="upload-list">
      {/* 
        Изучите:
        1. Как работает виртуализация списков?
        2. Когда применять CSS анимации?
        3. Как сделать список доступным?
      */}
      {files.map(renderItem)}
    </ul>
  );
};
