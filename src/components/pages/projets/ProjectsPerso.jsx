import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../assets/maincolors.css";
import "../../../assets/projets/projets.css";
import BackButton from "../../backbutton";
import { NavLink } from "react-router-dom";

export default function ProjectsPerso() {
  useEffect(() => {
    AOS.init({ duration: 800 });
    document.title = "Projets Personnels | Jules Vannelli";
  }, []);

  return (
    <main className="projects-page my-theme">
      <NavLink to="/projets">
        <BackButton />
      </NavLink>
      {/* HERO */}
      <section className="projects-hero" data-aos="fade-down">
        <h1>Labo & Créations</h1>
        <p className="hero-description">
          Développeur par passion, j'explore le monde du jeu vidéo et des outils
          connectés. Chaque projet est un terrain d'expérimentation pour
          maîtriser de nouvelles technologies.
        </p>
      </section>

      {/* =========================
          PROJET 1 : LYBOT & ECOSYSTEME
      ========================== */}
      <section className="project-wrap" data-aos="fade-up">
        <header className="project-head">
          <h2>LyBot — Automatisation & Communauté</h2>
          <div className="project-sub">Node.js | Discord.js | API Twitch</div>
        </header>

        <div className="project-body">
          <div className="project-visual-grid">
            {/* Emplacement pour ton screenshot Lydecorp */}
            <div className="project-img-placeholder">
              <div className="img-caption">Aperçu Lydecorp / Dashboard</div>
            </div>
          </div>

          <article className="project-step" data-aos="fade-up">
            <h3>Le Défi</h3>
            <p className="narrative-text">
              Gérer une communauté et un serveur Discord demande du temps. Je
              voulais un outil sur-mesure, capable d'interagir non seulement
              avec les membres, mais aussi avec mon flux de streaming et mon
              serveur VPS.
            </p>
          </article>

          <article className="project-step" data-aos="fade-up">
            <h3>Ma Solution</h3>
            <p className="narrative-text">
              J'ai développé <strong>LyBot</strong>, un bot robuste en Node.js.
              Il ne se contente pas de modérer : il communique avec des
              extensions Twitch pour créer une interaction en temps réel. J'ai
              également mis en place un site web (Lydecorp) permettant de
              centraliser les informations et d'interagir avec la communauté via
              des outils dédiés.
            </p>
          </article>

          <article className="project-step" data-aos="fade-up">
            <h3>Ce que j'ai appris</h3>
            <ul className="project-list">
              <li>Gestion des événements asynchrones avec Discord.js.</li>
              <li>
                Consommation d'API tierces (Twitch, Riot, statistiques de jeux).
              </li>
              <li>Déploiement et maintenance sur un serveur VPS personnel.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* =========================
          PROJET 2 : GAME DEV & AMBITIONS
      ========================== */}
      <section className="project-wrap" data-aos="fade-up">
        <header className="project-head">
          <h2>Game Development — Une Vocation</h2>
          <div className="project-sub">Unity | C# | Itch.io | Vision 3D</div>
        </header>

        <div className="project-body">
          <div className="project-visual-grid">
            <div className="project-img-placeholder">
              <div className="img-caption">Démo de mes univers sur Itch.io</div>
            </div>
          </div>

          <article className="project-step" data-aos="fade-up">
            <h3>Plus qu'une passion, un objectif de vie</h3>
            <p className="narrative-text">
              Développer des jeux vidéo est pour moi l'aboutissement de la
              programmation. C’est là que le code rencontre l’art et l’émotion.
              Depuis mes premiers pas sur <strong>Pong</strong>
              jusqu'à la création de systèmes de <strong>RPG complexes</strong>,
              mon but a toujours été le même : comprendre comment créer une
              expérience immersive qui marque les joueurs.
            </p>
          </article>

          <article className="project-step" data-aos="fade-up">
            <h3>Vers la 3D et le "Grand Projet"</h3>
            <p className="narrative-text">
              Aujourd'hui, je me plonge dans les mathématiques vectorielles et
              la physique d'Unity pour franchir le cap de la 3D. Mon ambition
              ultime est de développer un jeu{" "}
              <strong>abouti et mémorable</strong>, un titre qui ne soit pas
              juste un prototype, mais une œuvre complète avec sa propre
              identité visuelle et mécanique. Chaque petit projet sur lequel je
              travaille actuellement est une brique qui construit cette
              expertise future.
            </p>
          </article>

          <article className="project-step" data-aos="fade-up">
            <h3>Compétences & Vision</h3>
            <ul className="project-list">
              <li>
                <strong>Architecture :</strong> Conception de systèmes évolutifs
                (Inventaires, IA, combats).
              </li>
              <li>
                <strong>Interactivité :</strong> Création d'interfaces (UI)
                fluides pour une UX immersive.
              </li>
              <li>
                <strong>Rigueur :</strong> Optimisation des performances pour
                garantir la fluidité du gameplay.
              </li>
              <li>
                <strong>Apprentissage :</strong> Veille constante sur les
                nouvelles techniques de rendu et de Game Design.
              </li>
            </ul>
          </article>
        </div>
      </section>

      {/* =========================
          PROJET 3 : OUTILS DE STREAM & WEB
      ========================== */}
      <section className="project-wrap" data-aos="fade-up">
        <header className="project-head">
          <h2>Stream Tools — Overlay Dynamiques</h2>
          <div className="project-sub">React | WebSockets | API Live Stats</div>
        </header>

        <div className="project-body">
          <div className="project-visual-grid">
            {/* Emplacement pour ton screenshot Portfolio / Tools */}
            <div className="project-img-placeholder">
              <div className="img-caption">Overlay en action / Stats Live</div>
            </div>
          </div>

          <article className="project-step" data-aos="fade-up">
            <h3>L'idée</h3>
            <p className="narrative-text">
              Améliorer la qualité de mes streams en créant des outils qui
              n'existent pas sur le marché. L'objectif était d'afficher des
              statistiques de jeu en temps réel directement sur le live sans
              intervention manuelle.
            </p>
          </article>

          <article className="project-step" data-aos="fade-up">
            <h3>Réalisation</h3>
            <p className="narrative-text">
              Utilisation de React pour créer des overlays légers et dynamiques.
              Je récupère les données via des API de jeux (ou scraping de logs)
              pour les transformer en visuels attractifs. J'ai également réalisé
              des petits bots et sites pour des clients tiers répondant à des
              besoins spécifiques de manipulation de données.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
