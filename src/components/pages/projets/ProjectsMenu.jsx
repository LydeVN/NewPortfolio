import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../assets/maincolors.css";
import "../../../assets/projets/projects-menu.css"; // On va créer ce CSS

export default function ProjectsMenu() {
  // Données pour tes pastilles (tu pourras les rendre dynamiques plus tard)
  const projectStats = {
    scolaire: 2,
    ppe: 2,
    perso: 4
  };

  useEffect(() => {
    AOS.init({ duration: 800 });
    document.title = "Portefeuille de Projets | Jules Vannelli";
  }, []);

  return (
    <main className="projects-menu-page my-theme">
      <section className="menu-hero" data-aos="fade-down">
        <h1>Mon Portefeuille de Projets</h1>
        <p>
          Découvrez mes réalisations classées par contexte. 
          Du cadre académique aux défis personnels, chaque projet reflète une étape de mon apprentissage.
        </p>
      </section>

      <div className="menu-grid">
        {/* PROJETS SCOLAIRES */}
        <Link to="/projets/scolaires" className="menu-card" data-aos="fade-up" data-aos-delay="100">
          <div className="badge">{projectStats.scolaire}</div>
          <div className="card-icon">📚</div>
          <h2>Scolaires</h2>
          <p>Travaux réalisés en cours, exercices pratiques et apprentissage des bases.</p>
        </Link>

        {/* PROJETS PPE (Handi'Chiens, GTA...) */}
        <Link to="/projets/ppe" className="menu-card" data-aos="fade-up" data-aos-delay="200">
          <div className="badge">{projectStats.ppe}</div>
          <div className="card-icon">💼</div>
          <h2>PPE / Professionnels</h2>
          <p>Projets en équipe, situations professionnelles (Sio) et applications complexes.</p>
        </Link>

        {/* PROJETS PERSO */}
        <Link to="/projets/perso" className="menu-card" data-aos="fade-up" data-aos-delay="300">
          <div className="badge">{projectStats.perso}</div>
          <div className="card-icon">🚀</div>
          <h2>Personnels</h2>
          <p>Expérimentations libres, passions et outils développés par pure curiosité.</p>
        </Link>
      </div>
    </main>
  );
}