import { useState } from "react";
import Button from "../../book-page/components/Button";
import Input from "../../components/Input";
import useAuthenContext from "../../authentication/hooks/useAuthenContext";
import userApi from "../../axios/user";

const INIT_INPUT = {
  password: "",
  confirmPassword: "",
};

function CancelForm({ onClose, orderId }) {
  const [password, setPassword] = useState(INIT_INPUT);

  const { authenUser } = useAuthenContext();

  const handleOnChange = (e) =>
    setPassword({ ...password, [e.target.name]: e.target.value });

  const handleOnDelete = async (e) => {
    try {
      e.preventDefault();
      if (!password.password || !password.confirmPassword) {
        return console.log("Please enter your password");
      }

      if (password.password !== password.confirmPassword) {
        return console.log(
          "Password and confirm password doesn't match. Please try again."
        );
      }

      const { data } = await userApi.ComparePassword({
        password: password.password,
      });
      console.log(data);
      if (!data) {
        return console.log("Password is invalid.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="flex justify-between border-b-2 border-black pb-2">
        <p className="text-3xl">Are you sure you want to cancel our trip?</p>
        <span role="button" onClick={onClose}>
          Close
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl">
          Please Enter your password to confirm your request
        </p>
        <div className="flex flex-col gap-2 ">
          <p className="text-[0.9rem] text-gray-700">Password :</p>
          <Input
            name="password"
            onChange={handleOnChange}
            value={password.password}
            placeholder="yourpassword1234"
          />
          <p className="text-[0.9rem] text-gray-700">Confirm Password :</p>
          <Input
            name="password"
            onChange={handleOnChange}
            value={password.password}
            placeholder="confirmyourpassword1234"
          />
        </div>
      </div>
      <Button text="white" bg="red">
        Cancel
      </Button>
    </div>
  );
}

export default CancelForm;
