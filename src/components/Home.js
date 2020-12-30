import React from "react";
import NavBar from "./Navbar";
import GoogleSearchBar from "../containers/GoogleSearchBar";

const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <GoogleSearchBar />
    </div>
  );
};

export default Home;
