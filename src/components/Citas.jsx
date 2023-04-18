import React, { useRef, useState, forwardRef, useEffect } from "react";
import HeaderComponents from "./HeaderComponents";
import meses from "../helpers/meses.json";
import { useParams } from "react-router-dom";

function Citas() {
  const yearActual = new Date().getFullYear();
  const [year, setYear] = useState(yearActual);
  const [month, setMonth] = useState(new Date().getMonth());
  const [estilo, setEstilo] = useState({});
  const diasTotal = new Date(year, month, 0).getDate();
  const containerRef = useRef();

  useEffect(() => {
    const ancho = containerRef.current.offsetWidth / 7;
    setEstilo({ width: `${ancho}px`, height: `${ancho / 1.5}px` });
  }, [containerRef.current]);

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

      <Calendario dias={diasTotal} ref={containerRef} estilo={estilo} />
    </div>
  );
}

const Calendario = forwardRef(({ dias, estilo }, ref) => {
  let arrayDias = [];
  for (let i = 0; i < dias; i++) {
    arrayDias.push({
      dia: i + 1,
      cita: Math.random() > 0.5 ? true : false,
      msg: "Cita vehiculo",
    });
  }

  return (
    <div ref={ref} className="d-flex flex-wrap mt-3 ">
      {estilo.hasOwnProperty("width") &&
        arrayDias.map((el) => {
          return (
            <div className="diasContainer" style={estilo} key={el}>
              {el.dia}
              {el.cita && <p>{el.msg}</p>}
              <p>{el.random}</p>
            </div>
          );
        })}
    </div>
  );
});

export default Citas;
