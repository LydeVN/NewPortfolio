import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/maincolors.css";
import "../../assets/btsio.css";

export default function BtsSio() {
  useEffect(() => {
    AOS.init({ duration: 800 });
    document.title = "BTS SIO | Jules Vannelli";
  }, []);

  return (
    <main className="bts-page my-theme">

      {/* ---------- HERO ---------- */}
      <section className="bts-hero" data-aos="fade-down">
        <h1>BTS SIO</h1>
        <p>Services Informatiques aux Organisations</p>
      </section>

      {/* ---------- INTRO ---------- */}
      <section className="bts-card" data-aos="fade-up">
        <h2>Présentation générale</h2>
        <p>
          Le <strong>BTS SIO</strong> est une formation en deux ans orientée vers les métiers du 
          numérique, combinant développement logiciel, gestion d’infrastructures et compétences 
          techniques transversales. Il prépare à une intégration professionnelle rapide dans 
          le domaine informatique.
        </p>
      </section>

      {/* ---------- ÉTABLISSEMENT ---------- */}
      <section className="bts-card" data-aos="fade-up">
        <h2>Mon établissement : Institut Supérieur Saint-Denis</h2>
        <p>
          J’étudie à l’<strong>Institut Supérieur Saint-Denis à Annonay</strong>, un établissement
          reconnu pour son accompagnement individualisé, la qualité des enseignements et la
          proximité avec les attentes professionnelles du secteur informatique.
        </p>
        <ul className="bts-list">
          <li>Encadrement attentif et rigoureux</li>
          <li>Accompagnement sur les stages et projets</li>
        </ul>
      </section>

      {/* ---------- OPTIONS ---------- */}
      <div className="bts-grid">

        {/* --------- SISR --------- */}
        <div className="bts-card" data-aos="fade-up">
          <h2>Option SISR</h2>
          <p>
            L’option <strong>SISR</strong> forme aux métiers de l’administration système et réseau.
          </p>
          <ul className="bts-list">
            <li>Administration de serveurs et réseaux</li>
            <li>Cybersécurité et protection des systèmes</li>
            <li>Déploiement d’infrastructures</li>
            <li>Gestion des incidents et support</li>
          </ul>
        </div>

        {/* --------- SLAM --------- */}
        <div className="bts-card" data-aos="fade-up">
          <h2 id="slam">Mon option : SLAM</h2>
          <p>
            L’option <strong>SLAM</strong> est centrée sur le développement d’applications et
            la gestion des données.
          </p>
          <ul className="bts-list">
            <li>Développement Web (JavaScript, React, PHP, Symfony)</li>
            <li>Développement logiciel (C#, WPF, ORM)</li>
            <li>Scripts & automatisation</li>
            <li>Modélisation et gestion de bases de données</li>
          </ul>
        </div>

      </div>

      {/* ---------- COMPÉTENCES OFFICIELLES BTS SIO ---------- */}
      <section className="bts-card" data-aos="fade-up">
        <h2>Compétences du BTS SIO</h2>
        <p>Voici les compétences officielles travaillées durant la formation :</p>

        <ul className="bts-list bts-list-skills">

          {/* ---------------- C1 Gestion du patrimoine ---------------- */}
          <li>
            <strong>C1. Gérer le patrimoine informatique</strong><br />
            Référentiels, documentation technique, inventaire, déploiement, sécurité AD, RGPD,
            contrats, supervision, gestion des sauvegardes.
          </li>

          {/* ---------------- C2 Support ---------------- */}
          <li>
            <strong>C2. Répondre aux incidents & demandes d’assistance</strong><br />
            Support utilisateurs, base de connaissances, ITIL, diagnostic, traitement d’incidents,
            documentation.
          </li>

          {/* ---------------- C3 Présence en ligne ---------------- */}
          <li>
            <strong>C3. Développer la présence en ligne de l'organisation</strong><br />
            Création et gestion de sites web, SEO, e-réputation, réseaux sociaux, gestion des données
            personnelles, nom de domaine.
          </li>

          {/* ---------------- C4 Travail en mode projet ---------------- */}
          <li>
            <strong>C4. Travailler en mode projet</strong><br />
            Analyse des besoins, organisation de projet, méthodes (V, Agile), planification, 
            indicateurs de suivi et gestion des écarts.
          </li>

          {/* ---------------- C5 Mise à disposition d’un service ---------------- */}
          <li>
            <strong>C5. Mettre à disposition un service informatique</strong><br />
            Tests unitaires, intégration, production, déploiement, documentation utilisateur, 
            formation et accompagnement.
          </li>

          {/* ---------------- C6 Développement professionnel ---------------- */}
          <li>
            <strong>C6. Organiser son développement professionnel</strong><br />
            Veille technologique, stratégies d’amélioration continue, construction de son 
            projet professionnel.
          </li>

        </ul>
      </section>

      {/* ---------- POURQUOI ---------- */}
      <section className="bts-card" data-aos="fade-up">
        <h2>Pourquoi avoir choisi le BTS SIO ?</h2>
        <p>
          Passionné par l’informatique, j’ai choisi ce BTS car il offre une formation technique
          complète et polyvalente. L’option SLAM me permet de développer des compétences solides
          en programmation, création d’applications et conception de solutions adaptées aux besoins
          professionnels.
        </p>
      </section>

    </main>
  );
}
