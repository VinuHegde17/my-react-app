import './App.css';
import Form from './Form';
import { ThemeProvider, ThemeToggle, ThemeDisplay } from './ContextApi';
import ParentComponent from './ForwardRef';
import Axio from './Axio';
import { useState } from 'react';

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };
  return (
    <div className="App">
    <Form/>
    <ThemeProvider>
      <div>
        <ThemeDisplay />
        <ThemeToggle />
      </div>
    </ThemeProvider>
    <br />
    <ParentComponent/>
    <button onClick={toggleProducts}>Show Products</button>
      {showProducts && <Axio />}
    
    </div>
  );
}

export default App;
