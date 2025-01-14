# Задача 2: Продвинутая валидация форм

## Теория, которую нужно изучить:
- Кросс-валидация полей в React Hook Form
- Оптимизация валидации
- Условная валидация
- Валидация массивов данных
- Обработка edge cases в формах

## Проблема:
В форме бронирования отеля требуется реализовать сложную валидацию с взаимозависимыми правилами. Текущая реализация использует простую валидацию, которая не учитывает все требования и имеет проблемы с производительностью.

## Требования к решению:
1. Реализовать кросс-валидацию дат заезда и выезда
2. Добавить валидацию массива гостей с учетом типа номера
3. Внедрить условные правила валидации
4. Оптимизировать производительность валидации
5. Обеспечить хороший UX при валидации

## Ограничения:
- Использовать React Hook Form
- Минимизировать количество ререндеров
- Обеспечить типобезопасность
- Учесть все возможные edge cases

## Как начать работу:
1. Изучите текущую реализацию:
```typescript
import { useForm } from 'react-hook-form';

interface Guest {
  name: string;
  age: number;
  document?: string;
}

interface BookingForm {
  checkIn: string;
  checkOut: string;
  guests: Guest[];
  roomType: 'standard' | 'family' | 'suite';
  breakfast: boolean;
  specialRequests?: string;
}

function BookingForm() {
  const { register, handleSubmit, watch, formState: { errors } } = 
    useForm<BookingForm>({
      defaultValues: {
        guests: [{ name: '', age: 0 }]
      }
    });

  // Простая валидация без оптимизации
  const validateDates = (checkIn: string, checkOut: string) => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    return end > start;
  };

  // Нет кэширования результатов
  const validateGuests = (guests: Guest[]) => {
    return guests.every(guest => guest.name && guest.age > 0);
  };

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <div>
        <input
          type="date"
          {...register('checkIn', {
            required: 'Required'
          })}
        />
        {errors.checkIn && <span>{errors.checkIn.message}</span>}
      </div>

      <div>
        <input
          type="date"
          {...register('checkOut', {
            required: 'Required',
            validate: value => {
              const checkIn = watch('checkIn');
              return validateDates(checkIn, value) || 'Invalid dates';
            }
          })}
        />
        {errors.checkOut && <span>{errors.checkOut.message}</span>}
      </div>

      <div>
        <select {...register('roomType', { required: 'Required' })}>
          <option value="standard">Standard</option>
          <option value="family">Family</option>
          <option value="suite">Suite</option>
        </select>
        {errors.roomType && <span>{errors.roomType.message}</span>}
      </div>
    </form>
  );
}
```

2. Улучшите валидацию дат:
   - Добавьте проверку минимального срока бронирования
   - Учитывайте праздничные дни
   - Добавьте проверку максимального срока

3. Реализуйте валидацию гостей:
   - Проверяйте количество гостей для разных типов номеров
   - Добавьте валидацию документов для взрослых
   - Оптимизируйте валидацию массива

4. Внедрите условные правила:
   - Документы требуются только для гостей старше 18
   - Специальные запросы обязательны для люксов
   - Завтрак обязателен для определенных типов номеров

## Проверка результата:
Ваше решение должно:
- Корректно валидировать все поля формы
- Эффективно обрабатывать массивы данных
- Минимизировать количество ререндеров
- Предоставлять понятную обратную связь пользователю
- Корректно обрабатывать edge cases

## Полезные материалы:
- [React Hook Form - Advanced Validation](https://react-hook-form.com/advanced-usage)
- [Form Validation Best Practices](https://www.smashingmagazine.com/2020/03/form-validation-best-practices/)
- [Performance Optimization in React](https://reactjs.org/docs/optimizing-performance.html)
