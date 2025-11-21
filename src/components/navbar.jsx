import React, { useState } from "react";
import "../assets/navbar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="neon-header my-theme">

      {/* BARRE SUPERIEURE NEON */}
      <div className="neon-line"></div>

      <nav className="navbar">

        {/* Logo (optionnel) */}
        <div className="nav-logo">JV</div>

        {/* Liens */}
        <div className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/profil" onClick={() => setOpen(false)}>Profil</NavLink>
          <NavLink to="/bts_sio" onClick={() => setOpen(false)}>BTS SIO</NavLink>
          <NavLink to="/veille" onClick={() => setOpen(false)}>Veille</NavLink>
          <NavLink to="/experiences" onClick={() => setOpen(false)}>Expériences</NavLink>
          <NavLink to="/projetgta" onClick={() => setOpen(false)}>Projets</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </div>

        {/* Burger */}
        <div className={`burger ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

      </nav>
    </header>
  );
}
