import "./Login.css";
import { useState } from "react";

function Login() {
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  function iniciarSesion() {
    if (getEmail == "correo@correo.com" && getPassword == "admin123") {
      alert("Bienvenido al sistema " + getEmail);
    } else {
      alert("Error de credenciales");
    }
  }
  return (
    <div class="container">
      <div class="heading">SignIn to your account</div>
      <form class="form" action="">
        <div class="input-field">
          <input
            required=""
            autocomplete="off"
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="email">Email</label>
        </div>
        <div class="input-field">
          <input
            required=""
            autocomplete="off"
            type="password"
            name="text"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="username">Password</label>
        </div>

        <div class="btn-container">
          <button onClick={iniciarSesion} class="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
