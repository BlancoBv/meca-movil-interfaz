import { Link } from "react-router-dom";
import logo from "../img/logo.png";

function Header() {
  return (
    <div
      className="d-flex align-items-center p-3 header  "
      style={{ height: "10vh" }}
    >
      {/* Logo */}

      <img src={logo} width="150px" />

      {/* Acciones */}
      <div className="d-flex flex-fill justify-content-evenly">
        <Link to="home/historial">Historial de servicio</Link>
        <Link to="home/citas">Citas</Link>
        <Link to="home/registrar-vehiculo">Registrar vehiculos</Link>
      </div>
      {/* Icono usuario */}
      <div> Usuario</div>
    </div>
  );
}

export default Header;
