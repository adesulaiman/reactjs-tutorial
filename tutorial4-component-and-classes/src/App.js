import logo from './logo.svg';
import './App.css';
import Garage from './components/Car';
import {Toys, ToysProp} from './components/Toys';


function App() {

  
  return (
    <div>
      <Garage/>
      <Toys/>
      <ToysProp typetoys="hudi"/>
    </div>
  );
}

export default App;
