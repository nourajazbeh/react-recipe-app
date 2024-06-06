import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Main from './Main';

test('renders children components', () => {
    render(
        <ThemeProvider>
            <Main>
                <div data-testid="child">Child Component</div>
            </Main>
        </ThemeProvider>
    );

    const childElement = screen.getByTestId('child');
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent('Child Component');
});

test('applies container styles', () => {
    render(
        <ThemeProvider>
            <Main>
                <div data-testid="child">Child Component</div>
            </Main>
        </ThemeProvider>
    );

    const mainElement = screen.getByRole('main');
    expect(mainElement).toHaveClass('container mx-auto mt-4 mb-16');
});
