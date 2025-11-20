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
      {/* --- HERO --- */}
      <section className="bts-hero" data-aos="fade-down">
        <h1>BTS SIO</h1>
        <p>Services Informatiques aux Organisations</p>
      </section>

      {/* ---- DESCRIPTION ---- */}
      <section className="bts-section" data-aos="fade-up">
        <h2>📌 Qu’est-ce que le BTS SIO ?</h2>
        <p>
          Le BTS SIO (Services Informatiques aux Organisations) est une formation
          en deux ans destinée à former des professionnels capables de gérer,
          développer et maintenir des solutions informatiques au sein d’une
          entreprise.
        </p>
      </section>

      {/* ---- LES OPTIONS ---- */}
      <section className="bts-options">
        <div className="bts-option-card" data-aos="fade-right">
          <h3>🔧 Option SISR</h3>
          <p>
            L’option <strong>SISR</strong> (Solutions d’Infrastructure, Systèmes et
            Réseaux) forme aux métiers liés aux réseaux, à la cybersécurité, aux
            serveurs, à l’administration système et à la gestion d’infrastructures.
          </p>
        </div>

        <div className="bts-option-card" data-aos="fade-left">
          <h3>💻 Option SLAM</h3>
          <p>
            L’option <strong>SLAM</strong> (Solutions Logicielles et Applications
            Métiers) prépare aux domaines comme le développement web, la création
            d’applications, les bases de données ou encore la gestion de projets.
          </p>
        </div>
      </section>

      {/* ---- COMPÉTENCES ---- */}
      <section className="bts-section" data-aos="fade-up">
        <h2>🧠 Compétences développées</h2>
        <div className="bts-list">
          <div>Développement d’applications (web, mobile, logiciels)</div>
          <div>Gestion de base de données (SQL)</div>
          <div>Cybersécurité et protection des systèmes</div>
          <div>Administration de réseaux et serveurs</div>
          <div>Analyse des besoins d’une organisation</div>
          <div>Gestion de projets et documentation</div>
        </div>
      </section>

      {/* ---- POURQUOI LE BTS SIO ---- */}
      <section className="bts-section" data-aos="fade-up">
        <h2>🎯 Pourquoi j’ai choisi le BTS SIO ?</h2>
        <p>
          Passionné par le développement et l’informatique depuis longtemps, le
          BTS SIO m’a offert une formation complète, professionnelle et orientée
          projet. Mon option <strong>SLAM</strong> me permet aujourd’hui de créer
          des applications, sites web, outils et projets concrets.
        </p>
      </section>
    </main>
  );
}
