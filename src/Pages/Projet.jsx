import projets from "../Project.json";
import Project from "../component/Project/Project";

import "./Projet.css";
function Projet() {
  return (
    <main className="projectMain">
      <section className="projectSection">
        {projets.map((proj) => (
          <Project
            key={proj.id}
            title={proj.title}
            siteImg={proj.siteImg}
            projectName={proj.projectName}
            description={proj.description}
          />
        ))}
      </section>
    </main>
  );
}

export default Projet;
