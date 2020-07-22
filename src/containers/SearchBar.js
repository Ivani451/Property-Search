import React, { Fragment, useState } from "react";
import { useDataApi } from "../actions/index";

export const Form = () => {
  const [query, setQuery] = useState("redux");
  const [{ data }, doFetch] = useDataApi(
    "https://hn.algolia.com/api/v1/search?query=redux",
    {
      hits: [],
    }
  );

  return (
    <Fragment>
      <form
        onSubmit={(event) => {
          doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`);

          event.preventDefault();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

// import { fetchRentals } from "../actions";

export const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [{ data }, doFetch] = useDataApi(
    "https://hn.algolia.com/api/v1/search?query=redux",
    {
      hits: [],
    }
  );
  console.log({ location });

  return (
    <Fragment>
      <form
        className="searchBar"
        onSubmit={(e) => {
          doFetch(`http://hn.algolia.com/api/v1/search?query=${location}`);
          e.preventDefault();
        }}

        // the above "doFetch" and the URL need to be changed to match what we're
        // trying to do
      >
        <input
          type="text"
          placeholder="Enter a city"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input type="submit" value="search" />
      </form>
      <ul>
        {data.hits.map((item) => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
