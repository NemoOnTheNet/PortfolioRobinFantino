/* eslint-disable react/no-unescaped-entities */
import "./Curriculum.css";
function Curriculum() {
  return (
    <div id="Curriculum">
      <main id="mainCurriculum">
        <img
          id="pictureOfMe"
          src="./assets/Robin_Fantino.jpeg"
          alt="photo de Robin Fantino"
        />
        <section id="about" className="curriculumMainSection">
          <h1>À propos de moi</h1>
          <p>
            Après une licence STAPS (Sciences et Techniques des Activités
            Physiques et Sportives), j'ai eu l'opportunité de travailler chez
            Castorama dans plusieurs secteurs au fil des ans.
          </p>
          <p>
            Mais depuis longtemps faciné par les nouvelles technologies et le
            jeux vidéo, j'ai pris la décision de me reconvertir dans le
            développement web. Ce faisant j'ai entammé une formation intensive
            dans ce domaine à la Wild Code School.
          </p>
          <p>
            Cliquez ici pour consulter&nbsp;
            <a
              className="cvLink"
              href="./document/CV_Robin_Fantino.pdf"
              download="CV_Robin_Fantino.pdf">
              mon CV
            </a>
          </p>
        </section>

        <img
          id="experiencePicture"
          src="./assets/experience.png"
          alt="image correspondant à l'expérience"
        />

        <section id="experience" className="curriculumMainSection">
          <h2>Expériences Professionnelles</h2>
          <h3>Développeur web Junior - Wild Code School</h3>
          (2023-2024)
          <ul>
            <li>
              <strong>ClickTapTaupe:</strong> Création d'un clicker (jeu de
              navigateur) en HTML, CSS et JavaScript.&nbsp;
              <a
                href="https://nemoonthenet.github.io/clicTapTaupe_clicker/"
                target="_blank">
                Lien github
              </a>
            </li>
            <li>
              <strong>STYX:</strong> Création d'un site de découverte du Système
              Solaire en HTML, CSS, JavaScript, React, NodeJS et la consommation
              d'API.&nbsp;
              <a
                href="https://github.com/WildCodeSchool/2023-09-JS-Lille-blue-project-2-groupe2-stix"
                target="_blank">
                Lien github
              </a>
            </li>
            <li>
              <strong>Eating NamNam:</strong> Création d’un site de partage de
              recette avec création et gestion d'une base de donnée. Créé avec
              HTML, CSS, JavaScript, React, NodeJS, MySQL.&nbsp;
              <a
                href="https://github.com/WildCodeSchool/2022-09-JS-Lille-project-3-g3-origin"
                target="_blank">
                Lien github
              </a>
            </li>
            <li>
              <strong>MakeAPP:</strong> projet de commercial virtuel pour
              l’Oréal Paris.&nbsp;
              <a
                href="https://github.com/NemoOnTheNet/LorealSalesRepresentative"
                target="_blank">
                Lien github
              </a>
            </li>
          </ul>
          <h3>
            <strong>Vendeur puis Équipier logistique - Castorama</strong> (2017
            - 2024)
          </h3>
          <p>
            Gestion de commande client, réception des marchandises, SAV, mise en
            rayon.
          </p>
          <h3>
            <strong>Commercial sédentaire - Natural Wood</strong> (2016 - 2017)
          </h3>
          <p>
            Gestion des commandes client, lien avec l’usine de production des
            produits, gestion et suivi des livraisons en Europe.
          </p>
          <h3>
            <strong>Équipier logistique - Castorama</strong> (2015-2016)
          </h3>
          <p>Gestion de commande client, SAV, mise en rayon.</p>
        </section>

        <img
          id="diplomePicture"
          src="./assets/chapeau-de-remise-de-diplome.png"
          alt="chapeau de personne diplomée"
        />

        <section id="education">
          <h2>Formations</h2>
          <ul>
            <li className="educationItem">
              <h2>
                <strong>
                  Titre Développeur Web et Web Mobile - Wild Code School Lille
                </strong>
                (2023-2024)
              </h2>
            </li>
            <li className="educationItem">
              <h2>
                <strong>
                  Licence Staps Activité physique adaptée - Fssep Lille
                </strong>
                (2014)
              </h2>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Curriculum;
