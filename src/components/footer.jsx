import React from "react";
import { NavLink } from "react-router-dom";
import PictureOfMe from "../assets/img/pp.png";
import "../assets/footer.css";

const Footer = () => {
  return (
    <footer className="footer-container my-theme">
      <div className="footer-content">
        
        {/* Colonne 1 : Branding */}
        <div className="footer-section brand">
          <img src={PictureOfMe} alt="Jules Vannelli" className="footer-logo" />
          <h3>Jules Vannelli</h3>
          <div className="footer-description">Étudiant en BTS SIO</div>
        </div>

        {/* Colonne 2 : Liens rapides */}
        <div className="footer-section links">
          <h4>Navigation</h4>
          <nav className="footer-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profil">Profile</NavLink>
            <NavLink to="/veille">Veille</NavLink>
            <NavLink to="/Projets">Projets</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>

        {/* Colonne 3 : Réseaux */}
        <div className="footer-section social">
          <h4>Réseaux</h4>
          <div className="footer-nav">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="neon-line-footer"></div>
        <div className="copyright-text">© 2026 Jules Vannelli. Tous droits réservés.</div>
      </div>
    </footer>
  );
};

export default Footer;