import React from "react";
import Input from "../../components/Input";
import { RightArrow } from "../../assets/icons/icons";
import { useState } from "react";
import { loginSchema } from "../../validation/joi-schema/joi";
import validator from "../../validation/validator";
import { useNavigate } from "react-router-dom";
import useAuthenContext from "../hooks/useAuthenContext";

const INIT_INPUT = {
  emailOrPhone: "",
  password: "",
};

const INIT_errorDisplayInput = {
  emailOrPhone: "",
  password: "",
};

function LoginForm({closeModal}) {
  const [input, setInput] = useState(INIT_INPUT);
  const [errInput, setErrInput] = useState(INIT_errorDisplayInput);

  const { userLogin } = useAuthenContext();
  const navigate = useNavigate();

  const handleChangeInput = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleOnSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const error = validator(loginSchema, input);
      if (error) {
        return setErrInput(error);
      }
      setErrInput({ ...INIT_errorDisplayInput });
      await userLogin(input);
      if (closeModal) {
        closeModal()
      }
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-[3rem] font-bold">Login</h1>
        <p className=" w-1/2 border-black opacity-50 border-[1px] " />
      </div>
      <form onSubmit={handleOnSubmitForm} className="flex flex-col gap-7">
        <div className="w-3/4 flex flex-col gap-3">
          <h2 className="text-[1.2rem] font-semibold">
            Email or Phone number :
          </h2>
          <Input
            name="emailOrPhone"
            value={input.emailOrPhone}
            onChange={handleChangeInput}
            placeholder="youremail@mail.com or 011-254-3657"
          />
          <small className="text-red-500">{errInput.emailOrPhone}</small>
        </div>
        <div className="w-3/4 flex flex-col gap-3">
          <h2 className="text-[1.2rem] font-semibold">Password</h2>
          <Input
            name="password"
            value={input.password}
            onChange={handleChangeInput}
            placeholder="yourpassword123456"
          />
          <small className="text-red-500">{errInput.password}</small>
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
            <button
              type="submit"
              className="flex justify-center items-center py-1 w-3/4 bg-blue-500 rounded-2xl"
            >
              <div className="px-3 text-[1.5rem]">Log in</div>
              <div className="w-5">
                <RightArrow />
              </div>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
