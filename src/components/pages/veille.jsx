import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../assets/veille.css";
import "../../assets/maincolors.css";

export default function Veille() {

    useEffect(() => {
        AOS.init({ duration: 800 });
        document.title = "Veille | Jules Vannelli";
    }, []);

    return (
        <main className="veille-page my-theme">

            {/* HEADER */}
            <section className="veille-header" data-aos="fade-down">
                <h1>Veille Technologique — Cybersécurité</h1>
                <p className="veille-intro">
                    Voici les différents sujets de veille que je suis régulièrement en cybersécurité.
                    Une présentation claire, synthétique et actualisée.
                </p>
            </section>

            {/* CARROUSEL */}
            <div className="veille-carousel-container">

                {/* BOUTONS */}
                <button className="carousel-btn left" onClick={() => {
                    document.querySelector(".veille-carousel").scrollBy({ left: -500, behavior: "smooth" });
                }}>
                    ◀
                </button>

                <div className="veille-carousel">

                    {/* === VEILLE 1 === */}
                    <article className="veille-card" data-aos="fade-up">
                        <h2>Attaque DDoS record : 15,72 Tbps contrés par Azure</h2>
                        <p className="veille-date">18 novembre 2025</p>

                        <p>
                            Microsoft a révélé avoir arrêté la plus grande attaque DDoS jamais enregistrée :
                            <strong> 15,72 Tbps </strong>
                            provenant du botnet Aisuru, une variante de Turbo Mirai infectant plus de
                            <strong> 500 000 appareils IoT </strong>.
                        </p>

                        <p>
                            Avec plus de <strong>3,64 milliards de paquets par seconde</strong>,
                            la charge visait une région Azure en Australie. Le botnet s’est propagé via une
                            mise à jour corrompue de routeurs TotoLink au printemps 2025.
                        </p>

                        <h3>Un botnet en expansion</h3>
                        <p>
                            Aisuru contrôle plus de 500 000 adresses IP, générant un trafic équivalent à
                            « un million de vidéos 4K simultanées ». Sa croissance illustre la fragilité
                            persistante des objets connectés.
                        </p>

                        <h3>La réaction d’Azure</h3>
                        <p>
                            Azure a automatiquement activé ses mécanismes de mitigation : filtrage,
                            redirection du trafic et maintien de la disponibilité des services.
                        </p>

                        <h3>Tendance inquiétante</h3>
                        <p>
                            Cloudflare note une hausse de <strong>358% des attaques DDoS</strong> en un an.
                        </p>

                        <h3>Conclusion</h3>
                        <p>
                            L’incident illustre la nécessité pour les entreprises d’investir dans des solutions
                            anti-DDoS robustes.
                        </p>
                    </article>


                    {/* === VEILLE 2 (NOUVEL ARTICLE) === */}
                    <article className="veille-card" data-aos="fade-up">
                        <h2>64 % des entreprises EMEA prennent des raccourcis risqués face à la pénurie cyber</h2>
                        <p className="veille-date">9 octobre 2025</p>

                        <p>
                            Une étude d’Insight Enterprises révèle que <strong>64 % des entreprises EMEA</strong>
                            reconnaissent adopter des solutions temporaires et des raccourcis risqués pour maintenir leur sécurité,
                            faute de compétences cyber suffisantes.
                        </p>

                        <p>
                            En France, <strong>75 % des organisations</strong> manquent de compétences en cybersécurité
                            et plus d’un tiers subissent un impact « grave » ou « significatif ».
                            Le problème dépasse la simple technique : gouvernance faible, manque de leadership,
                            absence de feuille de route claire et priorisation défaillante aggravent l’exposition.
                        </p>

                        <h3>Tension maximale sur les compétences</h3>
                        <p>
                            En Europe, <strong>76 % des organisations</strong> sont touchées par la pénurie cyber,
                            et 47 % reconnaissent des impacts opérationnels graves.
                            Retards, arbitrages défavorables et exposition accrue deviennent la norme.
                        </p>

                        <h3>Des DSI et RSSI sous pression</h3>
                        <p>
                            L’explosion des architectures hybrides, la complexité des outils, les réglementations
                            croissantes et l’intégration de l’IA bousculent les équipes, déjà en sous-effectif.
                        </p>

                        <p>
                            Le coût des experts, la rareté des profils et la difficulté de formation poussent
                            certaines organisations à « faire au plus vite », au détriment de la conformité.
                        </p>

                        <h3>Le recours massif aux MSSP</h3>
                        <p>
                            <strong>75 % des organisations</strong> font déjà appel à des fournisseurs de services managés (MSSP),
                            et près de la moitié externalise plus de 50 % de leurs opérations cyber.
                            Les objectifs : expertise 24/7, montée en compétence rapide, résilience accrue.
                        </p>

                        <h3>L’IA : une alliée, pas un substitut</h3>
                        <p>
                            Seulement <strong>20 %</strong> des organisations ont intégré l’IA avancée,
                            et 7 % ont des systèmes autonomes à grande échelle.
                            La confiance reste limitée à cause du manque de transparence et des risques de biais.
                        </p>

                        <h3>Une crise stratégique</h3>
                        <p>
                            La cybersécurité n’est plus une simple fonction IT : elle doit devenir
                            un pilier stratégique de gouvernance.
                            Les organisations doivent investir dans des compétences clés, structurer
                            leurs partenariats et intégrer la cybersécurité dans leurs objectifs métiers.
                        </p>
                    </article>

                    {/* === VEILLE 3 (NOUVEL ARTICLE) === */}
                    <article className="veille-card" data-aos="fade-up">
                        <h2>AITSM : L’arrivée des LLM et de l’Agentic AI transforme le support IT</h2>
                        <p className="veille-date">Article antérieur</p>

                        <p>
                            Alors que les organisations font face à un volume croissant d’incidents
                            et à une complexité numérique sans précédent, l’intégration de l’IA dans
                            l’ITSM franchit un cap majeur avec les <strong>LLM</strong> et
                            l’<strong>Agentic AI</strong>. L’objectif ne se limite plus à automatiser :
                            il s’agit désormais de transformer le modèle même du support IT.
                        </p>

                        <h3>Une rupture au-delà de l’automatisation</h3>
                        <p>
                            L’ITSM traditionnel reposait sur des processus réactifs. L’AITSM de 1ʳᵉ
                            génération a accéléré la classification et le routage via le machine learning.
                            Désormais, les IA génératives comprennent le contexte, dialoguent en langage
                            naturel et proposent des actions précises.
                        </p>

                        <p>
                            Avec l’Agentic AI, les systèmes ITSM passeront à des capacités d’action autonome :
                            exécution de workflows complexes, anticipation des demandes et remédiation
                            proactive sans intervention humaine directe.
                        </p>

                        <h3>Impact opérationnel et humain</h3>
                        <p>
                            Les bénéfices sont majeurs :
                            <br />– réduction des tickets grâce à l’auto-résolution,
                            <br />– assistants virtuels capables de gérer des demandes complexes,
                            <br />– amélioration de la continuité métier via la prévention.
                        </p>

                        <p>
                            L’humain retrouve un rôle stratégique : moins d’exécution, plus
                            d’analyse, d’arbitrage et d’innovation.
                        </p>

                        <h3>Un nouvel écosystème de compétences</h3>
                        <p>
                            L’arrivée des LLM et de l’Agentic AI impose une nouvelle gouvernance :
                            qualité des données, sécurité des modèles, supervision des actions autonomes.
                            La DSI devient un partenaire stratégique de la transformation numérique.
                        </p>

                        <h3>Vers un IT auto-réparateur</h3>
                        <p>
                            Les systèmes basés sur les LLM rendent l’ITSM conversationnel.
                            Avec l’Agentic AI, l’IT devient auto-réparateur et apprenant :
                            détection, analyse, correction, validation… et notification automatique.
                        </p>

                        <p>
                            Les frontières entre ITSM, ITOM et AIOps s’effacent, au profit d’un
                            pilotage unifié, intelligent et prédictif.
                        </p>

                        <h3>Une mutation culturelle</h3>
                        <p>
                            L’AITSM ne se résume pas à un outil : c’est une transformation culturelle.
                            Confiance dans l’autonomie, gouvernance claire, montée en compétences…
                            L’IA augmente l’impact humain et recentre la DSI sur la valeur métier.
                        </p>

                        <h3>Conclusion</h3>
                        <p>
                            L’AITSM avec LLM et Agentic AI marque un changement de paradigme :
                            le support IT devient une fonction intelligente, autonome et stratégique,
                            orientée vers la performance et la continuité opérationnelle.
                        </p>
                    </article>


                </div>


                <button className="carousel-btn right" onClick={() => {
                    document.querySelector(".veille-carousel").scrollBy({ left: 500, behavior: "smooth" });
                }}>
                    ▶
                </button>

            </div>
        </main>
    );
}
