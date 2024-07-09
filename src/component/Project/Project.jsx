/* eslint-disable react/prop-types */
import "./Project.css";
function Project({ title, siteImg, projectName, description, githubLink }) {
  return (
    <section className="projectCard" id={projectName}>
      <img src={siteImg} alt={projectName} />
      <div>
        <h1>{title} </h1>
        <p>{description} </p>
        <a href={githubLink} target="blank">
          Lien github
        </a>
      </div>
    </section>
  );
}

export default Project;
