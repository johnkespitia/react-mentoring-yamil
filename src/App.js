import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [greet, setGreet] = useState(false)
  const sayHello = () => {
    setGreet(!greet);
  }

  const textGreeting = (name)=>{
    return `Hello Sr ${name}`;
  } 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={sayHello}>Greeting</button>
        {greet && <h1>{textGreeting("Yamil")}</h1>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
