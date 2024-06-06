import React from 'react';
import { useTheme } from './contexts/ThemeContext';
import RecipeList from '../Recipe/RecipeList';
import RecipeDetail from '../Recipe/RecipeDetail';

const Main = ({ children }) => (
  <main className="container mx-auto mt-4 mb-16">
    {children}
  </main>
);

export default Main;
