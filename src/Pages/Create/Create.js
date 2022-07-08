import "./Create.css";
import { useState, useRef } from "react";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredients] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const ingredientsInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime, ingredients);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    // we don't want repeated ingredients
    // and also its not empty value
    if (ingredients.includes(ing)) {
      setIsDuplicate(true);
      setTimeout(() => {
        setIsDuplicate(false);
      }, 5000);
      return ingredientsInput.current.focus();
    }

    if (ing && !ingredients.includes(ing)) {
      setIsDuplicate(false);
      setIngredients((preValues) => [...preValues, ing]);
    }
    setNewIngredients("");
    ingredientsInput.current.focus();
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a ned recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label className={`ingredients-label  ${isDuplicate && "duplicate"}`}>
          <span>Recipe Ingredients</span>
          <div className="ingredients">
            <input
              ref={ingredientsInput}
              type="text"
              onChange={(e) => setNewIngredients(e.target.value)}
              value={newIngredient}
            />
            <button onClick={handleAdd} className="btn">
              add
            </button>
          </div>
        </label>
        <p>
          current ingredients:{" "}
          {ingredients.map((ing) => (
            <em key={ing}>{ing}, </em>
          ))}
        </p>
        <label>
          <span>Recipe Method</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking Time (mins)</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className="btn submit-btn">Submit</button>
      </form>
    </div>
  );
}
