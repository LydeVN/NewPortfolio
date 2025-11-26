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

      {/* ---------- GRID ---------- */}
      <div className="bts-grid">

        {/* DESCRIPTION */}
        <div className="bts-card" data-aos="fade-up">
          <h2>Qu’est-ce que le BTS SIO ?</h2>
          <p>
            Le BTS SIO (Services Informatiques aux Organisations) est une formation
            en deux ans destinée à former des professionnels capables de gérer,
            développer et maintenir des solutions informatiques au sein d’une
            entreprise.
          </p>
        </div>

        {/* SISR */}
        <div className="bts-card" data-aos="fade-up">
          <h2>Option SISR</h2>
          <p>
            L’option <strong>SISR</strong> (Solutions d’Infrastructure, Systèmes et
            Réseaux) forme aux métiers liés aux réseaux, à la cybersécurité, aux
            serveurs, à l’administration système et à la gestion d’infrastructures.
          </p>
        </div>

        {/* SLAM */}
        <div className="bts-card" data-aos="fade-up">
          <h2>Option SLAM</h2>
          <p>
            L’option <strong>SLAM</strong> (Solutions Logicielles et Applications
            Métiers) prépare aux domaines comme le développement web, la création
            d’applications, les bases de données ou encore la gestion de projets.
          </p>
        </div>

        {/* COMPÉTENCES */}
        <div className="bts-card" data-aos="fade-up">
          <h2>Compétences développées</h2>
          <ul className="bts-list">
            <li>Développement d’applications (web, mobile, logiciels)</li>
            <li>Gestion de base de données (SQL)</li>
            <li>Cybersécurité et protection des systèmes</li>
            <li>Administration de réseaux et serveurs</li>
            <li>Analyse des besoins d’une organisation</li>
            <li>Gestion de projets et documentation</li>
          </ul>
        </div>

        {/* POURQUOI CE BTS */}
        <div className="bts-card" data-aos="fade-up">
          <h2>Pourquoi j’ai choisi le BTS SIO ?</h2>
          <p>
            Passionné par le développement et l’informatique depuis longtemps, le
            BTS SIO m’a offert une formation complète, professionnelle et orientée
            projet. Mon option <strong>SLAM</strong> me permet aujourd’hui de créer
            des applications, sites web, outils et projets concrets.
          </p>
        </div>

      </div>
    </main>
  );
}
