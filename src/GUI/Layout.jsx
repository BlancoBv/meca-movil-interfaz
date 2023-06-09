import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Layout() {
  return (
    <Fragment>
      <Header />
      <div style={{ minHeight: "90vh" }}>
        <Outlet />
      </div>
    </Fragment>
  );
}

export default Layout;
