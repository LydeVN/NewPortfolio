import React, { useState } from "react";
import "../assets/navbar.css";
import { NavLink } from "react-router-dom";
import PictureOfMe from "../assets/img/pp.png";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="neon-header my-theme">
      <div className="neon-line"></div>

      <nav className="navbar">
        {/* Burger (header) — sert uniquement quand le menu est fermé */}
        <button
          type="button"
          className={`burger burger-header ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Logo */}
        <div className="nav-logo">
          <NavLink to="/" onClick={() => setOpen(false)}>
            <img src={PictureOfMe} alt="Accueil" />
          </NavLink>
        </div>

        {/* Overlay (clic pour fermer) */}
        <div
          className={`nav-overlay ${open ? "show" : ""}`}
          onClick={() => setOpen(false)}
        />

        {/* Pill menu */}
        <div className={`nav-links ${open ? "open" : ""}`}>
          <button
            type="button"
            className={`burger burger-inmenu ${open ? "active" : ""}`}
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="nav-scroll">
            <NavLink to="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/profil" onClick={() => setOpen(false)}>
              Profile
            </NavLink>
            <NavLink to="/bts_sio" onClick={() => setOpen(false)}>
              BTS SIO
            </NavLink>
            <NavLink to="/veille" onClick={() => setOpen(false)}>
              Veille
            </NavLink>
            <NavLink to="/experiences" onClick={() => setOpen(false)}>
              Expériences
            </NavLink>
            <NavLink to="/Projets" onClick={() => setOpen(false)}>
              Projets
            </NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
