import React, { useState } from "react";
// import { fetchRentals } from "../actions";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  console.log({ location });

  return (
    <form className="searchBar">
      <input
        type="text"
        placeholder="Enter a city"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input type="submit" value="search" />
    </form>
  );
};

export default SearchBar;
