# Оптимизация с useMemo и useCallback в React

## Теория

`useMemo` и `useCallback` - это хуки в React для оптимизации производительности:

1. `useMemo` - мемоизирует результат вычислений
2. `useCallback` - мемоизирует функции
3. Помогают избежать ненужных ререндеров
4. Оптимизируют передачу пропсов

## Задача

В этом проекте реализован аналитический дашборд с графиками и фильтрами. Однако есть проблемы с производительностью:

1. Тяжелые вычисления выполняются при каждом рендере
2. Функции-обработчики пересоздаются постоянно
3. Компоненты ререндерятся без необходимости
4. Плохая производительность при обновлении данных

### Требования

1. Оптимизируйте вычисления с useMemo:
   - Мемоизируйте тяжелые расчеты
   - Кешируйте результаты фильтрации
   - Оптимизируйте обработку данных

2. Стабилизируйте функции с useCallback:
   - Мемоизируйте обработчики событий
   - Оптимизируйте колбэки в эффектах
   - Стабилизируйте пропсы-функции

3. Предотвратите ненужные ререндеры:
   - Используйте React.memo
   - Оптимизируйте контекст
   - Разделите состояние

### Подсказки

1. Используйте useMemo:
   ```typescript
   const Chart = ({ data, options }) => {
     const processedData = useMemo(() => {
       return data.map(point => ({
         x: new Date(point.timestamp),
         y: calculateValue(point, options)
       }));
     }, [data, options]);
     
     return <LineChart data={processedData} />;
   };
   ```

2. Стабилизируйте функции:
   ```typescript
   const Controls = ({ onFilterChange }) => {
     const handleChange = useCallback((value) => {
       onFilterChange({
         type: 'filter',
         value
       });
     }, [onFilterChange]);
     
     return <FilterButtons onChange={handleChange} />;
   };
   ```

3. Оптимизируйте компоненты:
   ```typescript
   const ChartControls = React.memo(({ options, onChange }) => {
     return (
       <div className="controls">
         <TimeRangeSelector
           value={options.timeRange}
           onChange={onChange}
         />
       </div>
     );
   });
   ```

## Критерии приемки

1. Дашборд должен работать плавно даже с большим объемом данных
2. Не должно быть ненужных ререндеров
3. Функции должны быть стабильными
4. Код должен быть чистым и оптимизированным
