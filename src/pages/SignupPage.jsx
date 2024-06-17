import React from "react";
import { MailIcon, PhoneIcon } from "../assets/icons/icons";
import Button from "../components/Button";
import { useState } from "react";
import SignupForm from "../authentication/components/SignupForm";
import Modal from "../components/Modal";
import LoginForm from "../authentication/components/LoginForm";
import { registerSchema } from "../validation/joi-schema/joi";
import validator from "../validation/validator";
import authenApi from "../axios/authen";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import userApi from "../axios/user";
import useAuthenContext from "../authentication/hooks/useAuthenContext";

const INIT_INPUT = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const INIT_ERROR = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

function SignupPage() {
  const [input, setInput] = useState(INIT_INPUT);
  const [errInput, setErrInput] = useState(INIT_ERROR);
  const [openModal, setOpenModal] = useState(false);

  const { userLogin } = useAuthenContext();

  const navigate = useNavigate();

  const handleChangeInput = (e) =>
    setInput({ ...input, [e.target.name]: e.target.value });

  const handleOnSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const error = validator(registerSchema, input);
      if (error) {
        return setErrInput(error);
      }
      setErrInput("");
      await authenApi.register(input);
      await userLogin({ emailOrPhone: input.phone, password: input.password });
      alert("Register successfully. Navigate to home page.");
      navigate("/");
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        console.log(err.message);
        return;
      }
    }
  };

  return (
    <>
      <div className="flex items-center min-h-screen ">
        <div className="flex justify-center w-full h-full gap-20">
          <div>
            <div className="w-96">
              <h2 className="text-[6rem] mb-3">Sign up</h2>
              <p className="font-semibold leading-relaxed text-3xl ">
                and let us be the part of your journey.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center py-5">
                <div className="w-10 mr-5">
                  <MailIcon />
                </div>
                <div className="flex flex-col gap-1">
                  <h4>Email : </h4>
                  <p>bubblee@mail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10  mr-5">
                  <PhoneIcon />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="">Phone : </h4>
                  <p>011-111-1111</p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleOnSubmitForm}>
            <SignupForm
              error={errInput}
              input={input}
              handleChangeInput={handleChangeInput}
            />
            <div className="flex flex-col gap-5">
              <p className="self-end text-[0.8rem]">Already have an account?</p>
              <div className="flex gap-5">
                <button
                  type="submit"
                  className="bg-red-500 py-2 px-10 rounded-lg"
                >
                  Signup
                </button>
                <Button onClick={() => setOpenModal(true)}>Login</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {openModal && (
        <Modal width={60} onClose={() => setOpenModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
}

export default SignupPage;
