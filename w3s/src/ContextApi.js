import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeDisplay() {
  const { theme } = useTheme();

  const displayStyle = {
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
    color: theme === 'light' ? '#333' : '#f0f0f0',
    padding: '10px',
    borderRadius: '5px',
    margin: '10px 0',
  };

  return <p style={displayStyle}>Current theme: {theme}</p>;
}

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  const buttonStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}
