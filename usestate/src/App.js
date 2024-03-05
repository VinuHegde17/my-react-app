import Age from './Age';
import './App.css';
import Check from './Check';
import Count from './Count';
import Form from './Form';
import Item from './Item';
import Keys from './Keys';
import Text from './Text';

function App() {
  return (
    <div className="App">
      <Count/>
      <Text/>
      <Check/>
      <Age/>
      <br />
      <Form/>
      <Item/>
      <br />
      <Keys/>
    </div>
  );
}

export default App;
