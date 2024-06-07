
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Header />
          <Main>
            <Routes>
              <Route path="/" element={<RecipeList />} />
              <Route path="/recipes/:id" element={<RecipeDetail />} />
            </Routes>
          </Main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
