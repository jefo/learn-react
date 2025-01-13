import { useState, useEffect, useRef } from 'react';
import { CardProps } from '../types/card';

// Анимированная карточка с проблемами производительности
export function AnimatedCard({ title, content, image }: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Анимация через JavaScript
  useEffect(() => {
    if (isExpanded && cardRef.current) {
      let height = 100;
      const interval = setInterval(() => {
        height += 5;
        if (height <= 300) {
          cardRef.current.style.height = `${height}px`;
        } else {
          clearInterval(interval);
        }
      }, 16);
    }
  }, [isExpanded]);

  // Анимация через DOM манипуляции
  useEffect(() => {
    if (cardRef.current) {
      if (isHovered) {
        let scale = 1;
        const interval = setInterval(() => {
          scale += 0.01;
          if (scale <= 1.1) {
            cardRef.current.style.transform = `scale(${scale})`;
          } else {
            clearInterval(interval);
          }
        }, 16);
      } else {
        cardRef.current.style.transform = 'scale(1)';
      }
    }
  }, [isHovered]);

  // Анимация тени через JavaScript
  const updateShadow = () => {
    if (cardRef.current) {
      const shadowSize = isHovered ? 20 : 5;
      cardRef.current.style.boxShadow = `0 ${shadowSize}px ${shadowSize * 2}px rgba(0,0,0,0.2)`;
    }
  };

  useEffect(() => {
    updateShadow();
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      className="card"
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        width: '300px',
        height: '100px',
        margin: '1rem',
        padding: '1rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s',
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: '100%',
          height: '60px',
          objectFit: 'cover',
          marginBottom: '1rem',
        }}
      />
      <h3>{title}</h3>
      <p style={{ display: isExpanded ? 'block' : 'none' }}>{content}</p>
    </div>
  );
}
