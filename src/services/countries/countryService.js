import api from "../Api";
import ApiError from "../Error/ApiError";

const countryService = {
  getAllCountries: async () => {
    try {
      return api.get("/all?fields=name,flags,capital,region,population");
    } catch (err) {
      throw new ApiError("Failed to Fetch all Countries", err);
    }
  },
  getAllRegion: async () => {
    return;
  },
  filterByRegion: async () => {
    return;
  },
  getByCountry: async () => {
    return;
  },
};

export default countryService;
