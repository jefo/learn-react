import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Greeting from '../src/components/Greeting';

describe('Greeting Component', () => {
  it('renders default greeting for guest', () => {
    render(<Greeting />);
    expect(screen.getByText(/привет, гость!/i)).toBeInTheDocument();
  });

  it('has an input field for name', () => {
    render(<Greeting />);
    expect(screen.getByPlaceholderText(/введите ваше имя/i)).toBeInTheDocument();
  });

  it('updates greeting when name is entered', () => {
    render(<Greeting />);
    const input = screen.getByPlaceholderText(/введите ваше имя/i);
    
    fireEvent.change(input, { target: { value: 'Анна' } });
    expect(screen.getByText(/привет, анна!/i)).toBeInTheDocument();
  });

  it('returns to guest greeting when name is cleared', () => {
    render(<Greeting />);
    const input = screen.getByPlaceholderText(/введите ваше имя/i);
    
    fireEvent.change(input, { target: { value: 'Анна' } });
    fireEvent.change(input, { target: { value: '' } });
    expect(screen.getByText(/привет, гость!/i)).toBeInTheDocument();
  });
});
