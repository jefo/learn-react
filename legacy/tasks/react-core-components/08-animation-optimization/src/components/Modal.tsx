import { useEffect, useRef } from 'react';
import { ModalProps } from '../types/card';

// Модальное окно с неоптимизированными анимациями
export function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Анимация через DOM манипуляции
  useEffect(() => {
    if (modalRef.current && overlayRef.current) {
      if (isOpen) {
        // Анимация появления через JavaScript
        let opacity = 0;
        const interval = setInterval(() => {
          opacity += 0.05;
          if (opacity <= 1) {
            modalRef.current.style.opacity = opacity.toString();
            overlayRef.current.style.opacity = (opacity * 0.5).toString();
          } else {
            clearInterval(interval);
          }
        }, 16);

        // Анимация масштабирования
        let scale = 0.5;
        const scaleInterval = setInterval(() => {
          scale += 0.05;
          if (scale <= 1) {
            modalRef.current.style.transform = `scale(${scale})`;
          } else {
            clearInterval(scaleInterval);
          }
        }, 16);
      } else {
        modalRef.current.style.opacity = '0';
        modalRef.current.style.transform = 'scale(0.5)';
        overlayRef.current.style.opacity = '0';
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        ref={overlayRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'black',
          opacity: 0,
        }}
        onClick={onClose}
      />
      <div
        ref={modalRef}
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) scale(0.5)',
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          opacity: 0,
          minWidth: '300px',
          maxWidth: '600px',
        }}
      >
        {children}
      </div>
    </>
  );
}
