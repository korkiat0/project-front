import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const { authUser, logout } = useAuth();

  const navigate = useNavigate();
  const handleClickLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <div className=" flex h-screen">
      <div className="flex flex-col  min-w-48 bg-white ">
        <div className="flex  justify-center items-center h-20 pt-6 gap-2 text-[#1879C3] text-2xl font-extrabold ">
          <h2 className="">{authUser?.firstName}</h2>
          <i className="fa-regular fa-circle-user fa-2xl text-[#1879C3]"></i>
        </div>
        <section
          className={`flex flex-1 overflow-y-auto ${
            authUser?.isAdmin ? "hidden" : ""
          }  `}
        >
          <nav className="flex flex-col  flex-1 py-2 ">
            <Link
              to="/"
              className=" border-b-2 border-gray-500  p-2 text-[#1879C3] text-base font-extrabold hover:text-white hover:bg-[#1879c3] flex items-center justify-center"
            >
              แจ้งซ่อม
            </Link>
            <Link
              to="/history"
              className="border-b-2 border-gray-500  p-2 text-[#1879C3] text-base font-extrabold hover:text-white hover:bg-[#1879c3] flex items-center justify-center"
            >
              ประวัติแจ้งซ่อม
            </Link>
            <Link
              to="/addroom"
              className="border-b-2 border-gray-500  p-2 text-[#1879C3] text-base font-extrabold hover:text-white hover:bg-[#1879c3] flex items-center justify-center"
            >
              เพิ่มห้อง
            </Link>
          </nav>
        </section>
        <div className=" flex justify-center items-center h-32">
          <button
            onClick={handleClickLogout}
            className="tracking-wider text-sm font-semibold 
            shadow-[10px_10px_7px_1px_rgba(0,0,0)] text-white 
            border-2 rounded-lg p-2  
            bg-[#1879C3] opacity-70 hover:opacity-100 border-[#1879C3] "
          >
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
}
