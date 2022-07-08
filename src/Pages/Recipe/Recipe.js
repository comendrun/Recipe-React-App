import "./Recipe.css";
import { useHistory, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";

export default function Recipe() {
  const { id } = useParams();
  // console.log(id);
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, isPending, error } = useFetch(url);
  const history = useHistory();
  // console.log(recipe.ingredients);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error, history]);

  return (
    <div className="recipe-container">
      {isPending && (
        <div className="pending-message-recipe-page">Loading...</div>
      )}
      {error && <div className="error-message-recipe-page">{error}</div>}
      {recipe && (
        <div className="recipe-details-container">
          <h2 className="title">{recipe.title}</h2>

          <div className="ingredients-container">
            <div>
              <h3>Ingredients:</h3>
              <ul>
                {recipe.ingredients.map((each) => (
                  <li>{each}</li>
                ))}
              </ul>
            </div>
            <div>
              <p>
                it takes around <strong>{recipe.cookingTime}</strong> to cook
                this dish.
              </p>
            </div>
            {/* ingredients div end ==> */}
          </div>
          <div className="cooking-method">
            <h3>How to cook this dish:</h3>
            <p className="how-to-cook">{recipe.method}</p>

            {/* cooking method div end ==> */}
          </div>

          {/* recipe-details-container end ==> */}
        </div>
      )}
    </div>
  );
}
