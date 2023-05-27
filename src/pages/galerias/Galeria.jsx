import React, { useEffect } from "react";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import firebaseApp from "../../firebase";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import "../galerias/Galeria.css";
import Footer from "../../components/footer/Footer";

const Galeria = () => {
  const storage = getStorage(firebaseApp);
  const gsReferenceArte = ref(storage, "gs://etno-latir.appspot.com/arte/");
  const gsReferenceGastronomia = ref(
    storage,
    "gs://etno-latir.appspot.com/gastronomia/"
  );
  const gsReferenceTradiciones = ref(
    storage,
    "gs://etno-latir.appspot.com/tradiciones/"
  );

  const [filesArte, setFilesArte] = useState([]);
  const [filesGastronomia, setFileGastronomia] = useState([]);
  const [filesTradiciones, setFileTradiciones] = useState([]);

  const [load, setLoad] = useState(false);

  listAll(gsReferenceArte).then((res) => {
    res.items.map((itemRef) => {
      getDownloadURL(ref(storage, itemRef._location.path_)).then((url) => {
        setLoad(true);
        setFilesArte((filesArte) => [...filesArte, url]);
      });
    });
  });

  listAll(gsReferenceGastronomia).then((res) => {
    res.items.map((itemRef) => {
      getDownloadURL(ref(storage, itemRef._location.path_)).then((url) => {
        setLoad(true);
        setFileGastronomia((filesGastronomia) => [...filesGastronomia, url]);
      });
    });
  });

  listAll(gsReferenceTradiciones).then((res) => {
    res.items.map((itemRef) => {
      getDownloadURL(ref(storage, itemRef._location.path_)).then((url) => {
        setLoad(true);
        setFileTradiciones((filesTradiciones) => [...filesTradiciones, url]);
      });
    });
  });
  return (
    <div className="container-galeria">
      <h1 className="title-galeria ">Galería de imagenes</h1>
      <div className="galeria ">
        <h1 className="title-categoria arte ">Arte</h1>
        <Carousel variant="dark">
          {load &&
            filesArte?.map((img, index) => (
              <Carousel.Item key={index}>
                <img className="img-galeria" src={img} alt="First slide" />
              </Carousel.Item>
            ))}
        </Carousel>
      </div>

      <div className="galeria gastronomia">
        <h1 className="title-categoria gastronomia ">Gastronomía</h1>
        <Carousel variant="dark">
          {load &&
            filesGastronomia?.map((img, index) => (
              <Carousel.Item key={index}>
                <img className="img-galeria" src={img} alt="First slide" />
              </Carousel.Item>
            ))}
        </Carousel>
      </div>

      <div className="galeria tradiciones">
        <h1 className="title-categoria tradiciones ">Tradiciones</h1>
        <Carousel variant="dark">
          {load &&
            filesTradiciones?.map((img, index) => (
              <Carousel.Item key={index}>
                <img className="img-galeria" src={img} alt="First slide" />
              </Carousel.Item>
            ))}
        </Carousel>
      </div>
      
    </div>
  );
};

export default Galeria;
