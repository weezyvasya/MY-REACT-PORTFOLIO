import { projectsList } from "../../helpers/projectsList";
import { NavLink } from "react-router-dom";
import ProjectCards from "../../Components/ProjectCards/ProjectCards";
import "./Projects.css";

// function Projects() {
//   return (
//     <>
//       <div className="projects-container">
//         {projectsList.map((card, ind) => (
//           <NavLink key={card.name} to={`/project/${ind}`}>
//             <ProjectCards project={card} />
//           </NavLink>
//         ))}
//       </div>
//     </>
//   );
// }

function Projects() {
  return (
    <>
      <div className="projects-container">
        {projectsList.map((card, ind) => (
          <div className="project-card-wrapper" key={card.name}>
            <NavLink to={`/project/${ind}`}>
              <ProjectCards project={card} />
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
