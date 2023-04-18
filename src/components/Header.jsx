import { Link, useLocation } from "react-router-dom";
import logo from "../img/logo.png";

function Header() {
  const location = useLocation().pathname;
  console.log(location);
  return (
    <div
      className="d-flex align-items-center p-3 header  "
      style={{ height: "10vh" }}
    >
      {/* Logo */}

      <img src={logo} width="150px" />

      {/* Acciones */}
      {!location.match("admin") && (
        <div className="d-flex flex-fill justify-content-evenly">
          <Link to="home/historial">Historial de servicio</Link>
          <Link to="home/citas">Citas</Link>
          <Link to="home/registrar-vehiculo">Registrar vehiculos</Link>
        </div>
      )}
      {/* Acciones admin*/}
      {location.match("admin") && (
        <div className="d-flex flex-fill justify-content-evenly">
          <Link to="admin/vehiculos">Vehiculos en taller</Link>
          <Link to="admin/citas">Citas</Link>
          <Link to="admin/reportes">Reportes</Link>
          {/* <Link to="home/citas">Citas</Link>
          <Link to="home/registrar-vehiculo">Registrar vehiculos</Link> */}
        </div>
      )}

      {/* Icono usuario */}
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          <i className="fa-solid fa-user" />
        </button>
        <ul className="dropdown-menu">
          <div className="p-2">
            <Link className="btn btn-danger" to="/">
              Cerrar Sesion
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Header;
