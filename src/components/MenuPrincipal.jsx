import React from "react";
import "./MenuPrincipal.css";

const MenuPrincipal = ({ onClick }) => {
  return (
    <div className="container">
      <div className="titulo">
        <img id="img-cerebro" src="/1.svg" alt="cerebro1" />
        <h1>Jogo da Memória</h1>

        <h3>
          <span>modo</span> Real Madrid
        </h3>
        <p>by luis</p>
        <figure>
          <a
            href="https://www.youtube.com/watch?v=6GunwSUdQVc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="img-vini"
              src="/menuPrincipal/vini.svg"
              alt="Vini Junior"
            />
          </a>
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
