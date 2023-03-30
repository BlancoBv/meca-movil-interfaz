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
            { path: "citas" },
            { path: "historial" },
          ],
        },
        ,
      ],
    },
  ]);
  return <RouterProvider router={rutas} />;
}

export default Rutas;
