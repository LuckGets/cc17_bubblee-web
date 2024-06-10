import { createContext } from "react";
import authenApi from "../../axios/authen";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../localStorage/localStroage";
import { AxiosError } from "axios";
import { useState } from "react";
import userApi from "../../axios/user";
import { useEffect } from "react";

export const AuthenContext = createContext();

export default function AuthenContextProvider({ children }) {
  // set authenticate user state
  const [authenUser, setAuthenUser] = useState(null);

  const fetchUserData = async () => {
    try {
      if (getAccessToken()) {
        const response = await userApi.getUser();
        setAuthenUser(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  // Login Fn
  async function userLogin(userInput) {
    try {
      const response = await authenApi.login(userInput);
      setAccessToken(response.data.accessToken);
      const res = await userApi.getUser();
      setAuthenUser(res.data);
    } catch (err) {
      console.log(err);
      if (err instanceof AxiosError) {
        alert(err.response.data.message)
        const message =
          response.statusCode === 400
            ? "Login unsuccess. please try again"
            : "Internal server error. Please wait";
        console.log(message);
        return;
      }
    }
  }

  // Logout Fn
  const userLogout = () => {
    removeAccessToken();
    setAuthenUser(null);
  };

  return (
    <AuthenContext.Provider value={{ authenUser, userLogin, userLogout }}>
      {children}
    </AuthenContext.Provider>
  );
}
