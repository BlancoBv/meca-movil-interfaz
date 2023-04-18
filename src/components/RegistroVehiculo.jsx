import React from "react";
import HeaderComponents from "./HeaderComponents";
import exampleData from "./exampleData.json";

function RegistroVehiculo() {
  const enviar = (e) => {
    e.preventDefault();
  };
  return (
    <div className="d-flex flex-column p-3">
      <HeaderComponents ruta="../" title="Registro de vehiculos" />

      <div className="d-flex align-items-center">
        <div className="w-25">
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
        <div className="flex-fill text-center">
          <h4>Vehiculos registrados</h4>
          <div className="d-flex flex wrap justify-content-evenly">
            {exampleData[0].vehiculos.map((el) => (
              <div
                className="border p-2"
                style={{ minWidth: "100px", minHeight: "100px" }}
              >
                <b>{el.marca}</b>
                <p>Modelo: {el.modelo}</p>
                <p>No. Serie: {el.numSerie}</p>
                <p>No. Placa: {el.placa}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroVehiculo;
