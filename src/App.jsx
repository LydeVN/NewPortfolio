import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/pages/home";
import Profil from "./components/pages/profil";
import BtsSio from "./components/pages/btsio";

import ProjectsMenu from "./components/pages/projets/ProjectsMenu";
import ProjectsScolaires from "./components/pages/projets/ProjectsScolaires";
import ProjectsPPE from "./components/pages/projets/ProjectsPPE";
// import ProjectsPerso from "./components/pages/projets/ProjectsPerso";

import Contact from "./components/pages/contact";
import Veille from "./components/pages/veille";
import Experiences from "./components/pages/experiences";
import "./index.css";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react";

// import BtsSio from './BtsSio';
// import Competences from './Competences';
// import Experiences from './Experiences';
// import Projects from './Projects';
// import Contact from './Contact';
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/bts_sio" element={<BtsSio />} />
        <Route path="/veille" element={<Veille />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projets" element={<ProjectsMenu />} />
        <Route path="/projets/scolaires" element={<ProjectsScolaires />} />
        <Route path="/projets/ppe" element={<ProjectsPPE />} />
        {/* <Route path="/projets/perso" element={<ProjectsPerso />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
      <Analytics />
      <Footer />
    </div>
  );
}

export default App;
