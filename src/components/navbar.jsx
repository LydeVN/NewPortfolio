import React, { useState } from "react";
import "../assets/navbar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <header>
      <nav className="navbar-container my-theme">

      
        {/* Burger button */}
        <div
          className={`burger ${open ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu Desktop + Mobile */}
        <div className={`menu-items ${open ? "show" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/profil" onClick={() => setOpen(false)}>Profil</NavLink>
          <NavLink to="/bts_sio" onClick={() => setOpen(false)}>BTS SIO</NavLink>
          <NavLink to="/veille" onClick={() => setOpen(false)}>Veille</NavLink>
          <NavLink to="/experiences" onClick={() => setOpen(false)}>Expériences</NavLink>
          <NavLink to="/projetgta" onClick={() => setOpen(false)}>Projets</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </div>

      </nav>
    </header>
  );
}
