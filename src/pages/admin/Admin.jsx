import React from "react";
import "../admin/admin.css";
import firebaseApp from "../../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 } from "uuid";
import Select from "react-select";
import Isloading from "../../components/isLoading/Isloading";
import Footer from "../../components/footer/Footer";

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const Admin = () => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
 

  const navigate = useNavigate();

  function SumitHandler(e) {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    registrarUsuario(email, password);
  }

  async function registrarUsuario(email, password) {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then((usuarioFirebase) => {
     
        alert("Usuario registrado exitosamente,");
        return usuarioFirebase;
       
      })
      .catch((error) => {
        if (error) {
          alert("el correo ya esta en uso, o la contraseña no supera los 8 caracteres");
        }
      });
    console.log(infoUsuario.user.uid);
    const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
    setDoc(docuRef, { correo: email });
  }

  const SelectImages = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setFiles((prevState) => [...prevState, newImage]);
    }
  };


  const category = [
    { label: "Arte", value: "arte" },
    { label: "Gastronomia", value: "gastronomia" },
    { label: "Tradiciones", value: "tradiciones" },
  ];
  const [selectcategory, setSelectCategory] = useState(" ");

  const handelSelectOnchange = ({ value }) => {
    setSelectCategory(value);
  };
  // console.log(selectcategory);

  const uploadImages = (isLoading) => {
    try {
      files.map(async (file) => {
        const storageRef = ref(storage, `/${selectcategory}/${v4()}`);
        await uploadBytes(storageRef, file);
        setTimeout(() => {
          setIsLoading(false)
        }, 5000);
        
      });
    } catch (error) {
      alert(
        `Las imaganes no se cargaron a la base de datos ocurrio el siguiente error:${error}`
      );
    }
  };

  console.log(isLoading);

  return (
    <div>
      {
        isLoading ? <Isloading/> :
        <div className="Container-config">
        <h1>Configuración</h1>

        <div className="Usuarios-config">
          <h2>Usuarios</h2>
          <form onSubmit={SumitHandler}>
            <label>
              Correo electronico:
              <input type="email" id="email" />
            </label>

            <label>
              Password:
              <input type="password" id="password" />
            </label>

            <input type="submit" value="Resgistrarse" />
          </form>
        </div>
        <br />
        <br />
        <br />

        <div>
          <h2>Carga de imagenes</h2>
          <form>
            <input
              accept="image/*"
              multiple
              type="file"
              id="file"
              onChange={SelectImages}
            />
            <label>Seleccionar la categoria</label>
            <Select
              options={category}
              placeholder={"Seleccione la categoria"}
              onChange={handelSelectOnchange}
            />

            <button onClick={()=>uploadImages(setIsLoading(true))}>Cargar Imagenes</button>
          </form>
        </div>
      </div>
      }
    </div>
  );
};

export default Admin;
//onChange={handleFile}

/*

import { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore'; 
import { Carousel } from 'react-bootstrap';
import '../galeria/galeria.css'



const Galeria = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const querydb = getFirestore();
        const queryArray = doc(querydb, 'danza', 'aT7vyk2m73bm5Y5DBTIu');
        getDoc(queryArray)
            .then(res => setData([{ id: res.id, ...res.data() }]));

    }, []);

    return (
        <div className='galeria'>
            <Carousel  variant="dark" >
                {
                    data[0]?.images?.map((d, index) => (

                        <Carousel.Item key={index}  >
                            <img
                                className="d-block w-100 imgDanza"
                                src={d}
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

*/
