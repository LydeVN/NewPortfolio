import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/maincolors.css";
import "../../assets/home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";
import me from "../../assets/img/me.jpg";
import CV from "../../docs/CV_JulesVannelli.pdf";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800 });
    document.title = "Home | Jules Vannelli";
  }, []);

  return (
    <main className="home-page my-theme">
      {/* --- TITRE --- */}
      <section className="home-hero" data-aos="fade-down">
        <img
          src={me}
          alt="Portrait de Jules Vannelli"
          className="home-portrait"
        />
        <h1 className="home-title">Jules Vannelli</h1>
        <div className="home-subtitle">Développeur & passionné d'informatique</div>
      </section>

      {/* --- SOCIAL & CV --- */}
      <section className="mid-container" data-aos="fade-up">
        <div className="social-icons">
          <a href="https://www.instagram.com/jules.vnl/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://x.com/LydeVN" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.github.com/LydeVN" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/jules-van-253830318/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        <button
          className="cssbuttons-io-button"
          onClick={() => {
            const link = document.createElement("a");
            link.href = CV;
            link.download = "CV_JulesVannelli.pdf";
            link.click();
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path fill="currentColor" d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"></path>
          </svg>
          <span>Télécharger le CV</span>
        </button>
      </section>

      {/* --- NAVIGATION DIRECTE --- */}
      <section className="home-navigation" data-aos="fade-up" data-aos-delay="200">
        <h2 className="nav-section-title">Explorer mon portfolio</h2>
        <div className="nav-grid">
          <NavLink to="/profil" className="nav-card">
            <i className="fa-solid fa-user-astronaut"></i>
            <h3>Profil</h3>
            <p>En savoir plus sur moi</p>
          </NavLink>

          <NavLink to="/projets" className="nav-card">
            <i className="fa-solid fa-code"></i>
            <h3>Projets</h3>
            <p>Mes réalisations majeures</p>
          </NavLink>

          <NavLink to="/experiences" className="nav-card">
            <i className="fa-solid fa-briefcase"></i>
            <h3>Expériences</h3>
            <p>Mon parcours professionnel</p>
          </NavLink>

          <NavLink to="/contact" className="nav-card">
            <i className="fa-solid fa-paper-plane"></i>
            <h3>Contact</h3>
            <p>Discutons de vos projets</p>
          </NavLink>
        </div>
      </section>
    </main>
  );
}