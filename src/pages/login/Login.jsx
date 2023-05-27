import React, { useState } from "react";
import "../login/login.css";
import firebaseApp from "../../firebase";
import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

const auth = getAuth(firebaseApp);

const Login = () => {
  const navigate = useNavigate();
  const USER = localStorage.getItem("userSession");

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
    return (
      <div>
        {USER ? (
          <h3 className="letterUser letter">
            {USER.substring(0, 1).toUpperCase()}
          </h3>
        ) : (
          <h3 className="letterUser">
            <i class="bx bxs-user bx-lg"></i>
          </h3>
        )}
      </div>
    );
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <h1 className="title-login">Login</h1>
        {render()}

        <form onSubmit={initHandlert}>
          <label className="label-email">
            <i class="bx bxs-envelope"> Correo electronico:</i>

            <input type="email" id="email" className="input-login" />
          </label>

          <label className="label-email">
            <i class="bx bxs-user-check"> Password:</i>
            <input type="password" id="password" className="input-login" />
          </label>

          <input
            className="btn-login"
            style={{ display: USER ? "none" : "block" }}
            type="submit"
            value="Iniciar Seción"
          />
        </form>
        {ocultarBtnCerrarSesion() && (
          <button className="btn-login" onClick={() => closeSession()}>
            Cerrar sesíon
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
