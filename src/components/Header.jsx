import "./Header.css";
import { alertaRedireccion } from "../utils/alertas";
import { useNavigate } from "react-router-dom";
function Header() {
  let navigate = useNavigate()
  function cerrarSesion() {
    localStorage.removeItem("token")
    localStorage.removeItem("usuario")
    alertaRedireccion("Cerrando sesion...", "info", navigate, "/");
  }
  return (
    <header className="encabezado">
      <h2 className="encabezado_titulo">App Gestión</h2>
      <nav className="encabezado_menu">
        <a href="">Inicio</a>
        <a href="">Gestión de Notas</a>
        <a href="">Gestión de Asistencia</a>
        <button onClick={cerrarSesion} type="button">
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
}

export default Header;
