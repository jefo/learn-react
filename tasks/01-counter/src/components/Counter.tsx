import { useState } from 'react';

export function Counter() {
  // TODO: Реализуйте компонент счетчика здесь
  // 1. Используйте хук useState для хранения значения счетчика
  // 2. Создайте функцию для увеличения значения
  // 3. Отобразите значение и кнопку "+1"

  return (
    <div>
      <p>Значение: 0</p>
      <button>+1</button>
    </div>
  );
}

export default Counter;
