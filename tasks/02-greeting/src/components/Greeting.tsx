import { useState } from 'react';

export function Greeting() {
  // TODO: Реализуйте компонент приветствия здесь
  // 1. Используйте хук useState для хранения введенного имени
  // 2. Создайте функцию для обработки изменений в поле ввода
  // 3. Реализуйте условный рендеринг приветствия

  return (
    <div className="greeting-form">
      <input
        type="text"
        className="greeting-input"
        placeholder="Введите ваше имя"
      />
      <p className="greeting-message">
        Привет, гость!
      </p>
    </div>
  );
}

export default Greeting;
