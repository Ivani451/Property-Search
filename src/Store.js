import React, { createContext, useReducer } from "react";
import { FETCH_RENTALS } from "./actions/types";

export const Store = createContext();

function reducer(state, action) {
  switch (action.type) {
    case FETCH_RENTALS:
      console.log("well");
      return { ...state, rentals: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <Store.Provider value={(state, dispatch)}>{props.children}</Store.Provider>
  );
}
