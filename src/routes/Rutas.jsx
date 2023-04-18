import {
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import NuevaCuenta from "../components/NuevaCuenta";
import Layout from "../GUI/Layout";
import NotFound from "../GUI/NotFound";
import RegistroVehiculo from "../components/RegistroVehiculo";
import Citas from "../components/Citas";
import Historial from "../components/Historial";
import VehiculosTaller from "../components/adminTemp/VehiculosTaller";
import CitasAdmin from "../components/adminTemp/CitasAdmin";
import Reportes from "../components/adminTemp/Reportes";
function Rutas() {
  const rutas = Router([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Login /> },
        { path: "new-account", element: <NuevaCuenta /> },
        {
          path: "home",
          children: [
            { index: true, element: <Home /> },
            { path: "registrar-vehiculo", element: <RegistroVehiculo /> },
            { path: "citas", element: <Citas /> },
            { path: "historial", element: <Historial /> },
          ],
        },
        {
          path: "admin",
          children: [
            { index: true, element: <Home /> },
            { path: "vehiculos", element: <VehiculosTaller /> },
            { path: "citas", element: <CitasAdmin /> },
            { path: "reportes", element: <Reportes /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={rutas} />;
}

export default Rutas;
