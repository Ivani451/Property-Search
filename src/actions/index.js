import axios from "axios";
import { FETCH_RENTALS } from "./types";
import { REALTY_MOLE_KEY } from "../config";

export const fetchRentals = (location) => async (dispatch) => {
  const config = {
    method: "GET",
    url: "https://realty-mole-property-api.p.rapidapi.com/rentalListings",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "realty-mole-property-api.p.rapidapi.com",
      "x-rapidapi-key": REALTY_MOLE_KEY,
      useQueryString: true,
    },
    params: {
      city: `${location}`,
      state: "TX",
    },
  };

  const res = await axios(config);
  dispatch({ type: FETCH_RENTALS, payload: res });
};
