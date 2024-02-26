import './App.css';
import Age from './Components/Age';
import Describe from './Components/Describe';
import MyForm from './Components/MyForm';
import Phone from './Components/Phone';
import Select from './Components/Select';

function App() {
  return (
    <div className="App">
    <h2 style={{textAlign:'center'}}>Bio Info</h2>
     <MyForm/>
     <Phone/>
     <Age/>
     <Select/>
     <Describe/>
    </div>
  );
}
export default App;
