import { FETCH_RENTALS } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_RENTALS:
      console.log(action.payload);
      return [action.payload.data];
    default:
      return state;
  }
}
