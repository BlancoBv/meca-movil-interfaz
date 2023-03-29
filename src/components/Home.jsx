import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="d-flex flex-column mt-3 align-items-center">
      <h4>Inicia sesion</h4>
      <form>
        <div className="d-flex flex-column">
          <label>Correo electronico</label>
          <input type="email" />
        </div>
        <div className="d-flex flex-column">
          <label>Contraseña</label>
          <input type="password" />
        </div>
        <button>Iniciar sesion</button>
      </form>
      <p>
        ¿ Eres administrador?, inicia sesion <Link>aqui.</Link>
      </p>
      <p>
        O crea una cuenta <Link to="new-account">aqui.</Link>
      </p>
    </div>
  );
}

export default Home;
