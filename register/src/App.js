import React, { useState, lazy, Suspense } from 'react';
import Form from './Form';
import { ThemeProvider, ThemeToggle, ThemeDisplay } from './ContextApi';
import ParentComponent from './ForwardRef';
import './App.css'; 
import AxioPost from './AxioPost';

const LazyAxio = lazy(() => import('./Axio'));

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };

  return (
    <div className="App">
      <Form />
      <ThemeProvider>
        <div>
          <ThemeDisplay />
          <ThemeToggle />
        </div>
      </ThemeProvider>
      <br />
      <ParentComponent />
      <button onClick={toggleProducts}>Show Products</button>
      <Suspense fallback={<div>Loading...</div>}>
        {showProducts && <LazyAxio />}
      </Suspense>
      <br />
      <br />
      <AxioPost/>
    </div>
  );
}

export default App;
