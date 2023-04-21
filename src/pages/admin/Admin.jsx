import React from 'react';
import "../admin/admin.css"
import firebaseApp from '../../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { getFirestore, doc, setDoc, collection, addDoc } from "firebase/firestore"
import {getStorage, ref,uploadBytes, getDownloadURL } from "firebase/storage"
import { useNavigate } from 'react-router-dom';
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);


const Admin = () => {


    const navigate = useNavigate();

    function SumitHandler(e) {
        e.preventDefault()

        const email = e.target.elements.email.value
        const password = e.target.elements.password.value
        const rol = e.target.elements.rol.value
        registrarUsuario(email, password, rol)
    }


    async function registrarUsuario(email, password, rol) {
        const infoUsuario = await createUserWithEmailAndPassword(
            auth,
            email,
            password).then((usuarioFirebase) => {
                alert('Usuario registrado exitosamente,')


                return usuarioFirebase


            })
            .catch((error) => {
                if (error) {
                    alert("el correo ya esta en uso")


                }

            })
        console.log(infoUsuario.user.uid);
        const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`)
        setDoc(docuRef, { correo: email, rol: rol })

    }

    
   


    return (
        <div className='Container-config'>
            <h1>Configuración</h1>

            <div className='Usuarios-config'>
                <h2>Usuarios</h2>
                <form onSubmit={SumitHandler}>
                    <label>
                        Correo electronico:
                        <input type="email" id='email' />
                    </label>

                    <label>
                        Password:
                        <input type="password" id='password' />
                    </label>
                    <label>
                        Rol:
                        <select id='rol'>
                            <option value="admin">Administrador</option>
                            <option value="user">Usuario</option>

                        </select>
                    </label>
                    <input type="submit"
                        value="Resgistrarse"
                    />
                </form>
            </div>
            <br />
            <br />
            <br />

            <div>
                <h2>Carga de imagenes</h2>
                <form >
                    <label>Seleccionar imagenes</label>
                    <input accept='image/*' multiple type="file" id='file'  />
                    <button>Guardar</button>
                </form>
             
            </div>

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