
import "./App.css";
import { Card } from "./components/Card/Card";
import { Button } from "./components/Button/button";
import Loading from "react-loading";

function App() {
  function capturar() {
    console.log("Capturado!")
  }

  return (
    <div className="App">
      <Card />
      <Button onClick={capturar}></Button>
      <Loading></Loading>
    </div>
  );

}

export default App;
