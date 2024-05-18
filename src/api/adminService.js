import createApiClient from "./apiClient";

const adminService = {
  getAllQuinielas: (token) => {
    const apiClient = createApiClient({ Authorization: `Bearer ${token}` });
    return apiClient.get("/admin/quinielas");
  },
  getAllTorneos: (token) => {
    const apiClient = createApiClient({ Authorization: `Bearer ${token}` });
    return apiClient.get("/admin/torneos");
  },
};

export default adminService;
