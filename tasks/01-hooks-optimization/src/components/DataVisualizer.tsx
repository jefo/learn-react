import React, { memo } from 'react';
import type { DataPoint } from '../types';

interface Props {
  data: DataPoint[];
  view: 'chart' | 'table';
}

// Студент должен оптимизировать этот компонент
export const DataVisualizer = memo(({ data, view }: Props) => {
  // TODO: Реализовать визуализацию данных
  return (
    <div>
      {view === 'table' ? (
        <div>
          {/* TODO: Реализовать табличное представление */}
        </div>
      ) : (
        <div>
          {/* TODO: Реализовать графическое представление */}
        </div>
      )}
    </div>
  );
});
