# Задача 1: Динамический конструктор форм

## Теория, которую нужно изучить:
- React Hook Form и его возможности
- Динамическое создание форм
- Типизация сложных форм в TypeScript
- JSON-схемы для описания форм
- Условная логика в формах

## Проблема:
В современных веб-приложениях часто требуется создавать формы с динамической структурой, где поля и их поведение определяются конфигурацией. Текущая реализация использует простую статическую форму, которая не масштабируется для сложных случаев использования.

## Требования к решению:
1. Реализовать конструктор форм на основе JSON-схемы
2. Поддержать различные типы полей:
   - Текстовые поля
   - Числовые поля
   - Группы полей
   - Чекбоксы
   - Селекты
3. Реализовать сложную валидацию полей
4. Добавить условную логику отображения полей
5. Обеспечить полную типизацию

## Ограничения:
- Необходимо использовать React Hook Form
- Все компоненты должны быть типизированы
- Код должен быть масштабируемым и поддерживать добавление новых типов полей

## Как начать работу:
1. Установите зависимости:
```bash
npm install react-hook-form @hookform/resolvers
```

2. Изучите текущую реализацию простой формы:
```typescript
import { useForm } from 'react-hook-form';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
}

function SimpleForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register('firstName', { required: 'Required' })} />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>
      
      <div>
        <input {...register('lastName', { required: 'Required' })} />
        {errors.lastName && <span>{errors.lastName.message}</span>}
      </div>
      
      <div>
        <input {...register('email', {
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email'
          }
        })} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
```

3. Создайте компоненты для каждого типа поля
4. Реализуйте парсер JSON-схемы
5. Добавьте валидацию и условную логику

## Проверка результата:
Ваше решение должно:
- Корректно создавать формы на основе JSON-схемы
- Правильно обрабатывать все типы полей
- Выполнять валидацию согласно схеме
- Поддерживать условную логику отображения полей
- Иметь полную типизацию

## Полезные материалы:
- [React Hook Form Documentation](https://react-hook-form.com/)
- [TypeScript Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [JSON Schema](https://json-schema.org/learn/getting-started-step-by-step)
