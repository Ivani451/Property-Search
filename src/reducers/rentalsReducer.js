import { FETCH_RENTALS } from "../actions/types";

const rentalsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_RENTALS":
      return { ...state };
    default:
      throw new Error();
  }
};
