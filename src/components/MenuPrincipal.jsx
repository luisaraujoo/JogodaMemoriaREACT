import React from "react";
import "./MenuPrincipal.css";

const MenuPrincipal = ({ onClick }) => {
  return (
    <div className="container">
      <div className="titulo">
        <img id="img-cerebro" src="/1.svg" alt="imagem cerebro" />

        <h1>Jogo da Memória</h1>

        <h3>
          <span>modo</span> Real Madrid
        </h3>
        <p>by Luis</p>

        <figure>
          <img id="img-vini" src="/menuPrincipal/vini.svg" alt="Vini Junior" />
        </figure>
      </div>
      <div className="button">
        <button id="btn-começar" onClick={onClick}>
          Começar
        </button>
      </div>
    </div>
  );
};

export default MenuPrincipal;
