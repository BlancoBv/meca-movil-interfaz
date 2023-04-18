import React from "react";
import HeaderComponents from "./HeaderComponents";
import exampleData from "./exampleData.json";

function Historial() {
  console.log(exampleData);
  return (
    <div className="d-flex flex-column p-3">
      {" "}
      <HeaderComponents title="Historial de servicios" />
      <div className="p-3">
        {exampleData[0].historial.map((el) => {
          return (
            <div className="border-bottom text-center" key={el.id}>
              <p className="text-start">ID de ingreso {el.id}</p>
              <h4>{el.vehiculo}</h4>
              {el.servicios.map((el, i) => (
                <p key={i}>{el}</p>
              ))}
              <p>
                Completado:{" "}
                {el.completado ? (
                  <i class="fa-regular fa-thumbs-up text-success" />
                ) : (
                  <i class="fa-regular fa-thumbs-down text-danger" />
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Historial;
