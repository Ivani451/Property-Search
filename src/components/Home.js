import React from "react";
import NavBar from "./Navbar";
import SearchBar from "../containers/SearchBar";

const Home = () => {
  return (
    <div className="Home">
      <div id="map"></div>
      <NavBar />
      <SearchBar />
    </div>
  );
};

export default Home;
