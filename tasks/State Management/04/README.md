# Form State Validation Task

## Бизнес-контекст
В современных веб-приложениях критически важно обеспечить корректность пользовательских данных. В этой задаче вам предстоит реализовать форму настроек уведомлений с продвинутой валидацией полей.

## Задача
Создать компонент формы настроек уведомлений (`NotificationPreferences`), который позволяет пользователям настраивать свои предпочтения по уведомлениям с валидацией в реальном времени.

### Функциональные требования

1. Форма должна содержать следующие поля:
   - Email для уведомлений (обязательное поле)
   - Частота уведомлений (daily/weekly/monthly)
   - Время получения уведомлений (в формате HH:mm)
   - Категории уведомлений (множественный выбор)
   - Максимальное количество уведомлений в день (число от 1 до 10)

2. Валидация полей:
   - Email: корректный формат email
   - Время: формат HH:mm, время с 9:00 до 21:00
   - Категории: минимум одна категория должна быть выбрана
   - Максимальное количество: число от 1 до 10

3. Состояние формы:
   - Отображение ошибок в реальном времени
   - Кнопка сохранения активна только если форма валидна
   - Сохранение данных в состоянии

### Технические требования

1. TypeScript:
   - Строгая типизация всех props и state
   - Интерфейс для формы и ошибок
   - Типизированные функции валидации

2. React:
   - Использование useState для управления формой
   - Кастомные хуки для валидации
   - Контролируемые компоненты

3. Тестирование:
   - Проверка рендеринга формы
   - Тестирование валидации полей
   - Проверка отправки формы
   - Тестирование граничных случаев

## Необходимая теория

### Управление формой
1. [Состояние формы](https://react.dev/reference/react-dom/components/input)
   - Контролируемые компоненты
   - Множественные поля
   - Обработка изменений
   - Отправка формы

### Валидация
1. [Валидация состояния](https://react.dev/learn/managing-state#reacting-to-input-with-state)
   - Правила валидации
   - Проверка зависимых полей
   - Обработка ошибок
   - Блокировка отправки

### Обработка ошибок
1. [Управление ошибками](https://react.dev/learn/managing-state#displaying-error-messages)
   - Структура ошибок
   - Отображение сообщений
   - Очистка ошибок
   - Приоритеты ошибок

### TypeScript
1. [Типизация](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/)
   - Интерфейсы формы
   - Типы ошибок
   - Валидационные функции
   - Обработчики событий

*Дополнительно*
- [Yup](https://github.com/jquense/yup) - схемы валидации
- [Formik](https://formik.org/docs/overview) - управление формами

## Процесс проверки

### Автотесты (70%)
- [ ] Рендеринг всех полей формы
- [ ] Валидация email
- [ ] Валидация времени
- [ ] Валидация категорий
- [ ] Валидация максимального количества
- [ ] Состояние кнопки сохранения
- [ ] Отправка формы

### Ручная проверка (30%)
- [ ] Корректная обработка пользовательского ввода
- [ ] Понятные сообщения об ошибках
- [ ] Производительность валидации
- [ ] Качество TypeScript типов
- [ ] Чистота и организация кода

## Полезные материалы для изучения

### Управление формами в React
1. [React Form API](https://react.dev/reference/react-dom/components/input)
   - Контролируемые компоненты
   - Неконтролируемые компоненты
   - Обработка событий формы
   - Множественные поля ввода
   - Динамические формы

2. [Паттерны форм](https://react.dev/learn/managing-state#reacting-to-input-with-state)
   - Композиция форм
   - Разделение ответственности
   - Переиспользование логики
   - Управление фокусом
   - Условный рендеринг

### Валидация форм
1. [Клиентская валидация](https://react.dev/learn/managing-state#reacting-to-input-with-state)
   - HTML5 валидация
   - Кастомная валидация
   - Валидация в реальном времени
   - Асинхронная валидация
   - Комплексная валидация

2. [Обработка ошибок](https://react.dev/learn/managing-state#displaying-error-messages)
   - Стратегии отображения ошибок
   - Приоритизация ошибок
   - Группировка ошибок
   - Очистка ошибок
   - Интернационализация ошибок

### Кастомные хуки
1. [Создание хуков](https://react.dev/learn/reusing-logic-with-custom-hooks)
   - Правила хуков
   - Композиция хуков
   - Тестирование хуков
   - Оптимизация хуков
   - Типизация хуков

2. [Хуки для форм](https://usehooks.com/)
   - useForm
   - useField
   - useValidation
   - useFormState
   - useFormSubmit

### Типизация форм
1. [TypeScript с формами](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/)
   - Типы событий
   - Дженерики
   - Условные типы
   - Типы валидации
   - Инференция типов

2. [Продвинутая типизация](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)
   - Mapped Types
   - Template Literal Types
   - Type Guards
   - Utility Types
   - Type Inference

### Производительность форм
1. [Оптимизация рендеринга](https://react.dev/learn/render-and-commit)
   - Мемоизация
   - Дебаунсинг
   - Тротлинг
   - Ленивая загрузка
   - Виртуализация

2. [Профилирование](https://react.dev/learn/react-developer-tools)
   - React DevTools
   - Performance Monitoring
   - Memory Leaks
   - Bundle Size
   - Runtime Performance

### Тестирование форм
1. [React Testing Library](https://testing-library.com/docs/react-testing-library/example-intro#complex-forms)
   - Тестирование ввода
   - Тестирование валидации
   - Тестирование отправки
   - Асинхронное тестирование
   - Интеграционное тестирование

2. [Jest с TypeScript](https://jestjs.io/docs/getting-started#using-typescript)
   - Настройка окружения
   - Моки и стабы
   - Снэпшоты
   - Coverage
   - Параллельное тестирование

### Доступность форм
1. [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/forms/)
   - Роли и атрибуты
   - Управление фокусом
   - Клавиатурная навигация
   - Скринридеры
   - Live Regions

2. [Тестирование доступности](https://testing-library.com/docs/dom-testing-library/api-accessibility/)
   - Аудит доступности
   - ARIA Query
   - Keyboard Navigation
   - Focus Management
   - Screen Reader Testing

### Дополнительные библиотеки
1. [Formik](https://formik.org/docs/overview)
   - Управление формами
   - Валидация
   - Обработка ошибок
   - Интеграция с TypeScript
   - Тестирование

2. [React Hook Form](https://react-hook-form.com/)
   - Производительность
   - Валидация
   - Типизация
   - Интеграция с UI библиотеками
   - DevTools

3. [Yup](https://github.com/jquense/yup)
   - Схемы валидации
   - Трансформации
   - Кастомные валидаторы
   - Локализация
   - TypeScript интеграция

### Безопасность
1. [Form Security](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
   - XSS Prevention
   - CSRF Protection
   - Input Sanitization
   - Rate Limiting
   - Data Validation

2. [React Security](https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml)
   - Secure Forms
   - Content Security
   - Authentication
   - Authorization
   - Data Protection

## Полезные материалы
- [React Forms](https://react.dev/learn/managing-state#reacting-to-input-with-state)
- [TypeScript in React](https://react.dev/learn/typescript)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [React Hook Form](https://react-hook-form.com/) (для вдохновения)
