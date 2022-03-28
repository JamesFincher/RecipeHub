import React, { useEffect } from 'react';
import axios from 'axios';

function Popular() {
  useEffect(() => {
    getPopular();
  }, []);

  const API_KEY = process.env.REACT_APP_API_KEY;
  function getPopular() {
    axios
      .get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
      )
      .then((res) => {
        console.log(res.data);
      });
  }
  return <div>Popular</div>;
}

export default Popular;
