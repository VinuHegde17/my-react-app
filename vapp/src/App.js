import './App.css';
import Monitor from './Components/Monitor'
import { Provider } from 'react-redux';
import store from './Components/Store';
import BookContainer from './Components/BookContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Monitor/>
      <BookContainer/> 
    </div>
    </Provider>
  );
}

export default App;
