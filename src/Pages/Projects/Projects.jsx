import { projectsList } from "../../helpers/projectsList";
import { NavLink } from "react-router-dom";
import './Projects.css'

function Projects() {
    return ( 
        <>
          <div className="projects-container">   
            {projectsList.map((p, ind) => <NavLink className="project-card" key={p.name} to={`/project/${ind}`}>
            <div>{p.name}</div>
            </NavLink>)} 
          </div> 
        </> 
        
        
    );
}

export default Projects;