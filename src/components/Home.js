import React from "react";
import NavBar from "./Navbar";
import SearchBar from "../containers/SearchBar";
import MyMap from "../containers/GoogleMap";

const Home = () => {
  return (
    <div className="Home">
      <MyMap />
      <NavBar />
      <SearchBar />
    </div>
  );
};

export default Home;
