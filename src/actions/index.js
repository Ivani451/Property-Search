import axios from "axios";
import { FETCH_RENTALS } from "./types";
import { REALTY_MOLE_KEY } from "../config";

export const fetchRentals = (location) => async (dispatch) => {
  // the location provided by the user is modifiend so that there is no spaces and that the city, state, and country are
  // split inside an array to better work with the individual parts. Example: ["Austin", "TX", "USA"]
  const splitName = location.replace(/\s/g, "").split(",");

  // we set the cityName variable to the name of the city. From the example above, it would be "Austin"
  const cityName = splitName[0];

  // the name of the city is modified so that the first letter is uppercase while the remainder of the name is lowercase.
  // this is to ensure that the API correctly identifies the location the user is looking for.
  const locationName =
    cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

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
      state: `${splitName[1]}`,
    },
  };

  const res = await axios(config);
  dispatch({ type: FETCH_RENTALS, payload: res });
};
