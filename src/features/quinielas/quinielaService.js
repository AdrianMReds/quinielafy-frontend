import axios from "axios";

const API_URL = "http://localhost:3000/api/quinielas";

//Get user quinielas
const getQuinielas = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

const quinielaService = {
  getQuinielas,
};

export default quinielaService;
