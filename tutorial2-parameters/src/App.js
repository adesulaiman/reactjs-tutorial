import logo from './logo.svg';
import './App.css';
import Model from './classes';
import {name, age} from './variables/person';
import message from './variables/messege';

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}


function myVehicle({type, color, brand, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
  return message;
}


function App() {

  const mycar = new Model("Ford", "Mustang"); // call class

  var n = "hello";  //global variable
  let x = 5.6;  // block variable
  const y = 5.6;  // constant variable
  
  const myArray = ['apple', 'banana', 'orange'];  // array
  const myList = myArray.map((item) => <p>{item}</p>) // insert jsx to constant variable
  
  // destruct cons
  const vehicles = ['mustang', 'f-150', 'expedition'];
  const [car, truck, suv] = vehicles;


  // desctruct cons function
  const [add, subtract, multiply, divide] = calculate(4, 7);

  // const array
  const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }

  var myVehic = myVehicle(vehicleOne);


  const numbers = [1, 2, 3, 4, 5, 6];

  const [one, two, ...rest] = numbers;


  return (
    <div>
      Testing {mycar.hello("Ade")}
      <br/>
      {y + n}
      <br/>
      {myList}
      <br/>
      {car}
      <br/>
      Calculate 4 + 7 = {add}
      <br/>
      {myVehic}
      <br/>
      {rest}
      <br/>
      {name}
      <br/>
      {message()}
    </div>
  );
}

export default App;
