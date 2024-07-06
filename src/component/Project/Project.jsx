/* eslint-disable react/prop-types */
import "./Project.css";
function Project({ title, siteImg, projectName, description }) {
  return (
    <section className="projectCard" id={projectName}>
      <img src={siteImg} alt={projectName} />
      <div>
        <h1>{title} </h1>
        <p>{description} </p>
      </div>
    </section>
  );
}

export default Project;
