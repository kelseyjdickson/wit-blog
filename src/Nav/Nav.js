import React from "react";
import { Link } from "react-router-dom";
//assets
import "./_nav.scss";
const Nav = () => {
  return (
    <>
      <ul className="nav">
        <Link className="nav__home" to="/">
          <i class="fas fa-home fa-2x"></i>
        </Link>
      </ul>
    </>
  );
};

export default Nav;
