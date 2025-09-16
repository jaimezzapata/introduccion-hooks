import "./Login.css";
import { useState, useEffect } from "react";
import { usuarios } from "../utils/dataBase";
import { useNavigate } from "react-router-dom";
import { alertaRedireccion } from "../utils/alertas";
import { generarToken } from "../utils/funciones";

function Login() {
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/home", {replace: true});
    }
  }, []);

  function buscarUsuario() {
    let auth = usuarios.find(
      (usuario) =>
        getEmail == usuario.correo && getPassword == usuario.contrasena
    );
    return auth;
  }

  function iniciarSesion() {
    console.log(buscarUsuario());
    if (buscarUsuario()) {
      let tokenAcceso = generarToken();
      localStorage.setItem("token", JSON.stringify(tokenAcceso));
      localStorage.setItem("usuario", JSON.stringify(buscarUsuario()));
      alertaRedireccion(
        "Bienvenido " + buscarUsuario().nombre,
        "success",
        navigate,
        "/home"
      );
    } else {
      alert("Error de credenciales");
    }
  }

  return (
    <div className="container">
      <div className="heading">SignIn to your account</div>
      <form className="form" action="">
        <div className="input-field">
          <input
            required=""
            autoComplete="off"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field">
          <input
            required=""
            autoComplete="off"
            type="password"
            name="text"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="username">Password</label>
        </div>

        <div className="btn-container">
          <button type="button" onClick={iniciarSesion} className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
