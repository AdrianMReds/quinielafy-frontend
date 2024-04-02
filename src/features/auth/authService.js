import axios from "axios";
import cookies from "react-cookies";

const API_URL = "http://localhost:3000/api/usuarios/";

const saveUserCookie = (userData) => {
  // const expires = new Date();
  // expires.setSeconds(expires.getSeconds + 30);
  cookies.save("userData", JSON.stringify(userData), {});
};

const removeUserCookie = () => {
  cookies.remove("userData", {});
};

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    // localStorage.setItem("user", JSON.stringify(response.data));
    saveUserCookie(response.data);
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    // localStorage.setItem("user", JSON.stringify(response.data));
    saveUserCookie(response.data);
  }

  return response.data;
};

//Logout user
const logout = async () => {
  // localStorage.removeItem("user");
  removeUserCookie();
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
