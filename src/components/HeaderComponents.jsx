import { useNavigate } from "react-router-dom";

function HeaderComponents({ ruta, title }) {
  const navigate = useNavigate();
  return (
    <div className="d-flex align-items-center border-bottom">
      <div
        className="d-flex align-items-center"
        role="button"
        onClick={() => navigate(ruta)}
      >
        <i className="fa-solid fa-circle-left" style={{ fontSize: "20pt" }} />{" "}
        Volver
      </div>
      <div className="d-flex flex-fill justify-content-center">
        <h4>{title}</h4>
      </div>
    </div>
  );
}
HeaderComponents.defaultProps = {
  ruta: "../",
  title: "Titulo por defecto",
};

export default HeaderComponents;
