export interface DataPoint {
  id: number;
  timestamp: string;
  value: number;
  category: string;
}

export interface ChartData {
  points: DataPoint[];
  startDate: string;
  endDate: string;
  categories: string[];
}

export interface ChartOptions {
  showGrid: boolean;
  showLabels: boolean;
  showLegend: boolean;
  aggregationType: 'sum' | 'average' | 'max' | 'min';
  timeFrame: 'hour' | 'day' | 'week' | 'month';
}
