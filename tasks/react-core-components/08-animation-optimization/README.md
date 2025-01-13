# Задача 8: Оптимизация анимаций

## Теория, которую нужно изучить:
- CSS анимации и transitions
- React Transition Group
- GPU ускорение в браузере
- Композитные слои
- Производительность анимаций

## Проблема:
В приложении есть сложный анимированный интерфейс с несколькими проблемами производительности:
1. Анимации выполняются через JavaScript, вызывая частые перерисовки
2. Не используется GPU ускорение
3. Анимации вызывают layout thrashing
4. Модальные окна анимируются через DOM манипуляции

## Требования к решению:
1. Перевести анимации на CSS transitions и transforms
2. Использовать GPU ускорение где возможно
3. Внедрить React Transition Group для управления анимациями
4. Обеспечить плавность 60fps

## Ограничения:
- Нельзя менять структуру компонентов
- Анимации должны выглядеть так же
- Необходимо использовать TypeScript

## Как начать работу:
1. Установите зависимости:
```bash
npm install
```

2. Запустите проект:
```bash
npm run dev
```

3. Откройте Chrome DevTools Performance панель для анализа производительности.
4. Найдите и оптимизируйте проблемные места в компонентах.

## Подсказки по реализации:

1. Использование CSS transforms вместо JavaScript анимаций:
```css
.card {
  transition: transform 0.3s ease;
  transform: scale(1);
  will-change: transform;
}

.card:hover {
  transform: scale(1.1);
}
```

2. React Transition Group для управления состояниями:
```tsx
<CSSTransition
  in={isOpen}
  timeout={300}
  classNames="modal"
  unmountOnExit
>
  <div className="modal">
    {children}
  </div>
</CSSTransition>
```

## Проверка результата:
Ваше решение должно:
- Показывать 60fps в Chrome Performance панели
- Не вызывать layout thrashing
- Эффективно использовать GPU
- Плавно анимировать все элементы

## Полезные материалы:
- [CSS Triggers](https://csstriggers.com/)
- [High Performance Animations](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)
- [React Transition Group](https://reactcommunity.org/react-transition-group/)
