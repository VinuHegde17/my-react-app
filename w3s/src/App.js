import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Form';
import Welcome from './Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/form" element={<Form />} />

      </Routes>
    </Router>
  );
}

export default App;
