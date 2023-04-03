import React from "react";
import HeaderComponents from "./HeaderComponents";

function RegistroVehiculo() {
  const enviar = (e) => {
    e.preventDefault();
  };
  return (
    <div className="d-flex flex-column p-3">
      <HeaderComponents ruta="../" title="Registro de vehiculos" />

      <div className="d-flex flex-column align-items-center">
        <form onSubmit={enviar}>
          <div className="d-flex flex-column">
            <label>Marca del vehiculo</label>
            <input type="text" />
          </div>
          <div className="d-flex flex-column">
            <label>Modelo</label>
            <input type="text" />
          </div>
          <div className="d-flex flex-column">
            <label>Año</label>
            <input type="text" />
          </div>
          <div className="d-flex flex-column">
            <label>Número de placa</label>
            <input type="text" />
          </div>
          <div className="d-flex flex-column">
            <label>Número de serie</label>
            <input type="text" />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default RegistroVehiculo;
