<<<<<<< HEAD
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '15px 30px',
      marginBottom: '20px'
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0
      }}>
        <li>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
=======
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
>>>>>>> ab860c0da138d4a83ee7a72361e12c2b489401cc
            Home
          </Link>
        </li>
        <li>
<<<<<<< HEAD
          <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>
=======
          <Link to="/products" style={{ color: "white", textDecoration: "none" }}>
>>>>>>> ab860c0da138d4a83ee7a72361e12c2b489401cc
            Products
          </Link>
        </li>
        <li>
<<<<<<< HEAD
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
=======
          <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
>>>>>>> ab860c0da138d4a83ee7a72361e12c2b489401cc
            Cart
          </Link>
        </li>
        <li>
<<<<<<< HEAD
          <Link to="/admin" style={{ color: 'white', textDecoration: 'none' }}>
=======
          <Link to="/admin" style={{ color: "white", textDecoration: "none" }}>
>>>>>>> ab860c0da138d4a83ee7a72361e12c2b489401cc
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> ab860c0da138d4a83ee7a72361e12c2b489401cc
