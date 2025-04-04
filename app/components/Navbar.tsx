import React from "react";

function Navbar() {
  return (
    <div className="navbar collapse-title bg-base-100 shadow-md fixed top-0 mb-4">
      <div className="flex-1 justify-between">
        <a href="/" className="btn btn-ghost text-xl">
          <img src="logo.png" className="size-9 rounded-box" alt="my-logo" />
          Portfolio
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
