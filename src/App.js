
import "./App.css";
import { Card } from "./components/Card/Card";
import { Button } from "./components/Button/button";

function App() {
  function capturar() {
       
     console.log("Capturado!")

  }
  return (
    <div className="App">
      <Card />
      <Button onClick={capturar}></Button>
    </div>
  );
}

export default App;
