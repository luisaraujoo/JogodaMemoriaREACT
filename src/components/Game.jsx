import React, { createElement, useEffect, useRef, useState } from "react";
import "./Game.css";

const Game = () => {
  //   states de cartas
  const [viradas, setViradas] = useState([]);
  const [paresEncontrados, setParesEncontrados] = useState([]);
  const [cartasRandom, setCartasRandom] = useState([]);
  const btnEmbaralhar = useRef(null);
  // states de pontuação
  const [jogador1, setJogador1] = useState(0);
  const [jogador2, setJogador2] = useState(0);
  const [jogadorAtual, setJogadorAtual] = useState(1);
  const playerVezRef = useRef(null);
  //   states game over
  const [ganhador, setGanhador] = useState("");
  const [perdedor, setPerdedor] = useState("");

  const jogadores = [
    { valor: 1, img: "/jogadores/2.svg" },
    { valor: 2, img: "/jogadores/3.svg" },
    { valor: 3, img: "/jogadores/4.svg" },
    { valor: 4, img: "/jogadores/5.svg" },
    { valor: 5, img: "/jogadores/6.svg" },
    { valor: 6, img: "/jogadores/7.svg" },
    { valor: 7, img: "/jogadores/8.svg" },
    { valor: 8, img: "/jogadores/9.svg" },
    { valor: 9, img: "/jogadores/10.svg" },
    { valor: 10, img: "/jogadores/11.svg" },
    { valor: 11, img: "/jogadores/12.svg" },
    { valor: 12, img: "/jogadores/13.svg" },
  ];

  // função para embaralhar cartas
  const embaralhar = () => {
    const jogadoresDuplicados = [...jogadores, ...jogadores];
    const jogadoresEmbaralhados = jogadoresDuplicados.sort(
      () => Math.random() - 0.5
    );

    let header = document.getElementById("header");
    let beligol = document.getElementById("beligol");
    let containerEmbaralhar = document.getElementById("container-embaralhar");
    let btnsEnd = document.getElementById("divBtns");

    btnsEnd.className = "buttonsEnd";
    containerEmbaralhar.className = "ocultar";
    header.className = "header";
    beligol.className = "ocultar";

    setCartasRandom(jogadoresEmbaralhados);
    ocultar();
  };

  const ocultar = () => {
    if (btnEmbaralhar.current) {
      btnEmbaralhar.current.className = "ocultar";
      playerVezRef.current.className = "playerAtual";
    }
  };

  // função alternar jogador
  const alternarJogador = () => {
    setJogadorAtual((prev) => (prev === 1 ? 2 : 1));
  };

  const virarCarta = (index) => {
    if (
      viradas.length === 2 ||
      viradas.includes(index) ||
      paresEncontrados.includes(index)
    ) {
      return;
    }
    setViradas((prev) => [...prev, index]);
  };

  useEffect(() => {
    if (viradas.length === 2) {
      const [primeiroIndex, segundoIndex] = viradas;

      if (
        cartasRandom[primeiroIndex].valor === cartasRandom[segundoIndex].valor
      ) {
        setParesEncontrados((prev) => [...prev, primeiroIndex, segundoIndex]);

        if (jogadorAtual === 1) {
          setJogador1((prev) => prev + 1);
        } else {
          setJogador2((prev) => prev + 1);
        }
        setTimeout(() => setViradas([]), 1000);
      } else {
        console.log("par nao encontrado");
        setTimeout(() => {
          setViradas([]);
          alternarJogador();
        }, 1000);
      }
    }
  }, [viradas, cartasRandom, jogadorAtual]);

  return (
    <div className="principal">
      {/* header */}
      <div className="ocultar" id="header">
        <p className="texto1">Player 1: {jogador1} pontos</p>
        <p className="texto3">Player 2: {jogador2} pontos</p>
      </div>
      {/* fim header */}
      <div className="container-game">
        <div className="container-embaralhar" id="container-embaralhar">
          <button id="btn-embaralhar" ref={btnEmbaralhar} onClick={embaralhar}>
            Embaralhar cartas
          </button>
          <figure className="beligol" id="beligol">
            <img src="/jogadores/beli4.svg" alt="beligol" id="beligolImg" />
          </figure>
        </div>
        {/* div para as cartas */}
        {cartasRandom.map((jogador, index) => {
          const cartaVirada =
            viradas.includes(index) || paresEncontrados.includes(index);

          return (
            <div
              className={`carta ${cartaVirada ? "virada" : ""}`}
              key={`${jogador.valor}-${index}`}
              onClick={() => virarCarta(index)}
            >
              <div className="inner">
                <div className="frente">
                  <img src={jogador.img} alt="imagem dos jogadores" />
                </div>
                <div className="atras">
                  <img src="/jogadores/logocapareal.svg" alt="" />
                </div>
              </div>
            </div>
          );
        })}
        {/* div para vez de cada jogador */}
        <div className="ocultar" ref={playerVezRef}>
          <h4
            id="outPlayer"
            style={{
              borderBottom:
                jogadorAtual === 1 ? "1px solid #d6a70d" : "1px solid #575db3",
            }}
          >
            vez de jogador{" "}
            <span
              style={{
                color: jogadorAtual === 1 ? "#d6a70d" : "#575db3",
                fontWeight: "bold",
              }}
            >
              - {jogadorAtual} -
            </span>
          </h4>
        </div>
      </div>
      <div className="ocultar" id="divBtns">
        <button id="btn-menuPrincipal">Menu Pricipal</button>
        <button id="btnEmbaralhar">Embaralhar cartas</button>
      </div>
    </div>
  );
};

export default Game;
