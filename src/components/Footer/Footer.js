import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export default function Footer() {
    const { theme } = useTheme();
    return (
        <footer className={`p-4 text-center ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-blue-500 text-white'}`}>
            &copy; 2024  React-Recipes-app
        </footer>
    );
}

