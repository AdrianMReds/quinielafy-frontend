import createAPiClient from "./apiClient";

const quinielaService = {
  createQuiniela: (quinielaData, token) => {
    const apiClient = createAPiClient({ Authorization: `Bearer ${token}` });
    return apiClient.post("/quinielas", quinielaData);
  },
};

export default quinielaService;
