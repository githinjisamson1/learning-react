import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "none" : "underline",
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <nav>
      {/* TODO: Link */}
      {/* <Link to="/">Home</Link> */}
      {/* <Link to="/about">About</Link> */}

      {/* TODO: adds active class */}
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/about">
        About
      </NavLink>
      <NavLink style={navLinkStyles} to="/products">
        Products
      </NavLink>
    </nav>
  );
};

export default Navbar;

// TODO: active links
// 1. external css/active class
// 2. style={navLinkStyles}/return styles/isActive boolean flag

// Link vs NavLink
// NavLink is best suited for navigation links/breadcrumbs - helps screen readers
// we would not want to add an active class when not needed
// hence use Link if not needed
