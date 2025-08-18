import React, { createContext, useState, useContext } from "react";

// Step 1: Create a context
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    // Step 2: Wrap children with Provider
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <h1>useContext Example</h1>
      <ThemedButton />
    </ThemeContext.Provider>
  );
}


function ThemedButton() {
  // Step 3: Use useContext to access value
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        padding: "10px",
        border: "1px solid gray"
      }}
    >
      Current Theme: {theme}
    </button>
  );
}
