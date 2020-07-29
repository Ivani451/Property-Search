import axios from "axios";
import { FETCH_RENTALS } from "./types";

export const fetchRentals = (location) => async (dispatch) => {
  const config = {
    method: "GET",
    url: "https://realty-mole-property-api.p.rapidapi.com/rentalListings",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "realty-mole-property-api.p.rapidapi.com",
      "x-rapidapi-key": "KhV20lncoSmshTs0jbXgjj2SOXoxp1YQnjpjsnUz0hrHV56mQI",
      useQueryString: true,
    },
    params: {
      city: "Austin",
      state: "TX",
    },
  };

  const res = await axios(config);
  dispatch({ type: FETCH_RENTALS, payload: res });
};
