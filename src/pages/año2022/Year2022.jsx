import "../año2022/year2022.css";

const Year2022 = () => {
  return (
    <div className="experiencias-2022">
      <div className="title-paragraft">
        <h1 className=".h1-title">Experiencias 2022</h1>
        <p className="paragraft">
          A continuación compartimos una serie de registros realizados por el
          equipo de estudiantes LATIC de las modalidades técnicas, quienes
          durante la semana de la Afrocolombianidad 2022, cubrieron los
          diferentes eventos que la conformaron.
        </p>
      </div>

      <div className="title-paragraft">
        <h1 className=".h1-title">Presentación Modalidad técnica en música</h1>
        <p className="paragraft">
          Nuestros estudiantes nos presentaron un viaje sonoro a través de
          canciones del pacifico colombiano y Latinoamérica como velo que
          bonito, llorando se fue y ojos azules. Diversos lugares y tiempos
          fueron parte de este conjunto de piezas que sirvió como un intercambio
          cultural a partir de la música.
        </p>
      </div>
      <div className="video-music">
        <iframe
          width="340"
          height="315"
          src="https://www.youtube.com/embed/A0GspH4Ynsc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Year2022;
