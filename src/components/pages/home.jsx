import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/maincolors.css";
import "../../assets/home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";
import me from "../../assets/img/me.jpg";

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 800 });
    document.title = "Home | Jules Vannelli";
  }, []);

  return (
    <main className="home-page my-theme">

      {/* --- TITRE --- */}
      <section className="home-hero" data-aos="fade-down">
        <img src={me} alt="Portrait de Jules Vannelli" className="home-portrait" />
        <h1 className="home-title">Jules Vannelli</h1>
        <p className="home-subtitle">Développeur & passionné d'informatique</p>
      </section>

      {/* --- SOCIAL --- */}
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
        </div>

        {/* --- BOUTON CV --- */}
        <button className="cssbuttons-io-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M1 14.5a6.496 6.496 0 0 1 3.064-5.519 8.001 8.001 0 0 1 15.872 0 6.5 6.5 0 0 1-2.936 12L7 21c-3.356-.274-6-3.078-6-6.5zm15.848 4.487a4.5 4.5 0 0 0 2.03-8.309l-.807-.503-.12-.942a6.001 6.001 0 0 0-11.903 0l-.12.942-.805.503a4.5 4.5 0 0 0 2.029 8.309l.173.013h9.35l.173-.013zM13 12h3l-4 5-4-5h3V8h2v4z"
            ></path>
          </svg>
          <span>CV</span>
        </button>

        {/* Bouton Page Suivante */}
        {/* <NavLink to="/profil">
          <button id="next-page-button">Page suivante</button>
        </NavLink> */}
      </section>

    </main>
  );
}
