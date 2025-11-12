import React from "react";
import "../assets/footer.css"; // Assuming you have corresponding CSS

// navbar components


const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="col-1">
          <h2>Me contacter</h2>
          <div className="myContacts">
            <a
              href="https://github.com/LydeVN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png"
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.instagram.com/jules.vnl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/023/986/885/non_2x/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png"
                alt="Instagram"
              />
            </a>
          </div>
        </div>

        <div className="col-2">
          <h2>Lorem</h2>
          <a href="#truc">Lorem</a>
        </div>

        <div className="col-3">
          <h2>Newsletter</h2>
          <form>
            <input type="email" placeholder="Votre adresse email" />
            <button className="subButton" type="submit">
              Envoyer
            </button>
          </form>
        </div>
      </div>

      <div className="limited">
        <p>© 2024 Jules Vannelli. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
