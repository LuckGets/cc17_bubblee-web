import React from "react";
import Input from "../../components/Input";
import { RightArrow } from "../../assets/icons/icons";
import { useState } from "react";

const INIT_INPUT = {
  emailOrPhone: "",
  password: "",
};

function LoginForm() {
  const [input, setInput] = useState(INIT_INPUT);

  const handleChangeInput = e => setInput({...input, [e.target.name] : e.target.value})

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-[3rem] font-bold">Login</h1>
        <p className=" w-1/2 border-black opacity-50 border-[1px] " />
      </div>
      <div className="flex flex-col gap-7">
        <div className="w-3/4 flex flex-col gap-3">
          <h2 className="text-[1.2rem] font-semibold">
            Email or Phone number :
          </h2>
          <Input name="emailOrPhone" value={input.emailOrPhone} onChange={handleChangeInput} placeholder="youremail@mail.com or 011-254-3657" />
        </div>
        <div className="w-3/4 flex flex-col gap-3">
          <h2 className="text-[1.2rem] font-semibold">Password</h2>
          <Input name="password" value={input.password} onChange={handleChangeInput} placeholder="yourpassword123456" />
          <p className="text-[0.9rem] opacity-50">Forget password?</p>
        </div>
        <div>
          <div className="flex flex-col items-center">
            <p className="text-[1.2rem] font-semibold">or</p>
            <button className="m-3 w-1/2 bg-red-300">
              Sign in with google
            </button>
            <button className="w-1/2 bg-blue-300">Sign in with facebook</button>
          </div>
          <div className="mt-5 flex justify-center text-white">
            <button className="flex justify-center items-center py-1 w-3/4 bg-blue-500 rounded-2xl">
              <div className="px-3 text-[1.5rem]">Log in</div>
              <div className="w-5">
                <RightArrow />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
