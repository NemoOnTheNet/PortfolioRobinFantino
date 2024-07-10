/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import AboutMe from "../component/AboutMe/AboutMe";
import "./Accueil.css";
function Accueil() {
  return (
    <div id="Accueil">
      <AboutMe />
      <main id="mainHome">
        <section className="mainSection" id="monParcours">
          <h3 className="mainH3">Mon parcours</h3>
          <p>
            Après une licence STAPS et plusieurs années à travailler dans la
            grande distribution du bricolage, j'ai souhaité me reconvertir dans
            ce qui me passionne bien plus : le développement.
          </p>

          <p>
            C'est ainsi que j'ai commencé une formation intensive à la Wild Code
            School de Lille et, ayant obtenu le titre de Développeur Web et Web
            Mobile, j'ai poursuivi ma formation en autodidacte.
          </p>
          <Link to={`/curriculum`} className="mainSectionLink">
            Voir mon profil et CV
          </Link>
        </section>

        <section className="mainSection" id="mesProjets">
          <h3 className="mainH3">Mes différents projets</h3>
          <p>
            Durant ma formation à la Wild Code School et grâce à mes projets
            personnels, j'ai pu faire l'expérience du développement web et ainsi
            obtenir de solides connaissances dans le domaine.
          </p>
          <p>
            Vous trouverez en cliquant sur le lien ci-dessous les projets
            mentionnés.
          </p>
          <Link to={`/projet`}>Voir mes projets</Link>
        </section>
      </main>
    </div>
  );
}

export default Accueil;
