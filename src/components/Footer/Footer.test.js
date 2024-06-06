import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { ThemeProvider } from '../../contexts/ThemeContext';

// Mocking the useTheme hook
jest.mock('../../contexts/ThemeContext', () => ({
  useTheme: jest.fn(() => ({ theme: 'light' })),
}));

test('renders footer with light theme', () => {
  render(
    <ThemeProvider>
      <Footer />
    </ThemeProvider>
  );
  const footerElement = screen.getByText(/React-Recipes-app/i);
  expect(footerElement).toBeInTheDocument();
  expect(footerElement).toHaveClass('bg-blue-500');
});
