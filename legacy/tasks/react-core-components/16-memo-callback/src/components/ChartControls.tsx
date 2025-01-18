import { ChartOptions } from '../types/chart';

interface ChartControlsProps {
  options: ChartOptions;
  onOptionsChange: (options: ChartOptions) => void;
}

// Неоптимизированный компонент элементов управления
export function ChartControls({ options, onOptionsChange }: ChartControlsProps) {
  const handleChange = (key: keyof ChartOptions, value: any) => {
    onOptionsChange({
      ...options,
      [key]: value
    });
  };

  return (
    <div className="chart-controls">
      <div className="control-group">
        <h3>Display Options</h3>
        <label>
          <input
            type="checkbox"
            checked={options.showGrid}
            onChange={(e) => handleChange('showGrid', e.target.checked)}
          />
          Show Grid
        </label>
        <label>
          <input
            type="checkbox"
            checked={options.showLabels}
            onChange={(e) => handleChange('showLabels', e.target.checked)}
          />
          Show Labels
        </label>
        <label>
          <input
            type="checkbox"
            checked={options.showLegend}
            onChange={(e) => handleChange('showLegend', e.target.checked)}
          />
          Show Legend
        </label>
      </div>

      <div className="control-group">
        <h3>Aggregation</h3>
        <select
          value={options.aggregationType}
          onChange={(e) => handleChange('aggregationType', e.target.value)}
        >
          <option value="sum">Sum</option>
          <option value="average">Average</option>
          <option value="max">Maximum</option>
          <option value="min">Minimum</option>
        </select>
      </div>

      <div className="control-group">
        <h3>Time Frame</h3>
        <select
          value={options.timeFrame}
          onChange={(e) => handleChange('timeFrame', e.target.value)}
        >
          <option value="hour">Hourly</option>
          <option value="day">Daily</option>
          <option value="week">Weekly</option>
          <option value="month">Monthly</option>
        </select>
      </div>
    </div>
  );
}
