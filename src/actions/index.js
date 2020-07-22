import { useState, useEffect } from "react";
import axios from "axios";
import { FETCH_RENTALS } from "./types";

export const fetchRentals = (...location) => async (dispatch) => {
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
      city: `${location.city}`,
      state: `${location.state}`,
    },
  };
  const res = await axios(config);
  dispatch({ type: FETCH_RENTALS, payload: res });
};

//  action related to fetching rental data
export const useDataApi = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(url);

        setData(result.data);
      } catch (error) {
        console.log("oops");
      }
    };

    fetchData();
  }, [url]);

  return [{ data }, setUrl];
};
