import './App.css';
import Form from './Form';
import { ThemeProvider, ThemeToggle, ThemeDisplay } from './ContextApi';

function App() {
  return (
    <div className="App">
    <Form/>
    <ThemeProvider>
      <div>
        <ThemeDisplay />
        <ThemeToggle />
      </div>
    </ThemeProvider>
    </div>
  );
}

export default App;
