/**
 * Подумайте:
 * 1. Какие состояния может иметь файл в процессе загрузки?
 * 2. Какую информацию нужно хранить для отображения прогресса?
 * 3. Как типизировать различные форматы файлов?
 */

export type FileStatus = 'pending' | 'uploading' | 'success' | 'error';

export interface UploadFile {
  id: string;
  file: File;
  preview?: string;
  progress: number;
  status: FileStatus;
  error?: string;
}

export interface DropZoneProps {
  onFilesAccepted: (files: File[]) => void;
  maxFiles?: number;
  maxSize?: number;
  accept?: string[];
  disabled?: boolean;
}

/**
 * Изучите:
 * 1. Как работает discriminated unions в TypeScript?
 * 2. Когда использовать type, а когда interface?
 * 3. Как типизировать события DOM?
 */
export type UploadEvent = 
  | { type: 'fileAdded'; payload: File }
  | { type: 'uploadProgress'; payload: { id: string; progress: number } }
  | { type: 'uploadSuccess'; payload: { id: string; url: string } }
  | { type: 'uploadError'; payload: { id: string; error: string } };
