import React, { useState } from "react";
import HeaderComponents from "./HeaderComponents";
import meses from "../helpers/meses.json";
import { useParams } from "react-router-dom";

function Citas() {
  const yearActual = new Date().getFullYear();
  const [year, setYear] = useState(yearActual);
  const [month, setMonth] = useState(new Date().getMonth());
  const diasTotal = new Date(year, month, 0).getDate();

  return (
    <div className="d-flex flex-column p-3">
      <HeaderComponents title="Agendar citas" />
      <div className="row">
        <div className="col-6">
          <label>Mes</label>
          <select
            className="form-select"
            defaultValue={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            {meses.map((el) => {
              return (
                <option value={el.id} key={el.id}>
                  {el.mes}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-6">
          <label>Año</label>
          <select
            className="form-select"
            defaultValue={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value={yearActual - 1}>{yearActual - 1}</option>
            <option value={yearActual}>{yearActual}</option>
          </select>
        </div>
      </div>

      <Calendario dias={diasTotal} />
    </div>
  );
}

const Calendario = ({ dias }) => {
  let arrayDias = [];
  for (let i = 0; i < dias; i++) {
    arrayDias.push(i + 1);
  }
  return (
    <div className="d-flex flex-wrap mt-3">
      {arrayDias.map((el) => {
        return (
          <div className="diasContainer" key={el}>
            {el}
          </div>
        );
      })}
    </div>
  );
};

export default Citas;
