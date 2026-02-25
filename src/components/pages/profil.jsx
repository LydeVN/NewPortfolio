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

      {/* ---------- BENTO GRID ---------- */}
      <div className="profil-grid">
        
        {/* À PROPOS - LARGE CARD */}
        <div className="profil-card grid-span-2" data-aos="fade-up">
          <h2>L'Explorateur Numérique</h2>
          <p>
            Mon parcours est une quête de compréhension. De la rigueur analytique du <strong>Droit</strong> à l'esthétique de l'<strong>Art du Spectacle</strong>, j'ai finalement trouvé mon point d'ancrage dans l'informatique. 
          </p>
          <p>
            Je ne me contente pas de coder : je cherche à comprendre le "pourquoi" derrière chaque technologie. Que ce soit en manipulant mes propres serveurs ou en concevant des systèmes complexes, je vois le développement comme un artisanat moderne où chaque ligne de code répond à un besoin de création et de maîtrise.
          </p>
          <div className="vibe-tags">
            <span>Créatif</span> <span>Rêveur</span> <span>Flexible</span> <span>Curieux</span>
          </div>
        </div>

        {/* SETUP & INFRA */}
        <div className="profil-card" data-aos="fade-up" data-aos-delay="100">
          <h2>Architecte & Artisan</h2>
          <p>
            J'aime autant découvrir de nouveaux horizons comme <strong>Docker</strong> ou <strong>Vite</strong> que bâtir des architectures solides. Mon propre serveur est mon laboratoire où je teste, casse et reconstruis pour mieux apprendre.
          </p>
        </div>

        {/* STREAM & TOOLS */}
        <div className="profil-card" data-aos="fade-up" data-aos-delay="200">
          <h2>Stream & Dev</h2>
          <p>
            Le stream est mon espace de partage. Je développe mes propres <strong>solutions de diffusion</strong> et outils vidéo personnalisés pour transformer ma passion pour l'image en expériences interactives uniques.
          </p>
        </div>

        {/* COMPETENCES WEB */}
        <div className="profil-card" data-aos="fade-up">
          <h2>Web Stack</h2>
          <ul className="profil-list">
            <li>React.js (Vite)</li>
            <li>Node.js / Express</li>
            <li>Symfony & PHP</li>
            <li>API REST & Git</li>
          </ul>
        </div>

        {/* LOGICIEL & CYBER */}
        <div className="profil-card" data-aos="fade-up" data-aos-delay="100">
          <h2>Logiciel & Cyber</h2>
          <ul className="profil-list">
            <li>C# (POO & WPF)</li>
            <li>Entity Framework</li>
            <li>Scripts PowerShell (Cyber)</li>
            <li>Automatisation VBA</li>
          </ul>
        </div>

        {/* PASSIONS - LARGE CARD */}
        <div className="profil-card grid-span-2" data-aos="fade-up" data-aos-delay="200">
          <h2>Au-delà de l'écran</h2>
          <p>
            Quand je ne suis pas sur un projet, je suis probablement sur <strong>Valorant</strong>, <strong>League of Legends</strong>, ou en train d'explorer les rues de <strong>Cyberpunk 2077</strong>. 
          </p>
          <p>
            Grand fan de <strong>Star Wars</strong> (oui, je coche toutes les cases du cliché, mais j'assume !), je suis aussi un passionné d'<strong>échecs</strong>. Ce jeu m'apprend la stratégie et la patience, des qualités que je réinjecte chaque jour dans mes lignes de code.
          </p>
        </div>

      </div>
      {/* BARRE DE SÉPARATION */}
      {/* <div className="profil-divider" data-aos="zoom-in"></div> */}
      {/* ----------- PARCOURS SCOLAIRE & PRO ----------- */}
      <div className="monParcours">
        <section className="profil-section-full" data-aos="fade-up">
          <h2 className="section-title">Mon Parcours scolaire</h2>
          <div className="timeline">
            {/* Expérience 1 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>2024 - Présent</span>
                <h3>BTS SIO (Option SLAM)</h3>
                <p>
                  Expertise en solutions logicielles et applications métiers.
                  Apprentissage approfondi du C#, du développement Web et de la
                  gestion de projets SI.
                </p>
              </div>
            </div>

            {/* Expérience 2 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>2023 - 2024</span>
                <h3>1ère année Licence Art du spectacle | Grenoble</h3>
                <p>
                  Spécialité cinéma, j'ai découvert les bases du cinéma, son
                  histoire et ses techniques de production.
                </p>
              </div>
            </div>

            {/* Expérience 3 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>2022 - 2023</span>
                <h3>1 année Licence de Droit | Valence</h3>
                <p>
                  Etude du droit visant à aquérir une connaissance approfondie
                  des fondements juridiques et des principes de la justice
                  française et intérnationnale.
                </p>
              </div>
            </div>

            {/* Expérience 3 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>2022</span>
                <h3>
                  Baccalauréat général - Spécialités Sciences Economiques et
                  Sociales, Histoire Géo - Géopolotique et Sciences Politiques
                </h3>
                <p></p>
              </div>
            </div>

            {/* Ajoute d'autres étapes ici (Stages, jobs, etc.) */}
          </div>
        </section>

        {/* BARRE DE SÉPARATION */}
        {/* <div className="profil-divider" data-aos="zoom-in"></div> */}
        {/* ----------- PARCOURS SCOLAIRE & PRO ----------- */}
        <section className="profil-section-full" data-aos="fade-up">
          <h2 className="section-title">Mon Parcours Pro</h2>
          <div className="timeline">
            {/* Expérience 1 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>Janvier 2026</span>
                <h3>Stage de 2ème année de BTS SIO | EDF, Flamanville</h3>
                <p>
                  Stage de fin d'études en entreprise. J'ai pu découvrir les
                  métiers de l'énergie et de l'ingénierie dans un environnement
                  professionnel. J'ai participé à des projets d'automatisation
                  et de maintenance de systèmes informatiques. Ainsi que des
                  scripts PowerShell de démonstration de cyber-attaque et des
                  scripts VBA.
                </p>
              </div>
            </div>

            {/* Expérience 2 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>Mai - Juin 2025</span>
                <h3>Stage de 1ère année de BTS SIO | Dev-Id, Marseille</h3>
                <p>
                  J'ai pu découvrir tous les aspects du développement logiciel
                  et de la gestion de projets informatiques dans un
                  environnement professionnel. J'étais principalement sur du
                  développement de jeux vidéos via Unity.
                </p>
              </div>
            </div>

            {/* Expérience 3 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>Juillet 2023</span>
                <h3>
                  Stage de un mois dans une association | Au Panier Solidaire,
                  Roubaix
                </h3>
                <p>
                  Travail en autonomie, gestion de la logistique et de la
                  distribution des produits alimentaires à destination des
                  personnes en difficulté.J'étais principalement en charge de la
                  réception et du tri des produits.
                </p>
              </div>
            </div>

            {/* Expérience 3 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>2022</span>
                <h3>Stage de troisième en grande surface Super U</h3>
                <p>
                  En charge de la gestion des stocks et de l'organisation des
                  rayons. mes taches étaient variées et exigeantes.
                </p>
              </div>
            </div>

            {/* Ajoute d'autres étapes ici (Stages, jobs, etc.) */}
          </div>
        </section>
      </div>
      <section
        className="profil-section-full myPerspectives"
        data-aos="fade-up"
      >
        <h2 className="section-title">Mes perspectives</h2>

        <div className="perspectives-container">
          {/* Bulle 1 : Le Graal Hybride */}
          <div
            className="perspective-bubble bubble-large"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <h3>Expertise Technique</h3>
            <p>
              Évoluer vers l'ingénierie en <strong>Cyber-Sécurité</strong> ou le{" "}
              <strong>Développement de Jeux Vidéo</strong> avancé, en alliant
              performance et protection des données.
            </p>
          </div>

          {/* Bulle 2 : L'aspect Serveur / Infra */}
          <div
            className="perspective-bubble bubble-medium"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <h3>Infrastructure & DevOps</h3>
            <p>
              Maîtrise de l'architecture serveur et conteneurisation avec{" "}
              <strong>Docker</strong>. Gestion et manipulation d'environnements
              auto-hébergés.
            </p>
          </div>

          {/* Bulle 3 : Création d'outils (Le côté Content Creator) */}
          <div
            className="perspective-bubble bubble-small"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3>Outils Dynamiques</h3>
            <p>
              Conception de <strong>bots Discord</strong> et sites web
              utilitaires pour optimiser la création de contenu et le streaming.
            </p>
          </div>

          {/* Bulle 4 : Freelance / Agile */}
          <div
            className="perspective-bubble bubble-medium"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <h3>Indépendance & Agilité</h3>
            <p>
              Privilégier un mode de travail{" "}
              <strong>Freelance / Entrepreneur</strong> en mode Agile, pour
              garder la liberté de créer et d'innover.
            </p>
          </div>

          {/* Bulle 5 : Tech Stack */}
          <div
            className="perspective-bubble bubble-small"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3>Modern Stack</h3>
            <p>
              Perfectionnement continu sur <strong>React (Vite)</strong>,{" "}
              <strong>Symfony</strong> et les frameworks émergents.
            </p>
          </div>

          {/* Bulle 6 : Le Projet Rêvé */}
          <div
            className="perspective-bubble bubble-large"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <h3>Indie Game Dev</h3>
            <p>
              L'objectif ultime : concevoir et{" "}
              <strong>développer mon propre jeu vidéo</strong>, de
              l'architecture technique au gameplay final.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
