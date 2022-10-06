import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Badge } from "react-bootstrap";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <Badge pill bg="secondary">
          {totalCounters}
        </Badge>
      </a>
    </nav>
  );
};

export default NavBar;
