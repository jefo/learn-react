# Оптимизация с useTransition в React

## Теория

`useTransition` - это хук в React, который позволяет пометить обновление состояния как переход:

1. Позволяет сохранить отзывчивость UI при тяжелых обновлениях
2. Дает возможность показать индикатор загрузки
3. Работает с Concurrent Features в React
4. Помогает приоритизировать обновления

## Задача

В этом проекте реализована система комментариев с поиском и фильтрацией. Однако есть проблемы с производительностью:

1. UI блокируется при переключении фильтров
2. Тяжелые обновления выполняются синхронно
3. Отсутствует индикация загрузки
4. Плохой UX при смене состояний

### Требования

1. Внедрите useTransition для обновлений состояния:
   - Оберните тяжелые обновления
   - Добавьте индикаторы загрузки
   - Сохраните отзывчивость UI

2. Оптимизируйте переходы состояний:
   - Используйте Suspense где возможно
   - Добавьте плавные анимации
   - Реализуйте поэтапную загрузку

3. Улучшите UX:
   - Добавьте скелетон-загрузку
   - Реализуйте плавные переходы
   - Покажите промежуточные состояния

### Подсказки

1. Используйте useTransition:
   ```typescript
   const CommentList = () => {
     const [isPending, startTransition] = useTransition();
     const [filter, setFilter] = useState('all');
     
     const updateFilter = (newFilter) => {
       startTransition(() => {
         setFilter(newFilter);
       });
     };
     
     return (
       <div>
         {isPending && <Spinner />}
         <FilterButtons onChange={updateFilter} />
         <Comments filter={filter} />
       </div>
     );
   };
   ```

2. Комбинируйте с Suspense:
   ```typescript
   const App = () => {
     return (
       <Suspense fallback={<Skeleton />}>
         <CommentList />
       </Suspense>
     );
   };
   ```

3. Добавьте анимации:
   ```typescript
   const Comments = ({ filter }) => {
     const comments = useComments(filter);
     
     return (
       <TransitionGroup>
         {comments.map(comment => (
           <CSSTransition
             key={comment.id}
             timeout={300}
             classNames="comment"
           >
             <Comment data={comment} />
           </CSSTransition>
         ))}
       </TransitionGroup>
     );
   };
   ```

## Критерии приемки

1. UI должен оставаться отзывчивым при любых обновлениях
2. Должна быть четкая индикация загрузки
3. Переходы должны быть плавными
4. Код должен быть чистым и понятным
