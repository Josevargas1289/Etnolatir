import React, { useEffect, Component } from "react";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import firebaseApp from "../../firebase";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import "../galerias/Galeria.css";

const storage = getStorage(firebaseApp);
const gsReference = ref(storage, "gs://etno-latir.appspot.com/arte/");
let pictures = [];

export default class Galeria extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      load: false,
    };
  }

  componentDidMount() {
    this.load();
  }

  load = async () => {
    await listAll(gsReference).then((res) => {
      res.items.map(async (itemRef) => {
        await getDownloadURL(ref(storage, itemRef.location.path)).then(
          (url) => {
            pictures.push(url);
            this.setState({
              load: true,
            });
            this.setState((prevState) => ({
              files: [...prevState.files, url],
            }));
            console.log(this.state.files);
          }
        );
      });
    });
  };

  render() {
    return (
      <div className="galeria">
        <Carousel>
          {this.state.load &&
            this.state.files?.map((image, idx) => (
              <Carousel.Item>
                <img className="d-block w-100" src={image} key={idx} />
              </Carousel.Item>
            ))}
        </Carousel>
      </div>
    );
  }
}
