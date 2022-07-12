import "./index.css";
import React from "react";
import App from "./App";
import { ThemeProvider } from "./Context/ThemeContext";

import ReactDOM from "react-dom";
ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
