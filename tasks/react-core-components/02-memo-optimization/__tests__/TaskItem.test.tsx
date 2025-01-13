import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskItem } from '../src/components/TaskItem';

describe('TaskItem', () => {
  const mockTask = {
    id: 1,
    title: 'Test Task',
    completed: false
  };

  it('renders task title', () => {
    render(<TaskItem task={mockTask} onToggle={() => {}} />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  it('shows correct checkbox state', () => {
    render(<TaskItem task={mockTask} onToggle={() => {}} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  it('calls onToggle with correct id when clicked', () => {
    const onToggle = vi.fn();
    render(<TaskItem task={mockTask} onToggle={onToggle} />);
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    expect(onToggle).toHaveBeenCalledWith(1);
  });

  it('applies line-through style when completed', () => {
    const completedTask = { ...mockTask, completed: true };
    render(<TaskItem task={completedTask} onToggle={() => {}} />);
    
    const text = screen.getByText('Test Task');
    expect(text).toHaveStyle({ textDecoration: 'line-through' });
  });
});
