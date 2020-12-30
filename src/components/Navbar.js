import React from "react";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <h2>this is a header</h2>

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
