import { combineReducers } from "redux";
import rentalsReducer from "./rentalsReducer";

const rootReducer = combineReducers({
  rentals: rentalsReducer,
});

export default rootReducer;
