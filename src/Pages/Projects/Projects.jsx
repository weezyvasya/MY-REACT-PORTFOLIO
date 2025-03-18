import { projectsList } from "../../helpers/projectsList";
import { NavLink } from "react-router-dom";
import ProjectCards from "../../Components/ProjectCards/ProjectCards";
import './Projects.css'

function Projects() {
    return ( 
        <>
          <div className="projects-container">   
            {projectsList.map((p, ind) => <NavLink className="project-card" key={p.name} to={`/project/${ind}`}>
            {/* <div>{p.name}</div>
            <div>{p.description}</div> */}
            <ProjectCards project={p} />
            </NavLink>)} 
          </div> 
        </> 
        
        
    );
}

export default Projects;