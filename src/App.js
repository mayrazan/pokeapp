import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button/button";


function App() {
  function capturar() {
       
     console.log("Capturado!")

  }
  return (
    <div className="App">
      <Button onClick={capturar}></Button>
    </div>
  );
}

export default App;
