import React, { useState } from "react";
import "../Home/home.css";
import logoHorizonatl from "../../assets/logoH.png";
import imgtradiciones from "../../assets/vestido-tradicional.png";
import imgMuestrasArtisticas from "../../assets/cepillo.png";
import imgGastronomia from "../../assets/guacamole.png";

import urlImgHome from "../../url.home.json";

const Home = () => {
  const randonImgUrl = Math.floor(Math.random() * urlImgHome.length);

  const imageRandom = `${urlImgHome[randonImgUrl]?.url}`;
  const imagendefault = `${urlImgHome[1]?.url}`;

  return (
    <div className="home">
      <h1 className="h1-title">Proyecto Etnoeducativo</h1>
      <div className="title">
        <img className="img-logo" src={logoHorizonatl} alt="" />

        <p className="paragraft">
          Cada 21 de mayo se conmemora en Colombia el Día de la
          Afrocolombianidad, como un tributo a la población afrodescendiente. La
          historia comenzó muchos años atrás con la abolición de la esclavitud
          en el país, justamente el 21 de mayo de 1851, una fecha que marcaría
          la historia de las personas negras en Colombia.
        </p>
      </div>
      <div className="container-img-home">
        <img
          className="imgHome"
          src={imageRandom || imagendefault}
          alt="imagen de carga"
        />
      </div>

      <div className="activities">
        <h1 className="h1-title-even">Eventos recientes</h1>
        <div className="containerTradiciones">
          <h1 className="h1-title-even-g">Tradiciones ancestrales</h1>
          <div className="container-texto-tradiciones">
            <img
              className="img-eventos-recientes"
              src={imgtradiciones}
              alt=""
            />
            <p>
              Es la representación de nuestra etnia negra colombiana, es
              cultura, sabor, color, tradición; es la representación de una raza
              que desciende directamente de los negros Africanos.
            </p>
          </div>
        </div>
        <div className="containerTradiciones">
          <h1 className="h1-title-even-g">Muestras artísticas</h1>
          <div className="container-texto-tradiciones">
            <img
              className="img-eventos-recientes"
              src={imgMuestrasArtisticas}
              alt=""
            />
            <p>
              Representaciones visuales de las practicas culturales de la
              cultura Afrocolombiana. Muestras de talentos artísticos como
              mecanismos para rescatar nuestra identidad
            </p>
          </div>
        </div>
        <div className="containerTradiciones">
          <h1 className="h1-title-even-g">Gastronomía</h1>
          <div className="container-texto-tradiciones">
            <img
              className="img-eventos-recientes"
              src={imgGastronomia}
              alt=""
            />
            <p>
              Muestras gastronómicas en donde se reconoce la riqueza y el
              trabajo culinario de una comunidad que enamora.
            </p>
          </div>
        </div>
      </div>
      <div className="aboot-afrocolombianidad">
        <h1 className="h1-title h1-title-about">Sobre la Afrocolombianidad</h1>
        <div className="container-about-tex">
          <div className="about-text">
            <p>
              La Afrocolombianidad es el término que se usa para designar a
              aquellas personas nacidas en Colombia y que están emparentadas con
              la etnia africana. Esta población es visualizada como un símbolo
              de resistencia que, junto los indígenas, han procurado forjar
              nuevos valores de aceptación y respeto!{" "}
              <strong>―Proyecto Etnoeducativo Nuevo Latir sede IDC</strong>
            </p>
          </div>
          <div className="about-text">
            <p>
              En líneas generales, se puede establecer que la Afrocolombianidad
              es una cultura que se ha unificado con otras etnias y que, a
              través de sus costumbres, ha contribuido con el desarrollo
              nacional.{" "}
              <strong>―Proyecto Etnoeducativo Nuevo Latir sede IDC</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
