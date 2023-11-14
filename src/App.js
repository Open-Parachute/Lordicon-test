import logo from './logo.svg';
import './App.css';
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <lord-icon
        src="https://cdn.lordicon.com/xzalkbkz.json"
        trigger="hover"
        stroke="light"
        colors="primary: #FF969A, secondary: #FFB073"
        style={{width:'250px', height:'250px'}}>
    </lord-icon>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
