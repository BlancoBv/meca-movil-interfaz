import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  //navegacion provicional
  const navigate = useNavigate();
  const enviar = (e) => {
    e.preventDefault();
    navigate("home");
  };
  return (
    <div className="d-flex flex-column mt-3 align-items-center">
      <h4>Inicia sesion</h4>
      <form onSubmit={enviar}>
        <div className="d-flex flex-column">
          <label>Correo electronico</label>
          <input type="email" />
        </div>
        <div className="d-flex flex-column">
          <label>Contraseña</label>
          <input type="password" />
        </div>
        <button type="submit" className="button mt-2">
          Iniciar sesion
        </button>
      </form>
      <p>
        O crea una cuenta <Link to="new-account">aqui.</Link>
      </p>
      <Link to="admin">Ver como admin</Link>
    </div>
  );
}

export default Login;
