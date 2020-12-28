import React from "react";
import NavBar from "./Navbar";
import SearchBar from "../containers/SearchBar";
import GoogleSearchBar from "../containers/GoogleSearchBar";

const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <SearchBar />
      <GoogleSearchBar />
    </div>
  );
};

export default Home;
