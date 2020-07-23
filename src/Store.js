import React from "react";
import { FETCH_RENTALS } from "./actions/types";

export const Store = React.createContext();

const initialState = {
  rentals: [],
};

function reducer(state, action) {
  switch (action.type) {
    case FETCH_RENTALS:
      return { ...state, rentals: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
