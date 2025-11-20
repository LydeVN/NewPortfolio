import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/pages/home';
import Profil from './components/pages/profil';
import BtsSio from './components/pages/btsio';
import ProjetGta from './components/pages/projets/projetgta';
import Contact from './components/pages/contact';
import './index.css'
import Footer from './components/footer';
import { Analytics } from "@vercel/analytics/react"


// import BtsSio from './BtsSio';
// import Competences from './Competences';
// import Experiences from './Experiences';
// import Projects from './Projects';
// import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/bts_sio" element={<BtsSio />} />
        {/* <Route path="/veille" element={<Competences />} />
        <Route path="/experiences" element={<Experiences />} /> */}
        <Route path="/projetgta" element={<ProjetGta />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
      <Analytics />
    </div>
  );
}

export default App;