import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../assets/maincolors.css";
import "../../../assets/projets/projetgta.css";

export default function ProjetGta() {
  useEffect(() => {
    AOS.init({ duration: 800 });
    document.title = "Projet GTA | Jules Vannelli";
  }, []);

  return (
    <main className="project-page my-theme">

      {/* ---------- HERO ---------- */}
      <section className="project-hero" data-aos="fade-down">
        <h1>Projet — GTA (Gestion de Tâches Agile)</h1>
        <p>Application web complète inspirée de Scrum / Agile</p>
      </section>

      {/* ---------- CONTENU ---------- */}
      <div className="project-grid">

        {/* -------- CONTEXTE -------- */}
        <div className="project-card" data-aos="fade-up">
          <h2>Contexte du projet</h2>
          <p>
            GTA est une application web développée en BTS SIO SLAM au sein de
            <strong> l’Institut Supérieur Saint-Denis (Annonay)</strong>. 
            Le but était de créer une plateforme de gestion Agile permettant
            d’organiser des tâches sous forme de tableau Kanban interactif.
          </p>
          <p>
            Le projet a été réalisé sans framework front (pas de React/Vue), 
            uniquement avec Symfony, Twig, MySQL et du JavaScript pur, dans un
            environnement technique cadré et orienté pédagogie.
          </p>
        </div>

        {/* -------- OBJECTIFS -------- */}
        <div className="project-card" data-aos="fade-up">
          <h2>Objectifs</h2>
          <ul className="project-list">
            <li>Créer une application structurée suivant une logique MVC (Symfony)</li>
            <li>Mettre en place un tableau Kanban dynamique avec glisser-déposer</li>
            <li>Développer un CRUD complet (tâches, user stories, ressources)</li>
            <li>Gérer l’authentification et les rôles utilisateurs</li>
            <li>Proposer une interface sombre, responsive et ergonomique</li>
            <li>Réaliser un MCD/MLD propre et implémenter la persistance SQL</li>
          </ul>
        </div>

        {/* ---- RÉALISATION ---- */}
        <div className="project-card" data-aos="fade-up">
          <h2>Travail réalisé</h2>
          <p>
            Le projet a suivi une démarche complète : analyse, modélisation des données
            (MCD/MLD), conception fonctionnelle, développement backend, puis intégration
            front. Le Kanban a été codé manuellement en JavaScript grâce à l’API drag & drop.
          </p>

          <p>
            Les entités et repositories ont été développés sans Doctrine, en PHP orienté objet
            et requêtes PDO sécurisées. La structure MVC et les templates Twig assurent la
            cohérence visuelle et technique.
          </p>
        </div>

        {/* ---- OUTILS ---- */}
        <div className="project-card" data-aos="fade-up">
          <h2>Outils & Technologies</h2>
          <ul className="project-list">
            <li>Symfony (sans Doctrine)</li>
            <li>PHP 8 / PDO / POO</li>
            <li>MySQL / MCD / MLD</li>
            <li>HTML • CSS • JavaScript pur</li>
            <li>Twig (templating)</li>
            <li>Git / GitHub</li>
          </ul>
        </div>

        {/* ---- COMPÉTENCES BTS ---- */}
        <div className="project-card" data-aos="fade-up">
          <h2>Compétences du BTS SIO SLAM mobilisées</h2>
          <ul className="project-list">

            <li>
              <strong>C1.1.2 – Modélisation</strong> : création du MCD/MLD,
              schémas relationnels, organisation des tables.
            </li>

            <li>
              <strong>C1.2.1 – Conception de solution</strong> :
              définition du workflow Agile et architecture MVC.
            </li>

            <li>
              <strong>C1.3.2 – Développement métier</strong> :
              classes métier, repositories, transitions Kanban.
            </li>

            <li>
              <strong>C1.4.1 – Persistance des données</strong> :
              requêtes préparées PDO, gestion des clés étrangères.
            </li>

            <li>
              <strong>C2.2.1 – Maintenance applicative</strong> :
              corrections SQL, ajustements front/back, debug Kanban.
            </li>

            <li>
              <strong>C3.1.1 – Interface utilisateur</strong> :
              vues Twig, responsive design, ergonomie sombre.
            </li>

            <li>
              <strong>C4.1.1 – Analyse</strong> :
              définition des besoins (tâches, stories, statuts).
            </li>

            <li>
              <strong>C4.1.2 – Planification</strong> :
              organisation en itérations (CRUD → Kanban → Auth).
            </li>

            <li>
              <strong>C5.1.4 – Tests et validation</strong> :
              vérification des transitions, cohérence CRUD, rôles utilisateurs.
            </li>

            <li>
              <strong>C6.1.1 – Autoformation</strong> :
              apprentissage Symfony sans ORM, meilleure maîtrise SQL avancée.
            </li>
          </ul>
        </div>

        {/* ---- BILAN ---- */}
        <div className="project-card" data-aos="fade-up">
          <h2>Bilan personnel</h2>
          <p>
            Ce projet m’a permis de comprendre Symfony en profondeur, notamment
            sans Doctrine, ce qui m’a obligé à gérer moi-même la persistance SQL.
          </p>

          <p>
            J’ai développé une meilleure rigueur dans l'architecture logicielle, 
            la modélisation, la manipulation de données et la gestion de projet.
            GTA a renforcé mes compétences full-stack, tant sur la partie backend
            que sur la construction d’une interface claire et moderne.
          </p>
        </div>

      </div>
      <div className="anex-screen">Caroussel de screenshots</div>
    </main>
  );
}
