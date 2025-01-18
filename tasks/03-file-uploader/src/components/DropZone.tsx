import React, { useCallback, useState } from 'react';
import type { DropZoneProps } from '../types';

/**
 * Компонент для drag & drop загрузки файлов
 * 
 * Подумайте:
 * 1. Какие события необходимо обработать?
 * 2. Как предотвратить стандартное поведение браузера?
 * 3. Как показать пользователю, что файл можно бросить?
 */
export const DropZone: React.FC<DropZoneProps> = ({
  onFilesAccepted,
  maxFiles = Infinity,
  maxSize = Infinity,
  accept = [],
  disabled = false
}) => {
  // Изучите: почему мы используем два состояния для drag & drop?
  const [isDragActive, setIsDragActive] = useState(false);
  const [isDragReject, setIsDragReject] = useState(false);

  /**
   * Обработчик drag событий
   * 
   * Подумайте:
   * 1. Почему важен порядок событий?
   * 2. Как обрабатывать вложенные drop-зоны?
   * 3. Когда проверять типы файлов?
   */
  const handleDrag = useCallback((e: React.DragEvent) => {
    // Изучите: как работает e.preventDefault() и e.stopPropagation()?
  }, []);

  /**
   * Валидация файлов
   * 
   * Подумайте:
   * 1. Какие проверки нужно сделать?
   * 2. Как обрабатывать папки?
   * 3. Когда показывать ошибки пользователю?
   */
  const validateFiles = useCallback((files: FileList | File[]): File[] => {
    // Изучите: как работать с FileList и File API?
    return [];
  }, [maxFiles, maxSize, accept]);

  /**
   * Обработчик drop события
   * 
   * Подумайте:
   * 1. Как получить список файлов из события?
   * 2. Когда создавать превью?
   * 3. Как обрабатывать множество файлов?
   */
  const handleDrop = useCallback((e: React.DragEvent) => {
    // Изучите: как работает DataTransfer API?
  }, [onFilesAccepted, validateFiles]);

  return (
    <div
      className={`dropzone ${isDragActive ? 'active' : ''} ${isDragReject ? 'reject' : ''}`}
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
    >
      {/* 
        Подумайте:
        1. Как сделать drop-зону доступной с клавиатуры?
        2. Какие aria-атрибуты нужно добавить?
        3. Как показать различные состояния?
      */}
    </div>
  );
};
