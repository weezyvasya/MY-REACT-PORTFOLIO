import { projectsList } from "../../helpers/projectsList";
import { NavLink } from "react-router-dom";
import ProjectCards from "../../Components/ProjectCards/ProjectCards";
import "./Projects.css";

function Projects() {
  return (
    <main className="projects-wrapper">
      <h1 className="projects-header">Мои проекты</h1>
      <div className="projects-container">
        {projectsList.map((project, index) => (
          <div className="project-item" key={project.name}>
            <NavLink to={`/project/${index}`} className="project-link">
              <ProjectCards project={project} />
            </NavLink>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Projects;
