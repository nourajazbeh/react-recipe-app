import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from './Header';

test('renders Home link', () => {
    render(
        <ThemeProvider>
            <Router>
                <Header />
            </Router>
        </ThemeProvider>
    );
    const linkElement = screen.getByText(/All Recipes/i);
    expect(linkElement).toBeInTheDocument();
});

test('toggles theme', () => {
    render(
        <ThemeProvider>
            <Router>
                <Header />
            </Router>
        </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    // Store the initial theme
    const initialTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';

    // Click the button to toggle the theme
    fireEvent.click(button);

    // Verify the theme was toggled
    const newTheme = initialTheme === 'light' ? 'dark' : 'light';
    expect(document.documentElement.classList.contains(newTheme)).toBe(true);
    expect(document.documentElement.classList.contains(initialTheme)).toBe(false);
});
