import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const themeReducer = () => {};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "blue",
  });

  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  return (
    <ThemeContext.Provider value={{ color: "blue" }}>
      {children}
    </ThemeContext.Provider>
  );
}
