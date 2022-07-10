import { Link } from "react-router-dom";

//styles
import "./Navbar.css";

//components
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Recipe App</h1>
        </Link>
        <SearchBar />
        <Link className="navbar__create-recipe" to="/create">
          Create Recipe
        </Link>
      </nav>
    </div>
  );
}
