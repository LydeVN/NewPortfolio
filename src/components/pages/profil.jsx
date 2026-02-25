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
            <li>Manipulations serveur</li>
            <li>Jeux vidéo (LoL, Valorant) & e-sport</li>
            <li>Tech, innovation et nouveaux frameworks</li>
          </ul>
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
              <p>Expertise en solutions logicielles et applications métiers. Apprentissage approfondi du C#, du développement Web et de la gestion de projets SI.</p>
            </div>
          </div>

          {/* Expérience 2 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span>2023 - 2024</span>
              <h3>1ère année Licence Art du spectacle | Grenoble</h3>
              <p>Spécialité cinéma, j'ai découvert les bases du cinéma, son histoire et ses techniques de production.</p>
            </div>
          </div>

          {/* Expérience 3 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span>2022 - 2023</span>
              <h3>1 année Licence de Droit | Valence</h3>
              <p>Etude du droit visant à aquérir une connaissance approfondie des fondements juridiques et des principes de la justice française et intérnationnale.</p>
            </div>
          </div>

          {/* Expérience 3 */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span>2022</span>
              <h3>Baccalauréat général - Spécialités Sciences Economiques et Sociales, Histoire Géo - Géopolotique et Sciences Politiques</h3>
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
                <span>2024 - Présent</span>
                <h3>Stage de 2ème année de BTS SIO | EDF, Flamanville</h3>
                <p>Stage de fin d'études en entreprise. J'ai pu découvrir les métiers de l'énergie et de l'ingénierie dans un environnement professionnel. J'ai participé à des projets d'automatisation et de maintenance de systèmes informatiques. Ainsi que des scripts PowerShell de démonstration de cyber-attaque et des scripts VBA.</p>
              </div>
            </div>

            {/* Expérience 2 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>2023 - 2024</span>
                <h3>Stage de 1ère année de BTS SIO | Dev-Id, Marseille</h3>
                <p>J'ai pu découvrir tous les aspects du développement logiciel et de la gestion de projets informatiques dans un environnement professionnel. J'étais principalement sur du développement de jeux vidéos via Unity.</p>
              </div>
            </div>

            {/* Expérience 3 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>2022 - 2023</span>
                <h3>Stage de un mois dans une association | Au Panier Solidaire, Roubaix</h3>
                <p>Travail en autonomie, gestion de la logistique et de la distribution des produits alimentaires à destination des personnes en difficulté.J'étais principalement en charge de la réception et du tri des produits.</p>
              </div>
            </div>

            {/* Expérience 3 */}
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span>2022</span>
                <h3>Stage de troisième en grande surface Super U</h3>
                <p>En charge de la gestion des stocks et de l'organisation des rayons. mes taches étaient variées et exigeantes.</p>
              </div>
            </div>

            {/* Ajoute d'autres étapes ici (Stages, jobs, etc.) */}

          </div>
        </section>
      </div>
    </main>
  );
}
