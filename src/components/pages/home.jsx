import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/maincolors.css";
import "../../assets/home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    AOS.init();
    document.title = "Home | Jules Vannelli";
  }, []);

  return (
    <>
      <main className="my-theme">
        <div className="nameCenter">
          <h1 className="name" id="block1">
            <span>Jules Vannelli</span>
          </h1>
        </div>

        <section className="mid-container">
          <div className="social-icons">
            <a
              href="https://www.instagram.com/jules.vnl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://x.com/LydeVN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>

            <a
              href="https://www.github.com/LydeVN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>

          
          <button class="buttonDownload">Download</button>

          {/* </a> */}
        </section>

        <NavLink to="./profil">
          <button id="next-page-button">Page suivante</button>
        </NavLink>
      </main>
    </>
  );
}
