import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Recipe App</h1>
        </Link>
        <Link className="navbar__create-recipe" to="/create">Create Recipe</Link>
        
      </nav>
    </div>
  );
}
