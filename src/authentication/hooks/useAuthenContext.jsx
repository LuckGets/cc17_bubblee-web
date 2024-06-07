import { useContext } from "react";
import { AuthenContext } from "../contexts/authenContext";

function useAuthenContext() {
  return  useContext(AuthenContext);
}

export default useAuthenContext;
