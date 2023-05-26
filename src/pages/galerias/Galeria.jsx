import React, { useEffect } from "react";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import firebaseApp from "../../firebase";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import '../galerias/Galeria.css'

const Galeria = () => {

  const storage = getStorage(firebaseApp);
  const gsReference = ref(storage, "gs://etno-latir.appspot.com/arte/");
  const arrayimg = [];
  // const [files, setFiles] = useState();

  //   const load = false;

  //   arrayimg.push(
  //     "https://firebasestorage.googleapis.com/v0/b/etno-latir.appspot.com/o/arte%2F75e3188a-e67b-40a2-a117-f026a2075f9b?alt=media&token=70f808a5-683f-4452-8eeb-35cff7d60878"
  //   );



  listAll(gsReference)
    .then((res) => {
      /*res.prefixes.forEach((folderRef) => {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
        });*/
      res.items.map((itemRef) => {
        getDownloadURL(ref(storage, itemRef._location.path_))
          .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'
            //   "https://img.freepik.com/foto-gratis/sedan-deportivo-azul-estacionado-patio_114579-5078.jpg";
            // setFiles([...test]);
            // setLoad(true);
            //  console.log("imagen google", url);
            //this.setState({ files: [...this.state.files, url] });
            //setPictures((files) => [...files, url]);

            arrayimg.push(url);

            // console.log("ver", arrayimg);

            // setFiles(arrayimg)
            // load = true;
          })
          .catch((error) => {
            // Handle any errors
          });
      });
   
      //   arrayimg.forEach((row) => {
      //     console.log("array", row);
      //     /*item.forEach((row) => {
      //         dataImg.push(row);
      //       });*/
      //   });
    })

    .catch((error) => {
      // Uh-oh, an error occurred!
    });
    console.log("ver", arrayimg);
    return (
      <div className='galeria'>
            <Carousel  variant="dark" >
                {
                    arrayimg?.map((img, index) => (

                        <Carousel.Item key={index}  >
                            <img
                                className="img-galeria"
                                src={img}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    );
};

export default Galeria;


