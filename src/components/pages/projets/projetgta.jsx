import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../assets/maincolors.css";
import "../../../assets/projets/projetgta.css";
import screenshot1 from "../../../assets/img/Screenshot_1.png";


export default function projetGta() {
  useEffect(() => {
    AOS.init({ duration: 800 });
    document.title = "Projet GTA | Jules Vannelli";
  }, []);

  return (
    <main className="project-page my-theme">

      {/* --------- HEADER --------- */}
      <section className="project-hero" data-aos="fade-down">
        <h1>Projet – GTA (Gestion de Tâches Agile)</h1>
        <p>Application web de gestion de projet inspirée d’Agile / Scrum</p>
      </section>

      {/* --------- GRID --------- */}
      <div className="project-grid">

        {/* ---- CONTEXTE ---- */}
        <div className="project-card" data-aos="fade-up">
          <h2>🧭 Contexte</h2>
          <p>
            Développé dans le cadre du BTS SIO SLAM, GTA est une application web
            permettant de gérer des tâches, user stories et ressources selon les
            méthodes Agile/Scrum.
          </p>

          <p>
            L’environnement technique repose sur Symfony, MySQL, Twig et du JavaScript
            simple pour le Kanban. Les contraintes étaient de produire une interface
            claire et fonctionnelle sans frameworks front, tout en respectant un MLD
            strict et un déploiement rapide.
          </p>
        </div>

        {/* ---- OBJECTIFS ---- */}
        <div className="project-card" data-aos="fade-up">
          <h2>🎯 Objectifs</h2>
          <ul className="project-list">
            <li>CRUD complet (tâches, user stories, ressources)</li>
            <li>Workflow Agile (To Do → In Progress → Review → Done)</li>
            <li>Vue Kanban interactive (drag & drop)</li>
            <li>Système d’authentification basé sur les ressources</li>
            <li>Interface sombre, lisible et adaptée aux usages quotidiens</li>
          </ul>
        </div>

        {/* ---- TRAVAIL RÉALISÉ ---- */}
        <div className="project-card" data-aos="fade-up">
          <h2>🛠️ Travail réalisé</h2>
          <p>
            Le projet a été conçu selon une démarche complète : MCD/MLD, cahier des
            charges, développement backend (Symfony sans ORM, PDO pur), intégration
            front avec Twig, et mise en place d’une vue Kanban dynamique.
          </p>
          <p>
            Les classes Repository assurent le CRUD, et une classe Database centralise
            la connexion MySQL. L’interface est responsive, sombre et ergonomique.
          </p>
        </div>

        {/* ---- OUTILS ---- */}
        <div className="project-card" data-aos="fade-up">
          <h2>🧰 Outils & Technologies</h2>
          <ul className="project-list">
            <li>PHP 8, Symfony, PDO</li>
            <li>MySQL, phpMyAdmin</li>
            <li>HTML, CSS, JavaScript</li>
            <li>Twig (templates dynamiques)</li>
            <li>Composer, Symfony CLI</li>
            <li>Git / GitHub</li>
          </ul>
        </div>

        {/* ---- COMPÉTENCES BTS ---- */}
        <div className="project-card" data-aos="fade-up">
          <h2>📚 Compétences mobilisées</h2>
          <ul className="project-list">
            <li><strong>C1.1.2</strong> – Modélisation MCD/MLD</li>
            <li><strong>C1.2.1</strong> – Conception de solution</li>
            <li><strong>C1.3.2</strong> – Développement métier</li>
            <li><strong>C1.4.1</strong> – Persistance SQL</li>
            <li><strong>C2.2.1</strong> – Maintenance applicative</li>
            <li><strong>C3.1.1</strong> – Conception d’interface</li>
            <li><strong>C4.2.1</strong> – Déploiement</li>
          </ul>
        </div>

        {/* ---- RÉSULTATS ---- */}
        <div className="project-card" data-aos="fade-up">
          <h2>📈 Résultats obtenus</h2>
          <p>
            L’application est pleinement fonctionnelle : CRUD complet, Kanban dynamique,
            authentification, formulaires responsive, et interface sombre propre.
          </p>

          <p className="project-note">
            {/* <img src={screenshot1} alt="Capture GTA" className="project-img" /> */}

          </p>
        </div>

        {/* ---- BILAN PERSONNEL ---- */}
        <div className="project-card" data-aos="fade-up">
          <h2>📝 Bilan personnel</h2>
          <p>
            Ce projet m’a permis de comprendre Symfony en profondeur, sans dépendre
            de Doctrine. J’ai gagné en autonomie, en rigueur, et en maîtrise des
            relations SQL complexes.
          </p>
          <p>
            J’ai également appris à gérer les contraintes de déploiement, les erreurs
            MySQL liées aux clés étrangères et la structuration d’un projet complet.
          </p>
        </div>

      </div>
    </main>
  );
}
