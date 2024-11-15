import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import UserPage from "../pages/UserPage";
import HistoryPage from "../pages/HistoryPage";

import MainContainer from "../layout/MainContainer";
import CreateRepair from "../pages/CreateRepair";
import ProtectedRoute from "../components/componet-authen/ProtectedRoute";
import AddRoomPage from "../pages/AddRoomPage";
import EditPage from "../pages/EditPage";
import LoginAdmin from "../pages/LoginAdmin";
import AdminPage from "../pages/AdminPage";

const guestRouter = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/loginAdmin",
    element: <LoginAdmin />,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainContainer />
      </ProtectedRoute>
    ),

    children: [
      { path: "/", element: <UserPage /> },
      { path: "/admin", element: <AdminPage /> },
      { path: "/history", element: <HistoryPage /> },
      { path: "/addroom", element: <AddRoomPage /> },
      { path: "/create-repair", element: <CreateRepair /> },
      { path: "/edit", element: <EditPage /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={guestRouter} />;
}
