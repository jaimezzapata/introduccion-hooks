import { Navigate, useNavigate } from "react-router-dom";

function ProtegerRutas({ proteger }) {
  let token = JSON.parse(localStorage.getItem("token"));
  return token ? proteger : <Navigate to={"/"} />;
}

export default ProtegerRutas;
