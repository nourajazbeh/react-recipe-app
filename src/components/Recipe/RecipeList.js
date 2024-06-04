import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'tailwindcss/tailwind.css';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/recipes')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the recipes!", error);
      });
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {recipes.map(recipe => (
        <div key={recipe.id} className="border p-4 rounded-lg">
          <Link to={`/recipe/${recipe.id}`}>
            <h2 className="text-xl font-bold">{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} className="w-48 h-48 object-cover my-4" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

