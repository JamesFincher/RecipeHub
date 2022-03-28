import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Popular() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  function getPopular() {
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
      )
      .then((res) => {
        setPopular(res.data.recipes);
      });
  }
  return (
    <div>
      <h1>Popular</h1>
      {popular.map((recipe) => {
        return (
          <div key={recipe.id}>
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} />
          </div>
        );
      })}
    </div>
  );
}

export default Popular;
