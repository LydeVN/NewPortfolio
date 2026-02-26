import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/maincolors.css";
import "../../assets/experiences.css";
import BadUsbImg from "../../assets/img/screenBadUsb.png";

export default function Experiences() {
  useEffect(() => {
    AOS.init({ duration: 800 });
    document.title = "Mes expériences | Jules Vannelli";
  }, []);

  return (
    <main className="projects-page my-theme">
      {/* HERO SECTION OPTIONNELLE */}
      <section className="projects-hero" data-aos="fade-down">
        <h1>Mes Expériences</h1>
        <p>Parcours professionnel et stages en entreprise</p>
      </section>

      {/* =========================
          STAGE 2 : EDF (2026)
      ========================== */}
      <section className="project-wrap" data-aos="fade-up">
        <header className="project-head">
          <span className="stage-badge">Stage de 2ème année</span>
          <h2>EDF — CNPE Flamanville 3 (EPR)</h2>
          <p className="project-sub">
            Cybersécurité & Automatisation au sein du réacteur le plus puissant de France
          </p>
        </header>

        <div className="project-body">
          <article className="project-step" data-aos="fade-up">
            <h3>Contexte & Missions</h3>
            <p>
              Immersion au sein de la MOA SI de l'EPR de Flamanville (1650 MW). 
              Participation active à la sécurisation des systèmes et à l'optimisation des flux de données inter-services.
            </p>
          </article>

          <article className="project-step" data-aos="fade-up">
            <h3>Cybersécurité Préventive</h3>
            <ul className="project-list">
              <li><strong>BadUSB :</strong> Développement d'un script Arduino (C++) simulant une attaque HID (clavier) pour exfiltrer des données via Webhook Discord.</li>
              <li><strong>Audit Kali Linux :</strong> Mise en place de démos de Phishing et Brute Force pour la sensibilisation des agents.</li>
            </ul>
          </article>

          <article className="project-step" data-aos="fade-up">
            <h3>Développement & Terrain</h3>
            <ul className="project-list">
              <li><strong>VBA :</strong> Automatisation de la consolidation de données pour les services de maintenance.</li>
              <li><strong>Immersion :</strong> Visites quotidiennes des installations (Salle des machines, Zone contrôlée, CCL).</li>
            </ul>
          </article>

          <article className="project-step project-media" data-aos="fade-up">
            <h3>Visuels</h3>
            <div className="media-placeholder">
              <div className="media-row">
                <div className="media-box2">
                  {/* <p>Screenshot du code Arduino / Photos du site (EPI)</p> */}
                  <img src={BadUsbImg} alt="Screenshot du début du script badUSB" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =========================
          STAGE 1 : À REMPLIR
      ========================== */}
      <section className="project-wrap" data-aos="fade-up">
        <header className="project-head">
          <span className="stage-badge">Stage de 1ère année</span>
          <h2>[Nom de l'etreprise]</h2>
          <p className="project-sub">Description courte du stage</p>
        </header>

        <div className="project-body">
          <article className="project-step" data-aos="fade-up">
            <h3>Missions réalisées</h3>
            <ul className="project-list">
              <li>Mission 1 : Description</li>
              <li>Mission 2 : Technologie utilisée</li>
              <li>Mission 3 : Résultat obtenu</li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}