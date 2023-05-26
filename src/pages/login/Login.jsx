import React, { useState } from "react";
import "../login/login.css";
import firebaseApp from "../../firebase";
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

const auth = getAuth(firebaseApp);

const Login = () => {
  const navigate = useNavigate();

  async function initHandlert(e) {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    await signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        navigate("/admin");
        localStorage.setItem("userSession", result.user.email);
        // console.log("inicio secion el", result.user.email);
      })
      .catch((error) => {
        if (error) {
          alert(
            "El usuario no esta registrado o las credenciales son incorrectas"
          );
        }
      });
  }
  const ocultarBtnCerrarSesion = () => {
    const USER = localStorage.getItem("userSession");

    if (USER) {
      return true;
    } else {
      return false;
    }
  };

  const ObtnerUser = () => {
    const USER = localStorage.getItem("userSession");

    if (USER) {
      return true;
    } else {
      return false;
    }
  };

  const closeSession = () => {
    signOut(auth);
    localStorage.setItem("userSession", "");
    navigate("/");
  };
  const getUserLogin = () => {
    const USER = localStorage.getItem("userSession");

    if (USER) {
      return true;
    } else {
      return false;
    }
  };

  const render = () => {
    const USER = localStorage.getItem("userSession");
    return <div>{USER ? <h3>{USER.substring(0,1)}</h3> : <h3>inicia Sesion</h3>}</div>;
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <h1 className="title-login">Login test</h1>
        {render()}

        <form onSubmit={initHandlert}>
          <label>
            Correo electronico:
            <input type="email" id="email" />
          </label>

          <label>
            Password:
            <input type="password" id="password" />
          </label>

          <input type="submit" value="Iniciar Seción" />
        </form>
        {ocultarBtnCerrarSesion() && (
          <button onClick={() => closeSession()}>Cerrar sesíon</button>
        )}
      </div>
    </div>
  );
};

export default Login;
