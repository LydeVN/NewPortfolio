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
      {/* HERO SECTION */}
      <section className="projects-hero" data-aos="fade-down">
        <h1>Mes Expériences</h1>
        <p>Parcours professionnel et immersions en milieu industriel</p>
      </section>

{/* =========================
          STAGE 2 : EDF (2026)
      ========================== */}
      <section className="project-wrap" data-aos="fade-up">
        <header className="project-head">
          <span className="stage-badge">Stage de 2ème année</span>
          <h2>EDF — CNPE Flamanville 3 (EPR)</h2>
          <p className="project-sub">
            Cybersécurité & Appui MOA SI au sein du réacteur le plus puissant de France
          </p>
        </header>

        <div className="project-body">
          {/* 1. CONTEXTE */}
          <article className="project-step" data-aos="fade-up">
            <h3>1. Contexte</h3>
            <p>
              EDF est le premier producteur d’électricité en France et un leader mondial de l’énergie bas carbone. 
              Le site de Flamanville accueille l'<strong>EPR</strong>, un réacteur de 3ème génération d'une puissance de 1 650 MW.
            </p>
            <p>
              J'ai été intégré à l'équipe <strong>MOA SI</strong> (Maîtrise d'Ouvrage des Systèmes d'Information). 
              Le travail s'est effectué sur un poste de démonstration dédié, isolé des réseaux de production pour garantir la sécurité des installations.
            </p>
          </article>

          {/* 2. OBJECTIFS */}
          <article className="project-step" data-aos="fade-up">
            <h3>2. Objectifs</h3>
            <ul className="project-list">
              <li><strong>Sensibilisation :</strong> Démontrer les risques liés au "Social Engineering" et à la curiosité (clé USB trouvée).</li>
              <li><strong>Audit :</strong> Tester la résistance des mots de passe et la vigilance face au phishing.</li>
              <li><strong>Optimisation :</strong> Automatiser le traitement des données de maintenance terrain.</li>
            </ul>
          </article>

          {/* 3. TRAVAIL RÉALISÉ */}
          <article className="project-step" data-aos="fade-up">
            <h3>3. Travail réalisé</h3>
            <p>
              J'ai conçu une <strong>Proof of Concept (PoC)</strong> simulant le scénario d'une clé USB égarée. 
              Une fois branchée, le script BadUSB s'exécutait automatiquement pour simuler une exfiltration de données internes (actions de terrain, plannings).
            </p>
            <p>
              J'ai également préparé des environnements de test pour réaliser des démonstrations techniques de Brute Force et de Phishing.
            </p>
          </article>

          {/* 4. OUTILS ET TECHNOLOGIES */}
          <article className="project-step" data-aos="fade-up">
            <h3>4. Outils et technologies utilisés</h3>
            <ul className="project-list">
              <li><strong>Développement :</strong> Arduino (C++), VBA (Excel).</li>
              <li><strong>Cybersécurité :</strong> Kali Linux, Webhooks Discord (pour le retour d'exfiltration).</li>
              <li><strong>Matériel :</strong> Microcontrôleur compatible ATmega32U4 (BadUSB).</li>
            </ul>
          </article>

          {/* 5. COMPÉTENCES MOBILISÉES */}
          <article className="project-step" data-aos="fade-up">
            <h3>5. Compétences mobilisées</h3>
            <ul className="project-list">
              <li><strong>C1 :</strong> Développement d'applications (Arduino/VBA).</li>
              <li><strong>C2 :</strong> Analyse de la cybersécurité et des vecteurs d'attaque.</li>
              <li><strong>C3 :</strong> Conception d'interfaces et de scripts d'automatisation.</li>
            </ul>
          </article>

          {/* 6. RÉSULTATS OBTENUS */}
          <article className="project-step" data-aos="fade-up">
            <h3>6. Résultats obtenus</h3>
            <p>
              Le projet a abouti à une <strong>présentation devant le RSSI</strong> (Responsable de la Sécurité des Systèmes d'Information) du site. 
              Les démonstrations de BadUSB et de Kali Linux ont servi de base pour renforcer les campagnes de sensibilisation interne.
            </p>
            <div className="media-placeholder" style={{marginTop: '20px'}}>
              <div className="media-row">
                <div className="media-box2">
                  <img src={BadUsbImg} alt="Script BadUSB" />
                </div>
              </div>
            </div>
          </article>

          {/* 7. BILAN PERSONNEL */}
          <article className="project-step" data-aos="fade-up">
            <h3>7. Bilan personnel</h3>
            <p>
              Ce stage a été une réussite et a été passionnant. J'ai pu découvrir un monde qui m'était totalement inconnu. Que ce soit avec des visites terrain ou de pouvoir s'implement échanger avec un nombre d'employés important. Malgré l'environnement très complexe de l'EPR, je n'ai pas rencontré de difficultés majeures, 
              ce qui m'a permis d'aller au bout de mes démonstrations techniques. J'ai renforcé ma capacité à vulgariser des concepts 
              de cybersécurité devant des responsables haut placés.
            </p>
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
