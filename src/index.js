import "./index.css";
import React, { StrictMode } from "react";
import App from "./App";
import { ThemeProvider } from "./Context/ThemeContext";

import ReactDOM from "react-dom";
ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
