import createAPiClient from "./apiClient";

const tournamentService = {
  getAllTournaments: (token) => {
    const apiClient = createAPiClient({ Authorization: `Bearer ${token}` });
    return apiClient.get("/torneos");
  },
};

export default tournamentService;
