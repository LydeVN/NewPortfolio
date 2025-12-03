import React, { useState } from "react";
import "../assets/navbar.css";
import { NavLink } from "react-router-dom";
import PictureOfMe from "../assets/img/pp.png"

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="neon-header my-theme">

      <div className="neon-line"></div>

      <nav className="navbar">

        {/* Burger always present but hidden on desktop */}
        <div
          className={`burger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="nav-logo"><a href="/"><img src={PictureOfMe}></img></a></div>

        <div className={`nav-links ${open ? "open" : ""}`}>
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
