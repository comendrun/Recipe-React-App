//styeles
import "./RecipeList.css";

import React from "react";
import { Link } from "react-router-dom";

export default function RecipeList(props) {

  if (props.recipes.length === 0){
    return <div className="error">Unfortunately, no recipes to show.</div>
  }

  return (
    <div className="recipe-list">
      {props.recipes.map((recipe) => {
        return (
          <div key={recipe.id} className="card">
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make.</p>
            <div className="card-details">
              {recipe.method.substring(0, 100)}
            </div>
            <Link className="read-more" to={`/recipes/${recipe.id}`}>
              Cook This
            </Link>
          </div>
        );
      })}
    </div>
  );
}
