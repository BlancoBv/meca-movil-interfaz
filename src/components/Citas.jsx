import React from "react";
import HeaderComponents from "./HeaderComponents";

function Citas() {
  const diasTotal = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    0
  ).getDate();
  console.log(diasTotal);

  return (
    <div className="d-flex flex-column p-3">
      <HeaderComponents title="Agendar citas" />

      <Calendario dias={diasTotal} />
    </div>
  );
}

const Calendario = ({ dias }) => {
  let ola = [];
  for (let i = 0; i < dias; i++) {
    ola.push(i + 1);
  }
  return (
    <div className="d-flex flex-wrap mt-3">
      {ola.map((el) => {
        return (
          <div className="border" style={{ width: "100px", height: "100px" }}>
            {el}
          </div>
        );
      })}
    </div>
  );
};

export default Citas;
