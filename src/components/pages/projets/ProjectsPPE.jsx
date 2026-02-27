import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../assets/maincolors.css";
import "../../../assets/projets/projets.css";
import { NavLink } from "react-router-dom";
import BackButton from "../../backbutton";

export default function ProjectsPPE() {
  useEffect(() => {
    AOS.init({ duration: 800 });
    document.title = "Projets Professionnels | Jules Vannelli";
  }, []);

  return (
    <main className="projects-page my-theme">
      <NavLink to="/projets">
        <BackButton />
      </NavLink>
      {/* HERO */}
      <section className="projects-hero" data-aos="fade-down">
        <h1>Projets Professionnels (PPE)</h1>
        <div>Analyse, conception et réalisation de solutions informatiques</div>
      </section>

      {/* =========================
          PROJET PÉPI+
      ========================== */}
      <section className="project-wrap" data-aos="fade-up">
        <header className="project-head">
          <h2>Pépi+ — Gestion de Stocks Connectée</h2>
          <div className="project-sub">Solution web Full-Stack de traçabilité horticole</div>
        </header>

        <div className="project-body">
          <article className="project-step" data-aos="fade-up">
            <h3>1. Contexte</h3>
            <p>
              Pépi+ est un pépiniériste devant répondre à des obligations sanitaires strictes. 
              L'entreprise souhaitait moderniser sa gestion de stocks (réels et virtuels) et 
              automatiser la traçabilité des produits pour ses équipes et ses partenaires.
            </p>
          </article>

          <article className="project-step" data-aos="fade-up">
            <h3>2. Objectifs</h3>
            <ul className="project-list">
              <li>Centraliser le référentiel des plants (noms latins/communs).</li>
              <li>Gérer la saisonnalité et le conditionnement pour la traçabilité.</li>
              <li>Permettre la réservation de plants via un module de commande dynamique.</li>
            </ul>
          </article>

          <article className="project-step" data-aos="fade-up">
            <h3>3. Travail réalisé & Technologies</h3>
            <p>
              Développement d'une architecture <strong>MVC</strong> avec le framework <strong>Symfony</strong>. 
              Mise en place de portails sécurisés distincts pour les collaborateurs et les fournisseurs.
            </p>
            <ul className="project-list">
              <li><strong>Outils :</strong> PHP 8, MySQL, Twig, Git/GitHub.</li>
              <li><strong>Méthodologie :</strong> Architecture 3-tiers, versioning rigoureux.</li>
            </ul>
          </article>

          <article className="project-step" data-aos="fade-up">
            <h3>4. Compétences mobilisées</h3>
            <ul className="project-list">
              <li><strong><a href="/bts_sio#slam">C1 :</a></strong> Gérer l'inventaire des stocks et centralisation des données.</li>
              <li><strong><a href="/bts_sio#slam">C3 :</a></strong> Conception d'interfaces utilisateurs ergonomiques.</li>
              <li><strong><a href="/bts_sio#slam">C4 :</a></strong> Travailler en mode projet Agile et rédaction de documents techniques.</li>
                <li><strong><a href="/bts_sio#slam">C5 :</a></strong> Mise à disposition d'une service intuitif et accessible avec documentation utilisateur complète.</li>
            </ul>
          </article>

          <article className="project-step" data-aos="fade-up">
            <h3>5. Résultats & Bilan</h3>
            <p>
              <strong>Résultats :</strong> Application opérationnelle permettant une réduction du temps de saisie et une conformité sanitaire totale.
            </p>
            <p>
              <strong>Bilan personnel :</strong> Ce projet m'a permis de maîtriser la logique complexe des stocks virtuels et l'importance de la rigueur dans la modélisation de données sensibles.
            </p>
          </article>
        </div>
      </section>

      {/* =========================
          PROJET GESTIMMO
      ========================== */}
      <section className="project-wrap" data-aos="fade-up">
        <header className="project-head">
          <h2>GestImmo — Logiciel de Gestion Immobilière</h2>
          <div className="project-sub">Application desktop lourde de gestion locative</div>
        </header>

        <div className="project-body">
          <article className="project-step" data-aos="fade-up">
            <h3>1. Contexte</h3>
            <p>
              Besoin de centraliser la gestion d'un parc immobilier varié (maisons, appartements, box). 
              L'application doit suivre les aspects financiers (prêts), contractuels (baux) et techniques (interventions).
            </p>
          </article>

          <article className="project-step" data-aos="fade-up">
            <h3>2. Objectifs</h3>
            <ul className="project-list">
              <li>Assurer le suivi des baux et des locataires.</li>
              <li>Gérer l'annuaire des prestataires et l'historique des travaux.</li>
              <li>Calculer automatiquement la rentabilité et les mensualités de prêts.</li>
            </ul>
          </article>

          <article className="project-step" data-aos="fade-up">
            <h3>3. Travail réalisé & Technologies</h3>
            <p>
              Conception d'une application <strong>C# WPF</strong> utilisant une architecture multicouche 
              strile (<strong>DAO / DAL</strong>) pour une séparation claire des responsabilités.
            </p>
            <ul className="project-list">
              <li><strong>Outils :</strong> C#, WPF, ORM, SQL Server.</li>
              <li><strong>Technique :</strong> Implémentation de patterns d'accès aux données.</li>
            </ul>
          </article>

          <article className="project-step" data-aos="fade-up">
            <h3>4. Compétences mobilisées</h3>
            <ul className="project-list">
              <li><strong><a href="/bts_sio#slam">C1 :</a></strong> Persistance des données et développement d'application desktop.</li>
              <li><strong><a href="/bts_sio#slam">C3 :</a></strong> Réalisation d'interfaces riches et dynamiques.</li>
              <li><strong><a href="/bts_sio#slam">C5 :</a></strong> Tests et validation des calculs financiers.</li>
            </ul>
          </article>

          <article className="project-step" data-aos="fade-up">
            <h3>5. Résultats & Bilan</h3>
            <p>
              <strong>Résultats :</strong> Logiciel robuste capable de gérer plusieurs dizaines de biens sans perte de performance.
            </p>
            <p>
              <strong>Bilan personnel :</strong> J'ai renforcé mes compétences en programmation orientée objet et appris à structurer un projet complexe via les couches DAL/DAO.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}