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
                    block: "nearest"
                });
            }, 300);
        }
    };

    return (
        <main className="veille-page my-theme">

            {/* HEADER */}
            <section className="veille-header" data-aos="fade-down">
                <h1>Veille Technologique — Cybersécurité</h1>
                <p className="veille-intro">
                    Exploration des menaces émergentes, des solutions de défense et des évolutions stratégiques du SI.
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

            <h2 className="section-subtitle center" data-aos="fade-up">Analyses & Articles</h2>

            {/* CARROUSEL */}
            <div className="veille-carousel-container" data-aos="fade-up">
                <button className="carousel-btn left" onClick={() => {
                    document.querySelector(".veille-carousel").scrollBy({ left: -500, behavior: "smooth" });
                }}>◀</button>

                <div className="veille-carousel">

                    {/* === ARTICLE 1 === */}
                    <article 
                        className={`veille-card ${activeArticle === 1 ? "is-active" : "is-collapsed"}`} 
                        onClick={(e) => toggleArticle(1, e)}
                    >
                        <div className="card-header">
                            <h2>Attaque DDoS record : 15,72 Tbps contrés par Azure</h2>
                            <p className="veille-date">18 novembre 2025</p>
                        </div>
                        
                        <div className="card-content">
                            <p>Microsoft a révélé avoir arrêté la plus grande attaque DDoS jamais enregistrée : 
                            <strong> 15,72 Tbps </strong> provenant du botnet Aisuru, une variante de Turbo Mirai infectant plus de 
                            <strong> 500 000 appareils IoT </strong>.</p>
                            
                            <p>Avec plus de <strong>3,64 milliards de paquets par seconde</strong>, la charge visait une région Azure en Australie. Le botnet s’est propagé via une mise à jour corrompue de routeurs TotoLink au printemps 2025.</p>

                            <h3>Un botnet en expansion</h3>
                            <p>Aisuru contrôle plus de 500 000 adresses IP, générant un trafic équivalent à « un million de vidéos 4K simultanées ». Sa croissance illustre la fragilité persistante des objets connectés.</p>

                            <h3>La réaction d’Azure</h3>
                            <p>Azure a automatiquement activé ses mécanismes de mitigation : filtrage, redirection du trafic et maintien de la disponibilité des services.</p>

                            <h3>Tendance inquiétante</h3>
                            <p>Cloudflare note une hausse de <strong>358% des attaques DDoS</strong> en un an.</p>

                            <h3>Conclusion</h3>
                            <p>L’incident illustre la nécessité pour les entreprises d’investir dans des solutions anti-DDoS robustes.</p>
                        </div>
                        {activeArticle !== 1 && <span className="read-more">Cliquez pour lire l'analyse</span>}
                    </article>

                    {/* === ARTICLE 2 === */}
                    <article 
                        className={`veille-card ${activeArticle === 2 ? "is-active" : "is-collapsed"}`} 
                        onClick={(e) => toggleArticle(2, e)}
                    >
                        <div className="card-header">
                            <h2>64 % des entreprises EMEA prennent des raccourcis risqués</h2>
                            <p className="veille-date">9 octobre 2025</p>
                        </div>
                        
                        <div className="card-content">
                            <p>Une étude d’Insight Enterprises révèle que <strong>64 % des entreprises EMEA</strong> reconnaissent adopter des solutions temporaires et des raccourcis risqués pour maintenir leur sécurité, faute de compétences cyber suffisantes.</p>

                            <p>En France, <strong>75 % des organisations</strong> manquent de compétences en cybersécurité et plus d’un tiers subissent un impact « grave » ou « significatif ».</p>

                            <h3>Tension maximale sur les compétences</h3>
                            <p>En Europe, <strong>76 % des organisations</strong> sont touchées par la pénurie cyber, et 47 % reconnaissent des impacts opérationnels graves.</p>

                            <h3>Des DSI et RSSI sous pression</h3>
                            <p>L’explosion des architectures hybrides, la complexité des outils, les réglementations croissantes et l’intégration de l’IA bousculent les équipes.</p>

                            <h3>Le recours massif aux MSSP</h3>
                            <p><strong>75 % des organisations</strong> font déjà appel à des fournisseurs de services managés (MSSP), et près de la moitié externalise plus de 50 % de leurs opérations cyber.</p>

                            <h3>L’IA : une alliée, pas un substitut</h3>
                            <p>Seulement <strong>20 %</strong> des organisations ont intégré l’IA avancée. La confiance reste limitée à cause du manque de transparence.</p>

                            <h3>Une crise stratégique</h3>
                            <p>La cybersécurité n’est plus une simple fonction IT : elle doit devenir un pilier stratégique de gouvernance.</p>
                        </div>
                        {activeArticle !== 2 && <span className="read-more">Cliquez pour lire l'analyse</span>}
                    </article>

                    {/* === ARTICLE 3 === */}
                    <article 
                        className={`veille-card ${activeArticle === 3 ? "is-active" : "is-collapsed"}`} 
                        onClick={(e) => toggleArticle(3, e)}
                    >
                        <div className="card-header">
                            <h2>AITSM : L’arrivée des LLM et de l’Agentic AI</h2>
                            <p className="veille-date">10 septembre 2025</p>
                        </div>
                        
                        <div className="card-content">
                            <p>L’intégration de l’IA dans l’ITSM franchit un cap majeur avec les <strong>LLM</strong> et l’<strong>Agentic AI</strong>. L’objectif : transformer le modèle même du support IT.</p>

                            <h3>Une rupture au-delà de l’automatisation</h3>
                            <p>Désormais, les IA génératives comprennent le contexte, dialoguent en langage naturel et proposent des actions précises.</p>
                            <p>Avec l’Agentic AI, les systèmes passeront à des capacités d’action autonome : exécution de workflows et remédiation proactive.</p>

                            <h3>Impact opérationnel et humain</h3>
                            <p>Les bénéfices sont majeurs :<br />
                            – réduction des tickets via l’auto-résolution,<br />
                            – assistants virtuels pour demandes complexes,<br />
                            – amélioration de la continuité métier via la prévention.</p>

                            <h3>Vers un IT auto-réparateur</h3>
                            <p>Avec l’Agentic AI, l’IT devient auto-réparateur et apprenant : détection, analyse, correction et validation automatique.</p>

                            <h3>Une mutation culturelle</h3>
                            <p>L’IA augmente l’impact humain et recentre la DSI sur la valeur métier et la performance stratégique.</p>
                        </div>
                        {activeArticle !== 3 && <span className="read-more">Cliquez pour lire l'analyse</span>}
                    </article>

                </div>

                <button className="carousel-btn right" onClick={() => {
                    document.querySelector(".veille-carousel").scrollBy({ left: 500, behavior: "smooth" });
                }}>▶</button>
            </div>
        </main>
    );
}