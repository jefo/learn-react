import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../src/components/Counter';

describe('Counter Component', () => {
  it('renders initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByText(/значение: 0/i)).toBeInTheDocument();
  });

  it('has a button with text "+1"', () => {
    render(<Counter />);
    expect(screen.getByRole('button', { name: '+1' })).toBeInTheDocument();
  });

  it('increments count when button is clicked', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: '+1' });
    
    fireEvent.click(button);
    expect(screen.getByText(/значение: 1/i)).toBeInTheDocument();
    
    fireEvent.click(button);
    expect(screen.getByText(/значение: 2/i)).toBeInTheDocument();
  });
});
