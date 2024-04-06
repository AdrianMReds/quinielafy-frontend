import apiClient from "./apiClient";

const tournamentService = {
  getAllTournaments: () => {
    return apiClient.get("/torneos");
  },
};

export default tournamentService;
