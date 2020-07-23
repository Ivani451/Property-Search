import React from "react";
import { Store } from "./Store";
import Navbar from "./components/Navbar";
import { Form, SearchBar } from "./containers/SearchBar";
import axios from "axios";
import { FETCH_RENTALS } from "./actions/types";

const App = () => {
  const { state, dispatch } = React.useContext(Store);
  const fetchDataAction = async () => {
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
        city: `Austin`,
        state: `TX`,
      },
    };
    const res = await axios(config);

    return dispatch({ type: FETCH_RENTALS, payload: res.data });
  };

  React.useEffect(() => {
    state.rentals.length === 0 && fetchDataAction();
  });

  return (
    <React.Fragment>
      {console.log(state)};
      <Navbar />
      <Form />
      <SearchBar />
    </React.Fragment>
  );
};

export default App;
