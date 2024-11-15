// import LoginPage from "./pages/LoginPage";
// import Register from "./pages/RegisterPage";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import UserPage from "./pages/UserPage";
import AppRouter from "./routes/AppRouter";
import { Slide, ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="  box-border opacity-80 min-h-screen w-screen mx-auto bg-[url('./image/bg.jpg')] bg-contain">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        transition={Slide}
      />
      <AppRouter />
    </div>
  );
}

export default App;
