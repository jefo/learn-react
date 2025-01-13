import { ChartData, DataPoint } from '../types/chart';

// Генерация тестовых данных для графика
function generateChartData(days: number): ChartData {
  const categories = ['Revenue', 'Users', 'Orders', 'Sessions'];
  const points: DataPoint[] = [];
  const now = new Date();
  const startDate = new Date(now);
  startDate.setDate(startDate.getDate() - days);

  // Генерация точек данных для каждой категории
  for (let i = 0; i < days; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);

    // 24 точки для каждого дня (почасовые данные)
    for (let hour = 0; hour < 24; hour++) {
      const hourDate = new Date(date);
      hourDate.setHours(hour);

      categories.forEach((category, categoryIndex) => {
        points.push({
          id: points.length + 1,
          timestamp: hourDate.toISOString(),
          value: Math.floor(Math.random() * 1000) + 100 + (categoryIndex * 200),
          category
        });
      });
    }
  }

  return {
    points,
    startDate: startDate.toISOString(),
    endDate: now.toISOString(),
    categories
  };
}

// Экспорт данных за последние 30 дней
export const chartData = generateChartData(30);
