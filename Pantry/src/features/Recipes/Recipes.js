import React, { useState, useEffect } from "react";
import "../../styles/components.css";
import './Recipes.css';

const key = '89282685-0b1f-4495-8a64-4088f790e6ee';

export default function Recipes() {
  const [posts, setPosts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  //Display the list of recipes returned by the API
  const recipesDisplay = posts.map((response, i) => (
      <div key={i} className="list-group-item">
        <img src={response.image_url} alt={response.title} />
        <div>
          <h3>{response.title}</h3>
          <p>By: {response.publisher}</p>
          <button onClick={() => handleRecipe(response.id)}>Get Recipe</button>
        </div>
      </div>    
  ));

  //Prevents Page Refresh
  const handleSubmit = (e) => {
    e.preventDefault(); 
  };

  // Runs every time the search bar is modified
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  // API call to fetch recipe details
  const handleRecipe = async (recipeId) => {
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}?key=${key}`
        );
      if (response.ok) {
        const jsonResponse = await response.json();
        setSelectedRecipe(jsonResponse.data.recipe);

      }
    } catch (err) {
      console.log(err);
    }
  };

  // API call to fetch recipes
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchInput}&key=${key}`
        );
        if (response.ok) {
          const jsonResponse = await response.json();
          setPosts(jsonResponse.data.recipes);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [searchInput]);

  return (
    <div className="main recipes">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search Recipes..."
          onChange={handleChange}
          value={searchInput}
        />
      </form>
      {console.log(selectedRecipe)}
      {selectedRecipe ? (
        <div className="recipe-details">
          <div className="non-ingredients">
            <h2>{selectedRecipe.title}</h2>
            <img src={selectedRecipe.image_url} alt={selectedRecipe.title} />
            <h3>Publisher: {selectedRecipe.publisher}</h3>
            <h4>Cooking Time: {selectedRecipe.cooking_time} minutes</h4>
            <h4>Servings: {selectedRecipe.servings}</h4>
          </div>
          
          <div className="Ingredients">
            <h3>Ingredients:</h3>
            <ul>
            {selectedRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.quantity} {ingredient.unit} {ingredient.description}
              </li>
            ))}
            </ul>
          </div>
          <a href={selectedRecipe.source_url} target="_blank">Get The Recipe</a>

          <button onClick={() => setSelectedRecipe(null)}>Back to Recipes</button>
        </div>
      ) : (
        recipesDisplay
      )}
    </div>
  );
}
