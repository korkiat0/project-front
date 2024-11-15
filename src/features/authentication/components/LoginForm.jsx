export default function LoginForm() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className=" flex flex-col gap-4 h-[550px] border-4 border-[#1879C3] rounded-[35px] shadow-[7px_7px_7px_7px_rgba(0,0,0)]">
        <div className="flex flex-col p-8 justify-center items-center">
          <i className="fa-regular fa-circle-user fa-2xl text-[#1879C3]"></i>
          <h2 className="mt-4 p-1 text-center text-3xl leading-9 font-extrabold text-black ">
            Register a new account
          </h2>
        </div>
        <form method="POST" action="#">
          <div className="flex justify-center m-1 relative gap-1 p-2  ">
            <input
              className="p-1 px-2  rounded-2xl border-[2px] border-[#1879C3] "
              placeholder="First name"
              name="firstName"
            />
            <input
              className=" p-1 px-2 rounded-2xl border-[2px] border-[#1879C3]"
              placeholder="last name"
              name="lastName"
            />
          </div>

          <div className="flex justify-center m-2 relative p-2  ">
            <input
              className=" w-[400px] p-1 px-2 rounded-2xl border-[2px] border-[#1879C3]"
              placeholder="Password"
              name="Password"
            />
          </div>
          <div className="flex justify-center m-2 relative p-2 ">
            <input
              className=" w-[400px] p-1 px-2 rounded-2xl border-[2px] border-[#1879C3]"
              placeholder="confirm password"
              name="confirm password"
            />
          </div>
          <div className="flex justify-center m-2 relative p-2  ">
            <input
              className=" w-[400px] p-1 px-2 rounded-2xl border-[2px] border-[#1879C3]"
              placeholder="phone"
              name="phone"
            />
          </div>
          <div className="flex justify-center m-2 relative p-2">
            <input
              className=" w-[400px]  p-1 px-2 rounded-2xl border-[2px] border-[#1879C3]"
              placeholder="email"
              name="email"
            />
          </div>

          <div className=" flex justify-center  relative p-2">
            <button
              className="tracking-wider text-lg font-semibold 
            shadow-[15px_15px_7px_1px_rgba(0,0,0)] text-white 
            border-2 rounded-2xl p-1 px-2 w-[400px] 
            bg-[#1879C3] opacity-50 hover:opacity-100 border-[#1879C3]"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
