import {
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";
import Home from "../components/Home";
import NuevaCuenta from "../components/NuevaCuenta";
import Layout from "../GUI/Layout";
function Rutas() {
  const rutas = Router([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "new-account", element: <NuevaCuenta /> },
      ],
    },
  ]);
  return <RouterProvider router={rutas} />;
}

export default Rutas;
