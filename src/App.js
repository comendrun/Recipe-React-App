import "./App.css";

import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Create from "./Pages/Create/Create";
import Recipe from "./Pages/Recipe/Recipe";
import Search from "./Pages/Search/Search";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/create">
            <Create />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
