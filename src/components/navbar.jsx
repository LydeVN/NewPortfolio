import React, { useState } from "react";
import "../assets/navbar.css";
import { NavLink } from "react-router-dom";
import PictureOfMe from "../assets/img/pp.png";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="neon-header my-theme">
      <nav className="navbar">
        {/* Logo à gauche */}
        <div className="nav-logo">
          <NavLink to="/" onClick={() => setOpen(false)}>
            <img src={PictureOfMe} alt="Accueil" />
          </NavLink>
        </div>

        {/* Bouton Burger (Desktop masqué, visible sur Mobile) */}
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

        {/* Overlay pour fermer au clic en dehors */}
        <div
          className={`nav-overlay ${open ? "show" : ""}`}
          onClick={() => setOpen(false)}
        />

        {/* Menu de navigation (Aligné à droite) */}
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
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/profil" onClick={() => setOpen(false)}>Profil</NavLink>
            <NavLink to="/bts_sio" onClick={() => setOpen(false)}>BTS SIO</NavLink>
            <NavLink to="/veille" onClick={() => setOpen(false)}>Veille</NavLink>
            <NavLink to="/experiences" onClick={() => setOpen(false)}>Expériences</NavLink>
            <NavLink to="/projets" onClick={() => setOpen(false)}>Projets</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}