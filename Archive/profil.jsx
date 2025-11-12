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

      <section className="myPresentation">
        <TextPres
          aos="fade-down-right"
          className="textPres1"
          title="Qui suis-je ?"
          
        />

        <div data-aos="flip-up" className="photo hover:animate-jump hover:animate-once">
          <img
            src={photoJules}
            alt="Portrait de Jules Vannelli"
            loading="lazy"
          />
        </div>

        <TextPres
          aos="fade-down-left"
          className="textPres2"
          title="Mon parcours"
          text={
            <><span>J'aime :</span>
              <ul>
                <li>les jeux vidéos</li>
                <li>la musique</li>
                <li>stream</li>
                <li>la vidéo/photo</li>
                <li>le code</li>
              </ul>
            </>
          }
        />

        <TextPres
          aos="flip-down"
          className="textPres3"
          title="Ma découverte du code"
          text="J'ai donc commencé à m'intéresser plus sérieusement au monde du code, en suivant des cours sur Internet, en regardant des vidéos sur YouTube, en demandant à des amis, et j'ai découvert quelque chose de passionnant. La possibilité à la fois d'apprendre et d'expérimenter et de voir évoluer au fur et à mesure des projets, me semblait parfaite pour moi."
        />
      </section>
    </main>
  );
}
