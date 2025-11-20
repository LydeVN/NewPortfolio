import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/maincolors.css";
import "../../assets/profil.css";

export default function Profil() {
  useEffect(() => {
    AOS.init({ duration: 800 });
    document.title = "Profil | Jules Vannelli";
  }, []);

  return (
    <main className="profil-page my-theme">

      {/* ---------- HERO ---------- */}
      <section className="profil-hero" data-aos="fade-down">
        <h1>Mon Profil</h1>
        <p>Présentation, Parcours, Expériences & Objectifs</p>
      </section>

      {/* ---------- CONTENEUR DE CARTES ---------- */}
      <div className="profil-grid">

        {/* ----------- A PROPOS ----------- */}
        <div className="profil-card" data-aos="fade-up">
          <h2>👤 À propos de moi</h2>
          <p>
            Je m'appelle <strong>Jules Vannelli</strong>, étudiant en deuxième année
            de <strong>BTS SIO option SLAM</strong> et passionné par le
            développement, la création de projets et l’informatique en général.
          </p>
          <p>
            J’aime apprendre, expérimenter et développer des solutions modernes,
            qu’il s’agisse de sites web, applications, outils techniques ou projets
            personnels liés au jeu vidéo.
          </p>
        </div>

        {/* ----------- COMPÉTENCES ----------- */}
        <div className="profil-card" data-aos="fade-up">
          <h2>⚡ Compétences</h2>
          <ul className="profil-list">
            <li>Développement web (HTML, CSS, JavaScript, React)</li>
            <li>Backend (Node.js, Express)</li>
            <li>Bases de données (SQL, MariaDB)</li>
            <li>Git / GitHub — Workflow & sécurité</li>
            <li>Linux / Serveurs / Administration système</li>
            <li>Création de projets techniques (mods, outils, scripts)</li>
          </ul>
        </div>

        {/* ----------- OBJECTIFS ----------- */}
        <div className="profil-card" data-aos="fade-up">
          <h2>🎯 Objectifs</h2>
          <p>
            Évoluer vers le développement logiciel / full-stack, renforcer mes
            compétences techniques et concevoir des projets de plus en plus
            aboutis, innovants et professionnels.
          </p>
        </div>

        {/* ----------- INTERETS ----------- */}
        <div className="profil-card" data-aos="fade-up">
          <h2>🎮 Centres d'intérêt</h2>
          <ul className="profil-list">
            <li>Jeux vidéo (LoL, Overwatch…) & e-sport</li>
            <li>Modding Minecraft, optimisation serveur</li>
            <li>Développement d’outils techniques</li>
            <li>Exploration des nouvelles technologies</li>
          </ul>
        </div>

      </div>
    </main>
  );
}
