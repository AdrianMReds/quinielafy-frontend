// api/apiClient.js

import axios from "axios";
import cookies from "react-cookies";

const user = cookies.load("userData");

// Configuración del cliente Axios con la URL base del backend
const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`, // Reemplaza esta URL con la URL de tu backend
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${user.token}`,
  },
});

export default apiClient;
