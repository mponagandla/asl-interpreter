import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import "bootstrap/dist/js/bootstrap.bundle"
import Main from "./components/Main";
function App() {
  return (
    <div className="App">
        <h1>ASL Interpreter</h1>
      <header className="App-header">
          <Main/>

      </header>
    </div>
  );
}

export default App;
