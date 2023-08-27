import logo from './logo.svg';
import './App.css';
import FavoriteColor from './state/SampleState';
import Car from './state/SampleUseManyState';
import CarJson from './state/SampleStateJson';
import Timer from './effect/SampleEffect';
import Component1 from './context/Samplecontext';
import SampleReff from './ref/SampleRef';
import AppNotCallback from './callback/Callback';
import Home from './RestAPI/Fatch';
import Callback from './callback/Callback';

function App() {
  return (
    <div className="App">
      <FavoriteColor />
      <Car />
      <CarJson />
      <Timer />
      <Component1 />
      <SampleReff />
      <Callback />
      <Home />
    </div>
  );
}

export default App;
