import axios from "axios";
import { FETCH_RENTALS } from "./types";
import { REALTY_MOLE_KEY } from "../config";

export const fetchRentals = (location) => async (dispatch) => {
  // the name of the location is modified so that the first letter is uppercase while the remainder of the name is lowercase.
  // this is to ensure that the API correctly identifies the location the user is looking for.
  const locationName =
    location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();

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
      city: `${locationName}`,
      state: "TX",
    },
  };

  const res = await axios(config);
  dispatch({ type: FETCH_RENTALS, payload: res });
};
