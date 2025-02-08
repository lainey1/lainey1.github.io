// Navigation.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./MenuButton";
import headshot from "../../static/images/headshot-lavendar.jpg";

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <NavLink
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={headshot}
            alt="Headshot"
          />
          <span className="text-lg font-semibold text-gray-800">
            Lainey (Dailo) Paddock
          </span>
        </NavLink>
        <Menu />
      </div>
    </nav>
  );
}

export default Navigation;
