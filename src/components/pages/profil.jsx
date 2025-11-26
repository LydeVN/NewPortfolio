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
        <p>Développement, créations techniques & exploration du numérique</p>
      </section>

      {/* ---------- GRID ---------- */}
      <div className="profil-grid">

        {/* ----------- A PROPOS ----------- */}
        <div className="profil-card" data-aos="fade-up">
          <h2>À propos de moi</h2>
          <p>
            Je m'appelle <strong>Jules Vannelli</strong>, étudiant en deuxième année
            de <strong>BTS SIO option SLAM</strong>. Je suis passionné par la
            création de solutions numériques : développement web, applications,
            outils techniques et scripts spécialisés.
          </p>
          <p>
            Mon objectif est de devenir développeur polyvalent, capable de travailler
            à la fois sur des applications web, logicielles et des projets techniques
            plus complexes.
          </p>
        </div>

        {/* ----------- COMPÉTENCES WEB ----------- */}
        <div className="profil-card" data-aos="fade-up">
          <h2>Développement Web</h2>
          <ul className="profil-list">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js</li>
            <li>Node.js / Express</li>
            <li>API REST</li>
            <li>Gestion de projets Git / GitHub</li>
          </ul>
        </div>

        {/* ----------- COMPÉTENCES LOGICIELLES ----------- */}
        <div className="profil-card" data-aos="fade-up">
          <h2>Développement Logiciel</h2>
          <ul className="profil-list">
            <li>C# (POO, architecture, bonnes pratiques)</li>
            <li>WPF (interfaces graphiques modernes)</li>
            <li>ORM (Entity Framework, migrations, requêtes LINQ)</li>
            <li>Applications desktop interactives</li>
          </ul>
        </div>

        {/* ----------- SCRIPTS & AUTOMATION ----------- */}
        <div className="profil-card" data-aos="fade-up">
          <h2>Scripts & Automatisation</h2>
          <ul className="profil-list">
            <li>Scripts pour outils personnalisés</li>
            <li>Automatisation de tâches techniques</li>
            <li>Scripts pour serveurs / monitoring</li>
            <li>Modding & outils dans l’écosystème gaming</li>
          </ul>
        </div>

        {/* ----------- OBJECTIFS ----------- */}
        <div className="profil-card" data-aos="fade-up">
          <h2>Objectifs</h2>
          <p>
            Développer davantage mes compétences en <strong>développement logiciel</strong>,
            approfondir le <strong>C#, les patterns d’architecture</strong> et élargir mes
            capacités en <strong>applications full-stack</strong>.
          </p>
          <p>
            Je souhaite également poursuivre le développement d’outils techniques
            avancés liés au jeu vidéo, à l’automatisation et à la création de projets
            innovants.
          </p>
        </div>

        {/* ----------- INTERETS ----------- */}
        <div className="profil-card" data-aos="fade-up">
          <h2>Centres d'intérêt</h2>
          <ul className="profil-list">
            <li>Développement d’outils et scripts techniques</li>
            <li>Modding Minecraft et optimisation serveur</li>
            <li>Jeux vidéo (LoL, Overwatch…) & e-sport</li>
            <li>Tech, innovation et nouveaux frameworks</li>
          </ul>
        </div>

      </div>
    </main>
  );
}
