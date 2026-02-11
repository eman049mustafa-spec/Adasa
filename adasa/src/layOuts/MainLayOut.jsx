import React from "react";
import { Outlet , NavLink} from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

export default function MainLayOut() {
  return (
    <>
      {/* ------------ NavBar -------------- */}
      <NavBar/>
      {/* ------------ End-NavBar ----------- */}

      {/* ------------- Hero ---------------- */}
      {/* ------------- End-Hero ------------ */}

      {/* The Chageble section (Home-Bolgs) */}
      <Outlet />
      {/* End Chageble section (Home-Bolgs) */}

      {/* ------------- Footer --------------- */}
      {/* ------------- End-Footer ----------- */}
      
    </>
  );
}
