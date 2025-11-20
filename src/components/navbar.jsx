import React from "react";
import "../assets/navbar.css"; // Assuming you have corresponding CSS

// navbar components
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="my-theme">
        <div className="menu-items">
          <div className="active">
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="moov hover:animate-jump hover:animate-once">
            <NavLink to="/profil">Profil</NavLink>
          </div>
          <div className="moov hover:animate-jump hover:animate-once">
            <NavLink to="/bts_sio">BTS SIO</NavLink>
          </div>
          <div className="moov hover:animate-jump hover:animate-once">
            <NavLink to="/skills">Compétences</NavLink>
          </div>
          <div className="moov hover:animate-jump hover:animate-once">
            <NavLink to="/experiences">Expériences</NavLink>
          </div>
          <div className="moov hover:animate-jump hover:animate-once">
            <NavLink to="/projets">Projets</NavLink>
          </div>
          <div className="moov hover:animate-jump hover:animate-once">
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
