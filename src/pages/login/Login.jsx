import React, { useState } from 'react';
import "../login/login.css"
import firebaseApp from '../../firebase';
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth"
import { Navigate, useNavigate } from 'react-router-dom';


const auth = getAuth(firebaseApp)

const Login = () => {

    const navigate = useNavigate();


    async function initHandlert(e) {
        e.preventDefault()

        const email = e.target.elements.email.value
        const password = e.target.elements.password.value
        const rol = e.target.elements.rol.value

        await signInWithEmailAndPassword(auth, email, password, rol).then((result) => {

            navigate('/admin');
            localStorage.setItem('userSession', result.user.email)
            console.log("inicio secion el", result.user.email);

        })
            .catch((error) => {
                if (error) {
                    alert("El usuario no esta registrado o las credenciales son incorrectas")

                }

            })



    }
    const ocultarBtnCerrarSesion = () => {
        const USER = localStorage.getItem("userSession");
        
        if (USER) {
            return true
        } else {
            return false
        }
    }

    const ObtnerUser = ()=>{
        const USER = localStorage.getItem("userSession");
        
        if (USER) {
            return true
        } else {
            return false
        }
        

    }

    const closeSession = () => {
        signOut(auth)
        localStorage.setItem('userSession', '')
        navigate('/')

    }
    const getUserLogin =()=>{
        const USER = localStorage.getItem("userSession");
        
        if (USER) {
            return true
        } else {
            return false
        }

    }
  


    return (
        <div className='loginContainer'>
            <h1>Login</h1>
            {getUserLogin() && (
            <h3>Usuario: {localStorage.getItem("userSession")}</h3>
            )}
         
           
            
            <form onSubmit={initHandlert}>
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
                    value="Iniciar Seción"
                />
            </form>
            {ocultarBtnCerrarSesion() && (
            <button onClick={() => closeSession()
            }>Cerrar sesíon</button>
            )}

        </div>
    );
};

export default Login;