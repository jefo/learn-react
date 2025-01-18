# Задача 3: Мультистраничная форма с сохранением состояния

## Теория, которую нужно изучить:
- Управление состоянием между шагами формы
- Условная навигация в формах
- Сохранение и восстановление состояния
- Анимации переходов в React
- Оптимизация UX в многошаговых формах

## Проблема:
Требуется создать мультистраничную форму регистрации с сохранением состояния между шагами, условной навигацией и возможностью восстановления прогресса. Текущая реализация имеет базовую функциональность, но не учитывает многие важные аспекты UX и надежности.

## Требования к решению:
1. Реализовать сохранение состояния между шагами
2. Добавить условную навигацию между шагами
3. Внедрить восстановление прогресса
4. Реализовать валидацию на каждом шаге
5. Добавить анимации переходов
6. Обработать прерывания и edge cases

## Ограничения:
- Использовать React Hook Form
- Обеспечить персистентность данных
- Минимизировать потерю данных
- Поддерживать отмену изменений

## Как начать работу:
1. Изучите текущую реализацию:
```typescript
import { useForm } from 'react-hook-form';
import { useState } from 'react';

type Step = 'personal' | 'company' | 'plan' | 'payment';

interface FormData {
  // Personal
  firstName: string;
  lastName: string;
  email: string;
  
  // Company (optional)
  isCompany: boolean;
  companyName?: string;
  vatNumber?: string;
  
  // Plan
  planType: 'basic' | 'pro' | 'enterprise';
  billingCycle: 'monthly' | 'yearly';
  addons: string[];
  
  // Payment
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState<Step>('personal');
  const { register, handleSubmit, watch } = useForm<FormData>();

  // Простая навигация без условий
  const nextStep = () => {
    switch (currentStep) {
      case 'personal':
        setCurrentStep('company');
        break;
      case 'company':
        setCurrentStep('plan');
        break;
      case 'plan':
        setCurrentStep('payment');
        break;
    }
  };

  // Нет обработки прерываний
  const prevStep = () => {
    switch (currentStep) {
      case 'company':
        setCurrentStep('personal');
        break;
      case 'plan':
        setCurrentStep('company');
        break;
      case 'payment':
        setCurrentStep('plan');
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      {/* Компоненты шагов */}
    </form>
  );
}
```

2. Улучшите управление состоянием:
   - Добавьте сохранение в localStorage
   - Реализуйте восстановление состояния
   - Добавьте обработку прерываний

3. Внедрите условную навигацию:
   - Пропуск необязательных шагов
   - Блокировка шагов до валидации
   - Возврат к предыдущим шагам

4. Реализуйте анимации:
   - Плавные переходы между шагами
   - Индикация прогресса
   - Анимации валидации

## Проверка результата:
Ваше решение должно:
- Сохранять состояние между сессиями
- Корректно обрабатывать навигацию
- Предоставлять плавный UX
- Восстанавливаться после прерываний
- Корректно обрабатывать все edge cases

## Полезные материалы:
- [React Hook Form - Wizard Form](https://react-hook-form.com/advanced-usage#WizardFormFunnel)
- [Framer Motion](https://www.framer.com/motion/)
- [LocalStorage in React](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [React Router](https://reactrouter.com/)
