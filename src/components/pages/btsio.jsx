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
          Le <strong>BTS SIO</strong> (Services Informatiques aux Organisations) est une formation
          professionnalisante de deux ans orientée vers les métiers du numérique, du développement
          logiciel et de la gestion des systèmes informatiques.
        </p>
      </section>

      {/* ---------- ÉTABLISSEMENT ---------- */}
      <section className="bts-card" data-aos="fade-up">
        <h2>Mon établissement : Institut Supérieur Saint-Denis</h2>
        <p>
          J'étudie à l’<strong>Institut Supérieur Saint-Denis à Annonay</strong>, un établissement reconnu
          pour son excellence pédagogique, son suivi personnalisé et son engagement vers la réussite
          professionnelle des étudiants.
        </p>
        <ul className="bts-list">
          <li>Encadrement sérieux et bienveillant</li>
          <li>Accompagnement à l'alternance et stages</li>
        </ul>
      </section>

      {/* ---------- OPTIONS (2 colonnes) ---------- */}
      <div className="bts-grid">

        <div className="bts-card" data-aos="fade-up">
          <h2>Option SISR</h2>
          <p>
            L'option <strong>SISR</strong> (Solutions d’Infrastructure, Systèmes & Réseaux)
            forme aux métiers liés :
          </p>
          <ul className="bts-list">
            <li>à l’administration réseau et système</li>
            <li>à la cybersécurité</li>
            <li>à la gestion de serveurs</li>
            <li>au support technique</li>
          </ul>
        </div>

        <div className="bts-card" data-aos="fade-up">
          <h2>Mon option : SLAM</h2>
          <p>
            L’option <strong>SLAM</strong> (Solutions Logicielles et Applications Métiers) se
            concentre sur le développement et la création d’applications modernes.
          </p>
          <ul className="bts-list">
            <li>Développement Web (React, JavaScript…)</li>
            <li>Développement logiciel (C#, WPF, ORM)</li>
            <li>Création d’outils et scripts automatisés</li>
            <li>Gestion et modélisation de bases de données</li>
          </ul>
        </div>

      </div>

      {/* ---------- COMPÉTENCES ---------- */}
      <section className="bts-card" data-aos="fade-up">
        <h2>Compétences développées</h2>
        <ul className="bts-list">
          <li>Développement web, mobile et logiciel</li>
          <li>Script, automatisation et outils techniques</li>
          <li>Administration systèmes & réseaux</li>
          <li>Cybersécurité</li>
          <li>Analyse, conception & documentation</li>
        </ul>
      </section>

      {/* ---------- POURQUOI ---------- */}
      <section className="bts-card" data-aos="fade-up">
        <h2>Pourquoi avoir choisi le BTS SIO ?</h2>
        <p>
          Passionné par l’informatique et la création numérique, ce BTS me permet
          d’acquérir une base solide et polyvalente dans le domaine du développement.
          L’option SLAM correspond parfaitement à mon objectif : concevoir des projets,
          outils, logiciels et expériences de plus en plus aboutis, efficaces et modernes.
        </p>
      </section>

    </main>
  );
}
