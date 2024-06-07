const getAccessToken = () => localStorage.getItem("accessToken");

const setAccessToken = (token) => localStorage.setItem("accessToken", token);

const removeAccessToken = () => localStorage.removeItem("accessToken");

export  { getAccessToken, setAccessToken, removeAccessToken };
