import { useState } from "react";
import "./App.css";
import MenuPrincipal from "./components/MenuPrincipal";
import Game from "./components/Game";

function App() {
  const [mudarPagina, setMudarPagina] = useState(true);

  const mudandoPagina = () => {
    setMudarPagina(!mudarPagina);
  };

  return (
    <div className="App">
      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {!mudarPagina ? <Game /> : <MenuPrincipal onClick={mudandoPagina} />}
    </div>
  );
}

export default App;
