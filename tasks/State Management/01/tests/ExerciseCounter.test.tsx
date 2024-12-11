import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ExerciseCounter } from '../src/ExerciseCounter';

describe('ExerciseCounter', () => {
  const exerciseName = 'Push-ups';

  it('renders exercise name', () => {
    render(<ExerciseCounter exerciseName={exerciseName} />);
    expect(screen.getByText(exerciseName)).toBeInTheDocument();
  });

  it('starts with count at 0', () => {
    render(<ExerciseCounter exerciseName={exerciseName} />);
    expect(screen.getByText(/0/)).toBeInTheDocument();
  });

  it('increments count when increment button is clicked', () => {
    render(<ExerciseCounter exerciseName={exerciseName} />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    
    fireEvent.click(incrementButton);
    expect(screen.getByText(/1/)).toBeInTheDocument();
    
    fireEvent.click(incrementButton);
    expect(screen.getByText(/2/)).toBeInTheDocument();
  });

  it('decrements count when decrement button is clicked', () => {
    render(<ExerciseCounter exerciseName={exerciseName} />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText(/2/)).toBeInTheDocument();
    
    fireEvent.click(decrementButton);
    expect(screen.getByText(/1/)).toBeInTheDocument();
  });

  it('does not allow negative numbers', () => {
    render(<ExerciseCounter exerciseName={exerciseName} />);
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    
    fireEvent.click(decrementButton);
    expect(screen.getByText(/0/)).toBeInTheDocument();
  });

  it('resets count to 0 when reset button is clicked', () => {
    render(<ExerciseCounter exerciseName={exerciseName} />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const resetButton = screen.getByRole('button', { name: /reset/i });
    
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText(/2/)).toBeInTheDocument();
    
    fireEvent.click(resetButton);
    expect(screen.getByText(/0/)).toBeInTheDocument();
  });
});
