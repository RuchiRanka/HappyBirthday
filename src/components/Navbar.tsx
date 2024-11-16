import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <NavLink to="/home" className="home-navlink">
          Mission Heer
        </NavLink>
      </div>
      <div>
        <NavLink to="/memory-lane" className="navbar-navlink">
          Memory Lane
        </NavLink>
        <NavLink to="/games" className="navbar-navlink">
          Games
        </NavLink>
        <NavLink to="/gifts" className="navbar-navlink">
          Gifts
        </NavLink>
      </div>
    </div>
  );
}
