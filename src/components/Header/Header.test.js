import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/Header';

test('renders Header and toggles theme', () => {
    render(
        <ThemeProvider>
            <Router>
                <Header />
            </Router>
        </ThemeProvider>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Dark Mode');

    fireEvent.click(button);
    expect(button).toHaveTextContent('Light Mode');
});
