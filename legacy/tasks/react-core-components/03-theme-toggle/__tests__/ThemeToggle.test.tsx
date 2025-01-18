import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeToggle } from '../src/components/ThemeToggle'
import { ThemeProvider } from '../src/context/ThemeContext'

describe('ThemeToggle', () => {
  it('should display current theme', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )
    
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent(/light/i)
  })

  it('should toggle theme on click', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )
    
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(button).toHaveTextContent(/dark/i)
    
    fireEvent.click(button)
    expect(button).toHaveTextContent(/light/i)
  })
})
