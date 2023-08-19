import logo from './logo.svg';
import './App.css';

function App() {

  const myelement = (
    <table >
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );

  const myElement2jsx = <h1>React is {5 + 5} times better with JSX</h1>;

  return (
    <div>
      {myelement}
      <br/>
      {myElement2jsx}
    </div>
  );
}

export default App;
