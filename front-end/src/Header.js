import React from "react";

function Header() {
  return (
    <header>
      <a href="" className="logo">
        My Blog
      </a>
      <nav>
        <a href="/login" className="">
          Login
        </a>
        <a href="">Register</a>
      </nav>
    </header>
  );
}

export default Header;
