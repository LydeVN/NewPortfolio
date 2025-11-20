import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";   // ⬅️ IMPORTANT : EmailJS
import "../../assets/maincolors.css";
import "../../assets/contact.css";

export default function Contact() {

  const form = useRef(); // ⬅️ Permet à EmailJS de lire ton formulaire

  useEffect(() => {
    AOS.init({ duration: 800 });
    document.title = "Contact | Jules Vannelli";
  }, []);

  // ------------------ FONCTION D'ENVOI EMAIL ------------------
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_2okoprt",        // ⬅️ 1) Remplace avec ton "Service ID"
      "template_9yfd1h9",       // ⬅️ 2) Remplace avec ton "Template ID"
      form.current,
      "1f40SXpWC9cO_VRPO"         // ⬅️ 3) Remplace avec ta "Public Key"
    )
    .then(
      () => {
        alert("Message envoyé ✔️ Merci !");
      },
      (error) => {
        console.error("Erreur :", error);
        alert("Une erreur est survenue ❌");
      }
    );
  };
  // -------------------------------------------------------------

  return (
    <main className="contact-page my-theme">

      {/* -------- HERO -------- */}
      <section className="contact-hero" data-aos="fade-down">
        <h1>Contact</h1>
        <p>Tu peux me contacter directement via le formulaire ou par mail.</p>
      </section>

      {/* -------- GRID -------- */}
      <div className="contact-grid">

        {/* -------- INFO CARD -------- */}
        <div className="contact-card" data-aos="fade-right">
          <h2>Me contacter</h2>

          <p>
            Si tu souhaites collaborer, discuter d’un projet, ou simplement poser
            une question, tu peux m’écrire directement :
          </p>

          <div className="mail-box">
            <a href="mailto:contact@jules-vannelli.fr">
              contact@jules-vannelli.fr
            </a>
          </div>

          <p>
            Je réponds généralement sous 24–48h !
          </p>
        </div>

        {/* -------- FORM CARD -------- */}
        <div className="contact-card" data-aos="fade-left">
          <h2>Envoyer un message</h2>

          {/* Formulaire EmailJS */}
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            
            <label>
              Nom
              <input 
                type="text"
                name="from_name"         // ⬅️ DOIT correspondre à EmailJS
                placeholder="Votre nom"
                required 
              />
            </label>

            <label>
              Email
              <input 
                type="email"
                name="reply_to"          // ⬅️ DOIT correspondre à EmailJS
                placeholder="Votre email"
                required 
              />
            </label>

            <label>
              Message
              <textarea
                name="message"           // ⬅️ DOIT correspondre à EmailJS
                placeholder="Votre message..."
                rows="5"
                required
              ></textarea>
            </label>

            <button type="submit" className="contact-btn">
              Envoyer
            </button>

          </form>
        </div>

      </div>
    </main>
  );
}
