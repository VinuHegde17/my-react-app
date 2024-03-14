import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Form';
import Welcome from './Welcome';
import { ThemeProvider, ThemeToggle, ThemeDisplay } from './ContextApi';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
      <div>
        <ThemeDisplay />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
