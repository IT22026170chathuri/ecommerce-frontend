import { Link } from "react-router-dom";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        position: "fixed",       // Keeps it at the top when scrolling
        top: 0,
        left: 0,
        width: "100%",           // Full width across the screen
        backgroundColor: "#333",
        padding: "15px 30px",
        boxSizing: "border-box",
        zIndex: 1000             // Keeps it above other elements
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "Align Left", // lefts links horizontally
          alignItems: "Align Left",
          gap: "40px",
          margin: 0,
          padding: 0
        }}
      >
        <li>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" style={{ color: "white", textDecoration: "none" }}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
            Cart
          </Link>
        </li>
        <li>
          <Link to="/admin" style={{ color: "white", textDecoration: "none" }}>
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
