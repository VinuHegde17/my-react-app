import './App.css';
import React from 'react';
import ThemeContext from './Components/ThemeContext';
import Button from './Components/Button';
import Monitor from './Components/Monitor';

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <div>
        <h1>My App</h1>
        <Button />
        <Monitor/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
