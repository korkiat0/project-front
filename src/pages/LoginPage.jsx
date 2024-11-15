import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import validateLogin from "../validators/validate-login";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const initialInput = {
  email: "",
  password: "",
};
const initialInputError = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);

  const { login } = useAuth();
  const navigate = useNavigate();
  const hdlOnChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const hdlSubmitForm = async (event) => {
    try {
      event.preventDefault();
      const error = validateLogin(input);
      if (error) {
        return setInputError(error);
      }
      setInputError(initialInputError);

      await login(input);
      toast.success("Login Success");
      navigate("/");
    } catch (error) {
      toast.error("Login Fall");
    }
  };
  return (
    <div className="flex justify-center items-center w-screen h-screen ">
      <div className=" flex flex-col  h-[450px] border-4 border-[#1879C3] rounded-[35px] shadow-[7px_7px_7px_7px_rgba(0,0,0)] ">
        <div className="flex flex-col pt-10 justify-center items-center  gap-2 ">
          <i className="fa-solid fa-lock fa-2xl  text-[#1879C3]"></i>
          <h2 className="mt-4 p-1 text-center text-3xl leading-9 font-extrabold text-gray-50 ">
            LOGIN USER
          </h2>
        </div>
        <div className="pt-5">
          <form onSubmit={hdlSubmitForm}>
            <div className="flex flex-col mt-5 gap-4">
              <div className="flex flex-col justify-center  relative p-2  ">
                <Input
                  className=" w-[300px] p-1 px-2 rounded-2xl border-[2px] border-[#1879C3] bg-white"
                  placeholder="Email"
                  name="email"
                  onChange={hdlOnChange}
                  value={input.email}
                  error={inputError.email}
                />
              </div>
              <div className="flex flex-col justify-center  relative p-2 ">
                <Input
                  className=" w-[300px] p-1 px-2 rounded-2xl border-[2px] border-[#1879C3] bg-white"
                  placeholder="Password"
                  name="password"
                  onChange={hdlOnChange}
                  value={input.password}
                  error={inputError.password}
                />
              </div>
            </div>
            <div className=" flex justify-center flex-col items-center  relative p-2 mt-5">
              <button
                className="tracking-wider text-lg font-semibold 
          shadow-[15px_15px_7px_1px_rgba(0,0,0)] text-white 
          border-2 rounded-lg p-1  w-[300px]
          bg-[#1879C3] opacity-70 hover:opacity-100 border-[#1879C3]"
              >
                LOGIN
              </button>
              <Link
                className=" pt-5 flex justify-end hover:text-[#69faff] text-white"
                to="/register"
              >
                Not have an account? Sign Up Here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
