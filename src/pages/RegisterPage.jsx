/* eslint-disable react/prop-types */
import { useState } from "react";
import validateRegister from "../validators/validate-register";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Input from "../components/Input";
import authApi from "../apis/auth";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import { AxiosError } from "axios";

const initialInput = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const initialInputError = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Register() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInputError);
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const hdlSubmitForm = async (e) => {
    try {
      e.preventDefault();

      const error = validateRegister(input);
      if (error) {
        return setInputError(error);
      }
      setInputError({ ...initialInputError });
      console.log(input);
      await authApi.register(input);
      navigate("/login");
      toast.success("registered successfully. please log in to continue.");
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        if (err.response.data.field === "email")
          setInputError((prev) => ({
            ...prev,
            email: "email  already in use.",
          }));
      }
    }
  };
  return (
    <div className="flex justify-center items-center w-screen h-screen ">
      <div className=" flex flex-col  h-[570px] border-4 border-[#1879C3] rounded-[35px] shadow-[7px_7px_7px_7px_rgba(0,0,0)] ">
        <div className="flex flex-col pt-8 justify-center items-center  ">
          <i className="fa-regular fa-circle-user fa-2xl text-[#1879C3] "></i>
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-50">
            Register a new account
          </h2>
        </div>
        <form onSubmit={hdlSubmitForm}>
          <div className="flex flex-col gap-3 mt-2  ">
            <div className="flex  justify-center  relative gap-1 p-2  ">
              <div className="flex flex-col">
                <Input
                  className="p-2 px-1   rounded-2xl border-[2px] border-[#1879C3] "
                  placeholder="First name"
                  name="firstName"
                  value={input.firstName}
                  onChange={handleChangeInput}
                  error={inputError.firstName}
                />
              </div>
              <div className="flex flex-col">
                <Input
                  className=" p-2 px-1 rounded-2xl border-[2px] border-[#1879C3]"
                  placeholder="last name"
                  value={input.lastName}
                  name="lastName"
                  onChange={handleChangeInput}
                  error={inputError.lastName}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center relative p-2 ">
              <Input
                className=" w-[400px] p-2 px-2 rounded-2xl border-[2px] border-[#1879C3]"
                placeholder="Password"
                name="password"
                type="password"
                value={input.password}
                onChange={handleChangeInput}
                error={inputError.password}
              />
            </div>
            <div className="flex flex-col justify-center relative p-2">
              <Input
                className=" w-[400px] p-2 px-2 rounded-2xl border-[2px] border-[#1879C3]"
                placeholder="Confirm password"
                type="password"
                value={input.confirmPassword}
                name="confirmPassword"
                onChange={handleChangeInput}
                error={inputError.confirmPassword}
              />
            </div>
            <div className="flex flex-col justify-center relative  p-2">
              <Input
                className=" w-[400px] p-2 px-2 rounded-2xl border-[2px] border-[#1879C3]"
                placeholder="phone"
                name="phone"
                value={input.phone}
                onChange={handleChangeInput}
                error={inputError.phone}
              />
            </div>
            <div className="flex flex-col justify-center relative  p-2">
              <Input
                className=" w-[400px]  p-2 px-2 rounded-2xl border-[2px] border-[#1879C3]"
                placeholder="email"
                name="email"
                value={input.email}
                onChange={handleChangeInput}
                error={inputError.email}
              />
            </div>
            <div className=" flex flex-col justify-center  relative items-center ">
              <button
                className="tracking-wider text-lg font-semibold 
            shadow-[15px_15px_7px_1px_rgba(0,0,0)] text-white 
            border-2 rounded-lg p-2  w-[400px] 
            bg-[#1879C3] opacity-70 hover:opacity-100 border-[#1879C3]"
              >
                Register
              </button>
              <Link
                className=" pt-5 p-2 flex justify-end hover:text-[#69faff] text-white"
                to="/login"
              >
                Already have an account? Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
