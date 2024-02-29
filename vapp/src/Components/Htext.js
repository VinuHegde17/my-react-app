import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function Htext() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>
        <h1 style={{ textAlign: 'center' }}>Theme Toggler</h1>
        <ThemeToggler />
        <ThemedComponent />
      </div>
    </ThemeContext.Provider>
  );
}
export default Htext;

function ThemeToggler() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#333' : '#f0f0f0',
        cursor: 'pointer',
        display: 'block',
        margin: '0 auto',
        marginTop: '10px',
      }}
    >
      Toggle Theme ({theme})
    </button>
  );
}

function ThemedComponent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#333' : '#f0f0f0',
        padding: '20px',
        marginTop: '10px',
        textAlign: 'center',
      }}
    >
      This is a themed component. Theme: {theme}
    </div>
  );
}

