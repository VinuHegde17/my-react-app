import './App.css';
import Form from './Form';
import { ThemeProvider, ThemeToggle, ThemeDisplay } from './ContextApi';
import ParentComponent from './ForwardRef';

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
    <br />
    <ParentComponent/>
    </div>
  );
}

export default App;
