// api/apiClient.js

import axios from "axios";
import { useSelector } from "react-redux";
import cookies from "react-cookies";

const createApiClient = (headers = {}) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
    ...headers,
  };

  return axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
    headers: {
      ...defaultHeaders,
    },
  });
};

export default createApiClient;
