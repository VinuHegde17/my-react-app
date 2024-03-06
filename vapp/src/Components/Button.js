import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function Button() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black' }}>
      {theme === 'dark' ? 'Dark Theme' : 'Light Theme'}
    </button>
  );
}

export default Button;
