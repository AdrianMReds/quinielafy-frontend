import createApiClient from "./apiClient";

const adminService = {
  getAllQuinielas: (token) => {
    const apiClient = createApiClient({ Authorization: `Bearer ${token}` });
    return apiClient.get("/admin/quinielas");
  },
};

export default adminService;
