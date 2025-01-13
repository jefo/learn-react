import { DataPoint, ChartOptions } from '../types/chart';

// Тяжелые вычисления для демонстрации проблемы производительности
export function processChartData(
  data: DataPoint[],
  options: ChartOptions
): { labels: string[]; datasets: { label: string; data: number[] }[] } {
  // Искусственная задержка для имитации сложных вычислений
  const startTime = performance.now();
  while (performance.now() - startTime < 50) {
    // Блокируем поток на 50мс
  }

  const timeFrameMilliseconds = {
    hour: 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
    month: 30 * 24 * 60 * 60 * 1000
  }[options.timeFrame];

  // Группировка данных по временным интервалам
  const groupedData = new Map<string, Map<string, number[]>>();
  const categories = new Set<string>();

  data.forEach(point => {
    const timestamp = new Date(point.timestamp).getTime();
    const interval = Math.floor(timestamp / timeFrameMilliseconds) * timeFrameMilliseconds;
    const intervalKey = new Date(interval).toISOString();

    if (!groupedData.has(intervalKey)) {
      groupedData.set(intervalKey, new Map());
    }

    const categoryMap = groupedData.get(intervalKey)!;
    if (!categoryMap.has(point.category)) {
      categoryMap.set(point.category, []);
    }

    categoryMap.get(point.category)!.push(point.value);
    categories.add(point.category);
  });

  // Агрегация данных
  const labels: string[] = Array.from(groupedData.keys()).sort();
  const datasets = Array.from(categories).map(category => {
    const data = labels.map(label => {
      const values = groupedData.get(label)?.get(category) || [];
      if (values.length === 0) return 0;

      switch (options.aggregationType) {
        case 'sum':
          return values.reduce((a, b) => a + b, 0);
        case 'average':
          return values.reduce((a, b) => a + b, 0) / values.length;
        case 'max':
          return Math.max(...values);
        case 'min':
          return Math.min(...values);
        default:
          return 0;
      }
    });

    return {
      label: category,
      data
    };
  });

  return {
    labels: labels.map(l => new Date(l).toLocaleDateString()),
    datasets
  };
}
