import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        borderBottom: "1px solid gray",
      }}
    >
      <nav style={{ display: "flex", padding: 20 }}>
        <Link style={{ marginRight: 20 }} to="/">
          Home
        </Link>
        <Link style={{ marginRight: 20 }} to="/memo">
          Memo
        </Link>
        <Link style={{ marginRight: 20 }} to="/register">
          Register
        </Link>
        <Link style={{ marginRight: 20 }} to="/login">
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
