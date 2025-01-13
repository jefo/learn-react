import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../components/Header';
import { Content } from '../components/Content';
import { Sidebar } from '../components/Sidebar';
import { ThemeProvider } from '../context/ThemeContext';

// Mock console.log to track renders
const originalLog = console.log;
const mockLog = vi.fn();
console.log = mockLog;

// Reset console.log after tests
afterAll(() => {
  console.log = originalLog;
});

describe('Theme Components', () => {
  beforeEach(() => {
    mockLog.mockClear();
  });

  it('Header toggles theme correctly', () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    const button = screen.getByText(/Toggle Theme/i);
    fireEvent.click(button);
    
    expect(mockLog).toHaveBeenCalledWith('Rendering Header');
  });

  it('Content updates with theme changes', () => {
    render(
      <ThemeProvider>
        <Content />
      </ThemeProvider>
    );

    expect(screen.getByText(/Current theme: light/i)).toBeInTheDocument();
    expect(mockLog).toHaveBeenCalledWith('Rendering Content');
  });

  it('Sidebar renders independently', () => {
    render(
      <ThemeProvider>
        <Sidebar />
      </ThemeProvider>
    );

    expect(screen.getByText(/Menu Item 1/i)).toBeInTheDocument();
    expect(mockLog).toHaveBeenCalledWith('Rendering Sidebar');
  });
});
