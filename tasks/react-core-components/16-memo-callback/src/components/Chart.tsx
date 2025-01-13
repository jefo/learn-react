import { useState } from 'react';
import { ChartData, ChartOptions } from '../types/chart';
import { processChartData } from '../utils/chartCalculations';
import { ChartControls } from './ChartControls';

interface ChartProps {
  data: ChartData;
}

// Неоптимизированный компонент графика
export function Chart({ data }: ChartProps) {
  const [options, setOptions] = useState<ChartOptions>({
    showGrid: true,
    showLabels: true,
    showLegend: true,
    aggregationType: 'sum',
    timeFrame: 'day'
  });

  // Тяжелые вычисления при каждом рендере
  const { labels, datasets } = processChartData(data.points, options);

  // Вычисление размеров графика и масштаба
  const width = 800;
  const height = 400;
  const padding = 40;
  const chartWidth = width - (padding * 2);
  const chartHeight = height - (padding * 2);

  // Поиск максимального значения для масштабирования
  const maxValue = Math.max(
    ...datasets.flatMap(dataset => dataset.data)
  );

  // Генерация путей для линий графика
  const paths = datasets.map(dataset => {
    const points = dataset.data.map((value, index) => {
      const x = padding + (index * (chartWidth / (labels.length - 1)));
      const y = height - (padding + (value / maxValue * chartHeight));
      return `${x},${y}`;
    });

    return points.join(' L ');
  });

  return (
    <div className="chart">
      <ChartControls
        options={options}
        onOptionsChange={setOptions}
      />
      
      <div className="chart-container">
        <svg
          width={width}
          height={height}
          className="chart-svg"
        >
          {/* Сетка */}
          {options.showGrid && (
            <g className="grid">
              {Array.from({ length: 5 }).map((_, i) => {
                const y = padding + (i * (chartHeight / 4));
                return (
                  <line
                    key={i}
                    x1={padding}
                    y1={y}
                    x2={width - padding}
                    y2={y}
                    stroke="#e5e7eb"
                  />
                );
              })}
            </g>
          )}

          {/* Линии графика */}
          {datasets.map((dataset, i) => (
            <g key={dataset.label} className="dataset">
              <path
                d={`M ${paths[i]}`}
                fill="none"
                stroke={`hsl(${i * 60}, 70%, 50%)`}
                strokeWidth="2"
              />
            </g>
          ))}

          {/* Подписи */}
          {options.showLabels && (
            <g className="labels">
              {labels.map((label, i) => {
                const x = padding + (i * (chartWidth / (labels.length - 1)));
                return (
                  <text
                    key={i}
                    x={x}
                    y={height - 10}
                    textAnchor="middle"
                    className="label"
                  >
                    {label}
                  </text>
                );
              })}
            </g>
          )}
        </svg>

        {/* Легенда */}
        {options.showLegend && (
          <div className="legend">
            {datasets.map((dataset, i) => (
              <div key={dataset.label} className="legend-item">
                <span
                  className="legend-color"
                  style={{
                    backgroundColor: `hsl(${i * 60}, 70%, 50%)`
                  }}
                />
                <span className="legend-label">
                  {dataset.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
