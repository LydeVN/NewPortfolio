import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../assets/maincolors.css";
import "../../../assets/projets/projets.css";
import handichienImg1 from "../../../assets/img/screenhandichien1.png";
import gtaImg1 from "../../../assets/img/screengta1.png";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800 });
    document.title = "Mes Projets | Jules Vannelli";
  }, []);

  return (
    <main className="projects-page my-theme">
      {/* HERO */}
      <section className="projects-hero" data-aos="fade-down">
        <h1>Mes Projets</h1>
        <p>Projets scolaires, en groupe et personnels</p>
      </section>

      {/* =========================
          PROJET GTA
      ========================== */}
      <section className="project-wrap" data-aos="fade-up">
        <header className="project-head">
          <h2>GTA — Gestion de Tâches Agile</h2>
          <p className="project-sub">
            Application web inspirée de Scrum / Agile (Kanban, CRUD, rôles)
          </p>
        </header>

        <div className="project-body">
          <article className="project-step" data-aos="fade-up">
            <h3>Contexte</h3>
            <p>
              GTA est une application web développée dans le cadre du BTS SIO SLAM,
              à l’Institut Supérieur Saint-Denis (Annonay). L’objectif : créer un outil
              de gestion Agile avec un tableau Kanban.
            </p>
          </article>

          <article className="project-step" data-aos="fade-up">
            <h3>Objectifs</h3>
            <ul className="project-list">
              <li>CRUD complet (tâches, user stories, ressources)</li>
              <li>Kanban dynamique (drag & drop)</li>
              <li>Authentification et rôles utilisateurs</li>
              <li>Architecture MVC (Symfony)</li>
              <li>MLD / persistance SQL via PDO</li>
            </ul>
          </article>

          <article className="project-step" data-aos="fade-up">
            <h3>Travail réalisé</h3>
            <p>
              Backend Symfony en PHP orienté objet avec requêtes PDO (sans ORM) + templates Twig.
              Le Kanban est géré en JavaScript pur via l’API drag & drop.
            </p>
          </article>

          <article className="project-step" data-aos="fade-up">
            <h3>Compétences BTS mobilisées</h3>
            <ul className="project-list">
              <li><strong>C1</strong> – Modélisation MCD / MLD</li>
              <li><strong>C1</strong> – Conception de solution</li>
              <li><strong>C1</strong> – Développement métier</li>
              <li><strong>C1</strong> – Persistance des données</li>
              <li><strong>C3</strong> – Interface utilisateur</li>
              <li><strong>C5</strong> – Tests / Validation</li>
            </ul>
          </article>

          <article className="project-step project-media" data-aos="fade-up">
            <h3>Screenshots</h3>
            <div className="media-placeholder">
              <p>📸 Ajoute ici un carrousel / grid de captures pour GTA</p>
              <div className="media-row">
                <div className="media-box2"><img src={gtaImg1} alt="Screenshot GTA" /></div>
                <div className="media-box2">Screenshot #2</div>
                <div className="media-box2">Screenshot #3</div>
              </div>
            </div>
          </article>
        </div>
      </section>
      
      {/* =========================
          PROJET HANDI’CHIENS
      ========================== */}
      <section className="project-wrap" data-aos="fade-up">
        <header className="project-head">
          <h2>Handi’Chiens — Application mobile</h2>
          <p className="project-sub">
            Projet en groupe (React Native + Symfony + base distante), démarré le 24/11/2025
          </p>
        </header>

        <div className="project-body">
          <article className="project-step" data-aos="fade-up">
            <h3>L’association</h3>
            <p>
              <strong>HANDI’CHIENS</strong> éduque et remet gratuitement des chiens d’assistance
              à des personnes en situation de handicap et/ou de vulnérabilité.
            </p>
          </article>

          <article className="project-step" data-aos="fade-up">
            <h3>Organisation & stack</h3>
            <ul className="project-list">
              <li>React Native (mobile)</li>
              <li>
                Symfony (API) — architecture <strong>MVC</strong> + <strong>ORM Doctrine</strong>
              </li>
              <li>Base de données distante</li>
              <li>Git / GitHub / Azure DevOps</li>
              <li>Réunions (sprints) toutes les 2 semaines</li>
            </ul>
          </article>

          <article className="project-step" data-aos="fade-up">
            <h3>Tâches</h3>
            <ul className="project-list">
              <li>
                ✔ Première tâche : page de contact des centres Handi’Chiens (données depuis la base distante)
              </li>
              <li>📌 D’autres tâches seront ajoutées au fil de l’année</li>
            </ul>
          </article>

          <article className="project-step" data-aos="fade-up">
            <h3>Compétences BTS SIO mobilisées</h3>
            <ul className="project-list">
              <li><strong>C1</strong> – Conception de solution (mobile + API)</li>
              <li><strong>C1</strong> – Persistance SQL distante</li>
              <li><strong>C3</strong> – Interface mobile</li>
              <li><strong>C4</strong> – Travail en sprint (réunions régulières)</li>
            </ul>
          </article>

          <article className="project-step project-media" data-aos="fade-up">
            <h3>Screenshots</h3>
            <div className="media-placeholder">
              <div className="media-row">
                <div className="media-box1">
                  <img src={handichienImg1} alt="Page centres handichien" />
                </div>
                {/* <div className="media-box">Écran #2</div> */}
                {/* <div className="media-box">Écran #3</div> */}
              </div>
            </div>
            <p>1 - Écran de la page des centres Handi’Chiens</p>
          </article>
        </div>
      </section>

      
    </main>
  );
}
