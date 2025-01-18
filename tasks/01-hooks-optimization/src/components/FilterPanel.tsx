import React, { memo, useCallback } from 'react';
import type { AnalyticsState } from '../types';

interface Props {
  filters: AnalyticsState['filters'];
  onFilterChange: (filters: Partial<AnalyticsState['filters']>) => void;
}

// Студент должен оптимизировать этот компонент
export const FilterPanel = memo(({ filters, onFilterChange }: Props) => {
  const handleCategoryChange = useCallback((category: string | null) => {
    // TODO: Реализовать изменение категории
  }, [onFilterChange]);

  const handleDateRangeChange = useCallback((dateRange: [Date | null, Date | null]) => {
    // TODO: Реализовать изменение диапазона дат
  }, [onFilterChange]);

  return (
    <div>
      {/* TODO: Реализовать панель фильтров */}
    </div>
  );
});
