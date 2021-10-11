import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
function NavBar() {
  return (
    <header>
      <Link to="/home">
        <Logo />
      </Link>
      <Link to="/productlist">Porduct List</Link>
      <Link to="/home"> Home</Link>
    </header>
  );
}

export default NavBar;
