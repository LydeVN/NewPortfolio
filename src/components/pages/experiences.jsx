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
        <div>Parcours professionnel et immersions en milieu industriel</div>
      </section>

{/* =========================
          STAGE 2 : EDF (2026)
      ========================== */}
      <section className="project-wrap" data-aos="fade-up">
        <header className="project-head">
          <span className="stage-badge">Stage de 2ème année</span>
          <h2>EDF — CNPE Flamanville 3 (EPR)</h2>
          <div className="project-sub">
            Cybersécurité & Appui MOA SI au sein du réacteur le plus puissant de France
          </div>
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
          STAGE 1 : DEV-ID (2025)
      ========================== */}
      <section className="project-wrap" data-aos="fade-up">
        <header className="project-head">
          <span className="stage-badge">Stage de 1ère année</span>
          <h2>Dev-Id — Studio de Création Digitale</h2>
          <div className="project-sub">
            Immersion en Game Design et développement 3D au sein d'un écosystème technologique innovant
          </div>
        </header>

        <div className="project-body">
          {/* 1. CONTEXTE */}
          <article className="project-step" data-aos="fade-up">
            <h3>1. Contexte</h3>
            <p>
              <strong>Dev-Id</strong> est une entreprise de création digitale multidisciplinaire (Web, Mobile, Web3, IA) possédant son propre <strong>Studio 3D & Gaming</strong>. L'entreprise intègre également une Académie dédiée à la formation interne sur des stacks de pointe.
            </p>
            <p>
              J'ai été intégré au pôle Gaming pour travailler sur les mécaniques de jeu et l'expérimentation interactive, entouré d'experts en éco-conception et en technologies immersives.
            </p>
          </article>

          {/* 2. OBJECTIFS */}
          <article className="project-step" data-aos="fade-up">
            <h3>2. Objectifs</h3>
            <ul className="project-list">
              <li><strong>Expérimentation :</strong> Créer et prototyper des mécaniques de jeux en 2D et 3D.</li>
              <li><strong>Production :</strong> Contribuer activement au développement du titre principal en cours de création au studio.</li>
              <li><strong>Apprentissage :</strong> Maîtriser les workflows professionnels de l'industrie du jeu vidéo.</li>
            </ul>
          </article>

          {/* 3. TRAVAIL RÉALISÉ */}
          <article className="project-step" data-aos="fade-up">
            <h3>3. Travail réalisé</h3>
            <p>
              Ma mission principale a consisté à développer des scripts de comportement et des systèmes d'interaction. J'ai pu apporter ma pierre à l'édifice sur le <strong>projet de jeu phare du studio</strong>, en travaillant sur l'intégration d'assets et la logique de gameplay.
            </p>
            <p>
              J'ai également réalisé plusieurs prototypes expérimentaux permettant de tester des boucles de gameplay spécifiques en 3D.
            </p>
          </article>

          {/* 4. OUTILS ET TECHNOLOGIES */}
          <article className="project-step" data-aos="fade-up">
            <h3>4. Outils et technologies utilisés</h3>
            <ul className="project-list">
              <li><strong>Moteur :</strong> Unity Engine (2D/3D).</li>
              <li><strong>Langage :</strong> C# (Scripting de composants et systèmes).</li>
              <li><strong>Collaboration :</strong> Unity Version Control (Plastic SCM) pour le travail d'équipe synchronisé.</li>
            </ul>
          </article>

          {/* 5. COMPÉTENCES MOBILISÉES */}
          <article className="project-step" data-aos="fade-up">
            <h3>5. Compétences mobilisées</h3>
            <ul className="project-list">
              <li><strong>C1 :</strong> Programmation orientée objet appliquée au jeu vidéo.</li>
              <li><strong>C3 :</strong> Conception de scènes et gestion de la physique sous Unity.</li>
              <li><strong>C4 :</strong> Travail collaboratif au sein d'un pipeline de production studio.</li>
            </ul>
          </article>

          {/* 6. BILAN PERSONNEL */}
          <article className="project-step" data-aos="fade-up">
            <h3>6. Bilan personnel</h3>
            <p>
              Ce stage a été extrêmement enrichissant, tant sur le plan technique qu'humain. Rencontrer des professionnels aux connaissances variées (IA, Web3, 3D) m'a permis d'élargir ma vision du métier. J'y ai découvert la réalité du <strong>travail d'équipe</strong> et l'importance de la <strong>cohésion</strong> pour mener à bien un projet complexe et créatif.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
