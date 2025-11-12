import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/maincolors.css";
import "../../assets/profil.css";
import photoJules from "../../img/tyjdh.jpg";
import TextPres from "../../textpres";


export default function Profil() {
  useEffect(() => {
    AOS.init({ duration: 800 });
    document.title = "Profil | Jules Vannelli";
  }, []);

  return (
    <main className="my-theme">
      <section className="whoAmI"></section>
    </main>
  );
}
