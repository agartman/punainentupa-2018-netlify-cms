import React from "react";
import Link from "gatsby-link";

import logo from "../img/logo.svg";

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            Home
          </figure>
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
