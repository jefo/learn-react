import React, { useCallback, useReducer } from 'react';
import { DropZone } from './DropZone';
import { UploadList } from './UploadList';
import type { UploadFile, UploadEvent } from '../types';

/**
 * Главный компонент загрузки файлов
 * 
 * Подумайте:
 * 1. Как организовать управление состоянием?
 * 2. Как обрабатывать параллельные загрузки?
 * 3. Как обеспечить оптимальную производительность?
 */
export const FileUploader: React.FC = () => {
  /**
   * Редьюсер для управления состоянием загрузки
   * 
   * Изучите:
   * 1. Когда использовать useReducer вместо useState?
   * 2. Как типизировать actions?
   * 3. Как обрабатывать сложные обновления состояния?
   */
  const [files, dispatch] = useReducer((state: UploadFile[], event: UploadEvent) => {
    // Подумайте: как обновлять состояние иммутабельно?
    return state;
  }, []);

  /**
   * Загрузка файлов на сервер
   * 
   * Подумайте:
   * 1. Как организовать очередь загрузки?
   * 2. Как обрабатывать ошибки сети?
   * 3. Как отменять загрузку?
   */
  const uploadFiles = useCallback(async (files: File[]) => {
    // Изучите: как работает FormData и XMLHttpRequest/Fetch?
  }, []);

  /**
   * Создание превью для изображений
   * 
   * Подумайте:
   * 1. Когда освобождать ресурсы?
   * 2. Как обрабатывать большие изображения?
   * 3. Как показывать прогресс создания превью?
   */
  const createPreviews = useCallback((files: File[]) => {
    // Изучите: как работает URL.createObjectURL?
  }, []);

  return (
    <div className="file-uploader">
      <DropZone
        onFilesAccepted={uploadFiles}
        maxFiles={5}
        maxSize={5 * 1024 * 1024} // 5MB
        accept={['image/*', 'application/pdf']}
      />
      
      <UploadList
        files={files}
        onRetry={(fileId) => {
          // Подумайте: как реализовать повторную попытку загрузки?
        }}
        onCancel={(fileId) => {
          // Подумайте: как отменять загрузку на сервер?
        }}
      />
    </div>
  );
};
