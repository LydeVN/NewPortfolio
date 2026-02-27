import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/veille.css";
import "../../assets/maincolors.css";

export default function Veille() {
  const [activeArticle, setActiveArticle] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    document.title = "Veille | Jules Vannelli";
  }, []);

  const toggleArticle = (id, event) => {
    const isOpening = activeArticle !== id;
    setActiveArticle(isOpening ? id : null);

    if (isOpening) {
      const element = event.currentTarget;
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }, 300);
    }
  };

  return (
    <main className="veille-page my-theme">
      {/* HEADER */}
      <section className="veille-header" data-aos="fade-down">
        <h1>Veille Technologique</h1>
        <p className="veille-intro">
          Analyse des évolutions du secteur numérique, des enjeux de l'IA et des
          transformations du marché de l'emploi.
        </p>
      </section>

      {/* SECTION SOURCES */}
            <section className="veille-sources-section" data-aos="fade-up">
                <h2 className="section-subtitle">Mes Sources & Inspirations</h2>
                <div className="sources-grid">
                    <div className="source-category">
                        <h3>Numérique & Gaming</h3>
                        <ul className="source-links">
                            <li><a href="https://next.ink" target="_blank" rel="noreferrer">Next.ink (Ma favorite)</a></li>
                            <li><a href="https://gamekult.com" target="_blank" rel="noreferrer">Gamekult</a></li>
                            <li><a href="https://techcrunch.com" target="_blank" rel="noreferrer">TechCrunch</a></li>
                        </ul>
                    </div>
                    <div className="source-category">
                        <h3>Droit & Société</h3>
                        <ul className="source-links">
                            <li><a href="https://actu-juridique.fr" target="_blank" rel="noreferrer">Actu-juridique</a></li>
                            <li><a href="https://leclubdesjuristes.com" target="_blank" rel="noreferrer">Le Club des Juristes</a></li>
                        </ul>
                    </div>
                    <div className="source-category">
                        <h3>Économie & Public</h3>
                        <ul className="source-links">
                            <li><a href="https://vie-publique.fr" target="_blank" rel="noreferrer">Vie-publique</a></li>
                            <li><a href="https://boursorama.com" target="_blank" rel="noreferrer">Boursorama</a></li>
                        </ul>
                    </div>
                </div>
            </section>

      {/* ==========================================
                SUJET 1 : L'IA DANS LE MONDE DU TRAVAIL
            =========================================== */}
      <section className="veille-topic-section" data-aos="fade-up">
        <h2 className="section-subtitle center">
          Sujet 1 : L'IA dans le monde du travail
        </h2>

        <div className="topic-intro-box">
          <h3>1. État de l'art initial</h3>
          <p>
            L'intelligence artificielle, autrefois cantonnée à des tâches de
            calcul pur, s'est transformée avec l'arrivée des modèles génératifs
            (LLM) et plus récemment de l'<strong>IA agentique</strong>. Cette
            dernière ne se contente plus de répondre, mais peut agir de manière
            autonome. Le contexte actuel est marqué par une intégration massive
            dans les outils de productivité, redéfinissant les compétences
            attendues sur le marché de l'emploi.
          </p>
        </div>

        <div className="veille-carousel-container">
          <button
            className="carousel-btn left"
            onClick={() => {
              document
                .querySelector("#carousel-ia")
                .scrollBy({ left: -500, behavior: "smooth" });
            }}
          >
            ◀
          </button>

          <div className="veille-carousel" id="carousel-ia">
            {/* ACTUALITÉ JANVIER 2026 */}
            <article
              className={`veille-card ${activeArticle === 1 ? "is-active" : "is-collapsed"}`}
              onClick={(e) => toggleArticle(1, e)}
            >
              <div className="card-header">
                <p className="veille-date">Janvier 2026</p>
                <h2>L'IA Agentique : Vers une rupture du marché junior</h2>
              </div>
              <div className="card-content">
                <p>
                  L'évolution de l'IA générative vers l'
                  <strong>IA agentique</strong> marque un tournant : la machine
                  devient capable de mener des missions sans intervention
                  humaine. Cette mutation bouscule déjà les recrutements.
                  L'Université de Stanford note une baisse de 13 % des offres
                  pour les postes débutants les plus exposés.
                </p>
                <p>
                  Aux États-Unis, un "phénomène sidérant" émerge : le chômage
                  des jeunes diplômés augmente plus vite que la moyenne
                  nationale. Les tâches traditionnelles des juniors (analyse,
                  préparation de dossiers) sont désormais automatisées de
                  manière fiable. Les grandes entreprises technologiques ont
                  réduit leurs embauches de débutants de 50 % par rapport à
                  2019. Le savoir académique devient secondaire face à la
                  capacité à piloter l'IA, transformant radicalement les
                  critères de sélection.
                </p>
                <p>
                  <a
                    href="https://www.radiofrance.fr/franceinter/podcasts/le-reportage-d-on-n-arrete-pas-l-eco/le-reportage-d-on-n-arrete-pas-l-eco-du-samedi-24-janvier-2026-8827194"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source 1
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://www.rtl.fr/actu/economie-consommation/ce-phenomene-siderant-prefigure-ce-qui-peut-arriver-en-france-comment-l-ia-detruit-l-acces-des-jeunes-americains-au-marche-du-travail-7900592183"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source 2
                  </a>
                </p>
              </div>
              {activeArticle !== 1 && (
                <span className="read-more">Cliquez pour lire le résumé</span>
              )}
            </article>

            {/* ACTUALITÉ DÉCEMBRE 2025 */}
            <article
              className={`veille-card ${activeArticle === 3 ? "is-active" : "is-collapsed"}`}
              onClick={(e) => toggleArticle(3, e)}
            >
              <div className="card-header">
                <p className="veille-date">Décembre 2025</p>
                <h2>Limites et Résistances : L'IA face à la réalité humaine</h2>
              </div>
              <div className="card-content">
                <p>
                  Malgré l'enthousiasme, une résistance s'organise. Des marques
                  comme Dove interdisent les représentations générées par IA
                  pour préserver l'authenticité. Sur le plan technique,
                  l'autonomie totale reste limitée : des recherches de Carnegie
                  Mellon révèlent que les agents IA échouent à plus de 75 % des
                  tâches complexes par manque de compréhension des instructions
                  implicites ou des compétences sociales.
                </p>
                <p>
                  Le consensus actuel suggère que l'IA ne remplace pas les
                  créateurs, mais que les designers utilisant l'IA remplaceront
                  ceux qui ne le font pas. L'outil doit rester un support au
                  prototypage rapide plutôt qu'un substitut au travail de fond.
                </p>
                <p>
                  <a
                    href="https://www.ibm.com/fr-fr/think/insights/ai-in-art"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source 1
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://www.futura-sciences.com/tech/actualites/technologie-entreprise-dirigee-ia-conclusions-disent-tres-long-notre-avenir-travail-c7g3-129495/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source 2
                  </a>
                </p>
              </div>
              {activeArticle !== 3 && (
                <span className="read-more">Cliquez pour lire le résumé</span>
              )}
            </article>

            {/* ACTUALITÉ NOVEMBRE 2025 */}
            <article
              className={`veille-card ${activeArticle === 2 ? "is-active" : "is-collapsed"}`}
              onClick={(e) => toggleArticle(2, e)}
            >
              <div className="card-header">
                <p className="veille-date">Novembre 2025</p>
                <h2>Le recrutement à l'heure de la transparence et de l'IA</h2>
              </div>
              <div className="card-content">
                <p>
                  Le recrutement entre dans une ère de "bureautique avancée" où
                  l'IA devient un assistant quotidien pour rédiger des offres et
                  structurer les entretiens. Chez Hellowork, l'IA amplifie la
                  relation plutôt que de la remplacer, captant des signaux
                  d'expérience au-delà du simple CV.
                </p>
                <p>
                  Parallèlement, des initiatives pédagogiques montrent que l'IA
                  peut être un assistant d'écriture créative efficace, à
                  condition de former les élèves à formuler des consignes
                  précises (prompts) et à garder la maîtrise du contenu. L'enjeu
                  de 2026 est double : intégrer ces outils pour gagner en
                  productivité tout en répondant aux nouvelles normes
                  européennes de transparence salariale.
                </p>
                <p>
                  <a
                    href="https://www.helloworkplace.fr/les-grands-enjeux-du-recrutement-en-2026/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source 1
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://www.cafepedagogique.net/2025/11/24/christelle-lacroix-faire-de-lia-un-assistant-decriture-creative/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source 2
                  </a>
                </p>
              </div>
              {activeArticle !== 2 && (
                <span className="read-more">Cliquez pour lire le résumé</span>
              )}
            </article>

            {/* ACTUALITÉ OCTOBRE 2025 */}
            <article
              className={`veille-card ${activeArticle === 4 ? "is-active" : "is-collapsed"}`}
              onClick={(e) => toggleArticle(4, e)}
            >
              <div className="card-header">
                <p className="veille-date">Octobre 2025</p>
                <h2>
                  IA & Emploi : Vers une automatisation des "Cols Blancs"
                </h2>
              </div>
              <div className="card-content">
                <h3>
                  Le diagnostic : Une menace directe sur les fonctions
                  qualifiées
                </h3>
                <p>
                  En octobre 2025, le débat sur l'IA au travail franchit une
                  étape critique. Dario Amodei (Anthropic) alerte sur une
                  possible disparition de{" "}
                  <strong>50 % des emplois de "cols blancs" débutants</strong>,
                  projetant un chômage sectoriel de 10 à 20 % d'ici 5 ans.
                  OpenAI confirme cette tendance avec l'outil{" "}
                  <strong>GDPval</strong>, qui démontre que l'IA peut déjà
                  accomplir des tâches complexes (analyses financières, rapports
                  juridiques, logistique) avec un niveau de performance
                  équivalent à un humain ayant{" "}
                  <strong>14 ans d'expérience</strong>.
                </p>

                <h3>La Génération Z en première ligne</h3>
                <p>
                  Le marché subit une réduction drastique des "jobs d'entrée"
                  (call centers, support, vente), privant les jeunes diplômés
                  des portes d'accès traditionnelles pour gravir les échelons.
                  Steve Preston (Goodwill) souligne une situation alarmante :
                  les entreprises remplacent les postes juniors par
                  l'automatisation, créant un <strong>chômage global</strong>{" "}
                  pour les nouveaux arrivants. Si certains économistes nuancent
                  ce constat par le manque de maturité reproché à la Gen Z, la
                  montée en compétence des IA rend les travailleurs diplômés de
                  plus en plus vulnérables à court terme.
                </p>

                <h3>
                  Les leviers de résilience : Droits sociaux et compétences
                  numériques
                </h3>
                <p>
                  Face à ce "pari de croissance" des employeurs, les
                  représentants syndicaux insistent sur le fait que les salariés
                  ne doivent pas subir l'outil. La valorisation des travailleurs
                  et l'autonomie restent les seuls vrais moteurs de productivité
                  durable. L'enjeu se déplace vers deux axes majeurs :
                </p>
                <ul>
                  <li>
                    <strong>La régulation sociale :</strong> Imposer la
                    consultation et la formation pour éviter que l'IA ne soit un
                    outil d'aliénation.
                  </li>
                  <li>
                    <strong>La maîtrise technique :</strong> Il ne suffit plus
                    d'être "né avec un smartphone". La véritable compétence
                    réside dans le pilotage des outils d'IA en entreprise.
                  </li>
                </ul>

                <h3>Conclusion de l'analyse</h3>
                <p>
                  L'IA n'est plus un simple gadget de résumé de texte, mais un
                  moteur capable d'enchaîner des missions professionnelles
                  complètes. Pour les jeunes actifs, la solution ne réside pas
                  dans la lutte contre la technologie, mais dans une{" "}
                  <strong>acculturation profonde</strong> aux outils numériques
                  avancés pour transformer la menace de remplacement en
                  opportunité de collaboration homme-machine.
                </p>

                <p className="source-links-article">
                  <a
                    href="https://www.humanite.fr/en-debat/conditions-de-travail/avons-nous-besoin-de-lintelligence-artificielle-dans-le-travail-2-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source 1
                  </a>{" "}
                  |
                  <a
                    href="https://www.radiofrance.fr/franceinfo/podcasts/nouveau-monde/ces-metiers-concurrences-ou-remplaces-par-l-ia-comment-anticiper-2771974"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source 2
                  </a>{" "}
                  |
                  <a
                    href="https://www.jeuxvideo.com/news/2034830/cet-expert-du-marche-du-travail-alerte-l-ia-aura-des-consequences-catastrophiques-sur-la-generation-z.htm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source 3
                  </a>
                </p>
              </div>
              {activeArticle !== 4 && (
                <span className="read-more">
                  Cliquez pour lire l'analyse complète
                </span>
              )}
            </article>

            {/* ACTUALITÉ SEPTEMBRE 2025 */}
            <article
              className={`veille-card ${activeArticle === 5 ? "is-active" : "is-collapsed"}`}
              onClick={(e) => toggleArticle(5, e)}
            >
              <div className="card-header">
                <p className="veille-date">Septembre 2025</p>
                <h2>
                  Le "Canari dans la mine" : Pourquoi l'IA cible prioritairement
                  les 22-25 ans
                </h2>
              </div>
              <div className="card-content">
                <h3>Le constat : Une préférence patronale pour les robots</h3>
                <p>
                  Une étude de <em>CensusWide</em> révèle un chiffre choc :{" "}
                  <strong>52 % des employeurs français</strong> préfèrent
                  désormais former une IA plutôt que d'embaucher un jeune
                  diplômé. Ce choix, motivé par une rentabilité immédiate,
                  frappe particulièrement les secteurs de la finance, de
                  l'architecture et de l'ingénierie. En France comme aux
                  États-Unis, les recruteurs jugent les IA plus
                  "opérationnelles" que des juniors dont les compétences
                  théoriques sont perçues comme devenant rapidement obsolètes
                  face aux cycles technologiques.
                </p>

                <h3>L'expérience comme bouclier générationnel</h3>
                <p>
                  Une analyse de l'Université de Stanford, basée sur les données
                  de paie de millions de travailleurs (ADP), confirme cette
                  cassure. Tandis que l'emploi global progresse, les
                  opportunités pour les 22-25 ans{" "}
                  <strong>stagnent ou chutent de 6 %</strong> dans les métiers
                  exposés à l'IA (développement, service client). À l'inverse,
                  les profils expérimentés bénéficient d'un "bouclier anti-IA" :
                  leurs <strong>connaissances tacites</strong> et leur
                  intelligence relationnelle accumulées sur le terrain restent,
                  pour l'instant, impossibles à modéliser pour les algorithmes.
                  L'IA excelle à reproduire le savoir académique des débutants,
                  mais échoue à remplacer l'intuition des vétérans.
                </p>

                <h3>
                  La réponse : Vers des profils "hybrides" et le Skill Stacking
                </h3>
                <p>
                  Face à l'effondrement du modèle classique "diplôme = emploi",
                  une nouvelle stratégie émerge : le{" "}
                  <strong>Skill Stacking</strong> (empilement de compétences).
                  Pour se démarquer, le jeune actif ne doit plus être un
                  spécialiste étroit, mais un profil hybride capable de combiner
                  :
                </p>
                <ul>
                  <li>
                    <strong>Culture numérique :</strong> Maîtriser le prompt
                    engineering et les outils no-code.
                  </li>
                  <li>
                    <strong>Intelligence humaine :</strong> Développer
                    l'empathie, la pensée critique et l'éthique, là où l'IA
                    reste une simple machine à statistiques.
                  </li>
                  <li>
                    <strong>Esprit entrepreneurial :</strong> Savoir détecter
                    des opportunités et résoudre des problèmes complexes de
                    manière créative.
                  </li>
                </ul>

                <h3>
                  Conclusion : L'IA comme amplificateur, non comme remplaçant
                </h3>
                <p>
                  L'étude de Stanford apporte une lueur d'espoir : dans les
                  secteurs où l'IA est utilisée pour <strong>augmenter</strong>{" "}
                  l'humain (aide à la décision, optimisation) et non pour le
                  remplacer, l'emploi des jeunes continue de croître. L'enjeu
                  pour la nouvelle génération est de passer du statut de
                  "concurrencé par l'IA" à celui de "pilote de l'IA", en misant
                  sur des facultés que les machines ne possèdent pas : inspirer,
                  convaincre et bâtir une culture d'entreprise.
                </p>

                <p className="source-links-article">
                  <a
                    href="https://www.lejournaleconomique.com/2025/09/06/la-france-sacrifie-sa-jeunesse-sur-lautel-de-lia-52-des-employeurs-preferent-former-des-robots-plutot-quembaucher-des-diplomes-qui-deviennent-obsoletes/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source 1
                  </a>{" "}
                  |
                  <a
                    href="https://www.forbes.fr/societe/preparer-son-avenir-dans-un-monde-domine-par-lia-mode-demploi-pour-les-ados/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source 2
                  </a>{" "}
                  |
                  <a
                    href="https://www.lesechos.fr/travailler-mieux/vie-au-travail/lia-ne-vole-pas-votre-emploi-sauf-si-vous-avez-moins-de-25-ans-2184798"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source 3
                  </a>
                </p>
              </div>
              {activeArticle !== 5 && (
                <span className="read-more">
                  Cliquez pour lire l'analyse complète
                </span>
              )}
            </article>
          </div>

          <button
            className="carousel-btn right"
            onClick={() => {
              document
                .querySelector("#carousel-ia")
                .scrollBy({ left: 500, behavior: "smooth" });
            }}
          >
            ▶
          </button>
        </div>
      </section>

      <hr className="veille-separator" />


    </main>
  );
}
