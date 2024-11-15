import { Outlet } from "react-router-dom";

import SideBar from "../components/SideBar";
// import useAuth from "../hooks/useAuth";

export default function MainContainer() {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
}
