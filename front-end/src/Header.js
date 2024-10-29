import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <a href="/" className="logo">
        My Blog
      </a>
      <nav>
        <a href="/login" className="login">
          Login
        </a>
        <a href="/register">Register</a>
      </nav>
    </header>
  );
}

export default Header;
