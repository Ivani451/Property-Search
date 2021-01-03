import React from "react";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <h2 id="nav-logo">
        Blue<span style={{ color: "black" }}>Brick</span>
      </h2>
      <div class="outer">
        <div class="logo"></div>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>About</li>
        <li>Rent</li>
        <li>Near Me</li>
      </ul>
    </nav>
  );
};

export default NavBar;
