import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/recipes/${id}`)
      .then(response => {
        setRecipe(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the recipe!", error);
      });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="w-48 h-48 object-cover my-4" />
      <h2 className="text-xl font-semibold">Ingredients:</h2>
      <ul className="list-disc ml-6">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mt-4">Instructions:</h2>
      <ol className="list-decimal ml-6">
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
