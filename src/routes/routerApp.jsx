import Login from "../pages/Login";
import Servicios from "../pages/Servicios";
import Contacto from "../pages/Contacto";
import Home from "../pages/Home";
import ProtegerRutas from "../components/ProtegerRutas";
export let routerApp = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/servicios",
    element: <Servicios />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
  {
    path: "/home",
    element: <ProtegerRutas proteger={<Home />} />,
  },
  {
    path: "*",
    element: <h1>Este es un Error 404</h1>,
  },
];
