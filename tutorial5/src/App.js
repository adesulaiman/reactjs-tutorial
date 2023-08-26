import logo from './logo.svg';
import './App.css';
import Football from './funtions/Footbal';
import Goal from './funtions/Madecondition';
import Garage from './funtions/Cars';
import GarageList from './funtions/Lists';
import MyForm from './funtions/Forms';
import Multiforms from './funtions/Multiforms';
import Textarea from './funtions/Textarea';
import Selected from './funtions/Selected';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blog';
import Contact from './pages/Contact';
import './my-sass.scss'

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const stylecss = {
    color : "white",
    width : "100%",
    textAlign : "center",
    backgroundColor : "blue"
  }

  return (
    <div>
      <Goal isGoal="Tidak Goal" />
      <Garage cars={["Toyota", "Honda", "Suzuki"]} />
      <GarageList />
      <MyForm />
      <Multiforms />
      <Textarea />
      <Selected />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <div style={stylecss} className='samplesass'>
        <p>Testing Style</p>
      </div>

    </div>
  );
}

export default App;
