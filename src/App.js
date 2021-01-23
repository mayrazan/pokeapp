
import "./App.css";
import { Card } from "./components/Card/Card";
import { ButtonCard } from "./components/Button/ButtonCard";
import { NavBarTeste } from "./components/Navbar/Navbar";

function App() {
  function capturar() {
       
     console.log("Capturado!")
    
  }
  return (
    <div className="App">
      <NavBarTeste></NavBarTeste>
      <Card />
      <ButtonCard onClick={capturar}></ButtonCard>
      
    </div>
  );
}

export default App;
