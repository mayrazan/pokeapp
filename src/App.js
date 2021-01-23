
import "./App.css";
import { Card } from "./components/Card/Card";
import { Button } from "./components/Button/button";
import { NavBarTeste } from "./components/Navbar/Navbar";

function App() {
  function capturar() {
       
     console.log("Capturado!")
    
  }
  return (
    <div className="App">
      <NavBarTeste></NavBarTeste>
      <Card />
      <Button onClick={capturar}></Button>
      
    </div>
  );
}

export default App;
