import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserProfileForm, UserProfile } from '../src/components/UserProfileForm';

describe('UserProfileForm', () => {
  const mockInitialData: UserProfile = {
    displayName: 'John Doe',
    email: 'john@example.com',
    phone: '+1234567890',
    emailNotifications: true,
    smsNotifications: false,
  };

  const mockSubmit = vi.fn().mockImplementation(() => Promise.resolve());

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders with initial data', () => {
    render(<UserProfileForm onSubmit={mockSubmit} initialData={mockInitialData} />);
    
    expect(screen.getByDisplayValue(mockInitialData.displayName)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockInitialData.email)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockInitialData.phone)).toBeInTheDocument();
  });

  it('updates fields on user input', async () => {
    render(<UserProfileForm onSubmit={mockSubmit} initialData={mockInitialData} />);
    
    const nameInput = screen.getByLabelText(/display name/i);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, 'Jane Doe');
    
    expect(nameInput).toHaveValue('Jane Doe');
  });

  it('shows validation errors for invalid input', async () => {
    render(<UserProfileForm onSubmit={mockSubmit} initialData={mockInitialData} />);
    
    const emailInput = screen.getByLabelText(/email/i);
    await userEvent.clear(emailInput);
    await userEvent.type(emailInput, 'invalid-email');
    
    expect(screen.getByText(/invalid email format/i)).toBeInTheDocument();
  });

  it('disables submit button when form is unchanged', () => {
    render(<UserProfileForm onSubmit={mockSubmit} initialData={mockInitialData} />);
    
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeDisabled();
  });

  it('enables submit button when form is changed and valid', async () => {
    render(<UserProfileForm onSubmit={mockSubmit} initialData={mockInitialData} />);
    
    const nameInput = screen.getByLabelText(/display name/i);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, 'Jane Doe');
    
    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeEnabled();
  });

  it('shows preview of changes', async () => {
    render(<UserProfileForm onSubmit={mockSubmit} initialData={mockInitialData} />);
    
    const nameInput = screen.getByLabelText(/display name/i);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, 'Jane Doe');
    
    const preview = screen.getByRole('region', { name: /preview/i });
    expect(preview).toHaveTextContent('Jane Doe');
  });

  it('calls onSubmit with updated data', async () => {
    render(<UserProfileForm onSubmit={mockSubmit} initialData={mockInitialData} />);
    
    const nameInput = screen.getByLabelText(/display name/i);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, 'Jane Doe');
    
    const submitButton = screen.getByRole('button', { name: /submit/i });
    await userEvent.click(submitButton);
    
    expect(mockSubmit).toHaveBeenCalledWith({
      ...mockInitialData,
      displayName: 'Jane Doe',
    });
  });

  it('resets form to initial values', async () => {
    render(<UserProfileForm onSubmit={mockSubmit} initialData={mockInitialData} />);
    
    const nameInput = screen.getByLabelText(/display name/i);
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, 'Jane Doe');
    
    const resetButton = screen.getByRole('button', { name: /reset/i });
    await userEvent.click(resetButton);
    
    expect(nameInput).toHaveValue(mockInitialData.displayName);
  });
});
