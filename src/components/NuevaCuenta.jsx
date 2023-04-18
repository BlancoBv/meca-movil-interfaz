import { useState } from "react";
import { Link } from "react-router-dom";

function NuevaCuenta() {
  const [tipoCuenta, setTipoCuenta] = useState("usuario");
  const cambiarCuenta = () => {
    if (tipoCuenta === "usuario") {
      setTipoCuenta("administrador");
    } else {
      setTipoCuenta("usuario");
    }
  };

  return (
    <div className="d-flex flex-column mt-3 align-items-center">
      <h4>Crear nueva cuenta de {tipoCuenta}</h4>
      <form>
        <div className="d-flex flex-column">
          <label>Nombre</label>
          <input type="text" />
        </div>
        <div className="d-flex flex-column">
          <label>Correo electronico</label>
          <input type="email" />
        </div>
        <div className="d-flex flex-column">
          <label>Contraseña</label>
          <input type="password" />
        </div>
        <div className="d-flex flex-column">
          <label>Confirmar contraseña</label>
          <input type="password" />
        </div>
        <div className="d-flex flex-column">
          <label>Fecha de nacimiento</label>
          <input type="date" />
        </div>
        <button className="button mt-2">Crear cuenta</button>
      </form>
      <p>
        ¿Ya tienes cuenta?, inicia sesion <Link to="/">aqui.</Link>
      </p>
      <span role="button" onClick={cambiarCuenta}>
        Registrar como {tipoCuenta === "usuario" ? "administrador" : "usuario"}
      </span>
    </div>
  );
}

export default NuevaCuenta;
