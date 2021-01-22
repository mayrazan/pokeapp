import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button/button";
import Loading from "react-loading";


function App() {
  function capturar() {
    console.log("Capturado!")
  }

  return (
    <div className="App">
      <Button onClick={capturar}></Button>
      <Loading></Loading>
    </div>
  );

}

export default App;
