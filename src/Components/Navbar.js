import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { useTheme } from "../hooks/useTheme";
//styles
import "./Navbar.css";

//components
import SearchBar from "./SearchBar";

export default function Navbar() {
 const {color} = useTheme()

  return (
    <div className="navbar" style={{background: color}}>
      <nav >
        <Link to="/" className="brand" >
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
