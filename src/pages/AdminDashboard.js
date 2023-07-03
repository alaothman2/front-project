import React, { useEffect } from "react";
import SideBarAdmin from "./SideBarAdmin";
import "../css/Dashaboard.css";
import { Outlet } from "react-router-dom";
import Helmt from "../components/Helmt";
function AdminDashboard() {
  useEffect(() => window.scrollTo(0, 0),[]);
  return (
    <div className="container-fluid mt-5 bg-secondary  min-vh-100">
      <Helmt title={"Dashboard Admin"}/>
      <div className="row admin">
        <div className="col-2 bg-light ">
          <SideBarAdmin />
        </div>
        <div className="col-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
