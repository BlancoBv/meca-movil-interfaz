import React from "react";
import exampleData from "../exampleData.json";
import HeaderComponents from "../HeaderComponents";

function CitasAdmin() {
  return (
    <div className="d-flex flex-column p-3">
      <HeaderComponents title="Citas pendientes" />
      <div className="mt-3 container">
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>ID cita</th>
              <th>Fecha</th>
              <th>Nombre del usuario</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            {exampleData[0].citas.map((el) => (
              <tr>
                <td>{el.id}</td>
                <td>{el.fecha}</td>
                <td>{el.usuario}</td>
                <td>{el.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CitasAdmin;
